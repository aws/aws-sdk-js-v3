// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateTransitGatewayPolicyTableRequest,
  DisassociateTransitGatewayPolicyTableResult,
} from "../models/models_6";
import { DisassociateTransitGatewayPolicyTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayPolicyTableCommand}.
 */
export interface DisassociateTransitGatewayPolicyTableCommandInput
  extends DisassociateTransitGatewayPolicyTableRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayPolicyTableCommand}.
 */
export interface DisassociateTransitGatewayPolicyTableCommandOutput
  extends DisassociateTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Removes the association between an an attachment and a policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateTransitGatewayPolicyTableRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTransitGatewayPolicyTableResult
 * //   Association: { // TransitGatewayPolicyTableAssociation
 * //     TransitGatewayPolicyTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateTransitGatewayPolicyTableCommandInput - {@link DisassociateTransitGatewayPolicyTableCommandInput}
 * @returns {@link DisassociateTransitGatewayPolicyTableCommandOutput}
 * @see {@link DisassociateTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateTransitGatewayPolicyTableCommand extends $Command
  .classBuilder<
    DisassociateTransitGatewayPolicyTableCommandInput,
    DisassociateTransitGatewayPolicyTableCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateTransitGatewayPolicyTable", {})
  .n("EC2Client", "DisassociateTransitGatewayPolicyTableCommand")
  .sc(DisassociateTransitGatewayPolicyTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTransitGatewayPolicyTableRequest;
      output: DisassociateTransitGatewayPolicyTableResult;
    };
    sdk: {
      input: DisassociateTransitGatewayPolicyTableCommandInput;
      output: DisassociateTransitGatewayPolicyTableCommandOutput;
    };
  };
}
