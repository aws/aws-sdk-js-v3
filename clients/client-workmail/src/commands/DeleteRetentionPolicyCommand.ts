// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRetentionPolicyRequest, DeleteRetentionPolicyResponse } from "../models/models_0";
import { de_DeleteRetentionPolicyCommand, se_DeleteRetentionPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandInput extends DeleteRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandOutput extends DeleteRetentionPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified retention policy from the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // DeleteRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetentionPolicyCommandInput - {@link DeleteRetentionPolicyCommandInput}
 * @returns {@link DeleteRetentionPolicyCommandOutput}
 * @see {@link DeleteRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeleteRetentionPolicyCommand extends $Command
  .classBuilder<
    DeleteRetentionPolicyCommandInput,
    DeleteRetentionPolicyCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DeleteRetentionPolicy", {})
  .n("WorkMailClient", "DeleteRetentionPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRetentionPolicyCommand)
  .de(de_DeleteRetentionPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetentionPolicyCommandInput;
      output: DeleteRetentionPolicyCommandOutput;
    };
  };
}
