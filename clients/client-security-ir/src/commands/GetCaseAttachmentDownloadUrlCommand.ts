// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCaseAttachmentDownloadUrlRequest,
  GetCaseAttachmentDownloadUrlResponse,
  GetCaseAttachmentDownloadUrlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetCaseAttachmentDownloadUrlCommand,
  se_GetCaseAttachmentDownloadUrlCommand,
} from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

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
 * <p>Grants permission to obtain an Amazon S3 presigned URL to download an attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetCaseAttachmentDownloadUrlCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetCaseAttachmentDownloadUrlCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "GetCaseAttachmentDownloadUrl", {})
  .n("SecurityIRClient", "GetCaseAttachmentDownloadUrlCommand")
  .f(void 0, GetCaseAttachmentDownloadUrlResponseFilterSensitiveLog)
  .ser(se_GetCaseAttachmentDownloadUrlCommand)
  .de(de_GetCaseAttachmentDownloadUrlCommand)
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
