// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateTransitGatewayPrefixListReferenceRequest,
  CreateTransitGatewayPrefixListReferenceResult,
} from "../models/models_2";
import { CreateTransitGatewayPrefixListReference } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayPrefixListReferenceCommand}.
 */
export interface CreateTransitGatewayPrefixListReferenceCommandInput
  extends CreateTransitGatewayPrefixListReferenceRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayPrefixListReferenceCommand}.
 */
export interface CreateTransitGatewayPrefixListReferenceCommandOutput
  extends CreateTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayPrefixListReferenceResult
 * //   TransitGatewayPrefixListReference: { // TransitGatewayPrefixListReference
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListOwnerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting",
 * //     Blackhole: true || false,
 * //     TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTransitGatewayPrefixListReferenceCommandInput - {@link CreateTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link CreateTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command
  .classBuilder<
    CreateTransitGatewayPrefixListReferenceCommandInput,
    CreateTransitGatewayPrefixListReferenceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateTransitGatewayPrefixListReference", {})
  .n("EC2Client", "CreateTransitGatewayPrefixListReferenceCommand")
  .sc(CreateTransitGatewayPrefixListReference)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayPrefixListReferenceRequest;
      output: CreateTransitGatewayPrefixListReferenceResult;
    };
    sdk: {
      input: CreateTransitGatewayPrefixListReferenceCommandInput;
      output: CreateTransitGatewayPrefixListReferenceCommandOutput;
    };
  };
}
