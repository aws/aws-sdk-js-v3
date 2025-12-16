// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Deployments, GetDeploymentsRequest } from "../models/models_0";
import { GetDeployments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandInput extends GetDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandOutput extends Deployments, __MetadataBearer {}

/**
 * <p>Gets information about a Deployments collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDeploymentsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDeploymentsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetDeploymentsRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // Deployments
 * //   items: [ // ListOfDeployment
 * //     { // Deployment
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       apiSummary: { // PathToMapOfMethodSnapshot
 * //         "<keys>": { // MapOfMethodSnapshot
 * //           "<keys>": { // MethodSnapshot
 * //             authorizationType: "STRING_VALUE",
 * //             apiKeyRequired: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentsCommandInput - {@link GetDeploymentsCommandInput}
 * @returns {@link GetDeploymentsCommandOutput}
 * @see {@link GetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
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
export class GetDeploymentsCommand extends $Command
  .classBuilder<
    GetDeploymentsCommandInput,
    GetDeploymentsCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetDeployments", {})
  .n("APIGatewayClient", "GetDeploymentsCommand")
  .sc(GetDeployments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentsRequest;
      output: Deployments;
    };
    sdk: {
      input: GetDeploymentsCommandInput;
      output: GetDeploymentsCommandOutput;
    };
  };
}
