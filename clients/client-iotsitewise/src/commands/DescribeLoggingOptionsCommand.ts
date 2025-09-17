// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
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
 * <p>Retrieves the current IoT SiteWise logging options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeLoggingOptionsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeLoggingOptionsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = {};
 * const command = new DescribeLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoggingOptionsResponse
 * //   loggingOptions: { // LoggingOptions
 * //     level: "ERROR" || "INFO" || "OFF", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLoggingOptionsCommandInput - {@link DescribeLoggingOptionsCommandInput}
 * @returns {@link DescribeLoggingOptionsCommandOutput}
 * @see {@link DescribeLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class DescribeLoggingOptionsCommand extends $Command
  .classBuilder<
    DescribeLoggingOptionsCommandInput,
    DescribeLoggingOptionsCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "DescribeLoggingOptions", {})
  .n("IoTSiteWiseClient", "DescribeLoggingOptionsCommand")
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
