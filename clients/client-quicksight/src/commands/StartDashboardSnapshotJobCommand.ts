// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDashboardSnapshotJobRequest, StartDashboardSnapshotJobResponse } from "../models/models_5";
import { StartDashboardSnapshotJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call.
 *
 * - 1 PDF
 * - 1 Excel workbook that includes up to 5 table or pivot table visuals
 * - 5 CSVs from table or pivot table visuals
 *
 * > **Note:** Exporting CSV, Excel, or Pixel Perfect PDF reports requires Pixel Perfect Report Add-on.
 *
 * The status of a submitted job can be polled with the `DescribeDashboardSnapshotJob` API. When you call the `DescribeDashboardSnapshotJob` API, check the `JobStatus` field in the response. Once the job reaches a `COMPLETED` or `FAILED` status, use the `DescribeDashboardSnapshotJobResult` API to obtain the URLs for the generated files. If the job fails, the `DescribeDashboardSnapshotJobResult` API returns detailed information about the error that occurred.
 *
 * **StartDashboardSnapshotJob API throttling**
 *
 * Quick Sight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the `StartDashboardSnapshotJob`. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Quick Sight throttles the API calls to maintin an optimal experience and reliability for all Quick Sight users.
 *
 * **Common throttling scenarios**
 *
 * The following list provides information about the most commin throttling scenarios that can occur.
 *
 * - **A large number of `SnapshotExport` API jobs are running simultaneously on an Amazon Web Services account.** When a new `StartDashboardSnapshotJob` is created and there are already 12 jobs with the `RUNNING` status, the new job request fails and returns a `LimitExceededException` error. Wait for a current job to comlpete before you resubmit the new job.
 * - **A large number of API requests are submitted on an Amazon Web Services account.** When a user makes more than 10 API calls to the Quick Sight API in one second, a `ThrottlingException` is returned.
 *
 * If your use case requires a higher throttling limit, contact your account admin or [Amazon Web ServicesSupport](http://aws.amazon.com/contact-us/) to explore options to tailor a more optimal expereince for your account.
 *
 * **Best practices to handle throttling**
 *
 * If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Quick Sight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example `(12 minutes * 9 = 108 minutes)`. Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline.
 *
 * The time that it takes to process a job can be impacted by the following factors:
 *
 * - The dataset type (Direct Query or SPICE).
 * - The size of the dataset.
 * - The complexity of the calculated fields that are used in the dashboard.
 * - The number of visuals that are on a sheet.
 * - The types of visuals that are on the sheet.
 * - The number of formats and snapshots that are requested in the job configuration.
 * - The size of the generated snapshots.
 *
 * **Registered user support**
 *
 * You can generate snapshots for registered Quick Sight users by using the Snapshot Job APIs with [identity-enhanced IAM role session credentials](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html). This approach allows you to create snapshots on behalf of specific Quick Sight users while respecting their row-level security (RLS), column-level security (CLS), dynamic default parameters and dashboard parameter/filter settings.
 *
 * To generate snapshots for registered Quick Sight users, you need to:
 *
 * - Obtain identity-enhanced IAM role session credentials from Amazon Web Services Security Token Service (STS).
 * - Use these credentials to call the Snapshot Job APIs.
 *
 * Identity-enhanced credentials are credentials that contain information about the end user (e.g., registered Quick Sight user).
 *
 * If your Quick Sight users are backed by [Amazon Web Services Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html), then you need to set up a [trusted token issuer](https://docs.aws.amazon.com/singlesignon/latest/userguide/setuptrustedtokenissuer.html). Then, getting identity-enhanced IAM credentials for a Quick Sight user will look like the following:
 *
 * - Authenticate user with your OIDC compliant Identity Provider. You should get auth tokens back.
 * - Use the OIDC API, [CreateTokenWithIAM](https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateTokenWithIAM.html), to exchange auth tokens to IAM tokens. One of the resulted tokens will be identity token.
 * - Call STS AssumeRole API as you normally would, but provide an extra `ProvidedContexts` parameter in the API request. The list of contexts must have a single trusted context assertion. The `ProviderArn` should be `arn:aws:iam::aws:contextProvider/IdentityCenter` while `ContextAssertion` will be the identity token you received in response from CreateTokenWithIAM
 *
 * For more details, see [IdC documentation on Identity-enhanced IAM role sessions](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-identity-enhanced-iam-role-sessions.html).
 *
 * To obtain Identity-enhanced credentials for Quick Sight native users, IAM federated users, or Active Directory users, follow the steps below:
 *
 * - Call Quick Sight [GetIdentityContext API](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetIdentityContext.html) to get identity token.
 * - Call STS AssumeRole API as you normally would, but provide extra `ProvidedContexts` parameter in the API request. The list of contexts must have a single trusted context assertion. The `ProviderArn` should be `arn:aws:iam::aws:contextProvider/QuickSight` while `ContextAssertion` will be the identity token you received in response from GetIdentityContext
 *
 * After obtaining the identity-enhanced IAM role session credentials, you can use them to start a job, describe the job and describe job result. You can use the same credentials as long as they haven't expired. All API requests made with these credentials are considered to be made by the impersonated Quick Sight user.
 *
 * > **Important:** When using identity-enhanced session credentials, set the UserConfiguration request attribute to null. Otherwise, the request will be invalid.
 *
 * **Possible error scenarios**
 *
 * The request fails with an Access Denied error in the following scenarios:
 *
 * - The credentials have expired.
 * - The impersonated Quick Sight user doesn't have access to the specified dashboard.
 * - The impersonated Quick Sight user is restricted from exporting data in the selected formats. For more information about export restrictions, see [Customizing access to Amazon Quick Sight capabilities](https://docs.aws.amazon.com/quicksuite/latest/userguide/create-custom-permisions-profile.html).
 *
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class StartDashboardSnapshotJobCommand extends command<StartDashboardSnapshotJobCommandInput, StartDashboardSnapshotJobCommandOutput>(
  _ep0,
  _mw0,
  "StartDashboardSnapshotJob",
  StartDashboardSnapshotJob$
) {
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
