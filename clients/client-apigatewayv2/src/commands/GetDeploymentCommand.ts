// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDeploymentRequest, GetDeploymentResponse } from "../models/models_0";
import { GetDeployment } from "../schemas/schemas_0";

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
export interface GetDeploymentCommandOutput extends GetDeploymentResponse, __MetadataBearer {}

/**
 * <p>Gets a Deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetDeploymentCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetDeploymentCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetDeploymentRequest
 *   ApiId: "STRING_VALUE", // required
 *   DeploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentResponse
 * //   AutoDeployed: true || false,
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   DeploymentId: "STRING_VALUE",
 * //   DeploymentStatus: "PENDING" || "FAILED" || "DEPLOYED",
 * //   DeploymentStatusMessage: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class GetDeploymentCommand extends $Command
  .classBuilder<
    GetDeploymentCommandInput,
    GetDeploymentCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetDeployment", {})
  .n("ApiGatewayV2Client", "GetDeploymentCommand")
  .sc(GetDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentRequest;
      output: GetDeploymentResponse;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}
