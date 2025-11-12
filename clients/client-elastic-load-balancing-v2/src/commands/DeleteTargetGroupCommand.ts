// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTargetGroupInput, DeleteTargetGroupOutput } from "../models/models_0";
import { DeleteTargetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTargetGroupCommand}.
 */
export interface DeleteTargetGroupCommandInput extends DeleteTargetGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteTargetGroupCommand}.
 */
export interface DeleteTargetGroupCommandOutput extends DeleteTargetGroupOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified target group.</p>
 *          <p>You can delete a target group if it is not referenced by any actions. Deleting a target
 *       group also deletes any associated health checks. Deleting a target group does not affect its
 *       registered targets. For example, any EC2 instances continue to run until you stop or terminate
 *       them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteTargetGroupCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeleteTargetGroupInput
 *   TargetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTargetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTargetGroupCommandInput - {@link DeleteTargetGroupCommandInput}
 * @returns {@link DeleteTargetGroupCommandOutput}
 * @see {@link DeleteTargetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A specified resource is in use.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To delete a target group
 * ```javascript
 * // This example deletes the specified target group.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new DeleteTargetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTargetGroupCommand extends $Command
  .classBuilder<
    DeleteTargetGroupCommandInput,
    DeleteTargetGroupCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DeleteTargetGroup", {})
  .n("ElasticLoadBalancingV2Client", "DeleteTargetGroupCommand")
  .sc(DeleteTargetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTargetGroupInput;
      output: {};
    };
    sdk: {
      input: DeleteTargetGroupCommandInput;
      output: DeleteTargetGroupCommandOutput;
    };
  };
}
