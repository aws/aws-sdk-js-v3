// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationConfigurationRequest } from "../models/models_0";
import { DeleteReplicationConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a replication configuration. Deleting a replication configuration ends the
 *       replication process. After a replication configuration is deleted, the destination file system
 *       becomes <code>Writeable</code> and its replication overwrite protection is re-enabled. For
 *       more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/delete-replications.html">Delete a replication configuration</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DeleteReplicationConfiguration</code> action. </p>
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
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ReplicationNotFound} (client fault)
 *  <p>Returned if the specified file system does not have a replication
 *             configuration.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class DeleteReplicationConfigurationCommand extends $Command
  .classBuilder<
    DeleteReplicationConfigurationCommandInput,
    DeleteReplicationConfigurationCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "DeleteReplicationConfiguration", {})
  .n("EFSClient", "DeleteReplicationConfigurationCommand")
  .sc(DeleteReplicationConfiguration)
  .build() {
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
