// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import { DeleteTrafficPolicy } from "../schemas/schemas_6_Traffic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficPolicyCommand}.
 */
export interface DeleteTrafficPolicyCommandInput extends DeleteTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficPolicyCommand}.
 */
export interface DeleteTrafficPolicyCommandOutput extends DeleteTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Delete a traffic policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteTrafficPolicyCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteTrafficPolicyCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // DeleteTrafficPolicyRequest
 *   TrafficPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrafficPolicyCommandInput - {@link DeleteTrafficPolicyCommandInput}
 * @returns {@link DeleteTrafficPolicyCommandOutput}
 * @see {@link DeleteTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @example Delete TrafficPolicy
 * ```javascript
 * //
 * const input = {
 *   TrafficPolicyId: "tp-12345"
 * };
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTrafficPolicyCommand extends $Command
  .classBuilder<
    DeleteTrafficPolicyCommandInput,
    DeleteTrafficPolicyCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "DeleteTrafficPolicy", {})
  .n("MailManagerClient", "DeleteTrafficPolicyCommand")
  .sc(DeleteTrafficPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrafficPolicyCommandInput;
      output: DeleteTrafficPolicyCommandOutput;
    };
  };
}
