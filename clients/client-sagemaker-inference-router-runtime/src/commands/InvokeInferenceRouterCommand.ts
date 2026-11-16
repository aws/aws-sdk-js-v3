// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeInferenceRouterInput, InvokeInferenceRouterOutput } from "../models/models_0";
import { InvokeInferenceRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeInferenceRouterCommandInputType = Omit<InvokeInferenceRouterInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeInferenceRouterCommand}.
 */
export interface InvokeInferenceRouterCommandInput extends InvokeInferenceRouterCommandInputType {}
/**
 * @public
 */
export type InvokeInferenceRouterCommandOutputType = Omit<InvokeInferenceRouterOutput, "Body"> & {
  Body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeInferenceRouterCommand}.
 */
export interface InvokeInferenceRouterCommandOutput extends InvokeInferenceRouterCommandOutputType, __MetadataBearer {}

/**
 * <p>Sends a real-time inference request to an inference router. In the request, you name the routing target, and the router sends the request to one of the routing target's destinations. The response includes the destination that served the request and the reason that the router chose it.</p> <p>The following limits apply:</p> <ul> <li> <p>The maximum request payload is 6 MB. A request with a larger body fails with HTTP status code 413.</p> </li> <li> <p>Your model has up to 60 seconds for each attempt, the same limit as <code>InvokeEndpoint</code>. If your account has a higher model execution timeout for <code>InvokeEndpoint</code>, it doesn't apply through an inference router. For models that take longer, use <code>InvokeInferenceRouterAsync</code>.</p> </li> </ul> <p>If a destination returns an error that the router can retry, such as a throttling error, before your model produces a response, the router retries the request once on another destination. A request that times out on a destination isn't retried. Because a request can make two attempts, set your client read timeout to at least 170 seconds.</p> <p>The caller needs permission to invoke the inference router and every destination of the routing target. For information about permissions, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-router.html">Route requests across Regions with inference routers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerInferenceRouterRuntimeClient, InvokeInferenceRouterCommand } from "@aws-sdk/client-sagemaker-inference-router-runtime"; // ES Modules import
 * // const { SageMakerInferenceRouterRuntimeClient, InvokeInferenceRouterCommand } = require("@aws-sdk/client-sagemaker-inference-router-runtime"); // CommonJS import
 * // import type { SageMakerInferenceRouterRuntimeClientConfig } from "@aws-sdk/client-sagemaker-inference-router-runtime";
 * const config = {}; // type is SageMakerInferenceRouterRuntimeClientConfig
 * const client = new SageMakerInferenceRouterRuntimeClient(config);
 * const input = { // InvokeInferenceRouterInput
 *   InferenceRouterName: "STRING_VALUE", // required
 *   RoutingTargetName: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   PrefixAwareId: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new InvokeInferenceRouterCommand(input);
 * const response = await client.send(command);
 * // { // InvokeInferenceRouterOutput
 * //   Body: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   InvokedRoutedResourceArn: "STRING_VALUE",
 * //   RoutingReason: "STRING_VALUE",
 * //   InvokedProductionVariant: "STRING_VALUE",
 * //   CustomAttributes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeInferenceRouterCommandInput - {@link InvokeInferenceRouterCommandInput}
 * @returns {@link InvokeInferenceRouterCommandOutput}
 * @see {@link InvokeInferenceRouterCommandInput} for command's `input` shape.
 * @see {@link InvokeInferenceRouterCommandOutput} for command's `response` shape.
 * @see {@link SageMakerInferenceRouterRuntimeClientResolvedConfig | config} for SageMakerInferenceRouterRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this action. Check that the caller is allowed to invoke the inference router and every destination of the routing target.</p>
 *
 * @throws {@link InternalDependencyException} (server fault)
 *  <p>The request failed because of an error in an internal dependency. Retry the request with exponential backoff.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal error occurred. Retry the request with exponential backoff. The Amazon Web Services SDKs and the Amazon Web Services CLI do this by default.</p>
 *
 * @throws {@link ModelError} (client fault)
 *  <p>The model in the destination that served the request returned an error. Check <code>OriginalStatusCode</code>, <code>OriginalMessage</code>, and the destination's logs in Amazon CloudWatch.</p>
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *  <p>The destination isn't ready to serve the model, for example because an inference component has no copies. Retry the request later.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The inference router didn't receive the complete request within 300 seconds of accepting it, for example because of a very slow upload. Retry the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable. For example, no destination of the routing target could serve the request, or a destination didn't respond. Retry the request with exponential backoff. The Amazon Web Services SDKs and the Amazon Web Services CLI do this by default.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because you exceeded the request rate for the inference router, or because a destination throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the inference router name, the routing target name, and the request parameters, and then try again.</p>
 *
 * @throws {@link SageMakerInferenceRouterRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerInferenceRouterRuntime service.</p>
 *
 *
 * @example Invoke an inference router
 * ```javascript
 * // The following example sends a JSON request to the my-target routing target of the my-router inference router. The response shows that a destination in the router's Region served the request.
 * const input = {
 *   Body: `{"instances": [[1.0, 2.0, 5.0]]}`,
 *   ContentType: "application/json",
 *   InferenceRouterName: "my-router",
 *   RoutingTargetName: "my-target"
 * };
 * const command = new InvokeInferenceRouterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ContentType: "application/json",
 *   RoutingReason: "local-preferred"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InvokeInferenceRouterCommand extends command<InvokeInferenceRouterCommandInput, InvokeInferenceRouterCommandOutput>(
  _ep0,
  _mw0,
  "InvokeInferenceRouter",
  InvokeInferenceRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeInferenceRouterInput;
      output: InvokeInferenceRouterOutput;
    };
    sdk: {
      input: InvokeInferenceRouterCommandInput;
      output: InvokeInferenceRouterCommandOutput;
    };
  };
}
