// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketReplicationRequest, GetBucketReplicationResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetBucketReplication } from "../schemas/schemas_2_Bucket";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandInput extends GetBucketReplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketReplicationCommand}.
 */
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an
 *             S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a>
 *             in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Returns the replication configuration of an S3 on Outposts bucket. For more information
 *          about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>. For information about S3 replication on Outposts
 *          configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for
 *             S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for
 *             a replication configuration to all S3 on Outposts systems. Therefore, the replication
 *             configuration that's returned by a <code>GET</code> request soon after a
 *                <code>PUT</code> or <code>DELETE</code> request might return a more recent result
 *             than what's on the Outpost. If an Outpost is offline, the delay in updating the
 *             replication configuration on that Outpost can be significant.</p>
 *          </note>
 *          <p>This action requires permissions for the
 *             <code>s3-outposts:GetReplicationConfiguration</code> action. The Outposts bucket owner
 *          has this permission by default and can grant it to others. For more information about
 *          permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with
 *             S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to
 *             S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html#API_control_GetBucketReplication_Examples">Examples</a> section.</p>
 *          <p>If you include the <code>Filter</code> element in a replication configuration, you must
 *          also include the <code>DeleteMarkerReplication</code>, <code>Status</code>, and
 *             <code>Priority</code> elements. The response also returns those elements.</p>
 *          <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following operations are related to <code>GetBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketReplicationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketReplicationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetBucketReplicationRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketReplicationResult
 * //   ReplicationConfiguration: { // ReplicationConfiguration
 * //     Role: "STRING_VALUE", // required
 * //     Rules: [ // ReplicationRules // required
 * //       { // ReplicationRule
 * //         ID: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         Prefix: "STRING_VALUE",
 * //         Filter: { // ReplicationRuleFilter
 * //           Prefix: "STRING_VALUE",
 * //           Tag: { // S3Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //           And: { // ReplicationRuleAndOperator
 * //             Prefix: "STRING_VALUE",
 * //             Tags: [ // S3TagSet
 * //               {
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         Status: "Enabled" || "Disabled", // required
 * //         SourceSelectionCriteria: { // SourceSelectionCriteria
 * //           SseKmsEncryptedObjects: { // SseKmsEncryptedObjects
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //           ReplicaModifications: { // ReplicaModifications
 * //             Status: "Enabled" || "Disabled", // required
 * //           },
 * //         },
 * //         ExistingObjectReplication: { // ExistingObjectReplication
 * //           Status: "Enabled" || "Disabled", // required
 * //         },
 * //         Destination: { // Destination
 * //           Account: "STRING_VALUE",
 * //           Bucket: "STRING_VALUE", // required
 * //           ReplicationTime: { // ReplicationTime
 * //             Status: "Enabled" || "Disabled", // required
 * //             Time: { // ReplicationTimeValue
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           AccessControlTranslation: { // AccessControlTranslation
 * //             Owner: "Destination", // required
 * //           },
 * //           EncryptionConfiguration: { // EncryptionConfiguration
 * //             ReplicaKmsKeyID: "STRING_VALUE",
 * //           },
 * //           Metrics: { // Metrics
 * //             Status: "Enabled" || "Disabled", // required
 * //             EventThreshold: {
 * //               Minutes: Number("int"),
 * //             },
 * //           },
 * //           StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR",
 * //         },
 * //         DeleteMarkerReplication: { // DeleteMarkerReplication
 * //           Status: "Enabled" || "Disabled", // required
 * //         },
 * //         Bucket: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketReplicationCommandInput - {@link GetBucketReplicationCommandInput}
 * @returns {@link GetBucketReplicationCommandOutput}
 * @see {@link GetBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link GetBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetBucketReplicationCommand extends $Command
  .classBuilder<
    GetBucketReplicationCommandInput,
    GetBucketReplicationCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetBucketReplication", {})
  .n("S3ControlClient", "GetBucketReplicationCommand")
  .sc(GetBucketReplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketReplicationRequest;
      output: GetBucketReplicationResult;
    };
    sdk: {
      input: GetBucketReplicationCommandInput;
      output: GetBucketReplicationCommandOutput;
    };
  };
}
