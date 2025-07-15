// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/models_0";
import { de_DescribeEventBusCommand, se_DescribeEventBusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventBusCommand}.
 */
export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventBusCommand}.
 */
export interface DescribeEventBusCommandOutput extends DescribeEventBusResponse, __MetadataBearer {}

/**
 * <p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the
 *       associated policy. For custom event buses and partner event buses, it displays the name, ARN,
 *       policy, state, and creation time.</p>
 *          <p> To enable your account to receive events from other accounts on its default event bus,
 *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p>
 *          <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeEventBusRequest
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventBusResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * //   DeadLetterConfig: { // DeadLetterConfig
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   Policy: "STRING_VALUE",
 * //   LogConfig: { // LogConfig
 * //     IncludeDetail: "NONE" || "FULL",
 * //     Level: "OFF" || "ERROR" || "INFO" || "TRACE",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEventBusCommandInput - {@link DescribeEventBusCommandInput}
 * @returns {@link DescribeEventBusCommandOutput}
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
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
export class DescribeEventBusCommand extends $Command
  .classBuilder<
    DescribeEventBusCommandInput,
    DescribeEventBusCommandOutput,
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
  .s("AWSEvents", "DescribeEventBus", {})
  .n("EventBridgeClient", "DescribeEventBusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventBusCommand)
  .de(de_DescribeEventBusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventBusRequest;
      output: DescribeEventBusResponse;
    };
    sdk: {
      input: DescribeEventBusCommandInput;
      output: DescribeEventBusCommandOutput;
    };
  };
}
