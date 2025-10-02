// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateTransitGatewayPolicyTableRequest,
  AssociateTransitGatewayPolicyTableResult,
} from "../models/models_0";
import {
  de_AssociateTransitGatewayPolicyTableCommand,
  se_AssociateTransitGatewayPolicyTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayPolicyTableCommand}.
 */
export interface AssociateTransitGatewayPolicyTableCommandInput extends AssociateTransitGatewayPolicyTableRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayPolicyTableCommand}.
 */
export interface AssociateTransitGatewayPolicyTableCommandOutput
  extends AssociateTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified transit gateway attachment with a transit gateway policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateTransitGatewayPolicyTableRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayPolicyTableResult
 * //   Association: { // TransitGatewayPolicyTableAssociation
 * //     TransitGatewayPolicyTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayPolicyTableCommandInput - {@link AssociateTransitGatewayPolicyTableCommandInput}
 * @returns {@link AssociateTransitGatewayPolicyTableCommandOutput}
 * @see {@link AssociateTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateTransitGatewayPolicyTableCommand extends $Command
  .classBuilder<
    AssociateTransitGatewayPolicyTableCommandInput,
    AssociateTransitGatewayPolicyTableCommandOutput,
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
  .s("AmazonEC2", "AssociateTransitGatewayPolicyTable", {})
  .n("EC2Client", "AssociateTransitGatewayPolicyTableCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTransitGatewayPolicyTableCommand)
  .de(de_AssociateTransitGatewayPolicyTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTransitGatewayPolicyTableRequest;
      output: AssociateTransitGatewayPolicyTableResult;
    };
    sdk: {
      input: AssociateTransitGatewayPolicyTableCommandInput;
      output: AssociateTransitGatewayPolicyTableCommandOutput;
    };
  };
}
