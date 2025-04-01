// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeDashboardRequest, DescribeDashboardResponse } from "../models/models_0";
import { de_DescribeDashboardCommand, se_DescribeDashboardCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDashboardCommand}.
 */
export interface DescribeDashboardCommandInput extends DescribeDashboardRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardCommand}.
 */
export interface DescribeDashboardCommandOutput extends DescribeDashboardResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeDashboardCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeDashboardCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeDashboardRequest
 *   dashboardId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardResponse
 * //   dashboardId: "STRING_VALUE", // required
 * //   dashboardArn: "STRING_VALUE", // required
 * //   dashboardName: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   dashboardDescription: "STRING_VALUE",
 * //   dashboardDefinition: "STRING_VALUE", // required
 * //   dashboardCreationDate: new Date("TIMESTAMP"), // required
 * //   dashboardLastUpdateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeDashboardCommandInput - {@link DescribeDashboardCommandInput}
 * @returns {@link DescribeDashboardCommandOutput}
 * @see {@link DescribeDashboardCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardCommandOutput} for command's `response` shape.
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
export class DescribeDashboardCommand extends $Command
  .classBuilder<
    DescribeDashboardCommandInput,
    DescribeDashboardCommandOutput,
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
  .s("AWSIoTSiteWise", "DescribeDashboard", {})
  .n("IoTSiteWiseClient", "DescribeDashboardCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDashboardCommand)
  .de(de_DescribeDashboardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDashboardRequest;
      output: DescribeDashboardResponse;
    };
    sdk: {
      input: DescribeDashboardCommandInput;
      output: DescribeDashboardCommandOutput;
    };
  };
}
