import { LambdaClient } from "./LambdaClient";
import { AddLayerVersionPermissionInput } from "./types/AddLayerVersionPermissionInput";
import { AddLayerVersionPermissionOutput } from "./types/AddLayerVersionPermissionOutput";
import { AddPermissionInput } from "./types/AddPermissionInput";
import { AddPermissionOutput } from "./types/AddPermissionOutput";
import { CodeStorageExceededException } from "./types/CodeStorageExceededException";
import { CreateAliasInput } from "./types/CreateAliasInput";
import { CreateAliasOutput } from "./types/CreateAliasOutput";
import { CreateEventSourceMappingInput } from "./types/CreateEventSourceMappingInput";
import { CreateEventSourceMappingOutput } from "./types/CreateEventSourceMappingOutput";
import { CreateFunctionInput } from "./types/CreateFunctionInput";
import { CreateFunctionOutput } from "./types/CreateFunctionOutput";
import { DeleteAliasInput } from "./types/DeleteAliasInput";
import { DeleteAliasOutput } from "./types/DeleteAliasOutput";
import { DeleteEventSourceMappingInput } from "./types/DeleteEventSourceMappingInput";
import { DeleteEventSourceMappingOutput } from "./types/DeleteEventSourceMappingOutput";
import { DeleteFunctionConcurrencyInput } from "./types/DeleteFunctionConcurrencyInput";
import { DeleteFunctionConcurrencyOutput } from "./types/DeleteFunctionConcurrencyOutput";
import { DeleteFunctionInput } from "./types/DeleteFunctionInput";
import { DeleteFunctionOutput } from "./types/DeleteFunctionOutput";
import { DeleteLayerVersionInput } from "./types/DeleteLayerVersionInput";
import { DeleteLayerVersionOutput } from "./types/DeleteLayerVersionOutput";
import { EC2AccessDeniedException } from "./types/EC2AccessDeniedException";
import { EC2ThrottledException } from "./types/EC2ThrottledException";
import { EC2UnexpectedException } from "./types/EC2UnexpectedException";
import { ENILimitReachedException } from "./types/ENILimitReachedException";
import { GetAccountSettingsInput } from "./types/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "./types/GetAccountSettingsOutput";
import { GetAliasInput } from "./types/GetAliasInput";
import { GetAliasOutput } from "./types/GetAliasOutput";
import { GetEventSourceMappingInput } from "./types/GetEventSourceMappingInput";
import { GetEventSourceMappingOutput } from "./types/GetEventSourceMappingOutput";
import { GetFunctionConfigurationInput } from "./types/GetFunctionConfigurationInput";
import { GetFunctionConfigurationOutput } from "./types/GetFunctionConfigurationOutput";
import { GetFunctionInput } from "./types/GetFunctionInput";
import { GetFunctionOutput } from "./types/GetFunctionOutput";
import { GetLayerVersionByArnInput } from "./types/GetLayerVersionByArnInput";
import { GetLayerVersionByArnOutput } from "./types/GetLayerVersionByArnOutput";
import { GetLayerVersionInput } from "./types/GetLayerVersionInput";
import { GetLayerVersionOutput } from "./types/GetLayerVersionOutput";
import { GetLayerVersionPolicyInput } from "./types/GetLayerVersionPolicyInput";
import { GetLayerVersionPolicyOutput } from "./types/GetLayerVersionPolicyOutput";
import { GetPolicyInput } from "./types/GetPolicyInput";
import { GetPolicyOutput } from "./types/GetPolicyOutput";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidRequestContentException } from "./types/InvalidRequestContentException";
import { InvalidRuntimeException } from "./types/InvalidRuntimeException";
import { InvalidSecurityGroupIDException } from "./types/InvalidSecurityGroupIDException";
import { InvalidSubnetIDException } from "./types/InvalidSubnetIDException";
import { InvalidZipFileException } from "./types/InvalidZipFileException";
import { InvokeAsyncInput } from "./types/InvokeAsyncInput";
import { InvokeAsyncOutput } from "./types/InvokeAsyncOutput";
import { InvokeInput } from "./types/InvokeInput";
import { InvokeOutput } from "./types/InvokeOutput";
import { KMSAccessDeniedException } from "./types/KMSAccessDeniedException";
import { KMSDisabledException } from "./types/KMSDisabledException";
import { KMSInvalidStateException } from "./types/KMSInvalidStateException";
import { KMSNotFoundException } from "./types/KMSNotFoundException";
import { ListAliasesInput } from "./types/ListAliasesInput";
import { ListAliasesOutput } from "./types/ListAliasesOutput";
import { ListEventSourceMappingsInput } from "./types/ListEventSourceMappingsInput";
import { ListEventSourceMappingsOutput } from "./types/ListEventSourceMappingsOutput";
import { ListFunctionsInput } from "./types/ListFunctionsInput";
import { ListFunctionsOutput } from "./types/ListFunctionsOutput";
import { ListLayerVersionsInput } from "./types/ListLayerVersionsInput";
import { ListLayerVersionsOutput } from "./types/ListLayerVersionsOutput";
import { ListLayersInput } from "./types/ListLayersInput";
import { ListLayersOutput } from "./types/ListLayersOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { ListVersionsByFunctionInput } from "./types/ListVersionsByFunctionInput";
import { ListVersionsByFunctionOutput } from "./types/ListVersionsByFunctionOutput";
import { PolicyLengthExceededException } from "./types/PolicyLengthExceededException";
import { PreconditionFailedException } from "./types/PreconditionFailedException";
import { PublishLayerVersionInput } from "./types/PublishLayerVersionInput";
import { PublishLayerVersionOutput } from "./types/PublishLayerVersionOutput";
import { PublishVersionInput } from "./types/PublishVersionInput";
import { PublishVersionOutput } from "./types/PublishVersionOutput";
import { PutFunctionConcurrencyInput } from "./types/PutFunctionConcurrencyInput";
import { PutFunctionConcurrencyOutput } from "./types/PutFunctionConcurrencyOutput";
import { RemoveLayerVersionPermissionInput } from "./types/RemoveLayerVersionPermissionInput";
import { RemoveLayerVersionPermissionOutput } from "./types/RemoveLayerVersionPermissionOutput";
import { RemovePermissionInput } from "./types/RemovePermissionInput";
import { RemovePermissionOutput } from "./types/RemovePermissionOutput";
import { RequestTooLargeException } from "./types/RequestTooLargeException";
import { ResourceConflictException } from "./types/ResourceConflictException";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceException } from "./types/ServiceException";
import { SubnetIPAddressLimitReachedException } from "./types/SubnetIPAddressLimitReachedException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnsupportedMediaTypeException } from "./types/UnsupportedMediaTypeException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAliasInput } from "./types/UpdateAliasInput";
import { UpdateAliasOutput } from "./types/UpdateAliasOutput";
import { UpdateEventSourceMappingInput } from "./types/UpdateEventSourceMappingInput";
import { UpdateEventSourceMappingOutput } from "./types/UpdateEventSourceMappingOutput";
import { UpdateFunctionCodeInput } from "./types/UpdateFunctionCodeInput";
import { UpdateFunctionCodeOutput } from "./types/UpdateFunctionCodeOutput";
import { UpdateFunctionConfigurationInput } from "./types/UpdateFunctionConfigurationInput";
import { UpdateFunctionConfigurationOutput } from "./types/UpdateFunctionConfigurationOutput";
import { AddLayerVersionPermissionCommand } from "./commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommand } from "./commands/AddPermissionCommand";
import { CreateAliasCommand } from "./commands/CreateAliasCommand";
import { CreateEventSourceMappingCommand } from "./commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommand } from "./commands/CreateFunctionCommand";
import { DeleteAliasCommand } from "./commands/DeleteAliasCommand";
import { DeleteEventSourceMappingCommand } from "./commands/DeleteEventSourceMappingCommand";
import { DeleteFunctionCommand } from "./commands/DeleteFunctionCommand";
import { DeleteFunctionConcurrencyCommand } from "./commands/DeleteFunctionConcurrencyCommand";
import { DeleteLayerVersionCommand } from "./commands/DeleteLayerVersionCommand";
import { GetAccountSettingsCommand } from "./commands/GetAccountSettingsCommand";
import { GetAliasCommand } from "./commands/GetAliasCommand";
import { GetEventSourceMappingCommand } from "./commands/GetEventSourceMappingCommand";
import { GetFunctionCommand } from "./commands/GetFunctionCommand";
import { GetFunctionConfigurationCommand } from "./commands/GetFunctionConfigurationCommand";
import { GetLayerVersionByArnCommand } from "./commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommand } from "./commands/GetLayerVersionCommand";
import { GetLayerVersionPolicyCommand } from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { InvokeAsyncCommand } from "./commands/InvokeAsyncCommand";
import { InvokeCommand } from "./commands/InvokeCommand";
import { ListAliasesCommand } from "./commands/ListAliasesCommand";
import { ListEventSourceMappingsCommand } from "./commands/ListEventSourceMappingsCommand";
import { ListFunctionsCommand } from "./commands/ListFunctionsCommand";
import { ListLayerVersionsCommand } from "./commands/ListLayerVersionsCommand";
import { ListLayersCommand } from "./commands/ListLayersCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ListVersionsByFunctionCommand } from "./commands/ListVersionsByFunctionCommand";
import { PublishLayerVersionCommand } from "./commands/PublishLayerVersionCommand";
import { PublishVersionCommand } from "./commands/PublishVersionCommand";
import { PutFunctionConcurrencyCommand } from "./commands/PutFunctionConcurrencyCommand";
import { RemoveLayerVersionPermissionCommand } from "./commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommand } from "./commands/RemovePermissionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAliasCommand } from "./commands/UpdateAliasCommand";
import { UpdateEventSourceMappingCommand } from "./commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommand } from "./commands/UpdateFunctionCodeCommand";
import { UpdateFunctionConfigurationCommand } from "./commands/UpdateFunctionConfigurationCommand";

