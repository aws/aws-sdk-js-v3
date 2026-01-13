// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Deployment, GetDeploymentRequest } from "../models/models_0";
import { GetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Gets information about a Deployment resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDeploymentCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDeploymentCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetDeploymentRequest
 *   restApiId: "STRING_VALUE", // required
 *   deploymentId: "STRING_VALUE", // required
 *   embed: [ // ListOfString
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // Deployment
 * //   id: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   apiSummary: { // PathToMapOfMethodSnapshot
 * //     "<keys>": { // MapOfMethodSnapshot
 * //       "<keys>": { // MethodSnapshot
 * //         authorizationType: "STRING_VALUE",
 * //         apiKeyRequired: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
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
export class GetDeploymentCommand extends $Command
  .classBuilder<
    GetDeploymentCommandInput,
    GetDeploymentCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetDeployment", {})
  .n("APIGatewayClient", "GetDeploymentCommand")
  .sc(GetDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentRequest;
      output: Deployment;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}
