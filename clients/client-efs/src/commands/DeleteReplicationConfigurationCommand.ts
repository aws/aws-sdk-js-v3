// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReplicationConfigurationRequest } from "../models/models_0";
import { DeleteReplicationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReplicationConfigurationCommand}.
 */
export interface DeleteReplicationConfigurationCommandInput extends DeleteReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationConfigurationCommand}.
 */
export interface DeleteReplicationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a replication configuration. Deleting a replication configuration ends the replication process. After a replication configuration is deleted, the destination file system becomes `Writeable` and its replication overwrite protection is re-enabled. For more information, see [Delete a replication configuration](https://docs.aws.amazon.com/efs/latest/ug/delete-replications.html).
 *
 * This operation requires permissions for the `elasticfilesystem:DeleteReplicationConfiguration` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteReplicationConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteReplicationConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DeleteReplicationConfigurationRequest
 *   SourceFileSystemId: "STRING_VALUE", // required
 *   DeletionMode: "ALL_CONFIGURATIONS" || "LOCAL_CONFIGURATION_ONLY",
 * };
 * const command = new DeleteReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationConfigurationCommandInput - {@link DeleteReplicationConfigurationCommandInput}
 * @returns {@link DeleteReplicationConfigurationCommandOutput}
 * @see {@link DeleteReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link ReplicationNotFound} (client fault)
 *
 * Returned if the specified file system does not have a replication configuration.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class DeleteReplicationConfigurationCommand extends command<DeleteReplicationConfigurationCommandInput, DeleteReplicationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReplicationConfiguration",
  DeleteReplicationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteReplicationConfigurationCommandInput;
      output: DeleteReplicationConfigurationCommandOutput;
    };
  };
}
