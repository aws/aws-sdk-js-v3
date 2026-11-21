// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAccessControlApplicationRequest, UpdateAccessControlApplicationResponse } from "../models/models_5";
import { UpdateAccessControlApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccessControlApplicationCommand}.
 */
export interface UpdateAccessControlApplicationCommandInput extends UpdateAccessControlApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessControlApplicationCommand}.
 */
export interface UpdateAccessControlApplicationCommandOutput extends UpdateAccessControlApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates an access control application. You can change its name, description, status, IdP settings such as the client ID and issuer URL, and its Quick Sight authentication settings such as redirect URIs.</p>
 *          <p>You can't change the <code>IdpAuthorizingType</code>, the <code>QuickAuthenticationType</code>, or the trusted token issuer after the application is created. To manage client secrets, use <code>CreateAccessControlApplicationSecret</code>, <code>UpdateAccessControlApplicationSecret</code>, and <code>DeleteAccessControlApplicationSecret</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateAccessControlApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateAccessControlApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateAccessControlApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   IdpAuthorizingConfiguration: { // IdpAuthorizingConfigUpdateInput
 *     IdpAuthorizingType: "EXTERNAL_IDP_PUBLIC_AUTH_CODE" || "EXTERNAL_IDP_CONFIDENTIAL_AUTH_CODE" || "QUICK_MANAGED_AUTH_CODE" || "IDC_AUTH_CODE", // required
 *     IdpAuthorizingConfigurationDetailInput: { // IdpAuthorizingConfigurationDetailUpdateInput Union: only one key present
 *       ExternalIdpPublicAuthCode: { // ExternalIdpPublicAuthCodeAuthorizingConfig
 *         ClientId: "STRING_VALUE", // required
 *         IssuerUrl: "STRING_VALUE", // required
 *       },
 *       ExternalIdpConfidentialAuthCode: { // ExternalIdpConfidentialAuthCodeAuthorizingConfigUpdateInput
 *         ClientId: "STRING_VALUE", // required
 *         IssuerUrl: "STRING_VALUE", // required
 *       },
 *     },
 *     IdcTrustedTokenIssuerConfiguration: { // IdcTrustedTokenIssuerConfig
 *       IdcTrustedTokenIssuerArn: "STRING_VALUE", // required
 *     },
 *   },
 *   QuickAuthenticationConfiguration: { // QuickAuthenticationConfigInput
 *     QuickAuthenticationType: "QUICK_MANAGED_PUBLIC_AUTH_CODE", // required
 *     QuickAuthenticationConfigurationDetailInput: { // QuickAuthenticationConfigurationDetailInput Union: only one key present
 *       QuickManagedPublicAuthCode: { // QuickManagedAuthCodeQuickAuthenticationConfigInput
 *         RedirectUris: [ // RedirectUriList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   Status: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateAccessControlApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessControlApplicationResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ApplicationId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   AccessControlApplicationStatus: "ENABLED" || "DISABLED", // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessControlApplicationCommandInput - {@link UpdateAccessControlApplicationCommandInput}
 * @returns {@link UpdateAccessControlApplicationCommandOutput}
 * @see {@link UpdateAccessControlApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessControlApplicationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateAccessControlApplicationCommand extends command<UpdateAccessControlApplicationCommandInput, UpdateAccessControlApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccessControlApplication",
  UpdateAccessControlApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccessControlApplicationRequest;
      output: UpdateAccessControlApplicationResponse;
    };
    sdk: {
      input: UpdateAccessControlApplicationCommandInput;
      output: UpdateAccessControlApplicationCommandOutput;
    };
  };
}
