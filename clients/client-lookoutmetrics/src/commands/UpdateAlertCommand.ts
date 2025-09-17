// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { UpdateAlertRequest, UpdateAlertResponse } from "../models/models_0";
import { de_UpdateAlertCommand, se_UpdateAlertCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandInput extends UpdateAlertRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandOutput extends UpdateAlertResponse, __MetadataBearer {}

/**
 * <p>Make changes to an existing alert.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, UpdateAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, UpdateAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // UpdateAlertRequest
 *   AlertArn: "STRING_VALUE", // required
 *   AlertDescription: "STRING_VALUE",
 *   AlertSensitivityThreshold: Number("int"),
 *   Action: { // Action
 *     SNSConfiguration: { // SNSConfiguration
 *       RoleArn: "STRING_VALUE", // required
 *       SnsTopicArn: "STRING_VALUE", // required
 *       SnsFormat: "LONG_TEXT" || "SHORT_TEXT" || "JSON",
 *     },
 *     LambdaConfiguration: { // LambdaConfiguration
 *       RoleArn: "STRING_VALUE", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *   },
 *   AlertFilters: { // AlertFilters
 *     MetricList: [ // MetricNameList
 *       "STRING_VALUE",
 *     ],
 *     DimensionFilterList: [ // DimensionFilterList
 *       { // DimensionFilter
 *         DimensionName: "STRING_VALUE",
 *         DimensionValueList: [ // DimensionValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateAlertCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAlertResponse
 * //   AlertArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAlertCommandInput - {@link UpdateAlertCommandInput}
 * @returns {@link UpdateAlertCommandOutput}
 * @see {@link UpdateAlertCommandInput} for command's `input` shape.
 * @see {@link UpdateAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 *
 * @public
 */
export class UpdateAlertCommand extends $Command
  .classBuilder<
    UpdateAlertCommandInput,
    UpdateAlertCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "UpdateAlert", {})
  .n("LookoutMetricsClient", "UpdateAlertCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAlertCommand)
  .de(de_UpdateAlertCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAlertRequest;
      output: UpdateAlertResponse;
    };
    sdk: {
      input: UpdateAlertCommandInput;
      output: UpdateAlertCommandOutput;
    };
  };
}
