// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourcesInput, TagResourcesOutput } from "../models/models_0";
import { TagResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Applies one or more tags to the specified resources. Note the following:
 *
 * - Not all resources can have tags. For a list of services with resources that support tagging using this operation, see [Services that support the Resource Groups Tagging API](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html). If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.
 * - Each resource can have up to 50 tags. For other limits, see [Tag Naming and Usage Conventions](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions) in the *Amazon Web Services General Reference.*
 * - You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.
 * - To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.
 * - When you use the [Amazon Web Services Resource Groups Tagging API](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/overview.html) to update tags for Amazon Web Services CloudFormation stack sets, Amazon Web Services calls the [Amazon Web Services CloudFormation `UpdateStack`](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html) operation. This operation may initiate additional resource property updates in addition to the desired tag updates. To avoid unexpected resource updates, Amazon Web Services recommends that you only apply or update tags to your CloudFormation stack sets using Amazon Web Services CloudFormation.
 *
 * > **Important:** Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.
 *
 * **Minimum permissions**
 *
 * In addition to the `tag:TagResources` permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the `TagResources` operation, you must have both of the following permissions:
 *
 * - `tag:TagResources`
 * - `ec2:CreateTags`
 *
 * > **Note:** In addition, some services might have specific requirements for tagging some types of resources. For example, to tag an Amazon S3 bucket, you must also have the `s3:GetBucketTagging` permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information.
 *
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
 *
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.
 *
 * @public
 */
export class TagResourcesCommand extends command<TagResourcesCommandInput, TagResourcesCommandOutput>(
  _ep0,
  _mw0,
  "TagResources",
  TagResources$
) {
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
