// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTransitGatewayPrefixListReferenceRequest,
  DeleteTransitGatewayPrefixListReferenceResult,
} from "../models/models_3";
import { DeleteTransitGatewayPrefixListReference } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPrefixListReferenceCommand}.
 */
export interface DeleteTransitGatewayPrefixListReferenceCommandInput
  extends DeleteTransitGatewayPrefixListReferenceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPrefixListReferenceCommand}.
 */
export interface DeleteTransitGatewayPrefixListReferenceCommandOutput
  extends DeleteTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPrefixListReferenceResult
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
 * @param DeleteTransitGatewayPrefixListReferenceCommandInput - {@link DeleteTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link DeleteTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayPrefixListReferenceCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayPrefixListReferenceCommandInput,
    DeleteTransitGatewayPrefixListReferenceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayPrefixListReference", {})
  .n("EC2Client", "DeleteTransitGatewayPrefixListReferenceCommand")
  .sc(DeleteTransitGatewayPrefixListReference)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayPrefixListReferenceRequest;
      output: DeleteTransitGatewayPrefixListReferenceResult;
    };
    sdk: {
      input: DeleteTransitGatewayPrefixListReferenceCommandInput;
      output: DeleteTransitGatewayPrefixListReferenceCommandOutput;
    };
  };
}
