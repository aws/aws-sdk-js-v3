// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePortalRequest } from "../models/models_0";
import { DeletePortal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePortalCommand}.
 */
export interface DeletePortalCommandInput extends DeletePortalRequest {}
/**
 * @public
 *
 * The output of {@link DeletePortalCommand}.
 */
export interface DeletePortalCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeletePortalCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeletePortalCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeletePortalRequest
 *   PortalId: "STRING_VALUE", // required
 * };
 * const command = new DeletePortalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePortalCommandInput - {@link DeletePortalCommandInput}
 * @returns {@link DeletePortalCommandOutput}
 * @see {@link DeletePortalCommandInput} for command's `input` shape.
 * @see {@link DeletePortalCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class DeletePortalCommand extends command<DeletePortalCommandInput, DeletePortalCommandOutput>(
  _ep0,
  _mw0,
  "DeletePortal",
  DeletePortal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePortalRequest;
      output: {};
    };
    sdk: {
      input: DeletePortalCommandInput;
      output: DeletePortalCommandOutput;
    };
  };
}
