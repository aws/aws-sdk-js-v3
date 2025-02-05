// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PublishMetricsInput, PublishMetricsOutput } from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_PublishMetricsCommand, se_PublishMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishMetricsCommand}.
 */
export interface PublishMetricsCommandInput extends PublishMetricsInput {}
/**
 * @public
 *
 * The output of {@link PublishMetricsCommand}.
 */
export interface PublishMetricsCommandOutput extends PublishMetricsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.</p>
 *
 * @deprecated This API is for internal use and not meant for public use, and is no longer available.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MWAAClient(config);
 * const input = { // PublishMetricsInput
 *   EnvironmentName: "STRING_VALUE", // required
 *   MetricData: [ // MetricData // required
 *     { // MetricDatum
 *       MetricName: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       Dimensions: [ // Dimensions
 *         { // Dimension
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Value: Number("double"),
 *       Unit: "STRING_VALUE",
 *       StatisticValues: { // StatisticSet
 *         SampleCount: Number("int"),
 *         Sum: Number("double"),
 *         Minimum: Number("double"),
 *         Maximum: Number("double"),
 *       },
 *     },
 *   ],
 * };
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishMetricsCommandInput - {@link PublishMetricsCommandInput}
 * @returns {@link PublishMetricsCommandOutput}
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 * @public
 */
export class PublishMetricsCommand extends $Command
  .classBuilder<
    PublishMetricsCommandInput,
    PublishMetricsCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMWAA", "PublishMetrics", {})
  .n("MWAAClient", "PublishMetricsCommand")
  .f(void 0, void 0)
  .ser(se_PublishMetricsCommand)
  .de(de_PublishMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishMetricsInput;
      output: {};
    };
    sdk: {
      input: PublishMetricsCommandInput;
      output: PublishMetricsCommandOutput;
    };
  };
}
