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
import { GetCurrentMetricDataRequest, GetCurrentMetricDataResponse } from "../models/models_1";
import { de_GetCurrentMetricDataCommand, se_GetCurrentMetricDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCurrentMetricDataCommand}.
 */
export interface GetCurrentMetricDataCommandInput extends GetCurrentMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetCurrentMetricDataCommand}.
 */
export interface GetCurrentMetricDataCommandOutput extends GetCurrentMetricDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p>
 *          <p>For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
 *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetCurrentMetricDataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetCurrentMetricDataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetCurrentMetricDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Filters: { // Filters
 *     Queues: [ // Queues
 *       "STRING_VALUE",
 *     ],
 *     Channels: [ // Channels
 *       "VOICE" || "CHAT" || "TASK",
 *     ],
 *     RoutingProfiles: [ // RoutingProfiles
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Groupings: [ // Groupings
 *     "QUEUE" || "CHANNEL" || "ROUTING_PROFILE",
 *   ],
 *   CurrentMetrics: [ // CurrentMetrics // required
 *     { // CurrentMetric
 *       Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 *       Unit: "SECONDS" || "COUNT" || "PERCENT",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortCriteria: [ // CurrentMetricSortCriteriaMaxOne
 *     { // CurrentMetricSortCriteria
 *       SortByMetric: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 *       SortOrder: "ASCENDING" || "DESCENDING",
 *     },
 *   ],
 * };
 * const command = new GetCurrentMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetCurrentMetricDataResponse
 * //   NextToken: "STRING_VALUE",
 * //   MetricResults: [ // CurrentMetricResults
 * //     { // CurrentMetricResult
 * //       Dimensions: { // Dimensions
 * //         Queue: { // QueueReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Channel: "VOICE" || "CHAT" || "TASK",
 * //         RoutingProfile: { // RoutingProfileReference
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Collections: [ // CurrentMetricDataCollections
 * //         { // CurrentMetricData
 * //           Metric: { // CurrentMetric
 * //             Name: "AGENTS_ONLINE" || "AGENTS_AVAILABLE" || "AGENTS_ON_CALL" || "AGENTS_NON_PRODUCTIVE" || "AGENTS_AFTER_CONTACT_WORK" || "AGENTS_ERROR" || "AGENTS_STAFFED" || "CONTACTS_IN_QUEUE" || "OLDEST_CONTACT_AGE" || "CONTACTS_SCHEDULED" || "AGENTS_ON_CONTACT" || "SLOTS_ACTIVE" || "SLOTS_AVAILABLE",
 * //             Unit: "SECONDS" || "COUNT" || "PERCENT",
 * //           },
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   DataSnapshotTime: new Date("TIMESTAMP"),
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetCurrentMetricDataCommandInput - {@link GetCurrentMetricDataCommandInput}
 * @returns {@link GetCurrentMetricDataCommandOutput}
 * @see {@link GetCurrentMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetCurrentMetricDataCommandOutput} for command's `response` shape.
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
export class GetCurrentMetricDataCommand extends $Command<
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
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
  constructor(readonly input: GetCurrentMetricDataCommandInput) {
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
  ): Handler<GetCurrentMetricDataCommandInput, GetCurrentMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCurrentMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetCurrentMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "GetCurrentMetricData",
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
  private serialize(input: GetCurrentMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCurrentMetricDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentMetricDataCommandOutput> {
    return de_GetCurrentMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
