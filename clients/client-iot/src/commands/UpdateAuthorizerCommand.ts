// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateAuthorizerRequest, UpdateAuthorizerResponse } from "../models/models_2";
import { de_UpdateAuthorizerCommand, se_UpdateAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandInput extends UpdateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandOutput extends UpdateAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Updates an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 *   authorizerFunctionArn: "STRING_VALUE",
 *   tokenKeyName: "STRING_VALUE",
 *   tokenSigningPublicKeys: { // PublicKeyMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   status: "ACTIVE" || "INACTIVE",
 *   enableCachingForHttp: true || false,
 * };
 * const command = new UpdateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAuthorizerResponse
 * //   authorizerName: "STRING_VALUE",
 * //   authorizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAuthorizerCommandInput - {@link UpdateAuthorizerCommandInput}
 * @returns {@link UpdateAuthorizerCommandOutput}
 * @see {@link UpdateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class UpdateAuthorizerCommand extends $Command
  .classBuilder<
    UpdateAuthorizerCommandInput,
    UpdateAuthorizerCommandOutput,
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
  .s("AWSIotService", "UpdateAuthorizer", {})
  .n("IoTClient", "UpdateAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAuthorizerCommand)
  .de(de_UpdateAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAuthorizerRequest;
      output: UpdateAuthorizerResponse;
    };
    sdk: {
      input: UpdateAuthorizerCommandInput;
      output: UpdateAuthorizerCommandOutput;
    };
  };
}
