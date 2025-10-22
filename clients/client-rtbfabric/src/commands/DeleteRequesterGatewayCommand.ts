// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRequesterGatewayRequest, DeleteRequesterGatewayResponse } from "../models/models_0";
import { de_DeleteRequesterGatewayCommand, se_DeleteRequesterGatewayCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRequesterGatewayCommand}.
 */
export interface DeleteRequesterGatewayCommandInput extends DeleteRequesterGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRequesterGatewayCommand}.
 */
export interface DeleteRequesterGatewayCommandOutput extends DeleteRequesterGatewayResponse, __MetadataBearer {}

/**
 * <p>Deletes a requester gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, DeleteRequesterGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, DeleteRequesterGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // DeleteRequesterGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRequesterGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param DeleteRequesterGatewayCommandInput - {@link DeleteRequesterGatewayCommandInput}
 * @returns {@link DeleteRequesterGatewayCommandOutput}
 * @see {@link DeleteRequesterGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteRequesterGatewayCommandOutput} for command's `response` shape.
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
 * @example Delete a requester gateway
 * ```javascript
 * // Delete requester gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new DeleteRequesterGatewayCommand(input);
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
export class DeleteRequesterGatewayCommand extends $Command
  .classBuilder<
    DeleteRequesterGatewayCommandInput,
    DeleteRequesterGatewayCommandOutput,
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
  .s("RTBFabric", "DeleteRequesterGateway", {})
  .n("RTBFabricClient", "DeleteRequesterGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRequesterGatewayCommand)
  .de(de_DeleteRequesterGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRequesterGatewayRequest;
      output: DeleteRequesterGatewayResponse;
    };
    sdk: {
      input: DeleteRequesterGatewayCommandInput;
      output: DeleteRequesterGatewayCommandOutput;
    };
  };
}
