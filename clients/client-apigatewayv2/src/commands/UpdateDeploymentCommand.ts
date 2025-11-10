// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeploymentRequest, UpdateDeploymentResponse } from "../models/models_0";
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
export interface UpdateDeploymentCommandOutput extends UpdateDeploymentResponse, __MetadataBearer {}

/**
 * <p>Updates a Deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateDeploymentCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateDeploymentCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateDeploymentRequest
 *   ApiId: "STRING_VALUE", // required
 *   DeploymentId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeploymentResponse
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
 * @param UpdateDeploymentCommandInput - {@link UpdateDeploymentCommandInput}
 * @returns {@link UpdateDeploymentCommandOutput}
 * @see {@link UpdateDeploymentCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
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
export class UpdateDeploymentCommand extends $Command
  .classBuilder<
    UpdateDeploymentCommandInput,
    UpdateDeploymentCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateDeployment", {})
  .n("ApiGatewayV2Client", "UpdateDeploymentCommand")
  .sc(UpdateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentRequest;
      output: UpdateDeploymentResponse;
    };
    sdk: {
      input: UpdateDeploymentCommandInput;
      output: UpdateDeploymentCommandOutput;
    };
  };
}
