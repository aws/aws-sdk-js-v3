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
import { ListTestSetRecordsRequest, ListTestSetRecordsResponse } from "../models/models_1";
import { de_ListTestSetRecordsCommand, se_ListTestSetRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestSetRecordsCommand}.
 */
export interface ListTestSetRecordsCommandInput extends ListTestSetRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSetRecordsCommand}.
 */
export interface ListTestSetRecordsCommandOutput extends ListTestSetRecordsResponse, __MetadataBearer {}

/**
 * @public
 * <p>The list of test set records.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestSetRecordsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestSetRecordsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestSetRecordsRequest
 *   testSetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestSetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSetRecordsResponse
 * //   testSetRecords: [ // TestSetTurnRecordList
 * //     { // TestSetTurnRecord
 * //       recordNumber: Number("long"), // required
 * //       conversationId: "STRING_VALUE",
 * //       turnNumber: Number("int"),
 * //       turnSpecification: { // TurnSpecification
 * //         agentTurn: { // AgentTurnSpecification
 * //           agentPrompt: "STRING_VALUE", // required
 * //         },
 * //         userTurn: { // UserTurnSpecification
 * //           input: { // UserTurnInputSpecification
 * //             utteranceInput: { // UtteranceInputSpecification
 * //               textInput: "STRING_VALUE",
 * //               audioInput: { // UtteranceAudioInputSpecification
 * //                 audioFileS3Location: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             requestAttributes: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             sessionState: { // InputSessionStateSpecification
 * //               sessionAttributes: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               activeContexts: [ // ActiveContextList
 * //                 { // ActiveContext
 * //                   name: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               runtimeHints: { // RuntimeHints
 * //                 slotHints: { // SlotHintsIntentMap
 * //                   "<keys>": { // SlotHintsSlotMap
 * //                     "<keys>": { // RuntimeHintDetails
 * //                       runtimeHintValues: [ // RuntimeHintValuesList
 * //                         { // RuntimeHintValue
 * //                           phrase: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                       subSlotHints: {
 * //                         "<keys>": {
 * //                           runtimeHintValues: [
 * //                             {
 * //                               phrase: "STRING_VALUE", // required
 * //                             },
 * //                           ],
 * //                           subSlotHints: "<SlotHintsSlotMap>",
 * //                         },
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           expected: { // UserTurnOutputSpecification
 * //             intent: { // UserTurnIntentOutput
 * //               name: "STRING_VALUE", // required
 * //               slots: { // UserTurnSlotOutputMap
 * //                 "<keys>": { // UserTurnSlotOutput
 * //                   value: "STRING_VALUE",
 * //                   values: [ // UserTurnSlotOutputList
 * //                     {
 * //                       value: "STRING_VALUE",
 * //                       values: [
 * //                         "<UserTurnSlotOutput>",
 * //                       ],
 * //                       subSlots: {
 * //                         "<keys>": "<UserTurnSlotOutput>",
 * //                       },
 * //                     },
 * //                   ],
 * //                   subSlots: "<UserTurnSlotOutputMap>",
 * //                 },
 * //               },
 * //             },
 * //             activeContexts: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             transcript: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSetRecordsCommandInput - {@link ListTestSetRecordsCommandInput}
 * @returns {@link ListTestSetRecordsCommandOutput}
 * @see {@link ListTestSetRecordsCommandInput} for command's `input` shape.
 * @see {@link ListTestSetRecordsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class ListTestSetRecordsCommand extends $Command<
  ListTestSetRecordsCommandInput,
  ListTestSetRecordsCommandOutput,
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
  constructor(readonly input: ListTestSetRecordsCommandInput) {
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
  ): Handler<ListTestSetRecordsCommandInput, ListTestSetRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestSetRecordsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListTestSetRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "ListTestSetRecords",
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
  private serialize(input: ListTestSetRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestSetRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestSetRecordsCommandOutput> {
    return de_ListTestSetRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
