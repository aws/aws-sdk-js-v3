// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTagsForResourceMessage } from "../models/models_0";
import { de_UpdateTagsForResourceCommand, se_UpdateTagsForResourceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTagsForResourceCommand}.
 */
export interface UpdateTagsForResourceCommandInput extends UpdateTagsForResourceMessage {}
/**
 * @public
 *
 * The output of {@link UpdateTagsForResourceCommand}.
 */
export interface UpdateTagsForResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
 *       for tags to add or update, and <code>TagsToRemove</code>.</p>
 *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 *       <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
 *         Resources</a>.</p>
 *          <p>If you create a custom IAM user policy to control permission to this operation, specify
 *       one of the following two virtual actions (or both) instead of the API operation name:</p>
 *          <dl>
 *             <dt>elasticbeanstalk:AddTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
 *           parameter.</p>
 *             </dd>
 *             <dt>elasticbeanstalk:RemoveTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
 *           parameter.</p>
 *             </dd>
 *          </dl>
 *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateTagsForResourceCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateTagsForResourceCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // UpdateTagsForResourceMessage
 *   ResourceArn: "STRING_VALUE", // required
 *   TagsToAdd: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TagsToRemove: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTagsForResourceCommandInput - {@link UpdateTagsForResourceCommandInput}
 * @returns {@link UpdateTagsForResourceCommandOutput}
 * @see {@link UpdateTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
 *
 * @throws {@link ResourceTypeNotSupportedException} (client fault)
 *  <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The number of tags in the resource would exceed the number of tags that each resource
 *       can have.</p>
 *          <p>To calculate this, the operation considers both the number of tags the resource already has
 *       and the tags this operation would add if it succeeded.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class UpdateTagsForResourceCommand extends $Command
  .classBuilder<
    UpdateTagsForResourceCommandInput,
    UpdateTagsForResourceCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "UpdateTagsForResource", {})
  .n("ElasticBeanstalkClient", "UpdateTagsForResourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTagsForResourceCommand)
  .de(de_UpdateTagsForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTagsForResourceMessage;
      output: {};
    };
    sdk: {
      input: UpdateTagsForResourceCommandInput;
      output: UpdateTagsForResourceCommandOutput;
    };
  };
}
