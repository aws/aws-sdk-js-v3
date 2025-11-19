// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProductRestEndpointPageRequest } from "../models/models_0";
import { DeleteProductRestEndpointPage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProductRestEndpointPageCommand}.
 */
export interface DeleteProductRestEndpointPageCommandInput extends DeleteProductRestEndpointPageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductRestEndpointPageCommand}.
 */
export interface DeleteProductRestEndpointPageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a product REST endpoint page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteProductRestEndpointPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteProductRestEndpointPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteProductRestEndpointPageRequest
 *   PortalProductId: "STRING_VALUE", // required
 *   ProductRestEndpointPageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductRestEndpointPageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductRestEndpointPageCommandInput - {@link DeleteProductRestEndpointPageCommandInput}
 * @returns {@link DeleteProductRestEndpointPageCommandOutput}
 * @see {@link DeleteProductRestEndpointPageCommandInput} for command's `input` shape.
 * @see {@link DeleteProductRestEndpointPageCommandOutput} for command's `response` shape.
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
export class DeleteProductRestEndpointPageCommand extends $Command
  .classBuilder<
    DeleteProductRestEndpointPageCommandInput,
    DeleteProductRestEndpointPageCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "DeleteProductRestEndpointPage", {})
  .n("ApiGatewayV2Client", "DeleteProductRestEndpointPageCommand")
  .sc(DeleteProductRestEndpointPage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductRestEndpointPageRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductRestEndpointPageCommandInput;
      output: DeleteProductRestEndpointPageCommandOutput;
    };
  };
}
