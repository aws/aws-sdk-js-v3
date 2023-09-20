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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { de_DescribeDBClustersCommand, se_DescribeDBClustersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandInput extends DescribeDBClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandOutput extends DBClusterMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about provisioned Amazon DocumentDB clusters. This API
 *             operation supports pagination. For certain management features
 *             such as cluster and instance lifecycle management, Amazon DocumentDB leverages
 *             operational technology that is shared with Amazon RDS and Amazon
 *             Neptune. Use the <code>filterName=engine,Values=docdb</code> filter
 *             parameter to return only Amazon DocumentDB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClustersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClustersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBClustersMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusters: [ // DBClusterList
 * //     { // DBCluster
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       BackupRetentionPeriod: Number("int"),
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterParameterGroup: "STRING_VALUE",
 * //       DBSubnetGroup: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PercentProgress: "STRING_VALUE",
 * //       EarliestRestorableTime: new Date("TIMESTAMP"),
 * //       Endpoint: "STRING_VALUE",
 * //       ReaderEndpoint: "STRING_VALUE",
 * //       MultiAZ: true || false,
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LatestRestorableTime: new Date("TIMESTAMP"),
 * //       Port: Number("int"),
 * //       MasterUsername: "STRING_VALUE",
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       ReplicationSourceIdentifier: "STRING_VALUE",
 * //       ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterMembers: [ // DBClusterMemberList
 * //         { // DBClusterMember
 * //           DBInstanceIdentifier: "STRING_VALUE",
 * //           IsClusterWriter: true || false,
 * //           DBClusterParameterGroupStatus: "STRING_VALUE",
 * //           PromotionTier: Number("int"),
 * //         },
 * //       ],
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HostedZoneId: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       DBClusterArn: "STRING_VALUE",
 * //       AssociatedRoles: [ // DBClusterRoles
 * //         { // DBClusterRole
 * //           RoleArn: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloneGroupId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       EnabledCloudwatchLogsExports: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       DeletionProtection: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClustersCommandInput - {@link DescribeDBClustersCommandInput}
 * @returns {@link DescribeDBClustersCommandOutput}
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class DescribeDBClustersCommand extends $Command<
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
  DocDBClientResolvedConfig
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
  constructor(readonly input: DescribeDBClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClustersCommandInput, DescribeDBClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusters",
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
  private serialize(input: DescribeDBClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBClustersCommandOutput> {
    return de_DescribeDBClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
