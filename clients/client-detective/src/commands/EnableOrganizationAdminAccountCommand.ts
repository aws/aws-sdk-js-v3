// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableOrganizationAdminAccountRequest } from "../models/models_0";
import { EnableOrganizationAdminAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOrganizationAdminAccountCommand}.
 */
export interface EnableOrganizationAdminAccountCommandInput extends EnableOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link EnableOrganizationAdminAccountCommand}.
 */
export interface EnableOrganizationAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Designates the Detective administrator account for the organization in the
 *          current Region.</p>
 *          <p>If the account does not have Detective enabled, then enables Detective
 *          for that account and creates a new behavior graph.</p>
 *          <p>Can only be called by the organization management account.</p>
 *          <p>If the organization has a delegated administrator account in Organizations, then the
 *             Detective administrator account must be either the delegated administrator
 *          account or the organization management account.</p>
 *          <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other
 *          than the organization management account, Detective calls Organizations to
 *          make that account the delegated administrator account for Detective. The
 *          organization management account cannot be the delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // EnableOrganizationAdminAccountRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableOrganizationAdminAccountCommandInput - {@link EnableOrganizationAdminAccountCommandInput}
 * @returns {@link EnableOrganizationAdminAccountCommandOutput}
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
export class EnableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    EnableOrganizationAdminAccountCommandInput,
    EnableOrganizationAdminAccountCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "EnableOrganizationAdminAccount", {})
  .n("DetectiveClient", "EnableOrganizationAdminAccountCommand")
  .sc(EnableOrganizationAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableOrganizationAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: EnableOrganizationAdminAccountCommandInput;
      output: EnableOrganizationAdminAccountCommandOutput;
    };
  };
}
