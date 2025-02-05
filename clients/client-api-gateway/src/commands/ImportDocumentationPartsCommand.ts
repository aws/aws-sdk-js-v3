// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DocumentationPartIds, ImportDocumentationPartsRequest } from "../models/models_0";
import { de_ImportDocumentationPartsCommand, se_ImportDocumentationPartsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type ImportDocumentationPartsCommandInputType = Omit<ImportDocumentationPartsRequest, "body"> & {
  body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link ImportDocumentationPartsCommand}.
 */
export interface ImportDocumentationPartsCommandInput extends ImportDocumentationPartsCommandInputType {}
/**
 * @public
 *
 * The output of {@link ImportDocumentationPartsCommand}.
 */
export interface ImportDocumentationPartsCommandOutput extends DocumentationPartIds, __MetadataBearer {}

/**
 * <p>Imports documentation parts</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportDocumentationPartsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportDocumentationPartsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // ImportDocumentationPartsRequest
 *   restApiId: "STRING_VALUE", // required
 *   mode: "merge" || "overwrite",
 *   failOnWarnings: true || false,
 *   body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new ImportDocumentationPartsCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationPartIds
 * //   ids: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   warnings: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ImportDocumentationPartsCommandInput - {@link ImportDocumentationPartsCommandInput}
 * @returns {@link ImportDocumentationPartsCommandOutput}
 * @see {@link ImportDocumentationPartsCommandInput} for command's `input` shape.
 * @see {@link ImportDocumentationPartsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ImportDocumentationPartsCommand extends $Command
  .classBuilder<
    ImportDocumentationPartsCommandInput,
    ImportDocumentationPartsCommandOutput,
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
  .s("BackplaneControlService", "ImportDocumentationParts", {})
  .n("APIGatewayClient", "ImportDocumentationPartsCommand")
  .f(void 0, void 0)
  .ser(se_ImportDocumentationPartsCommand)
  .de(de_ImportDocumentationPartsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportDocumentationPartsRequest;
      output: DocumentationPartIds;
    };
    sdk: {
      input: ImportDocumentationPartsCommandInput;
      output: ImportDocumentationPartsCommandOutput;
    };
  };
}
