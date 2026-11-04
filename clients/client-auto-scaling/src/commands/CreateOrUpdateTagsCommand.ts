// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOrUpdateTagsType } from "../models/models_0";
import { CreateOrUpdateTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates tags for the specified Auto Scaling group.
 *
 * When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.
 *
 * For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
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
 *
 * You already have an Auto Scaling group or launch configuration with this name.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see [DescribeAccountLimits](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html) in the *Amazon EC2 Auto Scaling API Reference*.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *
 * The operation can't be performed because the resource is in use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
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
export class CreateOrUpdateTagsCommand extends command<CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput>(
  _ep0,
  _mw0,
  "CreateOrUpdateTags",
  CreateOrUpdateTags$
) {
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
