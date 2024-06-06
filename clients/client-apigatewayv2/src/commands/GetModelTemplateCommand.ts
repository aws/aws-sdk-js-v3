// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelTemplateRequest, GetModelTemplateResponse } from "../models/models_0";
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
export interface GetModelTemplateCommandOutput extends GetModelTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets a model template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetModelTemplateCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetModelTemplateCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetModelTemplateRequest
 *   ApiId: "STRING_VALUE", // required
 *   ModelId: "STRING_VALUE", // required
 * };
 * const command = new GetModelTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetModelTemplateResponse
 * //   Value: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelTemplateCommandInput - {@link GetModelTemplateCommandInput}
 * @returns {@link GetModelTemplateCommandOutput}
 * @see {@link GetModelTemplateCommandInput} for command's `input` shape.
 * @see {@link GetModelTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetModelTemplateCommand extends $Command
  .classBuilder<
    GetModelTemplateCommandInput,
    GetModelTemplateCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetModelTemplate", {})
  .n("ApiGatewayV2Client", "GetModelTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetModelTemplateCommand)
  .de(de_GetModelTemplateCommand)
  .build() {}
