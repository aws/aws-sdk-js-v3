// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResponderGatewaysRequest, ListResponderGatewaysResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { ListResponderGateways } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResponderGatewaysCommand}.
 */
export interface ListResponderGatewaysCommandInput extends ListResponderGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListResponderGatewaysCommand}.
 */
export interface ListResponderGatewaysCommandOutput extends ListResponderGatewaysResponse, __MetadataBearer {}

/**
 * <p>Lists reponder gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListResponderGatewaysCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListResponderGatewaysCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListResponderGatewaysRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResponderGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListResponderGatewaysResponse
 * //   gatewayIds: [ // GatewayIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResponderGatewaysCommandInput - {@link ListResponderGatewaysCommandInput}
 * @returns {@link ListResponderGatewaysCommandOutput}
 * @see {@link ListResponderGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListResponderGatewaysCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example List responder gateways with default pagination
 * ```javascript
 * // Lists responder gateways using default pagination settings
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListResponderGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayIds: [
 *     "rtb-gw-54321",
 *     "rtb-gw-09876"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List responder gateways with pagination token
 * ```javascript
 * // Lists responder gateways using a pagination token to get the next page
 * const input = {
 *   maxResults: 3,
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7ImlkIjp7IlMiOiJydGJhcHAtcmVzcC01NDMyMSJ9fX0="
 * };
 * const command = new ListResponderGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayIds: [
 *     "rtb-gw-12345",
 *     "rtb-gw-09876"
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7ImlkIjp7IlMiOiJydGJhcHAtcmVzcC1hYmMzNCJ9fX0="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResponderGatewaysCommand extends $Command
  .classBuilder<
    ListResponderGatewaysCommandInput,
    ListResponderGatewaysCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "ListResponderGateways", {})
  .n("RTBFabricClient", "ListResponderGatewaysCommand")
  .sc(ListResponderGateways)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResponderGatewaysRequest;
      output: ListResponderGatewaysResponse;
    };
    sdk: {
      input: ListResponderGatewaysCommandInput;
      output: ListResponderGatewaysCommandOutput;
    };
  };
}
