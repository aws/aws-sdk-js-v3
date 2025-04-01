// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDocumentationVersionRequest, DocumentationVersion } from "../models/models_0";
import { de_CreateDocumentationVersionCommand, se_CreateDocumentationVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentationVersionCommand}.
 */
export interface CreateDocumentationVersionCommandInput extends CreateDocumentationVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentationVersionCommand}.
 */
export interface CreateDocumentationVersionCommandOutput extends DocumentationVersion, __MetadataBearer {}

/**
 * <p>Creates a documentation version</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDocumentationVersionCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDocumentationVersionCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // CreateDocumentationVersionRequest
 *   restApiId: "STRING_VALUE", // required
 *   documentationVersion: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateDocumentationVersionCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationVersion
 * //   version: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDocumentationVersionCommandInput - {@link CreateDocumentationVersionCommandInput}
 * @returns {@link CreateDocumentationVersionCommandOutput}
 * @see {@link CreateDocumentationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentationVersionCommandOutput} for command's `response` shape.
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
export class CreateDocumentationVersionCommand extends $Command
  .classBuilder<
    CreateDocumentationVersionCommandInput,
    CreateDocumentationVersionCommandOutput,
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
  .s("BackplaneControlService", "CreateDocumentationVersion", {})
  .n("APIGatewayClient", "CreateDocumentationVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateDocumentationVersionCommand)
  .de(de_CreateDocumentationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDocumentationVersionRequest;
      output: DocumentationVersion;
    };
    sdk: {
      input: CreateDocumentationVersionCommandInput;
      output: CreateDocumentationVersionCommandOutput;
    };
  };
}
