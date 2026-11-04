// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw5, command } from "../commandBuilder";
import type { DeleteObjectsOutput, DeleteObjectsRequest } from "../models/models_0";
import { DeleteObjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteObjectsCommand}.
 */
export interface DeleteObjectsCommandInput extends DeleteObjectsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectsCommand}.
 */
export interface DeleteObjectsCommandOutput extends DeleteObjectsOutput, __MetadataBearer {}

/**
 * This operation enables you to delete multiple objects from a bucket using a single HTTP request. If you know the object keys that you want to delete, then this operation provides a suitable alternative to sending individual delete requests, reducing per-request overhead.
 *
 * The request can contain a list of up to 1,000 keys that you want to delete. In the XML, you provide the object key names, and optionally, version IDs if you want to delete a specific version of the object from a versioning-enabled bucket. For each key, Amazon S3 performs a delete operation and returns the result of that delete, success or failure, in the response. If the object specified in the request isn't found, Amazon S3 confirms the deletion by returning the result as deleted.
 *
 * > **Note:**
 * >
 * > - **Directory buckets** - S3 Versioning isn't enabled and supported for directory buckets.
 * > - **Directory buckets** - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format `https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name`. Path-style requests are not supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * The operation supports two modes for the response: verbose and quiet. By default, the operation uses verbose mode in which the response includes the result of deletion of each key in your request. In quiet mode the response includes only keys where the delete operation encountered an error. For a successful deletion in a quiet mode, the operation does not return any information about the delete in the response body.
 *
 * When performing this action on an MFA Delete enabled bucket, that attempts to delete any versioned objects, you must include an MFA token. If you do not provide one, the entire request will fail, even if there are non-versioned objects you are trying to delete. If you provide an invalid token, whether there are versioned keys in the request or not, the entire Multi-Object Delete request will fail. For information about MFA Delete, see [MFA Delete](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete) in the *Amazon S3 User Guide*.
 *
 * > **Note:** **Directory buckets** - MFA delete is not supported by directory buckets.
 *
 * - **Permissions**
 *
 *   - **General purpose bucket permissions** - The following permissions are required in your policies when your `DeleteObjects` request includes specific headers.
 *
 *     - **`s3:DeleteObject`** - To delete an object from a bucket, you must always specify the `s3:DeleteObject` permission.
 *     - **`s3:DeleteObjectVersion`** - To delete a specific version of an object from a versioning-enabled bucket, you must specify the `s3:DeleteObjectVersion` permission.
 *
 *       > **Note:** If the `s3:DeleteObject` or `s3:DeleteObjectVersion` permissions are explicitly denied in your bucket policy, attempts to delete any unversioned objects result in a `403 Access Denied` error.
 *   - **Directory bucket permissions** - To grant access to this API operation on a directory bucket, we recommend that you use the [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html) API operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html).
 *
 * - **Content-MD5 request header**
 *
 *   - **General purpose bucket** - The Content-MD5 request header is required for all Multi-Object Delete requests. Amazon S3 uses the header value to ensure that your request body has not been altered in transit.
 *   - **Directory bucket** - The Content-MD5 request header or a additional checksum request header (including `x-amz-checksum-crc32`, `x-amz-checksum-crc32c`, `x-amz-checksum-sha1`, or `x-amz-checksum-sha256`) is required for all Multi-Object Delete requests.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * The following operations are related to `DeleteObjects`:
 *
 * - [CreateMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html)
 * - [UploadPart](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html)
 * - [CompleteMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html)
 * - [ListParts](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html)
 * - [AbortMultipartUpload](https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteObjectsRequest
 *   Bucket: "STRING_VALUE", // required
 *   Delete: { // Delete
 *     Objects: [ // ObjectIdentifierList // required
 *       { // ObjectIdentifier
 *         Key: "STRING_VALUE", // required
 *         VersionId: "STRING_VALUE",
 *         ETag: "STRING_VALUE",
 *         LastModifiedTime: new Date("TIMESTAMP"),
 *         Size: Number("long"),
 *       },
 *     ],
 *     Quiet: true || false,
 *   },
 *   MFA: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   BypassGovernanceRetention: true || false,
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectsOutput
 * //   Deleted: [ // DeletedObjects
 * //     { // DeletedObject
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       DeleteMarker: true || false,
 * //       DeleteMarkerVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequestCharged: "requester",
 * //   Errors: [ // Errors
 * //     { // Error
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteObjectsCommandInput - {@link DeleteObjectsCommandInput}
 * @returns {@link DeleteObjectsCommandOutput}
 * @see {@link DeleteObjectsCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To delete multiple object versions from a versioned bucket
 * ```javascript
 * // The following example deletes objects from a bucket. The request specifies object versions. S3 deletes specific object versions and returns the key and versions of deleted objects in the response.
 * const input = {
 *   Bucket: "examplebucket",
 *   Delete: {
 *     Objects: [
 *       {
 *         Key: "HappyFace.jpg",
 *         VersionId: "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
 *       },
 *       {
 *         Key: "HappyFace.jpg",
 *         VersionId: "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd"
 *       }
 *     ],
 *     Quiet: false
 *   }
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Deleted: [
 *     {
 *       Key: "HappyFace.jpg",
 *       VersionId: "yoz3HB.ZhCS_tKVEmIOr7qYyyAaZSKVd"
 *     },
 *     {
 *       Key: "HappyFace.jpg",
 *       VersionId: "2LWg7lQLnY41.maGB5Z6SWW.dcq0vx7b"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To delete multiple objects from a versioned bucket
 * ```javascript
 * // The following example deletes objects from a bucket. The bucket is versioned, and the request does not specify the object version to delete. In this case, all versions remain in the bucket and S3 adds a delete marker.
 * const input = {
 *   Bucket: "examplebucket",
 *   Delete: {
 *     Objects: [
 *       {
 *         Key: "objectkey1"
 *       },
 *       {
 *         Key: "objectkey2"
 *       }
 *     ],
 *     Quiet: false
 *   }
 * };
 * const command = new DeleteObjectsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Deleted: [
 *     {
 *       DeleteMarker: true,
 *       DeleteMarkerVersionId: "A._w1z6EFiCF5uhtQMDal9JDkID9tQ7F",
 *       Key: "objectkey1"
 *     },
 *     {
 *       DeleteMarker: true,
 *       DeleteMarkerVersionId: "iOd_ORxhkKe_e8G8_oSGxt2PjsCZKlkt",
 *       Key: "objectkey2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteObjectsCommand extends command<DeleteObjectsCommandInput, DeleteObjectsCommandOutput>(
  _ep5,
  _mw5,
  "DeleteObjects",
  DeleteObjects$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteObjectsRequest;
      output: DeleteObjectsOutput;
    };
    sdk: {
      input: DeleteObjectsCommandInput;
      output: DeleteObjectsCommandOutput;
    };
  };
}
