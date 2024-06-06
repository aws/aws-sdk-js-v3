// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/models_0";
import { de_DescribePartnerEventSourceCommand, se_DescribePartnerEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandInput extends DescribePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandOutput extends DescribePartnerEventSourceResponse, __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to list details about a partner event source that
 *       they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with
 *       them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribePartnerEventSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePartnerEventSourceCommandInput - {@link DescribePartnerEventSourceCommandInput}
 * @returns {@link DescribePartnerEventSourceCommandOutput}
 * @see {@link DescribePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribePartnerEventSourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribePartnerEventSourceCommand extends $Command
  .classBuilder<
    DescribePartnerEventSourceCommandInput,
    DescribePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DescribePartnerEventSource", {})
  .n("EventBridgeClient", "DescribePartnerEventSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribePartnerEventSourceCommand)
  .de(de_DescribePartnerEventSourceCommand)
  .build() {}
