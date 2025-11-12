// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/models_0";
import { GetMetricWidgetImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricWidgetImageCommand}.
 */
export interface GetMetricWidgetImageCommandInput extends GetMetricWidgetImageInput {}
/**
 * @public
 *
 * The output of {@link GetMetricWidgetImageCommand}.
 */
export interface GetMetricWidgetImageCommandOutput extends GetMetricWidgetImageOutput, __MetadataBearer {}

/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph
 *             of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 *             image into your services and products, such as wiki pages, reports, and documents. You
 *             could also retrieve images regularly, such as every minute, and create your own custom
 *             live dashboard.</p>
 *          <p>The graph you retrieve can include all CloudWatch metric graph features, including
 *             metric math and horizontal and vertical annotations.</p>
 *          <p>There is a limit of 20 transactions per second for this API. Each
 *             <code>GetMetricWidgetImage</code> action has the following limits:</p>
 *          <ul>
 *             <li>
 *                <p>As many as 100 metrics in the graph.</p>
 *             </li>
 *             <li>
 *                <p>Up to 100 KB uncompressed payload.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricWidgetImageInput
 *   MetricWidget: "STRING_VALUE", // required
 *   OutputFormat: "STRING_VALUE",
 * };
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricWidgetImageOutput
 * //   MetricWidgetImage: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetMetricWidgetImageCommandInput - {@link GetMetricWidgetImageCommandInput}
 * @returns {@link GetMetricWidgetImageCommandOutput}
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetMetricWidgetImageCommand extends $Command
  .classBuilder<
    GetMetricWidgetImageCommandInput,
    GetMetricWidgetImageCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "GetMetricWidgetImage", {})
  .n("CloudWatchClient", "GetMetricWidgetImageCommand")
  .sc(GetMetricWidgetImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricWidgetImageInput;
      output: GetMetricWidgetImageOutput;
    };
    sdk: {
      input: GetMetricWidgetImageCommandInput;
      output: GetMetricWidgetImageCommandOutput;
    };
  };
}
