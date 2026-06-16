// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3/s3";
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutObjectAnnotationOutput, PutObjectAnnotationRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutObjectAnnotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutObjectAnnotationCommand}.
 */
export interface PutObjectAnnotationCommandInput extends Omit<PutObjectAnnotationRequest, "AnnotationPayload"> {
  AnnotationPayload: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutObjectAnnotationCommand}.
 */
export interface PutObjectAnnotationCommandOutput extends PutObjectAnnotationOutput, __MetadataBearer {}

/**
 * <p>Attaches an annotation to an Amazon S3 object. An annotation is a named payload of 1 byte to 1 MiB
 *       that you can associate with a specific object or object version. Each object can have up to 1,000
 *       annotations.</p>
 *          <p>For annotation naming rules and restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/annotations-overview.html">Annotation naming guidelines</a>
 *       in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>Annotations inherit the encryption of their parent object. For objects without server-side
 *       encryption, annotations are encrypted with SSE-S3 (the default for new objects). Objects
 *       encrypted with SSE-C cannot have annotations.</p>
 *          <p>To use this operation, you must have the <code>s3:PutObjectAnnotation</code> permission. If the
 *       bucket has Requester Pays enabled, you must include the <code>x-amz-request-payer</code> header.</p>
 *          <note>
 *             <p>Annotations are not supported by the following features: S3 Inventory Reports,
 *       API Gateway, S3 Storage Lens, Amazon S3 File Gateway, Amazon FSx, S3 on Outposts, and
 *       S3 Express One Zone (directory buckets).</p>
 *          </note>
 *          <p>The following operations are related to <code>PutObjectAnnotation</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAnnotation.html">GetObjectAnnotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectAnnotations.html">ListObjectAnnotations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectAnnotation.html">DeleteObjectAnnotation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectAnnotationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectAnnotationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutObjectAnnotationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   AnnotationName: "STRING_VALUE", // required
 *   AnnotationPayload: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   ObjectIfMatch: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ChecksumCRC32: "STRING_VALUE",
 *   ChecksumCRC32C: "STRING_VALUE",
 *   ChecksumCRC64NVME: "STRING_VALUE",
 *   ChecksumSHA1: "STRING_VALUE",
 *   ChecksumSHA256: "STRING_VALUE",
 *   ChecksumSHA512: "STRING_VALUE",
 *   ChecksumMD5: "STRING_VALUE",
 *   ChecksumXXHASH64: "STRING_VALUE",
 *   ChecksumXXHASH3: "STRING_VALUE",
 *   ChecksumXXHASH128: "STRING_VALUE",
 *   ContentMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutObjectAnnotationCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectAnnotationOutput
 * //   Key: "STRING_VALUE",
 * //   AnnotationName: "STRING_VALUE",
 * //   ObjectVersionId: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   ChecksumCRC32: "STRING_VALUE",
 * //   ChecksumCRC32C: "STRING_VALUE",
 * //   ChecksumCRC64NVME: "STRING_VALUE",
 * //   ChecksumSHA1: "STRING_VALUE",
 * //   ChecksumSHA256: "STRING_VALUE",
 * //   ChecksumSHA512: "STRING_VALUE",
 * //   ChecksumMD5: "STRING_VALUE",
 * //   ChecksumXXHASH64: "STRING_VALUE",
 * //   ChecksumXXHASH3: "STRING_VALUE",
 * //   ChecksumXXHASH128: "STRING_VALUE",
 * //   ChecksumType: "COMPOSITE" || "FULL_OBJECT",
 * //   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:kms" || "aws:kms:dsse",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param PutObjectAnnotationCommandInput - {@link PutObjectAnnotationCommandInput}
 * @returns {@link PutObjectAnnotationCommandOutput}
 * @see {@link PutObjectAnnotationCommandInput} for command's `input` shape.
 * @see {@link PutObjectAnnotationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link AnnotationLimitExceeded} (client fault)
 *  <p>The request would exceed the maximum number of annotations allowed per object.</p>
 *
 * @throws {@link AnnotationNameTooLong} (client fault)
 *  <p>The annotation name exceeds 512 bytes.</p>
 *
 * @throws {@link InvalidAnnotationName} (client fault)
 *  <p>The annotation name you provided is invalid.</p>
 *
 * @throws {@link InvalidRequest} (client fault)
 *  <p>A parameter or header in your request isn't valid. For details, see the description of this API
 *       operation.</p>
 *
 * @throws {@link NoSuchBucket} (client fault)
 *  <p>The specified bucket does not exist.</p>
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 * @throws {@link UnsupportedMediaType} (client fault)
 *  <p>The annotation payload is not valid UTF-8 encoded text.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class PutObjectAnnotationCommand extends $Command
  .classBuilder<
    PutObjectAnnotationCommandInput,
    PutObjectAnnotationCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
    Key: { type: "contextParams", name: "Key" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: {'httpHeader': 'x-amz-sdk-checksum-algorithm', 'name': 'ChecksumAlgorithm'},
        requestChecksumRequired: false,
      }),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "PutObjectAnnotation", {})
  .n("S3Client", "PutObjectAnnotationCommand")
  .sc(PutObjectAnnotation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutObjectAnnotationRequest;
      output: PutObjectAnnotationOutput;
    };
    sdk: {
      input: PutObjectAnnotationCommandInput;
      output: PutObjectAnnotationCommandOutput;
    };
  };
}
