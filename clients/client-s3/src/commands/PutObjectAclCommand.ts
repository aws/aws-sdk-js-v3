// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw5, command } from "../commandBuilder";
import type { PutObjectAclOutput, PutObjectAclRequest } from "../models/models_0";
import { PutObjectAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutObjectAclCommand}.
 */
export interface PutObjectAclCommandInput extends PutObjectAclRequest {}
/**
 * @public
 *
 * The output of {@link PutObjectAclCommand}.
 */
export interface PutObjectAclCommandOutput extends PutObjectAclOutput, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > End of support notice: As of October 1, 2025, Amazon S3 has discontinued support for Email Grantee Access Control Lists (ACLs). If you attempt to use an Email Grantee ACL in a request after October 1, 2025, the request will receive an `HTTP 405` (Method Not Allowed) error.
 * >
 * > This change affects the following Amazon Web Services Regions: US East (N. Virginia), US West (N. California), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Europe (Ireland), and South America (São Paulo).
 *
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Uses the `acl` subresource to set the access control list (ACL) permissions for a new or existing object in an S3 bucket. You must have the `WRITE_ACP` permission to set the ACL of an object. For more information, see [What permissions can I grant?](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions) in the *Amazon S3 User Guide*.
 *
 * This functionality is not supported for Amazon S3 on Outposts.
 *
 * Depending on your application needs, you can choose to set the ACL on an object using either the request body or the headers. For example, if you have an existing application that updates a bucket ACL using the request body, you can continue to use that approach. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Important:** If your bucket uses the bucket owner enforced setting for S3 Object Ownership, ACLs are disabled and no longer affect permissions. You must use policies to grant access to your bucket and the objects in it. Requests to set ACLs or update ACLs fail and return the `AccessControlListNotSupported` error code. Requests to read ACLs are still supported. For more information, see [Controlling object ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   You can set access permissions using one of the following methods:
 *
 *   - Specify a canned ACL with the `x-amz-acl` request header. Amazon S3 supports a set of predefined ACLs, known as canned ACLs. Each canned ACL has a predefined set of grantees and permissions. Specify the canned ACL name as the value of `x-amz-ac`l. If you use this header, you cannot use other access control-specific headers in your request. For more information, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL).
 *   - Specify access permissions explicitly with the `x-amz-grant-read`, `x-amz-grant-read-acp`, `x-amz-grant-write-acp`, and `x-amz-grant-full-control` headers. When using these headers, you specify explicit access permissions and grantees (Amazon Web Services accounts or Amazon S3 groups) who will receive the permission. If you use these ACL-specific headers, you cannot use `x-amz-acl` header to set a canned ACL. These parameters map to the set of permissions that Amazon S3 supports in an ACL. For more information, see [Access Control List (ACL) Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html).
 *
 *     You specify each grantee as a type=value pair, where the type is one of the following:
 *
 *     - `id` – if the value specified is the canonical user ID of an Amazon Web Services account
 *     - `uri` – if you are granting permissions to a predefined group
 *     - `emailAddress` – if the value specified is the email address of an Amazon Web Services account
 *
 *       > **Note:**
 *       >
 *       > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
 *       >
 *       > - US East (N. Virginia)
 *       > - US West (N. California)
 *       > - US West (Oregon)
 *       > - Asia Pacific (Singapore)
 *       > - Asia Pacific (Sydney)
 *       > - Asia Pacific (Tokyo)
 *       > - Europe (Ireland)
 *       > - South America (São Paulo)
 *       >
 *       > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
 *
 *     For example, the following `x-amz-grant-read` header grants list objects permission to the two Amazon Web Services accounts identified by their email addresses.
 *
 *     `x-amz-grant-read: emailAddress="xyz@amazon.com", emailAddress="abc@amazon.com"`
 *
 *   You can use either a canned ACL or specify access permissions explicitly. You cannot do both.
 *
 * - **Grantee Values**
 *
 *   You can specify the person (grantee) to whom you're assigning access rights (using request elements) in the following ways. For examples of how to specify these grantee values in JSON format, see the Amazon Web Services CLI example in [Enabling Amazon S3 server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html) in the *Amazon S3 User Guide*.
 *
 *   - By the person's ID:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser"><ID><>ID<></ID><DisplayName><>GranteesEmail<></DisplayName> </Grantee>`
 *
 *     DisplayName is optional and ignored in the request.
 *   - By URI:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group"><URI><>http://acs.amazonaws.com/groups/global/AuthenticatedUsers<></URI></Grantee>`
 *   - By Email address:
 *
 *     `<Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="AmazonCustomerByEmail"><EmailAddress><>Grantees@email.com<></EmailAddress>lt;/Grantee>`
 *
 *     The grantee is resolved to the CanonicalUser and, in a response to a GET Object acl request, appears as the CanonicalUser.
 *
 *     > **Note:**
 *     >
 *     > Using email addresses to specify a grantee is only supported in the following Amazon Web Services Regions:
 *     >
 *     > - US East (N. Virginia)
 *     > - US West (N. California)
 *     > - US West (Oregon)
 *     > - Asia Pacific (Singapore)
 *     > - Asia Pacific (Sydney)
 *     > - Asia Pacific (Tokyo)
 *     > - Europe (Ireland)
 *     > - South America (São Paulo)
 *     >
 *     > For a list of all the Amazon S3 supported Regions and endpoints, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) in the Amazon Web Services General Reference.
 *
 * - **Versioning**
 *
 *   The ACL of an object is set at the object version level. By default, PUT sets the ACL of the current version of an object. To set the ACL of a different version, use the `versionId` subresource.
 *
 * The following operations are related to `PutObjectAcl`:
 *
 * - [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html)
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutObjectAclRequest
 *   ACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *   AccessControlPolicy: { // AccessControlPolicy
 *     Grants: [ // Grants
 *       { // Grant
 *         Grantee: { // Grantee
 *           DisplayName: "STRING_VALUE",
 *           EmailAddress: "STRING_VALUE",
 *           ID: "STRING_VALUE",
 *           URI: "STRING_VALUE",
 *           Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 *         },
 *         Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 *       },
 *     ],
 *     Owner: { // Owner
 *       DisplayName: "STRING_VALUE",
 *       ID: "STRING_VALUE",
 *     },
 *   },
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   GrantFullControl: "STRING_VALUE",
 *   GrantRead: "STRING_VALUE",
 *   GrantReadACP: "STRING_VALUE",
 *   GrantWrite: "STRING_VALUE",
 *   GrantWriteACP: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 *   RequestPayer: "requester",
 *   VersionId: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutObjectAclCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectAclOutput
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param PutObjectAclCommandInput - {@link PutObjectAclCommandInput}
 * @returns {@link PutObjectAclCommandOutput}
 * @see {@link PutObjectAclCommandInput} for command's `input` shape.
 * @see {@link PutObjectAclCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *
 * The specified key does not exist.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To grant permissions using object ACL
 * ```javascript
 * // The following example adds grants to an object ACL. The first permission grants user1 and user2 FULL_CONTROL and the AllUsers group READ permission.
 * const input = {
 *   AccessControlPolicy:   { /* empty *\/ },
 *   Bucket: "examplebucket",
 *   GrantFullControl: "emailaddress=user1@example.com,emailaddress=user2@example.com",
 *   GrantRead: "uri=http://acs.amazonaws.com/groups/global/AllUsers",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new PutObjectAclCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutObjectAclCommand extends command<PutObjectAclCommandInput, PutObjectAclCommandOutput>(
  _ep0,
  _mw5,
  "PutObjectAcl",
  PutObjectAcl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutObjectAclRequest;
      output: PutObjectAclOutput;
    };
    sdk: {
      input: PutObjectAclCommandInput;
      output: PutObjectAclCommandOutput;
    };
  };
}
