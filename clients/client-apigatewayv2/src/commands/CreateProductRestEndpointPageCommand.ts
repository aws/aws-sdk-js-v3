// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProductRestEndpointPageRequest, CreateProductRestEndpointPageResponse } from "../models/models_0";
import { CreateProductRestEndpointPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProductRestEndpointPageCommand}.
 */
export interface CreateProductRestEndpointPageCommandInput extends CreateProductRestEndpointPageRequest {}
/**
 * @public
 *
 * The output of {@link CreateProductRestEndpointPageCommand}.
 */
export interface CreateProductRestEndpointPageCommandOutput
  extends CreateProductRestEndpointPageResponse,
    __MetadataBearer {}

/**
 * <p>Creates a product REST endpoint page for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateProductRestEndpointPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateProductRestEndpointPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateProductRestEndpointPageRequest
 *   DisplayContent: { // EndpointDisplayContent
 *     None: {},
 *     Overrides: { // DisplayContentOverrides
 *       Body: "STRING_VALUE",
 *       Endpoint: "STRING_VALUE",
 *       OperationName: "STRING_VALUE",
 *     },
 *   },
 *   PortalProductId: "STRING_VALUE", // required
 *   RestEndpointIdentifier: { // RestEndpointIdentifier
 *     IdentifierParts: { // IdentifierParts
 *       Method: "STRING_VALUE", // required
 *       Path: "STRING_VALUE", // required
 *       RestApiId: "STRING_VALUE", // required
 *       Stage: "STRING_VALUE", // required
 *     },
 *   },
 *   TryItState: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateProductRestEndpointPageCommand(input);
 * const response = await client.send(command);
 * // { // CreateProductRestEndpointPageResponse
 * //   DisplayContent: { // EndpointDisplayContentResponse
 * //     Body: "STRING_VALUE",
 * //     Endpoint: "STRING_VALUE", // required
 * //     OperationName: "STRING_VALUE",
 * //   },
 * //   LastModified: new Date("TIMESTAMP"),
 * //   ProductRestEndpointPageArn: "STRING_VALUE",
 * //   ProductRestEndpointPageId: "STRING_VALUE",
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
 * @param CreateProductRestEndpointPageCommandInput - {@link CreateProductRestEndpointPageCommandInput}
 * @returns {@link CreateProductRestEndpointPageCommandOutput}
 * @see {@link CreateProductRestEndpointPageCommandInput} for command's `input` shape.
 * @see {@link CreateProductRestEndpointPageCommandOutput} for command's `response` shape.
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
export class CreateProductRestEndpointPageCommand extends $Command
  .classBuilder<
    CreateProductRestEndpointPageCommandInput,
    CreateProductRestEndpointPageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "CreateProductRestEndpointPage", {})
  .n("ApiGatewayV2Client", "CreateProductRestEndpointPageCommand")
  .sc(CreateProductRestEndpointPage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProductRestEndpointPageRequest;
      output: CreateProductRestEndpointPageResponse;
    };
    sdk: {
      input: CreateProductRestEndpointPageCommandInput;
      output: CreateProductRestEndpointPageCommandOutput;
    };
  };
}
