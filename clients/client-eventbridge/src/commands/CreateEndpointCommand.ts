// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateEndpointRequest, CreateEndpointResponse } from "../models/models_0";
import { de_CreateEndpointCommand, se_CreateEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a global endpoint. Global endpoints improve your application's availability by
 *       making it regional-fault tolerant. To do this, you define a primary and secondary Region with
 *       event buses in each Region. You also create a Amazon Route 53 health check that will
 *       tell EventBridge to route events to the secondary Region when an "unhealthy" state is
 *       encountered and events will be routed back to the primary Region when the health check reports
 *       a "healthy" state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateEndpointCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateEndpointCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // CreateEndpointRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoutingConfig: { // RoutingConfig
 *     FailoverConfig: { // FailoverConfig
 *       Primary: { // Primary
 *         HealthCheck: "STRING_VALUE", // required
 *       },
 *       Secondary: { // Secondary
 *         Route: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   ReplicationConfig: { // ReplicationConfig
 *     State: "ENABLED" || "DISABLED",
 *   },
 *   EventBuses: [ // EndpointEventBusList // required
 *     { // EndpointEventBus
 *       EventBusArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   RoutingConfig: { // RoutingConfig
 * //     FailoverConfig: { // FailoverConfig
 * //       Primary: { // Primary
 * //         HealthCheck: "STRING_VALUE", // required
 * //       },
 * //       Secondary: { // Secondary
 * //         Route: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   ReplicationConfig: { // ReplicationConfig
 * //     State: "ENABLED" || "DISABLED",
 * //   },
 * //   EventBuses: [ // EndpointEventBusList
 * //     { // EndpointEventBus
 * //       EventBusArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   RoleArn: "STRING_VALUE",
 * //   State: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param CreateEndpointCommandInput - {@link CreateEndpointCommandInput}
 * @returns {@link CreateEndpointCommandOutput}
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class CreateEndpointCommand extends $Command
  .classBuilder<
    CreateEndpointCommandInput,
    CreateEndpointCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "CreateEndpoint", {})
  .n("EventBridgeClient", "CreateEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateEndpointCommand)
  .de(de_CreateEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointRequest;
      output: CreateEndpointResponse;
    };
    sdk: {
      input: CreateEndpointCommandInput;
      output: CreateEndpointCommandOutput;
    };
  };
}
