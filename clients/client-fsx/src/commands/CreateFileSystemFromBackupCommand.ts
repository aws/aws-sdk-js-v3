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
  CreateFileSystemFromBackupRequest,
  CreateFileSystemFromBackupRequestFilterSensitiveLog,
  CreateFileSystemFromBackupResponse,
  CreateFileSystemFromBackupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFileSystemFromBackupCommand,
  serializeAws_json1_1CreateFileSystemFromBackupCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CreateFileSystemFromBackupCommand}.
 */
export interface CreateFileSystemFromBackupCommandInput extends CreateFileSystemFromBackupRequest {}
/**
 * The output of {@link CreateFileSystemFromBackupCommand}.
 */
export interface CreateFileSystemFromBackupCommandOutput extends CreateFileSystemFromBackupResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File
 *             Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup.</p>
 *          <p>If a file system with the specified client request token exists and the parameters
 *             match, this operation returns the description of the file system. If a file system
 *             with the specified client request token exists but the parameters don't match, this
 *             call returns <code>IncompatibleParameterError</code>. If a file system with the
 *             specified client request token doesn't exist, this operation does the following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new Amazon FSx file system from backup with an assigned ID,
 *                     and an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the file system.</p>
 *             </li>
 *          </ul>
 *          <p>Parameters like the Active Directory, default share name, automatic backup, and backup
 *             settings default to the parameters of the file system that was backed up, unless
 *             overridden. You can explicitly supply other settings.</p>
 *          <p>By using the idempotent operation, you can retry a
 *                 <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra
 *             file system. This approach can be useful when an initial call fails in a way that makes
 *             it unclear whether a file system was created. Examples are if a transport level timeout
 *             occurred, or your connection was reset. If you use the same client request token and the
 *             initial call created a file system, the client receives a success message as long as the
 *             parameters are the same.</p>
 *          <note>
 *             <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's
 *                 lifecycle state is still <code>CREATING</code>. You can check the file-system
 *                 creation status by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">
 *                     DescribeFileSystems</a> operation, which returns the file system state along
 *                 with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileSystemFromBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileSystemFromBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateFileSystemFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileSystemFromBackupCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemFromBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link ActiveDirectoryError} (client fault)
 *  <p>An Active Directory error.</p>
 *
 * @throws {@link BackupNotFound} (client fault)
 *  <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link InvalidNetworkSettings} (client fault)
 *  <p>One or more network settings specified in the request are invalid.</p>
 *
 * @throws {@link InvalidPerUnitStorageThroughput} (client fault)
 *  <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 *
 * @throws {@link MissingFileSystemConfiguration} (client fault)
 *  <p>A file system configuration is required for this operation.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 *
 * @example To create a new file system from backup
 * ```javascript
 * // This operation creates a new file system from backup.
 * const input = {
 *   "BackupId": "backup-03e3c82e0183b7b6b",
 *   "ClientRequestToken": "f4c94ed7-238d-4c46-93db-48cd62ec33b7",
 *   "SecurityGroupIds": [
 *     "sg-edcd9784"
 *   ],
 *   "SubnetIds": [
 *     "subnet-1234abcd"
 *   ],
 *   "Tags": [
 *     {
 *       "Key": "Name",
 *       "Value": "MyFileSystem"
 *     }
 *   ],
 *   "WindowsConfiguration": {
 *     "ThroughputCapacity": 8
 *   }
 * };
 * const command = new CreateFileSystemFromBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystem": {
 *     "CreationTime": "1481841524.0",
 *     "DNSName": "fs-0498eed5fe91001ec.fsx.com",
 *     "FileSystemId": "fs-0498eed5fe91001ec",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
 *     "Lifecycle": "CREATING",
 *     "OwnerId": "012345678912",
 *     "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
 *     "StorageCapacity": 300,
 *     "SubnetIds": [
 *       "subnet-1234abcd"
 *     ],
 *     "Tags": [
 *       {
 *         "Key": "Name",
 *         "Value": "MyFileSystem"
 *       }
 *     ],
 *     "VpcId": "vpc-ab1234cd",
 *     "WindowsConfiguration": {
 *       "ActiveDirectoryId": "d-1234abcd12",
 *       "AutomaticBackupRetentionDays": 30,
 *       "DailyAutomaticBackupStartTime": "05:00",
 *       "ThroughputCapacity": 8,
 *       "WeeklyMaintenanceStartTime": "1:05:00"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-file-system-from-backup-1481840798598
 * ```
 *
 */
export class CreateFileSystemFromBackupCommand extends $Command<
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
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

  constructor(readonly input: CreateFileSystemFromBackupCommandInput) {
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
  ): Handler<CreateFileSystemFromBackupCommandInput, CreateFileSystemFromBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileSystemFromBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileSystemFromBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFileSystemFromBackupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFileSystemFromBackupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFileSystemFromBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFileSystemFromBackupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFileSystemFromBackupCommandOutput> {
    return deserializeAws_json1_1CreateFileSystemFromBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
