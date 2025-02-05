// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeActionRequest, DescribeActionResponse } from "../models/models_0";
import { de_DescribeActionCommand, se_DescribeActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandInput extends DescribeActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionCommand}.
 */
export interface DescribeActionCommandOutput extends DescribeActionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeActionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeActionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeActionRequest
 *   actionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionResponse
 * //   actionId: "STRING_VALUE", // required
 * //   targetResource: { // TargetResource
 * //     assetId: "STRING_VALUE", // required
 * //   },
 * //   actionDefinitionId: "STRING_VALUE", // required
 * //   actionPayload: { // ActionPayload
 * //     stringValue: "STRING_VALUE", // required
 * //   },
 * //   executionTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeActionCommandInput - {@link DescribeActionCommandInput}
 * @returns {@link DescribeActionCommandOutput}
 * @see {@link DescribeActionCommandInput} for command's `input` shape.
 * @see {@link DescribeActionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeActionCommand extends $Command
  .classBuilder<
    DescribeActionCommandInput,
    DescribeActionCommandOutput,
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
  .s("AWSIoTSiteWise", "DescribeAction", {})
  .n("IoTSiteWiseClient", "DescribeActionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeActionCommand)
  .de(de_DescribeActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeActionRequest;
      output: DescribeActionResponse;
    };
    sdk: {
      input: DescribeActionCommandInput;
      output: DescribeActionCommandOutput;
    };
  };
}