export class Lambda extends LambdaClient {
  /**
   * <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization.</p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {PolicyLengthExceededException} <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionInput
  ): Promise<AddLayerVersionPermissionOutput>;
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionInput,
    cb: (err: any, data?: AddLayerVersionPermissionOutput) => void
  ): void;
  public addLayerVersionPermission(
    args: AddLayerVersionPermissionInput,
    cb?: (err: any, data?: AddLayerVersionPermissionOutput) => void
  ): Promise<AddLayerVersionPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddLayerVersionPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For AWS services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For AWS services, you can also specify the ARN or owning account of the associated resource as the <code>SourceArn</code> or <code>SourceAccount</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This action adds a statement to a resource-based permission policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {PolicyLengthExceededException} <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<AddPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<CreateAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function.</p> <p>For details about each event source type, see the following topics.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Using AWS Lambda with Amazon Kinesis</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html">Using AWS Lambda with Amazon SQS</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">Using AWS Lambda with Amazon DynamoDB</a> </p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEventSourceMapping(
    args: CreateEventSourceMappingInput
  ): Promise<CreateEventSourceMappingOutput>;
  public createEventSourceMapping(
    args: CreateEventSourceMappingInput,
    cb: (err: any, data?: CreateEventSourceMappingOutput) => void
  ): void;
  public createEventSourceMapping(
    args: CreateEventSourceMappingInput,
    cb?: (err: any, data?: CreateEventSourceMappingOutput) => void
  ): Promise<CreateEventSourceMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEventSourceMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/deployment-package-v2.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>If another account or an AWS service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other AWS services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-functions.html">Invoking Functions</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFunction(
    args: CreateFunctionInput
  ): Promise<CreateFunctionOutput>;
  public createFunction(
    args: CreateFunctionInput,
    cb: (err: any, data?: CreateFunctionOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionInput,
    cb?: (err: any, data?: CreateFunctionOutput) => void
  ): Promise<CreateFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<DeleteAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSource Mapping in CREATING, or tried to delete a EventSource mapping currently in the UPDATING state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingInput
  ): Promise<DeleteEventSourceMappingOutput>;
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingInput,
    cb: (err: any, data?: DeleteEventSourceMappingOutput) => void
  ): void;
  public deleteEventSourceMapping(
    args: DeleteEventSourceMappingInput,
    cb?: (err: any, data?: DeleteEventSourceMappingOutput) => void
  ): Promise<DeleteEventSourceMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventSourceMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For AWS services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFunction(
    args: DeleteFunctionInput
  ): Promise<DeleteFunctionOutput>;
  public deleteFunction(
    args: DeleteFunctionInput,
    cb: (err: any, data?: DeleteFunctionOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionInput,
    cb?: (err: any, data?: DeleteFunctionOutput) => void
  ): Promise<DeleteFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a concurrent execution limit from a function.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyInput
  ): Promise<DeleteFunctionConcurrencyOutput>;
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyInput,
    cb: (err: any, data?: DeleteFunctionConcurrencyOutput) => void
  ): void;
  public deleteFunctionConcurrency(
    args: DeleteFunctionConcurrencyInput,
    cb?: (err: any, data?: DeleteFunctionConcurrencyOutput) => void
  ): Promise<DeleteFunctionConcurrencyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFunctionConcurrencyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLayerVersion(
    args: DeleteLayerVersionInput
  ): Promise<DeleteLayerVersionOutput>;
  public deleteLayerVersion(
    args: DeleteLayerVersionInput,
    cb: (err: any, data?: DeleteLayerVersionOutput) => void
  ): void;
  public deleteLayerVersion(
    args: DeleteLayerVersionInput,
    cb?: (err: any, data?: DeleteLayerVersionOutput) => void
  ): Promise<DeleteLayerVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLayerVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an AWS Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountSettings(
    args: GetAccountSettingsInput
  ): Promise<GetAccountSettingsOutput>;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb: (err: any, data?: GetAccountSettingsOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsInput,
    cb?: (err: any, data?: GetAccountSettingsOutput) => void
  ): Promise<GetAccountSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<GetAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEventSourceMapping(
    args: GetEventSourceMappingInput
  ): Promise<GetEventSourceMappingOutput>;
  public getEventSourceMapping(
    args: GetEventSourceMappingInput,
    cb: (err: any, data?: GetEventSourceMappingOutput) => void
  ): void;
  public getEventSourceMapping(
    args: GetEventSourceMappingInput,
    cb?: (err: any, data?: GetEventSourceMappingOutput) => void
  ): Promise<GetEventSourceMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEventSourceMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<GetFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFunctionConfiguration(
    args: GetFunctionConfigurationInput
  ): Promise<GetFunctionConfigurationOutput>;
  public getFunctionConfiguration(
    args: GetFunctionConfigurationInput,
    cb: (err: any, data?: GetFunctionConfigurationOutput) => void
  ): void;
  public getFunctionConfiguration(
    args: GetFunctionConfigurationInput,
    cb?: (err: any, data?: GetFunctionConfigurationOutput) => void
  ): Promise<GetFunctionConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFunctionConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLayerVersion(
    args: GetLayerVersionInput
  ): Promise<GetLayerVersionOutput>;
  public getLayerVersion(
    args: GetLayerVersionInput,
    cb: (err: any, data?: GetLayerVersionOutput) => void
  ): void;
  public getLayerVersion(
    args: GetLayerVersionInput,
    cb?: (err: any, data?: GetLayerVersionOutput) => void
  ): Promise<GetLayerVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLayerVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLayerVersionByArn(
    args: GetLayerVersionByArnInput
  ): Promise<GetLayerVersionByArnOutput>;
  public getLayerVersionByArn(
    args: GetLayerVersionByArnInput,
    cb: (err: any, data?: GetLayerVersionByArnOutput) => void
  ): void;
  public getLayerVersionByArn(
    args: GetLayerVersionByArnInput,
    cb?: (err: any, data?: GetLayerVersionByArnOutput) => void
  ): Promise<GetLayerVersionByArnOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLayerVersionByArnCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyInput
  ): Promise<GetLayerVersionPolicyOutput>;
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyInput,
    cb: (err: any, data?: GetLayerVersionPolicyOutput) => void
  ): void;
  public getLayerVersionPolicy(
    args: GetLayerVersionPolicyInput,
    cb?: (err: any, data?: GetLayerVersionPolicyOutput) => void
  ): Promise<GetLayerVersionPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLayerVersionPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<GetPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For synchronous invocation, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/dlq.html">trace</a>. To record function errors for asynchronous invocations, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/dlq.html">dead letter queue</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <code>lambda:InvokeFunction</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidRequestContentException} <p>The request body could not be parsed as JSON.</p>
   *   - {RequestTooLargeException} <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
   *   - {UnsupportedMediaTypeException} <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<InvokeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InvokeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>
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
  ): Promise<InvokeAsyncOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InvokeAsyncCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a> for a Lambda function.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<ListAliasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAliasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a single event source.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEventSourceMappings(
    args: ListEventSourceMappingsInput
  ): Promise<ListEventSourceMappingsOutput>;
  public listEventSourceMappings(
    args: ListEventSourceMappingsInput,
    cb: (err: any, data?: ListEventSourceMappingsOutput) => void
  ): void;
  public listEventSourceMappings(
    args: ListEventSourceMappingsInput,
    cb?: (err: any, data?: ListEventSourceMappingsOutput) => void
  ): Promise<ListEventSourceMappingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEventSourceMappingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of Lambda functions, with the version-specific configuration of each.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version. To get more information about a function or version, use <a>GetFunction</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<ListFunctionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFunctionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLayerVersions(
    args: ListLayerVersionsInput
  ): Promise<ListLayerVersionsOutput>;
  public listLayerVersions(
    args: ListLayerVersionsInput,
    cb: (err: any, data?: ListLayerVersionsOutput) => void
  ): void;
  public listLayerVersions(
    args: ListLayerVersionsInput,
    cb?: (err: any, data?: ListLayerVersionsOutput) => void
  ): Promise<ListLayerVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLayerVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLayers(args: ListLayersInput): Promise<ListLayersOutput>;
  public listLayers(
    args: ListLayersInput,
    cb: (err: any, data?: ListLayersOutput) => void
  ): void;
  public listLayers(
    args: ListLayersInput,
    cb?: (err: any, data?: ListLayersOutput) => void
  ): Promise<ListLayersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLayersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVersionsByFunction(
    args: ListVersionsByFunctionInput
  ): Promise<ListVersionsByFunctionOutput>;
  public listVersionsByFunction(
    args: ListVersionsByFunctionInput,
    cb: (err: any, data?: ListVersionsByFunctionOutput) => void
  ): void;
  public listVersionsByFunction(
    args: ListVersionsByFunctionInput,
    cb?: (err: any, data?: ListVersionsByFunctionOutput) => void
  ): Promise<ListVersionsByFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVersionsByFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same version name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public publishLayerVersion(
    args: PublishLayerVersionInput
  ): Promise<PublishLayerVersionOutput>;
  public publishLayerVersion(
    args: PublishLayerVersionInput,
    cb: (err: any, data?: PublishLayerVersionOutput) => void
  ): void;
  public publishLayerVersion(
    args: PublishLayerVersionInput,
    cb?: (err: any, data?: PublishLayerVersionOutput) => void
  ): Promise<PublishLayerVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PublishLayerVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public publishVersion(
    args: PublishVersionInput
  ): Promise<PublishVersionOutput>;
  public publishVersion(
    args: PublishVersionInput,
    cb: (err: any, data?: PublishVersionOutput) => void
  ): void;
  public publishVersion(
    args: PublishVersionInput,
    cb?: (err: any, data?: PublishVersionOutput) => void
  ): Promise<PublishVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PublishVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyInput
  ): Promise<PutFunctionConcurrencyOutput>;
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyInput,
    cb: (err: any, data?: PutFunctionConcurrencyOutput) => void
  ): void;
  public putFunctionConcurrency(
    args: PutFunctionConcurrencyInput,
    cb?: (err: any, data?: PutFunctionConcurrencyOutput) => void
  ): Promise<PutFunctionConcurrencyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutFunctionConcurrencyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionInput
  ): Promise<RemoveLayerVersionPermissionOutput>;
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionInput,
    cb: (err: any, data?: RemoveLayerVersionPermissionOutput) => void
  ): void;
  public removeLayerVersionPermission(
    args: RemoveLayerVersionPermissionInput,
    cb?: (err: any, data?: RemoveLayerVersionPermissionOutput) => void
  ): Promise<RemoveLayerVersionPermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveLayerVersionPermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Revokes function-use permission from an AWS service or another account. You can get the ID of the statement from the output of <a>GetPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removePermission(
    args: RemovePermissionInput
  ): Promise<RemovePermissionOutput>;
  public removePermission(
    args: RemovePermissionInput,
    cb: (err: any, data?: RemovePermissionOutput) => void
  ): void;
  public removePermission(
    args: RemovePermissionInput,
    cb?: (err: any, data?: RemovePermissionOutput) => void
  ): Promise<RemovePermissionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemovePermissionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
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
  ): Promise<UpdateAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {ResourceInUseException} <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSource Mapping in CREATING, or tried to delete a EventSource mapping currently in the UPDATING state. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingInput
  ): Promise<UpdateEventSourceMappingOutput>;
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingInput,
    cb: (err: any, data?: UpdateEventSourceMappingOutput) => void
  ): void;
  public updateEventSourceMapping(
    args: UpdateEventSourceMappingInput,
    cb?: (err: any, data?: UpdateEventSourceMappingOutput) => void
  ): Promise<UpdateEventSourceMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEventSourceMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a Lambda function's code.</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {CodeStorageExceededException} <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a> </p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFunctionCode(
    args: UpdateFunctionCodeInput
  ): Promise<UpdateFunctionCodeOutput>;
  public updateFunctionCode(
    args: UpdateFunctionCodeInput,
    cb: (err: any, data?: UpdateFunctionCodeOutput) => void
  ): void;
  public updateFunctionCode(
    args: UpdateFunctionCodeInput,
    cb?: (err: any, data?: UpdateFunctionCodeOutput) => void
  ): Promise<UpdateFunctionCodeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFunctionCodeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Modify the version-specific settings of a Lambda function.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an account or AWS service, use <a>AddPermission</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>The AWS Lambda service encountered an internal error.</p>
   *   - {ResourceNotFoundException} <p>The resource (for example, a Lambda function or access policy statement) specified in the request does not exist.</p>
   *   - {InvalidParameterValueException} <p>One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>CreateFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception.</p>
   *   - {TooManyRequestsException} <p>Request throughput limit exceeded.</p>
   *   - {ResourceConflictException} <p>The resource already exists.</p>
   *   - {PreconditionFailedException} <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationInput
  ): Promise<UpdateFunctionConfigurationOutput>;
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationInput,
    cb: (err: any, data?: UpdateFunctionConfigurationOutput) => void
  ): void;
  public updateFunctionConfiguration(
    args: UpdateFunctionConfigurationInput,
    cb?: (err: any, data?: UpdateFunctionConfigurationOutput) => void
  ): Promise<UpdateFunctionConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFunctionConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
