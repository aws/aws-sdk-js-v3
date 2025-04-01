// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationPart, GetDocumentationPartRequest } from "../models/models_0";
import { de_GetDocumentationPartCommand, se_GetDocumentationPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentationPartCommand}.
 */
export interface GetDocumentationPartCommandInput extends GetDocumentationPartRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentationPartCommand}.
 */
export interface GetDocumentationPartCommandOutput extends DocumentationPart, __MetadataBearer {}

/**
 * <p>Gets a documentation part.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDocumentationPartCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDocumentationPartCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDocumentationPartRequest
 *   restApiId: "STRING_VALUE", // required
 *   documentationPartId: "STRING_VALUE", // required
 * };
 * const command = new GetDocumentationPartCommand(input);
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
 * @param GetDocumentationPartCommandInput - {@link GetDocumentationPartCommandInput}
 * @returns {@link GetDocumentationPartCommandOutput}
 * @see {@link GetDocumentationPartCommandInput} for command's `input` shape.
 * @see {@link GetDocumentationPartCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetDocumentationPartCommand extends $Command
  .classBuilder<
    GetDocumentationPartCommandInput,
    GetDocumentationPartCommandOutput,
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
  .s("BackplaneControlService", "GetDocumentationPart", {})
  .n("APIGatewayClient", "GetDocumentationPartCommand")
  .f(void 0, void 0)
  .ser(se_GetDocumentationPartCommand)
  .de(de_GetDocumentationPartCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentationPartRequest;
      output: DocumentationPart;
    };
    sdk: {
      input: GetDocumentationPartCommandInput;
      output: GetDocumentationPartCommandOutput;
    };
  };
}
