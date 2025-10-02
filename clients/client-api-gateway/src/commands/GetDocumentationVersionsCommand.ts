// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationVersions, GetDocumentationVersionsRequest } from "../models/models_0";
import { de_GetDocumentationVersionsCommand, se_GetDocumentationVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentationVersionsCommand}.
 */
export interface GetDocumentationVersionsCommandInput extends GetDocumentationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentationVersionsCommand}.
 */
export interface GetDocumentationVersionsCommandOutput extends DocumentationVersions, __MetadataBearer {}

/**
 * <p>Gets documentation versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDocumentationVersionsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDocumentationVersionsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetDocumentationVersionsRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetDocumentationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationVersions
 * //   items: [ // ListOfDocumentationVersion
 * //     { // DocumentationVersion
 * //       version: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDocumentationVersionsCommandInput - {@link GetDocumentationVersionsCommandInput}
 * @returns {@link GetDocumentationVersionsCommandOutput}
 * @see {@link GetDocumentationVersionsCommandInput} for command's `input` shape.
 * @see {@link GetDocumentationVersionsCommandOutput} for command's `response` shape.
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
export class GetDocumentationVersionsCommand extends $Command
  .classBuilder<
    GetDocumentationVersionsCommandInput,
    GetDocumentationVersionsCommandOutput,
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
  .s("BackplaneControlService", "GetDocumentationVersions", {})
  .n("APIGatewayClient", "GetDocumentationVersionsCommand")
  .f(void 0, void 0)
  .ser(se_GetDocumentationVersionsCommand)
  .de(de_GetDocumentationVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentationVersionsRequest;
      output: DocumentationVersions;
    };
    sdk: {
      input: GetDocumentationVersionsCommandInput;
      output: GetDocumentationVersionsCommandOutput;
    };
  };
}
