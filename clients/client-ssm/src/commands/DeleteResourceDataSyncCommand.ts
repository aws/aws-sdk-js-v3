// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { DeleteResourceDataSync } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Deletes a resource data sync configuration. After the configuration is deleted, changes to
 *    data on managed nodes are no longer synced to or from the target. Deleting a sync configuration
 *    doesn't delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   SyncType: "STRING_VALUE",
 * };
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceDataSyncCommandInput - {@link DeleteResourceDataSyncCommandInput}
 * @returns {@link DeleteResourceDataSyncCommandOutput}
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteResourceDataSyncCommand extends $Command
  .classBuilder<
    DeleteResourceDataSyncCommandInput,
    DeleteResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeleteResourceDataSync", {})
  .n("SSMClient", "DeleteResourceDataSyncCommand")
  .sc(DeleteResourceDataSync)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceDataSyncRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceDataSyncCommandInput;
      output: DeleteResourceDataSyncCommandOutput;
    };
  };
}
