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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import {
  PutSessionRequest,
  PutSessionRequestFilterSensitiveLog,
  PutSessionResponse,
  PutSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSessionCommand,
  serializeAws_restJson1PutSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutSessionCommand}.
 */
export interface PutSessionCommandInput extends PutSessionRequest {}
/**
 * @public
 *
 * The output of {@link PutSessionCommand}.
 */
export interface PutSessionCommandOutput
  extends __WithSdkStreamMixin<PutSessionResponse, "audioStream">,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new session or modifies an existing session with an Amazon Lex V2
 *          bot. Use this operation to enable your application to set the state of
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, PutSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const input = {
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   messages: [
 *     {
 *       content: "STRING_VALUE",
 *       contentType: "CustomPayload" || "ImageResponseCard" || "PlainText" || "SSML", // required
 *       imageResponseCard: {
 *         title: "STRING_VALUE", // required
 *         subtitle: "STRING_VALUE",
 *         imageUrl: "STRING_VALUE",
 *         buttons: [
 *           {
 *             text: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   sessionState: {
 *     dialogAction: {
 *       type: "Close" || "ConfirmIntent" || "Delegate" || "ElicitIntent" || "ElicitSlot" || "None", // required
 *       slotToElicit: "STRING_VALUE",
 *       slotElicitationStyle: "Default" || "SpellByLetter" || "SpellByWord",
 *       subSlotToElicit: {
 *         name: "STRING_VALUE", // required
 *         subSlotToElicit: {
 *           name: "STRING_VALUE", // required
 *           subSlotToElicit: {
 *             name: "<ElicitSubSlot>",
 *             subSlotToElicit: "<ElicitSubSlot>",
 *           },
 *         },
 *       },
 *     },
 *     intent: {
 *       name: "STRING_VALUE", // required
 *       slots: {
 *         "<keys>": {
 *           value: {
 *             originalValue: "STRING_VALUE",
 *             interpretedValue: "STRING_VALUE", // required
 *             resolvedValues: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           shape: "Scalar" || "List" || "Composite",
 *           values: [
 *             {
 *               value: {
 *                 originalValue: "STRING_VALUE",
 *                 interpretedValue: "STRING_VALUE", // required
 *                 resolvedValues: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               shape: "Scalar" || "List" || "Composite",
 *               values: [
 *                 {
 *                   value: "<Slot>",
 *                   shape: "<Slot>",
 *                   values: "<Slot>",
 *                   subSlots: {
 *                     "<keys>": {
 *                       value: "<Slot>",
 *                       shape: "<Slot>",
 *                       values: "<Slot>",
 *                       subSlots: {
 *                         "<keys>": "<Slot>",
 *                       },
 *                     },
 *                   },
 *                 },
 *               ],
 *               subSlots: "<Slot>",
 *             },
 *           ],
 *           subSlots: "<Slot>",
 *         },
 *       },
 *       state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 *       confirmationState: "Confirmed" || "Denied" || "None",
 *     },
 *     activeContexts: [
 *       {
 *         name: "STRING_VALUE", // required
 *         timeToLive: {
 *           timeToLiveInSeconds: Number("int"), // required
 *           turnsToLive: Number("int"), // required
 *         },
 *         contextAttributes: { // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     sessionAttributes: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     originatingRequestId: "STRING_VALUE",
 *     runtimeHints: {
 *       slotHints: {
 *         "<keys>": {
 *           "<keys>": {
 *             runtimeHintValues: [
 *               {
 *                 phrase: "STRING_VALUE", // required
 *               },
 *             ],
 *             subSlotHints: {
 *               "<keys>": {
 *                 runtimeHintValues: [
 *                   {
 *                     phrase: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 subSlotHints: {
 *                   "<keys>": "<RuntimeHintDetails>",
 *                 },
 *               },
 *             },
 *           },
 *         },
 *       },
 *     },
 *   },
 *   requestAttributes: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   responseContentType: "STRING_VALUE",
 * };
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutSessionCommandInput - {@link PutSessionCommandInput}
 * @returns {@link PutSessionCommandOutput}
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p></p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p></p>
 *
 * @throws {@link DependencyFailedException} (client fault)
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
 *
 */
export class PutSessionCommand extends $Command<
  PutSessionCommandInput,
  PutSessionCommandOutput,
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
  constructor(readonly input: PutSessionCommandInput) {
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
  ): Handler<PutSessionCommandInput, PutSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "PutSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSessionResponseFilterSensitiveLog,
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
  private serialize(input: PutSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<PutSessionCommandOutput> {
    return deserializeAws_restJson1PutSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
