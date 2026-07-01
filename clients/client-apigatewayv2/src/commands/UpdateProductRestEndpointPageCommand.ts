// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProductRestEndpointPageRequest, UpdateProductRestEndpointPageResponse } from "../models/models_0";
import { UpdateProductRestEndpointPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProductRestEndpointPageCommand}.
 */
export interface UpdateProductRestEndpointPageCommandInput extends UpdateProductRestEndpointPageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProductRestEndpointPageCommand}.
 */
export interface UpdateProductRestEndpointPageCommandOutput extends UpdateProductRestEndpointPageResponse, __MetadataBearer {}

/**
 * <p>Updates a product REST endpoint page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateProductRestEndpointPageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateProductRestEndpointPageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateProductRestEndpointPageRequest
 *   DisplayContent: { // EndpointDisplayContent
 *     None: {},
 *     Overrides: { // DisplayContentOverrides
 *       Body: "STRING_VALUE",
 *       Endpoint: "STRING_VALUE",
 *       OperationName: "STRING_VALUE",
 *     },
 *   },
 *   PortalProductId: "STRING_VALUE", // required
 *   ProductRestEndpointPageId: "STRING_VALUE", // required
 *   TryItState: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateProductRestEndpointPageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProductRestEndpointPageResponse
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
 * @param UpdateProductRestEndpointPageCommandInput - {@link UpdateProductRestEndpointPageCommandInput}
 * @returns {@link UpdateProductRestEndpointPageCommandOutput}
 * @see {@link UpdateProductRestEndpointPageCommandInput} for command's `input` shape.
 * @see {@link UpdateProductRestEndpointPageCommandOutput} for command's `response` shape.
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
export class UpdateProductRestEndpointPageCommand extends command<UpdateProductRestEndpointPageCommandInput, UpdateProductRestEndpointPageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProductRestEndpointPage",
  UpdateProductRestEndpointPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProductRestEndpointPageRequest;
      output: UpdateProductRestEndpointPageResponse;
    };
    sdk: {
      input: UpdateProductRestEndpointPageCommandInput;
      output: UpdateProductRestEndpointPageCommandOutput;
    };
  };
}
