// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBucketReplicationRequest } from "../models/models_0";
import { de_DeleteBucketReplicationCommand, se_DeleteBucketReplicationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketReplicationCommand}.
 */
export interface DeleteBucketReplicationCommandInput extends DeleteBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketReplicationCommand}.
 */
export interface DeleteBucketReplicationCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To
 *             delete an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Deletes the replication configuration from the specified S3 on Outposts bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3-outposts:PutReplicationConfiguration</code> action. The Outposts bucket owner
 *          has this permission by default and can grant it to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with
 *             S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to
 *             S3 on Outposts buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for
 *             a replication configuration to all S3 on Outposts systems. Therefore, the replication
 *             configuration that's returned by a <code>GET</code> request soon after a
 *                <code>PUT</code> or <code>DELETE</code> request might return a more recent result
 *             than what's on the Outpost. If an Outpost is offline, the delay in updating the
 *             replication configuration on that Outpost can be significant.</p>
 *          </note>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html#API_control_DeleteBucketReplication_Examples">Examples</a> section.</p>
 *          <p>For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following operations are related to <code>DeleteBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteBucketReplicationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteBucketReplicationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteBucketReplicationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new DeleteBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketReplicationCommandInput - {@link DeleteBucketReplicationCommandInput}
 * @returns {@link DeleteBucketReplicationCommandOutput}
 * @see {@link DeleteBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteBucketReplicationCommand extends $Command
  .classBuilder<
    DeleteBucketReplicationCommandInput,
    DeleteBucketReplicationCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteBucketReplication", {})
  .n("S3ControlClient", "DeleteBucketReplicationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBucketReplicationCommand)
  .de(de_DeleteBucketReplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketReplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketReplicationCommandInput;
      output: DeleteBucketReplicationCommandOutput;
    };
  };
}
