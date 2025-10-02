// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOpsItemRequest, DeleteOpsItemResponse } from "../models/models_0";
import { de_DeleteOpsItemCommand, se_DeleteOpsItemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandInput extends DeleteOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOpsItemCommand}.
 */
export interface DeleteOpsItemCommandOutput extends DeleteOpsItemResponse, __MetadataBearer {}

/**
 * <p>Delete an OpsItem. You must have permission in Identity and Access Management (IAM) to
 *    delete an OpsItem. </p>
 *          <important>
 *             <p>Note the following important information about this operation.</p>
 *             <ul>
 *                <li>
 *                   <p>Deleting an OpsItem is irreversible. You can't restore a deleted OpsItem.</p>
 *                </li>
 *                <li>
 *                   <p>This operation uses an <i>eventual consistency model</i>, which means the
 *       system can take a few minutes to complete this operation. If you delete an OpsItem and
 *       immediately call, for example, <a>GetOpsItem</a>, the deleted OpsItem might still
 *       appear in the response. </p>
 *                </li>
 *                <li>
 *                   <p>This operation is idempotent. The system doesn't throw an exception if you repeatedly
 *       call this operation for the same OpsItem. If the first call is successful, all additional calls
 *       return the same successful response as the first call.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support cross-account calls. A delegated administrator or
 *       management account can't delete OpsItems in other accounts, even if OpsCenter has been set up for
 *       cross-account administration. For more information about cross-account administration, see
 *        <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setting-up-cross-account.html">Setting up
 *        OpsCenter to centrally manage OpsItems across accounts</a> in the <i>Systems Manager User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteOpsItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpsItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpsItemCommandInput - {@link DeleteOpsItemCommandInput}
 * @returns {@link DeleteOpsItemCommandOutput}
 * @see {@link DeleteOpsItemCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteOpsItemCommand extends $Command
  .classBuilder<
    DeleteOpsItemCommandInput,
    DeleteOpsItemCommandOutput,
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
  .s("AmazonSSM", "DeleteOpsItem", {})
  .n("SSMClient", "DeleteOpsItemCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOpsItemCommand)
  .de(de_DeleteOpsItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOpsItemRequest;
      output: {};
    };
    sdk: {
      input: DeleteOpsItemCommandInput;
      output: DeleteOpsItemCommandOutput;
    };
  };
}
