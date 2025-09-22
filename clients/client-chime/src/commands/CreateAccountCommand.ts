// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccountRequest, CreateAccountResponse } from "../models/models_0";
import { CreateAccount } from "../schemas/schemas_6_User";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountCommand}.
 */
export interface CreateAccountCommandInput extends CreateAccountRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountCommand}.
 */
export interface CreateAccountCommandOutput extends CreateAccountResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Chime account under the administrator's AWS account. Only <code>Team</code>
 *             account types are currently supported for this action. For more information about different account types, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime
 *         Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // CreateAccountRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountResponse
 * //   Account: { // Account
 * //     AwsAccountId: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     AccountType: "Team" || "EnterpriseDirectory" || "EnterpriseLWA" || "EnterpriseOIDC",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     DefaultLicense: "Basic" || "Plus" || "Pro" || "ProTrial",
 * //     SupportedLicenses: [ // LicenseList
 * //       "Basic" || "Plus" || "Pro" || "ProTrial",
 * //     ],
 * //     AccountStatus: "Suspended" || "Active",
 * //     SigninDelegateGroups: [ // SigninDelegateGroupList
 * //       { // SigninDelegateGroup
 * //         GroupName: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccountCommandInput - {@link CreateAccountCommandInput}
 * @returns {@link CreateAccountCommandOutput}
 * @see {@link CreateAccountCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class CreateAccountCommand extends $Command
  .classBuilder<
    CreateAccountCommandInput,
    CreateAccountCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "CreateAccount", {})
  .n("ChimeClient", "CreateAccountCommand")
  .sc(CreateAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountRequest;
      output: CreateAccountResponse;
    };
    sdk: {
      input: CreateAccountCommandInput;
      output: CreateAccountCommandOutput;
    };
  };
}
