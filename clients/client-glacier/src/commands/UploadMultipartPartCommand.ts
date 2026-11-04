// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadMultipartPartInput, UploadMultipartPartOutput } from "../models/models_0";
import { UploadMultipartPart$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandInput extends Omit<UploadMultipartPartInput, "body"> {
  body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadMultipartPartCommand}.
 */
export interface UploadMultipartPartCommandOutput extends UploadMultipartPartOutput, __MetadataBearer {}

/**
 * This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.
 *
 * Amazon Glacier rejects your upload part request if any of the following conditions is true:
 *
 * - **SHA256 tree hash does not match**To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see [Computing Checksums](https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html).
 * - **Part size does not match**The size of each part except the last must match the size specified in the corresponding InitiateMultipartUpload request. The size of the last part must be the same size as, or smaller than, the specified size.
 *
 *   > **Note:** If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.
 * - **Range does not align**The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail.
 *
 * This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and underlying REST API, see [Uploading Large Archives in Parts (Multipart Upload)](https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html) and [Upload Part](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, UploadMultipartPartCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, UploadMultipartPartCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // UploadMultipartPartInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 *   range: "STRING_VALUE",
 *   body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadMultipartPartOutput
 * //   checksum: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UploadMultipartPartCommandInput - {@link UploadMultipartPartCommandInput}
 * @returns {@link UploadMultipartPartCommandOutput}
 * @see {@link UploadMultipartPartCommandInput} for command's `input` shape.
 * @see {@link UploadMultipartPartCommandOutput} for command's `response` shape.
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
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.
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
 * @example To upload the first part of an archive
 * ```javascript
 * // The example uploads the first 1 MiB (1024 x 1024 bytes) part of an archive.
 * const input = {
 *   accountId: "-",
 *   body: "part1",
 *   checksum: "c06f7cd4baacb087002a99a5f48bf953",
 *   range: "bytes 0-1048575/*",
 *   uploadId: "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
 *   vaultName: "examplevault"
 * };
 * const command = new UploadMultipartPartCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checksum: "c06f7cd4baacb087002a99a5f48bf953"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UploadMultipartPartCommand extends command<UploadMultipartPartCommandInput, UploadMultipartPartCommandOutput>(
  _ep0,
  _mw0,
  "UploadMultipartPart",
  UploadMultipartPart$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadMultipartPartInput;
      output: UploadMultipartPartOutput;
    };
    sdk: {
      input: UploadMultipartPartCommandInput;
      output: UploadMultipartPartCommandOutput;
    };
  };
}
