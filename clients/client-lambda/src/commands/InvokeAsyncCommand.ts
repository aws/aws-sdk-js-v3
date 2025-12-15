// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { type InvokeAsyncResponse, InvokeAsyncRequest } from "../models/models_0";
import { InvokeAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </note> <p>Invokes a function asynchronously.</p> <note> <p>The payload limit is 256KB. For larger payloads, for up to 1MB, use <a>Invoke</a>.</p> </note> <note> <p>If you do use the InvokeAsync action, note that it doesn't support the use of X-Ray active tracing. Trace ID is not propagated to the function, even if X-Ray active tracing is turned on.</p> </note>
 *
 * @deprecated deprecated
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
 * @throws {@link InvalidRequestContentException} (client fault)
 *  <p>The request body could not be parsed as JSON, or a request header is invalid. For example, the 'x-amzn-RequestId' header is not a valid UUID string.</p>
 *
 * @throws {@link InvalidRuntimeException} (server fault)
 *  <p>The runtime or runtime version specified is not supported.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
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
export class InvokeAsyncCommand extends $Command
  .classBuilder<
    InvokeAsyncCommandInput,
    InvokeAsyncCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "InvokeAsync", {})
  .n("LambdaClient", "InvokeAsyncCommand")
  .sc(InvokeAsync$)
  .build() {
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
