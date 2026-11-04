// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssessmentReportUrlRequest, GetAssessmentReportUrlResponse } from "../models/models_0";
import { GetAssessmentReportUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAssessmentReportUrlCommand}.
 */
export interface GetAssessmentReportUrlCommandInput extends GetAssessmentReportUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetAssessmentReportUrlCommand}.
 */
export interface GetAssessmentReportUrlCommandOutput extends GetAssessmentReportUrlResponse, __MetadataBearer {}

/**
 * Gets the URL of an assessment report in Audit Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentReportUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentReportUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetAssessmentReportUrlRequest
 *   assessmentReportId: "STRING_VALUE", // required
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new GetAssessmentReportUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetAssessmentReportUrlResponse
 * //   preSignedUrl: { // URL
 * //     hyperlinkName: "STRING_VALUE",
 * //     link: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssessmentReportUrlCommandInput - {@link GetAssessmentReportUrlCommandInput}
 * @returns {@link GetAssessmentReportUrlCommandOutput}
 * @see {@link GetAssessmentReportUrlCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportUrlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class GetAssessmentReportUrlCommand extends command<GetAssessmentReportUrlCommandInput, GetAssessmentReportUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetAssessmentReportUrl",
  GetAssessmentReportUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssessmentReportUrlRequest;
      output: GetAssessmentReportUrlResponse;
    };
    sdk: {
      input: GetAssessmentReportUrlCommandInput;
      output: GetAssessmentReportUrlCommandOutput;
    };
  };
}
