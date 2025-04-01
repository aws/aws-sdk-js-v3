// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_1";
import { de_UpdateDashboardCommand, se_UpdateDashboardCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {}

/**
 * <p>Updates an IoT SiteWise Monitor dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateDashboardCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateDashboardCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateDashboardRequest
 *   dashboardId: "STRING_VALUE", // required
 *   dashboardName: "STRING_VALUE", // required
 *   dashboardDescription: "STRING_VALUE",
 *   dashboardDefinition: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDashboardCommandInput - {@link UpdateDashboardCommandInput}
 * @returns {@link UpdateDashboardCommandOutput}
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
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
export class UpdateDashboardCommand extends $Command
  .classBuilder<
    UpdateDashboardCommandInput,
    UpdateDashboardCommandOutput,
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
  .s("AWSIoTSiteWise", "UpdateDashboard", {})
  .n("IoTSiteWiseClient", "UpdateDashboardCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDashboardCommand)
  .de(de_UpdateDashboardCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardRequest;
      output: {};
    };
    sdk: {
      input: UpdateDashboardCommandInput;
      output: UpdateDashboardCommandOutput;
    };
  };
}
