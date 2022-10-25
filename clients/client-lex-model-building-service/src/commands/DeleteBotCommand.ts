// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteBotRequest, DeleteBotRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBotCommand,
  serializeAws_restJson1DeleteBotCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteBotCommandInput extends DeleteBotRequest {}
export interface DeleteBotCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes all versions of the bot, including the <code>$LATEST</code>
 *       version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code>
 *       operation doesn't immediately remove the bot schema. Instead, it is marked
 *       for deletion and removed later.</p>
 *          <p>Amazon Lex stores utterances indefinitely for improving the ability of
 *       your bot to respond to user inputs. These utterances are not removed when
 *       the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p>
 *          <p>If a bot has an alias, you can't delete it. Instead, the
 *         <code>DeleteBot</code> operation returns a
 *         <code>ResourceInUseException</code> exception that includes a reference
 *       to the alias that refers to the bot. To remove the reference to the bot,
 *       delete the alias. If you get the same exception again, delete the
 *       referring alias until the <code>DeleteBot</code> operation is
 *       successful.</p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteBot</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class DeleteBotCommand extends $Command<
  DeleteBotCommandInput,
  DeleteBotCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: DeleteBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBotCommandInput, DeleteBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBotCommandOutput> {
    return deserializeAws_restJson1DeleteBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
