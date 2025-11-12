// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTransitGatewayMulticastDomainRequest,
  DeleteTransitGatewayMulticastDomainResult,
} from "../models/models_3";
import { DeleteTransitGatewayMulticastDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayMulticastDomainCommand}.
 */
export interface DeleteTransitGatewayMulticastDomainCommandInput extends DeleteTransitGatewayMulticastDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayMulticastDomainCommand}.
 */
export interface DeleteTransitGatewayMulticastDomainCommandOutput
  extends DeleteTransitGatewayMulticastDomainResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayMulticastDomainRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayMulticastDomainResult
 * //   TransitGatewayMulticastDomain: { // TransitGatewayMulticastDomain
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayMulticastDomainArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Options: { // TransitGatewayMulticastDomainOptions
 * //       Igmpv2Support: "enable" || "disable",
 * //       StaticSourcesSupport: "enable" || "disable",
 * //       AutoAcceptSharedAssociations: "enable" || "disable",
 * //     },
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
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
 * @param DeleteTransitGatewayMulticastDomainCommandInput - {@link DeleteTransitGatewayMulticastDomainCommandInput}
 * @returns {@link DeleteTransitGatewayMulticastDomainCommandOutput}
 * @see {@link DeleteTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayMulticastDomainCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayMulticastDomainCommandInput,
    DeleteTransitGatewayMulticastDomainCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayMulticastDomain", {})
  .n("EC2Client", "DeleteTransitGatewayMulticastDomainCommand")
  .sc(DeleteTransitGatewayMulticastDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayMulticastDomainRequest;
      output: DeleteTransitGatewayMulticastDomainResult;
    };
    sdk: {
      input: DeleteTransitGatewayMulticastDomainCommandInput;
      output: DeleteTransitGatewayMulticastDomainCommandOutput;
    };
  };
}
