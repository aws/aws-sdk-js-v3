// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTrafficMirrorSessionRequest, ModifyTrafficMirrorSessionResult } from "../models/models_8";
import { ModifyTrafficMirrorSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrafficMirrorSessionCommand}.
 */
export interface ModifyTrafficMirrorSessionCommandInput extends ModifyTrafficMirrorSessionRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTrafficMirrorSessionCommand}.
 */
export interface ModifyTrafficMirrorSessionCommandOutput extends ModifyTrafficMirrorSessionResult, __MetadataBearer {}

/**
 * <p>Modifies a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTrafficMirrorSessionRequest
 *   TrafficMirrorSessionId: "STRING_VALUE", // required
 *   TrafficMirrorTargetId: "STRING_VALUE",
 *   TrafficMirrorFilterId: "STRING_VALUE",
 *   PacketLength: Number("int"),
 *   SessionNumber: Number("int"),
 *   VirtualNetworkId: Number("int"),
 *   Description: "STRING_VALUE",
 *   RemoveFields: [ // TrafficMirrorSessionFieldList
 *     "packet-length" || "description" || "virtual-network-id",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrafficMirrorSessionResult
 * //   TrafficMirrorSession: { // TrafficMirrorSession
 * //     TrafficMirrorSessionId: "STRING_VALUE",
 * //     TrafficMirrorTargetId: "STRING_VALUE",
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     PacketLength: Number("int"),
 * //     SessionNumber: Number("int"),
 * //     VirtualNetworkId: Number("int"),
 * //     Description: "STRING_VALUE",
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
 * @param ModifyTrafficMirrorSessionCommandInput - {@link ModifyTrafficMirrorSessionCommandInput}
 * @returns {@link ModifyTrafficMirrorSessionCommandOutput}
 * @see {@link ModifyTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTrafficMirrorSessionCommand extends $Command
  .classBuilder<
    ModifyTrafficMirrorSessionCommandInput,
    ModifyTrafficMirrorSessionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyTrafficMirrorSession", {})
  .n("EC2Client", "ModifyTrafficMirrorSessionCommand")
  .sc(ModifyTrafficMirrorSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTrafficMirrorSessionRequest;
      output: ModifyTrafficMirrorSessionResult;
    };
    sdk: {
      input: ModifyTrafficMirrorSessionCommandInput;
      output: ModifyTrafficMirrorSessionCommandOutput;
    };
  };
}
