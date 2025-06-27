// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ClearDefaultAuthorizerRequest, ClearDefaultAuthorizerResponse } from "../models/models_0";
import { de_ClearDefaultAuthorizerCommand, se_ClearDefaultAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ClearDefaultAuthorizerCommand}.
 */
export interface ClearDefaultAuthorizerCommandInput extends ClearDefaultAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link ClearDefaultAuthorizerCommand}.
 */
export interface ClearDefaultAuthorizerCommandOutput extends ClearDefaultAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Clears the default authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ClearDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ClearDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new ClearDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ClearDefaultAuthorizerCommandInput - {@link ClearDefaultAuthorizerCommandInput}
 * @returns {@link ClearDefaultAuthorizerCommandOutput}
 * @see {@link ClearDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link ClearDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ClearDefaultAuthorizerCommand extends $Command
  .classBuilder<
    ClearDefaultAuthorizerCommandInput,
    ClearDefaultAuthorizerCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ClearDefaultAuthorizer", {})
  .n("IoTClient", "ClearDefaultAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_ClearDefaultAuthorizerCommand)
  .de(de_ClearDefaultAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: ClearDefaultAuthorizerCommandInput;
      output: ClearDefaultAuthorizerCommandOutput;
    };
  };
}
