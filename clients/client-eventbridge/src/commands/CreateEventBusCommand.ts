// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0";
import { de_CreateEventBusCommand, se_CreateEventBusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandOutput extends CreateEventBusResponse, __MetadataBearer {}

/**
 * <p>Creates a new event bus within your account. This can be a custom event bus which you can
 *       use to receive events from your custom applications and services, or it can be a partner event
 *       bus which can be matched to a partner event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // CreateEventBusRequest
 *   Name: "STRING_VALUE", // required
 *   EventSourceName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   KmsKeyIdentifier: "STRING_VALUE",
 *   DeadLetterConfig: { // DeadLetterConfig
 *     Arn: "STRING_VALUE",
 *   },
 *   LogConfig: { // LogConfig
 *     IncludeDetail: "NONE" || "FULL",
 *     Level: "OFF" || "ERROR" || "INFO" || "TRACE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEventBusCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventBusResponse
 * //   EventBusArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * //   DeadLetterConfig: { // DeadLetterConfig
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   LogConfig: { // LogConfig
 * //     IncludeDetail: "NONE" || "FULL",
 * //     Level: "OFF" || "ERROR" || "INFO" || "TRACE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventBusCommandInput - {@link CreateEventBusCommandInput}
 * @returns {@link CreateEventBusCommandOutput}
 * @see {@link CreateEventBusCommandInput} for command's `input` shape.
 * @see {@link CreateEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The specified state is not a valid state for an event source.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
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
export class CreateEventBusCommand extends $Command
  .classBuilder<
    CreateEventBusCommandInput,
    CreateEventBusCommandOutput,
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
  .s("AWSEvents", "CreateEventBus", {})
  .n("EventBridgeClient", "CreateEventBusCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventBusCommand)
  .de(de_CreateEventBusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventBusRequest;
      output: CreateEventBusResponse;
    };
    sdk: {
      input: CreateEventBusCommandInput;
      output: CreateEventBusCommandOutput;
    };
  };
}
