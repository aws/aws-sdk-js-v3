// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelRequest, CreateModelResponse } from "../models/models_0";
import { de_CreateModelCommand, se_CreateModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCommand}.
 */
export interface CreateModelCommandInput extends CreateModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCommand}.
 */
export interface CreateModelCommandOutput extends CreateModelResponse, __MetadataBearer {}

/**
 * <p>Creates a Model for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateModelCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateModelCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateModelRequest
 *   ApiId: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Schema: "STRING_VALUE", // required
 * };
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelResponse
 * //   ContentType: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ModelId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateModelCommandInput - {@link CreateModelCommandInput}
 * @returns {@link CreateModelCommandOutput}
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
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
export class CreateModelCommand extends $Command
  .classBuilder<
    CreateModelCommandInput,
    CreateModelCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "CreateModel", {})
  .n("ApiGatewayV2Client", "CreateModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelCommand)
  .de(de_CreateModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelRequest;
      output: CreateModelResponse;
    };
    sdk: {
      input: CreateModelCommandInput;
      output: CreateModelCommandOutput;
    };
  };
}
