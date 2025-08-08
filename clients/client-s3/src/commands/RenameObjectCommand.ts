// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RenameObjectOutput, RenameObjectRequest } from "../models/models_1";
import { de_RenameObjectCommand, se_RenameObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RenameObjectCommand}.
 */
export interface RenameObjectCommandInput extends RenameObjectRequest {}
/**
 * @public
 *
 * The output of {@link RenameObjectCommand}.
 */
export interface RenameObjectCommandOutput extends RenameObjectOutput, __MetadataBearer {}

/**
 * <p>Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class.
 *       You can use <code>RenameObject</code> by specifying an existing object’s name as the source and the new
 *       name of the object as the destination within the same directory bucket.</p>
 *          <note>
 *             <p>
 *                <code>RenameObject</code> is only supported for objects stored in the S3 Express One Zone storage
 *         class.</p>
 *          </note>
 *          <p> To prevent overwriting an object, you can use the <code>If-None-Match</code> conditional
 *       header.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>If-None-Match</b> - Renames the object only if an object
 *           with the specified name does not already exist in the directory bucket. If you don't want to
 *           overwrite an existing object, you can add the <code>If-None-Match</code> conditional header with the
 *           value <code>‘*’</code> in the <code>RenameObject</code> request. Amazon S3 then returns a <code>412
 *             Precondition Failed</code> error if the object with the specified name already exists. For more
 *           information, see <a href="https://datatracker.ietf.org/doc/rfc7232/">RFC 7232</a>.</p>
 *             </li>
 *          </ul>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p> To grant access to the <code>RenameObject</code> operation on a directory bucket, we
 *             recommend that you use the <code>CreateSession</code> operation for session-based authorization.
 *             Specifically, you grant the <code>s3express:CreateSession</code> permission to the directory
 *             bucket in a bucket policy or an IAM identity-based policy. Then, you make the
 *               <code>CreateSession</code> API call on the directory bucket to obtain a session token. With the
 *             session token in your request header, you can make API requests to this operation. After the
 *             session token expires, you make another <code>CreateSession</code> API call to generate a new
 *             session token for use. The Amazon Web Services CLI and SDKs will create and manage your session including
 *             refreshing the session token automatically to avoid service interruptions when a session expires.
 *             In your bucket policy, you can specify the <code>s3express:SessionMode</code> condition key to
 *             control who can create a <code>ReadWrite</code> or <code>ReadOnly</code> session. A
 *               <code>ReadWrite</code> session is required for executing all the Zonal endpoint API operations,
 *             including <code>RenameObject</code>. For more information about authorization, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html">
 *                      <code>CreateSession</code>
 *                   </a>. To learn more about Zonal endpoint API operations, see
 *               <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-create-session.html">Authorizing Zonal endpoint API operations with CreateSession</a> in the <i>Amazon S3 User
 *               Guide</i>. </p>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>
 *                      <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, RenameObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, RenameObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // RenameObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   RenameSource: "STRING_VALUE", // required
 *   DestinationIfMatch: "STRING_VALUE",
 *   DestinationIfNoneMatch: "STRING_VALUE",
 *   DestinationIfModifiedSince: new Date("TIMESTAMP"),
 *   DestinationIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   SourceIfMatch: "STRING_VALUE",
 *   SourceIfNoneMatch: "STRING_VALUE",
 *   SourceIfModifiedSince: new Date("TIMESTAMP"),
 *   SourceIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RenameObjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RenameObjectCommandInput - {@link RenameObjectCommandInput}
 * @returns {@link RenameObjectCommandOutput}
 * @see {@link RenameObjectCommandInput} for command's `input` shape.
 * @see {@link RenameObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link IdempotencyParameterMismatch} (client fault)
 *  <p>Parameters on this idempotent request are inconsistent with parameters used in previous request(s). </p>
 *          <p>For a list of error codes and more information on Amazon S3 errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">Error codes</a>.</p>
 *          <note>
 *             <p>Idempotency ensures that an API request completes no more than one time. With an idempotent
 *         request, if the original request completes successfully, any subsequent retries complete successfully
 *         without performing any further actions.</p>
 *          </note>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class RenameObjectCommand extends $Command
  .classBuilder<
    RenameObjectCommandInput,
    RenameObjectCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "RenameObject", {})
  .n("S3Client", "RenameObjectCommand")
  .f(void 0, void 0)
  .ser(se_RenameObjectCommand)
  .de(de_RenameObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenameObjectRequest;
      output: {};
    };
    sdk: {
      input: RenameObjectCommandInput;
      output: RenameObjectCommandOutput;
    };
  };
}
