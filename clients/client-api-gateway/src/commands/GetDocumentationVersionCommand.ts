// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationVersion, GetDocumentationVersionRequest } from "../models/models_0";
import { de_GetDocumentationVersionCommand, se_GetDocumentationVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentationVersionCommand}.
 */
export interface GetDocumentationVersionCommandInput extends GetDocumentationVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentationVersionCommand}.
 */
export interface GetDocumentationVersionCommandOutput extends DocumentationVersion, __MetadataBearer {}

/**
 * <p>Gets a documentation version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDocumentationVersionCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDocumentationVersionCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDocumentationVersionRequest
 *   restApiId: "STRING_VALUE", // required
 *   documentationVersion: "STRING_VALUE", // required
 * };
 * const command = new GetDocumentationVersionCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationVersion
 * //   version: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDocumentationVersionCommandInput - {@link GetDocumentationVersionCommandInput}
 * @returns {@link GetDocumentationVersionCommandOutput}
 * @see {@link GetDocumentationVersionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentationVersionCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
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
export class GetDocumentationVersionCommand extends $Command
  .classBuilder<
    GetDocumentationVersionCommandInput,
    GetDocumentationVersionCommandOutput,
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
  .s("BackplaneControlService", "GetDocumentationVersion", {})
  .n("APIGatewayClient", "GetDocumentationVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetDocumentationVersionCommand)
  .de(de_GetDocumentationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentationVersionRequest;
      output: DocumentationVersion;
    };
    sdk: {
      input: GetDocumentationVersionCommandInput;
      output: GetDocumentationVersionCommandOutput;
    };
  };
}
