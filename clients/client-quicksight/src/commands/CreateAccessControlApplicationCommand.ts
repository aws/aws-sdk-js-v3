// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessControlApplicationRequest, CreateAccessControlApplicationResponse } from "../models/models_2";
import { CreateAccessControlApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessControlApplicationCommand}.
 */
export interface CreateAccessControlApplicationCommandInput extends CreateAccessControlApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessControlApplicationCommand}.
 */
export interface CreateAccessControlApplicationCommandOutput extends CreateAccessControlApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates an access control application in an Amazon Quick Sight account. You use an access control application to define how an external client signs in to Quick Sight with OAuth 2.0.</p>
 *          <p>To connect a client to Quick Sight through an inbound connector, associate the access control application with the connector by using the <code>UpdateInboundConnectorApplicationAssociations</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateAccessControlApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateAccessControlApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateAccessControlApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Namespace: "STRING_VALUE", // required
 *   AuthenticationType: "OIDC", // required
 *   IdpAuthorizingConfiguration: { // IdpAuthorizingConfigInput
 *     IdpAuthorizingType: "EXTERNAL_IDP_PUBLIC_AUTH_CODE" || "EXTERNAL_IDP_CONFIDENTIAL_AUTH_CODE" || "QUICK_MANAGED_AUTH_CODE" || "IDC_AUTH_CODE", // required
 *     IdpAuthorizingConfigurationDetailInput: { // IdpAuthorizingConfigurationDetailInput Union: only one key present
 *       ExternalIdpPublicAuthCode: { // ExternalIdpPublicAuthCodeAuthorizingConfig
 *         ClientId: "STRING_VALUE", // required
 *         IssuerUrl: "STRING_VALUE", // required
 *       },
 *       ExternalIdpConfidentialAuthCode: { // ExternalIdpConfidentialAuthCodeAuthorizingConfigInput
 *         ClientId: "STRING_VALUE", // required
 *         IssuerUrl: "STRING_VALUE", // required
 *         ClientSecret: { // IdpClientSecretInput
 *           RegionalSecretManagerArns: { // RegionalSecretManagerArnMap // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessControlApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessControlApplicationResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ApplicationId: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   AccessControlApplicationStatus: "ENABLED" || "DISABLED", // required
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   TenantUrl: "STRING_VALUE", // required
 * //   IdcApplicationArn: "STRING_VALUE",
 * //   QuickAuthenticationConfiguration: { // QuickAuthenticationConfigCreateOutput
 * //     QuickAuthenticationType: "QUICK_MANAGED_PUBLIC_AUTH_CODE", // required
 * //     QuickAuthenticationConfigurationDetailCreateOutput: { // QuickAuthenticationConfigurationDetailCreateOutput Union: only one key present
 * //       QuickManagedPublicAuthCode: { // QuickManagedPublicAuthCodeQuickAuthenticationConfig
 * //         RedirectUris: [ // RedirectUriList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         ClientId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessControlApplicationCommandInput - {@link CreateAccessControlApplicationCommandInput}
 * @returns {@link CreateAccessControlApplicationCommandOutput}
 * @see {@link CreateAccessControlApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateAccessControlApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class CreateAccessControlApplicationCommand extends command<CreateAccessControlApplicationCommandInput, CreateAccessControlApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessControlApplication",
  CreateAccessControlApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessControlApplicationRequest;
      output: CreateAccessControlApplicationResponse;
    };
    sdk: {
      input: CreateAccessControlApplicationCommandInput;
      output: CreateAccessControlApplicationCommandOutput;
    };
  };
}
