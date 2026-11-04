// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMultipartUploadsInput, ListMultipartUploadsOutput } from "../models/models_0";
import { ListMultipartUploads$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandInput extends ListMultipartUploadsInput {}
/**
 * @public
 *
 * The output of {@link ListMultipartUploadsCommand}.
 */
export interface ListMultipartUploadsCommandOutput extends ListMultipartUploadsOutput, __MetadataBearer {}

/**
 * This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an InitiateMultipartUpload request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order.
 *
 * The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a `marker` at which to continue the list; if there are no more items the `marker` is `null`. To return a list of multipart uploads that begins at a specific upload, set the `marker` request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the `limit` parameter in the request.
 *
 * Note the difference between this operation and listing parts (ListParts). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and the underlying REST API, see [Working with Archives in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html) and [List Multipart Uploads](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListMultipartUploadsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListMultipartUploadsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // ListMultipartUploadsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   marker: "STRING_VALUE",
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultipartUploadsOutput
 * //   UploadsList: [ // UploadsList
 * //     { // UploadListElement
 * //       MultipartUploadId: "STRING_VALUE",
 * //       VaultARN: "STRING_VALUE",
 * //       ArchiveDescription: "STRING_VALUE",
 * //       PartSizeInBytes: Number("long"),
 * //       CreationDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultipartUploadsCommandInput - {@link ListMultipartUploadsCommandInput}
 * @returns {@link ListMultipartUploadsCommandOutput}
 * @see {@link ListMultipartUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartUploadsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Returned if a required header or parameter is missing from the request.
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returned if the service cannot complete the request.
 *
 * @throws {@link GlacierServiceException}
 *
 * Base exception class for all service exceptions from Glacier service.
 *
 * @example To list all the in-progress multipart uploads for a vault
 * ```javascript
 * // The example lists all the in-progress multipart uploads for the vault named examplevault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault"
 * };
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "null",
 *   UploadsList: [
 *     {
 *       ArchiveDescription: "archive 1",
 *       CreationDate: "2012-03-19T23:20:59.130Z",
 *       MultipartUploadId: "xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev",
 *       PartSizeInBytes: 4194304,
 *       VaultARN: "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     },
 *     {
 *       ArchiveDescription: "archive 2",
 *       CreationDate: "2012-04-01T15:00:00.000Z",
 *       MultipartUploadId: "nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc",
 *       PartSizeInBytes: 4194304,
 *       VaultARN: "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     },
 *     {
 *       ArchiveDescription: "archive 3",
 *       CreationDate: "2012-03-20T17:03:43.221Z",
 *       MultipartUploadId: "qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV",
 *       PartSizeInBytes: 4194304,
 *       VaultARN: "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListMultipartUploadsCommand extends command<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput>(
  _ep0,
  _mw0,
  "ListMultipartUploads",
  ListMultipartUploads$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultipartUploadsInput;
      output: ListMultipartUploadsOutput;
    };
    sdk: {
      input: ListMultipartUploadsCommandInput;
      output: ListMultipartUploadsCommandOutput;
    };
  };
}
