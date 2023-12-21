// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGatewayRequest, GetGatewayResponse } from "../models/models_0";
import { de_GetGatewayCommand, se_GetGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandInput extends GetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandOutput extends GetGatewayResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Retrieves the details of a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetGatewayCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetGatewayCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetGatewayRequest
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new GetGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetGatewayResponse
 * //   Gateway: { // Gateway
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     GatewayGroupArn: "STRING_VALUE",
 * //     SoftwareVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGatewayCommandInput - {@link GetGatewayCommandInput}
 * @returns {@link GetGatewayCommandOutput}
 * @see {@link GetGatewayCommandInput} for command's `input` shape.
 * @see {@link GetGatewayCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetGatewayCommand extends $Command
  .classBuilder<
    GetGatewayCommandInput,
    GetGatewayCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "GetGateway", {})
  .n("AlexaForBusinessClient", "GetGatewayCommand")
  .f(void 0, void 0)
  .ser(se_GetGatewayCommand)
  .de(de_GetGatewayCommand)
  .build() {}
