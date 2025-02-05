// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelTemplateRequest, Template } from "../models/models_0";
import { de_GetModelTemplateCommand, se_GetModelTemplateCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetModelTemplate", {})
  .n("APIGatewayClient", "GetModelTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetModelTemplateCommand)
  .de(de_GetModelTemplateCommand)
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
