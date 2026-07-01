// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSafetyRuleRequest, DeleteSafetyRuleResponse } from "../models/models_0";
import { DeleteSafetyRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSafetyRuleCommand}.
 */
export interface DeleteSafetyRuleCommandInput extends DeleteSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSafetyRuleCommand}.
 */
export interface DeleteSafetyRuleCommandOutput extends DeleteSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes a safety rule.</p>/&gt;
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DeleteSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DeleteSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DeleteSafetyRuleRequest
 *   SafetyRuleArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSafetyRuleCommandInput - {@link DeleteSafetyRuleCommandInput}
 * @returns {@link DeleteSafetyRuleCommandOutput}
 * @see {@link DeleteSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 *
 * @public
 */
export class DeleteSafetyRuleCommand extends command<DeleteSafetyRuleCommandInput, DeleteSafetyRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSafetyRule",
  DeleteSafetyRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSafetyRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteSafetyRuleCommandInput;
      output: DeleteSafetyRuleCommandOutput;
    };
  };
}
