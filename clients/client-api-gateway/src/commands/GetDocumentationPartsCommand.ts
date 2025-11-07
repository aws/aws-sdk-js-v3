// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationParts, GetDocumentationPartsRequest } from "../models/models_0";
import { GetDocumentationParts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentationPartsCommand}.
 */
export interface GetDocumentationPartsCommandInput extends GetDocumentationPartsRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentationPartsCommand}.
 */
export interface GetDocumentationPartsCommandOutput extends DocumentationParts, __MetadataBearer {}

/**
 * <p>Gets documentation parts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDocumentationPartsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDocumentationPartsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetDocumentationPartsRequest
 *   restApiId: "STRING_VALUE", // required
 *   type: "API" || "AUTHORIZER" || "MODEL" || "RESOURCE" || "METHOD" || "PATH_PARAMETER" || "QUERY_PARAMETER" || "REQUEST_HEADER" || "REQUEST_BODY" || "RESPONSE" || "RESPONSE_HEADER" || "RESPONSE_BODY",
 *   nameQuery: "STRING_VALUE",
 *   path: "STRING_VALUE",
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 *   locationStatus: "DOCUMENTED" || "UNDOCUMENTED",
 * };
 * const command = new GetDocumentationPartsCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationParts
 * //   items: [ // ListOfDocumentationPart
 * //     { // DocumentationPart
 * //       id: "STRING_VALUE",
 * //       location: { // DocumentationPartLocation
 * //         type: "API" || "AUTHORIZER" || "MODEL" || "RESOURCE" || "METHOD" || "PATH_PARAMETER" || "QUERY_PARAMETER" || "REQUEST_HEADER" || "REQUEST_BODY" || "RESPONSE" || "RESPONSE_HEADER" || "RESPONSE_BODY", // required
 * //         path: "STRING_VALUE",
 * //         method: "STRING_VALUE",
 * //         statusCode: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //       },
 * //       properties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDocumentationPartsCommandInput - {@link GetDocumentationPartsCommandInput}
 * @returns {@link GetDocumentationPartsCommandOutput}
 * @see {@link GetDocumentationPartsCommandInput} for command's `input` shape.
 * @see {@link GetDocumentationPartsCommandOutput} for command's `response` shape.
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
export class GetDocumentationPartsCommand extends $Command
  .classBuilder<
    GetDocumentationPartsCommandInput,
    GetDocumentationPartsCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetDocumentationParts", {})
  .n("APIGatewayClient", "GetDocumentationPartsCommand")
  .sc(GetDocumentationParts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentationPartsRequest;
      output: DocumentationParts;
    };
    sdk: {
      input: GetDocumentationPartsCommandInput;
      output: GetDocumentationPartsCommandOutput;
    };
  };
}
