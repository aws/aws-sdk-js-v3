import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { UpdateRelatedItemsInput, UpdateRelatedItemsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRelatedItemsCommand,
  serializeAws_restJson1UpdateRelatedItemsCommand,
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

export interface UpdateRelatedItemsCommandInput extends UpdateRelatedItemsInput {}
export interface UpdateRelatedItemsCommandOutput extends UpdateRelatedItemsOutput, __MetadataBearer {}

/**
 * <p>Add or remove related items from the related items tab of an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, UpdateRelatedItemsCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, UpdateRelatedItemsCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new UpdateRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link UpdateRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRelatedItemsCommand extends $Command<
  UpdateRelatedItemsCommandInput,
  UpdateRelatedItemsCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRelatedItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CommanderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "UpdateRelatedItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRelatedItemsInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRelatedItemsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRelatedItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRelatedItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRelatedItemsCommandOutput> {
    return deserializeAws_restJson1UpdateRelatedItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
