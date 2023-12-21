// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGatewayGroupRequest, CreateGatewayGroupResponse } from "../models/models_0";
import { de_CreateGatewayGroupCommand, se_CreateGatewayGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayGroupCommand}.
 */
export interface CreateGatewayGroupCommandInput extends CreateGatewayGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayGroupCommand}.
 */
export interface CreateGatewayGroupCommandOutput extends CreateGatewayGroupResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a gateway group with the specified details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateGatewayGroupCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateGatewayGroupCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateGatewayGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGatewayGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayGroupResponse
 * //   GatewayGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGatewayGroupCommandInput - {@link CreateGatewayGroupCommandInput}
 * @returns {@link CreateGatewayGroupCommandOutput}
 * @see {@link CreateGatewayGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayGroupCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class CreateGatewayGroupCommand extends $Command
  .classBuilder<
    CreateGatewayGroupCommandInput,
    CreateGatewayGroupCommandOutput,
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
  .s("AlexaForBusiness", "CreateGatewayGroup", {})
  .n("AlexaForBusinessClient", "CreateGatewayGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateGatewayGroupCommand)
  .de(de_CreateGatewayGroupCommand)
  .build() {}
