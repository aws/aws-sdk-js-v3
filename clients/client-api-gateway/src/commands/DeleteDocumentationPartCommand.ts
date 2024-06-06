// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDocumentationPartRequest } from "../models/models_0";
import { de_DeleteDocumentationPartCommand, se_DeleteDocumentationPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a documentation part</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteDocumentationPartCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteDocumentationPartCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
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
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class DeleteDocumentationPartCommand extends $Command
  .classBuilder<
    DeleteDocumentationPartCommandInput,
    DeleteDocumentationPartCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "DeleteDocumentationPart", {})
  .n("APIGatewayClient", "DeleteDocumentationPartCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDocumentationPartCommand)
  .de(de_DeleteDocumentationPartCommand)
  .build() {}
