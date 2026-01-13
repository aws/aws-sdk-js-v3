// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetModelTemplateRequest, Template } from "../models/models_0";
import { GetModelTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelTemplateCommand}.
 */
export interface GetModelTemplateCommandInput extends GetModelTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetModelTemplateCommand}.
 */
export interface GetModelTemplateCommandOutput extends Template, __MetadataBearer {}

/**
 * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetModelTemplateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetModelTemplateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetModelTemplateRequest
 *   restApiId: "STRING_VALUE", // required
 *   modelName: "STRING_VALUE", // required
 * };
 * const command = new GetModelTemplateCommand(input);
 * const response = await client.send(command);
 * // { // Template
 * //   value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelTemplateCommandInput - {@link GetModelTemplateCommandInput}
 * @returns {@link GetModelTemplateCommandOutput}
 * @see {@link GetModelTemplateCommandInput} for command's `input` shape.
 * @see {@link GetModelTemplateCommandOutput} for command's `response` shape.
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
export class GetModelTemplateCommand extends $Command
  .classBuilder<
    GetModelTemplateCommandInput,
    GetModelTemplateCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetModelTemplate", {})
  .n("APIGatewayClient", "GetModelTemplateCommand")
  .sc(GetModelTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelTemplateRequest;
      output: Template;
    };
    sdk: {
      input: GetModelTemplateCommandInput;
      output: GetModelTemplateCommandOutput;
    };
  };
}
