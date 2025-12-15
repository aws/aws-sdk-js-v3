// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import type { GetConnectivityInfoRequest, GetConnectivityInfoResponse } from "../models/models_0";
import { GetConnectivityInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandInput extends GetConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandOutput extends GetConnectivityInfoResponse, __MetadataBearer {}

/**
 * <p>Retrieves connectivity information for a Greengrass core device.</p>
 *          <p>Connectivity information includes endpoints and ports where client devices
 *       can connect to an MQTT broker on the core device. When a client device
 *       calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>,
 *       IoT Greengrass returns connectivity information for all of the core devices where the client device can
 *       connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to
 *         core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetConnectivityInfoCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetConnectivityInfoCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // GetConnectivityInfoRequest
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new GetConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectivityInfoResponse
 * //   connectivityInfo: [ // connectivityInfoList
 * //     { // ConnectivityInfo
 * //       id: "STRING_VALUE",
 * //       hostAddress: "STRING_VALUE",
 * //       portNumber: Number("int"),
 * //       metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectivityInfoCommandInput - {@link GetConnectivityInfoCommandInput}
 * @returns {@link GetConnectivityInfoCommandOutput}
 * @see {@link GetConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link GetConnectivityInfoCommandOutput} for command's `response` shape.
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
export class GetConnectivityInfoCommand extends $Command
  .classBuilder<
    GetConnectivityInfoCommandInput,
    GetConnectivityInfoCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "GetConnectivityInfo", {})
  .n("GreengrassV2Client", "GetConnectivityInfoCommand")
  .sc(GetConnectivityInfo$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectivityInfoRequest;
      output: GetConnectivityInfoResponse;
    };
    sdk: {
      input: GetConnectivityInfoCommandInput;
      output: GetConnectivityInfoCommandOutput;
    };
  };
}
