// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { ListTunnelsRequest, ListTunnelsResponse } from "../models/models_0";
import { de_ListTunnelsCommand, se_ListTunnelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTunnelsCommand}.
 */
export interface ListTunnelsCommandInput extends ListTunnelsRequest {}
/**
 * @public
 *
 * The output of {@link ListTunnelsCommand}.
 */
export interface ListTunnelsCommandOutput extends ListTunnelsResponse, __MetadataBearer {}

/**
 * <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in
 * 			descending order, newer tunnels will be listed before older tunnels.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, ListTunnelsCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, ListTunnelsCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // ListTunnelsRequest
 *   thingName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTunnelsCommand(input);
 * const response = await client.send(command);
 * // { // ListTunnelsResponse
 * //   tunnelSummaries: [ // TunnelSummaryList
 * //     { // TunnelSummary
 * //       tunnelId: "STRING_VALUE",
 * //       tunnelArn: "STRING_VALUE",
 * //       status: "OPEN" || "CLOSED",
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTunnelsCommandInput - {@link ListTunnelsCommandInput}
 * @returns {@link ListTunnelsCommandOutput}
 * @see {@link ListTunnelsCommandInput} for command's `input` shape.
 * @see {@link ListTunnelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 *
 * @public
 */
export class ListTunnelsCommand extends $Command
  .classBuilder<
    ListTunnelsCommandInput,
    ListTunnelsCommandOutput,
    IoTSecureTunnelingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSecureTunnelingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTSecuredTunneling", "ListTunnels", {})
  .n("IoTSecureTunnelingClient", "ListTunnelsCommand")
  .f(void 0, void 0)
  .ser(se_ListTunnelsCommand)
  .de(de_ListTunnelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTunnelsRequest;
      output: ListTunnelsResponse;
    };
    sdk: {
      input: ListTunnelsCommandInput;
      output: ListTunnelsCommandOutput;
    };
  };
}
