// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse } from "../models/models_0";
import { de_UpdateConnectivityInfoCommand, se_UpdateConnectivityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandInput extends UpdateConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandOutput extends UpdateConnectivityInfoResponse, __MetadataBearer {}

/**
 * <p>Updates connectivity information for a Greengrass core device.</p>
 *          <p>Connectivity information includes endpoints and ports where client devices
 *       can connect to an MQTT broker on the core device. When a client device
 *       calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>,
 *       IoT Greengrass returns connectivity information for all of the core devices where the client device can
 *       connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to
 *         core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, UpdateConnectivityInfoCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, UpdateConnectivityInfoCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // UpdateConnectivityInfoRequest
 *   thingName: "STRING_VALUE", // required
 *   connectivityInfo: [ // connectivityInfoList // required
 *     { // ConnectivityInfo
 *       id: "STRING_VALUE",
 *       hostAddress: "STRING_VALUE",
 *       portNumber: Number("int"),
 *       metadata: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectivityInfoResponse
 * //   version: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectivityInfoCommandInput - {@link UpdateConnectivityInfoCommandInput}
 * @returns {@link UpdateConnectivityInfoCommandOutput}
 * @see {@link UpdateConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class UpdateConnectivityInfoCommand extends $Command
  .classBuilder<
    UpdateConnectivityInfoCommandInput,
    UpdateConnectivityInfoCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "UpdateConnectivityInfo", {})
  .n("GreengrassV2Client", "UpdateConnectivityInfoCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConnectivityInfoCommand)
  .de(de_UpdateConnectivityInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectivityInfoRequest;
      output: UpdateConnectivityInfoResponse;
    };
    sdk: {
      input: UpdateConnectivityInfoCommandInput;
      output: UpdateConnectivityInfoCommandOutput;
    };
  };
}
