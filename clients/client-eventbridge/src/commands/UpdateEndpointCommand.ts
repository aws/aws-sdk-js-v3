// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEndpointRequest, UpdateEndpointResponse } from "../models/models_0";
import { UpdateEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandInput extends UpdateEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandOutput extends UpdateEndpointResponse, __MetadataBearer {}

/**
 * Update an existing endpoint. For more information about global endpoints, see [Making applications Regional-fault tolerant with global endpoints and event replication](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html) in the **Amazon EventBridge User Guide** .
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateEndpointCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateEndpointCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateEndpointRequest
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
 *   EventBuses: [ // EndpointEventBusList
 *     { // EndpointEventBus
 *       EventBusArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointResponse
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
 * //   EndpointId: "STRING_VALUE",
 * //   EndpointUrl: "STRING_VALUE",
 * //   State: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateEndpointCommandInput - {@link UpdateEndpointCommandInput}
 * @returns {@link UpdateEndpointCommandOutput}
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link EventBridgeServiceException}
 *
 * Base exception class for all service exceptions from EventBridge service.
 *
 * @public
 */
export class UpdateEndpointCommand extends command<UpdateEndpointCommandInput, UpdateEndpointCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEndpoint",
  UpdateEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEndpointRequest;
      output: UpdateEndpointResponse;
    };
    sdk: {
      input: UpdateEndpointCommandInput;
      output: UpdateEndpointCommandOutput;
    };
  };
}
