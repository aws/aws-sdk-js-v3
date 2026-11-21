// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAccessControlApplicationRequest,
  DescribeAccessControlApplicationResponse,
} from "../models/models_4";
import { DescribeAccessControlApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccessControlApplicationCommand}.
 */
export interface DescribeAccessControlApplicationCommandInput extends DescribeAccessControlApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessControlApplicationCommand}.
 */
export interface DescribeAccessControlApplicationCommandOutput extends DescribeAccessControlApplicationResponse, __MetadataBearer {}

/**
 * <p>Describes an access control application. The response includes client secret metadata, but never client secret values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeAccessControlApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeAccessControlApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeAccessControlApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessControlApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessControlApplicationResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   AccessControlApplication: { // AccessControlApplication
 * //     ApplicationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Namespace: "STRING_VALUE", // required
 * //     AuthenticationType: "OIDC", // required
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     TenantUrl: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     IdcApplicationArn: "STRING_VALUE",
 * //     IdpAuthorizingConfiguration: { // IdpAuthorizingConfig
 * //       IdpAuthorizingType: "EXTERNAL_IDP_PUBLIC_AUTH_CODE" || "EXTERNAL_IDP_CONFIDENTIAL_AUTH_CODE" || "QUICK_MANAGED_AUTH_CODE" || "IDC_AUTH_CODE", // required
 * //       IdpAuthorizingConfigurationDetail: { // IdpAuthorizingConfigurationDetail Union: only one key present
 * //         ExternalIdpPublicAuthCode: { // ExternalIdpPublicAuthCodeAuthorizingConfig
 * //           ClientId: "STRING_VALUE", // required
 * //           IssuerUrl: "STRING_VALUE", // required
 * //         },
 * //         ExternalIdpConfidentialAuthCode: { // ExternalIdpConfidentialAuthCodeAuthorizingConfig
 * //           ClientId: "STRING_VALUE", // required
 * //           IssuerUrl: "STRING_VALUE", // required
 * //           ClientSecrets: [ // ExternalIdpConfidentialClientSecretList
 * //             { // ExternalIdpConfidentialClientSecret
 * //               ClientSecretId: "STRING_VALUE", // required
 * //               RegionalSecretManagerArns: { // RegionalSecretManagerArnMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               CreatedAt: new Date("TIMESTAMP"), // required
 * //               UpdatedAt: new Date("TIMESTAMP"),
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       IdcTrustedTokenIssuerConfiguration: { // IdcTrustedTokenIssuerConfig
 * //         IdcTrustedTokenIssuerArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     QuickAuthenticationConfiguration: { // QuickAuthenticationConfig
 * //       QuickAuthenticationType: "QUICK_MANAGED_PUBLIC_AUTH_CODE", // required
 * //       QuickAuthenticationConfigurationDetail: { // QuickAuthenticationConfigurationDetail Union: only one key present
 * //         QuickManagedPublicAuthCode: { // QuickManagedPublicAuthCodeQuickAuthenticationConfig
 * //           RedirectUris: [ // RedirectUriList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           ClientId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccessControlApplicationCommandInput - {@link DescribeAccessControlApplicationCommandInput}
 * @returns {@link DescribeAccessControlApplicationCommandOutput}
 * @see {@link DescribeAccessControlApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessControlApplicationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class DescribeAccessControlApplicationCommand extends command<DescribeAccessControlApplicationCommandInput, DescribeAccessControlApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccessControlApplication",
  DescribeAccessControlApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccessControlApplicationRequest;
      output: DescribeAccessControlApplicationResponse;
    };
    sdk: {
      input: DescribeAccessControlApplicationCommandInput;
      output: DescribeAccessControlApplicationCommandOutput;
    };
  };
}
