// smithy-typescript generated code
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import { de_ListRegionalBucketsCommand, se_ListRegionalBucketsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegionalBucketsCommand}.
 */
export interface ListRegionalBucketsCommandInput extends ListRegionalBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegionalBucketsCommand}.
 */
export interface ListRegionalBucketsCommandOutput extends ListRegionalBucketsResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListRegionalBucketsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListRegionalBucketsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new S3ControlClient(config);
 * const input = { // ListRegionalBucketsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OutpostId: "STRING_VALUE",
 * };
 * const command = new ListRegionalBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegionalBucketsResult
 * //   RegionalBucketList: [ // RegionalBucketList
 * //     { // RegionalBucket
 * //       Bucket: "STRING_VALUE", // required
 * //       BucketArn: "STRING_VALUE",
 * //       PublicAccessBlockEnabled: true || false, // required
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       OutpostId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegionalBucketsCommandInput - {@link ListRegionalBucketsCommandInput}
 * @returns {@link ListRegionalBucketsCommandOutput}
 * @see {@link ListRegionalBucketsCommandInput} for command's `input` shape.
 * @see {@link ListRegionalBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class ListRegionalBucketsCommand extends $Command
  .classBuilder<
    ListRegionalBucketsCommandInput,
    ListRegionalBucketsCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    OutpostId: { type: "contextParams", name: "OutpostId" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getRedirectFromPostIdPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListRegionalBuckets", {})
  .n("S3ControlClient", "ListRegionalBucketsCommand")
  .f(void 0, void 0)
  .ser(se_ListRegionalBucketsCommand)
  .de(de_ListRegionalBucketsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegionalBucketsRequest;
      output: ListRegionalBucketsResult;
    };
    sdk: {
      input: ListRegionalBucketsCommandInput;
      output: ListRegionalBucketsCommandOutput;
    };
  };
}
