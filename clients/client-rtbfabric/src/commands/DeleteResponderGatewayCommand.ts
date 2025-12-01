// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteResponderGatewayRequest, DeleteResponderGatewayResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { DeleteResponderGateway } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResponderGatewayCommand}.
 */
export interface DeleteResponderGatewayCommandInput extends DeleteResponderGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResponderGatewayCommand}.
 */
export interface DeleteResponderGatewayCommandOutput extends DeleteResponderGatewayResponse, __MetadataBearer {}

/**
 * <p>Deletes a responder gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, DeleteResponderGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, DeleteResponderGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // DeleteResponderGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteResponderGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param DeleteResponderGatewayCommandInput - {@link DeleteResponderGatewayCommandInput}
 * @returns {@link DeleteResponderGatewayCommandOutput}
 * @see {@link DeleteResponderGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteResponderGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Delete a responder gateway
 * ```javascript
 * // Delete responder gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new DeleteResponderGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   status: "PENDING_DELETION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteResponderGatewayCommand extends $Command
  .classBuilder<
    DeleteResponderGatewayCommandInput,
    DeleteResponderGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "DeleteResponderGateway", {})
  .n("RTBFabricClient", "DeleteResponderGatewayCommand")
  .sc(DeleteResponderGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResponderGatewayRequest;
      output: DeleteResponderGatewayResponse;
    };
    sdk: {
      input: DeleteResponderGatewayCommandInput;
      output: DeleteResponderGatewayCommandOutput;
    };
  };
}
