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
import { DescribeEndpointGroupRequest, DescribeEndpointGroupResponse } from "../models/models_0";
import { DescribeEndpointGroup } from "../schemas/schemas_5_Endpoint";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointGroupCommand}.
 */
export interface DescribeEndpointGroupCommandInput extends DescribeEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointGroupCommand}.
 */
export interface DescribeEndpointGroupCommandOutput extends DescribeEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Describe an endpoint group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointGroupResponse
 * //   EndpointGroup: { // EndpointGroup
 * //     EndpointGroupArn: "STRING_VALUE",
 * //     EndpointGroupRegion: "STRING_VALUE",
 * //     EndpointDescriptions: [ // EndpointDescriptions
 * //       { // EndpointDescription
 * //         EndpointId: "STRING_VALUE",
 * //         Weight: Number("int"),
 * //         HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //         HealthReason: "STRING_VALUE",
 * //         ClientIPPreservationEnabled: true || false,
 * //       },
 * //     ],
 * //     TrafficDialPercentage: Number("float"),
 * //     HealthCheckPort: Number("int"),
 * //     HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 * //     HealthCheckPath: "STRING_VALUE",
 * //     HealthCheckIntervalSeconds: Number("int"),
 * //     ThresholdCount: Number("int"),
 * //     PortOverrides: [ // PortOverrides
 * //       { // PortOverride
 * //         ListenerPort: Number("int"),
 * //         EndpointPort: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEndpointGroupCommandInput - {@link DescribeEndpointGroupCommandInput}
 * @returns {@link DescribeEndpointGroupCommandOutput}
 * @see {@link DescribeEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
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
export class DescribeEndpointGroupCommand extends $Command
  .classBuilder<
    DescribeEndpointGroupCommandInput,
    DescribeEndpointGroupCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "DescribeEndpointGroup", {})
  .n("GlobalAcceleratorClient", "DescribeEndpointGroupCommand")
  .sc(DescribeEndpointGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEndpointGroupRequest;
      output: DescribeEndpointGroupResponse;
    };
    sdk: {
      input: DescribeEndpointGroupCommandInput;
      output: DescribeEndpointGroupCommandOutput;
    };
  };
}
