// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  InvokeEndpointWithResponseStreamInput,
  InvokeEndpointWithResponseStreamInputFilterSensitiveLog,
  InvokeEndpointWithResponseStreamOutput,
  InvokeEndpointWithResponseStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InvokeEndpointWithResponseStreamCommand,
  se_InvokeEndpointWithResponseStreamCommand,
} from "../protocols/Aws_restJson1";
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type InvokeEndpointWithResponseStreamCommandInputType = Omit<InvokeEndpointWithResponseStreamInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeEndpointWithResponseStreamCommand}.
 */
export interface InvokeEndpointWithResponseStreamCommandInput
  extends InvokeEndpointWithResponseStreamCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeEndpointWithResponseStreamCommand}.
 */
export interface InvokeEndpointWithResponseStreamCommandOutput
  extends InvokeEndpointWithResponseStreamOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Invokes a model at the specified endpoint to return the inference response as a
 *             stream. The inference stream provides the response payload incrementally as a series of
 *             parts. Before you can get an inference stream, you must have access to a model that's
 *             deployed using Amazon SageMaker hosting services, and the container for that model
 *             must support inference streaming.</p>
 *          <p>For more information that can help you use this API, see the following sections in the
 *                     <i>Amazon SageMaker Developer Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>For information about how to add streaming support to a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-code-how-containe-serves-requests">How Containers Serve Requests</a>.</p>
 *             </li>
 *             <li>
 *                <p>For information about how to process the streaming response, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-test-endpoints.html">Invoke real-time endpoints</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add
 *     additional headers. You should not rely on the behavior of headers outside those
 *     enumerated in the request syntax. </p>
 *          <p>Calls to <code>InvokeEndpointWithResponseStream</code> are authenticated by using
 *                 Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the
 *                     <i>Amazon S3 API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointWithResponseStreamCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointWithResponseStreamCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointWithResponseStreamInput
 *   EndpointName: "STRING_VALUE", // required
 *   Body: "BLOB_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   TargetVariant: "STRING_VALUE",
 *   TargetContainerHostname: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 * };
 * const command = new InvokeEndpointWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointWithResponseStreamOutput
 * //   Body: { // ResponseStream Union: only one key present
 * //     PayloadPart: { // PayloadPart
 * //       Bytes: "BLOB_VALUE",
 * //     },
 * //     ModelStreamError: { // ModelStreamError
 * //       Message: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //     InternalStreamFailure: { // InternalStreamFailure
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   ContentType: "STRING_VALUE",
 * //   InvokedProductionVariant: "STRING_VALUE",
 * //   CustomAttributes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointWithResponseStreamCommandInput - {@link InvokeEndpointWithResponseStreamCommandInput}
 * @returns {@link InvokeEndpointWithResponseStreamCommandOutput}
 * @see {@link InvokeEndpointWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p> An internal failure occurred. </p>
 *
 * @throws {@link InternalStreamFailure} (server fault)
 *  <p>The stream processing failed because of an unknown error, exception or failure. Try your request again.</p>
 *
 * @throws {@link ModelError} (client fault)
 *  <p> Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *         </p>
 *
 * @throws {@link ModelStreamError} (client fault)
 *  <p> An error occurred while streaming the response body. This error can have the
 *     following error codes:</p>
 *          <dl>
 *             <dt>ModelInvocationTimeExceeded</dt>
 *             <dd>
 *                <p>The model failed to finish sending the response within the timeout period allowed by Amazon SageMaker.</p>
 *             </dd>
 *             <dt>StreamBroken</dt>
 *             <dd>
 *                <p>The Transmission Control Protocol (TCP) connection between the client and
 *                     the model was reset or closed.</p>
 *             </dd>
 *          </dl>
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
 */
export class InvokeEndpointWithResponseStreamCommand extends $Command<
  InvokeEndpointWithResponseStreamCommandInput,
  InvokeEndpointWithResponseStreamCommandOutput,
  SageMakerRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: InvokeEndpointWithResponseStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeEndpointWithResponseStreamCommandInput, InvokeEndpointWithResponseStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeEndpointWithResponseStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerRuntimeClient";
    const commandName = "InvokeEndpointWithResponseStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeEndpointWithResponseStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeEndpointWithResponseStreamOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSageMakerRuntime",
        operation: "InvokeEndpointWithResponseStream",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: InvokeEndpointWithResponseStreamCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_InvokeEndpointWithResponseStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<InvokeEndpointWithResponseStreamCommandOutput> {
    return de_InvokeEndpointWithResponseStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
