// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApiMappingsRequest, GetApiMappingsResponse } from "../models/models_0";
import { de_GetApiMappingsCommand, se_GetApiMappingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiMappingsCommand}.
 */
export interface GetApiMappingsCommandInput extends GetApiMappingsRequest {}
/**
 * @public
 *
 * The output of {@link GetApiMappingsCommand}.
 */
export interface GetApiMappingsCommandOutput extends GetApiMappingsResponse, __MetadataBearer {}

/**
 * <p>Gets API mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiMappingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetApiMappingsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetApiMappingsCommand(input);
 * const response = await client.send(command);
 * // { // GetApiMappingsResponse
 * //   Items: [ // __listOfApiMapping
 * //     { // ApiMapping
 * //       ApiId: "STRING_VALUE", // required
 * //       ApiMappingId: "STRING_VALUE",
 * //       ApiMappingKey: "STRING_VALUE",
 * //       Stage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApiMappingsCommandInput - {@link GetApiMappingsCommandInput}
 * @returns {@link GetApiMappingsCommandOutput}
 * @see {@link GetApiMappingsCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetApiMappingsCommand extends $Command
  .classBuilder<
    GetApiMappingsCommandInput,
    GetApiMappingsCommandOutput,
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
  .s("ApiGatewayV2", "GetApiMappings", {})
  .n("ApiGatewayV2Client", "GetApiMappingsCommand")
  .f(void 0, void 0)
  .ser(se_GetApiMappingsCommand)
  .de(de_GetApiMappingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiMappingsRequest;
      output: GetApiMappingsResponse;
    };
    sdk: {
      input: GetApiMappingsCommandInput;
      output: GetApiMappingsCommandOutput;
    };
  };
}
