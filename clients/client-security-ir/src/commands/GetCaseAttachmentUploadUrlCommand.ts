// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCaseAttachmentUploadUrlRequest, GetCaseAttachmentUploadUrlResponse } from "../models/models_0";
import { GetCaseAttachmentUploadUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCaseAttachmentUploadUrlCommand}.
 */
export interface GetCaseAttachmentUploadUrlCommandInput extends GetCaseAttachmentUploadUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseAttachmentUploadUrlCommand}.
 */
export interface GetCaseAttachmentUploadUrlCommandOutput extends GetCaseAttachmentUploadUrlResponse, __MetadataBearer {}

/**
 * <p>Uploads an attachment to a case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetCaseAttachmentUploadUrlCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetCaseAttachmentUploadUrlCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // GetCaseAttachmentUploadUrlRequest
 *   caseId: "STRING_VALUE", // required
 *   fileName: "STRING_VALUE", // required
 *   contentLength: Number("long"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new GetCaseAttachmentUploadUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseAttachmentUploadUrlResponse
 * //   attachmentPresignedUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCaseAttachmentUploadUrlCommandInput - {@link GetCaseAttachmentUploadUrlCommandInput}
 * @returns {@link GetCaseAttachmentUploadUrlCommandOutput}
 * @see {@link GetCaseAttachmentUploadUrlCommandInput} for command's `input` shape.
 * @see {@link GetCaseAttachmentUploadUrlCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke GetCaseAttachmentUploadUrl
 * ```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   contentLength: 1500,
 *   fileName: "TestFileName"
 * };
 * const command = new GetCaseAttachmentUploadUrlCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attachmentPresignedUrl: "https://presignedurl.com"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCaseAttachmentUploadUrlCommand extends command<GetCaseAttachmentUploadUrlCommandInput, GetCaseAttachmentUploadUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetCaseAttachmentUploadUrl",
  GetCaseAttachmentUploadUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseAttachmentUploadUrlRequest;
      output: GetCaseAttachmentUploadUrlResponse;
    };
    sdk: {
      input: GetCaseAttachmentUploadUrlCommandInput;
      output: GetCaseAttachmentUploadUrlCommandOutput;
    };
  };
}
