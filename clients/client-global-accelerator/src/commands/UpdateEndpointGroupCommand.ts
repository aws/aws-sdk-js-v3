// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { UpdateEndpointGroupRequest, UpdateEndpointGroupResponse } from "../models/models_0";
import { UpdateEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointGroupCommand}.
 */
export interface UpdateEndpointGroupCommandInput extends UpdateEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointGroupCommand}.
 */
export interface UpdateEndpointGroupCommandOutput extends UpdateEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 *   EndpointConfigurations: [ // EndpointConfigurations
 *     { // EndpointConfiguration
 *       EndpointId: "STRING_VALUE",
 *       Weight: Number("int"),
 *       ClientIPPreservationEnabled: true || false,
 *       AttachmentArn: "STRING_VALUE",
 *     },
 *   ],
 *   TrafficDialPercentage: Number("float"),
 *   HealthCheckPort: Number("int"),
 *   HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 *   HealthCheckPath: "STRING_VALUE",
 *   HealthCheckIntervalSeconds: Number("int"),
 *   ThresholdCount: Number("int"),
 *   PortOverrides: [ // PortOverrides
 *     { // PortOverride
 *       ListenerPort: Number("int"),
 *       EndpointPort: Number("int"),
 *     },
 *   ],
 * };
 * const command = new UpdateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointGroupResponse
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
 * @param UpdateEndpointGroupCommandInput - {@link UpdateEndpointGroupCommandInput}
 * @returns {@link UpdateEndpointGroupCommandOutput}
 * @see {@link UpdateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class UpdateEndpointGroupCommand extends $Command
  .classBuilder<
    UpdateEndpointGroupCommandInput,
    UpdateEndpointGroupCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "UpdateEndpointGroup", {})
  .n("GlobalAcceleratorClient", "UpdateEndpointGroupCommand")
  .sc(UpdateEndpointGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEndpointGroupRequest;
      output: UpdateEndpointGroupResponse;
    };
    sdk: {
      input: UpdateEndpointGroupCommandInput;
      output: UpdateEndpointGroupCommandOutput;
    };
  };
}
