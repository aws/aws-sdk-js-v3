// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeEndpointAsyncInput,
  InvokeEndpointAsyncInputFilterSensitiveLog,
  InvokeEndpointAsyncOutput,
} from "../models/models_0";
import { de_InvokeEndpointAsyncCommand, se_InvokeEndpointAsyncCommand } from "../protocols/Aws_restJson1";
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeEndpointAsyncCommand}.
 */
export interface InvokeEndpointAsyncCommandInput extends InvokeEndpointAsyncInput {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointAsyncCommand}.
 */
export interface InvokeEndpointAsyncCommandOutput extends InvokeEndpointAsyncOutput, __MetadataBearer {}

/**
 * <p>After you deploy a model into production using Amazon SageMaker AI hosting services,
 *             your client applications use this API to get inferences from the model hosted at the
 *             specified endpoint in an asynchronous manner.</p>
 *          <p>Inference requests sent to this API are enqueued for asynchronous processing. The
 *             processing of the inference request may or may not complete before you receive a
 *             response from this API. The response from this API will not contain the result of the
 *             inference request but contain information about where you can locate it.</p>
 *          <p>Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 *     additional headers. You should not rely on the behavior of headers outside those
 *     enumerated in the request syntax. </p>
 *          <p>Calls to <code>InvokeEndpointAsync</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating
 *                 Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointAsyncCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointAsyncCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointAsyncInput
 *   EndpointName: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   InputLocation: "STRING_VALUE", // required
 *   RequestTTLSeconds: Number("int"),
 *   InvocationTimeoutSeconds: Number("int"),
 * };
 * const command = new InvokeEndpointAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointAsyncOutput
 * //   InferenceId: "STRING_VALUE",
 * //   OutputLocation: "STRING_VALUE",
 * //   FailureLocation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointAsyncCommandInput - {@link InvokeEndpointAsyncCommandInput}
 * @returns {@link InvokeEndpointAsyncCommandOutput}
 * @see {@link InvokeEndpointAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointAsyncCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p> An internal failure occurred. </p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p> The service is unavailable. Try your call again. </p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p> Inspect your request and try again. </p>
 *
 * @throws {@link SageMakerRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeEndpointAsyncCommand extends $Command
  .classBuilder<
    InvokeEndpointAsyncCommandInput,
    InvokeEndpointAsyncCommandOutput,
    SageMakerRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerRuntime", "InvokeEndpointAsync", {})
  .n("SageMakerRuntimeClient", "InvokeEndpointAsyncCommand")
  .f(InvokeEndpointAsyncInputFilterSensitiveLog, void 0)
  .ser(se_InvokeEndpointAsyncCommand)
  .de(de_InvokeEndpointAsyncCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointAsyncInput;
      output: InvokeEndpointAsyncOutput;
    };
    sdk: {
      input: InvokeEndpointAsyncCommandInput;
      output: InvokeEndpointAsyncCommandOutput;
    };
  };
}
