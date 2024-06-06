// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { DeregisterIdentityProviderRequest, DeregisterIdentityProviderResponse } from "../models/models_0";
import { de_DeregisterIdentityProviderCommand, se_DeregisterIdentityProviderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterIdentityProviderCommand}.
 */
export interface DeregisterIdentityProviderCommandInput extends DeregisterIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterIdentityProviderCommand}.
 */
export interface DeregisterIdentityProviderCommandOutput extends DeregisterIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Deregisters the identity provider from providing user-based subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, DeregisterIdentityProviderCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, DeregisterIdentityProviderCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // DeregisterIdentityProviderRequest
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *     },
 *   },
 *   Product: "STRING_VALUE", // required
 * };
 * const command = new DeregisterIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterIdentityProviderResponse
 * //   IdentityProviderSummary: { // IdentityProviderSummary
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //       },
 * //     },
 * //     Settings: { // Settings
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupId: "STRING_VALUE", // required
 * //     },
 * //     Product: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     FailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeregisterIdentityProviderCommandInput - {@link DeregisterIdentityProviderCommandInput}
 * @returns {@link DeregisterIdentityProviderCommandOutput}
 * @see {@link DeregisterIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeregisterIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 * @public
 */
export class DeregisterIdentityProviderCommand extends $Command
  .classBuilder<
    DeregisterIdentityProviderCommandInput,
    DeregisterIdentityProviderCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerUserSubscriptions", "DeregisterIdentityProvider", {})
  .n("LicenseManagerUserSubscriptionsClient", "DeregisterIdentityProviderCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterIdentityProviderCommand)
  .de(de_DeregisterIdentityProviderCommand)
  .build() {}
