import { fromCognitoIdentityPool } from './fromCognitoIdentityPool';
import { ProviderError } from '@aws/property-provider';
import {
    GetIdCommand,
} from '@aws/sdk-cognito-identity-browser/commands/GetIdCommand';

jest.mock('./fromCognitoIdentity', () => {
    const promiseFunc = jest.fn(() => Promise.resolve({
        accessKeyId: 'foo',
        secretAccessKey: 'bar',
        sessionToken: 'baz',
        expiration: 946684800,
    }));
    return { fromCognitoIdentity: jest.fn(() => promiseFunc) };
});
import { fromCognitoIdentity } from './fromCognitoIdentity';

describe('fromCognitoIdentityPool', () => {
    const IdentityPoolId = 'poolId';
    const IdentityId = 'id';
    const send = jest.fn(() => Promise.resolve({ IdentityId }));
    const mockClient: any = {send};

    beforeEach(() => {
        send.mockClear();
        (fromCognitoIdentity({} as any) as any).mockClear();
        (fromCognitoIdentity as any).mockClear();
    });

    it(
        'should execute a GetId command and then invoke fromCognitoIdentity with the result',
        async () => {
            expect(
                await fromCognitoIdentityPool({
                    Client: mockClient,
                    IdentityPoolId,
                    CustomRoleArn: 'myArn',
                })()
            ).toEqual({
                accessKeyId: 'foo',
                secretAccessKey: 'bar',
                sessionToken: 'baz',
                expiration: 946684800,
            });

            expect(send.mock.calls.length).toBe(1);
            expect(send.mock.calls[0][0]).toEqual(
                new GetIdCommand({ IdentityPoolId })
            );

            expect((fromCognitoIdentity as any).mock.calls.length).toBe(1);
            expect((fromCognitoIdentity as any).mock.calls[0][0]).toEqual({
                Client: mockClient,
                CustomRoleArn: 'myArn',
                IdentityId,
            });
        }
    );

    it(
        'should resolve logins to string tokens and pass them to the service',
        async () => {
            await fromCognitoIdentityPool({
                Client: mockClient,
                IdentityPoolId,
                Logins: {
                    myDomain: 'token',
                    'www.amazon.com': () => Promise.resolve('expiring nonce'),
                }
            })();

            expect(send.mock.calls[0][0]).toEqual(
                new GetIdCommand({
                    IdentityPoolId,
                    Logins: {
                        myDomain: 'token',
                        'www.amazon.com': 'expiring nonce',
                    },
                })
            );
        }
    );

    it(
        'should not invoke GetId a second time once an identityID has been fetched',
        async () => {
            const provider = fromCognitoIdentityPool({
                Client: mockClient,
                IdentityPoolId,
                CustomRoleArn: 'myArn',
            });

            await provider();

            // One GetId command should have been executed, followed by an
            // invocation of fromCognitoIdentity
            expect(send.mock.calls.length).toBe(1);
            expect((fromCognitoIdentity as any).mock.calls.length).toBe(1);

            for (let i = 0; i < 10; i++) {
                expect(await provider()).toEqual({
                    accessKeyId: 'foo',
                    secretAccessKey: 'bar',
                    sessionToken: 'baz',
                    expiration: 946684800,
                });
            }

            // GetId should not have been called again, but each call of the
            // provider should invoke fromCognitoIdentity
            expect(send.mock.calls.length).toBe(1);
            expect(
                (fromCognitoIdentity({} as any) as any).mock.calls.length
            ).toBe(11);
        }
    );

    it(
        'should convert a GetId response without an ID to a provider error',
        async () => {
            send.mockImplementationOnce(() => Promise.resolve({}));

            await expect(fromCognitoIdentityPool({
                AccountId: 'myAccountId',
                Client: mockClient,
                IdentityPoolId,
            })())
                .rejects
                .toMatchObject(new ProviderError(
                    'Response from Amazon Cognito contained no identity ID'
                ));
        }
    );
});
