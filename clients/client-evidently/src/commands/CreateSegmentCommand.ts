// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { CreateSegmentRequest, CreateSegmentResponse } from "../models/models_0";
import { de_CreateSegmentCommand, se_CreateSegmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSegmentCommand}.
 */
export interface CreateSegmentCommandInput extends CreateSegmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateSegmentCommand}.
 */
export interface CreateSegmentCommandOutput extends CreateSegmentResponse, __MetadataBearer {}

/**
 * <p>Use this operation to define a <i>segment</i> of your audience. A segment
 *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
 *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
 *       such as age.</p>
 *          <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment
 *       criteria. Using one or more segments in a launch allows you to define different traffic splits for the different
 *       audience segments.</p>
 *          <p>For more information about segment pattern syntax, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
 *         Segment rule pattern syntax</a>.</p>
 *          <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which
 *       is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation,
 *       when Evidently assigns a feature variation to a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateSegmentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateSegmentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // CreateSegmentRequest
 *   name: "STRING_VALUE", // required
 *   pattern: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSegmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateSegmentResponse
 * //   segment: { // Segment
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     pattern: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     description: "STRING_VALUE",
 * //     experimentCount: Number("long"),
 * //     launchCount: Number("long"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSegmentCommandInput - {@link CreateSegmentCommandInput}
 * @returns {@link CreateSegmentCommandOutput}
 * @see {@link CreateSegmentCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateSegmentCommand extends $Command
  .classBuilder<
    CreateSegmentCommandInput,
    CreateSegmentCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Evidently", "CreateSegment", {})
  .n("EvidentlyClient", "CreateSegmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateSegmentCommand)
  .de(de_CreateSegmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSegmentRequest;
      output: CreateSegmentResponse;
    };
    sdk: {
      input: CreateSegmentCommandInput;
      output: CreateSegmentCommandOutput;
    };
  };
}
