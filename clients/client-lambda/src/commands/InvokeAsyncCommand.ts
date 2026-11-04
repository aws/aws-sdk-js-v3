// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0";
import { InvokeAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeAsyncCommand}.
 */
export interface InvokeAsyncCommandInput extends Omit<InvokeAsyncRequest, "InvokeArgs"> {
  InvokeArgs: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link InvokeAsyncCommand}.
 */
export interface InvokeAsyncCommandOutput extends InvokeAsyncResponse, __MetadataBearer {}

/**
 * > **Note:** For asynchronous function invocation, use Invoke.
 *
 * Invokes a function asynchronously.
 *
 * > **Note:** The payload limit is 256KB. For larger payloads, for up to 1MB, use Invoke.
 *
 * > **Note:** If you do use the InvokeAsync action, note that it doesn't support the use of X-Ray active tracing. Trace ID is not propagated to the function, even if X-Ray active tracing is turned on.
 *
 * @deprecated deprecated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeAsyncCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeAsyncCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // InvokeAsyncRequest
 *   FunctionName: "STRING_VALUE", // required
 *   InvokeArgs: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 * };
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAsyncResponse
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param InvokeAsyncCommandInput - {@link InvokeAsyncCommandInput}
 * @returns {@link InvokeAsyncCommandOutput}
 * @see {@link InvokeAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeAsyncCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
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
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To invoke a Lambda function asynchronously
 * ```javascript
 * // The following example invokes a Lambda function asynchronously
 * const input = {
 *   FunctionName: "my-function",
 *   InvokeArgs: "{}"
 * };
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: 202
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InvokeAsyncCommand extends command<InvokeAsyncCommandInput, InvokeAsyncCommandOutput>(
  _ep0,
  _mw0,
  "InvokeAsync",
  InvokeAsync$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeAsyncRequest;
      output: InvokeAsyncResponse;
    };
    sdk: {
      input: InvokeAsyncCommandInput;
      output: InvokeAsyncCommandOutput;
    };
  };
}
