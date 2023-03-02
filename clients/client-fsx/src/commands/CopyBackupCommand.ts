// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CopyBackupRequest,
  CopyBackupRequestFilterSensitiveLog,
  CopyBackupResponse,
  CopyBackupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CopyBackupCommand,
  serializeAws_json1_1CopyBackupCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CopyBackupCommand}.
 */
export interface CopyBackupCommandInput extends CopyBackupRequest {}
/**
 * The output of {@link CopyBackupCommand}.
 */
export interface CopyBackupCommandOutput extends CopyBackupResponse, __MetadataBearer {}

/**
 * <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region
 *          (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five
 *          backup copy requests in progress to a single destination Region per account.</p>
 *          <p>You can use cross-Region backup copies for cross-Region disaster recovery. You can
 *          periodically take backups and copy them to another Region so that in the event of a
 *          disaster in the primary Region, you can restore from backup and recover availability
 *          quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently
 *          has three partitions: <code>aws</code> (Standard Regions), <code>aws-cn</code> (China
 *          Regions), and <code>aws-us-gov</code> (Amazon Web Services GovCloud [US] Regions).</p>
 *          <p>You can also use backup copies to clone your file dataset to another Region or within
 *          the same Region.</p>
 *          <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region
 *          from which the backup will be copied. For example, if you make the call from the
 *          <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code>
 *          Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter
 *          to make a cross-Region copy. If you don't specify a Region, the backup copy is
 *          created in the same Region where the request is sent from (in-Region copy).</p>
 *          <p>For more information about creating backup copies, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups"> Copying backups</a>
 *          in the <i>Amazon FSx for Windows User Guide</i>, <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for Lustre User
 *             Guide</i>, and <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html#copy-backups">Copying backups</a> in the <i>Amazon FSx for OpenZFS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CopyBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CopyBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CopyBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupCommandInput} for command's `input` shape.
 * @see {@link CopyBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @example To copy a backup
 * ```javascript
 * // This operation copies an Amazon FSx backup.
 * const input = {
 *   "SourceBackupId": "backup-03e3c82e0183b7b6b",
 *   "SourceRegion": "us-east-2"
 * };
 * const command = new CopyBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Backup": {
 *     "BackupId": "backup-0a3364eded1014b28",
 *     "CreationTime": 1617954808.068,
 *     "FileSystem": {
 *       "FileSystemId": "fs-0498eed5fe91001ec",
 *       "FileSystemType": "LUSTRE",
 *       "LustreConfiguration": {
 *         "AutomaticBackupRetentionDays": 0,
 *         "DeploymentType": "PERSISTENT_1",
 *         "PerUnitStorageThroughput": 50,
 *         "WeeklyMaintenanceStartTime": "1:05:00"
 *       },
 *       "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0f5179e395f597e66",
 *       "StorageCapacity": 2400,
 *       "StorageType": "SSD"
 *     },
 *     "KmsKeyId": "arn:aws:fsx:us-east-1:012345678912:key/d1234e22-543a-12b7-a98f-e12c2b54001a",
 *     "Lifecycle": "COPYING",
 *     "OwnerId": "123456789012",
 *     "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-0a3364eded1014b28",
 *     "Tags": [
 *       {
 *         "Key": "Name",
 *         "Value": "MyBackup"
 *       }
 *     ],
 *     "Type": "USER_INITIATED"
 *   }
 * }
 * *\/
 * // example id: to-copy-a-backup-1481847318640
 * ```
 *
 */
export class CopyBackupCommand extends $Command<
  CopyBackupCommandInput,
  CopyBackupCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: CopyBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyBackupCommandInput, CopyBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyBackupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CopyBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyBackupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyBackupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyBackupCommandOutput> {
    return deserializeAws_json1_1CopyBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
