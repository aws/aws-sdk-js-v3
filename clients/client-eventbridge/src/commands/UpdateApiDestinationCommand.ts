// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import type { UpdateApiDestinationRequest, UpdateApiDestinationResponse } from "../models/models_0";
import { UpdateApiDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiDestinationCommand}.
 */
export interface UpdateApiDestinationCommandInput extends UpdateApiDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiDestinationCommand}.
 */
export interface UpdateApiDestinationCommandOutput extends UpdateApiDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConnectionArn: "STRING_VALUE",
 *   InvocationEndpoint: "STRING_VALUE",
 *   HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 *   InvocationRateLimitPerSecond: Number("int"),
 * };
 * const command = new UpdateApiDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiDestinationResponse
 * //   ApiDestinationArn: "STRING_VALUE",
 * //   ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateApiDestinationCommandInput - {@link UpdateApiDestinationCommandInput}
 * @returns {@link UpdateApiDestinationCommandOutput}
 * @see {@link UpdateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class UpdateApiDestinationCommand extends $Command
  .classBuilder<
    UpdateApiDestinationCommandInput,
    UpdateApiDestinationCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "UpdateApiDestination", {})
  .n("EventBridgeClient", "UpdateApiDestinationCommand")
  .sc(UpdateApiDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiDestinationRequest;
      output: UpdateApiDestinationResponse;
    };
    sdk: {
      input: UpdateApiDestinationCommandInput;
      output: UpdateApiDestinationCommandOutput;
    };
  };
}
