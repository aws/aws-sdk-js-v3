// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFileSystemRequest, FileSystemDescription } from "../models/models_0";
import { CreateFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {}

/**
 * Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's Amazon Web Services account with the specified creation token, this operation does the following:
 *
 * - Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state `creating`.
 * - Returns with the description of the created file system.
 *
 * Otherwise, this operation returns a `FileSystemAlreadyExists` error with the ID of the existing file system.
 *
 * > **Note:** For basic use cases, you can use a randomly generated UUID for the creation token.
 *
 * The idempotent operation allows you to retry a `CreateFileSystem` call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the `FileSystemAlreadyExists` error.
 *
 * For more information, see [Creating a file system](https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1) in the *Amazon EFS User Guide*.
 *
 * > **Note:** The `CreateFileSystem` call returns while the file system's lifecycle state is still `creating`. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.
 *
 * This operation accepts an optional `PerformanceMode` parameter that you choose for your file system. We recommend `generalPurpose` `PerformanceMode` for all file systems. The `maxIO` mode is a previous generation performance type that is designed for highly parallelized workloads that can tolerate higher latencies than the `generalPurpose` mode. `MaxIO` mode is not supported for One Zone file systems or file systems that use Elastic throughput.
 *
 * The `PerformanceMode` can't be changed after the file system has been created. For more information, see [Amazon EFS performance modes](https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html).
 *
 * You can set the throughput mode for the file system using the `ThroughputMode` parameter.
 *
 * After the file system is fully created, Amazon EFS sets its lifecycle state to `available`, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see [Amazon EFS: How it Works](https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html).
 *
 * This operation requires permissions for the `elasticfilesystem:CreateFileSystem` action.
 *
 * File systems can be tagged on creation. If tags are specified in the creation action, IAM performs additional authorization on the `elasticfilesystem:TagResource` action to verify if users have permissions to create tags. Therefore, you must grant explicit permissions to use the `elasticfilesystem:TagResource` action. For more information, see [Granting permissions to tag resources during creation](https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html#supported-iam-actions-tagging.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // CreateFileSystemRequest
 *   CreationToken: "STRING_VALUE", // required
 *   PerformanceMode: "generalPurpose" || "maxIO",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   ThroughputMode: "bursting" || "provisioned" || "elastic",
 *   ProvisionedThroughputInMibps: Number("double"),
 *   AvailabilityZoneName: "STRING_VALUE",
 *   Backup: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemDescription
 * //   OwnerId: "STRING_VALUE", // required
 * //   CreationToken: "STRING_VALUE", // required
 * //   FileSystemId: "STRING_VALUE", // required
 * //   FileSystemArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //   Name: "STRING_VALUE",
 * //   NumberOfMountTargets: Number("int"), // required
 * //   SizeInBytes: { // FileSystemSize
 * //     Value: Number("long"), // required
 * //     Timestamp: new Date("TIMESTAMP"),
 * //     ValueInIA: Number("long"),
 * //     ValueInStandard: Number("long"),
 * //     ValueInArchive: Number("long"),
 * //   },
 * //   PerformanceMode: "generalPurpose" || "maxIO", // required
 * //   Encrypted: true || false,
 * //   KmsKeyId: "STRING_VALUE",
 * //   ThroughputMode: "bursting" || "provisioned" || "elastic",
 * //   ProvisionedThroughputInMibps: Number("double"),
 * //   AvailabilityZoneName: "STRING_VALUE",
 * //   AvailabilityZoneId: "STRING_VALUE",
 * //   Tags: [ // Tags // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   FileSystemProtection: { // FileSystemProtectionDescription
 * //     ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFileSystemCommandInput - {@link CreateFileSystemCommandInput}
 * @returns {@link CreateFileSystemCommandOutput}
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemAlreadyExists} (client fault)
 *
 * Returned if the file system you are trying to create already exists, with the creation token you provided.
 *
 * @throws {@link FileSystemLimitExceeded} (client fault)
 *
 * Returned if the Amazon Web Services account has already created the maximum number of file systems allowed per account.
 *
 * @throws {@link InsufficientThroughputCapacity} (server fault)
 *
 * Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from Bursting Throughput to Provisioned Throughput mode. Try again later.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *
 * Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *
 * Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class CreateFileSystemCommand extends command<CreateFileSystemCommandInput, CreateFileSystemCommandOutput>(
  _ep0,
  _mw0,
  "CreateFileSystem",
  CreateFileSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFileSystemRequest;
      output: FileSystemDescription;
    };
    sdk: {
      input: CreateFileSystemCommandInput;
      output: CreateFileSystemCommandOutput;
    };
  };
}
