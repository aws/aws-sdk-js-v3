// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccountRequest, CreateAccountResponse } from "../models/models_0";
import { CreateAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon Chime account under the administrator's AWS account. Only `Team` account types are currently supported for this action. For more information about different account types, see [Managing Your Amazon Chime Accounts](https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html) in the *Amazon Chime Administration Guide*.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class CreateAccountCommand extends command<CreateAccountCommandInput, CreateAccountCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccount",
  CreateAccount$
) {
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
