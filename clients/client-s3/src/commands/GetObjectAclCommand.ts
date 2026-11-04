// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetObjectAclOutput, GetObjectAclRequest } from "../models/models_0";
import { GetObjectAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandInput extends GetObjectAclRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAclCommand}.
 */
export interface GetObjectAclCommandOutput extends GetObjectAclOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns the access control list (ACL) of an object. To use this operation, you must have `s3:GetObjectAcl` permissions or `READ_ACP` access to the object. For more information, see [Mapping of ACL permissions and access policy permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#acl-access-policy-permission-mapping) in the *Amazon S3 User Guide*
 *
 * This functionality is not supported for Amazon S3 on Outposts.
 *
 * By default, GET returns ACL information about the current version of an object. To return ACL information about a different version, use the versionId subresource.
 *
 * > **Note:** If your bucket uses the bucket owner enforced setting for S3 Object Ownership, requests to read ACLs are still supported and return the `bucket-owner-full-control` ACL with the owner being the account that created the bucket. For more information, see [Controlling object ownership and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `GetObjectAcl`:
 *
 * - [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html)
 * - [GetObjectAttributes](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html)
 * - [DeleteObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html)
 * - [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAclCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectAclRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectAclOutput
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   Grants: [ // Grants
 * //     { // Grant
 * //       Grantee: { // Grantee
 * //         DisplayName: "STRING_VALUE",
 * //         EmailAddress: "STRING_VALUE",
 * //         ID: "STRING_VALUE",
 * //         URI: "STRING_VALUE",
 * //         Type: "CanonicalUser" || "AmazonCustomerByEmail" || "Group", // required
 * //       },
 * //       Permission: "FULL_CONTROL" || "WRITE" || "WRITE_ACP" || "READ" || "READ_ACP",
 * //     },
 * //   ],
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param GetObjectAclCommandInput - {@link GetObjectAclCommandInput}
 * @returns {@link GetObjectAclCommandOutput}
 * @see {@link GetObjectAclCommandInput} for command's `input` shape.
 * @see {@link GetObjectAclCommandOutput} for command's `response` shape.
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
 * @example To retrieve object ACL
 * ```javascript
 * // The following example retrieves access control list (ACL) of an object.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new GetObjectAclCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Grants: [
 *     {
 *       Grantee: {
 *         DisplayName: "owner-display-name",
 *         ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         Type: "CanonicalUser"
 *       },
 *       Permission: "WRITE"
 *     },
 *     {
 *       Grantee: {
 *         DisplayName: "owner-display-name",
 *         ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         Type: "CanonicalUser"
 *       },
 *       Permission: "WRITE_ACP"
 *     },
 *     {
 *       Grantee: {
 *         DisplayName: "owner-display-name",
 *         ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         Type: "CanonicalUser"
 *       },
 *       Permission: "READ"
 *     },
 *     {
 *       Grantee: {
 *         DisplayName: "owner-display-name",
 *         ID: "852b113eexamplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc",
 *         Type: "CanonicalUser"
 *       },
 *       Permission: "READ_ACP"
 *     }
 *   ],
 *   Owner: {
 *     DisplayName: "owner-display-name",
 *     ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetObjectAclCommand extends command<GetObjectAclCommandInput, GetObjectAclCommandOutput>(
  _ep0,
  _mw0,
  "GetObjectAcl",
  GetObjectAcl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectAclRequest;
      output: GetObjectAclOutput;
    };
    sdk: {
      input: GetObjectAclCommandInput;
      output: GetObjectAclCommandOutput;
    };
  };
}
