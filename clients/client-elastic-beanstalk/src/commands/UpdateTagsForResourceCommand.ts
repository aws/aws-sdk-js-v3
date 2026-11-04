// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTagsForResourceMessage } from "../models/models_0";
import { UpdateTagsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update the list of tags applied to an Elastic Beanstalk resource. Two lists can be passed: `TagsToAdd` for tags to add or update, and `TagsToRemove`.
 *
 * Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see [Tagging Application Resources](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html).
 *
 * If you create a custom policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:
 *
 * - **elasticbeanstalk:AddTags**
 *
 *   Controls permission to call `UpdateTagsForResource` and pass a list of tags to add in the `TagsToAdd` parameter.
 *
 * - **elasticbeanstalk:RemoveTags**
 *
 *   Controls permission to call `UpdateTagsForResource` and pass a list of tag keys to remove in the `TagsToRemove` parameter.
 *
 * For details about creating a custom user policy, see [Creating a Custom User Policy](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies).
 *
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
 *
 * The specified account does not have sufficient privileges for one or more Amazon Web Services services.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *
 * Unable to perform the specified operation because another operation that effects an element in this activity is already in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource doesn't exist for the specified Amazon Resource Name (ARN).
 *
 * @throws {@link ResourceTypeNotSupportedException} (client fault)
 *
 * The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The number of tags in the resource would exceed the number of tags that each resource can have.
 *
 * To calculate this, the operation considers both the number of tags the resource already has and the tags this operation would add if it succeeded.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 *
 * Base exception class for all service exceptions from ElasticBeanstalk service.
 *
 * @public
 */
export class UpdateTagsForResourceCommand extends command<UpdateTagsForResourceCommandInput, UpdateTagsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTagsForResource",
  UpdateTagsForResource$
) {
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
