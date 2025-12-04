// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GenerateEmbedUrlForRegisteredUserRequest,
  GenerateEmbedUrlForRegisteredUserResponse,
} from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GenerateEmbedUrlForRegisteredUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GenerateEmbedUrlForRegisteredUserCommandOutput
  extends GenerateEmbedUrlForRegisteredUserResponse,
    __MetadataBearer {}

/**
 * <p>Generates an embed URL that you can use to embed an Amazon Quick Suite experience
 *             in your website. This action can be used for any type of user registered in an Amazon Quick Suite account. Before you use this action, make sure that you have
 *             configured the relevant Amazon Quick Suite resource and permissions.</p>
 *          <p>The following rules apply to the generated URL:</p>
 *          <ul>
 *             <li>
 *                <p>It contains a temporary bearer token. It is valid for 5 minutes after it is
 *                     generated. Once redeemed within this period, it cannot be re-used again.</p>
 *             </li>
 *             <li>
 *                <p>The URL validity period should not be confused with the actual session
 *                     lifetime that can be customized using the <code>
 *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html#QS-GenerateEmbedUrlForRegisteredUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
 *                   </code> parameter.</p>
 *                <p>The resulting user session is valid for 15 minutes (minimum) to 10 hours
 *                     (maximum). The default session duration is 10 hours.</p>
 *             </li>
 *             <li>
 *                <p>You are charged only when the URL is used or there is interaction with Amazon Quick Suite.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in
 *             the <i>Amazon Quick Suite User Guide</i>.</p>
 *          <p>For more information about the high-level steps for embedding and for an interactive
 *             demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon Quick Suite
 *                 Developer Portal</a>.</p>
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
 *         SharedView: { // SharedViewConfigurations
 *           Enabled: true || false, // required
 *         },
 *         Bookmarks: { // BookmarksConfigurations
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
 * @throws {@link QuickSightUserNotFoundException} (client fault)
 *  <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link SessionLifetimeInMinutesInvalidException} (client fault)
 *  <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *  <p>This error indicates that you are calling an embedding operation in Amazon Quick Sight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You
 * 		    can do this on the <b>Manage Quick Suite</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class GenerateEmbedUrlForRegisteredUserCommand extends $Command
  .classBuilder<
    GenerateEmbedUrlForRegisteredUserCommandInput,
    GenerateEmbedUrlForRegisteredUserCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "GenerateEmbedUrlForRegisteredUser", {})
  .n("QuickSightClient", "GenerateEmbedUrlForRegisteredUserCommand")
  .sc(GenerateEmbedUrlForRegisteredUser)
  .build() {
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
