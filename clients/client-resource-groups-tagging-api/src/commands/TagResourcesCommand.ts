// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TagResourcesInput, TagResourcesOutput } from "../models/models_0";
import type {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { TagResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourcesCommand}.
 */
export interface TagResourcesCommandInput extends TagResourcesInput {}
/**
 * @public
 *
 * The output of {@link TagResourcesCommand}.
 */
export interface TagResourcesCommandOutput extends TagResourcesOutput, __MetadataBearer {}

/**
 * <p>Applies one or more tags to the specified resources. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>Not all resources can have tags. For a list of services with resources that
 *                     support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the
 *                         Resource Groups Tagging API</a>. If the resource doesn't yet support
 *                     this operation, the resource's service might support tagging using its own API
 *                     operations. For more information, refer to the documentation for that
 *                     service.</p>
 *             </li>
 *             <li>
 *                <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General
 *                         Reference.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>You can only tag resources that are located in the specified Amazon Web Services Region for
 *                     the Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>To add tags to a resource, you need the necessary permissions for the service
 *                     that the resource belongs to as well as permissions for adding tags. For more
 *                     information, see the documentation for each service.</p>
 *             </li>
 *             <li>
 *                <p>When you use the <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/overview.html">Amazon Web Services Resource
 *                         Groups Tagging API</a> to update tags for Amazon Web Services CloudFormation stack
 *                     sets, Amazon Web Services calls the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html">Amazon Web Services
 *                         CloudFormation <code>UpdateStack</code>
 *                   </a> operation. This operation
 *                     may initiate additional resource property updates in addition to the desired tag
 *                     updates. To avoid unexpected resource updates, Amazon Web Services recommends that you only
 *                     apply or update tags to your CloudFormation stack sets using Amazon Web Services
 *                     CloudFormation. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *          </important>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>In addition to the <code>tag:TagResources</code> permission required by this
 *             operation, you must also have the tagging permission defined by the service that created
 *             the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code>
 *             operation, you must have both of the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>tag:TagResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:CreateTags</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>In addition, some services might have specific requirements for tagging some types
 *                 of resources. For example, to tag an Amazon S3 bucket, you must also have the
 *                     <code>s3:GetBucketTagging</code> permission. If the expected minimum permissions
 *                 don't work, check the documentation for that service's tagging APIs for more
 *                 information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, TagResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, TagResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // TagResourcesInput
 *   ResourceARNList: [ // ResourceARNListForTagUntag // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourcesCommand(input);
 * const response = await client.send(command);
 * // { // TagResourcesOutput
 * //   FailedResourcesMap: { // FailedResourcesMap
 * //     "<keys>": { // FailureInfo
 * //       StatusCode: Number("int"),
 * //       ErrorCode: "InternalServiceException" || "InvalidParameterException",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param TagResourcesCommandInput - {@link TagResourcesCommandInput}
 * @returns {@link TagResourcesCommandOutput}
 * @see {@link TagResourcesCommandInput} for command's `input` shape.
 * @see {@link TagResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request failed because of one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>A required parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A provided string parameter is malformed.</p>
 *             </li>
 *             <li>
 *                <p>An provided parameter value is out of range.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket policy for report storage</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>The partition specified in an ARN parameter in the request doesn't match the
 *                     partition where you invoked the operation. The partition is specified by the
 *                     second field of the ARN.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request failed because it exceeded the allowed frequency of submitted
 *             requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 *
 * @public
 */
export class TagResourcesCommand extends $Command
  .classBuilder<
    TagResourcesCommandInput,
    TagResourcesCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "TagResources", {})
  .n("ResourceGroupsTaggingAPIClient", "TagResourcesCommand")
  .sc(TagResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourcesInput;
      output: TagResourcesOutput;
    };
    sdk: {
      input: TagResourcesCommandInput;
      output: TagResourcesCommandOutput;
    };
  };
}
