// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOrUpdateTagsType } from "../models/models_0";
import { CreateOrUpdateTags } from "../schemas/schemas_4_Delete";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOrUpdateTagsCommand}.
 */
export interface CreateOrUpdateTagsCommandInput extends CreateOrUpdateTagsType {}
/**
 * @public
 *
 * The output of {@link CreateOrUpdateTagsCommand}.
 */
export interface CreateOrUpdateTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates tags for the specified Auto Scaling group.</p>
 *          <p>When you specify a tag with a key that already exists, the operation overwrites the
 *             previous tag definition, and you do not get an error message.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CreateOrUpdateTagsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CreateOrUpdateTagsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // CreateOrUpdateTagsType
 *   Tags: [ // Tags // required
 *     { // Tag
 *       ResourceId: "STRING_VALUE",
 *       ResourceType: "STRING_VALUE",
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       PropagateAtLaunch: true || false,
 *     },
 *   ],
 * };
 * const command = new CreateOrUpdateTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateOrUpdateTagsCommandInput - {@link CreateOrUpdateTagsCommandInput}
 * @returns {@link CreateOrUpdateTagsCommandOutput}
 * @see {@link CreateOrUpdateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateOrUpdateTagsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link AlreadyExistsFault} (client fault)
 *  <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To create or update tags for an Auto Scaling group
 * ```javascript
 * // This example adds two tags to the specified Auto Scaling group.
 * const input = {
 *   Tags: [
 *     {
 *       Key: "Role",
 *       PropagateAtLaunch: true,
 *       ResourceId: "my-auto-scaling-group",
 *       ResourceType: "auto-scaling-group",
 *       Value: "WebServer"
 *     },
 *     {
 *       Key: "Dept",
 *       PropagateAtLaunch: true,
 *       ResourceId: "my-auto-scaling-group",
 *       ResourceType: "auto-scaling-group",
 *       Value: "Research"
 *     }
 *   ]
 * };
 * const command = new CreateOrUpdateTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOrUpdateTagsCommand extends $Command
  .classBuilder<
    CreateOrUpdateTagsCommandInput,
    CreateOrUpdateTagsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "CreateOrUpdateTags", {})
  .n("AutoScalingClient", "CreateOrUpdateTagsCommand")
  .sc(CreateOrUpdateTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOrUpdateTagsType;
      output: {};
    };
    sdk: {
      input: CreateOrUpdateTagsCommandInput;
      output: CreateOrUpdateTagsCommandOutput;
    };
  };
}
