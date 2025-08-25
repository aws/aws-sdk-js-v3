// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeEndpointInput,
  InvokeEndpointInputFilterSensitiveLog,
  InvokeEndpointOutput,
  InvokeEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeEndpointCommand, se_InvokeEndpointCommand } from "../protocols/Aws_restJson1";
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type InvokeEndpointCommandInputType = Omit<InvokeEndpointInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeEndpointCommand}.
 */
export interface InvokeEndpointCommandInput extends InvokeEndpointCommandInputType {}
/**
 * @public
 */
export type InvokeEndpointCommandOutputType = Omit<InvokeEndpointOutput, "Body"> & {
  Body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeEndpointCommand}.
 */
export interface InvokeEndpointCommandOutput extends InvokeEndpointCommandOutputType, __MetadataBearer {}

/**
 * <p>After you deploy a model into production using Amazon SageMaker AI hosting services,
 *             your client applications use this API to get inferences from the model hosted at the
 *             specified endpoint. </p>
 *          <p>For an overview of Amazon SageMaker AI, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 *          <p>Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add
 *     additional headers. You should not rely on the behavior of headers outside those
 *     enumerated in the request syntax. </p>
 *          <p>Calls to <code>InvokeEndpoint</code> are authenticated by using Amazon Web Services
 *             Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating
 *                 Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p>
 *          <p>A customer's model containers must respond to requests within 60 seconds. The model
 *             itself can have a maximum processing time of 60 seconds before responding to
 *             invocations. If your model is going to take 50-60 seconds of processing time, the SDK
 *             socket timeout should be set to be 70 seconds.</p>
 *          <note>
 *             <p>Endpoints are scoped to an individual account, and are not public. The URL does
 *                 not contain the account ID, but Amazon SageMaker AI determines the account ID from
 *                 the authentication token that is supplied by the caller.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointInput
 *   EndpointName: "STRING_VALUE", // required
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   TargetModel: "STRING_VALUE",
 *   TargetVariant: "STRING_VALUE",
 *   TargetContainerHostname: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   EnableExplanations: "STRING_VALUE",
 *   InferenceComponentName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 * };
 * const command = new InvokeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointOutput
 * //   Body: new Uint8Array(), // required
 * //   ContentType: "STRING_VALUE",
 * //   InvokedProductionVariant: "STRING_VALUE",
 * //   CustomAttributes: "STRING_VALUE",
 * //   NewSessionId: "STRING_VALUE",
 * //   ClosedSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointCommandInput - {@link InvokeEndpointCommandInput}
 * @returns {@link InvokeEndpointCommandOutput}
 * @see {@link InvokeEndpointCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalDependencyException} (server fault)
 *  <p>Your request caused an exception with an internal dependency. Contact customer
 *             support. </p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p> An internal failure occurred. </p>
 *
 * @throws {@link ModelError} (client fault)
 *  <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>Either a serverless endpoint variant's resources are still being provisioned, or a
 *             multi-model endpoint is still downloading or loading the target model. Wait and try your
 *             request again.</p>
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
export class InvokeEndpointCommand extends $Command
  .classBuilder<
    InvokeEndpointCommandInput,
    InvokeEndpointCommandOutput,
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
  .s("AmazonSageMakerRuntime", "InvokeEndpoint", {})
  .n("SageMakerRuntimeClient", "InvokeEndpointCommand")
  .f(InvokeEndpointInputFilterSensitiveLog, InvokeEndpointOutputFilterSensitiveLog)
  .ser(se_InvokeEndpointCommand)
  .de(de_InvokeEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointInput;
      output: InvokeEndpointOutput;
    };
    sdk: {
      input: InvokeEndpointCommandInput;
      output: InvokeEndpointCommandOutput;
    };
  };
}
