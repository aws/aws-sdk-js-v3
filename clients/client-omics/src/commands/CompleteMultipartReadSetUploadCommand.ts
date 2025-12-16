// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CompleteMultipartReadSetUploadRequest, CompleteMultipartReadSetUploadResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { CompleteMultipartReadSetUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteMultipartReadSetUploadCommand}.
 */
export interface CompleteMultipartReadSetUploadCommandInput extends CompleteMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteMultipartReadSetUploadCommand}.
 */
export interface CompleteMultipartReadSetUploadCommandOutput
  extends CompleteMultipartReadSetUploadResponse,
    __MetadataBearer {}

/**
 * <p>Completes a multipart read set upload into a sequence store after you have initiated the upload process with <code>CreateMultipartReadSetUpload</code> and uploaded all read set parts using <code>UploadReadSetPart</code>. You must specify the parts you uploaded using the parts parameter. If the operation is successful, it returns the read set ID(s) of the uploaded read set(s).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/synchronous-uploads.html">Direct upload to a sequence store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CompleteMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CompleteMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CompleteMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   parts: [ // CompleteReadSetUploadPartList // required
 *     { // CompleteReadSetUploadPartListItem
 *       partNumber: Number("int"), // required
 *       partSource: "STRING_VALUE", // required
 *       checksum: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CompleteMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteMultipartReadSetUploadResponse
 * //   readSetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CompleteMultipartReadSetUploadCommandInput - {@link CompleteMultipartReadSetUploadCommandInput}
 * @returns {@link CompleteMultipartReadSetUploadCommandOutput}
 * @see {@link CompleteMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteMultipartReadSetUploadCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class CompleteMultipartReadSetUploadCommand extends $Command
  .classBuilder<
    CompleteMultipartReadSetUploadCommandInput,
    CompleteMultipartReadSetUploadCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "CompleteMultipartReadSetUpload", {})
  .n("OmicsClient", "CompleteMultipartReadSetUploadCommand")
  .sc(CompleteMultipartReadSetUpload$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteMultipartReadSetUploadRequest;
      output: CompleteMultipartReadSetUploadResponse;
    };
    sdk: {
      input: CompleteMultipartReadSetUploadCommandInput;
      output: CompleteMultipartReadSetUploadCommandOutput;
    };
  };
}
