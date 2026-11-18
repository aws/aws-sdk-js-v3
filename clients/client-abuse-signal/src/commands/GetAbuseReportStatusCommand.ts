// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAbuseReportStatusRequest, GetAbuseReportStatusResponse } from "../models/models_0";
import { GetAbuseReportStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAbuseReportStatusCommand}.
 */
export interface GetAbuseReportStatusCommandInput extends GetAbuseReportStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetAbuseReportStatusCommand}.
 */
export interface GetAbuseReportStatusCommandOutput extends GetAbuseReportStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current processing status of a previously submitted abuse report, including the status, submission timestamp, and last-update time.</p> <p>You can poll this operation to track the report's status. <code>PROCESSING</code> confirms that Amazon Web Services received your report and is processing it. <code>COMPLETED</code> means Amazon Web Services finished resolving the report, and the response includes a <code>reasonCode</code>. The time to reach <code>COMPLETED</code> may vary and can take up to several days depending on the scope and complexity of the suspected abuse.</p> <note> <p> <code>COMPLETED</code> is the only terminal status. To wait for a report, use the <code>ReportProcessing</code> waiter, which succeeds when the report reaches <code>PROCESSING</code> or <code>COMPLETED</code>. If you poll this operation yourself, wait 1–5 seconds between calls.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AbuseSignalClient, GetAbuseReportStatusCommand } from "@aws-sdk/client-abuse-signal"; // ES Modules import
 * // const { AbuseSignalClient, GetAbuseReportStatusCommand } = require("@aws-sdk/client-abuse-signal"); // CommonJS import
 * // import type { AbuseSignalClientConfig } from "@aws-sdk/client-abuse-signal";
 * const config = {}; // type is AbuseSignalClientConfig
 * const client = new AbuseSignalClient(config);
 * const input = { // GetAbuseReportStatusRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new GetAbuseReportStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAbuseReportStatusResponse
 * //   reportId: "STRING_VALUE", // required
 * //   correlationId: "STRING_VALUE",
 * //   status: "QUEUED" || "PROCESSING" || "COMPLETED", // required
 * //   description: "STRING_VALUE", // required
 * //   reasonCode: "ACTIONED" || "NOT_RESOLVABLE_TO_AWS" || "REVIEWED_NO_AWS_ACTION" || "CONTENT_DOWN_OR_INACCESSIBLE" || "NEED_MORE_INFORMATION",
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAbuseReportStatusCommandInput - {@link GetAbuseReportStatusCommandInput}
 * @returns {@link GetAbuseReportStatusCommandOutput}
 * @see {@link GetAbuseReportStatusCommandInput} for command's `input` shape.
 * @see {@link GetAbuseReportStatusCommandOutput} for command's `response` shape.
 * @see {@link AbuseSignalClientResolvedConfig | config} for AbuseSignalClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the <code>reportId</code> is correct.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller does not have sufficient access to perform this operation. Verify that the caller has the specific IAM permission for the operation it is calling (for example, <code>abuse:CreateAbuseReport</code>, <code>abuse:GetAbuseReportStatus</code>, or <code>abuse:ListAbuseReportStatuses</code>). Grant only the actions each caller requires.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request. This error is retryable; check the <code>Retry-After</code> header before you retry.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. This error is retryable; retry with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service, which indicates that the request is not well-formed. Check <code>fieldList</code> for the specific members that failed validation.</p>
 *
 * @throws {@link AbuseSignalServiceException}
 * <p>Base exception class for all service exceptions from AbuseSignal service.</p>
 *
 *
 * @example Get the status of a submitted report
 * ```javascript
 * //
 * const input = {
 *   reportId: "rpt5a8b3c2d1e4f6g7h8i9j0"
 * };
 * const command = new GetAbuseReportStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   description: "Report has been successfully submitted to Trust & Safety",
 *   reportId: "rpt5a8b3c2d1e4f6g7h8i9j0",
 *   status: "PROCESSING",
 *   submittedAt: "2024-01-01T00:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAbuseReportStatusCommand extends command<GetAbuseReportStatusCommandInput, GetAbuseReportStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetAbuseReportStatus",
  GetAbuseReportStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAbuseReportStatusRequest;
      output: GetAbuseReportStatusResponse;
    };
    sdk: {
      input: GetAbuseReportStatusCommandInput;
      output: GetAbuseReportStatusCommandOutput;
    };
  };
}
