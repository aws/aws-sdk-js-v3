// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDashboardSnapshotJobResultRequest,
  DescribeDashboardSnapshotJobResultResponse,
  DescribeDashboardSnapshotJobResultResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  de_DescribeDashboardSnapshotJobResultCommand,
  se_DescribeDashboardSnapshotJobResultCommand,
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
 * The input for {@link DescribeDashboardSnapshotJobResultCommand}.
 */
export interface DescribeDashboardSnapshotJobResultCommandInput extends DescribeDashboardSnapshotJobResultRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardSnapshotJobResultCommand}.
 */
export interface DescribeDashboardSnapshotJobResultCommandOutput
  extends DescribeDashboardSnapshotJobResultResponse,
    __MetadataBearer {}

/**
 * <p>Describes the result of an existing snapshot job that has finished running.</p>
 *          <p>A finished snapshot job will return a <code>COMPLETED</code> or <code>FAILED</code> status when you poll the job with a <code>DescribeDashboardSnapshotJob</code> API call.</p>
 *          <p>If the job has not finished running, this operation returns a message that says <code>Dashboard Snapshot Job with id <SnapshotjobId> has not reached a terminal state.</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardSnapshotJobResultCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardSnapshotJobResultCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardSnapshotJobResultRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   SnapshotJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardSnapshotJobResultCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardSnapshotJobResultResponse
 * //   Arn: "STRING_VALUE",
 * //   JobStatus: "QUEUED" || "RUNNING" || "COMPLETED" || "FAILED",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   Result: { // SnapshotJobResult
 * //     AnonymousUsers: [ // AnonymousUserSnapshotJobResultList
 * //       { // AnonymousUserSnapshotJobResult
 * //         FileGroups: [ // SnapshotJobResultFileGroupList
 * //           { // SnapshotJobResultFileGroup
 * //             Files: [ // SnapshotFileList
 * //               { // SnapshotFile
 * //                 SheetSelections: [ // SnapshotFileSheetSelectionList // required
 * //                   { // SnapshotFileSheetSelection
 * //                     SheetId: "STRING_VALUE", // required
 * //                     SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 * //                     VisualIds: [ // SnapshotFileSheetSelectionVisualIdList
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 FormatType: "CSV" || "PDF" || "EXCEL", // required
 * //               },
 * //             ],
 * //             S3Results: [ // SnapshotJobS3ResultList
 * //               { // SnapshotJobS3Result
 * //                 S3DestinationConfiguration: { // SnapshotS3DestinationConfiguration
 * //                   BucketConfiguration: { // S3BucketConfiguration
 * //                     BucketName: "STRING_VALUE", // required
 * //                     BucketPrefix: "STRING_VALUE", // required
 * //                     BucketRegion: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 S3Uri: "STRING_VALUE",
 * //                 ErrorInfo: [ // SnapshotJobResultErrorInfoList
 * //                   { // SnapshotJobResultErrorInfo
 * //                     ErrorMessage: "STRING_VALUE",
 * //                     ErrorType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   ErrorInfo: { // SnapshotJobErrorInfo
 * //     ErrorMessage: "STRING_VALUE",
 * //     ErrorType: "STRING_VALUE",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDashboardSnapshotJobResultCommandInput - {@link DescribeDashboardSnapshotJobResultCommandInput}
 * @returns {@link DescribeDashboardSnapshotJobResultCommandOutput}
 * @see {@link DescribeDashboardSnapshotJobResultCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardSnapshotJobResultCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
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
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeDashboardSnapshotJobResultCommand extends $Command
  .classBuilder<
    DescribeDashboardSnapshotJobResultCommandInput,
    DescribeDashboardSnapshotJobResultCommandOutput,
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
  .s("QuickSight_20180401", "DescribeDashboardSnapshotJobResult", {})
  .n("QuickSightClient", "DescribeDashboardSnapshotJobResultCommand")
  .f(void 0, DescribeDashboardSnapshotJobResultResponseFilterSensitiveLog)
  .ser(se_DescribeDashboardSnapshotJobResultCommand)
  .de(de_DescribeDashboardSnapshotJobResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDashboardSnapshotJobResultRequest;
      output: DescribeDashboardSnapshotJobResultResponse;
    };
    sdk: {
      input: DescribeDashboardSnapshotJobResultCommandInput;
      output: DescribeDashboardSnapshotJobResultCommandOutput;
    };
  };
}
