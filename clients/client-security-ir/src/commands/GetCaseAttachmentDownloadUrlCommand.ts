// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCaseAttachmentDownloadUrlRequest, GetCaseAttachmentDownloadUrlResponse } from "../models/models_0";
import { GetCaseAttachmentDownloadUrl$ } from "../schemas/schemas_0";
import type { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCaseAttachmentDownloadUrlCommand}.
 */
export interface GetCaseAttachmentDownloadUrlCommandInput extends GetCaseAttachmentDownloadUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseAttachmentDownloadUrlCommand}.
 */
export interface GetCaseAttachmentDownloadUrlCommandOutput
  extends GetCaseAttachmentDownloadUrlResponse,
    __MetadataBearer {}

/**
 * <p>Returns a Pre-Signed URL for uploading attachments into a case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetCaseAttachmentDownloadUrlCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetCaseAttachmentDownloadUrlCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // GetCaseAttachmentDownloadUrlRequest
 *   caseId: "STRING_VALUE", // required
 *   attachmentId: "STRING_VALUE", // required
 * };
 * const command = new GetCaseAttachmentDownloadUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseAttachmentDownloadUrlResponse
 * //   attachmentPresignedUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCaseAttachmentDownloadUrlCommandInput - {@link GetCaseAttachmentDownloadUrlCommandInput}
 * @returns {@link GetCaseAttachmentDownloadUrlCommandOutput}
 * @see {@link GetCaseAttachmentDownloadUrlCommandInput} for command's `input` shape.
 * @see {@link GetCaseAttachmentDownloadUrlCommandOutput} for command's `response` shape.
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
 * @example Invoke GetCaseAttachmentDownloadUrl
 * ```javascript
 * //
 * const input = {
 *   attachmentId: "3C5A6B89-1DEF-4C2D-A5B6-123456789ABC",
 *   caseId: "8403556009"
 * };
 * const command = new GetCaseAttachmentDownloadUrlCommand(input);
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
export class GetCaseAttachmentDownloadUrlCommand extends $Command
  .classBuilder<
    GetCaseAttachmentDownloadUrlCommandInput,
    GetCaseAttachmentDownloadUrlCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "GetCaseAttachmentDownloadUrl", {})
  .n("SecurityIRClient", "GetCaseAttachmentDownloadUrlCommand")
  .sc(GetCaseAttachmentDownloadUrl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseAttachmentDownloadUrlRequest;
      output: GetCaseAttachmentDownloadUrlResponse;
    };
    sdk: {
      input: GetCaseAttachmentDownloadUrlCommandInput;
      output: GetCaseAttachmentDownloadUrlCommandOutput;
    };
  };
}
