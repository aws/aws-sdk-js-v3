// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutRestApiRequest, RestApi } from "../models/models_0";
import { PutRestApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PutRestApiCommandInputType = Omit<PutRestApiRequest, "body"> & {
  body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PutRestApiCommand}.
 */
export interface PutRestApiCommandInput extends PutRestApiCommandInputType {}
/**
 * @public
 *
 * The output of {@link PutRestApiCommand}.
 */
export interface PutRestApiCommandOutput extends RestApi, __MetadataBearer {}

/**
 * <p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions.
 *             The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // PutRestApiRequest
 *   restApiId: "STRING_VALUE", // required
 *   mode: "merge" || "overwrite",
 *   failOnWarnings: true || false,
 *   parameters: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new PutRestApiCommand(input);
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
 * @param PutRestApiCommandInput - {@link PutRestApiCommandInput}
 * @returns {@link PutRestApiCommandOutput}
 * @see {@link PutRestApiCommandInput} for command's `input` shape.
 * @see {@link PutRestApiCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class PutRestApiCommand extends $Command
  .classBuilder<
    PutRestApiCommandInput,
    PutRestApiCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "PutRestApi", {})
  .n("APIGatewayClient", "PutRestApiCommand")
  .sc(PutRestApi$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRestApiRequest;
      output: RestApi;
    };
    sdk: {
      input: PutRestApiCommandInput;
      output: PutRestApiCommandOutput;
    };
  };
}
