// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDashboardSnapshotJobRequest, StartDashboardSnapshotJobResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { StartDashboardSnapshotJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDashboardSnapshotJobCommand}.
 */
export interface StartDashboardSnapshotJobCommandInput extends StartDashboardSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDashboardSnapshotJobCommand}.
 */
export interface StartDashboardSnapshotJobCommandOutput extends StartDashboardSnapshotJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call.</p>
 *          <ul>
 *             <li>
 *                <p>1 Paginated PDF</p>
 *             </li>
 *             <li>
 *                <p>1 Excel workbook that includes up to 5 table or pivot table visuals</p>
 *             </li>
 *             <li>
 *                <p>5 CSVs from table or pivot table visuals</p>
 *             </li>
 *          </ul>
 *          <p>The status of a submitted job can be polled with the <code>DescribeDashboardSnapshotJob</code> API. When you call the  <code>DescribeDashboardSnapshotJob</code> API, check the <code>JobStatus</code> field in the response. Once the job reaches a <code>COMPLETED</code> or <code>FAILED</code> status, use the <code>DescribeDashboardSnapshotJobResult</code> API to obtain the URLs for the generated files. If the job fails, the <code>DescribeDashboardSnapshotJobResult</code> API returns detailed information about the error that occurred.</p>
 *          <p>
 *             <b>StartDashboardSnapshotJob API throttling</b>
 *          </p>
 *          <p>Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the <code>StartDashboardSnapshotJob</code>. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users.</p>
 *          <p>
 *             <b>Common throttling scenarios</b>
 *          </p>
 *          <p>The following list provides information about the most commin throttling scenarios that can occur.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>A large number of <code>SnapshotExport</code> API jobs are running simultaneously on an Amazon Web Services account.</b> When a new <code>StartDashboardSnapshotJob</code> is created and there are already 12 jobs with the <code>RUNNING</code> status, the new job request fails and returns a <code>LimitExceededException</code> error. Wait for a current job to comlpete before you resubmit the new job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>A large number of API requests are submitted on an Amazon Web Services account.</b> When a user makes more than 10 API calls to the Quick Sight API in one second, a <code>ThrottlingException</code> is returned.</p>
 *             </li>
 *          </ul>
 *          <p>If your use case requires a higher throttling limit, contact your account admin or <a href="http://aws.amazon.com/contact-us/">Amazon Web ServicesSupport</a> to explore options to tailor a more optimal expereince for your account.</p>
 *          <p>
 *             <b>Best practices to handle throttling</b>
 *          </p>
 *          <p>If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example <code>(12 minutes * 9 = 108 minutes)</code>. Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline.</p>
 *          <p>The time that it takes to process a job can be impacted by the following factors:</p>
 *          <ul>
 *             <li>
 *                <p>The dataset type (Direct Query or SPICE).</p>
 *             </li>
 *             <li>
 *                <p>The size of the dataset.</p>
 *             </li>
 *             <li>
 *                <p>The complexity of the calculated fields that are used in the dashboard.</p>
 *             </li>
 *             <li>
 *                <p>The number of visuals that are on a sheet.</p>
 *             </li>
 *             <li>
 *                <p>The types of visuals that are on the sheet.</p>
 *             </li>
 *             <li>
 *                <p>The number of formats and snapshots that are requested in the job configuration.</p>
 *             </li>
 *             <li>
 *                <p>The size of the generated snapshots.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Registered user support</b>
 *          </p>
 *          <p>You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html">identity-enhanced IAM role session credentials</a>. This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings.</p>
 *          <p>To generate snapshots for registered Quick Sight users, you need to:</p>
 *          <ul>
 *             <li>
 *                <p>Obtain identity-enhanced IAM role session credentials from AWS Security Token Service (STS).</p>
 *             </li>
 *             <li>
 *                <p>Use these credentials to call the Snapshot Job APIs.</p>
 *             </li>
 *          </ul>
 *          <p>Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user).</p>
 *          <p>If your Quick Sight users are backed by <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Identity Center</a>, then you need to set up a <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/setuptrustedtokenissuer.html">trusted token issuer</a>. Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following:</p>
 *          <ul>
 *             <li>
 *                <p>Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back.</p>
 *             </li>
 *             <li>
 *                <p>Use the OIDC API, <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateTokenWithIAM.html">CreateTokenWithIAM</a>, to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token.</p>
 *             </li>
 *             <li>
 *                <p>Call STS AssumeRole API as you normally would, but provide an extra <code>ProvidedContexts</code> parameter in the API request. The list of contexts must have a single trusted context assertion. The <code>ProviderArn</code> should be <code>arn:aws:iam::aws:contextProvider/IdentityCenter</code> while <code>ContextAssertion</code> will be the identity token you received in response from CreateTokenWithIAM</p>
 *             </li>
 *          </ul>
 *          <p>For more details, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html">IdC documentation on Identity-enhanced IAM role sessions</a>.</p>
 *          <p>To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below:</p>
 *          <ul>
 *             <li>
 *                <p>Call Quick Sight <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetIdentityContext.html">GetIdentityContext API</a> to get identity token.</p>
 *             </li>
 *             <li>
 *                <p>Call STS AssumeRole API as you normally would, but provide extra <code>ProvidedContexts</code> parameter in the API request. The list of contexts must have a single trusted context assertion. The <code>ProviderArn</code> should be <code>arn:aws:iam::aws:contextProvider/QuickSight</code> while <code>ContextAssertion</code> will be the identity token you received in response from GetIdentityContext</p>
 *             </li>
 *          </ul>
 *          <p>After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user.</p>
 *          <important>
 *             <p>When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.</p>
 *          </important>
 *          <p>
 *             <b>Possible error scenarios</b>
 *          </p>
 *          <p>The request fails with an Access Denied error in the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>The credentials have expired.</p>
 *             </li>
 *             <li>
 *                <p>The impersonated Quick Sight user doesn't have access to the specified dashboard.</p>
 *             </li>
 *             <li>
 *                <p>The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see <a href="https://docs.aws.amazon.com/quicksuite/latest/userguide/create-custom-permisions-profile.html">Customizing access to Amazon Quick Sight capabilities</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartDashboardSnapshotJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartDashboardSnapshotJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // StartDashboardSnapshotJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   SnapshotJobId: "STRING_VALUE", // required
 *   UserConfiguration: { // SnapshotUserConfiguration
 *     AnonymousUsers: [ // SnapshotAnonymousUserList
 *       { // SnapshotAnonymousUser
 *         RowLevelPermissionTags: [ // SessionTagList
 *           { // SessionTag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   SnapshotConfiguration: { // SnapshotConfiguration
 *     FileGroups: [ // SnapshotFileGroupList // required
 *       { // SnapshotFileGroup
 *         Files: [ // SnapshotFileList
 *           { // SnapshotFile
 *             SheetSelections: [ // SnapshotFileSheetSelectionList // required
 *               { // SnapshotFileSheetSelection
 *                 SheetId: "STRING_VALUE", // required
 *                 SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 *                 VisualIds: [ // SnapshotFileSheetSelectionVisualIdList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             FormatType: "CSV" || "PDF" || "EXCEL", // required
 *           },
 *         ],
 *       },
 *     ],
 *     DestinationConfiguration: { // SnapshotDestinationConfiguration
 *       S3Destinations: [ // SnapshotS3DestinationConfigurationList
 *         { // SnapshotS3DestinationConfiguration
 *           BucketConfiguration: { // S3BucketConfiguration
 *             BucketName: "STRING_VALUE", // required
 *             BucketPrefix: "STRING_VALUE", // required
 *             BucketRegion: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *     Parameters: { // Parameters
 *       StringParameters: [ // StringParameterList
 *         { // StringParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveStringList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       IntegerParameters: [ // IntegerParameterList
 *         { // IntegerParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveLongList // required
 *             Number("long"),
 *           ],
 *         },
 *       ],
 *       DecimalParameters: [ // DecimalParameterList
 *         { // DecimalParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveDoubleList // required
 *             Number("double"),
 *           ],
 *         },
 *       ],
 *       DateTimeParameters: [ // DateTimeParameterList
 *         { // DateTimeParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveTimestampList // required
 *             new Date("TIMESTAMP"),
 *           ],
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new StartDashboardSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDashboardSnapshotJobResponse
 * //   Arn: "STRING_VALUE",
 * //   SnapshotJobId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDashboardSnapshotJobCommandInput - {@link StartDashboardSnapshotJobCommandInput}
 * @returns {@link StartDashboardSnapshotJobCommandOutput}
 * @see {@link StartDashboardSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link StartDashboardSnapshotJobCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
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
export class StartDashboardSnapshotJobCommand extends $Command
  .classBuilder<
    StartDashboardSnapshotJobCommandInput,
    StartDashboardSnapshotJobCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "StartDashboardSnapshotJob", {})
  .n("QuickSightClient", "StartDashboardSnapshotJobCommand")
  .sc(StartDashboardSnapshotJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDashboardSnapshotJobRequest;
      output: StartDashboardSnapshotJobResponse;
    };
    sdk: {
      input: StartDashboardSnapshotJobCommandInput;
      output: StartDashboardSnapshotJobCommandOutput;
    };
  };
}
