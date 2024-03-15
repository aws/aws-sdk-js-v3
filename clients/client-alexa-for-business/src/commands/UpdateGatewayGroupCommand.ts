// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewayGroupRequest, UpdateGatewayGroupResponse } from "../models/models_0";
import { de_UpdateGatewayGroupCommand, se_UpdateGatewayGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayGroupCommand}.
 */
export interface UpdateGatewayGroupCommandInput extends UpdateGatewayGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayGroupCommand}.
 */
export interface UpdateGatewayGroupCommandOutput extends UpdateGatewayGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the details of a gateway group. If any optional field is not provided, the
 *          existing corresponding value is left unmodified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateGatewayGroupRequest
 *   GatewayGroupArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGatewayGroupCommandInput - {@link UpdateGatewayGroupCommandInput}
 * @returns {@link UpdateGatewayGroupCommandOutput}
 * @see {@link UpdateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class UpdateGatewayGroupCommand extends $Command
  .classBuilder<
    UpdateGatewayGroupCommandInput,
    UpdateGatewayGroupCommandOutput,
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
  .s("AlexaForBusiness", "UpdateGatewayGroup", {})
  .n("AlexaForBusinessClient", "UpdateGatewayGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewayGroupCommand)
  .de(de_UpdateGatewayGroupCommand)
  .build() {}
