// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FileSystemProtectionDescription, UpdateFileSystemProtectionRequest } from "../models/models_0";
import { UpdateFileSystemProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFileSystemProtectionCommand}.
 */
export interface UpdateFileSystemProtectionCommandInput extends UpdateFileSystemProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFileSystemProtectionCommand}.
 */
export interface UpdateFileSystemProtectionCommandOutput extends FileSystemProtectionDescription, __MetadataBearer {}

/**
 * Updates protection on the file system.
 *
 * This operation requires permissions for the `elasticfilesystem:UpdateFileSystemProtection` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemProtectionCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemProtectionCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // UpdateFileSystemProtectionRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * };
 * const command = new UpdateFileSystemProtectionCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemProtectionDescription
 * //   ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * // };
 *
 * ```
 *
 * @param UpdateFileSystemProtectionCommandInput - {@link UpdateFileSystemProtectionCommandInput}
 * @returns {@link UpdateFileSystemProtectionCommandOutput}
 * @see {@link UpdateFileSystemProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemProtectionCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
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
 * @throws {@link ReplicationAlreadyExists} (client fault)
 *
 * Returned if the file system is already included in a replication configuration.>
 *
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *
 * Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.
 *
 * @throws {@link TooManyRequests} (client fault)
 *
 * Returned if you don’t wait at least 24 hours before either changing the throughput mode, or decreasing the Provisioned Throughput value.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class UpdateFileSystemProtectionCommand extends command<UpdateFileSystemProtectionCommandInput, UpdateFileSystemProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFileSystemProtection",
  UpdateFileSystemProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFileSystemProtectionRequest;
      output: FileSystemProtectionDescription;
    };
    sdk: {
      input: UpdateFileSystemProtectionCommandInput;
      output: UpdateFileSystemProtectionCommandOutput;
    };
  };
}
