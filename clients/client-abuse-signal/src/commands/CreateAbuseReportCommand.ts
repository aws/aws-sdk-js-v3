// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAbuseReportRequest, CreateAbuseReportResponse } from "../models/models_0";
import { CreateAbuseReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAbuseReportCommand}.
 */
export interface CreateAbuseReportCommandInput extends CreateAbuseReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateAbuseReportCommand}.
 */
export interface CreateAbuseReportCommandOutput extends CreateAbuseReportResponse, __MetadataBearer {}

/**
 * <p>Submits a structured report. Amazon Web Services validates it and returns a report ID. A successful response confirms that Amazon Web Services received your report. It doesn't mean that Amazon Web Services has reached an outcome. Use <a>GetAbuseReportStatus</a> with the report ID to check the report's status and outcome.</p> <p>This operation is idempotent within a time window. If you provide a <code>clientToken</code>, duplicate requests within 24 hours return the existing report ID. If you omit it, the service generates a token scoped to 5 minutes.</p> <important> <p> <b>Cross-Region data residency:</b> By submitting a report, you instruct Amazon Web Services to store it in all supported Regions (<code>us-east-1</code>, <code>us-west-2</code>, and <code>eu-west-2</code>), including across the United States and Europe. If data must remain in a single Region, do not include it in the report.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AbuseSignalClient, CreateAbuseReportCommand } from "@aws-sdk/client-abuse-signal"; // ES Modules import
 * // const { AbuseSignalClient, CreateAbuseReportCommand } = require("@aws-sdk/client-abuse-signal"); // CommonJS import
 * // import type { AbuseSignalClientConfig } from "@aws-sdk/client-abuse-signal";
 * const config = {}; // type is AbuseSignalClientConfig
 * const client = new AbuseSignalClient(config);
 * const input = { // CreateAbuseReportRequest
 *   report: { // ReportData Union: only one key present
 *     xarf: "DOCUMENT_VALUE",
 *   },
 *   correlationId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAbuseReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateAbuseReportResponse
 * //   reportId: "STRING_VALUE", // required
 * //   correlationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAbuseReportCommandInput - {@link CreateAbuseReportCommandInput}
 * @returns {@link CreateAbuseReportCommandOutput}
 * @see {@link CreateAbuseReportCommandInput} for command's `input` shape.
 * @see {@link CreateAbuseReportCommandOutput} for command's `response` shape.
 * @see {@link AbuseSignalClientResolvedConfig | config} for AbuseSignalClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, an idempotency token was reused with a different payload.</p>
 *
 * @throws {@link SubmissionRequirementException} (client fault)
 *  <p>The report is well-formed and satisfies the XARF schema, but it does not meet one or more submission requirements (for example, the submission lookback window or <code>source_identifier</code> restrictions). This error is distinct from <code>ValidationException</code> (HTTP 400), which indicates that the report is not well-formed. Retrying the same report will not succeed; the report content must change.</p>
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
 * @example Submit an abuse report in X-ARF format
 * ```javascript
 * //
 * const input = {
 *   report: {
 *     xarf:     { /* empty *\/ }
 *   }
 * };
 * const command = new CreateAbuseReportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   correlationId: "my-tracking-id-123",
 *   reportId: "rpt5a8b3c2d1e4f6g7h8i9j0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAbuseReportCommand extends command<CreateAbuseReportCommandInput, CreateAbuseReportCommandOutput>(
  _ep0,
  _mw0,
  "CreateAbuseReport",
  CreateAbuseReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAbuseReportRequest;
      output: CreateAbuseReportResponse;
    };
    sdk: {
      input: CreateAbuseReportCommandInput;
      output: CreateAbuseReportCommandOutput;
    };
  };
}
