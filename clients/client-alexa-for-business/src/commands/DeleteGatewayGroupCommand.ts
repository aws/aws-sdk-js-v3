// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGatewayGroupRequest, DeleteGatewayGroupResponse } from "../models/models_0";
import { de_DeleteGatewayGroupCommand, se_DeleteGatewayGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGatewayGroupCommand}.
 */
export interface DeleteGatewayGroupCommandInput extends DeleteGatewayGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayGroupCommand}.
 */
export interface DeleteGatewayGroupCommandOutput extends DeleteGatewayGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Deletes a gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteGatewayGroupRequest
 *   GatewayGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGatewayGroupCommandInput - {@link DeleteGatewayGroupCommandInput}
 * @returns {@link DeleteGatewayGroupCommandOutput}
 * @see {@link DeleteGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *  <p>Another resource is associated with the resource in the request.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DeleteGatewayGroupCommand extends $Command
  .classBuilder<
    DeleteGatewayGroupCommandInput,
    DeleteGatewayGroupCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "DeleteGatewayGroup", {})
  .n("AlexaForBusinessClient", "DeleteGatewayGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGatewayGroupCommand)
  .de(de_DeleteGatewayGroupCommand)
  .build() {}
