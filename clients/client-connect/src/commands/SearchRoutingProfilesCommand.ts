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
import { SearchRoutingProfilesResponse } from "../models/models_1";
import { SearchRoutingProfilesRequest } from "../models/models_2";
import { de_SearchRoutingProfilesCommand, se_SearchRoutingProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchRoutingProfilesCommand}.
 */
export interface SearchRoutingProfilesCommandInput extends SearchRoutingProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchRoutingProfilesCommand}.
 */
export interface SearchRoutingProfilesCommandOutput extends SearchRoutingProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches routing profiles in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchRoutingProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // RoutingProfileSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // RoutingProfileSearchCriteria
 *     OrConditions: [ // RoutingProfileSearchConditionList
 *       {
 *         OrConditions: [
 *           "<RoutingProfileSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<RoutingProfileSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<RoutingProfileSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchRoutingProfilesResponse
 * //   RoutingProfiles: [ // RoutingProfileList
 * //     { // RoutingProfile
 * //       InstanceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RoutingProfileArn: "STRING_VALUE",
 * //       RoutingProfileId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MediaConcurrencies: [ // MediaConcurrencies
 * //         { // MediaConcurrency
 * //           Channel: "VOICE" || "CHAT" || "TASK", // required
 * //           Concurrency: Number("int"), // required
 * //           CrossChannelBehavior: { // CrossChannelBehavior
 * //             BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 * //           },
 * //         },
 * //       ],
 * //       DefaultOutboundQueueId: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       NumberOfAssociatedQueues: Number("long"),
 * //       NumberOfAssociatedUsers: Number("long"),
 * //       AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchRoutingProfilesCommandInput - {@link SearchRoutingProfilesCommandInput}
 * @returns {@link SearchRoutingProfilesCommandOutput}
 * @see {@link SearchRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchRoutingProfilesCommandOutput} for command's `response` shape.
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
export class SearchRoutingProfilesCommand extends $Command<
  SearchRoutingProfilesCommandInput,
  SearchRoutingProfilesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SearchRoutingProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchRoutingProfilesCommandInput, SearchRoutingProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchRoutingProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchRoutingProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "SearchRoutingProfiles",
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
  private serialize(input: SearchRoutingProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchRoutingProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchRoutingProfilesCommandOutput> {
    return de_SearchRoutingProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
