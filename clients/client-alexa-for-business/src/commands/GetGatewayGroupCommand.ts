// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGatewayGroupRequest, GetGatewayGroupResponse } from "../models/models_0";
import { de_GetGatewayGroupCommand, se_GetGatewayGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayGroupCommand}.
 */
export interface GetGatewayGroupCommandInput extends GetGatewayGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayGroupCommand}.
 */
export interface GetGatewayGroupCommandOutput extends GetGatewayGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Retrieves the details of a gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetGatewayGroupRequest
 *   GatewayGroupArn: "STRING_VALUE", // required
 * };
 * const command = new GetGatewayGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGatewayGroupResponse
 * //   GatewayGroup: { // GatewayGroup
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGatewayGroupCommandInput - {@link GetGatewayGroupCommandInput}
 * @returns {@link GetGatewayGroupCommandOutput}
 * @see {@link GetGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link GetGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetGatewayGroupCommand extends $Command
  .classBuilder<
    GetGatewayGroupCommandInput,
    GetGatewayGroupCommandOutput,
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
  .s("AlexaForBusiness", "GetGatewayGroup", {})
  .n("AlexaForBusinessClient", "GetGatewayGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetGatewayGroupCommand)
  .de(de_GetGatewayGroupCommand)
  .build() {}
