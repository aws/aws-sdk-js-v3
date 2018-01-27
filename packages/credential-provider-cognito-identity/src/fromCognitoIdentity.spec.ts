import { fromCognitoIdentity } from './fromCognitoIdentity';
import { ProviderError } from '@aws/property-provider';
import {
    GetCredentialsForIdentityCommand,
} from '@aws/sdk-cognito-identity-browser/commands/GetCredentialsForIdentityCommand';

describe('fromCognitoIdentity', () => {
    const IdentityId = 'id';
    const expiration = new Date();
    const send = jest.fn(() => Promise.resolve({
        Credentials: {
            AccessKeyId: 'foo',
            SecretKey: 'bar',
            SessionToken: 'baz',
            Expiration: expiration,
        },
        IdentityId,
    }));
    const mockClient: any = {send};

    beforeEach(() => {
        send.mockClear();
    });

    it(
        'should execute a GetCredentialsForIdentity command and convert the result',
        async () => {
            expect(
                await fromCognitoIdentity({
                    Client: mockClient,
                    IdentityId,
                    CustomRoleArn: 'myArn',
                })()
            ).toEqual({
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
                sessionToken: 'baz',
                expiration: Math.floor(expiration.valueOf() / 1000),
            });

            expect(send.mock.calls[0][0]).toEqual(
                new GetCredentialsForIdentityCommand({
                    IdentityId,
                    CustomRoleArn: 'myArn'
                })
            );
        }
    );

    it(
        'should resolve logins to string tokens and pass them to the service',
        async () => {
            await fromCognitoIdentity({
                Client: mockClient,
                IdentityId,
                CustomRoleArn: 'myArn',
                Logins: {
                    myDomain: 'token',
                    'www.amazon.com': () => Promise.resolve('expiring nonce'),
                }
            })()

            expect(send.mock.calls[0][0]).toEqual(
                new GetCredentialsForIdentityCommand({
                    IdentityId,
                    CustomRoleArn: 'myArn',
                    Logins: {
                        myDomain: 'token',
                        'www.amazon.com': 'expiring nonce',
                    },
                })
            );
        }
    );

    it(
        'should convert a GetCredentialsForIdentity response without credentials to a provider error',
        async () => {
            send.mockImplementationOnce(() => Promise.resolve({IdentityId}));

            await expect(fromCognitoIdentity({
                Client: mockClient,
                IdentityId,
                CustomRoleArn: 'myArn',
            })())
                .rejects
                .toMatchObject(new ProviderError(
                    'Response from Amazon Cognito contained no credentials'
                ));
        }
    );

    it(
        'should convert a GetCredentialsForIdentity response without an access key ID to a provider error',
        async () => {
            send.mockImplementationOnce(() => Promise.resolve({
                Credentials: { SecretKey: 'bar' },
                IdentityId
            }));

            await expect(fromCognitoIdentity({
                Client: mockClient,
                IdentityId,
                CustomRoleArn: 'myArn',
            })())
                .rejects
                .toMatchObject(new ProviderError(
                    'Response from Amazon Cognito contained no access key ID'
                ));
        }
    );

    it(
        'should convert a GetCredentialsForIdentity response without a secret key to a provider error',
        async () => {
            send.mockImplementationOnce(() => Promise.resolve({
                Credentials: { AccessKeyId: 'foo' },
                IdentityId
            }));

            await expect(fromCognitoIdentity({
                Client: mockClient,
                IdentityId,
                CustomRoleArn: 'myArn',
            })())
                .rejects
                .toMatchObject(new ProviderError(
                    'Response from Amazon Cognito contained no secret key'
                ));
        }
    );
});
