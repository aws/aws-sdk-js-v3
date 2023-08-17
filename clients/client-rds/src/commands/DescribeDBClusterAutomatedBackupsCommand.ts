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

import { DBClusterAutomatedBackupMessage, DescribeDBClusterAutomatedBackupsMessage } from "../models/models_0";
import {
  de_DescribeDBClusterAutomatedBackupsCommand,
  se_DescribeDBClusterAutomatedBackupsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterAutomatedBackupsCommand}.
 */
export interface DescribeDBClusterAutomatedBackupsCommandInput extends DescribeDBClusterAutomatedBackupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterAutomatedBackupsCommand}.
 */
export interface DescribeDBClusterAutomatedBackupsCommandOutput
  extends DBClusterAutomatedBackupMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Displays backups for both current and deleted DB clusters. For example, use this operation to find details
 *             about automated backups for previously deleted clusters. Current clusters are returned for both the
 *             <code>DescribeDBClusterAutomatedBackups</code> and <code>DescribeDBClusters</code> operations.</p>
 *          <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterAutomatedBackupsMessage
 *   DbClusterResourceId: "STRING_VALUE",
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
 * const command = new DescribeDBClusterAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterAutomatedBackupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterAutomatedBackups: [ // DBClusterAutomatedBackupList
 * //     { // DBClusterAutomatedBackup
 * //       Engine: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DBClusterAutomatedBackupsArn: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       RestoreWindow: { // RestoreWindow
 * //         EarliestTime: new Date("TIMESTAMP"),
 * //         LatestTime: new Date("TIMESTAMP"),
 * //       },
 * //       MasterUsername: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       StorageEncrypted: true || false,
 * //       AllocatedStorage: Number("int"),
 * //       EngineVersion: "STRING_VALUE",
 * //       DBClusterArn: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       EngineMode: "STRING_VALUE",
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       Port: Number("int"),
 * //       KmsKeyId: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterAutomatedBackupsCommandInput - {@link DescribeDBClusterAutomatedBackupsCommandInput}
 * @returns {@link DescribeDBClusterAutomatedBackupsCommandOutput}
 * @see {@link DescribeDBClusterAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB cluster was found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DescribeDBClusterAutomatedBackupsCommand extends $Command<
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput,
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
  constructor(readonly input: DescribeDBClusterAutomatedBackupsCommandInput) {
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
  ): Handler<DescribeDBClusterAutomatedBackupsCommandInput, DescribeDBClusterAutomatedBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterAutomatedBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterAutomatedBackupsCommand";
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
  private serialize(
    input: DescribeDBClusterAutomatedBackupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDBClusterAutomatedBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterAutomatedBackupsCommandOutput> {
    return de_DescribeDBClusterAutomatedBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
