// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeploymentRequest, Deployment } from "../models/models_0";
import { CreateDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Creates a Deployment resource, which makes a specified RestApi callable over the internet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDeploymentCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDeploymentCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateDeploymentRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE",
 *   stageDescription: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   cacheClusterEnabled: true || false,
 *   cacheClusterSize: "0.5" || "1.6" || "6.1" || "13.5" || "28.4" || "58.2" || "118" || "237",
 *   variables: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   canarySettings: { // DeploymentCanarySettings
 *     percentTraffic: Number("double"),
 *     stageVariableOverrides: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     useStageCache: true || false,
 *   },
 *   tracingEnabled: true || false,
 * };
 * const command = new CreateDeploymentCommand(input);
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
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "CreateDeployment", {})
  .n("APIGatewayClient", "CreateDeploymentCommand")
  .sc(CreateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentRequest;
      output: Deployment;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
