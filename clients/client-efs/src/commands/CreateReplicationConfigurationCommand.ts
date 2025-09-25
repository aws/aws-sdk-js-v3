// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReplicationConfigurationRequest, ReplicationConfigurationDescription } from "../models/models_0";
import { CreateReplicationConfiguration } from "../schemas/schemas_2_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a replication conﬁguration to either a new or existing EFS file system.
 *       For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html">Amazon EFS replication</a> in the <i>Amazon EFS User
 *         Guide</i>. The replication configuration specifies the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Source file system</b> – The EFS file
 *           system that you want to replicate. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Destination file system</b> – The destination file
 *           system to which the source file system is replicated. There can only be one destination
 *           file system in a replication configuration. </p>
 *                <note>
 *                   <p>A file system can be part of only one replication configuration. </p>
 *                </note>
 *                <p>The destination parameters for the replication configuration depend on
 *           whether you are replicating to a new file system or to an existing file system, and if you
 *           are replicating across Amazon Web Services accounts. See <a>DestinationToCreate</a> for more information.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateReplicationConfiguration</code>
 *        action. Additionally, other permissions are required depending on how you are replicating file systems.
 *        For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html#efs-replication-permissions">Required permissions for replication</a>
 *       in the <i>Amazon EFS User
 *              Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateReplicationConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateReplicationConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // CreateReplicationConfigurationRequest
 *   SourceFileSystemId: "STRING_VALUE", // required
 *   Destinations: [ // DestinationsToCreate // required
 *     { // DestinationToCreate
 *       Region: "STRING_VALUE",
 *       AvailabilityZoneName: "STRING_VALUE",
 *       KmsKeyId: "STRING_VALUE",
 *       FileSystemId: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
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
 * //       OwnerId: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SourceFileSystemOwnerId: "STRING_VALUE",
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
 * @throws {@link ConflictException} (client fault)
 *  <p>Returned if the source file system in a replication is encrypted but the destination file system is unencrypted.</p>
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
 *
 * @public
 */
export class CreateReplicationConfigurationCommand extends $Command
  .classBuilder<
    CreateReplicationConfigurationCommandInput,
    CreateReplicationConfigurationCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "CreateReplicationConfiguration", {})
  .n("EFSClient", "CreateReplicationConfigurationCommand")
  .sc(CreateReplicationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationConfigurationRequest;
      output: ReplicationConfigurationDescription;
    };
    sdk: {
      input: CreateReplicationConfigurationCommandInput;
      output: CreateReplicationConfigurationCommandOutput;
    };
  };
}
