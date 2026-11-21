// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccessControlApplicationsRequest, ListAccessControlApplicationsResponse } from "../models/models_5";
import { ListAccessControlApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccessControlApplicationsCommand}.
 */
export interface ListAccessControlApplicationsCommandInput extends ListAccessControlApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessControlApplicationsCommand}.
 */
export interface ListAccessControlApplicationsCommandOutput extends ListAccessControlApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists the access control applications in a Quick Sight account in the current Amazon Web Services Region. You can filter the results by namespace. Quick Sight paginates the results. To retrieve additional results, use the <code>NextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAccessControlApplicationsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAccessControlApplicationsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListAccessControlApplicationsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessControlApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessControlApplicationsResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   AccessControlApplications: [ // AccessControlApplicationSummaryList // required
 * //     { // AccessControlApplicationSummary
 * //       ApplicationId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Namespace: "STRING_VALUE", // required
 * //       AuthenticationType: "OIDC", // required
 * //       Status: "ENABLED" || "DISABLED", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       TenantUrl: "STRING_VALUE", // required
 * //       IdpAuthorizingConfiguration: { // IdpAuthorizingConfigSummary
 * //         IdpAuthorizingType: "EXTERNAL_IDP_PUBLIC_AUTH_CODE" || "EXTERNAL_IDP_CONFIDENTIAL_AUTH_CODE" || "QUICK_MANAGED_AUTH_CODE" || "IDC_AUTH_CODE", // required
 * //         IdpAuthorizingConfigurationSummaryDetail: { // IdpAuthorizingConfigurationSummaryDetail Union: only one key present
 * //           ExternalIdpPublicAuthCode: { // ExternalIdpPublicAuthCodeAuthorizingConfig
 * //             ClientId: "STRING_VALUE", // required
 * //             IssuerUrl: "STRING_VALUE", // required
 * //           },
 * //           ExternalIdpConfidentialAuthCode: { // ExternalIdpConfidentialAuthCodeAuthorizingConfigSummary
 * //             ClientId: "STRING_VALUE", // required
 * //             IssuerUrl: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         IdcTrustedTokenIssuerConfiguration: { // IdcTrustedTokenIssuerConfig
 * //           IdcTrustedTokenIssuerArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       QuickAuthenticationConfiguration: { // QuickAuthenticationConfig
 * //         QuickAuthenticationType: "QUICK_MANAGED_PUBLIC_AUTH_CODE", // required
 * //         QuickAuthenticationConfigurationDetail: { // QuickAuthenticationConfigurationDetail Union: only one key present
 * //           QuickManagedPublicAuthCode: { // QuickManagedPublicAuthCodeQuickAuthenticationConfig
 * //             RedirectUris: [ // RedirectUriList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             ClientId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessControlApplicationsCommandInput - {@link ListAccessControlApplicationsCommandInput}
 * @returns {@link ListAccessControlApplicationsCommandOutput}
 * @see {@link ListAccessControlApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListAccessControlApplicationsCommandOutput} for command's `response` shape.
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
export class ListAccessControlApplicationsCommand extends command<ListAccessControlApplicationsCommandInput, ListAccessControlApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccessControlApplications",
  ListAccessControlApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessControlApplicationsRequest;
      output: ListAccessControlApplicationsResponse;
    };
    sdk: {
      input: ListAccessControlApplicationsCommandInput;
      output: ListAccessControlApplicationsCommandOutput;
    };
  };
}
