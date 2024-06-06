// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListPartsInput, ListPartsOutput } from "../models/models_0";
import { de_ListPartsCommand, se_ListPartsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPartsCommand}.
 */
export interface ListPartsCommandInput extends ListPartsInput {}
/**
 * @public
 *
 * The output of {@link ListPartsCommand}.
 */
export interface ListPartsCommandOutput extends ListPartsOutput, __MetadataBearer {}

/**
 * <p>This operation lists the parts of an archive that have been uploaded in a specific
 *          multipart upload. You can make this request at any time during an in-progress multipart
 *          upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List
 *          Parts returns an error for completed uploads. The list returned in the List Parts response
 *          is sorted by part range. </p>
 *
 *          <p>The List Parts operation supports pagination. By default, this operation returns up
 *          to 50 uploaded parts in the response. You should always check the response for a
 *             <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of parts that begins at a
 *          specific part, set the <code>marker</code> request parameter to the value you obtained from
 *          a previous List Parts request. You can also limit the number of parts returned in the
 *          response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the
 *             <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListPartsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListPartsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListPartsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartsOutput
 * //   MultipartUploadId: "STRING_VALUE",
 * //   VaultARN: "STRING_VALUE",
 * //   ArchiveDescription: "STRING_VALUE",
 * //   PartSizeInBytes: Number("long"),
 * //   CreationDate: "STRING_VALUE",
 * //   Parts: [ // PartList
 * //     { // PartListElement
 * //       RangeInBytes: "STRING_VALUE",
 * //       SHA256TreeHash: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartsCommandInput - {@link ListPartsCommandInput}
 * @returns {@link ListPartsCommandOutput}
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
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
 * @example To list the parts of an archive that have been uploaded in a multipart upload
 * ```javascript
 * // The example lists all the parts of a multipart upload.
 * const input = {
 *   "accountId": "-",
 *   "uploadId": "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
 *   "vaultName": "examplevault"
 * };
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ArchiveDescription": "archive description",
 *   "CreationDate": "2012-03-20T17:03:43.221Z",
 *   "Marker": "null",
 *   "MultipartUploadId": "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
 *   "PartSizeInBytes": 4194304,
 *   "Parts": [
 *     {
 *       "RangeInBytes": "0-4194303",
 *       "SHA256TreeHash": "01d34dabf7be316472c93b1ef80721f5d4"
 *     },
 *     {
 *       "RangeInBytes": "4194304-8388607",
 *       "SHA256TreeHash": "0195875365afda349fc21c84c099987164"
 *     }
 *   ],
 *   "VaultARN": "arn:aws:glacier:us-west-2:012345678901:vaults/demo1-vault"
 * }
 * *\/
 * // example id: to-list-the-parts-of-an-archive-that-have-been-uploaded-in-a-multipart-upload-1481921767590
 * ```
 *
 */
export class ListPartsCommand extends $Command
  .classBuilder<
    ListPartsCommandInput,
    ListPartsCommandOutput,
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
  .s("Glacier", "ListParts", {})
  .n("GlacierClient", "ListPartsCommand")
  .f(void 0, void 0)
  .ser(se_ListPartsCommand)
  .de(de_ListPartsCommand)
  .build() {}
