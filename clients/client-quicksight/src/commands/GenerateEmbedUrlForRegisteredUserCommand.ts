// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GenerateEmbedUrlForRegisteredUserRequest,
  GenerateEmbedUrlForRegisteredUserResponse,
} from "../models/models_4";
import { GenerateEmbedUrlForRegisteredUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateEmbedUrlForRegisteredUserCommand}.
 */
export interface GenerateEmbedUrlForRegisteredUserCommandInput extends GenerateEmbedUrlForRegisteredUserRequest {}
/**
 * @public
 *
 * The output of {@link GenerateEmbedUrlForRegisteredUserCommand}.
 */
export interface GenerateEmbedUrlForRegisteredUserCommandOutput extends GenerateEmbedUrlForRegisteredUserResponse, __MetadataBearer {}

/**
 * Generates an embed URL that you can use to embed an Amazon Quick experience in your website. This action can be used for any type of user registered in an Amazon Quick account. Before you use this action, make sure that you have configured the relevant Amazon Quick resource and permissions.
 *
 * The following rules apply to the generated URL:
 *
 * - It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.
 * - The URL validity period should not be confused with the actual session lifetime that can be customized using the `SessionLifetimeInMinutes` parameter.
 *
 *   The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.
 * - You are charged only when the URL is used or there is interaction with Amazon Quick.
 *
 * For more information, see [Embedded Analytics](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html) in the *Amazon Quick User Guide*.
 *
 * For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the [Amazon Quick Developer Portal](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForRegisteredUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForRegisteredUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GenerateEmbedUrlForRegisteredUserRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SessionLifetimeInMinutes: Number("long"),
 *   UserArn: "STRING_VALUE", // required
 *   ExperienceConfiguration: { // RegisteredUserEmbeddingExperienceConfiguration
 *     Dashboard: { // RegisteredUserDashboardEmbeddingConfiguration
 *       InitialDashboardId: "STRING_VALUE", // required
 *       FeatureConfigurations: { // RegisteredUserDashboardFeatureConfigurations
 *         StatePersistence: { // StatePersistenceConfigurations
 *           Enabled: true || false, // required
 *         },
 *         Bookmarks: { // BookmarksConfigurations
 *           Enabled: true || false, // required
 *         },
 *         SharedView: { // SharedViewConfigurations
 *           Enabled: true || false, // required
 *         },
 *         AmazonQInQuickSight: { // AmazonQInQuickSightDashboardConfigurations
 *           ExecutiveSummary: { // ExecutiveSummaryConfigurations
 *             Enabled: true || false, // required
 *           },
 *         },
 *         Schedules: { // SchedulesConfigurations
 *           Enabled: true || false, // required
 *         },
 *         RecentSnapshots: { // RecentSnapshotsConfigurations
 *           Enabled: true || false, // required
 *         },
 *         ThresholdAlerts: { // ThresholdAlertsConfigurations
 *           Enabled: true || false, // required
 *         },
 *         DashboardCustomizationSummary: { // DashboardCustomizationSummaryConfigurations
 *           Enabled: true || false, // required
 *         },
 *       },
 *     },
 *     QuickSightConsole: { // RegisteredUserQuickSightConsoleEmbeddingConfiguration
 *       InitialPath: "STRING_VALUE",
 *       FeatureConfigurations: { // RegisteredUserConsoleFeatureConfigurations
 *         StatePersistence: {
 *           Enabled: true || false, // required
 *         },
 *         SharedView: {
 *           Enabled: true || false, // required
 *         },
 *         AmazonQInQuickSight: { // AmazonQInQuickSightConsoleConfigurations
 *           DataQnA: { // DataQnAConfigurations
 *             Enabled: true || false, // required
 *           },
 *           GenerativeAuthoring: { // GenerativeAuthoringConfigurations
 *             Enabled: true || false, // required
 *           },
 *           ExecutiveSummary: {
 *             Enabled: true || false, // required
 *           },
 *           DataStories: { // DataStoriesConfigurations
 *             Enabled: true || false, // required
 *           },
 *         },
 *         Schedules: {
 *           Enabled: true || false, // required
 *         },
 *         RecentSnapshots: {
 *           Enabled: true || false, // required
 *         },
 *         ThresholdAlerts: {
 *           Enabled: true || false, // required
 *         },
 *         DashboardCustomizationSummary: {
 *           Enabled: true || false, // required
 *         },
 *       },
 *     },
 *     QSearchBar: { // RegisteredUserQSearchBarEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE",
 *     },
 *     DashboardVisual: { // RegisteredUserDashboardVisualEmbeddingConfiguration
 *       InitialDashboardVisualId: { // DashboardVisualId
 *         DashboardId: "STRING_VALUE", // required
 *         SheetId: "STRING_VALUE", // required
 *         VisualId: "STRING_VALUE", // required
 *       },
 *     },
 *     GenerativeQnA: { // RegisteredUserGenerativeQnAEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE",
 *     },
 *     QuickChat: {},
 *   },
 *   AllowedDomains: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GenerateEmbedUrlForRegisteredUserCommand(input);
 * const response = await client.send(command);
 * // { // GenerateEmbedUrlForRegisteredUserResponse
 * //   EmbedUrl: "STRING_VALUE", // required
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateEmbedUrlForRegisteredUserCommandInput - {@link GenerateEmbedUrlForRegisteredUserCommandInput}
 * @returns {@link GenerateEmbedUrlForRegisteredUserCommandOutput}
 * @see {@link GenerateEmbedUrlForRegisteredUserCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForRegisteredUserCommandOutput} for command's `response` shape.
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
 * @throws {@link QuickSightUserNotFoundException} (client fault)
 *
 * The user with the provided name isn't found. This error can happen in any operation that requires finding a user based on a provided user name, such as `DeleteUser`, `DescribeUser`, and so on.
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
export class GenerateEmbedUrlForRegisteredUserCommand extends command<GenerateEmbedUrlForRegisteredUserCommandInput, GenerateEmbedUrlForRegisteredUserCommandOutput>(
  _ep0,
  _mw0,
  "GenerateEmbedUrlForRegisteredUser",
  GenerateEmbedUrlForRegisteredUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateEmbedUrlForRegisteredUserRequest;
      output: GenerateEmbedUrlForRegisteredUserResponse;
    };
    sdk: {
      input: GenerateEmbedUrlForRegisteredUserCommandInput;
      output: GenerateEmbedUrlForRegisteredUserCommandOutput;
    };
  };
}
