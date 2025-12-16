// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFileSystemRequest, FileSystemDescription } from "../models/models_0";
import { CreateFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new, empty file system. The operation requires a creation token in the
 *       request that Amazon EFS uses to ensure idempotent creation (calling the operation with same
 *       creation token has no effect). If a file system does not currently exist that is owned by the
 *       caller's Amazon Web Services account with the specified creation token, this operation does the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty file system. The file system will have an Amazon EFS assigned
 *           ID, and an initial lifecycle state <code>creating</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns with the description of the created file system.</p>
 *             </li>
 *          </ul>
 *          <p>Otherwise, this operation returns a <code>FileSystemAlreadyExists</code> error with the
 *       ID of the existing file system.</p>
 *          <note>
 *             <p>For basic use cases, you can use a randomly generated UUID for the creation
 *         token.</p>
 *          </note>
 *          <p>The idempotent operation allows you to retry a <code>CreateFileSystem</code> call without
 *       risk of creating an extra file system. This can happen when an initial call fails in a way
 *       that leaves it uncertain whether or not a file system was actually created. An example might
 *       be that a transport level timeout occurred or your connection was reset. As long as you use
 *       the same creation token, if the initial call had succeeded in creating a file system, the
 *       client can learn of its existence from the <code>FileSystemAlreadyExists</code> error.</p>
 *          <p>For more information, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/creating-using-create-fs.html#creating-using-create-fs-part1">Creating a file system</a>
 *      in the <i>Amazon EFS User Guide</i>.</p>
 *          <note>
 *             <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle
 *         state is still <code>creating</code>. You can check the file system creation status by
 *         calling the <a>DescribeFileSystems</a> operation, which among other things returns the file
 *         system state.</p>
 *          </note>
 *          <p>This operation accepts an optional <code>PerformanceMode</code> parameter that you choose
 *       for your file system. We recommend <code>generalPurpose</code>
 *             <code>PerformanceMode</code> for all file
 *       systems. The <code>maxIO</code> mode is a previous generation performance type that is designed for highly parallelized workloads that can tolerate higher latencies
 *           than the <code>generalPurpose</code> mode. <code>MaxIO</code> mode is not supported for One Zone file systems or
 *           file systems that use Elastic throughput.</p>
 *          <p>The <code>PerformanceMode</code> can't be changed after the file system has been
 *       created. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/performance.html#performancemodes.html">Amazon EFS performance
 *         modes</a>.</p>
 *          <p>You can set the throughput mode for the file system using the <code>ThroughputMode</code>
 *       parameter.</p>
 *          <p>After the file system is fully created, Amazon EFS sets its lifecycle state to
 *         <code>available</code>, at which point you can create one or more mount targets for the file
 *       system in your VPC. For more information, see <a>CreateMountTarget</a>. You mount
 *       your Amazon EFS file system on an EC2 instances in your VPC by using the mount
 *       target. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:CreateFileSystem</code> action. </p>
 *          <p>File systems can be tagged on creation. If tags are specified in the creation action, IAM
 *       performs additional authorization on the <code>elasticfilesystem:TagResource</code> action to
 *       verify if users have permissions to create tags. Therefore, you must grant explicit
 *       permissions to use the <code>elasticfilesystem:TagResource</code> action. For more
 *       information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html#supported-iam-actions-tagging.html">Granting permissions to tag resources during creation</a>.</p>
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
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemAlreadyExists} (client fault)
 *  <p>Returned if the file system you are trying to create already exists, with the
 *             creation token you provided.</p>
 *
 * @throws {@link FileSystemLimitExceeded} (client fault)
 *  <p>Returned if the Amazon Web Services account has already created the maximum number of file systems
 *             allowed per account.</p>
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
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *  <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *  <p>Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class CreateFileSystemCommand extends $Command
  .classBuilder<
    CreateFileSystemCommandInput,
    CreateFileSystemCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "CreateFileSystem", {})
  .n("EFSClient", "CreateFileSystemCommand")
  .sc(CreateFileSystem$)
  .build() {
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
