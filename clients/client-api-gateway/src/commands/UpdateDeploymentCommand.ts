// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Deployment, UpdateDeploymentRequest } from "../models/models_0";
import { UpdateDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandInput extends UpdateDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandOutput extends Deployment, __MetadataBearer {}

/**
 * <p>Changes information about a Deployment resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateDeploymentCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateDeploymentCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateDeploymentRequest
 *   restApiId: "STRING_VALUE", // required
 *   deploymentId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDeploymentCommand(input);
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
 * @param UpdateDeploymentCommandInput - {@link UpdateDeploymentCommandInput}
 * @returns {@link UpdateDeploymentCommandOutput}
 * @see {@link UpdateDeploymentCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentCommandOutput} for command's `response` shape.
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
export class UpdateDeploymentCommand extends $Command
  .classBuilder<
    UpdateDeploymentCommandInput,
    UpdateDeploymentCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "UpdateDeployment", {})
  .n("APIGatewayClient", "UpdateDeploymentCommand")
  .sc(UpdateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentRequest;
      output: Deployment;
    };
    sdk: {
      input: UpdateDeploymentCommandInput;
      output: UpdateDeploymentCommandOutput;
    };
  };
}
