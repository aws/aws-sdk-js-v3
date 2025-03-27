// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/models_0";
import { de_DescribeEventSourceCommand, se_DescribeEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventSourceCommand}.
 */
export interface DescribeEventSourceCommandInput extends DescribeEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventSourceCommand}.
 */
export interface DescribeEventSourceCommandOutput extends DescribeEventSourceResponse, __MetadataBearer {}

/**
 * <p>This operation lists details about a partner event source that is shared with your
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedBy: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ExpirationTime: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   State: "PENDING" || "ACTIVE" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DescribeEventSourceCommandInput - {@link DescribeEventSourceCommandInput}
 * @returns {@link DescribeEventSourceCommandOutput}
 * @see {@link DescribeEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
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
export class DescribeEventSourceCommand extends $Command
  .classBuilder<
    DescribeEventSourceCommandInput,
    DescribeEventSourceCommandOutput,
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
  .s("AWSEvents", "DescribeEventSource", {})
  .n("EventBridgeClient", "DescribeEventSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventSourceCommand)
  .de(de_DescribeEventSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventSourceRequest;
      output: DescribeEventSourceResponse;
    };
    sdk: {
      input: DescribeEventSourceCommandInput;
      output: DescribeEventSourceCommandOutput;
    };
  };
}
