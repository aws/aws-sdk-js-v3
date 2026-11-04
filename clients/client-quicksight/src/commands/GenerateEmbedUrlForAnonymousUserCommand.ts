// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GenerateEmbedUrlForAnonymousUserRequest,
  GenerateEmbedUrlForAnonymousUserResponse,
} from "../models/models_4";
import { GenerateEmbedUrlForAnonymousUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateEmbedUrlForAnonymousUserCommand}.
 */
export interface GenerateEmbedUrlForAnonymousUserCommandInput extends GenerateEmbedUrlForAnonymousUserRequest {}
/**
 * @public
 *
 * The output of {@link GenerateEmbedUrlForAnonymousUserCommand}.
 */
export interface GenerateEmbedUrlForAnonymousUserCommandOutput extends GenerateEmbedUrlForAnonymousUserResponse, __MetadataBearer {}

/**
 * Generates an embed URL that you can use to embed an Amazon Quick dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions.
 *
 * The following rules apply to the generated URL:
 *
 * - It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.
 * - The URL validity period should not be confused with the actual session lifetime that can be customized using the `SessionLifetimeInMinutes` parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.
 * - You are charged only when the URL is used or there is interaction with Amazon Quick.
 *
 * For more information, see [Embedded Analytics](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html) in the *Amazon Quick User Guide*.
 *
 * For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the [Amazon Quick Developer Portal](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GenerateEmbedUrlForAnonymousUserRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SessionLifetimeInMinutes: Number("long"),
 *   Namespace: "STRING_VALUE", // required
 *   SessionTags: [ // SessionTagList
 *     { // SessionTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AuthorizedResourceArns: [ // ArnList // required
 *     "STRING_VALUE",
 *   ],
 *   ExperienceConfiguration: { // AnonymousUserEmbeddingExperienceConfiguration
 *     Dashboard: { // AnonymousUserDashboardEmbeddingConfiguration
 *       InitialDashboardId: "STRING_VALUE", // required
 *       EnabledFeatures: [ // AnonymousUserDashboardEmbeddingConfigurationEnabledFeatures
 *         "SHARED_VIEW",
 *       ],
 *       DisabledFeatures: [ // AnonymousUserDashboardEmbeddingConfigurationDisabledFeatures
 *         "SHARED_VIEW",
 *       ],
 *       FeatureConfigurations: { // AnonymousUserDashboardFeatureConfigurations
 *         SharedView: { // SharedViewConfigurations
 *           Enabled: true || false, // required
 *         },
 *       },
 *     },
 *     DashboardVisual: { // AnonymousUserDashboardVisualEmbeddingConfiguration
 *       InitialDashboardVisualId: { // DashboardVisualId
 *         DashboardId: "STRING_VALUE", // required
 *         SheetId: "STRING_VALUE", // required
 *         VisualId: "STRING_VALUE", // required
 *       },
 *     },
 *     QSearchBar: { // AnonymousUserQSearchBarEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE", // required
 *     },
 *     GenerativeQnA: { // AnonymousUserGenerativeQnAEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE", // required
 *     },
 *   },
 *   AllowedDomains: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GenerateEmbedUrlForAnonymousUserCommand(input);
 * const response = await client.send(command);
 * // { // GenerateEmbedUrlForAnonymousUserResponse
 * //   EmbedUrl: "STRING_VALUE", // required
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   AnonymousUserArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateEmbedUrlForAnonymousUserCommandInput - {@link GenerateEmbedUrlForAnonymousUserCommandInput}
 * @returns {@link GenerateEmbedUrlForAnonymousUserCommandOutput}
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link SessionLifetimeInMinutesInvalidException} (client fault)
 *
 * The number of minutes specified for the lifetime of a session isn't valid. The session lifetime must be 15-600 minutes.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *
 * This error indicates that you are calling an embedding operation in Amazon Quick Sight without the required pricing plan on your Amazon Web Services account. Before you can use embedding for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You can do this on the **Manage Quick Suite** page.
 *
 * After capacity pricing is added, you can use the `GetDashboardEmbedUrl` API operation with the `--identity-type ANONYMOUS` option.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class GenerateEmbedUrlForAnonymousUserCommand extends command<GenerateEmbedUrlForAnonymousUserCommandInput, GenerateEmbedUrlForAnonymousUserCommandOutput>(
  _ep0,
  _mw0,
  "GenerateEmbedUrlForAnonymousUser",
  GenerateEmbedUrlForAnonymousUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateEmbedUrlForAnonymousUserRequest;
      output: GenerateEmbedUrlForAnonymousUserResponse;
    };
    sdk: {
      input: GenerateEmbedUrlForAnonymousUserCommandInput;
      output: GenerateEmbedUrlForAnonymousUserCommandOutput;
    };
  };
}
