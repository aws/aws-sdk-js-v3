// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
import { TestEventPattern$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandInput extends TestEventPatternRequest {}
/**
 * @public
 *
 * The output of {@link TestEventPatternCommand}.
 */
export interface TestEventPatternCommandOutput extends TestEventPatternResponse, __MetadataBearer {}

/**
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *          <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs).
 *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
 *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
 *       event you want to match.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, TestEventPatternCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, TestEventPatternCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // TestEventPatternRequest
 *   EventPattern: "STRING_VALUE", // required
 *   Event: "STRING_VALUE", // required
 * };
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * // { // TestEventPatternResponse
 * //   Result: true || false,
 * // };
 *
 * ```
 *
 * @param TestEventPatternCommandInput - {@link TestEventPatternCommandInput}
 * @returns {@link TestEventPatternCommandOutput}
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class TestEventPatternCommand extends command<TestEventPatternCommandInput, TestEventPatternCommandOutput>(
  _ep0,
  _mw0,
  "TestEventPattern",
  TestEventPattern$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestEventPatternRequest;
      output: TestEventPatternResponse;
    };
    sdk: {
      input: TestEventPatternCommandInput;
      output: TestEventPatternCommandOutput;
    };
  };
}
