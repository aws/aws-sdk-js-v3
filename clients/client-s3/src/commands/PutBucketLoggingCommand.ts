// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { PutBucketLoggingRequest } from "../models/models_0";
import { PutBucketLogging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandInput extends PutBucketLoggingRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketLoggingCommand}.
 */
export interface PutBucketLoggingCommandOutput extends __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an `HTTP 405` (Method Not Allowed) error.
 * >
 * > This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo).
 *
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. All logs are saved to buckets in the same Amazon Web Services Region as the source bucket. To set the logging status of a bucket, you must be the bucket owner.
 *
 * The bucket owner is automatically granted FULL_CONTROL to all logs. You use the `Grantee` request element to grant access to other people. The `Permissions` request element specifies the kind of access the grantee has to the logs.
 *
 * > **Important:** If the target bucket for log delivery uses the bucket owner enforced setting for S3 Object Ownership, you can't use the `Grantee` request element to grant access to others. Permissions can only be granted using policies. For more information, see [Permissions for server access log delivery](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html#grant-log-delivery-permissions-general) in the *Amazon S3 User Guide*.
 *
 * - **Grantee Values**
 *
 *   You can specify the person (grantee) to whom you're assigning access rights (by using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in [Enabling Amazon S3 server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html) in the *Amazon S3 User Guide*.
 *
 *   - By the person's ID:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>`
 *
 *     `DisplayName` is optional and ignored in the request.
 *   - By Email address:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress></Grantee>`
 *
 *     The grantee is resolved to the `CanonicalUser` and, in a response to a `GETObjectAcl` request, appears as the CanonicalUser.
 *   - By URI:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>`
 *
 * To enable logging, you use `LoggingEnabled` and its children request elements. To disable logging, you use an empty `BucketLoggingStatus` request element:
 *
 * `<BucketLoggingStatus xmlns="http://doc.s3.amazonaws.com/2006-03-01" />`
 *
 * For more information about server access logging, see [Server Access Logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html) in the *Amazon S3 User Guide*.
 *
 * For more information about creating a bucket, see [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html). For more information about returning the logging status of a bucket, see [GetBucketLogging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html).
 *
 * The following operations are related to `PutBucketLogging`:
 *
 * - [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)
 * - [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 * - [GetBucketLogging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketLoggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketLoggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketLoggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   BucketLoggingStatus: { // BucketLoggingStatus
 *     LoggingEnabled: { // LoggingEnabled
 *       TargetBucket: "STRING_VALUE", // required
 *       TargetGrants: [ // TargetGrants
 *         { // TargetGrant
 *           Grantee: { // Grantee
 *             DisplayName: "STRING_VALUE",
 *             EmailAddress: "STRING_VALUE",
 *             ID: "STRING_VALUE",
 *             URI: "STRING_VALUE",
 *             Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 *           },
 *           Permission: "FULL_CONTROL" || "READ" || "WRITE",
 *         },
 *       ],
 *       TargetPrefix: "STRING_VALUE", // required
 *       TargetObjectKeyFormat: { // TargetObjectKeyFormat
 *         SimplePrefix: {},
 *         PartitionedPrefix: { // PartitionedPrefix
 *           PartitionDateSource: "EventTime" || "DeliveryTime",
 *         },
 *       },
 *     },
 *   },
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketLoggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketLoggingCommandInput - {@link PutBucketLoggingCommandInput}
 * @returns {@link PutBucketLoggingCommandOutput}
 * @see {@link PutBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link PutBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example Set logging configuration for a bucket
 * ```javascript
 * // The following example sets logging policy on a bucket. For the Log Delivery group to deliver logs to the destination bucket, it needs permission for the READ_ACP action which the policy grants.
 * const input = {
 *   Bucket: "sourcebucket",
 *   BucketLoggingStatus: {
 *     LoggingEnabled: {
 *       TargetBucket: "targetbucket",
 *       TargetGrants: [
 *         {
 *           Grantee: {
 *             Type: "Group",
 *             URI: "http://acs.amazonaws.com/groups/global/AllUsers"
 *           },
 *           Permission: "READ"
 *         }
 *       ],
 *       TargetPrefix: "MyBucketLogs/"
 *     }
 *   }
 * };
 * const command = new PutBucketLoggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutBucketLoggingCommand extends command<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput>(
  _ep3,
  _mw3,
  "PutBucketLogging",
  PutBucketLogging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketLoggingRequest;
      output: {};
    };
    sdk: {
      input: PutBucketLoggingCommandInput;
      output: PutBucketLoggingCommandOutput;
    };
  };
}
