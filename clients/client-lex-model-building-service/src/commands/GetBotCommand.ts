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

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBotRequest, GetBotResponse } from "../models/models_0";
import { de_GetBotCommand, se_GetBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBotCommand}.
 */
export interface GetBotCommandInput extends GetBotRequest {}
/**
 * @public
 *
 * The output of {@link GetBotCommand}.
 */
export interface GetBotCommandOutput extends GetBotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata information for a specific bot. You must provide
 *       the bot name and the bot version or alias. </p>
 *          <p> This operation requires permissions for the
 *         <code>lex:GetBot</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotRequest
 *   name: "STRING_VALUE", // required
 *   versionOrAlias: "STRING_VALUE", // required
 * };
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * // { // GetBotResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   intents: [ // IntentList
 * //     { // Intent
 * //       intentName: "STRING_VALUE", // required
 * //       intentVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   enableModelImprovements: true || false,
 * //   nluIntentConfidenceThreshold: Number("double"),
 * //   clarificationPrompt: { // Prompt
 * //     messages: [ // MessageList // required
 * //       { // Message
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     maxAttempts: Number("int"), // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   abortStatement: { // Statement
 * //     messages: [ // required
 * //       {
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   status: "BUILDING" || "READY" || "READY_BASIC_TESTING" || "FAILED" || "NOT_BUILT",
 * //   failureReason: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   voiceId: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   locale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   childDirected: true || false,
 * //   detectSentiment: true || false,
 * // };
 *
 * ```
 *
 * @param GetBotCommandInput - {@link GetBotCommandInput}
 * @returns {@link GetBotCommandOutput}
 * @see {@link GetBotCommandInput} for command's `input` shape.
 * @see {@link GetBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @example To get information about a bot
 * ```javascript
 * // This example shows how to get configuration information for a bot.
 * const input = {
 *   "name": "DocOrderPizza",
 *   "versionOrAlias": "$LATEST"
 * };
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "version": "$LATEST",
 *   "name": "DocOrderPizzaBot",
 *   "abortStatement": {
 *     "messages": [
 *       {
 *         "content": "I don't understand. Can you try again?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "I'm sorry, I don't understand.",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
 *   "childDirected": true,
 *   "clarificationPrompt": {
 *     "maxAttempts": 1,
 *     "messages": [
 *       {
 *         "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "Can you say that again?",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "createdDate": 1494360160.133,
 *   "description": "Orders a pizza from a local pizzeria.",
 *   "idleSessionTTLInSeconds": 300,
 *   "intents": [
 *     {
 *       "intentName": "DocOrderPizza",
 *       "intentVersion": "$LATEST"
 *     }
 *   ],
 *   "lastUpdatedDate": 1494360160.133,
 *   "locale": "en-US",
 *   "status": "NOT_BUILT"
 * }
 * *\/
 * // example id: to-get-information-about-a-bot-1494431724188
 * ```
 *
 */
export class GetBotCommand extends $Command<
  GetBotCommandInput,
  GetBotCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetBotCommandInput) {
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
  ): Handler<GetBotCommandInput, GetBotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBotCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseModelBuildingService",
        operation: "GetBot",
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
  private serialize(input: GetBotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotCommandOutput> {
    return de_GetBotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
