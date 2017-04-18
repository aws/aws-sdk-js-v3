jest.mock('fs');
jest.mock('os');

const {__addMatcher, __clearMatchers} = require('fs');
const {homedir} = require('os');

import {Buffer} from 'buffer';
import {join} from 'path';
import {fromIni} from "../lib/fromIni";

const DEFAULT_CREDS = {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    sessionToken: 'sessionToken',
};

const FOO_CREDS = {
    accessKeyId: 'foo',
    secretKey: 'bar',
    sessionToken: 'baz',
};

beforeEach(__clearMatchers);

describe('fromIni', () => {
    it('should read credentials from ~/.aws/credentials', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}
        `.trim());

        expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it('should read profile credentials from ~/.aws/credentials', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretKey}
aws_session_token = ${FOO_CREDS.sessionToken}
        `.trim());

        expect(await fromIni({profile: 'foo'})()).toEqual(FOO_CREDS);
    });

    it('should read credentials from ~/.aws/config', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'config')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}
        `.trim());

        expect(await fromIni()()).toEqual(DEFAULT_CREDS);
    });

    it('should read profile credentials from ~/.aws/config', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'config')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}

[profile foo]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretKey}
aws_session_token = ${FOO_CREDS.sessionToken}
        `.trim());

        expect(await fromIni({profile: 'foo'})()).toEqual(FOO_CREDS);
    });

    it(
        'should prefer credentials in ~/.aws/credentials to those in ~/.aws/config',
        async () => {
            __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
aws_session_token = ${DEFAULT_CREDS.sessionToken}
        `.trim());

            __addMatcher(new RegExp(join(homedir(), '.aws', 'config')), `
[default]
aws_access_key_id = ${FOO_CREDS.accessKeyId}
aws_secret_access_key = ${FOO_CREDS.secretKey}
aws_session_token = ${FOO_CREDS.sessionToken}
        `.trim());

            expect(await fromIni()()).toEqual(DEFAULT_CREDS);
        }
    );

    it('should reject credentials with no access key key', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_secret_access_key = ${DEFAULT_CREDS.secretKey}
        `.trim());

        await fromIni()().then(
            () => { throw new Error('The promise should have been rejected'); },
            () => { /* Promise rejected as expected */ }
        );
    });

    it('should reject credentials with no secret key', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
        `.trim());

        await fromIni()().then(
            () => { throw new Error('The promise should have been rejected'); },
            () => { /* Promise rejected as expected */ }
        );
    });

    it('should not merge profile values together', async () => {
        __addMatcher(new RegExp(join(homedir(), '.aws', 'credentials')), `
[default]
aws_access_key_id = ${DEFAULT_CREDS.accessKeyId}
        `.trim());

        __addMatcher(new RegExp(join(homedir(), '.aws', 'config')), `
[default]
aws_secret_access_key = ${FOO_CREDS.secretKey}
        `.trim());

        await fromIni()().then(
            () => { throw new Error('The promise should have been rejected'); },
            () => { /* Promise rejected as expected */ }
        );
    });
});
