// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyDetectorsRequest, ListAnomalyDetectorsResponse } from "../models/models_0";
import { de_ListAnomalyDetectorsCommand, se_ListAnomalyDetectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyDetectorsCommand}.
 */
export interface ListAnomalyDetectorsCommandInput extends ListAnomalyDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyDetectorsCommand}.
 */
export interface ListAnomalyDetectorsCommandOutput extends ListAnomalyDetectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the detectors in the current AWS Region.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyDetectorsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyDetectorsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyDetectorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyDetectorsResponse
 * //   AnomalyDetectorSummaryList: [ // AnomalyDetectorSummaryList
 * //     { // AnomalyDetectorSummary
 * //       AnomalyDetectorArn: "STRING_VALUE",
 * //       AnomalyDetectorName: "STRING_VALUE",
 * //       AnomalyDetectorDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //       Status: "ACTIVE" || "ACTIVATING" || "DELETING" || "FAILED" || "INACTIVE" || "LEARNING" || "BACK_TEST_ACTIVATING" || "BACK_TEST_ACTIVE" || "BACK_TEST_COMPLETE" || "DEACTIVATED" || "DEACTIVATING",
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
 * @param ListAnomalyDetectorsCommandInput - {@link ListAnomalyDetectorsCommandInput}
 * @returns {@link ListAnomalyDetectorsCommandOutput}
 * @see {@link ListAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyDetectorsCommandOutput} for command's `response` shape.
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
export class ListAnomalyDetectorsCommand extends $Command
  .classBuilder<
    ListAnomalyDetectorsCommandInput,
    ListAnomalyDetectorsCommandOutput,
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
  .s("LookoutMetrics", "ListAnomalyDetectors", {})
  .n("LookoutMetricsClient", "ListAnomalyDetectorsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnomalyDetectorsCommand)
  .de(de_ListAnomalyDetectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalyDetectorsRequest;
      output: ListAnomalyDetectorsResponse;
    };
    sdk: {
      input: ListAnomalyDetectorsCommandInput;
      output: ListAnomalyDetectorsCommandOutput;
    };
  };
}
