// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeInferenceRouterAsyncInput, InvokeInferenceRouterAsyncOutput } from "../models/models_0";
import { InvokeInferenceRouterAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeInferenceRouterAsyncCommand}.
 */
export interface InvokeInferenceRouterAsyncCommandInput extends InvokeInferenceRouterAsyncInput {}
/**
 * @public
 *
 * The output of {@link InvokeInferenceRouterAsyncCommand}.
 */
export interface InvokeInferenceRouterAsyncCommandOutput extends InvokeInferenceRouterAsyncOutput, __MetadataBearer {}

/**
 * <p>Submits an asynchronous inference request to an inference router. Before you call this operation, upload the input data to Amazon S3 in the router's Amazon Web Services Region. The router returns as soon as it accepts the request, and sends the request to one of the destinations of the routing target. The destination reads the input from Amazon S3, and the inference response is written to the Amazon S3 output path that the routing target specifies.</p> <p>If a destination doesn't start the request within the routing target's <code>MaxTimeInBacklogSeconds</code>, the router moves the request to another destination. After your model starts processing the request, the request doesn't move. If no destination can take the request before <code>RequestTTLSeconds</code> runs out, or every destination has been tried, the router writes a failure object to the <code>FailureLocation</code> and publishes a notification to the routing target's error topic, if one is configured.</p> <p>For information about the permissions that the caller and each destination need, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-router-async.html">Send asynchronous requests through an inference router</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerInferenceRouterRuntimeClient, InvokeInferenceRouterAsyncCommand } from "@aws-sdk/client-sagemaker-inference-router-runtime"; // ES Modules import
 * // const { SageMakerInferenceRouterRuntimeClient, InvokeInferenceRouterAsyncCommand } = require("@aws-sdk/client-sagemaker-inference-router-runtime"); // CommonJS import
 * // import type { SageMakerInferenceRouterRuntimeClientConfig } from "@aws-sdk/client-sagemaker-inference-router-runtime";
 * const config = {}; // type is SageMakerInferenceRouterRuntimeClientConfig
 * const client = new SageMakerInferenceRouterRuntimeClient(config);
 * const input = { // InvokeInferenceRouterAsyncInput
 *   InferenceRouterName: "STRING_VALUE", // required
 *   RoutingTargetName: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   InputLocation: "STRING_VALUE", // required
 *   S3OutputPathExtension: "STRING_VALUE",
 *   Filename: "STRING_VALUE",
 *   RequestTTLSeconds: Number("int"),
 *   InvocationTimeoutSeconds: Number("int"),
 * };
 * const command = new InvokeInferenceRouterAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeInferenceRouterAsyncOutput
 * //   InferenceId: "STRING_VALUE",
 * //   OutputLocation: "STRING_VALUE",
 * //   FailureLocation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeInferenceRouterAsyncCommandInput - {@link InvokeInferenceRouterAsyncCommandInput}
 * @returns {@link InvokeInferenceRouterAsyncCommandOutput}
 * @see {@link InvokeInferenceRouterAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeInferenceRouterAsyncCommandOutput} for command's `response` shape.
 * @see {@link SageMakerInferenceRouterRuntimeClientResolvedConfig | config} for SageMakerInferenceRouterRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this action. Check that the caller is allowed to invoke the inference router and every destination of the routing target.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal error occurred. Retry the request with exponential backoff. The Amazon Web Services SDKs and the Amazon Web Services CLI do this by default.</p>
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
 * @public
 */
export class InvokeInferenceRouterAsyncCommand extends command<InvokeInferenceRouterAsyncCommandInput, InvokeInferenceRouterAsyncCommandOutput>(
  _ep0,
  _mw0,
  "InvokeInferenceRouterAsync",
  InvokeInferenceRouterAsync$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeInferenceRouterAsyncInput;
      output: InvokeInferenceRouterAsyncOutput;
    };
    sdk: {
      input: InvokeInferenceRouterAsyncCommandInput;
      output: InvokeInferenceRouterAsyncCommandOutput;
    };
  };
}
