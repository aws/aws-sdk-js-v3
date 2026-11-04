// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeDashboardSnapshotJobResultRequest,
  DescribeDashboardSnapshotJobResultResponse,
} from "../models/models_4";
import { DescribeDashboardSnapshotJobResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeDashboardSnapshotJobResultCommandOutput extends DescribeDashboardSnapshotJobResultResponse, __MetadataBearer {}

/**
 * Describes the result of an existing snapshot job that has finished running.
 *
 * A finished snapshot job will return a `COMPLETED` or `FAILED` status when you poll the job with a `DescribeDashboardSnapshotJob` API call.
 *
 * If the job has not finished running, this operation returns a message that says `Dashboard Snapshot Job with id <SnapshotjobId> has not reached a terminal state.`.
 *
 * **Registered user support**
 *
 * This API can be called as before to get the result of a job started by the same Quick Sight user. The result for the user will be returned in `RegisteredUsers` response attribute. The attribute will contain a list with at most one object in it.
 *
 * **Possible error scenarios**
 *
 * The request fails with an Access Denied error in the following scenarios:
 *
 * - The credentials have expired.
 * - The job was started by a different user.
 * - The registered user doesn't have access to the specified dashboard.
 *
 * The request succeeds but the job fails in the following scenarios:
 *
 * - `DASHBOARD_ACCESS_DENIED` - The registered user lost access to the dashboard.
 * - `CAPABILITY_RESTRICTED` - The registered user is restricted from exporting data in **all** selected formats.
 *
 * The request succeeds but the response contains an error code in the following scenarios:
 *
 * - `CAPABILITY_RESTRICTED` - The registered user is restricted from exporting data in **some** selected formats.
 * - `RLS_CHANGED` - Row-level security settings have changed. Re-run the job with current settings.
 * - `CLS_CHANGED` - Column-level security settings have changed. Re-run the job with current settings.
 * - `DATASET_DELETED` - The dataset has been deleted. Verify the dataset exists before re-running the job.
 *
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
 * //     RegisteredUsers: [ // RegisteredUserSnapshotJobResultList
 * //       { // RegisteredUserSnapshotJobResult
 * //         FileGroups: [
 * //           {
 * //             Files: [
 * //               {
 * //                 SheetSelections: [ // required
 * //                   {
 * //                     SheetId: "STRING_VALUE", // required
 * //                     SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 * //                     VisualIds: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //                 FormatType: "CSV" || "PDF" || "EXCEL", // required
 * //               },
 * //             ],
 * //             S3Results: [
 * //               {
 * //                 S3DestinationConfiguration: {
 * //                   BucketConfiguration: {
 * //                     BucketName: "STRING_VALUE", // required
 * //                     BucketPrefix: "STRING_VALUE", // required
 * //                     BucketRegion: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 S3Uri: "STRING_VALUE",
 * //                 ErrorInfo: [
 * //                   {
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
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
export class DescribeDashboardSnapshotJobResultCommand extends command<DescribeDashboardSnapshotJobResultCommandInput, DescribeDashboardSnapshotJobResultCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDashboardSnapshotJobResult",
  DescribeDashboardSnapshotJobResult$
) {
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
