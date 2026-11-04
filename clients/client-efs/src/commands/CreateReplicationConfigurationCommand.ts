// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReplicationConfigurationRequest, ReplicationConfigurationDescription } from "../models/models_0";
import { CreateReplicationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateReplicationConfigurationCommandOutput extends ReplicationConfigurationDescription, __MetadataBearer {}

/**
 * Creates a replication conﬁguration to either a new or existing EFS file system. For more information, see [Amazon EFS replication](https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html) in the *Amazon EFS User Guide*. The replication configuration specifies the following:
 *
 * - **Source file system** – The EFS file system that you want to replicate.
 * - **Destination file system** – The destination file system to which the source file system is replicated. There can only be one destination file system in a replication configuration.
 *
 *   > **Note:** A file system can be part of only one replication configuration.
 *
 *   The destination parameters for the replication configuration depend on whether you are replicating to a new file system or to an existing file system, and if you are replicating across Amazon Web Services accounts. See DestinationToCreate for more information.
 *
 * This operation requires permissions for the `elasticfilesystem:CreateReplicationConfiguration` action. Additionally, other permissions are required depending on how you are replicating file systems. For more information, see [Required permissions for replication](https://docs.aws.amazon.com/efs/latest/ug/efs-replication.html#efs-replication-permissions) in the *Amazon EFS User Guide*.
 *
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
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Returned if the source file system in a replication is encrypted but the destination file system is unencrypted.
 *
 * @throws {@link FileSystemLimitExceeded} (client fault)
 *
 * Returned if the Amazon Web Services account has already created the maximum number of file systems allowed per account.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *
 * Returned if the file system's lifecycle state is not "available".
 *
 * @throws {@link InsufficientThroughputCapacity} (server fault)
 *
 * Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from Bursting Throughput to Provisioned Throughput mode. Try again later.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link ReplicationNotFound} (client fault)
 *
 * Returned if the specified file system does not have a replication configuration.
 *
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *
 * Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *
 * Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class CreateReplicationConfigurationCommand extends command<CreateReplicationConfigurationCommandInput, CreateReplicationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateReplicationConfiguration",
  CreateReplicationConfiguration$
) {
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
