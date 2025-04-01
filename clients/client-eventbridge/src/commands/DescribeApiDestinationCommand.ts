// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeApiDestinationRequest, DescribeApiDestinationResponse } from "../models/models_0";
import { de_DescribeApiDestinationCommand, se_DescribeApiDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApiDestinationCommand}.
 */
export interface DescribeApiDestinationCommandInput extends DescribeApiDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApiDestinationCommand}.
 */
export interface DescribeApiDestinationCommandOutput extends DescribeApiDestinationResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeApiDestinationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApiDestinationResponse
 * //   ApiDestinationArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //   ConnectionArn: "STRING_VALUE",
 * //   InvocationEndpoint: "STRING_VALUE",
 * //   HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 * //   InvocationRateLimitPerSecond: Number("int"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeApiDestinationCommandInput - {@link DescribeApiDestinationCommandInput}
 * @returns {@link DescribeApiDestinationCommandOutput}
 * @see {@link DescribeApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeApiDestinationCommandOutput} for command's `response` shape.
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
export class DescribeApiDestinationCommand extends $Command
  .classBuilder<
    DescribeApiDestinationCommandInput,
    DescribeApiDestinationCommandOutput,
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
  .s("AWSEvents", "DescribeApiDestination", {})
  .n("EventBridgeClient", "DescribeApiDestinationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApiDestinationCommand)
  .de(de_DescribeApiDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApiDestinationRequest;
      output: DescribeApiDestinationResponse;
    };
    sdk: {
      input: DescribeApiDestinationCommandInput;
      output: DescribeApiDestinationCommandOutput;
    };
  };
}
