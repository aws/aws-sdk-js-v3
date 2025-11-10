// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDocumentationPartRequest, DocumentationPart } from "../models/models_0";
import { CreateDocumentationPart } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentationPartCommand}.
 */
export interface CreateDocumentationPartCommandInput extends CreateDocumentationPartRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentationPartCommand}.
 */
export interface CreateDocumentationPartCommandOutput extends DocumentationPart, __MetadataBearer {}

/**
 * <p>Creates a documentation part.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDocumentationPartCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDocumentationPartCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateDocumentationPartRequest
 *   restApiId: "STRING_VALUE", // required
 *   location: { // DocumentationPartLocation
 *     type: "API" || "AUTHORIZER" || "MODEL" || "RESOURCE" || "METHOD" || "PATH_PARAMETER" || "QUERY_PARAMETER" || "REQUEST_HEADER" || "REQUEST_BODY" || "RESPONSE" || "RESPONSE_HEADER" || "RESPONSE_BODY", // required
 *     path: "STRING_VALUE",
 *     method: "STRING_VALUE",
 *     statusCode: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *   },
 *   properties: "STRING_VALUE", // required
 * };
 * const command = new CreateDocumentationPartCommand(input);
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
 * @param CreateDocumentationPartCommandInput - {@link CreateDocumentationPartCommandInput}
 * @returns {@link CreateDocumentationPartCommandOutput}
 * @see {@link CreateDocumentationPartCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentationPartCommandOutput} for command's `response` shape.
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
export class CreateDocumentationPartCommand extends $Command
  .classBuilder<
    CreateDocumentationPartCommandInput,
    CreateDocumentationPartCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "CreateDocumentationPart", {})
  .n("APIGatewayClient", "CreateDocumentationPartCommand")
  .sc(CreateDocumentationPart)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDocumentationPartRequest;
      output: DocumentationPart;
    };
    sdk: {
      input: CreateDocumentationPartCommandInput;
      output: CreateDocumentationPartCommandOutput;
    };
  };
}
