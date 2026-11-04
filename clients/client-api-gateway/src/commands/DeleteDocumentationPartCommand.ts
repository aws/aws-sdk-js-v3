// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDocumentationPartRequest } from "../models/models_0";
import { DeleteDocumentationPart$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDocumentationPartCommand}.
 */
export interface DeleteDocumentationPartCommandInput extends DeleteDocumentationPartRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDocumentationPartCommand}.
 */
export interface DeleteDocumentationPartCommandOutput extends __MetadataBearer {}

/**
 * Deletes a documentation part
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteDocumentationPartCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteDocumentationPartCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteDocumentationPartRequest
 *   restApiId: "STRING_VALUE", // required
 *   documentationPartId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDocumentationPartCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDocumentationPartCommandInput - {@link DeleteDocumentationPartCommandInput}
 * @returns {@link DeleteDocumentationPartCommandOutput}
 * @see {@link DeleteDocumentationPartCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentationPartCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource is not found. Make sure that the request URI is correct.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request has reached its throttling limit. Retry after the specified time period.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is denied because the caller has insufficient permissions.
 *
 * @throws {@link APIGatewayServiceException}
 *
 * Base exception class for all service exceptions from APIGateway service.
 *
 * @public
 */
export class DeleteDocumentationPartCommand extends command<DeleteDocumentationPartCommandInput, DeleteDocumentationPartCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDocumentationPart",
  DeleteDocumentationPart$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDocumentationPartRequest;
      output: {};
    };
    sdk: {
      input: DeleteDocumentationPartCommandInput;
      output: DeleteDocumentationPartCommandOutput;
    };
  };
}
