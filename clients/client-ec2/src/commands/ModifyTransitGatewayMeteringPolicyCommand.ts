// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyTransitGatewayMeteringPolicyRequest,
  ModifyTransitGatewayMeteringPolicyResult,
} from "../models/models_6";
import { ModifyTransitGatewayMeteringPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayMeteringPolicyCommand}.
 */
export interface ModifyTransitGatewayMeteringPolicyCommandInput extends ModifyTransitGatewayMeteringPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayMeteringPolicyCommand}.
 */
export interface ModifyTransitGatewayMeteringPolicyCommandOutput
  extends ModifyTransitGatewayMeteringPolicyResult,
    __MetadataBearer {}

/**
 * <p>Modifies a transit gateway metering policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayMeteringPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayMeteringPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayMeteringPolicyRequest
 *   TransitGatewayMeteringPolicyId: "STRING_VALUE", // required
 *   AddMiddleboxAttachmentIds: [ // TransitGatewayAttachmentIdStringList
 *     "STRING_VALUE",
 *   ],
 *   RemoveMiddleboxAttachmentIds: [
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayMeteringPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayMeteringPolicyResult
 * //   TransitGatewayMeteringPolicy: { // TransitGatewayMeteringPolicy
 * //     TransitGatewayMeteringPolicyId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     MiddleboxAttachmentIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     State: "available" || "deleted" || "pending" || "modifying" || "deleting",
 * //     UpdateEffectiveAt: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayMeteringPolicyCommandInput - {@link ModifyTransitGatewayMeteringPolicyCommandInput}
 * @returns {@link ModifyTransitGatewayMeteringPolicyCommandOutput}
 * @see {@link ModifyTransitGatewayMeteringPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayMeteringPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayMeteringPolicyCommand extends $Command
  .classBuilder<
    ModifyTransitGatewayMeteringPolicyCommandInput,
    ModifyTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyTransitGatewayMeteringPolicy", {})
  .n("EC2Client", "ModifyTransitGatewayMeteringPolicyCommand")
  .sc(ModifyTransitGatewayMeteringPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayMeteringPolicyRequest;
      output: ModifyTransitGatewayMeteringPolicyResult;
    };
    sdk: {
      input: ModifyTransitGatewayMeteringPolicyCommandInput;
      output: ModifyTransitGatewayMeteringPolicyCommandOutput;
    };
  };
}
