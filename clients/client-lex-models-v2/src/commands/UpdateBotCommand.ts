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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateBotRequest, UpdateBotResponse } from "../models/models_1";
import { de_UpdateBotCommand, se_UpdateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandInput extends UpdateBotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandOutput extends UpdateBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of an existing bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateBotRequest
 *   botId: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   dataPrivacy: { // DataPrivacy
 *     childDirected: true || false, // required
 *   },
 *   idleSessionTTLInSeconds: Number("int"), // required
 *   botType: "Bot" || "BotNetwork",
 *   botMembers: [ // BotMembers
 *     { // BotMember
 *       botMemberId: "STRING_VALUE", // required
 *       botMemberName: "STRING_VALUE", // required
 *       botMemberAliasId: "STRING_VALUE", // required
 *       botMemberAliasName: "STRING_VALUE", // required
 *       botMemberVersion: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBotResponse
 * //   botId: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   dataPrivacy: { // DataPrivacy
 * //     childDirected: true || false, // required
 * //   },
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   botType: "Bot" || "BotNetwork",
 * //   botMembers: [ // BotMembers
 * //     { // BotMember
 * //       botMemberId: "STRING_VALUE", // required
 * //       botMemberName: "STRING_VALUE", // required
 * //       botMemberAliasId: "STRING_VALUE", // required
 * //       botMemberAliasName: "STRING_VALUE", // required
 * //       botMemberVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateBotCommandInput - {@link UpdateBotCommandInput}
 * @returns {@link UpdateBotCommandOutput}
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class UpdateBotCommand extends $Command<
  UpdateBotCommandInput,
  UpdateBotCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: UpdateBotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBotCommandInput, UpdateBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "UpdateBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "UpdateBot",
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
  private serialize(input: UpdateBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBotCommandOutput> {
    return de_UpdateBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
