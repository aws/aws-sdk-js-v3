// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import { de_CreateAuthorizerCommand, se_CreateAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandInput extends CreateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandOutput extends CreateAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Creates an authorizer.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 *   authorizerFunctionArn: "STRING_VALUE", // required
 *   tokenKeyName: "STRING_VALUE",
 *   tokenSigningPublicKeys: { // PublicKeyMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   status: "ACTIVE" || "INACTIVE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   signingDisabled: true || false,
 *   enableCachingForHttp: true || false,
 * };
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthorizerResponse
 * //   authorizerName: "STRING_VALUE",
 * //   authorizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthorizerCommandInput - {@link CreateAuthorizerCommandInput}
 * @returns {@link CreateAuthorizerCommandOutput}
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateAuthorizerCommand extends $Command
  .classBuilder<
    CreateAuthorizerCommandInput,
    CreateAuthorizerCommandOutput,
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
  .s("AWSIotService", "CreateAuthorizer", {})
  .n("IoTClient", "CreateAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_CreateAuthorizerCommand)
  .de(de_CreateAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthorizerRequest;
      output: CreateAuthorizerResponse;
    };
    sdk: {
      input: CreateAuthorizerCommandInput;
      output: CreateAuthorizerCommandOutput;
    };
  };
}
