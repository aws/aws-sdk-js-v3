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
import { CreateEndpointGroupRequest, CreateEndpointGroupResponse } from "../models/models_0";
import { de_CreateEndpointGroupCommand, se_CreateEndpointGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEndpointGroupCommand}.
 */
export interface CreateEndpointGroupCommandInput extends CreateEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointGroupCommand}.
 */
export interface CreateEndpointGroupCommandOutput extends CreateEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services
 * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
 *          <p>For more information about endpoint types and requirements for endpoints that you can add
 * 				to Global Accelerator, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html">
 * 					Endpoints for standard accelerators</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateEndpointGroupRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   EndpointGroupRegion: "STRING_VALUE", // required
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
 *   IdempotencyToken: "STRING_VALUE", // required
 *   PortOverrides: [ // PortOverrides
 *     { // PortOverride
 *       ListenerPort: Number("int"),
 *       EndpointPort: Number("int"),
 *     },
 *   ],
 * };
 * const command = new CreateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointGroupResponse
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
 * @param CreateEndpointGroupCommandInput - {@link CreateEndpointGroupCommandInput}
 * @returns {@link CreateEndpointGroupCommandOutput}
 * @see {@link CreateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link EndpointGroupAlreadyExistsException} (client fault)
 *  <p>The endpoint group that you specified already exists.</p>
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
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class CreateEndpointGroupCommand extends $Command
  .classBuilder<
    CreateEndpointGroupCommandInput,
    CreateEndpointGroupCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "CreateEndpointGroup", {})
  .n("GlobalAcceleratorClient", "CreateEndpointGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateEndpointGroupCommand)
  .de(de_CreateEndpointGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointGroupRequest;
      output: CreateEndpointGroupResponse;
    };
    sdk: {
      input: CreateEndpointGroupCommandInput;
      output: CreateEndpointGroupCommandOutput;
    };
  };
}
