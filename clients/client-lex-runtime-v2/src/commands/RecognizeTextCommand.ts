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

import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import {
  RecognizeTextRequest,
  RecognizeTextRequestFilterSensitiveLog,
  RecognizeTextResponse,
  RecognizeTextResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RecognizeTextCommand,
  serializeAws_restJson1RecognizeTextCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RecognizeTextCommand}.
 */
export interface RecognizeTextCommandInput extends RecognizeTextRequest {}
/**
 * @public
 *
 * The output of {@link RecognizeTextCommand}.
 */
export interface RecognizeTextCommandOutput extends RecognizeTextResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends user input to Amazon Lex V2. Client applications use this API to send
 *          requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex V2 returns the next message to convey to the user
 *          and an optional response card to display.</p>
 *          <p>If the optional post-fulfillment response is specified, the messages
 *          are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Success message</b> - Returned if
 *                the Lambda function completes successfully and the intent state is
 *                fulfilled or ready fulfillment if the message is present.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Failed message</b> - The failed
 *                message is returned if the Lambda function throws an exception or
 *                if the Lambda function returns a failed intent state without a
 *                message.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Timeout message</b> - If you
 *                don't configure a timeout message and a timeout, and the Lambda
 *                function doesn't return within 30 seconds, the timeout message is
 *                returned. If you configure a timeout, the timeout message is
 *                returned when the period times out. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const input = {
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   text: "STRING_VALUE", // required
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
 * };
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RecognizeTextCommandInput - {@link RecognizeTextCommandInput}
 * @returns {@link RecognizeTextCommandOutput}
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
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
export class RecognizeTextCommand extends $Command<
  RecognizeTextCommandInput,
  RecognizeTextCommandOutput,
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
  constructor(readonly input: RecognizeTextCommandInput) {
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
  ): Handler<RecognizeTextCommandInput, RecognizeTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RecognizeTextCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeV2Client";
    const commandName = "RecognizeTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeTextRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RecognizeTextResponseFilterSensitiveLog,
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
  private serialize(input: RecognizeTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RecognizeTextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeTextCommandOutput> {
    return deserializeAws_restJson1RecognizeTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
