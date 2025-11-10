// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingAcceleratorRequest, DescribeCustomRoutingAcceleratorResponse } from "../models/models_0";
import { DescribeCustomRoutingAccelerator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingAcceleratorCommand}.
 */
export interface DescribeCustomRoutingAcceleratorCommandInput extends DescribeCustomRoutingAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingAcceleratorCommand}.
 */
export interface DescribeCustomRoutingAcceleratorCommandOutput
  extends DescribeCustomRoutingAcceleratorResponse,
    __MetadataBearer {}

/**
 * <p>Describe a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingAcceleratorRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingAcceleratorResponse
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
 * @param DescribeCustomRoutingAcceleratorCommandInput - {@link DescribeCustomRoutingAcceleratorCommandInput}
 * @returns {@link DescribeCustomRoutingAcceleratorCommandOutput}
 * @see {@link DescribeCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeCustomRoutingAcceleratorCommand extends $Command
  .classBuilder<
    DescribeCustomRoutingAcceleratorCommandInput,
    DescribeCustomRoutingAcceleratorCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "DescribeCustomRoutingAccelerator", {})
  .n("GlobalAcceleratorClient", "DescribeCustomRoutingAcceleratorCommand")
  .sc(DescribeCustomRoutingAccelerator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomRoutingAcceleratorRequest;
      output: DescribeCustomRoutingAcceleratorResponse;
    };
    sdk: {
      input: DescribeCustomRoutingAcceleratorCommandInput;
      output: DescribeCustomRoutingAcceleratorCommandOutput;
    };
  };
}
