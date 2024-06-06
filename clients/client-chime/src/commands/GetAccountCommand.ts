// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountRequest, GetAccountResponse } from "../models/models_0";
import { de_GetAccountCommand, se_GetAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCommand}.
 */
export interface GetAccountCommandInput extends GetAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountCommand}.
 */
export interface GetAccountCommandOutput extends GetAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified Amazon Chime account, such as account type and supported
 *             licenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // GetAccountRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountResponse
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
 * @param GetAccountCommandInput - {@link GetAccountCommandInput}
 * @returns {@link GetAccountCommandOutput}
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetAccountCommand extends $Command
  .classBuilder<
    GetAccountCommandInput,
    GetAccountCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "GetAccount", {})
  .n("ChimeClient", "GetAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountCommand)
  .de(de_GetAccountCommand)
  .build() {}
