// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import { DeleteTrafficPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Delete a traffic policy resource.
 *
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
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when a requested resource is not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
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
export class DeleteTrafficPolicyCommand extends command<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrafficPolicy",
  DeleteTrafficPolicy$
) {
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
