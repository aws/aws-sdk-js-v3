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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_0";
import { de_DeleteSessionCommand, se_DeleteSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandInput extends DeleteSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes session information for a specified bot, alias, and user ID. </p>
 *          <p>You can use this operation to restart a conversation with a bot.
 *          When you remove a session, the entire history of the session is removed
 *          so that you can start again.</p>
 *          <p>You don't need to delete a session. Sessions have a time limit and
 *          will expire. Set the session time limit when you create the bot. The
 *          default is 5 minutes, but you can specify anything between 1 minute and
 *          24 hours.</p>
 *          <p>If you specify a bot or alias ID that doesn't exist, you receive a
 *             <code>BadRequestException.</code>
 *          </p>
 *          <p>If the locale doesn't exist in the bot, or if the locale hasn't been
 *          enables for the alias, you receive a
 *          <code>BadRequestException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const input = { // DeleteSessionRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSessionResponse
 * //   botId: "STRING_VALUE",
 * //   botAliasId: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   sessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSessionCommandInput - {@link DeleteSessionCommandInput}
 * @returns {@link DeleteSessionCommandOutput}
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p></p>
 *
 * @throws {@link LexRuntimeV2ServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeV2 service.</p>
 *
 */
export class DeleteSessionCommand extends $Command<
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
  LexRuntimeV2ClientResolvedConfig
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
  constructor(readonly input: DeleteSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSessionCommandInput, DeleteSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "DeleteSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseRunTimeServiceApi2_0",
        operation: "DeleteSession",
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
  private serialize(input: DeleteSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSessionCommandOutput> {
    return de_DeleteSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
