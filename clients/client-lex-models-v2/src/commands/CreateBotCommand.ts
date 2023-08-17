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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotRequest, CreateBotResponse } from "../models/models_0";
import { de_CreateBotCommand, se_CreateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBotCommand}.
 */
export interface CreateBotCommandInput extends CreateBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotCommand}.
 */
export interface CreateBotCommandOutput extends CreateBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Lex conversational bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateBotRequest
 *   botName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   dataPrivacy: { // DataPrivacy
 *     childDirected: true || false, // required
 *   },
 *   idleSessionTTLInSeconds: Number("int"), // required
 *   botTags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   testBotAliasTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotResponse
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
 * //   botTags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   testBotAliasTags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
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
 * @param CreateBotCommandInput - {@link CreateBotCommandInput}
 * @returns {@link CreateBotCommandOutput}
 * @see {@link CreateBotCommandInput} for command's `input` shape.
 * @see {@link CreateBotCommandOutput} for command's `response` shape.
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
export class CreateBotCommand extends $Command<
  CreateBotCommandInput,
  CreateBotCommandOutput,
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
  constructor(readonly input: CreateBotCommandInput) {
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
  ): Handler<CreateBotCommandInput, CreateBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotCommandOutput> {
    return de_CreateBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
