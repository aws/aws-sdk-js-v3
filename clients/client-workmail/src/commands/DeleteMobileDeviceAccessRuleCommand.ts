// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMobileDeviceAccessRuleRequest, DeleteMobileDeviceAccessRuleResponse } from "../models/models_0";
import {
  de_DeleteMobileDeviceAccessRuleCommand,
  se_DeleteMobileDeviceAccessRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMobileDeviceAccessRuleCommand}.
 */
export interface DeleteMobileDeviceAccessRuleCommandInput extends DeleteMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMobileDeviceAccessRuleCommand}.
 */
export interface DeleteMobileDeviceAccessRuleCommandOutput
  extends DeleteMobileDeviceAccessRuleResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a mobile device access rule for the specified WorkMail organization.</p>
 *          <note>
 *             <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteMobileDeviceAccessRuleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   MobileDeviceAccessRuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMobileDeviceAccessRuleCommandInput - {@link DeleteMobileDeviceAccessRuleCommandInput}
 * @returns {@link DeleteMobileDeviceAccessRuleCommandOutput}
 * @see {@link DeleteMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
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
export class DeleteMobileDeviceAccessRuleCommand extends $Command
  .classBuilder<
    DeleteMobileDeviceAccessRuleCommandInput,
    DeleteMobileDeviceAccessRuleCommandOutput,
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
  .s("WorkMailService", "DeleteMobileDeviceAccessRule", {})
  .n("WorkMailClient", "DeleteMobileDeviceAccessRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMobileDeviceAccessRuleCommand)
  .de(de_DeleteMobileDeviceAccessRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMobileDeviceAccessRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteMobileDeviceAccessRuleCommandInput;
      output: DeleteMobileDeviceAccessRuleCommandOutput;
    };
  };
}
