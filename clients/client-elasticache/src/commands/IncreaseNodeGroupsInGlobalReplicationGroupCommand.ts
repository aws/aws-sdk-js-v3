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
import {
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  de_IncreaseNodeGroupsInGlobalReplicationGroupCommand,
  se_IncreaseNodeGroupsInGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandInput
  extends IncreaseNodeGroupsInGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  extends IncreaseNodeGroupsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // IncreaseNodeGroupsInGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   NodeGroupCount: Number("int"), // required
 *   RegionalConfigurations: [ // RegionalConfigurationList
 *     { // RegionalConfiguration
 *       ReplicationGroupId: "STRING_VALUE", // required
 *       ReplicationGroupRegion: "STRING_VALUE", // required
 *       ReshardingConfiguration: [ // ReshardingConfigurationList // required
 *         { // ReshardingConfiguration
 *           NodeGroupId: "STRING_VALUE",
 *           PreferredAvailabilityZones: [ // AvailabilityZonesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   ApplyImmediately: true || false, // required
 * };
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // IncreaseNodeGroupsInGlobalReplicationGroupResult
 * //   GlobalReplicationGroup: { // GlobalReplicationGroup
 * //     GlobalReplicationGroupId: "STRING_VALUE",
 * //     GlobalReplicationGroupDescription: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     Members: [ // GlobalReplicationGroupMemberList
 * //       { // GlobalReplicationGroupMember
 * //         ReplicationGroupId: "STRING_VALUE",
 * //         ReplicationGroupRegion: "STRING_VALUE",
 * //         Role: "STRING_VALUE",
 * //         AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterEnabled: true || false,
 * //     GlobalNodeGroups: [ // GlobalNodeGroupList
 * //       { // GlobalNodeGroup
 * //         GlobalNodeGroupId: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthTokenEnabled: true || false,
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param IncreaseNodeGroupsInGlobalReplicationGroupCommandInput - {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput}
 * @returns {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput}
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
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
  constructor(readonly input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
  ): Handler<
    IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        IncreaseNodeGroupsInGlobalReplicationGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "IncreaseNodeGroupsInGlobalReplicationGroup",
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
  private serialize(
    input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_IncreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return de_IncreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
