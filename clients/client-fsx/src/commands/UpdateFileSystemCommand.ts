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
  UpdateFileSystemRequest,
  UpdateFileSystemRequestFilterSensitiveLog,
  UpdateFileSystemResponse,
  UpdateFileSystemResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFileSystemCommand,
  serializeAws_json1_1UpdateFileSystemCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {}
/**
 * The output of {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandOutput extends UpdateFileSystemResponse, __MetadataBearer {}

/**
 * <p>Use this operation to update the configuration of an existing Amazon FSx file
 *       system. You can update multiple properties in a single request.</p>
 *          <p>For Amazon FSx for Windows File Server file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AuditLogConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutomaticBackupRetentionDays</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DailyAutomaticBackupStartTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SelfManagedActiveDirectoryConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StorageCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ThroughputCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WeeklyMaintenanceStartTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For Amazon FSx for Lustre file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AutoImportPolicy</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>AutomaticBackupRetentionDays</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DailyAutomaticBackupStartTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DataCompressionType</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LustreRootSquashConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StorageCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WeeklyMaintenanceStartTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For Amazon FSx for NetApp ONTAP file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AutomaticBackupRetentionDays</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DailyAutomaticBackupStartTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DiskIopsConfiguration</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FsxAdminPassword</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StorageCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ThroughputCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WeeklyMaintenanceStartTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the Amazon FSx for OpenZFS file systems, you can update the following
 *       properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AutomaticBackupRetentionDays</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CopyTagsToBackups</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CopyTagsToVolumes</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DailyAutomaticBackupStartTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ThroughputCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>WeeklyMaintenanceStartTime</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 *
 * @example To update an existing file system
 * ```javascript
 * // This operation updates an existing file system.
 * const input = {
 *   "FileSystemId": "fs-0498eed5fe91001ec",
 *   "WindowsConfiguration": {
 *     "AutomaticBackupRetentionDays": 10,
 *     "DailyAutomaticBackupStartTime": "06:00",
 *     "WeeklyMaintenanceStartTime": "3:06:00"
 *   }
 * };
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystem": {
 *     "CreationTime": "1481841524.0",
 *     "DNSName": "fs-0498eed5fe91001ec.fsx.com",
 *     "FileSystemId": "fs-0498eed5fe91001ec",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
 *     "Lifecycle": "AVAILABLE",
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
 *       "AutomaticBackupRetentionDays": 10,
 *       "DailyAutomaticBackupStartTime": "06:00",
 *       "ThroughputCapacity": 8,
 *       "WeeklyMaintenanceStartTime": "3:06:00"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 */
export class UpdateFileSystemCommand extends $Command<
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
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

  constructor(readonly input: UpdateFileSystemCommandInput) {
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
  ): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFileSystemRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFileSystemResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFileSystemCommandOutput> {
    return deserializeAws_json1_1UpdateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
