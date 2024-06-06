// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { InitiateMultipartUploadInput, InitiateMultipartUploadOutput } from "../models/models_0";
import { de_InitiateMultipartUploadCommand, se_InitiateMultipartUploadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateMultipartUploadCommand}.
 */
export interface InitiateMultipartUploadCommandInput extends InitiateMultipartUploadInput {}
/**
 * @public
 *
 * The output of {@link InitiateMultipartUploadCommand}.
 */
export interface InitiateMultipartUploadCommandOutput extends InitiateMultipartUploadOutput, __MetadataBearer {}

/**
 * <p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart
 *          upload resource and returns its ID in the response. The multipart upload ID is used in
 *          subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p>
 *
 *          <p>When you initiate a multipart upload, you specify the part size in number of bytes.
 *          The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576
 *          (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable
 *          part size is 1 MB, and the maximum is 4 GB.</p>
 *
 *          <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>),
 *          except the last one, must have the same size. The last one can be the same size or smaller.
 *          For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart
 *          upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of
 *          0.2 MB. </p>
 *
 *          <note>
 *             <p>You don't need to know the size of the archive when you start a multipart upload
 *             because Amazon S3 Glacier does not require you to specify the overall archive
 *             size.</p>
 *          </note>
 *
 *          <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload
 *          resource referenced by the ID. Glacier also removes the multipart upload resource if
 *          you cancel the multipart upload or it may be removed if there is no activity for a period
 *          of 24 hours.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // InitiateMultipartUploadInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   archiveDescription: "STRING_VALUE",
 *   partSize: "STRING_VALUE",
 * };
 * const command = new InitiateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * // { // InitiateMultipartUploadOutput
 * //   location: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitiateMultipartUploadCommandInput - {@link InitiateMultipartUploadCommandInput}
 * @returns {@link InitiateMultipartUploadCommandOutput}
 * @see {@link InitiateMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
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
 * @public
 * @example To initiate a multipart upload
 * ```javascript
 * // The example initiates a multipart upload to a vault named my-vault with a part size of 1 MiB (1024 x 1024 bytes) per file.
 * const input = {
 *   "accountId": "-",
 *   "partSize": "1048576",
 *   "vaultName": "my-vault"
 * };
 * const command = new InitiateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "location": "/111122223333/vaults/my-vault/multipart-uploads/19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
 *   "uploadId": "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ"
 * }
 * *\/
 * // example id: 72f2db19-3d93-4c74-b2ed-38703baacf49
 * ```
 *
 */
export class InitiateMultipartUploadCommand extends $Command
  .classBuilder<
    InitiateMultipartUploadCommandInput,
    InitiateMultipartUploadCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "InitiateMultipartUpload", {})
  .n("GlacierClient", "InitiateMultipartUploadCommand")
  .f(void 0, void 0)
  .ser(se_InitiateMultipartUploadCommand)
  .de(de_InitiateMultipartUploadCommand)
  .build() {}
