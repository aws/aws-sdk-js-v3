// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationPart, UpdateDocumentationPartRequest } from "../models/models_0";
import { de_UpdateDocumentationPartCommand, se_UpdateDocumentationPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentationPartCommand}.
 */
export interface UpdateDocumentationPartCommandInput extends UpdateDocumentationPartRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentationPartCommand}.
 */
export interface UpdateDocumentationPartCommandOutput extends DocumentationPart, __MetadataBearer {}

/**
 * <p>Updates a documentation part.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateDocumentationPartCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateDocumentationPartCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateDocumentationPartRequest
 *   restApiId: "STRING_VALUE", // required
 *   documentationPartId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDocumentationPartCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationPart
 * //   id: "STRING_VALUE",
 * //   location: { // DocumentationPartLocation
 * //     type: "API" || "AUTHORIZER" || "MODEL" || "RESOURCE" || "METHOD" || "PATH_PARAMETER" || "QUERY_PARAMETER" || "REQUEST_HEADER" || "REQUEST_BODY" || "RESPONSE" || "RESPONSE_HEADER" || "RESPONSE_BODY", // required
 * //     path: "STRING_VALUE",
 * //     method: "STRING_VALUE",
 * //     statusCode: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //   },
 * //   properties: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDocumentationPartCommandInput - {@link UpdateDocumentationPartCommandInput}
 * @returns {@link UpdateDocumentationPartCommandOutput}
 * @see {@link UpdateDocumentationPartCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentationPartCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
 *
 * @public
 */
export class UpdateDocumentationPartCommand extends $Command
  .classBuilder<
    UpdateDocumentationPartCommandInput,
    UpdateDocumentationPartCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "UpdateDocumentationPart", {})
  .n("APIGatewayClient", "UpdateDocumentationPartCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDocumentationPartCommand)
  .de(de_UpdateDocumentationPartCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentationPartRequest;
      output: DocumentationPart;
    };
    sdk: {
      input: UpdateDocumentationPartCommandInput;
      output: UpdateDocumentationPartCommandOutput;
    };
  };
}
