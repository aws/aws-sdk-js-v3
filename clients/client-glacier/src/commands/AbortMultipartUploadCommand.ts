// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import type { AbortMultipartUploadInput } from "../models/models_0";
import { AbortMultipartUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AbortMultipartUploadCommand}.
 */
export interface AbortMultipartUploadCommandInput extends AbortMultipartUploadInput {}
/**
 * @public
 *
 * The output of {@link AbortMultipartUploadCommand}.
 */
export interface AbortMultipartUploadCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation aborts a multipart upload identified by the upload ID.</p>
 *
 *
 *          <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts
 *          to the multipart upload or complete the multipart upload. Aborting a completed upload
 *          fails. However, aborting an already-aborted upload will succeed, for a short time. For more
 *          information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AbortMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AbortMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // AbortMultipartUploadInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 * };
 * const command = new AbortMultipartUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortMultipartUploadCommandInput - {@link AbortMultipartUploadCommandInput}
 * @returns {@link AbortMultipartUploadCommandOutput}
 * @see {@link AbortMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 *
 * @example To abort a multipart upload identified by the upload ID
 * ```javascript
 * // The example deletes an in-progress multipart upload to a vault named my-vault:
 * const input = {
 *   accountId: "-",
 *   uploadId: "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
 *   vaultName: "my-vault"
 * };
 * const command = new AbortMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AbortMultipartUploadCommand extends $Command
  .classBuilder<
    AbortMultipartUploadCommandInput,
    AbortMultipartUploadCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "AbortMultipartUpload", {})
  .n("GlacierClient", "AbortMultipartUploadCommand")
  .sc(AbortMultipartUpload$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortMultipartUploadInput;
      output: {};
    };
    sdk: {
      input: AbortMultipartUploadCommandInput;
      output: AbortMultipartUploadCommandOutput;
    };
  };
}
