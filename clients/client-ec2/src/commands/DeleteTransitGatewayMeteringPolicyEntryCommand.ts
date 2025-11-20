// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTransitGatewayMeteringPolicyEntryRequest,
  DeleteTransitGatewayMeteringPolicyEntryResult,
} from "../models/models_2";
import { DeleteTransitGatewayMeteringPolicyEntry } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayMeteringPolicyEntryCommand}.
 */
export interface DeleteTransitGatewayMeteringPolicyEntryCommandInput
  extends DeleteTransitGatewayMeteringPolicyEntryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayMeteringPolicyEntryCommand}.
 */
export interface DeleteTransitGatewayMeteringPolicyEntryCommandOutput
  extends DeleteTransitGatewayMeteringPolicyEntryResult,
    __MetadataBearer {}

/**
 * <p>Deletes an entry from a transit gateway metering policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayMeteringPolicyEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayMeteringPolicyEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayMeteringPolicyEntryRequest
 *   TransitGatewayMeteringPolicyId: "STRING_VALUE", // required
 *   PolicyRuleNumber: Number("int"), // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayMeteringPolicyEntryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayMeteringPolicyEntryResult
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
 * @param DeleteTransitGatewayMeteringPolicyEntryCommandInput - {@link DeleteTransitGatewayMeteringPolicyEntryCommandInput}
 * @returns {@link DeleteTransitGatewayMeteringPolicyEntryCommandOutput}
 * @see {@link DeleteTransitGatewayMeteringPolicyEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayMeteringPolicyEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayMeteringPolicyEntryCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayMeteringPolicyEntryCommandInput,
    DeleteTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayMeteringPolicyEntry", {})
  .n("EC2Client", "DeleteTransitGatewayMeteringPolicyEntryCommand")
  .sc(DeleteTransitGatewayMeteringPolicyEntry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayMeteringPolicyEntryRequest;
      output: DeleteTransitGatewayMeteringPolicyEntryResult;
    };
    sdk: {
      input: DeleteTransitGatewayMeteringPolicyEntryCommandInput;
      output: DeleteTransitGatewayMeteringPolicyEntryCommandOutput;
    };
  };
}
