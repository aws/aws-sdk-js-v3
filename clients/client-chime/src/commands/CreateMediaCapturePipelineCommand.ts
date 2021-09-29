import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { CreateMediaCapturePipelineRequest, CreateMediaCapturePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaCapturePipelineCommand,
  serializeAws_restJson1CreateMediaCapturePipelineCommand,
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

export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a media capture pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMediaCapturePipelineCommand extends $Command<
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMediaCapturePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaCapturePipelineCommandInput, CreateMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaCapturePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaCapturePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaCapturePipelineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaCapturePipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
