// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEvidenceFileUploadUrlRequest, GetEvidenceFileUploadUrlResponse } from "../models/models_0";
import { GetEvidenceFileUploadUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceFileUploadUrlCommand}.
 */
export interface GetEvidenceFileUploadUrlCommandInput extends GetEvidenceFileUploadUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceFileUploadUrlCommand}.
 */
export interface GetEvidenceFileUploadUrlCommandOutput extends GetEvidenceFileUploadUrlResponse, __MetadataBearer {}

/**
 * <p>Creates a presigned Amazon S3 URL that can be used to upload a file as manual
 *          evidence. For instructions on how to use this operation, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#how-to-upload-manual-evidence-files">Upload a file from your browser </a> in the <i>Audit Manager User
 *             Guide</i>.</p>
 *          <p>The following restrictions apply to this operation:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum size of an individual evidence file: 100 MB</p>
 *             </li>
 *             <li>
 *                <p>Number of daily manual evidence uploads per control: 100</p>
 *             </li>
 *             <li>
 *                <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
 *             restrictions for Audit Manager</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFileUploadUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFileUploadUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceFileUploadUrlRequest
 *   fileName: "STRING_VALUE", // required
 * };
 * const command = new GetEvidenceFileUploadUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceFileUploadUrlResponse
 * //   evidenceFileName: "STRING_VALUE",
 * //   uploadUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceFileUploadUrlCommandInput - {@link GetEvidenceFileUploadUrlCommandInput}
 * @returns {@link GetEvidenceFileUploadUrlCommandOutput}
 * @see {@link GetEvidenceFileUploadUrlCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFileUploadUrlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class GetEvidenceFileUploadUrlCommand extends $Command
  .classBuilder<
    GetEvidenceFileUploadUrlCommandInput,
    GetEvidenceFileUploadUrlCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetEvidenceFileUploadUrl", {})
  .n("AuditManagerClient", "GetEvidenceFileUploadUrlCommand")
  .sc(GetEvidenceFileUploadUrl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvidenceFileUploadUrlRequest;
      output: GetEvidenceFileUploadUrlResponse;
    };
    sdk: {
      input: GetEvidenceFileUploadUrlCommandInput;
      output: GetEvidenceFileUploadUrlCommandOutput;
    };
  };
}
