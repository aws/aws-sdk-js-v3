// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePersonalAccessTokenRequest, DeletePersonalAccessTokenResponse } from "../models/models_0";
import { DeletePersonalAccessToken } from "../schemas/schemas_21_PersonalAccess";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePersonalAccessTokenCommand}.
 */
export interface DeletePersonalAccessTokenCommandInput extends DeletePersonalAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link DeletePersonalAccessTokenCommand}.
 */
export interface DeletePersonalAccessTokenCommandOutput extends DeletePersonalAccessTokenResponse, __MetadataBearer {}

/**
 * <p>
 *          Deletes the Personal Access Token from the provided WorkMail Organization.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeletePersonalAccessTokenCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeletePersonalAccessTokenCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeletePersonalAccessTokenRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   PersonalAccessTokenId: "STRING_VALUE", // required
 * };
 * const command = new DeletePersonalAccessTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePersonalAccessTokenCommandInput - {@link DeletePersonalAccessTokenCommandInput}
 * @returns {@link DeletePersonalAccessTokenCommandOutput}
 * @see {@link DeletePersonalAccessTokenCommandInput} for command's `input` shape.
 * @see {@link DeletePersonalAccessTokenCommandOutput} for command's `response` shape.
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
export class DeletePersonalAccessTokenCommand extends $Command
  .classBuilder<
    DeletePersonalAccessTokenCommandInput,
    DeletePersonalAccessTokenCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeletePersonalAccessToken", {})
  .n("WorkMailClient", "DeletePersonalAccessTokenCommand")
  .sc(DeletePersonalAccessToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePersonalAccessTokenRequest;
      output: {};
    };
    sdk: {
      input: DeletePersonalAccessTokenCommandInput;
      output: DeletePersonalAccessTokenCommandOutput;
    };
  };
}
