// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { PutLoggingOptionsRequest } from "../models/models_0";
import { de_PutLoggingOptionsCommand, se_PutLoggingOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLoggingOptionsCommand}.
 */
export interface PutLoggingOptionsCommandInput extends PutLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutLoggingOptionsCommand}.
 */
export interface PutLoggingOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets or updates the IoT Analytics logging options.</p>
 *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
 *       minute for the change to take effect. Also, if you change the policy attached to the role you
 *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
 *       takes up to five minutes for that change to take effect. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, PutLoggingOptionsCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, PutLoggingOptionsCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // PutLoggingOptionsRequest
 *   loggingOptions: { // LoggingOptions
 *     roleArn: "STRING_VALUE", // required
 *     level: "ERROR", // required
 *     enabled: true || false, // required
 *   },
 * };
 * const command = new PutLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLoggingOptionsCommandInput - {@link PutLoggingOptionsCommandInput}
 * @returns {@link PutLoggingOptionsCommandOutput}
 * @see {@link PutLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
export class PutLoggingOptionsCommand extends $Command
  .classBuilder<
    PutLoggingOptionsCommandInput,
    PutLoggingOptionsCommandOutput,
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
  .s("AWSIoTAnalytics", "PutLoggingOptions", {})
  .n("IoTAnalyticsClient", "PutLoggingOptionsCommand")
  .f(void 0, void 0)
  .ser(se_PutLoggingOptionsCommand)
  .de(de_PutLoggingOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLoggingOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutLoggingOptionsCommandInput;
      output: PutLoggingOptionsCommandOutput;
    };
  };
}
