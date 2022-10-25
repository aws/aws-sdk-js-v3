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
import { DeleteBotAliasRequest, DeleteBotAliasRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBotAliasCommand,
  serializeAws_restJson1DeleteBotAliasCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteBotAliasCommandInput extends DeleteBotAliasRequest {}
export interface DeleteBotAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an alias for the specified bot. </p>
 *          <p>You can't delete an alias that is used in the association between a
 *       bot and a messaging channel. If an alias is used in a channel association,
 *       the <code>DeleteBot</code> operation returns a
 *         <code>ResourceInUseException</code> exception that includes a reference
 *       to the channel association that refers to the bot. You can remove the
 *       reference to the alias by deleting the channel association. If you get the
 *       same exception again, delete the referring association until the
 *         <code>DeleteBotAlias</code> operation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class DeleteBotAliasCommand extends $Command<
  DeleteBotAliasCommandInput,
  DeleteBotAliasCommandOutput,
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

  constructor(readonly input: DeleteBotAliasCommandInput) {
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
  ): Handler<DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBotAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteBotAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBotAliasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBotAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBotAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBotAliasCommandOutput> {
    return deserializeAws_restJson1DeleteBotAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
