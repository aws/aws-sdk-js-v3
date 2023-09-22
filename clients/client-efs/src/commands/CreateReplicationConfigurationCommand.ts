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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { CreateReplicationConfigurationRequest, ReplicationConfigurationDescription } from "../models/models_0";
import {
  de_CreateReplicationConfigurationCommand,
  se_CreateReplicationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationConfigurationCommand}.
 */
export interface CreateReplicationConfigurationCommandInput extends CreateReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationConfigurationCommand}.
 */
export interface CreateReplicationConfigurationCommandOutput
  extends ReplicationConfigurationDescription,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a replication configuration that replicates an existing EFS file system to a new,
 *       read-only file system. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the
 *           <i>Amazon EFS User Guide</i>. The replication configuration
 *       specifies the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Source file system</b> - An existing EFS file system that you
 *           want replicated. The source file system cannot be a destination file system in an existing
 *           replication configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Destination file system configuration</b> - The configuration of
 *           the destination file system to which the source file system will be replicated. There can
 *           only be one destination file system in a replication configuration. The destination file
 *           system configuration consists of the following properties:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Amazon Web Services Region</b> - The Amazon Web Services Region in which the destination file system is created. Amazon EFS replication is available in all Amazon Web Services Regions in which EFS is
 *               available. To use EFS replication in a Region that is disabled by default, you must
 *               first opt in to the Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Managing Amazon Web Services Regions</a> in the <i>Amazon Web Services General Reference
 *                 Reference Guide</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Availability Zone</b> - If you want the destination file system
 *               to use EFS One Zone availability and durability, you must specify the Availability
 *               Zone to create the file system in. For more information about EFS storage classes, see
 *                 <a href="https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html">
 *                 Amazon EFS storage classes</a> in the <i>Amazon EFS User
 *                 Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Encryption</b> - All destination file systems are created with
 *               encryption at rest enabled. You can specify the Key Management Service (KMS) key that is used to encrypt the destination file system. If you don't
 *               specify a KMS key, your service-managed KMS key for
 *                 Amazon EFS is used.  </p>
 *                      <note>
 *                         <p>After the file system is created, you cannot change the KMS key.</p>
 *                      </note>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>The following properties are set by default:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Performance mode</b> - The destination file system's performance
 *           mode matches that of the source file system, unless the destination file system uses EFS
 *           One Zone storage. In that case, the General Purpose performance mode is used. The
 *           performance mode cannot be changed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Throughput mode</b> - The destination file system's throughput
 *         mode matches that of the source file system. After the file system is created, you can modify the
 *           throughput mode.</p>
 *             </li>
 *          </ul>
 *          <p>The following properties are turned off by default:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Lifecycle management</b> - EFS lifecycle management and EFS
 *           Intelligent-Tiering are not enabled on the destination file system. After the destination
 *           file system is created, you can enable EFS lifecycle management and EFS
 *           Intelligent-Tiering.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Automatic backups</b> - Automatic daily backups are enabled on
 *           the destination file system. After the file system is created, you can change this
 *           setting.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the
 *           <i>Amazon EFS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateReplicationConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateReplicationConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // CreateReplicationConfigurationRequest
 *   SourceFileSystemId: "STRING_VALUE", // required
 *   Destinations: [ // DestinationsToCreate // required
 *     { // DestinationToCreate
 *       Region: "STRING_VALUE",
 *       AvailabilityZoneName: "STRING_VALUE",
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ReplicationConfigurationDescription
 * //   SourceFileSystemId: "STRING_VALUE", // required
 * //   SourceFileSystemRegion: "STRING_VALUE", // required
 * //   SourceFileSystemArn: "STRING_VALUE", // required
 * //   OriginalSourceFileSystemArn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   Destinations: [ // Destinations // required
 * //     { // Destination
 * //       Status: "ENABLED" || "ENABLING" || "DELETING" || "ERROR" || "PAUSED" || "PAUSING", // required
 * //       FileSystemId: "STRING_VALUE", // required
 * //       Region: "STRING_VALUE", // required
 * //       LastReplicatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateReplicationConfigurationCommandInput - {@link CreateReplicationConfigurationCommandInput}
 * @returns {@link CreateReplicationConfigurationCommandOutput}
 * @see {@link CreateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemLimitExceeded} (client fault)
 *  <p>Returned if the Amazon Web Services account has already created the maximum number of file systems
 *             allowed per account.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InsufficientThroughputCapacity} (server fault)
 *  <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from Bursting Throughput to
 *             Provisioned Throughput mode. Try again later.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ReplicationNotFound} (client fault)
 *  <p>Returned if the specified file system does not have a replication
 *             configuration.</p>
 *
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *  <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *  <p>Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class CreateReplicationConfigurationCommand extends $Command<
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: CreateReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationConfigurationCommandInput, CreateReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "CreateReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "CreateReplicationConfiguration",
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
  private serialize(
    input: CreateReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationConfigurationCommandOutput> {
    return de_CreateReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
