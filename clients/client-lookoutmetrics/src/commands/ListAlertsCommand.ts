// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAlertsRequest, ListAlertsResponse } from "../models/models_0";
import { de_ListAlertsCommand, se_ListAlertsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandInput extends ListAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandOutput extends ListAlertsResponse, __MetadataBearer {}

/**
 * <p>Lists the alerts attached to a detector.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAlertsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAlertsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAlertsRequest
 *   AnomalyDetectorArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlertsResponse
 * //   AlertSummaryList: [ // AlertSummaryList
 * //     { // AlertSummary
 * //       AlertArn: "STRING_VALUE",
 * //       AnomalyDetectorArn: "STRING_VALUE",
 * //       AlertName: "STRING_VALUE",
 * //       AlertSensitivityThreshold: Number("int"),
 * //       AlertType: "SNS" || "LAMBDA",
 * //       AlertStatus: "ACTIVE" || "INACTIVE",
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlertsCommandInput - {@link ListAlertsCommandInput}
 * @returns {@link ListAlertsCommandOutput}
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
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
export class ListAlertsCommand extends $Command
  .classBuilder<
    ListAlertsCommandInput,
    ListAlertsCommandOutput,
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
  .s("LookoutMetrics", "ListAlerts", {})
  .n("LookoutMetricsClient", "ListAlertsCommand")
  .f(void 0, void 0)
  .ser(se_ListAlertsCommand)
  .de(de_ListAlertsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlertsRequest;
      output: ListAlertsResponse;
    };
    sdk: {
      input: ListAlertsCommandInput;
      output: ListAlertsCommandOutput;
    };
  };
}
