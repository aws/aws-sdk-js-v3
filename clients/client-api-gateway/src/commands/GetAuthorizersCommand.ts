// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Authorizers, GetAuthorizersRequest } from "../models/models_0";
import { GetAuthorizers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandInput extends GetAuthorizersRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandOutput extends Authorizers, __MetadataBearer {}

/**
 * <p>Describe an existing Authorizers resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetAuthorizersCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetAuthorizersCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetAuthorizersRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetAuthorizersCommand(input);
 * const response = await client.send(command);
 * // { // Authorizers
 * //   items: [ // ListOfAuthorizer
 * //     { // Authorizer
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "TOKEN" || "REQUEST" || "COGNITO_USER_POOLS",
 * //       providerARNs: [ // ListOfARNs
 * //         "STRING_VALUE",
 * //       ],
 * //       authType: "STRING_VALUE",
 * //       authorizerUri: "STRING_VALUE",
 * //       authorizerCredentials: "STRING_VALUE",
 * //       identitySource: "STRING_VALUE",
 * //       identityValidationExpression: "STRING_VALUE",
 * //       authorizerResultTtlInSeconds: Number("int"),
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAuthorizersCommandInput - {@link GetAuthorizersCommandInput}
 * @returns {@link GetAuthorizersCommandOutput}
 * @see {@link GetAuthorizersCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
 *
 * @public
 */
export class GetAuthorizersCommand extends $Command
  .classBuilder<
    GetAuthorizersCommandInput,
    GetAuthorizersCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetAuthorizers", {})
  .n("APIGatewayClient", "GetAuthorizersCommand")
  .sc(GetAuthorizers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAuthorizersRequest;
      output: Authorizers;
    };
    sdk: {
      input: GetAuthorizersCommandInput;
      output: GetAuthorizersCommandOutput;
    };
  };
}
