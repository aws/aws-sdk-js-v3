// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { ModifyDocumentPermission } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandInput extends ModifyDocumentPermissionRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDocumentPermissionCommand}.
 */
export interface ModifyDocumentPermissionCommandOutput extends ModifyDocumentPermissionResponse, __MetadataBearer {}

/**
 * <p>Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document
 *    privately, you must specify the Amazon Web Services user IDs for those people who can use the document. If
 *    you share a document publicly, you must specify <i>All</i> as the account
 *    ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ModifyDocumentPermissionRequest
 *   Name: "STRING_VALUE", // required
 *   PermissionType: "Share", // required
 *   AccountIdsToAdd: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   AccountIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   SharedDocumentVersion: "STRING_VALUE",
 * };
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyDocumentPermissionCommandInput - {@link ModifyDocumentPermissionCommandInput}
 * @returns {@link ModifyDocumentPermissionCommandOutput}
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentLimitExceeded} (client fault)
 *  <p>You can have at most 500 active SSM documents.</p>
 *
 * @throws {@link DocumentPermissionLimit} (client fault)
 *  <p>The document can't be shared with more Amazon Web Services accounts. You can specify a maximum of 20
 *    accounts per API operation to share a private document.</p>
 *          <p>By default, you can share a private document with a maximum of 1,000 accounts and publicly
 *    share up to five documents.</p>
 *          <p>If you need to increase the quota for privately or publicly shared Systems Manager documents, contact
 *    Amazon Web Services Support.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidPermissionType} (client fault)
 *  <p>The permission type isn't supported. <i>Share</i> is the only supported
 *    permission type.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ModifyDocumentPermissionCommand extends $Command
  .classBuilder<
    ModifyDocumentPermissionCommandInput,
    ModifyDocumentPermissionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ModifyDocumentPermission", {})
  .n("SSMClient", "ModifyDocumentPermissionCommand")
  .sc(ModifyDocumentPermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDocumentPermissionRequest;
      output: {};
    };
    sdk: {
      input: ModifyDocumentPermissionCommandInput;
      output: ModifyDocumentPermissionCommandOutput;
    };
  };
}
