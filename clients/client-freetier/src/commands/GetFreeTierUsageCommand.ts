// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FreeTierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FreeTierClient";
import { GetFreeTierUsageRequest, GetFreeTierUsageResponse } from "../models/models_0";
import { de_GetFreeTierUsageCommand, se_GetFreeTierUsageCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFreeTierUsageCommand}.
 */
export interface GetFreeTierUsageCommandInput extends GetFreeTierUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetFreeTierUsageCommand}.
 */
export interface GetFreeTierUsageCommandOutput extends GetFreeTierUsageResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all Free Tier usage objects that match your filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FreeTierClient, GetFreeTierUsageCommand } from "@aws-sdk/client-freetier"; // ES Modules import
 * // const { FreeTierClient, GetFreeTierUsageCommand } = require("@aws-sdk/client-freetier"); // CommonJS import
 * const client = new FreeTierClient(config);
 * const input = { // GetFreeTierUsageRequest
 *   filter: { // Expression
 *     Or: [ // Expressions
 *       {
 *         Or: [
 *           "<Expression>",
 *         ],
 *         And: [
 *           "<Expression>",
 *         ],
 *         Not: "<Expression>",
 *         Dimensions: { // DimensionValues
 *           Key: "SERVICE" || "OPERATION" || "USAGE_TYPE" || "REGION" || "FREE_TIER_TYPE" || "DESCRIPTION" || "USAGE_PERCENTAGE", // required
 *           Values: [ // Values // required
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [ // MatchOptions // required
 *             "EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *       },
 *     ],
 *     And: [
 *       "<Expression>",
 *     ],
 *     Not: "<Expression>",
 *     Dimensions: {
 *       Key: "SERVICE" || "OPERATION" || "USAGE_TYPE" || "REGION" || "FREE_TIER_TYPE" || "DESCRIPTION" || "USAGE_PERCENTAGE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [ // required
 *         "EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFreeTierUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetFreeTierUsageResponse
 * //   freeTierUsages: [ // FreeTierUsages // required
 * //     { // FreeTierUsage
 * //       service: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       usageType: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       actualUsageAmount: Number("double"),
 * //       forecastedUsageAmount: Number("double"),
 * //       limit: Number("double"),
 * //       unit: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       freeTierType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFreeTierUsageCommandInput - {@link GetFreeTierUsageCommandInput}
 * @returns {@link GetFreeTierUsageCommandOutput}
 * @see {@link GetFreeTierUsageCommandInput} for command's `input` shape.
 * @see {@link GetFreeTierUsageCommandOutput} for command's `response` shape.
 * @see {@link FreeTierClientResolvedConfig | config} for FreeTierClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link FreeTierServiceException}
 * <p>Base exception class for all service exceptions from FreeTier service.</p>
 *
 *
 * @public
 */
export class GetFreeTierUsageCommand extends $Command
  .classBuilder<
    GetFreeTierUsageCommandInput,
    GetFreeTierUsageCommandOutput,
    FreeTierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FreeTierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFreeTierService", "GetFreeTierUsage", {})
  .n("FreeTierClient", "GetFreeTierUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetFreeTierUsageCommand)
  .de(de_GetFreeTierUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFreeTierUsageRequest;
      output: GetFreeTierUsageResponse;
    };
    sdk: {
      input: GetFreeTierUsageCommandInput;
      output: GetFreeTierUsageCommandOutput;
    };
  };
}
