// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRequesterGatewaysRequest, ListRequesterGatewaysResponse } from "../models/models_0";
import { de_ListRequesterGatewaysCommand, se_ListRequesterGatewaysCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRequesterGatewaysCommand}.
 */
export interface ListRequesterGatewaysCommandInput extends ListRequesterGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListRequesterGatewaysCommand}.
 */
export interface ListRequesterGatewaysCommandOutput extends ListRequesterGatewaysResponse, __MetadataBearer {}

/**
 * <p>Lists requester gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListRequesterGatewaysCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListRequesterGatewaysCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListRequesterGatewaysRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRequesterGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListRequesterGatewaysResponse
 * //   gatewayIds: [ // GatewayIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRequesterGatewaysCommandInput - {@link ListRequesterGatewaysCommandInput}
 * @returns {@link ListRequesterGatewaysCommandOutput}
 * @see {@link ListRequesterGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListRequesterGatewaysCommandOutput} for command's `response` shape.
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
 * @example List requester gateways with default pagination
 * ```javascript
 * // Lists requester gateways using default pagination settings
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListRequesterGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayIds: [
 *     "rtb-gw-12345",
 *     "rtb-gw-67890"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List requester gateways with pagination token
 * ```javascript
 * // Lists requester gateways using a pagination token to get the next page
 * const input = {
 *   maxResults: 5,
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7ImlkIjp7IlMiOiJydGJhcHAtcmVxLTEyMzQ1In19fQ=="
 * };
 * const command = new ListRequesterGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayIds: [
 *     "rtb-gw-12345",
 *     "rtb-gw-09876"
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7ImlkIjp7IlMiOiJydGJhcHAtcmVxLWZnaGlqIn19fQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRequesterGatewaysCommand extends $Command
  .classBuilder<
    ListRequesterGatewaysCommandInput,
    ListRequesterGatewaysCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RTBFabric", "ListRequesterGateways", {})
  .n("RTBFabricClient", "ListRequesterGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_ListRequesterGatewaysCommand)
  .de(de_ListRequesterGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequesterGatewaysRequest;
      output: ListRequesterGatewaysResponse;
    };
    sdk: {
      input: ListRequesterGatewaysCommandInput;
      output: ListRequesterGatewaysCommandOutput;
    };
  };
}
