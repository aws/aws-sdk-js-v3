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
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import { de_DescribeDBInstancesCommand, se_DescribeDBInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBInstancesCommand}.
 */
export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBInstancesCommand}.
 */
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBInstancesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBInstancesMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
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
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DBInstanceMessage
 * //   Marker: "STRING_VALUE",
 * //   DBInstances: [ // DBInstanceList
 * //     { // DBInstance
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       DBInstanceStatus: "STRING_VALUE",
 * //       Endpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         HostedZoneId: "STRING_VALUE",
 * //       },
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       DBSubnetGroup: { // DBSubnetGroup
 * //         DBSubnetGroupName: "STRING_VALUE",
 * //         DBSubnetGroupDescription: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         SubnetGroupStatus: "STRING_VALUE",
 * //         Subnets: [ // SubnetList
 * //           { // Subnet
 * //             SubnetIdentifier: "STRING_VALUE",
 * //             SubnetAvailabilityZone: { // AvailabilityZone
 * //               Name: "STRING_VALUE",
 * //             },
 * //             SubnetStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //         DBSubnetGroupArn: "STRING_VALUE",
 * //       },
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // PendingModifiedValues
 * //         DBInstanceClass: "STRING_VALUE",
 * //         AllocatedStorage: Number("int"),
 * //         MasterUserPassword: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         BackupRetentionPeriod: Number("int"),
 * //         MultiAZ: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         LicenseModel: "STRING_VALUE",
 * //         Iops: Number("int"),
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         StorageType: "STRING_VALUE",
 * //         CACertificateIdentifier: "STRING_VALUE",
 * //         DBSubnetGroupName: "STRING_VALUE",
 * //         PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //           LogTypesToEnable: [ // LogTypeList
 * //             "STRING_VALUE",
 * //           ],
 * //           LogTypesToDisable: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       LatestRestorableTime: new Date("TIMESTAMP"),
 * //       EngineVersion: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       PubliclyAccessible: true || false,
 * //       StatusInfos: [ // DBInstanceStatusInfoList
 * //         { // DBInstanceStatusInfo
 * //           StatusType: "STRING_VALUE",
 * //           Normal: true || false,
 * //           Status: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       CACertificateIdentifier: "STRING_VALUE",
 * //       CopyTagsToSnapshot: true || false,
 * //       PromotionTier: Number("int"),
 * //       DBInstanceArn: "STRING_VALUE",
 * //       EnabledCloudwatchLogsExports: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBInstancesCommandInput - {@link DescribeDBInstancesCommandInput}
 * @returns {@link DescribeDBInstancesCommandOutput}
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing instance. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class DescribeDBInstancesCommand extends $Command<
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
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
  constructor(readonly input: DescribeDBInstancesCommandInput) {
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
  ): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBInstances",
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
  private serialize(input: DescribeDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBInstancesCommandOutput> {
    return de_DescribeDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
