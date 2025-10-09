// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartDashboardSnapshotJobRequest,
  StartDashboardSnapshotJobRequestFilterSensitiveLog,
  StartDashboardSnapshotJobResponse,
} from "../models/models_5";
import { de_StartDashboardSnapshotJobCommand, se_StartDashboardSnapshotJobCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "StartDashboardSnapshotJob", {})
  .n("QuickSightClient", "StartDashboardSnapshotJobCommand")
  .f(StartDashboardSnapshotJobRequestFilterSensitiveLog, void 0)
  .ser(se_StartDashboardSnapshotJobCommand)
  .de(de_StartDashboardSnapshotJobCommand)
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
