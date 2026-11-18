// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAbuseReportStatusesRequest, ListAbuseReportStatusesResponse } from "../models/models_0";
import { ListAbuseReportStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAbuseReportStatusesCommand}.
 */
export interface ListAbuseReportStatusesCommandInput extends ListAbuseReportStatusesRequest {}
/**
 * @public
 *
 * The output of {@link ListAbuseReportStatusesCommand}.
 */
export interface ListAbuseReportStatusesCommandOutput extends ListAbuseReportStatusesResponse, __MetadataBearer {}

/**
 * <p>Lists abuse report statuses for the calling account, ordered by submission time, with optional filtering and pagination.</p> <p>Use the <code>correlationId</code> parameter to filter results by the reporter-provided correlation ID that was specified during report submission.</p> <p>Results are paginated. Use <code>nextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AbuseSignalClient, ListAbuseReportStatusesCommand } from "@aws-sdk/client-abuse-signal"; // ES Modules import
 * // const { AbuseSignalClient, ListAbuseReportStatusesCommand } = require("@aws-sdk/client-abuse-signal"); // CommonJS import
 * // import type { AbuseSignalClientConfig } from "@aws-sdk/client-abuse-signal";
 * const config = {}; // type is AbuseSignalClientConfig
 * const client = new AbuseSignalClient(config);
 * const input = { // ListAbuseReportStatusesRequest
 *   correlationId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAbuseReportStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListAbuseReportStatusesResponse
 * //   reports: [ // ReportStatusList // required
 * //     { // ReportStatusListItem
 * //       reportId: "STRING_VALUE", // required
 * //       correlationId: "STRING_VALUE",
 * //       status: "QUEUED" || "PROCESSING" || "COMPLETED", // required
 * //       description: "STRING_VALUE", // required
 * //       reasonCode: "ACTIONED" || "NOT_RESOLVABLE_TO_AWS" || "REVIEWED_NO_AWS_ACTION" || "CONTENT_DOWN_OR_INACCESSIBLE" || "NEED_MORE_INFORMATION",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAbuseReportStatusesCommandInput - {@link ListAbuseReportStatusesCommandInput}
 * @returns {@link ListAbuseReportStatusesCommandOutput}
 * @see {@link ListAbuseReportStatusesCommandInput} for command's `input` shape.
 * @see {@link ListAbuseReportStatusesCommandOutput} for command's `response` shape.
 * @see {@link AbuseSignalClientResolvedConfig | config} for AbuseSignalClient's `config` shape.
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
 * @example List abuse report statuses
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListAbuseReportStatusesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   reports: [
 *     {
 *       description: "Submitted",
 *       reportId: "rpt5a8b3c2d1e4f6g7h8i9j0",
 *       status: "PROCESSING"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAbuseReportStatusesCommand extends command<ListAbuseReportStatusesCommandInput, ListAbuseReportStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListAbuseReportStatuses",
  ListAbuseReportStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAbuseReportStatusesRequest;
      output: ListAbuseReportStatusesResponse;
    };
    sdk: {
      input: ListAbuseReportStatusesCommandInput;
      output: ListAbuseReportStatusesCommandOutput;
    };
  };
}
