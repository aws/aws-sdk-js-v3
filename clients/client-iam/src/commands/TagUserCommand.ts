// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { TagUserRequest } from "../models/models_0";
import { de_TagUserCommand, se_TagUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagUserCommand}.
 */
export interface TagUserCommandInput extends TagUserRequest {}
/**
 * @public
 *
 * The output of {@link TagUserCommand}.
 */
export interface TagUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists,
 *       then that tag is overwritten with the new value.</p>
 *          <p>A tag consists of a key name and an associated value. By assigning tags to your
 *       resources, you can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Administrative grouping and discovery</b> - Attach
 *           tags to resources to aid in organization and search. For example, you could search for all
 *           resources with the key name <i>Project</i> and the value
 *             <i>MyImportantProject</i>. Or search for all resources with the key name
 *             <i>Cost Center</i> and the value <i>41200</i>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Access control</b> - Include tags in IAM identity-based
 *           and resource-based policies. You can use tags to restrict access to only an IAM
 *           requesting user that has a specified tag attached. You can also restrict access to only
 *           those resources that have a certain tag attached. For examples of policies that show how
 *           to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control access using IAM tags</a> in the
 *             <i>IAM User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Cost allocation</b> - Use tags to help track which
 *           individuals and teams are using which Amazon Web Services resources.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request
 *    fails and the resource is not created. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>Amazon Web Services always interprets the tag <code>Value</code> as a single string. If you
 *             need to store an array, you can store comma-separated values in the string. However, you
 *             must interpret the value in your code.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM identities</a> in the
 *         <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // TagUserRequest
 *   UserName: "STRING_VALUE", // required
 *   Tags: [ // tagListType // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagUserCommandInput - {@link TagUserCommandInput}
 * @returns {@link TagUserCommandOutput}
 * @see {@link TagUserCommandInput} for command's `input` shape.
 * @see {@link TagUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To add a tag key and value to an IAM user
 * ```javascript
 * // The following example shows how to add tags to an existing user.
 * const input = {
 *   "Tags": [
 *     {
 *       "Key": "Dept",
 *       "Value": "Accounting"
 *     },
 *     {
 *       "Key": "CostCenter",
 *       "Value": "12345"
 *     }
 *   ],
 *   "UserName": "anika"
 * };
 * const command = new TagUserCommand(input);
 * await client.send(command);
 * // example id: to-add-a-tag-key-and-value-to-an-iam-user-1506719044227
 * ```
 *
 */
export class TagUserCommand extends $Command
  .classBuilder<
    TagUserCommandInput,
    TagUserCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "TagUser", {})
  .n("IAMClient", "TagUserCommand")
  .f(void 0, void 0)
  .ser(se_TagUserCommand)
  .de(de_TagUserCommand)
  .build() {}
