// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DescribeLoggingOptionsRequest, DescribeLoggingOptionsResponse } from "../models/models_0";
import { de_DescribeLoggingOptionsCommand, se_DescribeLoggingOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoggingOptionsCommand}.
 */
export interface DescribeLoggingOptionsCommandInput extends DescribeLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoggingOptionsCommand}.
 */
export interface DescribeLoggingOptionsCommandOutput extends DescribeLoggingOptionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current settings of the IoT Analytics logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeLoggingOptionsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeLoggingOptionsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = {};
 * const command = new DescribeLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoggingOptionsResponse
 * //   loggingOptions: { // LoggingOptions
 * //     roleArn: "STRING_VALUE", // required
 * //     level: "ERROR", // required
 * //     enabled: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLoggingOptionsCommandInput - {@link DescribeLoggingOptionsCommandInput}
 * @returns {@link DescribeLoggingOptionsCommandOutput}
 * @see {@link DescribeLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 *
 * @public
 */
export class DescribeLoggingOptionsCommand extends $Command
  .classBuilder<
    DescribeLoggingOptionsCommandInput,
    DescribeLoggingOptionsCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "DescribeLoggingOptions", {})
  .n("IoTAnalyticsClient", "DescribeLoggingOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoggingOptionsCommand)
  .de(de_DescribeLoggingOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeLoggingOptionsResponse;
    };
    sdk: {
      input: DescribeLoggingOptionsCommandInput;
      output: DescribeLoggingOptionsCommandOutput;
    };
  };
}
