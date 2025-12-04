// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTagsForResourceRequest, ListTagsForResourceResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListTagsForResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResult, __MetadataBearer {}

/**
 * <p>This operation allows you to list all of the tags for a specified resource. Each tag is a label consisting of a key and value. Tags can help you organize, track costs for, and control access to resources. </p>
 *          <note>
 *             <p>This operation is only supported for the following Amazon S3 resources:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging.html">General purpose buckets</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-db-tagging.html">Access Points for directory buckets</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-tagging.html">Access Points for general purpose buckets</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-tagging.html">Directory buckets</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-groups.html">S3 Storage Lens groups</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-tagging.html">S3 Access Grants instances, registered locations, and grants</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the <code>s3:ListTagsForResource</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Directory bucket permissions</dt>
 *             <dd>
 *                <p>For directory buckets, you must have the <code>s3express:ListTagsForResource</code> permission to use this operation. For more information about directory buckets policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-permissions.html">Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>For information about S3 Tagging errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3TaggingErrorCodeList">List of Amazon S3 Tagging error codes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListTagsForResourceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListTagsForResourceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListTagsForResourceRequest
 *   AccountId: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResult
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    ResourceArn: { type: "contextParams", name: "ResourceArn" },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "ListTagsForResource", {})
  .n("S3ControlClient", "ListTagsForResourceCommand")
  .sc(ListTagsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceResult;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
