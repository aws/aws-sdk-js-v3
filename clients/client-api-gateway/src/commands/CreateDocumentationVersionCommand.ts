// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDocumentationVersionRequest, DocumentationVersion } from "../models/models_0";
import { CreateDocumentationVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a documentation version
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateDocumentationVersionCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateDocumentationVersionCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
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
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded the rate limit. Retry after the specified time period.
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
export class CreateDocumentationVersionCommand extends command<CreateDocumentationVersionCommandInput, CreateDocumentationVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateDocumentationVersion",
  CreateDocumentationVersion$
) {
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
