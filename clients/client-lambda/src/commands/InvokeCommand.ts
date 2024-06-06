// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  InvocationRequest,
  InvocationRequestFilterSensitiveLog,
  InvocationResponse,
  InvocationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeCommand, se_InvokeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or
 *       asynchronously. By default, Lambda invokes your function synchronously (i.e. the<code>InvocationType</code>
 *       is <code>RequestResponse</code>). To invoke a function asynchronously, set <code>InvocationType</code> to
 *       <code>Event</code>. Lambda passes the <code>ClientContext</code> object to your function for
 *       synchronous invocations only.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>,
 *       details about the function response, including errors, are included in the response body and headers. For either
 *       invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p>
 *          <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type,
 *       client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an
 *       error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-retries.html">Error handling and automatic retries in
 *           Lambda</a>.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>,
 *       Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity
 *       to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple
 *       times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">dead-letter queue</a>.</p>
 *          <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that
 *       prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">quota</a> errors, or issues with your function's code and
 *       configuration. For example, Lambda returns <code>TooManyRequestsException</code> if running the
 *       function would cause you to exceed a concurrency limit at either the account level
 *         (<code>ConcurrentInvocationLimitExceeded</code>) or function level
 *         (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p>
 *          <p>For functions with a long timeout, your client might disconnect during synchronous invocation while it waits
 *       for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long
 *       connections with timeout or keep-alive settings.</p>
 *          <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action. For details on how to set up
 *       permissions for cross-account invocations, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountinvoke">Granting function
 *       access to other accounts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // InvocationRequest
 *   FunctionName: "STRING_VALUE", // required
 *   InvocationType: "Event" || "RequestResponse" || "DryRun",
 *   LogType: "None" || "Tail",
 *   ClientContext: "STRING_VALUE",
 *   Payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new InvokeCommand(input);
 * const response = await client.send(command);
 * // { // InvocationResponse
 * //   StatusCode: Number("int"),
 * //   FunctionError: "STRING_VALUE",
 * //   LogResult: "STRING_VALUE",
 * //   Payload: new Uint8Array(),
 * //   ExecutedVersion: "STRING_VALUE",
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
 * @throws {@link EC2AccessDeniedException} (server fault)
 *  <p>Need additional permissions to configure VPC settings.</p>
 *
 * @throws {@link EC2ThrottledException} (server fault)
 *  <p>Amazon EC2 throttled Lambda during Lambda function initialization using
 *       the execution role provided for the function.</p>
 *
 * @throws {@link EC2UnexpectedException} (server fault)
 *  <p>Lambda received an unexpected Amazon EC2 client exception while setting up for the
 *         Lambda function.</p>
 *
 * @throws {@link EFSIOException} (client fault)
 *  <p>An error occurred when reading from or writing to a connected file system.</p>
 *
 * @throws {@link EFSMountConnectivityException} (client fault)
 *  <p>The Lambda function couldn't make a network connection to the configured file system.</p>
 *
 * @throws {@link EFSMountFailureException} (client fault)
 *  <p>The Lambda function couldn't mount the configured file system due to a permission or configuration
 *       issue.</p>
 *
 * @throws {@link EFSMountTimeoutException} (client fault)
 *  <p>The Lambda function made a network connection to the configured file system, but the mount
 *       operation timed out.</p>
 *
 * @throws {@link ENILimitReachedException} (server fault)
 *  <p>Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *         quotas</a>.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link InvalidRequestContentException} (client fault)
 *  <p>The request body could not be parsed as JSON.</p>
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
 *  <p>Lambda couldn't decrypt the environment variables because KMS access was denied.
 *       Check the Lambda function's KMS permissions.</p>
 *
 * @throws {@link KMSDisabledException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key used is
 *       disabled. Check the Lambda function's KMS key settings.</p>
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key was not
 *       found. Check the function's KMS key settings.</p>
 *
 * @throws {@link RecursiveInvocationException} (client fault)
 *  <p>Lambda has detected your function being invoked in a recursive loop with other Amazon Web Services resources and stopped your function's invocation.</p>
 *
 * @throws {@link RequestTooLargeException} (client fault)
 *  <p>The request payload exceeded the <code>Invoke</code> request body JSON input quota. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *       quotas</a>.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ResourceNotReadyException} (server fault)
 *  <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link SnapStartException} (client fault)
 *  <p>The <code>afterRestore()</code>
 *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-runtime-hooks.html">runtime hook</a> encountered an error. For more information, check the Amazon CloudWatch logs.</p>
 *
 * @throws {@link SnapStartNotReadyException} (client fault)
 *  <p>Lambda is initializing your function. You can invoke the function when the <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">function state</a> becomes <code>Active</code>.</p>
 *
 * @throws {@link SnapStartTimeoutException} (client fault)
 *  <p>Lambda couldn't restore the snapshot within the timeout limit.</p>
 *
 * @throws {@link SubnetIPAddressLimitReachedException} (server fault)
 *  <p>Lambda couldn't set up VPC access for the Lambda function because one or more
 *       configured subnets has no available IP addresses.</p>
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
 * @public
 */
export class InvokeCommand extends $Command
  .classBuilder<
    InvokeCommandInput,
    InvokeCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "Invoke", {})
  .n("LambdaClient", "InvokeCommand")
  .f(InvocationRequestFilterSensitiveLog, InvocationResponseFilterSensitiveLog)
  .ser(se_InvokeCommand)
  .de(de_InvokeCommand)
  .build() {}
