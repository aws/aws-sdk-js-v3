// smithy-typescript generated code
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeWithResponseStreamRequest, InvokeWithResponseStreamResponse } from "../models/models_0";
import { InvokeWithResponseStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeWithResponseStreamCommandInputType = Omit<InvokeWithResponseStreamRequest, "Payload"> & {
  Payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeWithResponseStreamCommand}.
 */
export interface InvokeWithResponseStreamCommandInput extends InvokeWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeWithResponseStreamCommand}.
 */
export interface InvokeWithResponseStreamCommandOutput extends InvokeWithResponseStreamResponse, __MetadataBearer {}

/**
 * Configure your Lambda Event Functions to stream response payloads back to clients. For more information, see [Configuring a Lambda function to stream responses](https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html).
 *
 * This operation requires permission for the [lambda:InvokeFunction](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html) action. For details on how to set up permissions for cross-account invocations, see [Granting function access to other accounts](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeWithResponseStreamCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeWithResponseStreamCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // InvokeWithResponseStreamRequest
 *   FunctionName: "STRING_VALUE", // required
 *   LogType: "None" || "Tail",
 *   ClientContext: "STRING_VALUE",
 *   Qualifier: "STRING_VALUE",
 *   Payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   TenantId: "STRING_VALUE",
 *   InvocationType: "RequestResponse" || "DryRun",
 * };
 * const command = new InvokeWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeWithResponseStreamResponse
 * //   StatusCode: Number("int"),
 * //   ExecutedVersion: "STRING_VALUE",
 * //   EventStream: { // InvokeWithResponseStreamResponseEvent Union: only one key present
 * //     PayloadChunk: { // InvokeResponseStreamUpdate
 * //       Payload: new Uint8Array(),
 * //     },
 * //     InvokeComplete: { // InvokeWithResponseStreamCompleteEvent
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorDetails: "STRING_VALUE",
 * //       LogResult: "STRING_VALUE",
 * //     },
 * //   },
 * //   ResponseStreamContentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeWithResponseStreamCommandInput - {@link InvokeWithResponseStreamCommandInput}
 * @returns {@link InvokeWithResponseStreamCommandOutput}
 * @see {@link InvokeWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeWithResponseStreamCommandOutput} for command's `response` shape.
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
 * @public
 */
export class InvokeWithResponseStreamCommand extends command<InvokeWithResponseStreamCommandInput, InvokeWithResponseStreamCommandOutput>(
  _ep0,
  _mw0,
  "InvokeWithResponseStream",
  InvokeWithResponseStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeWithResponseStreamRequest;
      output: InvokeWithResponseStreamResponse;
    };
    sdk: {
      input: InvokeWithResponseStreamCommandInput;
      output: InvokeWithResponseStreamCommandOutput;
    };
  };
}
