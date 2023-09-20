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

import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/models_0";
import { de_DescribeDBClusterSnapshotsCommand, se_DescribeDBClusterSnapshotsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandInput extends DescribeDBClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandOutput extends DBClusterSnapshotMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterSnapshotsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterSnapshotIdentifier: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
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
 *   IncludeShared: true || false,
 *   IncludePublic: true || false,
 *   DbClusterResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterSnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterSnapshots: [ // DBClusterSnapshotList
 * //     { // DBClusterSnapshot
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Engine: "STRING_VALUE",
 * //       EngineMode: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DBClusterSnapshotArn: "STRING_VALUE",
 * //       SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSystemId: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterSnapshotsCommandInput - {@link DescribeDBClusterSnapshotsCommandInput}
 * @returns {@link DescribeDBClusterSnapshotsCommandOutput}
 * @see {@link DescribeDBClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe a DB cluster snapshot for a DB cluster
 * ```javascript
 * // The following example retrieves the details for the DB cluster snapshots for the specified DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster"
 * };
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshots": [
 *     {
 *       "AllocatedStorage": 0,
 *       "AvailabilityZones": [
 *         "us-east-1a",
 *         "us-east-1b",
 *         "us-east-1e"
 *       ],
 *       "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "DBClusterSnapshotArn": "arn:aws:rds:us-east-1:814387698303:cluster-snapshot:myclustersnapshotcopy",
 *       "DBClusterSnapshotIdentifier": "myclustersnapshotcopy",
 *       "Engine": "aurora-mysql",
 *       "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *       "IAMDatabaseAuthenticationEnabled": false,
 *       "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *       "LicenseModel": "aurora-mysql",
 *       "MasterUsername": "myadmin",
 *       "PercentProgress": 100,
 *       "Port": 0,
 *       "SnapshotCreateTime": "2019-06-04T09:16:42.649Z",
 *       "SnapshotType": "manual",
 *       "Status": "available",
 *       "StorageEncrypted": true,
 *       "VpcId": "vpc-6594f31c"
 *     },
 *     {
 *       "AllocatedStorage": 0,
 *       "AvailabilityZones": [
 *         "us-east-1a",
 *         "us-east-1b",
 *         "us-east-1e"
 *       ],
 *       "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "DBClusterSnapshotArn": "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:rds:mydbcluster-2019-06-20-09-16",
 *       "DBClusterSnapshotIdentifier": "rds:mydbcluster-2019-06-20-09-16",
 *       "Engine": "aurora-mysql",
 *       "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *       "IAMDatabaseAuthenticationEnabled": false,
 *       "KmsKeyId": "arn:aws:kms:us-east-1:814387698303:key/AKIAIOSFODNN7EXAMPLE",
 *       "LicenseModel": "aurora-mysql",
 *       "MasterUsername": "myadmin",
 *       "PercentProgress": 100,
 *       "Port": 0,
 *       "SnapshotCreateTime": "2019-06-20T09:16:26.569Z",
 *       "SnapshotType": "automated",
 *       "Status": "available",
 *       "StorageEncrypted": true,
 *       "VpcId": "vpc-6594f31c"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-db-cluster-snapshot-for-a-db-cluster-1680216426182
 * ```
 *
 */
export class DescribeDBClusterSnapshotsCommand extends $Command<
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterSnapshots",
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
  private serialize(input: DescribeDBClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBClusterSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterSnapshotsCommandOutput> {
    return de_DescribeDBClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
