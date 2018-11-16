import {LambdaClient} from './LambdaClient';
import {AddPermissionInput} from './types/AddPermissionInput';
import {AddPermissionOutput} from './types/AddPermissionOutput';
import {CodeStorageExceededException} from './types/CodeStorageExceededException';
import {CreateAliasInput} from './types/CreateAliasInput';
import {CreateAliasOutput} from './types/CreateAliasOutput';
import {CreateEventSourceMappingInput} from './types/CreateEventSourceMappingInput';
import {CreateEventSourceMappingOutput} from './types/CreateEventSourceMappingOutput';
import {CreateFunctionInput} from './types/CreateFunctionInput';
import {CreateFunctionOutput} from './types/CreateFunctionOutput';
import {DeleteAliasInput} from './types/DeleteAliasInput';
import {DeleteAliasOutput} from './types/DeleteAliasOutput';
import {DeleteEventSourceMappingInput} from './types/DeleteEventSourceMappingInput';
import {DeleteEventSourceMappingOutput} from './types/DeleteEventSourceMappingOutput';
import {DeleteFunctionConcurrencyInput} from './types/DeleteFunctionConcurrencyInput';
import {DeleteFunctionConcurrencyOutput} from './types/DeleteFunctionConcurrencyOutput';
import {DeleteFunctionInput} from './types/DeleteFunctionInput';
import {DeleteFunctionOutput} from './types/DeleteFunctionOutput';
import {EC2AccessDeniedException} from './types/EC2AccessDeniedException';
import {EC2ThrottledException} from './types/EC2ThrottledException';
import {EC2UnexpectedException} from './types/EC2UnexpectedException';
import {ENILimitReachedException} from './types/ENILimitReachedException';
import {GetAccountSettingsInput} from './types/GetAccountSettingsInput';
import {GetAccountSettingsOutput} from './types/GetAccountSettingsOutput';
import {GetAliasInput} from './types/GetAliasInput';
import {GetAliasOutput} from './types/GetAliasOutput';
import {GetEventSourceMappingInput} from './types/GetEventSourceMappingInput';
import {GetEventSourceMappingOutput} from './types/GetEventSourceMappingOutput';
import {GetFunctionConfigurationInput} from './types/GetFunctionConfigurationInput';
import {GetFunctionConfigurationOutput} from './types/GetFunctionConfigurationOutput';
import {GetFunctionInput} from './types/GetFunctionInput';
import {GetFunctionOutput} from './types/GetFunctionOutput';
import {GetPolicyInput} from './types/GetPolicyInput';
import {GetPolicyOutput} from './types/GetPolicyOutput';
import {InvalidParameterValueException} from './types/InvalidParameterValueException';
import {InvalidRequestContentException} from './types/InvalidRequestContentException';
import {InvalidRuntimeException} from './types/InvalidRuntimeException';
import {InvalidSecurityGroupIDException} from './types/InvalidSecurityGroupIDException';
import {InvalidSubnetIDException} from './types/InvalidSubnetIDException';
import {InvalidZipFileException} from './types/InvalidZipFileException';
import {InvokeAsyncInput} from './types/InvokeAsyncInput';
import {InvokeAsyncOutput} from './types/InvokeAsyncOutput';
import {InvokeInput} from './types/InvokeInput';
import {InvokeOutput} from './types/InvokeOutput';
import {KMSAccessDeniedException} from './types/KMSAccessDeniedException';
import {KMSDisabledException} from './types/KMSDisabledException';
import {KMSInvalidStateException} from './types/KMSInvalidStateException';
import {KMSNotFoundException} from './types/KMSNotFoundException';
import {ListAliasesInput} from './types/ListAliasesInput';
import {ListAliasesOutput} from './types/ListAliasesOutput';
import {ListEventSourceMappingsInput} from './types/ListEventSourceMappingsInput';
import {ListEventSourceMappingsOutput} from './types/ListEventSourceMappingsOutput';
import {ListFunctionsInput} from './types/ListFunctionsInput';
import {ListFunctionsOutput} from './types/ListFunctionsOutput';
import {ListTagsInput} from './types/ListTagsInput';
import {ListTagsOutput} from './types/ListTagsOutput';
import {ListVersionsByFunctionInput} from './types/ListVersionsByFunctionInput';
import {ListVersionsByFunctionOutput} from './types/ListVersionsByFunctionOutput';
import {PolicyLengthExceededException} from './types/PolicyLengthExceededException';
import {PreconditionFailedException} from './types/PreconditionFailedException';
import {PublishVersionInput} from './types/PublishVersionInput';
import {PublishVersionOutput} from './types/PublishVersionOutput';
import {PutFunctionConcurrencyInput} from './types/PutFunctionConcurrencyInput';
import {PutFunctionConcurrencyOutput} from './types/PutFunctionConcurrencyOutput';
import {RemovePermissionInput} from './types/RemovePermissionInput';
import {RemovePermissionOutput} from './types/RemovePermissionOutput';
import {RequestTooLargeException} from './types/RequestTooLargeException';
import {ResourceConflictException} from './types/ResourceConflictException';
import {ResourceInUseException} from './types/ResourceInUseException';
import {ResourceNotFoundException} from './types/ResourceNotFoundException';
import {ServiceException} from './types/ServiceException';
import {SubnetIPAddressLimitReachedException} from './types/SubnetIPAddressLimitReachedException';
import {TagResourceInput} from './types/TagResourceInput';
import {TagResourceOutput} from './types/TagResourceOutput';
import {TooManyRequestsException} from './types/TooManyRequestsException';
import {UnsupportedMediaTypeException} from './types/UnsupportedMediaTypeException';
import {UntagResourceInput} from './types/UntagResourceInput';
import {UntagResourceOutput} from './types/UntagResourceOutput';
import {UpdateAliasInput} from './types/UpdateAliasInput';
import {UpdateAliasOutput} from './types/UpdateAliasOutput';
import {UpdateEventSourceMappingInput} from './types/UpdateEventSourceMappingInput';
import {UpdateEventSourceMappingOutput} from './types/UpdateEventSourceMappingOutput';
import {UpdateFunctionCodeInput} from './types/UpdateFunctionCodeInput';
import {UpdateFunctionCodeOutput} from './types/UpdateFunctionCodeOutput';
import {UpdateFunctionConfigurationInput} from './types/UpdateFunctionConfigurationInput';
import {UpdateFunctionConfigurationOutput} from './types/UpdateFunctionConfigurationOutput';
import {AddPermissionCommand} from './commands/AddPermissionCommand';
import {CreateAliasCommand} from './commands/CreateAliasCommand';
import {CreateEventSourceMappingCommand} from './commands/CreateEventSourceMappingCommand';
import {CreateFunctionCommand} from './commands/CreateFunctionCommand';
import {DeleteAliasCommand} from './commands/DeleteAliasCommand';
import {DeleteEventSourceMappingCommand} from './commands/DeleteEventSourceMappingCommand';
import {DeleteFunctionCommand} from './commands/DeleteFunctionCommand';
import {DeleteFunctionConcurrencyCommand} from './commands/DeleteFunctionConcurrencyCommand';
import {GetAccountSettingsCommand} from './commands/GetAccountSettingsCommand';
import {GetAliasCommand} from './commands/GetAliasCommand';
import {GetEventSourceMappingCommand} from './commands/GetEventSourceMappingCommand';
import {GetFunctionCommand} from './commands/GetFunctionCommand';
import {GetFunctionConfigurationCommand} from './commands/GetFunctionConfigurationCommand';
import {GetPolicyCommand} from './commands/GetPolicyCommand';
import {InvokeAsyncCommand} from './commands/InvokeAsyncCommand';
import {InvokeCommand} from './commands/InvokeCommand';
import {ListAliasesCommand} from './commands/ListAliasesCommand';
import {ListEventSourceMappingsCommand} from './commands/ListEventSourceMappingsCommand';
import {ListFunctionsCommand} from './commands/ListFunctionsCommand';
import {ListTagsCommand} from './commands/ListTagsCommand';
import {ListVersionsByFunctionCommand} from './commands/ListVersionsByFunctionCommand';
import {PublishVersionCommand} from './commands/PublishVersionCommand';
import {PutFunctionConcurrencyCommand} from './commands/PutFunctionConcurrencyCommand';
import {RemovePermissionCommand} from './commands/RemovePermissionCommand';
import {TagResourceCommand} from './commands/TagResourceCommand';
import {UntagResourceCommand} from './commands/UntagResourceCommand';
import {UpdateAliasCommand} from './commands/UpdateAliasCommand';
import {UpdateEventSourceMappingCommand} from './commands/UpdateEventSourceMappingCommand';
import {UpdateFunctionCodeCommand} from './commands/UpdateFunctionCodeCommand';
import {UpdateFunctionConfigurationCommand} from './commands/UpdateFunctionConfigurationCommand';

