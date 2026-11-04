// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw12, command } from "../commandBuilder";
import type { SelectObjectContentOutput, SelectObjectContentRequest } from "../models/models_1";
import { SelectObjectContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SelectObjectContentCommand}.
 */
export interface SelectObjectContentCommandInput extends SelectObjectContentRequest {}
/**
 * @public
 *
 * The output of {@link SelectObjectContentCommand}.
 */
export interface SelectObjectContentCommandOutput extends SelectObjectContentOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * This action filters the contents of an Amazon S3 object based on a simple structured query language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON, CSV, or Apache Parquet) of the object. Amazon S3 uses this format to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response.
 *
 * This functionality is not supported for Amazon S3 on Outposts.
 *
 * For more information about Amazon S3 Select, see [Selecting Content from Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/selecting-content-from-objects.html) and [SELECT Command](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3:GetObject` permission for this operation. Amazon S3 Select does not support anonymous access. For more information about permissions, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html) in the *Amazon S3 User Guide*.
 *
 * - **Object Data Formats**
 *
 *   You can use Amazon S3 Select to query objects that have the following format properties:
 *
 *   - *CSV, JSON, and Parquet* - Objects must be in CSV, JSON, or Parquet format.
 *   - *UTF-8* - UTF-8 is the only encoding type Amazon S3 Select supports.
 *   - *GZIP or BZIP2* - CSV and JSON files can be compressed using GZIP or BZIP2. GZIP and BZIP2 are the only compression formats that Amazon S3 Select supports for CSV and JSON files. Amazon S3 Select supports columnar compression for Parquet using GZIP or Snappy. Amazon S3 Select does not support whole-object compression for Parquet objects.
 *   - *Server-side encryption* - Amazon S3 Select supports querying objects that are protected with server-side encryption.
 *
 *     For objects that are encrypted with customer-provided encryption keys (SSE-C), you must use HTTPS, and you must use the headers that are documented in the [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html). For more information about SSE-C, see [Server-Side Encryption (Using Customer-Provided Encryption Keys)](https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html) in the *Amazon S3 User Guide*.
 *
 *     For objects that are encrypted with Amazon S3 managed keys (SSE-S3) and Amazon Web Services KMS keys (SSE-KMS), server-side encryption is handled transparently, so you don't need to specify anything. For more information about server-side encryption, including SSE-S3 and SSE-KMS, see [Protecting Data Using Server-Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html) in the *Amazon S3 User Guide*.
 *
 * - **Working with the Response Body**
 *
 *   Given the response size is unknown, Amazon S3 Select streams the response as a series of messages and includes a `Transfer-Encoding` header with `chunked` as its value in the response. For more information, see [Appendix: SelectObjectContent Response](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTSelectObjectAppendix.html).
 *
 * - **GetObject Support**
 *
 *   The `SelectObjectContent` action does not support the following `GetObject` functionality. For more information, see [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html).
 *
 *   - `Range`: Although you can specify a scan range for an Amazon S3 Select request (see [SelectObjectContentRequest - ScanRange](https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html#AmazonS3-SelectObjectContent-request-ScanRange) in the request parameters), you cannot specify the range of bytes of an object to return.
 *   - The `GLACIER`, `DEEP_ARCHIVE`, and `REDUCED_REDUNDANCY` storage classes, or the `ARCHIVE_ACCESS` and `DEEP_ARCHIVE_ACCESS` access tiers of the `INTELLIGENT_TIERING` storage class: You cannot query objects in the `GLACIER`, `DEEP_ARCHIVE`, or `REDUCED_REDUNDANCY` storage classes, nor objects in the `ARCHIVE_ACCESS` or `DEEP_ARCHIVE_ACCESS` access tiers of the `INTELLIGENT_TIERING` storage class. For more information about storage classes, see [Using Amazon S3 storage classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html) in the *Amazon S3 User Guide*.
 *
 * - **Special Errors**
 *
 *   For a list of special errors for this operation, see [List of SELECT Object Content Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#SelectObjectContentErrorCodeList)
 *
 * The following operations are related to `SelectObjectContent`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [GetBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html)
 * - [PutBucketLifecycleConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, SelectObjectContentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, SelectObjectContentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // SelectObjectContentRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   Expression: "STRING_VALUE", // required
 *   ExpressionType: "SQL", // required
 *   RequestProgress: { // RequestProgress
 *     Enabled: true || false,
 *   },
 *   InputSerialization: { // InputSerialization
 *     CSV: { // CSVInput
 *       FileHeaderInfo: "USE" || "IGNORE" || "NONE",
 *       Comments: "STRING_VALUE",
 *       QuoteEscapeCharacter: "STRING_VALUE",
 *       RecordDelimiter: "STRING_VALUE",
 *       FieldDelimiter: "STRING_VALUE",
 *       QuoteCharacter: "STRING_VALUE",
 *       AllowQuotedRecordDelimiter: true || false,
 *     },
 *     CompressionType: "NONE" || "GZIP" || "BZIP2",
 *     JSON: { // JSONInput
 *       Type: "DOCUMENT" || "LINES",
 *     },
 *     Parquet: {},
 *   },
 *   OutputSerialization: { // OutputSerialization
 *     CSV: { // CSVOutput
 *       QuoteFields: "ALWAYS" || "ASNEEDED",
 *       QuoteEscapeCharacter: "STRING_VALUE",
 *       RecordDelimiter: "STRING_VALUE",
 *       FieldDelimiter: "STRING_VALUE",
 *       QuoteCharacter: "STRING_VALUE",
 *     },
 *     JSON: { // JSONOutput
 *       RecordDelimiter: "STRING_VALUE",
 *     },
 *   },
 *   ScanRange: { // ScanRange
 *     Start: Number("long"),
 *     End: Number("long"),
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new SelectObjectContentCommand(input);
 * const response = await client.send(command);
 * // { // SelectObjectContentOutput
 * //   Payload: { // SelectObjectContentEventStream Union: only one key present
 * //     Records: { // RecordsEvent
 * //       Payload: new Uint8Array(),
 * //     },
 * //     Stats: { // StatsEvent
 * //       Details: { // Stats
 * //         BytesScanned: Number("long"),
 * //         BytesProcessed: Number("long"),
 * //         BytesReturned: Number("long"),
 * //       },
 * //     },
 * //     Progress: { // ProgressEvent
 * //       Details: { // Progress
 * //         BytesScanned: Number("long"),
 * //         BytesProcessed: Number("long"),
 * //         BytesReturned: Number("long"),
 * //       },
 * //     },
 * //     Cont: {},
 * //     End: {},
 * //   },
 * // };
 *
 * ```
 *
 * @param SelectObjectContentCommandInput - {@link SelectObjectContentCommandInput}
 * @returns {@link SelectObjectContentCommandOutput}
 * @see {@link SelectObjectContentCommandInput} for command's `input` shape.
 * @see {@link SelectObjectContentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class SelectObjectContentCommand extends command<SelectObjectContentCommandInput, SelectObjectContentCommandOutput>(
  _ep5,
  _mw12,
  "SelectObjectContent",
  SelectObjectContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SelectObjectContentRequest;
      output: SelectObjectContentOutput;
    };
    sdk: {
      input: SelectObjectContentCommandInput;
      output: SelectObjectContentCommandOutput;
    };
  };
}
