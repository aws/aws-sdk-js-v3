// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewayRequest, UpdateGatewayResponse } from "../models/models_0";
import { de_UpdateGatewayCommand, se_UpdateGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandInput extends UpdateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandOutput extends UpdateGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates the details of a gateway. If any optional field is not provided, the existing
 *          corresponding value is left unmodified.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateGatewayCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateGatewayCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateGatewayRequest
 *   GatewayArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SoftwareVersion: "STRING_VALUE",
 * };
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGatewayCommandInput - {@link UpdateGatewayCommandInput}
 * @returns {@link UpdateGatewayCommandOutput}
 * @see {@link UpdateGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCommandOutput} for command's `response` shape.
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
 */
export class UpdateGatewayCommand extends $Command
  .classBuilder<
    UpdateGatewayCommandInput,
    UpdateGatewayCommandOutput,
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
  .s("AlexaForBusiness", "UpdateGateway", {})
  .n("AlexaForBusinessClient", "UpdateGatewayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewayCommand)
  .de(de_UpdateGatewayCommand)
  .build() {}
