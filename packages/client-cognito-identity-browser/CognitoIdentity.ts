import {CognitoIdentityClient} from './CognitoIdentityClient';
import {ConcurrentModificationException} from './types/ConcurrentModificationException';
import {CreateIdentityPoolInput} from './types/CreateIdentityPoolInput';
import {CreateIdentityPoolOutput} from './types/CreateIdentityPoolOutput';
import {DeleteIdentitiesInput} from './types/DeleteIdentitiesInput';
import {DeleteIdentitiesOutput} from './types/DeleteIdentitiesOutput';
import {DeleteIdentityPoolInput} from './types/DeleteIdentityPoolInput';
import {DeleteIdentityPoolOutput} from './types/DeleteIdentityPoolOutput';
import {DescribeIdentityInput} from './types/DescribeIdentityInput';
import {DescribeIdentityOutput} from './types/DescribeIdentityOutput';
import {DescribeIdentityPoolInput} from './types/DescribeIdentityPoolInput';
import {DescribeIdentityPoolOutput} from './types/DescribeIdentityPoolOutput';
import {DeveloperUserAlreadyRegisteredException} from './types/DeveloperUserAlreadyRegisteredException';
import {ExternalServiceException} from './types/ExternalServiceException';
import {GetCredentialsForIdentityInput} from './types/GetCredentialsForIdentityInput';
import {GetCredentialsForIdentityOutput} from './types/GetCredentialsForIdentityOutput';
import {GetIdInput} from './types/GetIdInput';
import {GetIdOutput} from './types/GetIdOutput';
import {GetIdentityPoolRolesInput} from './types/GetIdentityPoolRolesInput';
import {GetIdentityPoolRolesOutput} from './types/GetIdentityPoolRolesOutput';
import {GetOpenIdTokenForDeveloperIdentityInput} from './types/GetOpenIdTokenForDeveloperIdentityInput';
import {GetOpenIdTokenForDeveloperIdentityOutput} from './types/GetOpenIdTokenForDeveloperIdentityOutput';
import {GetOpenIdTokenInput} from './types/GetOpenIdTokenInput';
import {GetOpenIdTokenOutput} from './types/GetOpenIdTokenOutput';
import {InternalErrorException} from './types/InternalErrorException';
import {InvalidIdentityPoolConfigurationException} from './types/InvalidIdentityPoolConfigurationException';
import {InvalidParameterException} from './types/InvalidParameterException';
import {LimitExceededException} from './types/LimitExceededException';
import {ListIdentitiesInput} from './types/ListIdentitiesInput';
import {ListIdentitiesOutput} from './types/ListIdentitiesOutput';
import {ListIdentityPoolsInput} from './types/ListIdentityPoolsInput';
import {ListIdentityPoolsOutput} from './types/ListIdentityPoolsOutput';
import {LookupDeveloperIdentityInput} from './types/LookupDeveloperIdentityInput';
import {LookupDeveloperIdentityOutput} from './types/LookupDeveloperIdentityOutput';
import {MergeDeveloperIdentitiesInput} from './types/MergeDeveloperIdentitiesInput';
import {MergeDeveloperIdentitiesOutput} from './types/MergeDeveloperIdentitiesOutput';
import {NotAuthorizedException} from './types/NotAuthorizedException';
import {ResourceConflictException} from './types/ResourceConflictException';
import {ResourceNotFoundException} from './types/ResourceNotFoundException';
import {SetIdentityPoolRolesInput} from './types/SetIdentityPoolRolesInput';
import {SetIdentityPoolRolesOutput} from './types/SetIdentityPoolRolesOutput';
import {TooManyRequestsException} from './types/TooManyRequestsException';
import {UnlinkDeveloperIdentityInput} from './types/UnlinkDeveloperIdentityInput';
import {UnlinkDeveloperIdentityOutput} from './types/UnlinkDeveloperIdentityOutput';
import {UnlinkIdentityInput} from './types/UnlinkIdentityInput';
import {UnlinkIdentityOutput} from './types/UnlinkIdentityOutput';
import {UpdateIdentityPoolInput} from './types/UpdateIdentityPoolInput';
import {UpdateIdentityPoolOutput} from './types/UpdateIdentityPoolOutput';
import {CreateIdentityPoolCommand} from './commands/CreateIdentityPoolCommand';
import {DeleteIdentitiesCommand} from './commands/DeleteIdentitiesCommand';
import {DeleteIdentityPoolCommand} from './commands/DeleteIdentityPoolCommand';
import {DescribeIdentityCommand} from './commands/DescribeIdentityCommand';
import {DescribeIdentityPoolCommand} from './commands/DescribeIdentityPoolCommand';
import {GetCredentialsForIdentityCommand} from './commands/GetCredentialsForIdentityCommand';
import {GetIdCommand} from './commands/GetIdCommand';
import {GetIdentityPoolRolesCommand} from './commands/GetIdentityPoolRolesCommand';
import {GetOpenIdTokenCommand} from './commands/GetOpenIdTokenCommand';
import {GetOpenIdTokenForDeveloperIdentityCommand} from './commands/GetOpenIdTokenForDeveloperIdentityCommand';
import {ListIdentitiesCommand} from './commands/ListIdentitiesCommand';
import {ListIdentityPoolsCommand} from './commands/ListIdentityPoolsCommand';
import {LookupDeveloperIdentityCommand} from './commands/LookupDeveloperIdentityCommand';
import {MergeDeveloperIdentitiesCommand} from './commands/MergeDeveloperIdentitiesCommand';
import {SetIdentityPoolRolesCommand} from './commands/SetIdentityPoolRolesCommand';
import {UnlinkDeveloperIdentityCommand} from './commands/UnlinkDeveloperIdentityCommand';
import {UnlinkIdentityCommand} from './commands/UnlinkIdentityCommand';
import {UpdateIdentityPoolCommand} from './commands/UpdateIdentityPoolCommand';

