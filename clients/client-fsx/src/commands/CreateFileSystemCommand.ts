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
  CreateFileSystemRequest,
  CreateFileSystemRequestFilterSensitiveLog,
  CreateFileSystemResponse,
} from "../models/models_0";
import { de_CreateFileSystemCommand, se_CreateFileSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateFileSystemCommand}.
 */
export interface CreateFileSystemCommandInput extends CreateFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link CreateFileSystemCommand}.
 */
export interface CreateFileSystemCommandOutput extends CreateFileSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new, empty Amazon FSx file system. You can create the following supported
 *         Amazon FSx file systems using the <code>CreateFileSystem</code> API operation:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon FSx for Lustre</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for NetApp ONTAP</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for OpenZFS</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for Windows File Server</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires a client request token in the request that Amazon FSx uses
 *             to ensure idempotent creation. This means that calling the operation multiple times with
 *             the same client request token has no effect. By using the idempotent operation, you can
 *             retry a <code>CreateFileSystem</code> operation without the risk of creating an extra
 *             file system. This approach can be useful when an initial call fails in a way that makes
 *             it unclear whether a file system was created. Examples are if a transport level timeout
 *             occurred, or your connection was reset. If you use the same client request token and the
 *             initial call created a file system, the client receives success as long as the
 *             parameters are the same.</p>
 *          <p>If a file system with the specified client request token exists and the parameters
 *             match, <code>CreateFileSystem</code> returns the description of the existing file
 *             system. If a file system with the specified client request token exists and the
 *             parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a
 *             file system with the specified client request token doesn't exist,
 *                 <code>CreateFileSystem</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty Amazon FSx file system with an assigned ID, and
 *                     an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the file system in JSON format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle
 *                 state is still <code>CREATING</code>. You can check the file-system creation status
 *                 by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html">DescribeFileSystems</a> operation, which returns the file system state
 *                 along with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateFileSystemRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS", // required
 *   StorageCapacity: Number("int"), // required
 *   StorageType: "SSD" || "HDD",
 *   SubnetIds: [ // SubnetIds // required
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   WindowsConfiguration: { // CreateFileSystemWindowsConfiguration
 *     ActiveDirectoryId: "STRING_VALUE",
 *     SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryConfiguration
 *       DomainName: "STRING_VALUE", // required
 *       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *       FileSystemAdministratorsGroup: "STRING_VALUE",
 *       UserName: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *       DnsIps: [ // DnsIps // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 *     PreferredSubnetId: "STRING_VALUE",
 *     ThroughputCapacity: Number("int"), // required
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *     DailyAutomaticBackupStartTime: "STRING_VALUE",
 *     AutomaticBackupRetentionDays: Number("int"),
 *     CopyTagsToBackups: true || false,
 *     Aliases: [ // AlternateDNSNames
 *       "STRING_VALUE",
 *     ],
 *     AuditLogConfiguration: { // WindowsAuditLogCreateConfiguration
 *       FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 *       FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 *       AuditLogDestination: "STRING_VALUE",
 *     },
 *   },
 *   LustreConfiguration: { // CreateFileSystemLustreConfiguration
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *     ImportPath: "STRING_VALUE",
 *     ExportPath: "STRING_VALUE",
 *     ImportedFileChunkSize: Number("int"),
 *     DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 *     AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 *     PerUnitStorageThroughput: Number("int"),
 *     DailyAutomaticBackupStartTime: "STRING_VALUE",
 *     AutomaticBackupRetentionDays: Number("int"),
 *     CopyTagsToBackups: true || false,
 *     DriveCacheType: "NONE" || "READ",
 *     DataCompressionType: "NONE" || "LZ4",
 *     LogConfiguration: { // LustreLogCreateConfiguration
 *       Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 *       Destination: "STRING_VALUE",
 *     },
 *     RootSquashConfiguration: { // LustreRootSquashConfiguration
 *       RootSquash: "STRING_VALUE",
 *       NoSquashNids: [ // LustreNoSquashNids
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   OntapConfiguration: { // CreateFileSystemOntapConfiguration
 *     AutomaticBackupRetentionDays: Number("int"),
 *     DailyAutomaticBackupStartTime: "STRING_VALUE",
 *     DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1", // required
 *     EndpointIpAddressRange: "STRING_VALUE",
 *     FsxAdminPassword: "STRING_VALUE",
 *     DiskIopsConfiguration: { // DiskIopsConfiguration
 *       Mode: "AUTOMATIC" || "USER_PROVISIONED",
 *       Iops: Number("long"),
 *     },
 *     PreferredSubnetId: "STRING_VALUE",
 *     RouteTableIds: [ // RouteTableIds
 *       "STRING_VALUE",
 *     ],
 *     ThroughputCapacity: Number("int"), // required
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *   },
 *   FileSystemTypeVersion: "STRING_VALUE",
 *   OpenZFSConfiguration: { // CreateFileSystemOpenZFSConfiguration
 *     AutomaticBackupRetentionDays: Number("int"),
 *     CopyTagsToBackups: true || false,
 *     CopyTagsToVolumes: true || false,
 *     DailyAutomaticBackupStartTime: "STRING_VALUE",
 *     DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2", // required
 *     ThroughputCapacity: Number("int"), // required
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *     DiskIopsConfiguration: {
 *       Mode: "AUTOMATIC" || "USER_PROVISIONED",
 *       Iops: Number("long"),
 *     },
 *     RootVolumeConfiguration: { // OpenZFSCreateRootVolumeConfiguration
 *       RecordSizeKiB: Number("int"),
 *       DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 *       NfsExports: [ // OpenZFSNfsExports
 *         { // OpenZFSNfsExport
 *           ClientConfigurations: [ // OpenZFSClientConfigurations // required
 *             { // OpenZFSClientConfiguration
 *               Clients: "STRING_VALUE", // required
 *               Options: [ // OpenZFSNfsExportOptions // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 *         { // OpenZFSUserOrGroupQuota
 *           Type: "USER" || "GROUP", // required
 *           Id: Number("int"), // required
 *           StorageCapacityQuotaGiB: Number("int"), // required
 *         },
 *       ],
 *       CopyTagsToSnapshots: true || false,
 *       ReadOnly: true || false,
 *     },
 *   },
 * };
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateFileSystemCommandInput - {@link CreateFileSystemCommandInput}
 * @returns {@link CreateFileSystemCommandOutput}
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link ActiveDirectoryError} (client fault)
 *  <p>An Active Directory error.</p>
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
 * @throws {@link InvalidExportPath} (client fault)
 *  <p>The path provided for data repository export isn't valid.</p>
 *
 * @throws {@link InvalidImportPath} (client fault)
 *  <p>The path provided for data repository import isn't valid.</p>
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
 * @example To create a new file system
 * ```javascript
 * // This operation creates a new Amazon FSx for Windows File Server file system.
 * const input = {
 *   "ClientRequestToken": "a8ca07e4-61ec-4399-99f4-19853801bcd5",
 *   "FileSystemType": "WINDOWS",
 *   "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/1111abcd-2222-3333-4444-55556666eeff",
 *   "SecurityGroupIds": [
 *     "sg-edcd9784"
 *   ],
 *   "StorageCapacity": 3200,
 *   "StorageType": "HDD",
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
 *     "ActiveDirectoryId": "d-1234abcd12",
 *     "Aliases": [
 *       "accounting.corp.example.com"
 *     ],
 *     "AutomaticBackupRetentionDays": 30,
 *     "DailyAutomaticBackupStartTime": "05:00",
 *     "ThroughputCapacity": 32,
 *     "WeeklyMaintenanceStartTime": "1:05:00"
 *   }
 * };
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystem": {
 *     "CreationTime": "1481841524.0",
 *     "DNSName": "fs-0123456789abcdef0.fsx.com",
 *     "FileSystemId": "fs-0123456789abcdef0",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/1111abcd-2222-3333-4444-55556666eeff",
 *     "Lifecycle": "CREATING",
 *     "OwnerId": "012345678912",
 *     "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0123456789abcdef0",
 *     "StorageCapacity": 3200,
 *     "StorageType": "HDD",
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
 *       "Aliases": [
 *         {
 *           "Lifecycle": "CREATING",
 *           "Name": "accounting.corp.example.com"
 *         }
 *       ],
 *       "AutomaticBackupRetentionDays": 30,
 *       "DailyAutomaticBackupStartTime": "05:00",
 *       "ThroughputCapacity": 32,
 *       "WeeklyMaintenanceStartTime": "1:05:00"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-create-a-new-file-system-1481840798547
 * ```
 *
 */
export class CreateFileSystemCommand extends $Command<
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
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
  constructor(readonly input: CreateFileSystemCommandInput) {
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
  ): Handler<CreateFileSystemCommandInput, CreateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFileSystemRequestFilterSensitiveLog,
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
  private serialize(input: CreateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFileSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFileSystemCommandOutput> {
    return de_CreateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
