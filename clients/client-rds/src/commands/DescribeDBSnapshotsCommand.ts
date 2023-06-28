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
} from "@smithy/types";

import { DBSnapshotMessage, DescribeDBSnapshotsMessage } from "../models/models_1";
import { de_DescribeDBSnapshotsCommand, se_DescribeDBSnapshotsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSnapshotsCommand}.
 */
export interface DescribeDBSnapshotsCommandInput extends DescribeDBSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSnapshotsCommand}.
 */
export interface DescribeDBSnapshotsCommandOutput extends DBSnapshotMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DB snapshots. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSnapshotsMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   DBSnapshotIdentifier: "STRING_VALUE",
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
 *   DbiResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DBSnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSnapshots: [ // DBSnapshotList
 * //     { // DBSnapshot
 * //       DBSnapshotIdentifier: "STRING_VALUE",
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Engine: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       OptionGroupName: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       SourceRegion: "STRING_VALUE",
 * //       SourceDBSnapshotIdentifier: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       TdeCredentialArn: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DBSnapshotArn: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       ProcessorFeatures: [ // ProcessorFeatureList
 * //         { // ProcessorFeature
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DbiResourceId: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //       SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //       SnapshotTarget: "STRING_VALUE",
 * //       StorageThroughput: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSnapshotsCommandInput - {@link DescribeDBSnapshotsCommandInput}
 * @returns {@link DescribeDBSnapshotsCommandOutput}
 * @see {@link DescribeDBSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe a DB snapshot for a DB instance
 * ```javascript
 * // The following example retrieves the details of a DB snapshot for a DB instance.
 * const input = {
 *   "DBSnapshotIdentifier": "mydbsnapshot"
 * };
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshots": [
 *     {
 *       "AllocatedStorage": 20,
 *       "AvailabilityZone": "us-east-1f",
 *       "DBInstanceIdentifier": "mysqldb",
 *       "DBSnapshotArn": "arn:aws:rds:us-east-1:123456789012:snapshot:mydbsnapshot",
 *       "DBSnapshotIdentifier": "mydbsnapshot",
 *       "DbiResourceId": "db-AKIAIOSFODNN7EXAMPLE",
 *       "Encrypted": false,
 *       "Engine": "mysql",
 *       "EngineVersion": "5.6.37",
 *       "IAMDatabaseAuthenticationEnabled": false,
 *       "InstanceCreateTime": "2018-02-08T22:24:55.973Z",
 *       "LicenseModel": "general-public-license",
 *       "MasterUsername": "mysqladmin",
 *       "OptionGroupName": "default:mysql-5-6",
 *       "PercentProgress": 100,
 *       "Port": 3306,
 *       "ProcessorFeatures": [],
 *       "SnapshotCreateTime": "2018-02-08T22:28:08.598Z",
 *       "SnapshotType": "manual",
 *       "Status": "available",
 *       "StorageType": "gp2",
 *       "VpcId": "vpc-6594f31c"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-db-snapshot-for-a-db-instance-1680280423239
 * ```
 *
 */
export class DescribeDBSnapshotsCommand extends $Command<
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
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
  constructor(readonly input: DescribeDBSnapshotsCommandInput) {
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
  ): Handler<DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeDBSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBSnapshotsCommandOutput> {
    return de_DescribeDBSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
