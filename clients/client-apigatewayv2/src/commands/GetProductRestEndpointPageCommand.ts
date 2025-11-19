// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProductRestEndpointPageRequest, GetProductRestEndpointPageResponse } from "../models/models_0";
import { GetProductRestEndpointPage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProductRestEndpointPageCommand}.
 */
export interface GetProductRestEndpointPageCommandInput extends GetProductRestEndpointPageRequest {}
/**
 * @public
 *
 * The output of {@link GetProductRestEndpointPageCommand}.
 */
export interface GetProductRestEndpointPageCommandOutput extends GetProductRestEndpointPageResponse, __MetadataBearer {}

/**
 * <p>Gets a product REST endpoint page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetProductRestEndpointPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetProductRestEndpointPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetProductRestEndpointPageRequest
 *   IncludeRawDisplayContent: "STRING_VALUE",
 *   PortalProductId: "STRING_VALUE", // required
 *   ProductRestEndpointPageId: "STRING_VALUE", // required
 *   ResourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new GetProductRestEndpointPageCommand(input);
 * const response = await client.send(command);
 * // { // GetProductRestEndpointPageResponse
 * //   DisplayContent: { // EndpointDisplayContentResponse
 * //     Body: "STRING_VALUE",
 * //     Endpoint: "STRING_VALUE", // required
 * //     OperationName: "STRING_VALUE",
 * //   },
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ProductRestEndpointPageArn: "STRING_VALUE",
 * //   ProductRestEndpointPageId: "STRING_VALUE",
 * //   RawDisplayContent: "STRING_VALUE",
 * //   RestEndpointIdentifier: { // RestEndpointIdentifier
 * //     IdentifierParts: { // IdentifierParts
 * //       Method: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE", // required
 * //       RestApiId: "STRING_VALUE", // required
 * //       Stage: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Status: "AVAILABLE" || "IN_PROGRESS" || "FAILED",
 * //   StatusException: { // StatusException
 * //     Exception: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   TryItState: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetProductRestEndpointPageCommandInput - {@link GetProductRestEndpointPageCommandInput}
 * @returns {@link GetProductRestEndpointPageCommandOutput}
 * @see {@link GetProductRestEndpointPageCommandInput} for command's `input` shape.
 * @see {@link GetProductRestEndpointPageCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class GetProductRestEndpointPageCommand extends $Command
  .classBuilder<
    GetProductRestEndpointPageCommandInput,
    GetProductRestEndpointPageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetProductRestEndpointPage", {})
  .n("ApiGatewayV2Client", "GetProductRestEndpointPageCommand")
  .sc(GetProductRestEndpointPage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductRestEndpointPageRequest;
      output: GetProductRestEndpointPageResponse;
    };
    sdk: {
      input: GetProductRestEndpointPageCommandInput;
      output: GetProductRestEndpointPageCommandOutput;
    };
  };
}
