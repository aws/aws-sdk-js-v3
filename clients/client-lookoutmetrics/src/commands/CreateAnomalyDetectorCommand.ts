// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateAnomalyDetectorRequest, CreateAnomalyDetectorResponse } from "../models/models_0";
import { CreateAnomalyDetector } from "../schemas/schemas_6_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnomalyDetectorCommand}.
 */
export interface CreateAnomalyDetectorCommandInput extends CreateAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnomalyDetectorCommand}.
 */
export interface CreateAnomalyDetectorCommandOutput extends CreateAnomalyDetectorResponse, __MetadataBearer {}

/**
 * <p>Creates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // CreateAnomalyDetectorRequest
 *   AnomalyDetectorName: "STRING_VALUE", // required
 *   AnomalyDetectorDescription: "STRING_VALUE",
 *   AnomalyDetectorConfig: { // AnomalyDetectorConfig
 *     AnomalyDetectorFrequency: "P1D" || "PT1H" || "PT10M" || "PT5M",
 *   },
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnomalyDetectorResponse
 * //   AnomalyDetectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAnomalyDetectorCommandInput - {@link CreateAnomalyDetectorCommandInput}
 * @returns {@link CreateAnomalyDetectorCommandOutput}
 * @see {@link CreateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
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
export class CreateAnomalyDetectorCommand extends $Command
  .classBuilder<
    CreateAnomalyDetectorCommandInput,
    CreateAnomalyDetectorCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "CreateAnomalyDetector", {})
  .n("LookoutMetricsClient", "CreateAnomalyDetectorCommand")
  .sc(CreateAnomalyDetector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnomalyDetectorRequest;
      output: CreateAnomalyDetectorResponse;
    };
    sdk: {
      input: CreateAnomalyDetectorCommandInput;
      output: CreateAnomalyDetectorCommandOutput;
    };
  };
}
