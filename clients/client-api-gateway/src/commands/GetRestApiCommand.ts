// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestApiRequest, RestApi } from "../models/models_0";
import { GetRestApi } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestApiCommand}.
 */
export interface GetRestApiCommandInput extends GetRestApiRequest {}
/**
 * @public
 *
 * The output of {@link GetRestApiCommand}.
 */
export interface GetRestApiCommandOutput extends RestApi, __MetadataBearer {}

/**
 * <p>Lists the RestApi resource in the collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetRestApiRequest
 *   restApiId: "STRING_VALUE", // required
 * };
 * const command = new GetRestApiCommand(input);
 * const response = await client.send(command);
 * // { // RestApi
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   warnings: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   binaryMediaTypes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   minimumCompressionSize: Number("int"),
 * //   apiKeySource: "HEADER" || "AUTHORIZER",
 * //   endpointConfiguration: { // EndpointConfiguration
 * //     types: [ // ListOfEndpointType
 * //       "REGIONAL" || "EDGE" || "PRIVATE",
 * //     ],
 * //     ipAddressType: "ipv4" || "dualstack",
 * //     vpcEndpointIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   policy: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   disableExecuteApiEndpoint: true || false,
 * //   rootResourceId: "STRING_VALUE",
 * //   securityPolicy: "TLS_1_0" || "TLS_1_2" || "SecurityPolicy_TLS13_1_3_2025_09" || "SecurityPolicy_TLS13_1_3_FIPS_2025_09" || "SecurityPolicy_TLS13_1_2_PFS_PQ_2025_09" || "SecurityPolicy_TLS13_1_2_FIPS_PQ_2025_09" || "SecurityPolicy_TLS13_1_2_PQ_2025_09" || "SecurityPolicy_TLS13_1_2_2021_06" || "SecurityPolicy_TLS13_2025_EDGE" || "SecurityPolicy_TLS12_PFS_2025_EDGE" || "SecurityPolicy_TLS12_2018_EDGE",
 * //   endpointAccessMode: "BASIC" || "STRICT",
 * //   apiStatus: "UPDATING" || "AVAILABLE" || "PENDING" || "FAILED",
 * //   apiStatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRestApiCommandInput - {@link GetRestApiCommandInput}
 * @returns {@link GetRestApiCommandOutput}
 * @see {@link GetRestApiCommandInput} for command's `input` shape.
 * @see {@link GetRestApiCommandOutput} for command's `response` shape.
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
export class GetRestApiCommand extends $Command
  .classBuilder<
    GetRestApiCommandInput,
    GetRestApiCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetRestApi", {})
  .n("APIGatewayClient", "GetRestApiCommand")
  .sc(GetRestApi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRestApiRequest;
      output: RestApi;
    };
    sdk: {
      input: GetRestApiCommandInput;
      output: GetRestApiCommandOutput;
    };
  };
}
