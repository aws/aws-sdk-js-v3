// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ArchiveCreationOutput, CompleteMultipartUploadInput } from "../models/models_0";
import { de_CompleteMultipartUploadCommand, se_CompleteMultipartUploadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandInput extends CompleteMultipartUploadInput {}
/**
 * @public
 *
 * The output of {@link CompleteMultipartUploadCommand}.
 */
export interface CompleteMultipartUploadCommandOutput extends ArchiveCreationOutput, __MetadataBearer {}

/**
 * <p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been
 *          uploaded and that Glacier can now assemble the archive from the uploaded parts.
 *          After assembling and saving the archive to the vault, Glacier returns the URI path
 *          of the newly created archive resource. Using the URI path, you can then access the archive.
 *          After you upload an archive, you should save the archive ID returned to retrieve the
 *          archive at a later point. You can also get the vault inventory to obtain a list of archive
 *          IDs in a vault. For more information, see <a>InitiateJob</a>.</p>
 *
 *          <p>In the request, you must include the computed SHA256 tree hash of the entire archive
 *          you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing
 *             Checksums</a>. On the server side, Glacier also constructs the SHA256 tree
 *          hash of the assembled archive. If the values match, Glacier saves the archive to the
 *          vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific
 *          multipart upload. It includes checksum information for each uploaded part that can be used
 *          to debug a bad checksum issue.</p>
 *
 *          <p>Additionally, Glacier also checks for any missing content ranges when
 *          assembling the archive, if missing content ranges are found, Glacier returns an
 *          error and the operation fails.</p>
 *
 *          <p>Complete Multipart Upload is an idempotent operation. After your first successful
 *          complete multipart upload, if you call the operation again within a short period, the
 *          operation will succeed and return the same archive ID. This is useful in the event you
 *          experience a network issue that causes an aborted connection or receive a 500 server error,
 *          in which case you can repeat your Complete Multipart Upload request and get the same
 *          archive ID without creating duplicate archives. Note, however, that after the multipart
 *          upload completes, you cannot call the List Parts operation and the multipart upload will
 *          not appear in List Multipart Uploads response, even if idempotent complete is
 *          possible.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CompleteMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CompleteMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // CompleteMultipartUploadInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   archiveSize: "STRING_VALUE",
 *   checksum: "STRING_VALUE",
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * // { // ArchiveCreationOutput
 * //   location: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   archiveId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CompleteMultipartUploadCommandInput - {@link CompleteMultipartUploadCommandInput}
 * @returns {@link CompleteMultipartUploadCommandOutput}
 * @see {@link CompleteMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteMultipartUploadCommandOutput} for command's `response` shape.
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
 *
 * @example To complete a multipart upload
 * ```javascript
 * // The example completes a multipart upload for a 3 MiB archive.
 * const input = {
 *   accountId: "-",
 *   archiveSize: "3145728",
 *   checksum: "9628195fcdbcbbe76cdde456d4646fa7de5f219fb39823836d81f0cc0e18aa67",
 *   uploadId: "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
 *   vaultName: "my-vault"
 * };
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   archiveId: "NkbByEejwEggmBz2fTHgJrg0XBoDfjP4q6iu87-TjhqG6eGoOY9Z8i1_AUyUsuhPAdTqLHy8pTl5nfCFJmDl2yEZONi5L26Omw12vcs01MNGntHEQL8MBfGlqrEXAMPLEArchiveId",
 *   checksum: "9628195fcdbcbbe76cdde456d4646fa7de5f219fb39823836d81f0cc0e18aa67",
 *   location: "/111122223333/vaults/my-vault/archives/NkbByEejwEggmBz2fTHgJrg0XBoDfjP4q6iu87-TjhqG6eGoOY9Z8i1_AUyUsuhPAdTqLHy8pTl5nfCFJmDl2yEZONi5L26Omw12vcs01MNGntHEQL8MBfGlqrEXAMPLEArchiveId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CompleteMultipartUploadCommand extends $Command
  .classBuilder<
    CompleteMultipartUploadCommandInput,
    CompleteMultipartUploadCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "CompleteMultipartUpload", {})
  .n("GlacierClient", "CompleteMultipartUploadCommand")
  .f(void 0, void 0)
  .ser(se_CompleteMultipartUploadCommand)
  .de(de_CompleteMultipartUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteMultipartUploadInput;
      output: ArchiveCreationOutput;
    };
    sdk: {
      input: CompleteMultipartUploadCommandInput;
      output: CompleteMultipartUploadCommandOutput;
    };
  };
}
