// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductPageRequest } from "../models/models_0";
import { DeleteProductPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductPageCommand}.
 */
export interface DeleteProductPageCommandInput extends DeleteProductPageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductPageCommand}.
 */
export interface DeleteProductPageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a product page of a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteProductPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteProductPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteProductPageRequest
 *   PortalProductId: "STRING_VALUE", // required
 *   ProductPageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductPageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductPageCommandInput - {@link DeleteProductPageCommandInput}
 * @returns {@link DeleteProductPageCommandOutput}
 * @see {@link DeleteProductPageCommandInput} for command's `input` shape.
 * @see {@link DeleteProductPageCommandOutput} for command's `response` shape.
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
export class DeleteProductPageCommand extends command<DeleteProductPageCommandInput, DeleteProductPageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProductPage",
  DeleteProductPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductPageRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductPageCommandInput;
      output: DeleteProductPageCommandOutput;
    };
  };
}
