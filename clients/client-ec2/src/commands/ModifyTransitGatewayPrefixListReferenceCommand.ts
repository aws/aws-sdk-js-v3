// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyTransitGatewayPrefixListReferenceRequest,
  ModifyTransitGatewayPrefixListReferenceResult,
} from "../models/models_7";
import {
  de_ModifyTransitGatewayPrefixListReferenceCommand,
  se_ModifyTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayPrefixListReferenceCommand}.
 */
export interface ModifyTransitGatewayPrefixListReferenceCommandInput
  extends ModifyTransitGatewayPrefixListReferenceRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayPrefixListReferenceCommand}.
 */
export interface ModifyTransitGatewayPrefixListReferenceCommandOutput
  extends ModifyTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayPrefixListReferenceResult
 * //   TransitGatewayPrefixListReference: { // TransitGatewayPrefixListReference
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListOwnerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting",
 * //     Blackhole: true || false,
 * //     TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayPrefixListReferenceCommandInput - {@link ModifyTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link ModifyTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyTransitGatewayPrefixListReferenceCommand extends $Command
  .classBuilder<
    ModifyTransitGatewayPrefixListReferenceCommandInput,
    ModifyTransitGatewayPrefixListReferenceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyTransitGatewayPrefixListReference", {})
  .n("EC2Client", "ModifyTransitGatewayPrefixListReferenceCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTransitGatewayPrefixListReferenceCommand)
  .de(de_ModifyTransitGatewayPrefixListReferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayPrefixListReferenceRequest;
      output: ModifyTransitGatewayPrefixListReferenceResult;
    };
    sdk: {
      input: ModifyTransitGatewayPrefixListReferenceCommandInput;
      output: ModifyTransitGatewayPrefixListReferenceCommandOutput;
    };
  };
}
