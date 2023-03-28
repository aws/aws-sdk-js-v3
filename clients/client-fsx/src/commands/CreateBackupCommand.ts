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
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBackupCommand,
  serializeAws_json1_1CreateBackupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandInput extends CreateBackupRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandOutput extends CreateBackupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a backup of an existing Amazon FSx for Windows File Server file
 *             system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP
 *             volume, or Amazon FSx for OpenZFS file system. We recommend creating regular
 *             backups so that you can restore a file system or volume from a backup if an issue arises
 *             with the original file system or volume.</p>
 *          <p>For Amazon FSx for Lustre file systems, you can create a backup only for file
 *             systems that have the following configuration:</p>
 *          <ul>
 *             <li>
 *                <p>A Persistent deployment type</p>
 *             </li>
 *             <li>
 *                <p>Are <i>not</i> linked to a data repository</p>
 *             </li>
 *          </ul>
 *          <p>For more information about backups, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>For Amazon FSx for Lustre, see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for
 *                         Lustre backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for Windows, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for
 *                         Windows backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for NetApp ONTAP, see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp
 *                         ONTAP backups</a>.</p>
 *             </li>
 *             <li>
 *                <p>For Amazon FSx for OpenZFS, see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/using-backups.html">Working with FSx for OpenZFS backups</a>.</p>
 *             </li>
 *          </ul>
 *          <p>If a backup with the specified client request token exists and the parameters match,
 *             this operation returns the description of the existing backup. If a backup with the
 *             specified client request token exists and the parameters don't match, this operation
 *             returns <code>IncompatibleParameterError</code>. If a backup with the specified client
 *             request token doesn't exist, <code>CreateBackup</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new Amazon FSx backup with an assigned ID, and an initial
 *                     lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the backup.</p>
 *             </li>
 *          </ul>
 *          <p>By using the idempotent operation, you can retry a <code>CreateBackup</code>
 *             operation without the risk of creating an extra backup. This approach can be useful when
 *             an initial call fails in a way that makes it unclear whether a backup was created. If
 *             you use the same client request token and the initial call created a backup, the
 *             operation returns a successful result because all the parameters are the same.</p>
 *          <p>The <code>CreateBackup</code> operation returns while the backup's lifecycle state is
 *             still <code>CREATING</code>. You can check the backup creation status by calling the
 *                 <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html">DescribeBackups</a> operation, which returns the backup state along with other
 *             information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateBackupRequest
 *   FileSystemId: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   VolumeId: "STRING_VALUE",
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateBackupCommandInput - {@link CreateBackupCommandInput}
 * @returns {@link CreateBackupCommandOutput}
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BackupInProgress} (client fault)
 *  <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 *
 * @example To create a new backup
 * ```javascript
 * // This operation creates a new backup.
 * const input = {
 *   "FileSystemId": "fs-0498eed5fe91001ec",
 *   "Tags": [
 *     {
 *       "Key": "Name",
 *       "Value": "MyBackup"
 *     }
 *   ]
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Backup": {
 *     "BackupId": "backup-03e3c82e0183b7b6b",
 *     "CreationTime": "1481841524.0",
 *     "FileSystem": {
 *       "FileSystemId": "fs-0498eed5fe91001ec",
 *       "OwnerId": "012345678912",
 *       "StorageCapacity": 300,
 *       "WindowsConfiguration": {
 *         "ActiveDirectoryId": "d-1234abcd12",
 *         "AutomaticBackupRetentionDays": 30,
 *         "DailyAutomaticBackupStartTime": "05:00",
 *         "WeeklyMaintenanceStartTime": "1:05:00"
 *       }
 *     },
 *     "Lifecycle": "CREATING",
 *     "ProgressPercent": 0,
 *     "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
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
 * // example id: to-create-a-new-backup-1481840798597
 * ```
 *
 */
export class CreateBackupCommand extends $Command<
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateBackupCommandInput) {
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
  ): Handler<CreateBackupCommandInput, CreateBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBackupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateBackupCommand";
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
  private serialize(input: CreateBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupCommandOutput> {
    return deserializeAws_json1_1CreateBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
