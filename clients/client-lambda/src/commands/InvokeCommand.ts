// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvocationRequest, InvocationResponse } from "../models/models_0";
import { Invoke$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeCommandInputType = Omit<InvocationRequest, "Payload"> & {
  Payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeCommand}.
 */
export interface InvokeCommandInput extends InvokeCommandInputType {}
/**
 * @public
 */
export type InvokeCommandOutputType = Omit<InvocationResponse, "Payload"> & {
  Payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeCommand}.
 */
export interface InvokeCommandOutput extends InvokeCommandOutputType, __MetadataBearer {}

/**
 * Invokes a Lambda Event Function. You can invoke a function synchronously (and wait for the response), or asynchronously. By default, Lambda invokes your function synchronously (i.e. the`InvocationType` is `RequestResponse`). To invoke a function asynchronously, set `InvocationType` to `Event`. Lambda passes the `ClientContext` object to your function for synchronous invocations only.
 *
 * For synchronous invocations, the maximum payload size is 6 MB. For asynchronous invocations, the maximum payload size is 1 MB.
 *
 * For [synchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html), details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the [execution log](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html) and [trace](https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html).
 *
 * When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see [Error handling and automatic retries in Lambda](https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html).
 *
 * For [asynchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html), Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a [dead-letter queue](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
 *
 * The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, [quota](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html) errors, or issues with your function's code and configuration. For example, Lambda returns `TooManyRequestsException` if running the function would cause you to exceed a concurrency limit at either the account level (`ConcurrentInvocationLimitExceeded`) or function level (`ReservedFunctionConcurrentInvocationLimitExceeded`).
 *
 * For functions with a long timeout, your client might disconnect during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.
 *
 * This operation requires permission for the [lambda:InvokeFunction](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html) action. For details on how to set up permissions for cross-account invocations, see [Granting function access to other accounts](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // InvocationRequest
 *   FunctionName: "STRING_VALUE", // required
 *   InvocationType: "Event" || "RequestResponse" || "DryRun",
 *   LogType: "None" || "Tail",
 *   ClientContext: "STRING_VALUE",
 *   DurableExecutionName: "STRING_VALUE",
 *   Payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Qualifier: "STRING_VALUE",
 *   TenantId: "STRING_VALUE",
 * };
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * // { // InvocationResponse
 * //   StatusCode: Number("int"),
 * //   FunctionError: "STRING_VALUE",
 * //   LogResult: "STRING_VALUE",
 * //   Payload: new Uint8Array(),
 * //   ExecutedVersion: "STRING_VALUE",
 * //   DurableExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeCommandInput - {@link InvokeCommandInput}
 * @returns {@link InvokeCommandOutput}
 * @see {@link InvokeCommandInput} for command's `input` shape.
 * @see {@link InvokeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeArtifactUserDeletedException} (client fault)
 *
 * The Lambda function couldn't be invoked because its code artifact user has been deleted. Wait for Lambda to provision a new code artifact user, or update the function's code package to recreate it.
 *
 * @throws {@link CodeArtifactUserFailedException} (client fault)
 *
 * The Lambda function couldn't be invoked because provisioning of its code artifact user failed. Update the function's code package or check the Lambda function's `State` and `StateReasonCode` for additional context.
 *
 * @throws {@link CodeArtifactUserPendingException} (client fault)
 *
 * The Lambda function couldn't be invoked because its code artifact user is still being provisioned. Wait for the function's `State` to become `Active` and try the request again.
 *
 * @throws {@link DurableExecutionAlreadyStartedException} (client fault)
 *
 * The durable execution with the specified name has already been started. Each durable execution name must be unique within the function. Use a different name or check the status of the existing execution.
 *
 * @throws {@link EC2AccessDeniedException} (server fault)
 *
 * Need additional permissions to configure VPC settings.
 *
 * @throws {@link EC2ThrottledException} (server fault)
 *
 * Amazon EC2 throttled Lambda during Lambda function initialization using the execution role provided for the function.
 *
 * @throws {@link EC2UnexpectedException} (server fault)
 *
 * Lambda received an unexpected Amazon EC2 client exception while setting up for the Lambda function.
 *
 * @throws {@link EFSIOException} (client fault)
 *
 * An error occurred when reading from or writing to a connected file system.
 *
 * @throws {@link EFSMountConnectivityException} (client fault)
 *
 * The Lambda function couldn't make a network connection to the configured file system.
 *
 * @throws {@link EFSMountFailureException} (client fault)
 *
 * The Lambda function couldn't mount the configured file system due to a permission or configuration issue.
 *
 * @throws {@link EFSMountTimeoutException} (client fault)
 *
 * The Lambda function made a network connection to the configured file system, but the mount operation timed out.
 *
 * @throws {@link ENILimitReachedException} (server fault)
 *
 * Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).
 *
 * @throws {@link ENINotReadyException} (server fault)
 *
 * Lambda couldn't invoke the Lambda function because the elastic network interface (ENI) configured for its VPC connection isn't ready yet. Wait a few moments and try the request again. For more information about VPC configuration, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link InvalidRequestContentException} (client fault)
 *
 * The request body could not be parsed as JSON, or a request header is invalid. For example, the 'x-amzn-RequestId' header is not a valid UUID string.
 *
 * @throws {@link InvalidRuntimeException} (server fault)
 *
 * The runtime or runtime version specified is not supported.
 *
 * @throws {@link InvalidSecurityGroupIDException} (server fault)
 *
 * The security group ID provided in the Lambda function VPC configuration is not valid.
 *
 * @throws {@link InvalidSubnetIDException} (server fault)
 *
 * The subnet ID provided in the Lambda function VPC configuration is not valid.
 *
 * @throws {@link InvalidZipFileException} (server fault)
 *
 * Lambda could not unzip the deployment package.
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.
 *
 * @throws {@link KMSDisabledException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *
 * Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.
 *
 * @throws {@link ModeNotSupportedException} (client fault)
 *
 * The Lambda function doesn't support the invocation mode requested. For example, calling `Invoke` with `InvocationType=RequestResponse` on a function configured for asynchronous-only invocation, or vice versa. For more information about invocation types, see [Invoking Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/invocation-options.html).
 *
 * @throws {@link NoPublishedVersionException} (client fault)
 *
 * The function has no published versions available.
 *
 * @throws {@link RecursiveInvocationException} (client fault)
 *
 * Lambda has detected your function being invoked in a recursive loop with other Amazon Web Services resources and stopped your function's invocation.
 *
 * @throws {@link RequestTooLargeException} (client fault)
 *
 * The request payload exceeded the `Invoke` request body JSON input quota. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ResourceNotReadyException} (server fault)
 *
 * The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to reestablish and try again.
 *
 * @throws {@link S3FilesMountConnectivityException} (client fault)
 *
 * The Lambda function couldn't make a network connection to the configured S3 Files access point.
 *
 * @throws {@link S3FilesMountFailureException} (client fault)
 *
 * The Lambda function couldn't mount the configured S3 Files access point due to a permission or configuration issue.
 *
 * @throws {@link S3FilesMountTimeoutException} (client fault)
 *
 * The Lambda function made a network connection to the configured S3 Files access point, but the mount operation timed out.
 *
 * @throws {@link SerializedRequestEntityTooLargeException} (client fault)
 *
 * The request payload exceeded the maximum allowed size for serialized request entities.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed a service quota. For more information about Lambda service quotas, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html). To request a quota increase, see [Requesting a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html) in the *Service Quotas User Guide*.
 *
 * @throws {@link SnapStartException} (client fault)
 *
 * The `afterRestore()` [runtime hook](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-runtime-hooks.html) encountered an error. For more information, check the Amazon CloudWatch logs.
 *
 * @throws {@link SnapStartNotReadyException} (client fault)
 *
 * Lambda is initializing your function. You can invoke the function when the [function state](https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html) becomes `Active`.
 *
 * @throws {@link SnapStartRegenerationFailureException} (client fault)
 *
 * Lambda couldn't regenerate the SnapStart snapshot for the function. SnapStart-enabled functions periodically regenerate snapshots when their underlying runtime or dependencies change; this regeneration failed. Wait for Lambda to retry, or update the function's configuration to trigger a new snapshot. For more information, see [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html).
 *
 * @throws {@link SnapStartTimeoutException} (client fault)
 *
 * Lambda couldn't restore the snapshot within the timeout limit.
 *
 * @throws {@link SubnetIPAddressLimitReachedException} (server fault)
 *
 * Lambda couldn't set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link UnsupportedMediaTypeException} (client fault)
 *
 * The content type of the `Invoke` request body is not JSON.
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To invoke a Lambda function
 * ```javascript
 * // The following example invokes version 1 of a function named my-function with an empty event payload.
 * const input = {
 *   DurableExecutionName: "myExecution",
 *   FunctionName: "my-function",
 *   InvocationType: "Event",
 *   Payload: "{}",
 *   Qualifier: "1"
 * };
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Payload: "200 SUCCESS",
 *   StatusCode: 200
 * }
 * *\/
 * ```
 *
 * @example To invoke a Lambda function asynchronously
 * ```javascript
 * // The following example invokes version 1 of a function named my-function asynchronously.
 * const input = {
 *   FunctionName: "my-function",
 *   InvocationType: "Event",
 *   Payload: "{}",
 *   Qualifier: "1"
 * };
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Payload: "",
 *   StatusCode: 202
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InvokeCommand extends command<InvokeCommandInput, InvokeCommandOutput>(
  _ep0,
  _mw0,
  "Invoke",
  Invoke$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvocationRequest;
      output: InvocationResponse;
    };
    sdk: {
      input: InvokeCommandInput;
      output: InvokeCommandOutput;
    };
  };
}
