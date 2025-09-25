// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { InvokeWithResponseStreamRequest, InvokeWithResponseStreamResponse } from "../models/models_0";
import { InvokeWithResponseStream } from "../schemas/schemas_3_Function";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function access to other accounts</a>.</p>
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
 *   InvocationType: "RequestResponse" || "DryRun",
 *   LogType: "None" || "Tail",
 *   ClientContext: "STRING_VALUE",
 *   Qualifier: "STRING_VALUE",
 *   Payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
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
 * @throws {@link EC2AccessDeniedException} (server fault)
 *  <p>Need additional permissions to configure VPC settings.</p>
 *
 * @throws {@link EC2ThrottledException} (server fault)
 *  <p>Amazon EC2 throttled Lambda during Lambda function initialization using the execution role provided for the function.</p>
 *
 * @throws {@link EC2UnexpectedException} (server fault)
 *  <p>Lambda received an unexpected Amazon EC2 client exception while setting up for the Lambda function.</p>
 *
 * @throws {@link EFSIOException} (client fault)
 *  <p>An error occurred when reading from or writing to a connected file system.</p>
 *
 * @throws {@link EFSMountConnectivityException} (client fault)
 *  <p>The Lambda function couldn't make a network connection to the configured file system.</p>
 *
 * @throws {@link EFSMountFailureException} (client fault)
 *  <p>The Lambda function couldn't mount the configured file system due to a permission or configuration issue.</p>
 *
 * @throws {@link EFSMountTimeoutException} (client fault)
 *  <p>The Lambda function made a network connection to the configured file system, but the mount operation timed out.</p>
 *
 * @throws {@link ENILimitReachedException} (server fault)
 *  <p>Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link InvalidRequestContentException} (client fault)
 *  <p>The request body could not be parsed as JSON, or a request header is invalid. For example, the 'x-amzn-RequestId' header is not a valid UUID string.</p>
 *
 * @throws {@link InvalidRuntimeException} (server fault)
 *  <p>The runtime or runtime version specified is not supported.</p>
 *
 * @throws {@link InvalidSecurityGroupIDException} (server fault)
 *  <p>The security group ID provided in the Lambda function VPC configuration is not valid.</p>
 *
 * @throws {@link InvalidSubnetIDException} (server fault)
 *  <p>The subnet ID provided in the Lambda function VPC configuration is not valid.</p>
 *
 * @throws {@link InvalidZipFileException} (server fault)
 *  <p>Lambda could not unzip the deployment package.</p>
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
 *
 * @throws {@link KMSDisabledException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.</p>
 *
 * @throws {@link RecursiveInvocationException} (client fault)
 *  <p>Lambda has detected your function being invoked in a recursive loop with other Amazon Web Services resources and stopped your function's invocation.</p>
 *
 * @throws {@link RequestTooLargeException} (client fault)
 *  <p>The request payload exceeded the <code>Invoke</code> request body JSON input quota. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ResourceNotReadyException} (server fault)
 *  <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to reestablish and try again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link SnapStartException} (client fault)
 *  <p>The <code>afterRestore()</code> <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-runtime-hooks.html">runtime hook</a> encountered an error. For more information, check the Amazon CloudWatch logs.</p>
 *
 * @throws {@link SnapStartNotReadyException} (client fault)
 *  <p>Lambda is initializing your function. You can invoke the function when the <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">function state</a> becomes <code>Active</code>.</p>
 *
 * @throws {@link SnapStartTimeoutException} (client fault)
 *  <p>Lambda couldn't restore the snapshot within the timeout limit.</p>
 *
 * @throws {@link SubnetIPAddressLimitReachedException} (server fault)
 *  <p>Lambda couldn't set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link UnsupportedMediaTypeException} (client fault)
 *  <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class InvokeWithResponseStreamCommand extends $Command
  .classBuilder<
    InvokeWithResponseStreamCommandInput,
    InvokeWithResponseStreamCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "InvokeWithResponseStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("LambdaClient", "InvokeWithResponseStreamCommand")
  .sc(InvokeWithResponseStream)
  .build() {
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
