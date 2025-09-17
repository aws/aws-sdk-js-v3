// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FileSystemDescription, UpdateFileSystemRequest } from "../models/models_0";
import { de_UpdateFileSystemCommand, se_UpdateFileSystemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {}

/**
 * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // UpdateFileSystemRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ThroughputMode: "bursting" || "provisioned" || "elastic",
 *   ProvisionedThroughputInMibps: Number("double"),
 * };
 * const command = new UpdateFileSystemCommand(input);
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
 * @param UpdateFileSystemCommandInput - {@link UpdateFileSystemCommandInput}
 * @returns {@link UpdateFileSystemCommandOutput}
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
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
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *  <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 *
 * @throws {@link TooManyRequests} (client fault)
 *  <p>Returned if you don’t wait at least 24 hours before either changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class UpdateFileSystemCommand extends $Command
  .classBuilder<
    UpdateFileSystemCommandInput,
    UpdateFileSystemCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "UpdateFileSystem", {})
  .n("EFSClient", "UpdateFileSystemCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFileSystemCommand)
  .de(de_UpdateFileSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFileSystemRequest;
      output: FileSystemDescription;
    };
    sdk: {
      input: UpdateFileSystemCommandInput;
      output: UpdateFileSystemCommandOutput;
    };
  };
}
