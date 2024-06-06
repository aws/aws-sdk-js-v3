// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateCustomRoutingAcceleratorRequest, UpdateCustomRoutingAcceleratorResponse } from "../models/models_0";
import {
  de_UpdateCustomRoutingAcceleratorCommand,
  se_UpdateCustomRoutingAcceleratorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomRoutingAcceleratorCommand}.
 */
export interface UpdateCustomRoutingAcceleratorCommandInput extends UpdateCustomRoutingAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomRoutingAcceleratorCommand}.
 */
export interface UpdateCustomRoutingAcceleratorCommandOutput
  extends UpdateCustomRoutingAcceleratorResponse,
    __MetadataBearer {}

/**
 * <p>Update a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCustomRoutingAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   IpAddresses: [ // IpAddresses
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 * };
 * const command = new UpdateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomRoutingAcceleratorResponse
 * //   Accelerator: { // CustomRoutingAccelerator
 * //     AcceleratorArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     IpAddressType: "IPV4" || "DUAL_STACK",
 * //     Enabled: true || false,
 * //     IpSets: [ // IpSets
 * //       { // IpSet
 * //         IpFamily: "STRING_VALUE",
 * //         IpAddresses: [ // IpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //         IpAddressFamily: "IPv4" || "IPv6",
 * //       },
 * //     ],
 * //     DnsName: "STRING_VALUE",
 * //     Status: "DEPLOYED" || "IN_PROGRESS",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCustomRoutingAcceleratorCommandInput - {@link UpdateCustomRoutingAcceleratorCommandInput}
 * @returns {@link UpdateCustomRoutingAcceleratorCommandOutput}
 * @see {@link UpdateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class UpdateCustomRoutingAcceleratorCommand extends $Command
  .classBuilder<
    UpdateCustomRoutingAcceleratorCommandInput,
    UpdateCustomRoutingAcceleratorCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "UpdateCustomRoutingAccelerator", {})
  .n("GlobalAcceleratorClient", "UpdateCustomRoutingAcceleratorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomRoutingAcceleratorCommand)
  .de(de_UpdateCustomRoutingAcceleratorCommand)
  .build() {}
