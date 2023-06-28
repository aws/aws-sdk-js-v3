// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your client
 *             applications use this API to get inferences from the model hosted at the specified
 *             endpoint in an asynchronous manner.</p>
 *          <p>Inference requests sent to this API are enqueued for asynchronous processing. The
 *             processing of the inference request may or may not complete before you receive a
 *             response from this API. The response from this API will not contain the result of the
 *             inference request but contain information about where you can locate it.</p>
 *          <p>Amazon SageMaker strips all <code>POST</code> headers except those supported by the API. Amazon SageMaker
 *             might add additional headers. You should not rely on the behavior of headers outside
 *             those enumerated in the request syntax.</p>
 *          <p>Calls to <code>InvokeEndpointAsync</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the
 *                 <i>Amazon S3 API Reference</i>.</p>
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
 */
export class InvokeEndpointAsyncCommand extends $Command<
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
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
  constructor(readonly input: InvokeEndpointAsyncCommandInput) {
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
  ): Handler<InvokeEndpointAsyncCommandInput, InvokeEndpointAsyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeEndpointAsyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerRuntimeClient";
    const commandName = "InvokeEndpointAsyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeEndpointAsyncInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: InvokeEndpointAsyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeEndpointAsyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeEndpointAsyncCommandOutput> {
    return de_InvokeEndpointAsyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
