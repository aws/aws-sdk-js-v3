// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Authorizer, CreateAuthorizerRequest } from "../models/models_0";
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
export interface CreateAuthorizerCommandOutput extends Authorizer, __MetadataBearer {}

/**
 * <p>Adds a new Authorizer resource to an existing RestApi resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // CreateAuthorizerRequest
 *   restApiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "TOKEN" || "REQUEST" || "COGNITO_USER_POOLS", // required
 *   providerARNs: [ // ListOfARNs
 *     "STRING_VALUE",
 *   ],
 *   authType: "STRING_VALUE",
 *   authorizerUri: "STRING_VALUE",
 *   authorizerCredentials: "STRING_VALUE",
 *   identitySource: "STRING_VALUE",
 *   identityValidationExpression: "STRING_VALUE",
 *   authorizerResultTtlInSeconds: Number("int"),
 * };
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // Authorizer
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   type: "TOKEN" || "REQUEST" || "COGNITO_USER_POOLS",
 * //   providerARNs: [ // ListOfARNs
 * //     "STRING_VALUE",
 * //   ],
 * //   authType: "STRING_VALUE",
 * //   authorizerUri: "STRING_VALUE",
 * //   authorizerCredentials: "STRING_VALUE",
 * //   identitySource: "STRING_VALUE",
 * //   identityValidationExpression: "STRING_VALUE",
 * //   authorizerResultTtlInSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateAuthorizerCommandInput - {@link CreateAuthorizerCommandInput}
 * @returns {@link CreateAuthorizerCommandOutput}
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class CreateAuthorizerCommand extends $Command
  .classBuilder<
    CreateAuthorizerCommandInput,
    CreateAuthorizerCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "CreateAuthorizer", {})
  .n("APIGatewayClient", "CreateAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_CreateAuthorizerCommand)
  .de(de_CreateAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthorizerRequest;
      output: Authorizer;
    };
    sdk: {
      input: CreateAuthorizerCommandInput;
      output: CreateAuthorizerCommandOutput;
    };
  };
}
