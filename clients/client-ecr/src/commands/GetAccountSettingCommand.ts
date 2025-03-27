// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountSettingRequest, GetAccountSettingResponse } from "../models/models_0";
import { de_GetAccountSettingCommand, se_GetAccountSettingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSettingCommand}.
 */
export interface GetAccountSettingCommandInput extends GetAccountSettingRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingCommand}.
 */
export interface GetAccountSettingCommandOutput extends GetAccountSettingResponse, __MetadataBearer {}

/**
 * <p>Retrieves the account setting value for the specified setting name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetAccountSettingCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetAccountSettingCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // GetAccountSettingRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetAccountSettingCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingResponse
 * //   name: "STRING_VALUE",
 * //   value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountSettingCommandInput - {@link GetAccountSettingCommandInput}
 * @returns {@link GetAccountSettingCommandOutput}
 * @see {@link GetAccountSettingCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class GetAccountSettingCommand extends $Command
  .classBuilder<
    GetAccountSettingCommandInput,
    GetAccountSettingCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetAccountSetting", {})
  .n("ECRClient", "GetAccountSettingCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountSettingCommand)
  .de(de_GetAccountSettingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountSettingRequest;
      output: GetAccountSettingResponse;
    };
    sdk: {
      input: GetAccountSettingCommandInput;
      output: GetAccountSettingCommandOutput;
    };
  };
}
