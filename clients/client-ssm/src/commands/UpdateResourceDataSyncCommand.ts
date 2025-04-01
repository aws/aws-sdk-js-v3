// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2";
import { de_UpdateResourceDataSyncCommand, se_UpdateResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceDataSyncCommand}.
 */
export interface UpdateResourceDataSyncCommandInput extends UpdateResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceDataSyncCommand}.
 */
export interface UpdateResourceDataSyncCommandOutput extends UpdateResourceDataSyncResult, __MetadataBearer {}

/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't
 *    edit that sync later and choose the <code>Include all accounts from my Organizations
 *     configuration</code> option. Instead, you must delete the first resource data sync, and create a
 *    new one.</p>
 *          <note>
 *             <p>This API operation only supports a resource data sync that was created with a
 *     SyncFromSource <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   SyncType: "STRING_VALUE", // required
 *   SyncSource: { // ResourceDataSyncSource
 *     SourceType: "STRING_VALUE", // required
 *     AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 *       OrganizationSourceType: "STRING_VALUE", // required
 *       OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 *         { // ResourceDataSyncOrganizationalUnit
 *           OrganizationalUnitId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     SourceRegions: [ // ResourceDataSyncSourceRegionList // required
 *       "STRING_VALUE",
 *     ],
 *     IncludeFutureRegions: true || false,
 *     EnableAllOpsDataSources: true || false,
 *   },
 * };
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceDataSyncCommandInput - {@link UpdateResourceDataSyncCommandInput}
 * @returns {@link UpdateResourceDataSyncCommandOutput}
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncConflictException} (client fault)
 *  <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
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
export class UpdateResourceDataSyncCommand extends $Command
  .classBuilder<
    UpdateResourceDataSyncCommandInput,
    UpdateResourceDataSyncCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "UpdateResourceDataSync", {})
  .n("SSMClient", "UpdateResourceDataSyncCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResourceDataSyncCommand)
  .de(de_UpdateResourceDataSyncCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceDataSyncRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceDataSyncCommandInput;
      output: UpdateResourceDataSyncCommandOutput;
    };
  };
}
