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

import { ModifyDBSnapshotMessage, ModifyDBSnapshotResult } from "../models/models_1";
import { de_ModifyDBSnapshotCommand, se_ModifyDBSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBSnapshotCommand}.
 */
export interface ModifyDBSnapshotCommandInput extends ModifyDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSnapshotCommand}.
 */
export interface ModifyDBSnapshotCommandOutput extends ModifyDBSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted
 *             or unencrypted, but not shared or public.
 *
 *     </p>
 *          <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command
 *           doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBSnapshotMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 * };
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSnapshotResult
 * //   DBSnapshot: { // DBSnapshot
 * //     DBSnapshotIdentifier: "STRING_VALUE",
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     OptionGroupName: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceDBSnapshotIdentifier: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBSnapshotArn: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     ProcessorFeatures: [ // ProcessorFeatureList
 * //       { // ProcessorFeature
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DbiResourceId: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //     SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //     SnapshotTarget: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     DBSystemId: "STRING_VALUE",
 * //     DedicatedLogVolume: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBSnapshotCommandInput - {@link ModifyDBSnapshotCommandInput}
 * @returns {@link ModifyDBSnapshotCommandOutput}
 * @see {@link ModifyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify a DB snapshot
 * ```javascript
 * // The following example upgrades a PostgeSQL 10.6 snapshot named db5-snapshot-upg-test to PostgreSQL 11.7. The new DB engine version is shown after the snapshot has finished upgrading and its status is available.
 * const input = {
 *   "DBSnapshotIdentifier": "db5-snapshot-upg-test",
 *   "EngineVersion": "11.7"
 * };
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshot": {
 *     "AllocatedStorage": 20,
 *     "AvailabilityZone": "us-west-2a",
 *     "DBInstanceIdentifier": "database-5",
 *     "DBSnapshotArn": "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-upg-test",
 *     "DBSnapshotIdentifier": "db5-snapshot-upg-test",
 *     "DbiResourceId": "db-GJMF75LM42IL6BTFRE4UZJ5YM4",
 *     "Encrypted": false,
 *     "Engine": "postgres",
 *     "EngineVersion": "10.6",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "InstanceCreateTime": "2020-03-27T19:59:04.735Z",
 *     "LicenseModel": "postgresql-license",
 *     "MasterUsername": "postgres",
 *     "OptionGroupName": "default:postgres-11",
 *     "PercentProgress": 100,
 *     "Port": 5432,
 *     "ProcessorFeatures": [],
 *     "SnapshotCreateTime": "2020-03-27T20:49:17.092Z",
 *     "SnapshotType": "manual",
 *     "Status": "upgrading",
 *     "StorageType": "gp2",
 *     "VpcId": "vpc-2ff27557"
 *   }
 * }
 * *\/
 * // example id: to-modify-a-db-snapshot-1680381968028
 * ```
 *
 */
export class ModifyDBSnapshotCommand extends $Command<
  ModifyDBSnapshotCommandInput,
  ModifyDBSnapshotCommandOutput,
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
  constructor(readonly input: ModifyDBSnapshotCommandInput) {
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
  ): Handler<ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBSnapshot",
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
  private serialize(input: ModifyDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBSnapshotCommandOutput> {
    return de_ModifyDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
