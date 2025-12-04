// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRequesterGatewayRequest, UpdateRequesterGatewayResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { UpdateRequesterGateway } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRequesterGatewayCommand}.
 */
export interface UpdateRequesterGatewayCommandInput extends UpdateRequesterGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRequesterGatewayCommand}.
 */
export interface UpdateRequesterGatewayCommandOutput extends UpdateRequesterGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates a requester gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, UpdateRequesterGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, UpdateRequesterGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // UpdateRequesterGatewayRequest
 *   clientToken: "STRING_VALUE", // required
 *   gatewayId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRequesterGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param UpdateRequesterGatewayCommandInput - {@link UpdateRequesterGatewayCommandInput}
 * @returns {@link UpdateRequesterGatewayCommandOutput}
 * @see {@link UpdateRequesterGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateRequesterGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
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
 * @example Update requester gateway
 * ```javascript
 * // Update requester gateway
 * const input = {
 *   clientToken: "12345678-1234-1234-1234-123456789012",
 *   description: "Updated requester gateway description",
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new UpdateRequesterGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   status: "PENDING_UPDATE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRequesterGatewayCommand extends $Command
  .classBuilder<
    UpdateRequesterGatewayCommandInput,
    UpdateRequesterGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "UpdateRequesterGateway", {})
  .n("RTBFabricClient", "UpdateRequesterGatewayCommand")
  .sc(UpdateRequesterGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRequesterGatewayRequest;
      output: UpdateRequesterGatewayResponse;
    };
    sdk: {
      input: UpdateRequesterGatewayCommandInput;
      output: UpdateRequesterGatewayCommandOutput;
    };
  };
}
