// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableOrganizationAdminAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the Detective administrator account in the current Region. Deletes the
 *          organization behavior graph.</p>
 *          <p>Can only be called by the organization management account.</p>
 *          <p>Removing the Detective administrator account does not affect the delegated
 *          administrator account for Detective in Organizations.</p>
 *          <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = {};
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOrganizationAdminAccountCommandInput - {@link DisableOrganizationAdminAccountCommandInput}
 * @returns {@link DisableOrganizationAdminAccountCommandOutput}
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class DisableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    DisableOrganizationAdminAccountCommandInput,
    DisableOrganizationAdminAccountCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "DisableOrganizationAdminAccount", {})
  .n("DetectiveClient", "DisableOrganizationAdminAccountCommand")
  .sc(DisableOrganizationAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableOrganizationAdminAccountCommandInput;
      output: DisableOrganizationAdminAccountCommandOutput;
    };
  };
}
