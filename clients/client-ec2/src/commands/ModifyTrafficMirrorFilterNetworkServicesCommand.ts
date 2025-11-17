// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyTrafficMirrorFilterNetworkServicesRequest,
  ModifyTrafficMirrorFilterNetworkServicesResult,
} from "../models/models_8";
import { ModifyTrafficMirrorFilterNetworkServices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrafficMirrorFilterNetworkServicesCommand}.
 */
export interface ModifyTrafficMirrorFilterNetworkServicesCommandInput
  extends ModifyTrafficMirrorFilterNetworkServicesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTrafficMirrorFilterNetworkServicesCommand}.
 */
export interface ModifyTrafficMirrorFilterNetworkServicesCommandOutput
  extends ModifyTrafficMirrorFilterNetworkServicesResult,
    __MetadataBearer {}

/**
 * <p>Allows or restricts mirroring network services.</p>
 *          <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored.
 *          When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterNetworkServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTrafficMirrorFilterNetworkServicesRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   AddNetworkServices: [ // TrafficMirrorNetworkServiceList
 *     "amazon-dns",
 *   ],
 *   RemoveNetworkServices: [
 *     "amazon-dns",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorFilterNetworkServicesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrafficMirrorFilterNetworkServicesResult
 * //   TrafficMirrorFilter: { // TrafficMirrorFilter
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     IngressFilterRules: [ // TrafficMirrorFilterRuleList
 * //       { // TrafficMirrorFilterRule
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: { // TrafficMirrorPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     EgressFilterRules: [
 * //       {
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     NetworkServices: [ // TrafficMirrorNetworkServiceList
 * //       "amazon-dns",
 * //     ],
 * //     Description: "STRING_VALUE",
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTrafficMirrorFilterNetworkServicesCommandInput - {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput}
 * @returns {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput}
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterNetworkServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command
  .classBuilder<
    ModifyTrafficMirrorFilterNetworkServicesCommandInput,
    ModifyTrafficMirrorFilterNetworkServicesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyTrafficMirrorFilterNetworkServices", {})
  .n("EC2Client", "ModifyTrafficMirrorFilterNetworkServicesCommand")
  .sc(ModifyTrafficMirrorFilterNetworkServices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTrafficMirrorFilterNetworkServicesRequest;
      output: ModifyTrafficMirrorFilterNetworkServicesResult;
    };
    sdk: {
      input: ModifyTrafficMirrorFilterNetworkServicesCommandInput;
      output: ModifyTrafficMirrorFilterNetworkServicesCommandOutput;
    };
  };
}