export class Lambda extends LambdaClient {
    /**
     * <p>Adds a permission to the resource policy associated with the specified AWS Lambda function. You use resource policies to grant permissions to event sources that use the <i>push</i> model. In a <i>push</i> model, event sources (such as Amazon S3 and custom applications) invoke your Lambda function. Each permission you add to the resource policy allows an event source permission to invoke the Lambda function. </p> <p>Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the <code>Qualifier</code> parameter to apply permissions to that ARN. For more information about versioning, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p> <p>This operation requires permission for the <code>lambda:AddPermission</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {PolicyLengthExceededException} <p>Lambda function access policy is limited to 20 KB.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public addPermission(args: AddPermissionInput): Promise<AddPermissionOutput>;
    public addPermission(
        args: AddPermissionInput,
        cb: (err: any, data?: AddPermissionOutput) => void
    ): void;
    public addPermission(
        args: AddPermissionInput,
        cb?: (err: any, data?: AddPermissionOutput) => void
    ): Promise<AddPermissionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AddPermissionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates an alias that points to the specified Lambda function version. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.</p> <p>Alias names are unique for a given function. This requires permission for the lambda:CreateAlias action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createAlias(args: CreateAliasInput): Promise<CreateAliasOutput>;
    public createAlias(
        args: CreateAliasInput,
        cb: (err: any, data?: CreateAliasOutput) => void
    ): void;
    public createAlias(
        args: CreateAliasInput,
        cb?: (err: any, data?: CreateAliasOutput) => void
    ): Promise<CreateAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Identifies a poll-based event source for a Lambda function. It can be either an Amazon Kinesis or DynamoDB stream. AWS Lambda invokes the specified function when records are posted to the event source.</p> <p>This association between a poll-based source and a Lambda function is called the event source mapping.</p> <p>You provide mapping information (for example, which stream or SQS queue to read from and which Lambda function to invoke) in the request body.</p> <p>Amazon Kinesis or DynamoDB stream event sources can be associated with multiple AWS Lambda functions and a given Lambda function can be associated with multiple AWS event sources. For Amazon SQS, you can configure multiple queues as event sources for a single Lambda function, but an SQS queue can be mapped only to a single Lambda function.</p> <p>You can configure an SQS queue in an account separate from your Lambda function's account. Also the queue needs to reside in the same AWS region as your function. </p> <p>If you are using versioning, you can specify a specific function version or an alias via the function name parameter. For more information about versioning, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p> <p>This operation requires permission for the <code>lambda:CreateEventSourceMapping</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createEventSourceMapping(args: CreateEventSourceMappingInput): Promise<CreateEventSourceMappingOutput>;
    public createEventSourceMapping(
        args: CreateEventSourceMappingInput,
        cb: (err: any, data?: CreateEventSourceMappingOutput) => void
    ): void;
    public createEventSourceMapping(
        args: CreateEventSourceMappingInput,
        cb?: (err: any, data?: CreateEventSourceMappingOutput) => void
    ): Promise<CreateEventSourceMappingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateEventSourceMappingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new Lambda function. The function configuration is created from the request parameters, and the code for the function is provided by a .zip file. The function name is case-sensitive.</p> <p>This operation requires permission for the <code>lambda:CreateFunction</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a> </p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createFunction(args: CreateFunctionInput): Promise<CreateFunctionOutput>;
    public createFunction(
        args: CreateFunctionInput,
        cb: (err: any, data?: CreateFunctionOutput) => void
    ): void;
    public createFunction(
        args: CreateFunctionInput,
        cb?: (err: any, data?: CreateFunctionOutput) => void
    ): Promise<CreateFunctionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateFunctionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the specified Lambda function alias. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.</p> <p>This requires permission for the lambda:DeleteAlias action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteAlias(args: DeleteAliasInput): Promise<DeleteAliasOutput>;
    public deleteAlias(
        args: DeleteAliasInput,
        cb: (err: any, data?: DeleteAliasOutput) => void
    ): void;
    public deleteAlias(
        args: DeleteAliasInput,
        cb?: (err: any, data?: DeleteAliasOutput) => void
    ): Promise<DeleteAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Removes an event source mapping. This means AWS Lambda will no longer invoke the function for events in the associated source.</p> <p>This operation requires permission for the <code>lambda:DeleteEventSourceMapping</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSoure Mapping in CREATING, or tried to delete a EventSoure mapping currently in the UPDATING state. </p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteEventSourceMapping(args: DeleteEventSourceMappingInput): Promise<DeleteEventSourceMappingOutput>;
    public deleteEventSourceMapping(
        args: DeleteEventSourceMappingInput,
        cb: (err: any, data?: DeleteEventSourceMappingOutput) => void
    ): void;
    public deleteEventSourceMapping(
        args: DeleteEventSourceMappingInput,
        cb?: (err: any, data?: DeleteEventSourceMappingOutput) => void
    ): Promise<DeleteEventSourceMappingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteEventSourceMappingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted. Event source mappings are not deleted.</p> <p>This operation requires permission for the <code>lambda:DeleteFunction</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteFunction(args: DeleteFunctionInput): Promise<DeleteFunctionOutput>;
    public deleteFunction(
        args: DeleteFunctionInput,
        cb: (err: any, data?: DeleteFunctionOutput) => void
    ): void;
    public deleteFunction(
        args: DeleteFunctionInput,
        cb?: (err: any, data?: DeleteFunctionOutput) => void
    ): Promise<DeleteFunctionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteFunctionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Removes concurrent execution limits from this function. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteFunctionConcurrency(args: DeleteFunctionConcurrencyInput): Promise<DeleteFunctionConcurrencyOutput>;
    public deleteFunctionConcurrency(
        args: DeleteFunctionConcurrencyInput,
        cb: (err: any, data?: DeleteFunctionConcurrencyOutput) => void
    ): void;
    public deleteFunctionConcurrency(
        args: DeleteFunctionConcurrencyInput,
        cb?: (err: any, data?: DeleteFunctionConcurrencyOutput) => void
    ): Promise<DeleteFunctionConcurrencyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteFunctionConcurrencyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Retrieves details about your account's <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in a region.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getAccountSettings(args: GetAccountSettingsInput): Promise<GetAccountSettingsOutput>;
    public getAccountSettings(
        args: GetAccountSettingsInput,
        cb: (err: any, data?: GetAccountSettingsOutput) => void
    ): void;
    public getAccountSettings(
        args: GetAccountSettingsInput,
        cb?: (err: any, data?: GetAccountSettingsOutput) => void
    ): Promise<GetAccountSettingsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetAccountSettingsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the specified alias information such as the alias ARN, description, and function version it is pointing to. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.</p> <p>This requires permission for the <code>lambda:GetAlias</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getAlias(args: GetAliasInput): Promise<GetAliasOutput>;
    public getAlias(
        args: GetAliasInput,
        cb: (err: any, data?: GetAliasOutput) => void
    ): void;
    public getAlias(
        args: GetAliasInput,
        cb?: (err: any, data?: GetAliasOutput) => void
    ): Promise<GetAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns configuration information for the specified event source mapping (see <a>CreateEventSourceMapping</a>).</p> <p>This operation requires permission for the <code>lambda:GetEventSourceMapping</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getEventSourceMapping(args: GetEventSourceMappingInput): Promise<GetEventSourceMappingOutput>;
    public getEventSourceMapping(
        args: GetEventSourceMappingInput,
        cb: (err: any, data?: GetEventSourceMappingOutput) => void
    ): void;
    public getEventSourceMapping(
        args: GetEventSourceMappingInput,
        cb?: (err: any, data?: GetEventSourceMappingOutput) => void
    ): Promise<GetEventSourceMappingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetEventSourceMappingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the configuration information of the Lambda function and a presigned URL link to the .zip file you uploaded with <a>CreateFunction</a> so you can download the .zip file. Note that the URL is valid for up to 10 minutes. The configuration information is the same information you provided as parameters when uploading the function.</p> <p>Use the <code>Qualifier</code> parameter to retrieve a published version of the function. Otherwise, returns the unpublished version (<code>$LATEST</code>). For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>.</p> <p>This operation requires permission for the <code>lambda:GetFunction</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getFunction(args: GetFunctionInput): Promise<GetFunctionOutput>;
    public getFunction(
        args: GetFunctionInput,
        cb: (err: any, data?: GetFunctionOutput) => void
    ): void;
    public getFunction(
        args: GetFunctionInput,
        cb?: (err: any, data?: GetFunctionOutput) => void
    ): Promise<GetFunctionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetFunctionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the configuration information of the Lambda function. This the same information you provided as parameters when uploading the function by using <a>CreateFunction</a>.</p> <p>If you are using the versioning feature, you can retrieve this information for a specific function version by using the optional <code>Qualifier</code> parameter and specifying the function version or alias that points to it. If you don't provide it, the API returns information about the $LATEST version of the function. For more information about versioning, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>.</p> <p>This operation requires permission for the <code>lambda:GetFunctionConfiguration</code> operation.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getFunctionConfiguration(args: GetFunctionConfigurationInput): Promise<GetFunctionConfigurationOutput>;
    public getFunctionConfiguration(
        args: GetFunctionConfigurationInput,
        cb: (err: any, data?: GetFunctionConfigurationOutput) => void
    ): void;
    public getFunctionConfiguration(
        args: GetFunctionConfigurationInput,
        cb?: (err: any, data?: GetFunctionConfigurationOutput) => void
    ): Promise<GetFunctionConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetFunctionConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns the resource policy associated with the specified Lambda function.</p> <p>This action requires permission for the <code>lambda:GetPolicy action.</code> </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getPolicy(args: GetPolicyInput): Promise<GetPolicyOutput>;
    public getPolicy(
        args: GetPolicyInput,
        cb: (err: any, data?: GetPolicyOutput) => void
    ): void;
    public getPolicy(
        args: GetPolicyInput,
        cb?: (err: any, data?: GetPolicyOutput) => void
    ): Promise<GetPolicyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetPolicyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Invokes a Lambda function. For an example, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/with-dynamodb-create-function.html#with-dbb-invoke-manually">Create the Lambda Function and Test It Manually</a>. </p> <p>Specify just a function name to invoke the latest version of the function. To invoke a published version, use the <code>Qualifier</code> parameter to specify a <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version or alias</a>.</p> <p>If you use the <code>RequestResponse</code> (synchronous) invocation option, the function will be invoked only once. If you use the <code>Event</code> (asynchronous) invocation option, the function will be invoked at least once in response to an event and the function must be idempotent to handle this.</p> <p>For functions with a long timeout, your client may be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <code>lambda:InvokeFunction</code> action.</p> <p>The <code>TooManyRequestsException</code> noted below will return the following: <code>ConcurrentInvocationLimitExceeded</code> will be returned if you have no functions with reserved concurrency and have exceeded your account concurrent limit or if a function without reserved concurrency exceeds the account's unreserved concurrency limit. <code>ReservedFunctionConcurrentInvocationLimitExceeded</code> will be returned when a function with reserved concurrency exceeds its configured concurrency limit. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidRequestContentException} <p>The request body could not be parsed as JSON.</p>
     *   - {RequestTooLargeException} <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
     *   - {UnsupportedMediaTypeException} <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {EC2UnexpectedException} <p>AWS Lambda received an unexpected EC2 client exception while setting up for the Lambda function.</p>
     *   - {SubnetIPAddressLimitReachedException} <p>AWS Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.</p>
     *   - {ENILimitReachedException} <p>AWS Lambda was not able to create an Elastic Network Interface (ENI) in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached.</p>
     *   - {EC2ThrottledException} <p>AWS Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided for the Lambda function.</p>
     *   - {EC2AccessDeniedException} <p>Need additional permissions to configure VPC settings.</p>
     *   - {InvalidSubnetIDException} <p>The Subnet ID provided in the Lambda function VPC configuration is invalid.</p>
     *   - {InvalidSecurityGroupIDException} <p>The Security Group ID provided in the Lambda function VPC configuration is invalid.</p>
     *   - {InvalidZipFileException} <p>AWS Lambda could not unzip the deployment package.</p>
     *   - {KMSDisabledException} <p>Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
     *   - {KMSInvalidStateException} <p>Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for Decrypt. Check the function's KMS key settings.</p>
     *   - {KMSAccessDeniedException} <p>Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
     *   - {KMSNotFoundException} <p>Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings. </p>
     *   - {InvalidRuntimeException} <p>The runtime or runtime version specified is not supported.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public invoke(args: InvokeInput): Promise<InvokeOutput>;
    public invoke(
        args: InvokeInput,
        cb: (err: any, data?: InvokeOutput) => void
    ): void;
    public invoke(
        args: InvokeInput,
        cb?: (err: any, data?: InvokeOutput) => void
    ): Promise<InvokeOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new InvokeCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Submits an invocation request to AWS Lambda. Upon receiving the request, Lambda executes the specified function asynchronously. To see the logs generated by the Lambda function execution, see the CloudWatch Logs console.</p> <p>This operation requires permission for the <code>lambda:InvokeFunction</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidRequestContentException} <p>The request body could not be parsed as JSON.</p>
     *   - {InvalidRuntimeException} <p>The runtime or runtime version specified is not supported.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public invokeAsync(args: InvokeAsyncInput): Promise<InvokeAsyncOutput>;
    public invokeAsync(
        args: InvokeAsyncInput,
        cb: (err: any, data?: InvokeAsyncOutput) => void
    ): void;
    public invokeAsync(
        args: InvokeAsyncInput,
        cb?: (err: any, data?: InvokeAsyncOutput) => void
    ): Promise<InvokeAsyncOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new InvokeAsyncCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns list of aliases created for a Lambda function. For each alias, the response includes information such as the alias ARN, description, alias name, and the function version to which it points. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.</p> <p>This requires permission for the lambda:ListAliases action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listAliases(args: ListAliasesInput): Promise<ListAliasesOutput>;
    public listAliases(
        args: ListAliasesInput,
        cb: (err: any, data?: ListAliasesOutput) => void
    ): void;
    public listAliases(
        args: ListAliasesInput,
        cb?: (err: any, data?: ListAliasesOutput) => void
    ): Promise<ListAliasesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListAliasesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of event source mappings you created using the <code>CreateEventSourceMapping</code> (see <a>CreateEventSourceMapping</a>). </p> <p>For each mapping, the API returns configuration information. You can optionally specify filters to retrieve specific event source mappings.</p> <p>This operation requires permission for the <code>lambda:ListEventSourceMappings</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listEventSourceMappings(args: ListEventSourceMappingsInput): Promise<ListEventSourceMappingsOutput>;
    public listEventSourceMappings(
        args: ListEventSourceMappingsInput,
        cb: (err: any, data?: ListEventSourceMappingsOutput) => void
    ): void;
    public listEventSourceMappings(
        args: ListEventSourceMappingsInput,
        cb?: (err: any, data?: ListEventSourceMappingsOutput) => void
    ): Promise<ListEventSourceMappingsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListEventSourceMappingsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of your Lambda functions. For each function, the response includes the function configuration information. You must use <a>GetFunction</a> to retrieve the code for your function.</p> <p>This operation requires permission for the <code>lambda:ListFunctions</code> action.</p> <p>If you are using the versioning feature, you can list all of your functions or only <code>$LATEST</code> versions. For information about the versioning feature, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listFunctions(args: ListFunctionsInput): Promise<ListFunctionsOutput>;
    public listFunctions(
        args: ListFunctionsInput,
        cb: (err: any, data?: ListFunctionsOutput) => void
    ): void;
    public listFunctions(
        args: ListFunctionsInput,
        cb?: (err: any, data?: ListFunctionsOutput) => void
    ): Promise<ListFunctionsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListFunctionsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of tags assigned to a function when supplied the function ARN (Amazon Resource Name). For more information on Tagging, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/tagging.html">Tagging Lambda Functions</a> in the <b>AWS Lambda Developer Guide</b>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
    public listTags(
        args: ListTagsInput,
        cb: (err: any, data?: ListTagsOutput) => void
    ): void;
    public listTags(
        args: ListTagsInput,
        cb?: (err: any, data?: ListTagsOutput) => void
    ): Promise<ListTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Lists all versions of a function. For information about versioning, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public listVersionsByFunction(args: ListVersionsByFunctionInput): Promise<ListVersionsByFunctionOutput>;
    public listVersionsByFunction(
        args: ListVersionsByFunctionInput,
        cb: (err: any, data?: ListVersionsByFunctionOutput) => void
    ): void;
    public listVersionsByFunction(
        args: ListVersionsByFunctionInput,
        cb?: (err: any, data?: ListVersionsByFunctionOutput) => void
    ): Promise<ListVersionsByFunctionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new ListVersionsByFunctionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Publishes a version of your function from the current snapshot of $LATEST. That is, AWS Lambda takes a snapshot of the function code and configuration information from $LATEST and publishes a new version. The code and configuration cannot be modified after publication. For information about the versioning feature, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a> </p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public publishVersion(args: PublishVersionInput): Promise<PublishVersionOutput>;
    public publishVersion(
        args: PublishVersionInput,
        cb: (err: any, data?: PublishVersionOutput) => void
    ): void;
    public publishVersion(
        args: PublishVersionInput,
        cb?: (err: any, data?: PublishVersionOutput) => void
    ): Promise<PublishVersionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PublishVersionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Sets a limit on the number of concurrent executions available to this function. It is a subset of your account's total concurrent execution limit per region. Note that Lambda automatically reserves a buffer of 100 concurrent executions for functions without any reserved concurrency limit. This means if your account limit is 1000, you have a total of 900 available to allocate to individual functions. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public putFunctionConcurrency(args: PutFunctionConcurrencyInput): Promise<PutFunctionConcurrencyOutput>;
    public putFunctionConcurrency(
        args: PutFunctionConcurrencyInput,
        cb: (err: any, data?: PutFunctionConcurrencyOutput) => void
    ): void;
    public putFunctionConcurrency(
        args: PutFunctionConcurrencyInput,
        cb?: (err: any, data?: PutFunctionConcurrencyOutput) => void
    ): Promise<PutFunctionConcurrencyOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PutFunctionConcurrencyCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Removes permissions from a function. You can remove individual permissions from an resource policy associated with a Lambda function by providing a statement ID that you provided when you added the permission. When you remove permissions, disable the event source mapping or trigger configuration first to avoid errors.</p> <p>Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the <code>Qualifier</code> parameter to apply permissions to that ARN. For more information about versioning, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p> <p>You need permission for the <code>lambda:RemovePermission</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public removePermission(args: RemovePermissionInput): Promise<RemovePermissionOutput>;
    public removePermission(
        args: RemovePermissionInput,
        cb: (err: any, data?: RemovePermissionOutput) => void
    ): void;
    public removePermission(
        args: RemovePermissionInput,
        cb?: (err: any, data?: RemovePermissionOutput) => void
    ): Promise<RemovePermissionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new RemovePermissionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a list of tags (key-value pairs) on the Lambda function. Requires the Lambda function ARN (Amazon Resource Name). If a key is specified without a value, Lambda creates a tag with the specified key and a value of null. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/tagging.html">Tagging Lambda Functions</a> in the <b>AWS Lambda Developer Guide</b>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
    public tagResource(
        args: TagResourceInput,
        cb: (err: any, data?: TagResourceOutput) => void
    ): void;
    public tagResource(
        args: TagResourceInput,
        cb?: (err: any, data?: TagResourceOutput) => void
    ): Promise<TagResourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new TagResourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Removes tags from a Lambda function. Requires the function ARN (Amazon Resource Name). For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/tagging.html">Tagging Lambda Functions</a> in the <b>AWS Lambda Developer Guide</b>. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
    public untagResource(
        args: UntagResourceInput,
        cb: (err: any, data?: UntagResourceOutput) => void
    ): void;
    public untagResource(
        args: UntagResourceInput,
        cb?: (err: any, data?: UntagResourceOutput) => void
    ): Promise<UntagResourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UntagResourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Using this API you can update the function version to which the alias points and the alias description. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html">Introduction to AWS Lambda Aliases</a>.</p> <p>This requires permission for the lambda:UpdateAlias action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateAlias(args: UpdateAliasInput): Promise<UpdateAliasOutput>;
    public updateAlias(
        args: UpdateAliasInput,
        cb: (err: any, data?: UpdateAliasOutput) => void
    ): void;
    public updateAlias(
        args: UpdateAliasInput,
        cb?: (err: any, data?: UpdateAliasOutput) => void
    ): Promise<UpdateAliasOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateAliasCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>You can update an event source mapping. This is useful if you want to change the parameters of the existing mapping without losing your position in the stream. You can change which function will receive the stream records, but to change the stream itself, you must create a new mapping.</p> <p>If you disable the event source mapping, AWS Lambda stops polling. If you enable again, it will resume polling from the time it had stopped polling, so you don't lose processing of any records. However, if you delete event source mapping and create it again, it will reset.</p> <p>This operation requires permission for the <code>lambda:UpdateEventSourceMapping</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSoure Mapping in CREATING, or tried to delete a EventSoure mapping currently in the UPDATING state. </p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateEventSourceMapping(args: UpdateEventSourceMappingInput): Promise<UpdateEventSourceMappingOutput>;
    public updateEventSourceMapping(
        args: UpdateEventSourceMappingInput,
        cb: (err: any, data?: UpdateEventSourceMappingOutput) => void
    ): void;
    public updateEventSourceMapping(
        args: UpdateEventSourceMappingInput,
        cb?: (err: any, data?: UpdateEventSourceMappingOutput) => void
    ): Promise<UpdateEventSourceMappingOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateEventSourceMappingCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the code for the specified Lambda function. This operation must only be used on an existing Lambda function and cannot be used to update the function configuration.</p> <p>If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p> <p>This operation requires permission for the <code>lambda:UpdateFunctionCode</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a> </p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateFunctionCode(args: UpdateFunctionCodeInput): Promise<UpdateFunctionCodeOutput>;
    public updateFunctionCode(
        args: UpdateFunctionCodeInput,
        cb: (err: any, data?: UpdateFunctionCodeOutput) => void
    ): void;
    public updateFunctionCode(
        args: UpdateFunctionCodeInput,
        cb?: (err: any, data?: UpdateFunctionCodeOutput) => void
    ): Promise<UpdateFunctionCodeOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateFunctionCodeCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the configuration parameters for the specified Lambda function by using the values provided in the request. You provide only the parameters you want to change. This operation must only be used on an existing Lambda function and cannot be used to update the function's code.</p> <p>If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">AWS Lambda Function Versioning and Aliases</a>. </p> <p>This operation requires permission for the <code>lambda:UpdateFunctionConfiguration</code> action.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
     *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
     *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
     *   - {TooManyRequestsException} <p>Request throughput limit exceeded</p>
     *   - {ResourceConflictException} <p>The resource already exists.</p>
     *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateFunctionConfiguration(args: UpdateFunctionConfigurationInput): Promise<UpdateFunctionConfigurationOutput>;
    public updateFunctionConfiguration(
        args: UpdateFunctionConfigurationInput,
        cb: (err: any, data?: UpdateFunctionConfigurationOutput) => void
    ): void;
    public updateFunctionConfiguration(
        args: UpdateFunctionConfigurationInput,
        cb?: (err: any, data?: UpdateFunctionConfigurationOutput) => void
    ): Promise<UpdateFunctionConfigurationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateFunctionConfigurationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
