import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CreateImagePipelineRequest, CreateImagePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateImagePipelineCommand,
  serializeAws_restJson1CreateImagePipelineCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateImagePipelineCommandInput extends CreateImagePipelineRequest {}
export interface CreateImagePipelineCommandOutput extends CreateImagePipelineResponse, __MetadataBearer {}

/**
 * <p> Creates a new image pipeline. Image pipelines enable you to automate the creation and
 * 			distribution of images.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateImagePipelineCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateImagePipelineCommand extends $Command<
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateImagePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImagePipelineCommandInput, CreateImagePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateImagePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImagePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImagePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImagePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateImagePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImagePipelineCommandOutput> {
    return deserializeAws_restJson1CreateImagePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
