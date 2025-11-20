// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateTransitGatewayMeteringPolicyEntryRequest,
  CreateTransitGatewayMeteringPolicyEntryResult,
} from "../models/models_2";
import { CreateTransitGatewayMeteringPolicyEntry } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayMeteringPolicyEntryCommand}.
 */
export interface CreateTransitGatewayMeteringPolicyEntryCommandInput
  extends CreateTransitGatewayMeteringPolicyEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayMeteringPolicyEntryCommand}.
 */
export interface CreateTransitGatewayMeteringPolicyEntryCommandOutput
  extends CreateTransitGatewayMeteringPolicyEntryResult,
    __MetadataBearer {}

/**
 * <p>Creates an entry in a transit gateway metering policy to define traffic measurement rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayMeteringPolicyEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayMeteringPolicyEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayMeteringPolicyEntryRequest
 *   TransitGatewayMeteringPolicyId: "STRING_VALUE", // required
 *   PolicyRuleNumber: Number("int"), // required
 *   SourceTransitGatewayAttachmentId: "STRING_VALUE",
 *   SourceTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 *   SourceCidrBlock: "STRING_VALUE",
 *   SourcePortRange: "STRING_VALUE",
 *   DestinationTransitGatewayAttachmentId: "STRING_VALUE",
 *   DestinationTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 *   DestinationCidrBlock: "STRING_VALUE",
 *   DestinationPortRange: "STRING_VALUE",
 *   Protocol: "STRING_VALUE",
 *   MeteredAccount: "source-attachment-owner" || "destination-attachment-owner" || "transit-gateway-owner", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayMeteringPolicyEntryCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayMeteringPolicyEntryResult
 * //   TransitGatewayMeteringPolicyEntry: { // TransitGatewayMeteringPolicyEntry
 * //     PolicyRuleNumber: "STRING_VALUE",
 * //     MeteredAccount: "source-attachment-owner" || "destination-attachment-owner" || "transit-gateway-owner",
 * //     State: "available" || "deleted",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     UpdateEffectiveAt: new Date("TIMESTAMP"),
 * //     MeteringPolicyRule: { // TransitGatewayMeteringPolicyRule
 * //       SourceTransitGatewayAttachmentId: "STRING_VALUE",
 * //       SourceTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       SourceCidrBlock: "STRING_VALUE",
 * //       SourcePortRange: "STRING_VALUE",
 * //       DestinationTransitGatewayAttachmentId: "STRING_VALUE",
 * //       DestinationTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       DestinationPortRange: "STRING_VALUE",
 * //       Protocol: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTransitGatewayMeteringPolicyEntryCommandInput - {@link CreateTransitGatewayMeteringPolicyEntryCommandInput}
 * @returns {@link CreateTransitGatewayMeteringPolicyEntryCommandOutput}
 * @see {@link CreateTransitGatewayMeteringPolicyEntryCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayMeteringPolicyEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayMeteringPolicyEntryCommand extends $Command
  .classBuilder<
    CreateTransitGatewayMeteringPolicyEntryCommandInput,
    CreateTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateTransitGatewayMeteringPolicyEntry", {})
  .n("EC2Client", "CreateTransitGatewayMeteringPolicyEntryCommand")
  .sc(CreateTransitGatewayMeteringPolicyEntry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayMeteringPolicyEntryRequest;
      output: CreateTransitGatewayMeteringPolicyEntryResult;
    };
    sdk: {
      input: CreateTransitGatewayMeteringPolicyEntryCommandInput;
      output: CreateTransitGatewayMeteringPolicyEntryCommandOutput;
    };
  };
}
