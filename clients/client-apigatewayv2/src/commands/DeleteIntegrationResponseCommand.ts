// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIntegrationResponseRequest } from "../models/models_0";
import { DeleteIntegrationResponse } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationResponseCommand}.
 */
export interface DeleteIntegrationResponseCommandInput extends DeleteIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationResponseCommand}.
 */
export interface DeleteIntegrationResponseCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteIntegrationResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   IntegrationId: "STRING_VALUE", // required
 *   IntegrationResponseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationResponseCommandInput - {@link DeleteIntegrationResponseCommandInput}
 * @returns {@link DeleteIntegrationResponseCommandOutput}
 * @see {@link DeleteIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationResponseCommandOutput} for command's `response` shape.
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
export class DeleteIntegrationResponseCommand extends $Command
  .classBuilder<
    DeleteIntegrationResponseCommandInput,
    DeleteIntegrationResponseCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "DeleteIntegrationResponse", {})
  .n("ApiGatewayV2Client", "DeleteIntegrationResponseCommand")
  .sc(DeleteIntegrationResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationResponseRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationResponseCommandInput;
      output: DeleteIntegrationResponseCommandOutput;
    };
  };
}
