// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSamplingTargetsRequest, GetSamplingTargetsResult } from "../models/models_0";
import { de_GetSamplingTargetsCommand, se_GetSamplingTargetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingTargetsCommand}.
 */
export interface GetSamplingTargetsCommandInput extends GetSamplingTargetsRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingTargetsCommand}.
 */
export interface GetSamplingTargetsCommandOutput extends GetSamplingTargetsResult, __MetadataBearer {}

/**
 * <p>Requests a sampling quota for rules that the service is using to sample requests.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingTargetsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingTargetsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetSamplingTargetsRequest
 *   SamplingStatisticsDocuments: [ // SamplingStatisticsDocumentList // required
 *     { // SamplingStatisticsDocument
 *       RuleName: "STRING_VALUE", // required
 *       ClientID: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       RequestCount: Number("int"), // required
 *       SampledCount: Number("int"), // required
 *       BorrowCount: Number("int"),
 *     },
 *   ],
 * };
 * const command = new GetSamplingTargetsCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingTargetsResult
 * //   SamplingTargetDocuments: [ // SamplingTargetDocumentList
 * //     { // SamplingTargetDocument
 * //       RuleName: "STRING_VALUE",
 * //       FixedRate: Number("double"),
 * //       ReservoirQuota: Number("int"),
 * //       ReservoirQuotaTTL: new Date("TIMESTAMP"),
 * //       Interval: Number("int"),
 * //     },
 * //   ],
 * //   LastRuleModification: new Date("TIMESTAMP"),
 * //   UnprocessedStatistics: [ // UnprocessedStatisticsList
 * //     { // UnprocessedStatistics
 * //       RuleName: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSamplingTargetsCommandInput - {@link GetSamplingTargetsCommandInput}
 * @returns {@link GetSamplingTargetsCommandOutput}
 * @see {@link GetSamplingTargetsCommandInput} for command's `input` shape.
 * @see {@link GetSamplingTargetsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetSamplingTargetsCommand extends $Command
  .classBuilder<
    GetSamplingTargetsCommandInput,
    GetSamplingTargetsCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "GetSamplingTargets", {})
  .n("XRayClient", "GetSamplingTargetsCommand")
  .f(void 0, void 0)
  .ser(se_GetSamplingTargetsCommand)
  .de(de_GetSamplingTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSamplingTargetsRequest;
      output: GetSamplingTargetsResult;
    };
    sdk: {
      input: GetSamplingTargetsCommandInput;
      output: GetSamplingTargetsCommandOutput;
    };
  };
}
