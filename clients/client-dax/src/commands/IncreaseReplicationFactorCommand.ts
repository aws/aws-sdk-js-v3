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

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { IncreaseReplicationFactorRequest, IncreaseReplicationFactorResponse } from "../models/models_0";
import { de_IncreaseReplicationFactorCommand, se_IncreaseReplicationFactorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link IncreaseReplicationFactorCommand}.
 */
export interface IncreaseReplicationFactorCommandInput extends IncreaseReplicationFactorRequest {}
/**
 * @public
 *
 * The output of {@link IncreaseReplicationFactorCommand}.
 */
export interface IncreaseReplicationFactorCommandOutput extends IncreaseReplicationFactorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more nodes to a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, IncreaseReplicationFactorCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, IncreaseReplicationFactorCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const input = { // IncreaseReplicationFactorRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NewReplicationFactor: Number("int"), // required
 *   AvailabilityZones: [ // AvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new IncreaseReplicationFactorCommand(input);
 * const response = await client.send(command);
 * // { // IncreaseReplicationFactorResponse
 * //   Cluster: { // Cluster
 * //     ClusterName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ClusterArn: "STRING_VALUE",
 * //     TotalNodes: Number("int"),
 * //     ActiveNodes: Number("int"),
 * //     NodeType: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     ClusterDiscoveryEndpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       URL: "STRING_VALUE",
 * //     },
 * //     NodeIdsToRemove: [ // NodeIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     Nodes: [ // NodeList
 * //       { // Node
 * //         NodeId: "STRING_VALUE",
 * //         Endpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           URL: "STRING_VALUE",
 * //         },
 * //         NodeCreateTime: new Date("TIMESTAMP"),
 * //         AvailabilityZone: "STRING_VALUE",
 * //         NodeStatus: "STRING_VALUE",
 * //         ParameterGroupStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       TopicArn: "STRING_VALUE",
 * //       TopicStatus: "STRING_VALUE",
 * //     },
 * //     SubnetGroup: "STRING_VALUE",
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupIdentifier: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IamRoleArn: "STRING_VALUE",
 * //     ParameterGroup: { // ParameterGroupStatus
 * //       ParameterGroupName: "STRING_VALUE",
 * //       ParameterApplyStatus: "STRING_VALUE",
 * //       NodeIdsToReboot: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     SSEDescription: { // SSEDescription
 * //       Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //     },
 * //     ClusterEndpointEncryptionType: "NONE" || "TLS",
 * //   },
 * // };
 *
 * ```
 *
 * @param IncreaseReplicationFactorCommandInput - {@link IncreaseReplicationFactorCommandInput}
 * @returns {@link IncreaseReplicationFactorCommandOutput}
 * @see {@link IncreaseReplicationFactorCommandInput} for command's `input` shape.
 * @see {@link IncreaseReplicationFactorCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p>There are not enough system resources to create the cluster you requested (or to
 *             resize an already-existing cluster). </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The requested DAX cluster is not in the <i>available</i>
 *             state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is in an invalid state.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>You have attempted to exceed the maximum number of nodes for a DAX
 *             cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>You have attempted to exceed the maximum number of nodes for your AWS
 *             account.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 */
export class IncreaseReplicationFactorCommand extends $Command<
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
  DAXClientResolvedConfig
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
  constructor(readonly input: IncreaseReplicationFactorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IncreaseReplicationFactorCommandInput, IncreaseReplicationFactorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, IncreaseReplicationFactorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "IncreaseReplicationFactorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDAXV3",
        operation: "IncreaseReplicationFactor",
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
  private serialize(input: IncreaseReplicationFactorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_IncreaseReplicationFactorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseReplicationFactorCommandOutput> {
    return de_IncreaseReplicationFactorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
