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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeUpdateActionsMessage, UpdateActionsMessage } from "../models/models_0";
import { de_DescribeUpdateActionsCommand, se_DescribeUpdateActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUpdateActionsCommand}.
 */
export interface DescribeUpdateActionsCommandInput extends DescribeUpdateActionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUpdateActionsCommand}.
 */
export interface DescribeUpdateActionsCommandOutput extends UpdateActionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns details of the update actions </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeUpdateActionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeUpdateActionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeUpdateActionsMessage
 *   ServiceUpdateName: "STRING_VALUE",
 *   ReplicationGroupIds: [ // ReplicationGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   CacheClusterIds: [ // CacheClusterIdList
 *     "STRING_VALUE",
 *   ],
 *   Engine: "STRING_VALUE",
 *   ServiceUpdateStatus: [ // ServiceUpdateStatusList
 *     "available" || "cancelled" || "expired",
 *   ],
 *   ServiceUpdateTimeRange: { // TimeRangeFilter
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 *   UpdateActionStatus: [ // UpdateActionStatusList
 *     "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 *   ],
 *   ShowNodeLevelUpdateStatus: true || false,
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeUpdateActionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionsMessage
 * //   Marker: "STRING_VALUE",
 * //   UpdateActions: [ // UpdateActionList
 * //     { // UpdateAction
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ServiceUpdateReleaseDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateSeverity: "critical" || "important" || "medium" || "low",
 * //       ServiceUpdateStatus: "available" || "cancelled" || "expired",
 * //       ServiceUpdateRecommendedApplyByDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateType: "security-update",
 * //       UpdateActionAvailableDate: new Date("TIMESTAMP"),
 * //       UpdateActionStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete" || "scheduling" || "scheduled" || "not-applicable",
 * //       NodesUpdated: "STRING_VALUE",
 * //       UpdateActionStatusModifiedDate: new Date("TIMESTAMP"),
 * //       SlaMet: "yes" || "no" || "n/a",
 * //       NodeGroupUpdateStatus: [ // NodeGroupUpdateStatusList
 * //         { // NodeGroupUpdateStatus
 * //           NodeGroupId: "STRING_VALUE",
 * //           NodeGroupMemberUpdateStatus: [ // NodeGroupMemberUpdateStatusList
 * //             { // NodeGroupMemberUpdateStatus
 * //               CacheClusterId: "STRING_VALUE",
 * //               CacheNodeId: "STRING_VALUE",
 * //               NodeUpdateStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete",
 * //               NodeDeletionDate: new Date("TIMESTAMP"),
 * //               NodeUpdateStartDate: new Date("TIMESTAMP"),
 * //               NodeUpdateEndDate: new Date("TIMESTAMP"),
 * //               NodeUpdateInitiatedBy: "system" || "customer",
 * //               NodeUpdateInitiatedDate: new Date("TIMESTAMP"),
 * //               NodeUpdateStatusModifiedDate: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       CacheNodeUpdateStatus: [ // CacheNodeUpdateStatusList
 * //         { // CacheNodeUpdateStatus
 * //           CacheNodeId: "STRING_VALUE",
 * //           NodeUpdateStatus: "not-applied" || "waiting-to-start" || "in-progress" || "stopping" || "stopped" || "complete",
 * //           NodeDeletionDate: new Date("TIMESTAMP"),
 * //           NodeUpdateStartDate: new Date("TIMESTAMP"),
 * //           NodeUpdateEndDate: new Date("TIMESTAMP"),
 * //           NodeUpdateInitiatedBy: "system" || "customer",
 * //           NodeUpdateInitiatedDate: new Date("TIMESTAMP"),
 * //           NodeUpdateStatusModifiedDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       EstimatedUpdateTime: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeUpdateActionsCommandInput - {@link DescribeUpdateActionsCommandInput}
 * @returns {@link DescribeUpdateActionsCommandOutput}
 * @see {@link DescribeUpdateActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateActionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class DescribeUpdateActionsCommand extends $Command<
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeUpdateActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUpdateActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeUpdateActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeUpdateActions",
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
  private serialize(input: DescribeUpdateActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUpdateActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUpdateActionsCommandOutput> {
    return de_DescribeUpdateActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
