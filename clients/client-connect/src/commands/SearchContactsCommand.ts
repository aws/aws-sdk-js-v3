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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  SearchContactsRequest,
  SearchContactsRequestFilterSensitiveLog,
  SearchContactsResponse,
} from "../models/models_2";
import { de_SearchContactsCommand, se_SearchContactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandInput extends SearchContactsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactsCommand}.
 */
export interface SearchContactsCommandOutput extends SearchContactsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches contacts in an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchContactsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TimeRange: { // SearchContactsTimeRange
 *     Type: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP", // required
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   SearchCriteria: { // SearchCriteria
 *     AgentIds: [ // AgentResourceIdList
 *       "STRING_VALUE",
 *     ],
 *     AgentHierarchyGroups: { // AgentHierarchyGroups
 *       L1Ids: [ // HierarchyGroupIdList
 *         "STRING_VALUE",
 *       ],
 *       L2Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L3Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L4Ids: [
 *         "STRING_VALUE",
 *       ],
 *       L5Ids: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Channels: [ // ChannelList
 *       "VOICE" || "CHAT" || "TASK",
 *     ],
 *     ContactAnalysis: { // ContactAnalysis
 *       Transcript: { // Transcript
 *         Criteria: [ // TranscriptCriteriaList // required
 *           { // TranscriptCriteria
 *             ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT", // required
 *             SearchText: [ // SearchTextList // required
 *               "STRING_VALUE",
 *             ],
 *             MatchType: "MATCH_ALL" || "MATCH_ANY", // required
 *           },
 *         ],
 *         MatchType: "MATCH_ALL" || "MATCH_ANY",
 *       },
 *     },
 *     InitiationMethods: [ // InitiationMethodList
 *       "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND",
 *     ],
 *     QueueIds: [ // QueueIdList
 *       "STRING_VALUE",
 *     ],
 *     SearchableContactAttributes: { // SearchableContactAttributes
 *       Criteria: [ // SearchableContactAttributesCriteriaList // required
 *         { // SearchableContactAttributesCriteria
 *           Key: "STRING_VALUE", // required
 *           Values: [ // SearchableContactAttributeValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       MatchType: "MATCH_ALL" || "MATCH_ANY",
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // Sort
 *     FieldName: "INITIATION_TIMESTAMP" || "SCHEDULED_TIMESTAMP" || "CONNECTED_TO_AGENT_TIMESTAMP" || "DISCONNECT_TIMESTAMP" || "INITIATION_METHOD" || "CHANNEL", // required
 *     Order: "ASCENDING" || "DESCENDING", // required
 *   },
 * };
 * const command = new SearchContactsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactsResponse
 * //   Contacts: [ // Contacts // required
 * //     { // ContactSearchSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       InitialContactId: "STRING_VALUE",
 * //       PreviousContactId: "STRING_VALUE",
 * //       InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND",
 * //       Channel: "VOICE" || "CHAT" || "TASK",
 * //       QueueInfo: { // ContactSearchSummaryQueueInfo
 * //         Id: "STRING_VALUE",
 * //         EnqueueTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       AgentInfo: { // ContactSearchSummaryAgentInfo
 * //         Id: "STRING_VALUE",
 * //         ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       InitiationTimestamp: new Date("TIMESTAMP"),
 * //       DisconnectTimestamp: new Date("TIMESTAMP"),
 * //       ScheduledTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchContactsCommandInput - {@link SearchContactsCommandInput}
 * @returns {@link SearchContactsCommandOutput}
 * @see {@link SearchContactsCommandInput} for command's `input` shape.
 * @see {@link SearchContactsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SearchContactsCommand extends $Command<
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
  ConnectClientResolvedConfig
> {
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
  constructor(readonly input: SearchContactsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchContactsCommandInput, SearchContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchContactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchContactsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "SearchContacts",
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
  private serialize(input: SearchContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchContactsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchContactsCommandOutput> {
    return de_SearchContactsCommand(output, context);
  }
}
