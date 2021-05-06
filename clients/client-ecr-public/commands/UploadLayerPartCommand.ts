import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UploadLayerPartCommand,
  serializeAws_json1_1UploadLayerPartCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UploadLayerPartCommandInput extends UploadLayerPartRequest {}
export interface UploadLayerPartCommandOutput extends UploadLayerPartResponse, __MetadataBearer {}

/**
 * <p>Uploads an image layer part to Amazon ECR.</p>
 *          <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of
 *          each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is
 *          called once per each new image layer part.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, UploadLayerPartCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, UploadLayerPartCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new UploadLayerPartCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadLayerPartCommandInput} for command's `input` shape.
 * @see {@link UploadLayerPartCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UploadLayerPartCommand extends $Command<
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadLayerPartCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadLayerPartCommandInput, UploadLayerPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "UploadLayerPartCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadLayerPartRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UploadLayerPartResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadLayerPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UploadLayerPartCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadLayerPartCommandOutput> {
    return deserializeAws_json1_1UploadLayerPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
