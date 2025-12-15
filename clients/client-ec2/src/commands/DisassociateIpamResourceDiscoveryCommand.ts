// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateIpamResourceDiscoveryRequest,
  DisassociateIpamResourceDiscoveryResult,
} from "../models/models_5";
import { DisassociateIpamResourceDiscovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIpamResourceDiscoveryCommand}.
 */
export interface DisassociateIpamResourceDiscoveryCommandInput extends DisassociateIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpamResourceDiscoveryCommand}.
 */
export interface DisassociateIpamResourceDiscoveryCommandOutput
  extends DisassociateIpamResourceDiscoveryResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateIpamResourceDiscoveryResult
 * //   IpamResourceDiscoveryAssociation: { // IpamResourceDiscoveryAssociation
 * //     OwnerId: "STRING_VALUE",
 * //     IpamResourceDiscoveryAssociationId: "STRING_VALUE",
 * //     IpamResourceDiscoveryAssociationArn: "STRING_VALUE",
 * //     IpamResourceDiscoveryId: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     ResourceDiscoveryStatus: "active" || "not-found",
 * //     State: "associate-in-progress" || "associate-complete" || "associate-failed" || "disassociate-in-progress" || "disassociate-complete" || "disassociate-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
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
 * @param DisassociateIpamResourceDiscoveryCommandInput - {@link DisassociateIpamResourceDiscoveryCommandInput}
 * @returns {@link DisassociateIpamResourceDiscoveryCommandOutput}
 * @see {@link DisassociateIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateIpamResourceDiscoveryCommand extends $Command
  .classBuilder<
    DisassociateIpamResourceDiscoveryCommandInput,
    DisassociateIpamResourceDiscoveryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateIpamResourceDiscovery", {})
  .n("EC2Client", "DisassociateIpamResourceDiscoveryCommand")
  .sc(DisassociateIpamResourceDiscovery$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIpamResourceDiscoveryRequest;
      output: DisassociateIpamResourceDiscoveryResult;
    };
    sdk: {
      input: DisassociateIpamResourceDiscoveryCommandInput;
      output: DisassociateIpamResourceDiscoveryCommandOutput;
    };
  };
}