export class CognitoIdentity extends CognitoIdentityClient {
    /**
     * <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The limit on identity pools is 60 per account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {LimitExceededException} <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createIdentityPool(args: CreateIdentityPoolInput): Promise<CreateIdentityPoolOutput>;
    public createIdentityPool(
        args: CreateIdentityPoolInput,
        cb: (err: any, data?: CreateIdentityPoolOutput) => void
    ): void;
    public createIdentityPool(
        args: CreateIdentityPoolInput,
        cb?: (err: any, data?: CreateIdentityPoolOutput) => void
    ): Promise<CreateIdentityPoolOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteIdentities(args: DeleteIdentitiesInput): Promise<DeleteIdentitiesOutput>;
    public deleteIdentities(
        args: DeleteIdentitiesInput,
        cb: (err: any, data?: DeleteIdentitiesOutput) => void
    ): void;
    public deleteIdentities(
        args: DeleteIdentitiesInput,
        cb?: (err: any, data?: DeleteIdentitiesOutput) => void
    ): Promise<DeleteIdentitiesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteIdentityPool(args: DeleteIdentityPoolInput): Promise<DeleteIdentityPoolOutput>;
    public deleteIdentityPool(
        args: DeleteIdentityPoolInput,
        cb: (err: any, data?: DeleteIdentityPoolOutput) => void
    ): void;
    public deleteIdentityPool(
        args: DeleteIdentityPoolInput,
        cb?: (err: any, data?: DeleteIdentityPoolOutput) => void
    ): Promise<DeleteIdentityPoolOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeIdentity(args: DescribeIdentityInput): Promise<DescribeIdentityOutput>;
    public describeIdentity(
        args: DescribeIdentityInput,
        cb: (err: any, data?: DescribeIdentityOutput) => void
    ): void;
    public describeIdentity(
        args: DescribeIdentityInput,
        cb?: (err: any, data?: DescribeIdentityOutput) => void
    ): Promise<DescribeIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeIdentityPool(args: DescribeIdentityPoolInput): Promise<DescribeIdentityPoolOutput>;
    public describeIdentityPool(
        args: DescribeIdentityPoolInput,
        cb: (err: any, data?: DescribeIdentityPoolOutput) => void
    ): void;
    public describeIdentityPool(
        args: DescribeIdentityPoolInput,
        cb?: (err: any, data?: DescribeIdentityPoolOutput) => void
    ): Promise<DescribeIdentityPoolOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InvalidIdentityPoolConfigurationException} <p>Thrown if the identity pool has no role associated for the given auth type (auth/unauth) or if the AssumeRole fails.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {ExternalServiceException} <p>An exception thrown when a dependent service such as Facebook or Twitter is not responding</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getCredentialsForIdentity(args: GetCredentialsForIdentityInput): Promise<GetCredentialsForIdentityOutput>;
    public getCredentialsForIdentity(
        args: GetCredentialsForIdentityInput,
        cb: (err: any, data?: GetCredentialsForIdentityOutput) => void
    ): void;
    public getCredentialsForIdentity(
        args: GetCredentialsForIdentityInput,
        cb?: (err: any, data?: GetCredentialsForIdentityOutput) => void
    ): Promise<GetCredentialsForIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetCredentialsForIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {LimitExceededException} <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
     *   - {ExternalServiceException} <p>An exception thrown when a dependent service such as Facebook or Twitter is not responding</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getId(args: GetIdInput): Promise<GetIdOutput>;
    public getId(
        args: GetIdInput,
        cb: (err: any, data?: GetIdOutput) => void
    ): void;
    public getId(
        args: GetIdInput,
        cb?: (err: any, data?: GetIdOutput) => void
    ): Promise<GetIdOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetIdCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getIdentityPoolRoles(args: GetIdentityPoolRolesInput): Promise<GetIdentityPoolRolesOutput>;
    public getIdentityPoolRoles(
        args: GetIdentityPoolRolesInput,
        cb: (err: any, data?: GetIdentityPoolRolesOutput) => void
    ): void;
    public getIdentityPoolRoles(
        args: GetIdentityPoolRolesInput,
        cb?: (err: any, data?: GetIdentityPoolRolesOutput) => void
    ): Promise<GetIdentityPoolRolesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetIdentityPoolRolesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenId token is valid for 15 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {ExternalServiceException} <p>An exception thrown when a dependent service such as Facebook or Twitter is not responding</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getOpenIdToken(args: GetOpenIdTokenInput): Promise<GetOpenIdTokenOutput>;
    public getOpenIdToken(
        args: GetOpenIdTokenInput,
        cb: (err: any, data?: GetOpenIdTokenOutput) => void
    ): void;
    public getOpenIdToken(
        args: GetOpenIdTokenInput,
        cb?: (err: any, data?: GetOpenIdTokenOutput) => void
    ): Promise<GetOpenIdTokenOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetOpenIdTokenCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {DeveloperUserAlreadyRegisteredException} <p>The provided developer user identifier is already registered with Cognito under a different identity ID.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getOpenIdTokenForDeveloperIdentity(args: GetOpenIdTokenForDeveloperIdentityInput): Promise<GetOpenIdTokenForDeveloperIdentityOutput>;
    public getOpenIdTokenForDeveloperIdentity(
        args: GetOpenIdTokenForDeveloperIdentityInput,
        cb: (err: any, data?: GetOpenIdTokenForDeveloperIdentityOutput) => void
    ): void;
    public getOpenIdTokenForDeveloperIdentity(
        args: GetOpenIdTokenForDeveloperIdentityInput,
        cb?: (err: any, data?: GetOpenIdTokenForDeveloperIdentityOutput) => void
    ): Promise<GetOpenIdTokenForDeveloperIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetOpenIdTokenForDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Lists the identities in a pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listIdentities(args: ListIdentitiesInput): Promise<ListIdentitiesOutput>;
    public listIdentities(
        args: ListIdentitiesInput,
        cb: (err: any, data?: ListIdentitiesOutput) => void
    ): void;
    public listIdentities(
        args: ListIdentitiesInput,
        cb?: (err: any, data?: ListIdentitiesOutput) => void
    ): Promise<ListIdentitiesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listIdentityPools(args: ListIdentityPoolsInput): Promise<ListIdentityPoolsOutput>;
    public listIdentityPools(
        args: ListIdentityPoolsInput,
        cb: (err: any, data?: ListIdentityPoolsOutput) => void
    ): void;
    public listIdentityPools(
        args: ListIdentityPoolsInput,
        cb?: (err: any, data?: ListIdentityPoolsOutput) => void
    ): Promise<ListIdentityPoolsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListIdentityPoolsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code>s associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public lookupDeveloperIdentity(args: LookupDeveloperIdentityInput): Promise<LookupDeveloperIdentityOutput>;
    public lookupDeveloperIdentity(
        args: LookupDeveloperIdentityInput,
        cb: (err: any, data?: LookupDeveloperIdentityOutput) => void
    ): void;
    public lookupDeveloperIdentity(
        args: LookupDeveloperIdentityInput,
        cb?: (err: any, data?: LookupDeveloperIdentityOutput) => void
    ): Promise<LookupDeveloperIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new LookupDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public mergeDeveloperIdentities(args: MergeDeveloperIdentitiesInput): Promise<MergeDeveloperIdentitiesOutput>;
    public mergeDeveloperIdentities(
        args: MergeDeveloperIdentitiesInput,
        cb: (err: any, data?: MergeDeveloperIdentitiesOutput) => void
    ): void;
    public mergeDeveloperIdentities(
        args: MergeDeveloperIdentitiesInput,
        cb?: (err: any, data?: MergeDeveloperIdentitiesOutput) => void
    ): Promise<MergeDeveloperIdentitiesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new MergeDeveloperIdentitiesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {ConcurrentModificationException} <p>Thrown if there are parallel requests to modify a resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public setIdentityPoolRoles(args: SetIdentityPoolRolesInput): Promise<SetIdentityPoolRolesOutput>;
    public setIdentityPoolRoles(
        args: SetIdentityPoolRolesInput,
        cb: (err: any, data?: SetIdentityPoolRolesOutput) => void
    ): void;
    public setIdentityPoolRoles(
        args: SetIdentityPoolRolesInput,
        cb?: (err: any, data?: SetIdentityPoolRolesOutput) => void
    ): Promise<SetIdentityPoolRolesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new SetIdentityPoolRolesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public unlinkDeveloperIdentity(args: UnlinkDeveloperIdentityInput): Promise<UnlinkDeveloperIdentityOutput>;
    public unlinkDeveloperIdentity(
        args: UnlinkDeveloperIdentityInput,
        cb: (err: any, data?: UnlinkDeveloperIdentityOutput) => void
    ): void;
    public unlinkDeveloperIdentity(
        args: UnlinkDeveloperIdentityInput,
        cb?: (err: any, data?: UnlinkDeveloperIdentityOutput) => void
    ): Promise<UnlinkDeveloperIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UnlinkDeveloperIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {ExternalServiceException} <p>An exception thrown when a dependent service such as Facebook or Twitter is not responding</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public unlinkIdentity(args: UnlinkIdentityInput): Promise<UnlinkIdentityOutput>;
    public unlinkIdentity(
        args: UnlinkIdentityInput,
        cb: (err: any, data?: UnlinkIdentityOutput) => void
    ): void;
    public unlinkIdentity(
        args: UnlinkIdentityInput,
        cb?: (err: any, data?: UnlinkIdentityOutput) => void
    ): Promise<UnlinkIdentityOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UnlinkIdentityCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates a user pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidParameterException} <p>Thrown for missing or bad input parameter(s).</p>
     *   - {ResourceNotFoundException} <p>Thrown when the requested resource (for example, a dataset or record) does not exist.</p>
     *   - {NotAuthorizedException} <p>Thrown when a user is not authorized to access the requested resource.</p>
     *   - {ResourceConflictException} <p>Thrown when a user tries to use a login which is already linked to another account.</p>
     *   - {TooManyRequestsException} <p>Thrown when a request is throttled.</p>
     *   - {InternalErrorException} <p>Thrown when the service encounters an error during processing the request.</p>
     *   - {ConcurrentModificationException} <p>Thrown if there are parallel requests to modify a resource.</p>
     *   - {LimitExceededException} <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateIdentityPool(args: UpdateIdentityPoolInput): Promise<UpdateIdentityPoolOutput>;
    public updateIdentityPool(
        args: UpdateIdentityPoolInput,
        cb: (err: any, data?: UpdateIdentityPoolOutput) => void
    ): void;
    public updateIdentityPool(
        args: UpdateIdentityPoolInput,
        cb?: (err: any, data?: UpdateIdentityPoolOutput) => void
    ): Promise<UpdateIdentityPoolOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateIdentityPoolCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
