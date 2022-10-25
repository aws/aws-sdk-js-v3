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
import {
  CreateBotVersionRequest,
  CreateBotVersionRequestFilterSensitiveLog,
  CreateBotVersionResponse,
  CreateBotVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateBotVersionCommand,
  serializeAws_restJson1CreateBotVersionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateBotVersionCommandInput extends CreateBotVersionRequest {}
export interface CreateBotVersionCommandOutput extends CreateBotVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the bot based on the <code>$LATEST</code>
 *       version. If the <code>$LATEST</code> version of this resource hasn't
 *       changed since you created the last version, Amazon Lex doesn't create a new
 *       version. It returns the last created version.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the bot.
 *         You can't update the numbered versions that you create with the
 *           <code>CreateBotVersion</code> operation.</p>
 *          </note>
 *          <p> When you create the first version of a bot, Amazon Lex sets the version
 *       to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p> This operation requires permission for the
 *         <code>lex:CreateBotVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class CreateBotVersionCommand extends $Command<
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
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

  constructor(readonly input: CreateBotVersionCommandInput) {
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
  ): Handler<CreateBotVersionCommandInput, CreateBotVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBotVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateBotVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBotVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBotVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBotVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBotVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotVersionCommandOutput> {
    return deserializeAws_restJson1CreateBotVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
