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
import { ListSlotsRequest, ListSlotsResponse } from "../models/models_1";
import { de_ListSlotsCommand, se_ListSlotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSlotsCommand}.
 */
export interface ListSlotsCommandInput extends ListSlotsRequest {}
/**
 * @public
 *
 * The output of {@link ListSlotsCommand}.
 */
export interface ListSlotsCommandOutput extends ListSlotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of slots that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSlotsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   intentId: "STRING_VALUE", // required
 *   sortBy: { // SlotSortBy
 *     attribute: "SlotName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // SlotFilters
 *     { // SlotFilter
 *       name: "SlotName", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSlotsCommand(input);
 * const response = await client.send(command);
 * // { // ListSlotsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   intentId: "STRING_VALUE",
 * //   slotSummaries: [ // SlotSummaryList
 * //     { // SlotSummary
 * //       slotId: "STRING_VALUE",
 * //       slotName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       slotConstraint: "Required" || "Optional",
 * //       slotTypeId: "STRING_VALUE",
 * //       valueElicitationPromptSpecification: { // PromptSpecification
 * //         messageGroups: [ // MessageGroupsList // required
 * //           { // MessageGroup
 * //             message: { // Message
 * //               plainTextMessage: { // PlainTextMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               customPayload: { // CustomPayload
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               ssmlMessage: { // SSMLMessage
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //               imageResponseCard: { // ImageResponseCard
 * //                 title: "STRING_VALUE", // required
 * //                 subtitle: "STRING_VALUE",
 * //                 imageUrl: "STRING_VALUE",
 * //                 buttons: [ // ButtonsList
 * //                   { // Button
 * //                     text: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             variations: [ // MessageVariationsList
 * //               {
 * //                 plainTextMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 customPayload: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 ssmlMessage: {
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //                 imageResponseCard: {
 * //                   title: "STRING_VALUE", // required
 * //                   subtitle: "STRING_VALUE",
 * //                   imageUrl: "STRING_VALUE",
 * //                   buttons: [
 * //                     {
 * //                       text: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         maxRetries: Number("int"), // required
 * //         allowInterrupt: true || false,
 * //         messageSelectionStrategy: "Random" || "Ordered",
 * //         promptAttemptsSpecification: { // PromptAttemptsSpecificationMap
 * //           "<keys>": { // PromptAttemptSpecification
 * //             allowInterrupt: true || false,
 * //             allowedInputTypes: { // AllowedInputTypes
 * //               allowAudioInput: true || false, // required
 * //               allowDTMFInput: true || false, // required
 * //             },
 * //             audioAndDTMFInputSpecification: { // AudioAndDTMFInputSpecification
 * //               startTimeoutMs: Number("int"), // required
 * //               audioSpecification: { // AudioSpecification
 * //                 maxLengthMs: Number("int"), // required
 * //                 endTimeoutMs: Number("int"), // required
 * //               },
 * //               dtmfSpecification: { // DTMFSpecification
 * //                 maxLength: Number("int"), // required
 * //                 endTimeoutMs: Number("int"), // required
 * //                 deletionCharacter: "STRING_VALUE", // required
 * //                 endCharacter: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             textInputSpecification: { // TextInputSpecification
 * //               startTimeoutMs: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSlotsCommandInput - {@link ListSlotsCommandInput}
 * @returns {@link ListSlotsCommandOutput}
 * @see {@link ListSlotsCommandInput} for command's `input` shape.
 * @see {@link ListSlotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
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
export class ListSlotsCommand extends $Command<
  ListSlotsCommandInput,
  ListSlotsCommandOutput,
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
  constructor(readonly input: ListSlotsCommandInput) {
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
  ): Handler<ListSlotsCommandInput, ListSlotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSlotsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListSlotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "ListSlots",
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
  private serialize(input: ListSlotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSlotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSlotsCommandOutput> {
    return de_ListSlotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
