// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteActionTargetRequest, DeleteActionTargetResponse } from "../models/models_2";
import { DeleteActionTarget } from "../schemas/schemas_59_DeleteActionTarget";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteActionTargetCommand}.
 */
export interface DeleteActionTargetCommandInput extends DeleteActionTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActionTargetCommand}.
 */
export interface DeleteActionTargetCommandOutput extends DeleteActionTargetResponse, __MetadataBearer {}

/**
 * <p>Deletes a custom action target from Security Hub.</p>
 *          <p>Deleting a custom action target does not affect any findings or insights that were
 *          already sent to Amazon CloudWatch Events using the custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteActionTargetCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteActionTargetCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteActionTargetRequest
 *   ActionTargetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteActionTargetResponse
 * //   ActionTargetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteActionTargetCommandInput - {@link DeleteActionTargetCommandInput}
 * @returns {@link DeleteActionTargetCommandOutput}
 * @see {@link DeleteActionTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteActionTargetCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To delete a custom action target
 * ```javascript
 * // The following example deletes a custom action target that triggers target actions in Amazon CloudWatch Events. Deleting a custom action target doesn't affect findings or insights that were already sent to CloudWatch Events based on the custom action.
 * const input = {
 *   ActionTargetArn: "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * };
 * const command = new DeleteActionTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ActionTargetArn: "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteActionTargetCommand extends $Command
  .classBuilder<
    DeleteActionTargetCommandInput,
    DeleteActionTargetCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DeleteActionTarget", {})
  .n("SecurityHubClient", "DeleteActionTargetCommand")
  .sc(DeleteActionTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteActionTargetRequest;
      output: DeleteActionTargetResponse;
    };
    sdk: {
      input: DeleteActionTargetCommandInput;
      output: DeleteActionTargetCommandOutput;
    };
  };
}
