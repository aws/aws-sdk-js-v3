// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDashboardSnapshotJobRequest,
  DescribeDashboardSnapshotJobResponse,
  DescribeDashboardSnapshotJobResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  de_DescribeDashboardSnapshotJobCommand,
  se_DescribeDashboardSnapshotJobCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDashboardSnapshotJobCommand}.
 */
export interface DescribeDashboardSnapshotJobCommandInput extends DescribeDashboardSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardSnapshotJobCommand}.
 */
export interface DescribeDashboardSnapshotJobCommandOutput
  extends DescribeDashboardSnapshotJobResponse,
    __MetadataBearer {}

/**
 * <p>Describes an existing snapshot job.</p>
 *          <p>Poll job descriptions after a job starts to know the status of the job. For information on available status codes, see <code>JobStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardSnapshotJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardSnapshotJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardSnapshotJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   SnapshotJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardSnapshotJobResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   DashboardId: "STRING_VALUE",
 * //   SnapshotJobId: "STRING_VALUE",
 * //   UserConfiguration: { // SnapshotUserConfigurationRedacted
 * //     AnonymousUsers: [ // SnapshotAnonymousUserRedactedList
 * //       { // SnapshotAnonymousUserRedacted
 * //         RowLevelPermissionTagKeys: [ // SessionTagKeyList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   SnapshotConfiguration: { // SnapshotConfiguration
 * //     FileGroups: [ // SnapshotFileGroupList // required
 * //       { // SnapshotFileGroup
 * //         Files: [ // SnapshotFileList
 * //           { // SnapshotFile
 * //             SheetSelections: [ // SnapshotFileSheetSelectionList // required
 * //               { // SnapshotFileSheetSelection
 * //                 SheetId: "STRING_VALUE", // required
 * //                 SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 * //                 VisualIds: [ // SnapshotFileSheetSelectionVisualIdList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             FormatType: "CSV" || "PDF" || "EXCEL", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DestinationConfiguration: { // SnapshotDestinationConfiguration
 * //       S3Destinations: [ // SnapshotS3DestinationConfigurationList
 * //         { // SnapshotS3DestinationConfiguration
 * //           BucketConfiguration: { // S3BucketConfiguration
 * //             BucketName: "STRING_VALUE", // required
 * //             BucketPrefix: "STRING_VALUE", // required
 * //             BucketRegion: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     Parameters: { // Parameters
 * //       StringParameters: [ // StringParameterList
 * //         { // StringParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveStringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       IntegerParameters: [ // IntegerParameterList
 * //         { // IntegerParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveLongList // required
 * //             Number("long"),
 * //           ],
 * //         },
 * //       ],
 * //       DecimalParameters: [ // DecimalParameterList
 * //         { // DecimalParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveDoubleList // required
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //       DateTimeParameters: [ // DateTimeParameterList
 * //         { // DateTimeParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveTimestampList // required
 * //             new Date("TIMESTAMP"),
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   JobStatus: "QUEUED" || "RUNNING" || "COMPLETED" || "FAILED",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDashboardSnapshotJobCommandInput - {@link DescribeDashboardSnapshotJobCommandInput}
 * @returns {@link DescribeDashboardSnapshotJobCommandOutput}
 * @see {@link DescribeDashboardSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardSnapshotJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class DescribeDashboardSnapshotJobCommand extends $Command
  .classBuilder<
    DescribeDashboardSnapshotJobCommandInput,
    DescribeDashboardSnapshotJobCommandOutput,
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
  .s("QuickSight_20180401", "DescribeDashboardSnapshotJob", {})
  .n("QuickSightClient", "DescribeDashboardSnapshotJobCommand")
  .f(void 0, DescribeDashboardSnapshotJobResponseFilterSensitiveLog)
  .ser(se_DescribeDashboardSnapshotJobCommand)
  .de(de_DescribeDashboardSnapshotJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDashboardSnapshotJobRequest;
      output: DescribeDashboardSnapshotJobResponse;
    };
    sdk: {
      input: DescribeDashboardSnapshotJobCommandInput;
      output: DescribeDashboardSnapshotJobCommandOutput;
    };
  };
}
