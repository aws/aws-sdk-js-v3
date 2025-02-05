// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestApisRequest, RestApis } from "../models/models_0";
import { de_GetRestApisCommand, se_GetRestApisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestApisCommand}.
 */
export interface GetRestApisCommandInput extends GetRestApisRequest {}
/**
 * @public
 *
 * The output of {@link GetRestApisCommand}.
 */
export interface GetRestApisCommandOutput extends RestApis, __MetadataBearer {}

/**
 * <p>Lists the RestApis resources for your collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApisCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApisCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetRestApisRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetRestApisCommand(input);
 * const response = await client.send(command);
 * // { // RestApis
 * //   items: [ // ListOfRestApi
 * //     { // RestApi
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //       warnings: [ // ListOfString
 * //         "STRING_VALUE",
 * //       ],
 * //       binaryMediaTypes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       minimumCompressionSize: Number("int"),
 * //       apiKeySource: "HEADER" || "AUTHORIZER",
 * //       endpointConfiguration: { // EndpointConfiguration
 * //         types: [ // ListOfEndpointType
 * //           "REGIONAL" || "EDGE" || "PRIVATE",
 * //         ],
 * //         vpcEndpointIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       policy: "STRING_VALUE",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       disableExecuteApiEndpoint: true || false,
 * //       rootResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRestApisCommandInput - {@link GetRestApisCommandInput}
 * @returns {@link GetRestApisCommandOutput}
 * @see {@link GetRestApisCommandInput} for command's `input` shape.
 * @see {@link GetRestApisCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRestApisCommand extends $Command
  .classBuilder<
    GetRestApisCommandInput,
    GetRestApisCommandOutput,
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
  .s("BackplaneControlService", "GetRestApis", {})
  .n("APIGatewayClient", "GetRestApisCommand")
  .f(void 0, void 0)
  .ser(se_GetRestApisCommand)
  .de(de_GetRestApisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestApisRequest;
      output: RestApis;
    };
    sdk: {
      input: GetRestApisCommandInput;
      output: GetRestApisCommandOutput;
    };
  };
}
