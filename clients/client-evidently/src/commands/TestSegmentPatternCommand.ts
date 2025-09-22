// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { TestSegmentPatternRequest, TestSegmentPatternResponse } from "../models/models_0";
import { TestSegmentPattern } from "../schemas/schemas_15_Feature";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestSegmentPatternCommand}.
 */
export interface TestSegmentPatternCommandInput extends TestSegmentPatternRequest {}
/**
 * @public
 *
 * The output of {@link TestSegmentPatternCommand}.
 */
export interface TestSegmentPatternCommandOutput extends TestSegmentPatternResponse, __MetadataBearer {}

/**
 * <p>Use this operation to test a rules pattern that you plan to use to create an audience segment.
 *       For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, TestSegmentPatternCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, TestSegmentPatternCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // TestSegmentPatternRequest
 *   pattern: "STRING_VALUE", // required
 *   payload: "STRING_VALUE", // required
 * };
 * const command = new TestSegmentPatternCommand(input);
 * const response = await client.send(command);
 * // { // TestSegmentPatternResponse
 * //   match: true || false, // required
 * // };
 *
 * ```
 *
 * @param TestSegmentPatternCommandInput - {@link TestSegmentPatternCommandInput}
 * @returns {@link TestSegmentPatternCommandOutput}
 * @see {@link TestSegmentPatternCommandInput} for command's `input` shape.
 * @see {@link TestSegmentPatternCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class TestSegmentPatternCommand extends $Command
  .classBuilder<
    TestSegmentPatternCommandInput,
    TestSegmentPatternCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "TestSegmentPattern", {})
  .n("EvidentlyClient", "TestSegmentPatternCommand")
  .sc(TestSegmentPattern)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestSegmentPatternRequest;
      output: TestSegmentPatternResponse;
    };
    sdk: {
      input: TestSegmentPatternCommandInput;
      output: TestSegmentPatternCommandOutput;
    };
  };
}
