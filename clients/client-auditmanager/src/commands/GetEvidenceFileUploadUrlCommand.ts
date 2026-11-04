// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEvidenceFileUploadUrlRequest, GetEvidenceFileUploadUrlResponse } from "../models/models_0";
import { GetEvidenceFileUploadUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a presigned Amazon S3 URL that can be used to upload a file as manual evidence. For instructions on how to use this operation, see [Upload a file from your browser](https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#how-to-upload-manual-evidence-files) in the *Audit Manager User Guide*.
 *
 * The following restrictions apply to this operation:
 *
 * - Maximum size of an individual evidence file: 100 MB
 * - Number of daily manual evidence uploads per control: 100
 * - Supported file formats: See [Supported file types for manual evidence](https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files) in the *Audit Manager User Guide*
 *
 * For more information about Audit Manager service restrictions, see [Quotas and restrictions for Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html).
 *
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
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class GetEvidenceFileUploadUrlCommand extends command<GetEvidenceFileUploadUrlCommandInput, GetEvidenceFileUploadUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetEvidenceFileUploadUrl",
  GetEvidenceFileUploadUrl$
) {
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
