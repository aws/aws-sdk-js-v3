// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AbortMultipartReadSetUploadRequest, AbortMultipartReadSetUploadResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_AbortMultipartReadSetUploadCommand,
  se_AbortMultipartReadSetUploadCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AbortMultipartReadSetUploadCommand}.
 */
export interface AbortMultipartReadSetUploadCommandInput extends AbortMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link AbortMultipartReadSetUploadCommand}.
 */
export interface AbortMultipartReadSetUploadCommandOutput
  extends AbortMultipartReadSetUploadResponse,
    __MetadataBearer {}

/**
 * <p>Stops a multipart read set upload into a sequence store and returns a response with no body if the operation is successful. To confirm that a multipart read set upload has been stopped, use the <code>ListMultipartReadSetUploads</code> API operation to view all active multipart read set uploads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, AbortMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, AbortMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // AbortMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 * };
 * const command = new AbortMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortMultipartReadSetUploadCommandInput - {@link AbortMultipartReadSetUploadCommandInput}
 * @returns {@link AbortMultipartReadSetUploadCommandOutput}
 * @see {@link AbortMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartReadSetUploadCommandOutput} for command's `response` shape.
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
export class AbortMultipartReadSetUploadCommand extends $Command
  .classBuilder<
    AbortMultipartReadSetUploadCommandInput,
    AbortMultipartReadSetUploadCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "AbortMultipartReadSetUpload", {})
  .n("OmicsClient", "AbortMultipartReadSetUploadCommand")
  .f(void 0, void 0)
  .ser(se_AbortMultipartReadSetUploadCommand)
  .de(de_AbortMultipartReadSetUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortMultipartReadSetUploadRequest;
      output: {};
    };
    sdk: {
      input: AbortMultipartReadSetUploadCommandInput;
      output: AbortMultipartReadSetUploadCommandOutput;
    };
  };
}
