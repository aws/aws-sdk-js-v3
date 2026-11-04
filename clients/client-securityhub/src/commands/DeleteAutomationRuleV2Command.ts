// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAutomationRuleV2Request, DeleteAutomationRuleV2Response } from "../models/models_2";
import { DeleteAutomationRuleV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutomationRuleV2Command}.
 */
export interface DeleteAutomationRuleV2CommandInput extends DeleteAutomationRuleV2Request {}
/**
 * @public
 *
 * The output of {@link DeleteAutomationRuleV2Command}.
 */
export interface DeleteAutomationRuleV2CommandOutput extends DeleteAutomationRuleV2Response, __MetadataBearer {}

/**
 * Deletes a V2 automation rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteAutomationRuleV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteAutomationRuleV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteAutomationRuleV2Request
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutomationRuleV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutomationRuleV2CommandInput - {@link DeleteAutomationRuleV2CommandInput}
 * @returns {@link DeleteAutomationRuleV2CommandOutput}
 * @see {@link DeleteAutomationRuleV2CommandInput} for command's `input` shape.
 * @see {@link DeleteAutomationRuleV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class DeleteAutomationRuleV2Command extends command<DeleteAutomationRuleV2CommandInput, DeleteAutomationRuleV2CommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutomationRuleV2",
  DeleteAutomationRuleV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomationRuleV2Request;
      output: {};
    };
    sdk: {
      input: DeleteAutomationRuleV2CommandInput;
      output: DeleteAutomationRuleV2CommandOutput;
    };
  };
}
