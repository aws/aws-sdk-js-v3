// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddTagsToResourceRequest, AddTagsToResourceResult } from "../models/models_0";
import { de_AddTagsToResourceCommand, se_AddTagsToResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceRequest {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceResult, __MetadataBearer {}

/**
 * <p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i>
 *    are metadata that you can assign to your automations, documents, managed nodes, maintenance
 *    windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your
 *    resources in different ways, for example, by purpose, owner, or environment. Each tag consists of
 *    a key and an optional value, both of which you define. For example, you could define a set of
 *    tags for your account's managed nodes that helps you track each node's owner and stack level. For
 *    example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=DbAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=SysAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=Dev</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Pre-Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Test</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5
 *    tags.</p>
 *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
 *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 *    to and are interpreted strictly as a string of characters.</p>
 *          <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2
 *     resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // AddTagsToResourceRequest
 *   ResourceType: "Document" || "ManagedInstance" || "MaintenanceWindow" || "Parameter" || "PatchBaseline" || "OpsItem" || "OpsMetadata" || "Automation" || "Association", // required
 *   ResourceId: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link InvalidResourceType} (client fault)
 *  <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 *
 * @throws {@link TooManyTagsError} (client fault)
 *  <p>The <code>Targets</code> parameter includes too many tags. Remove one or more tags and try
 *    the command again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class AddTagsToResourceCommand extends $Command
  .classBuilder<
    AddTagsToResourceCommandInput,
    AddTagsToResourceCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "AddTagsToResource", {})
  .n("SSMClient", "AddTagsToResourceCommand")
  .f(void 0, void 0)
  .ser(se_AddTagsToResourceCommand)
  .de(de_AddTagsToResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToResourceRequest;
      output: {};
    };
    sdk: {
      input: AddTagsToResourceCommandInput;
      output: AddTagsToResourceCommandOutput;
    };
  };
}
