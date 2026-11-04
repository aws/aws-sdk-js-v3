// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep9, _mw4, command } from "../commandBuilder";
import type { WriteGetObjectResponseRequest } from "../models/models_1";
import { WriteGetObjectResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link WriteGetObjectResponseCommand}.
 */
export interface WriteGetObjectResponseCommandInput extends Omit<WriteGetObjectResponseRequest, "Body"> {
  Body?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link WriteGetObjectResponseCommand}.
 */
export interface WriteGetObjectResponseCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Passes transformed objects to a `GetObject` operation when using Object Lambda access points. For information about Object Lambda access points, see [Transforming objects with Object Lambda access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html) in the *Amazon S3 User Guide*.
 *
 * This operation supports metadata that can be returned by [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html), in addition to `RequestRoute`, `RequestToken`, `StatusCode`, `ErrorCode`, and `ErrorMessage`. The `GetObject` response metadata is supported so that the `WriteGetObjectResponse` caller, typically an Lambda function, can provide the same metadata when it internally invokes `GetObject`. When `WriteGetObjectResponse` is called by a customer-owned Lambda function, the metadata returned to the end user `GetObject` call might differ from what Amazon S3 would normally return.
 *
 * You can include any number of metadata headers. When including a metadata header, it should be prefaced with `x-amz-meta`. For example, `x-amz-meta-my-custom-header: MyCustomValue`. The primary use case for this is to forward `GetObject` metadata.
 *
 * Amazon Web Services provides some prebuilt Lambda functions that you can use with S3 Object Lambda to detect and redact personally identifiable information (PII) and decompress S3 objects. These Lambda functions are available in the Amazon Web Services Serverless Application Repository, and can be selected through the Amazon Web Services Management Console when you create your Object Lambda access point.
 *
 * Example 1: PII Access Control - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically detects personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.
 *
 * Example 2: PII Redaction - This Lambda function uses Amazon Comprehend, a natural language processing (NLP) service using machine learning to find insights and relationships in text. It automatically redacts personally identifiable information (PII) such as names, addresses, dates, credit card numbers, and social security numbers from documents in your Amazon S3 bucket.
 *
 * Example 3: Decompression - The Lambda function S3ObjectLambdaDecompression, is equipped to decompress objects stored in S3 in one of six compressed file formats including bzip2, gzip, snappy, zlib, zstandard and ZIP.
 *
 * For information on how to view and use these functions, see [Using Amazon Web Services built Lambda functions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-examples.html) in the *Amazon S3 User Guide*.
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, WriteGetObjectResponseCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, WriteGetObjectResponseCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // WriteGetObjectResponseRequest
 *   RequestRoute: "STRING_VALUE", // required
 *   RequestToken: "STRING_VALUE", // required
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 *   StatusCode: Number("int"),
 *   ErrorCode: "STRING_VALUE",
 *   ErrorMessage: "STRING_VALUE",
 *   AcceptRanges: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   ContentDisposition: "STRING_VALUE",
 *   ContentEncoding: "STRING_VALUE",
 *   ContentLanguage: "STRING_VALUE",
 *   ContentLength: Number("long"),
 *   ContentRange: "STRING_VALUE",
 *   ContentType: "STRING_VALUE",
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
 *   DeleteMarker: true || false,
 *   ETag: "STRING_VALUE",
 *   Expires: new Date("TIMESTAMP"),
 *   Expiration: "STRING_VALUE",
 *   LastModified: new Date("TIMESTAMP"),
 *   MissingMeta: Number("int"),
 *   Metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ObjectLockMode: "GOVERNANCE" || "COMPLIANCE",
 *   ObjectLockLegalHoldStatus: "ON" || "OFF",
 *   ObjectLockRetainUntilDate: new Date("TIMESTAMP"),
 *   PartsCount: Number("int"),
 *   ReplicationStatus: "COMPLETE" || "PENDING" || "FAILED" || "REPLICA" || "COMPLETED",
 *   RequestCharged: "requester",
 *   Restore: "STRING_VALUE",
 *   ServerSideEncryption: "AES256" || "aws:fsx" || "aws:backup" || "aws:kms" || "aws:kms:dsse",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSEKMSKeyId: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE" || "FSX_OPENZFS" || "FSX_ONTAP" || "AWS_BACKUP_WARM" || "AWS_BACKUP_LOW_COST_WARM",
 *   TagCount: Number("int"),
 *   VersionId: "STRING_VALUE",
 *   BucketKeyEnabled: true || false,
 * };
 * const command = new WriteGetObjectResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param WriteGetObjectResponseCommandInput - {@link WriteGetObjectResponseCommandInput}
 * @returns {@link WriteGetObjectResponseCommandOutput}
 * @see {@link WriteGetObjectResponseCommandInput} for command's `input` shape.
 * @see {@link WriteGetObjectResponseCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class WriteGetObjectResponseCommand extends command<WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput>(
  _ep9,
  _mw4,
  "WriteGetObjectResponse",
  WriteGetObjectResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: WriteGetObjectResponseRequest;
      output: {};
    };
    sdk: {
      input: WriteGetObjectResponseCommandInput;
      output: WriteGetObjectResponseCommandOutput;
    };
  };
}
