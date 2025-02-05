// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchSchemasRequest, SearchSchemasResponse } from "../models/models_0";
import { de_SearchSchemasCommand, se_SearchSchemasCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSchemasCommand}.
 */
export interface SearchSchemasCommandInput extends SearchSchemasRequest {}
/**
 * @public
 *
 * The output of {@link SearchSchemasCommand}.
 */
export interface SearchSchemasCommandOutput extends SearchSchemasResponse, __MetadataBearer {}

/**
 * <p>Search the schemas</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, SearchSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, SearchSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SchemasClient(config);
 * const input = { // SearchSchemasRequest
 *   Keywords: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new SearchSchemasCommand(input);
 * const response = await client.send(command);
 * // { // SearchSchemasResponse
 * //   NextToken: "STRING_VALUE",
 * //   Schemas: [ // __listOfSearchSchemaSummary
 * //     { // SearchSchemaSummary
 * //       RegistryName: "STRING_VALUE",
 * //       SchemaArn: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       SchemaVersions: [ // __listOfSearchSchemaVersionSummary
 * //         { // SearchSchemaVersionSummary
 * //           CreatedDate: new Date("TIMESTAMP"),
 * //           SchemaVersion: "STRING_VALUE",
 * //           Type: "OpenApi3" || "JSONSchemaDraft4",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchSchemasCommandInput - {@link SearchSchemasCommandInput}
 * @returns {@link SearchSchemasCommandOutput}
 * @see {@link SearchSchemasCommandInput} for command's `input` shape.
 * @see {@link SearchSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 * @public
 */
export class SearchSchemasCommand extends $Command
  .classBuilder<
    SearchSchemasCommandInput,
    SearchSchemasCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("schemas", "SearchSchemas", {})
  .n("SchemasClient", "SearchSchemasCommand")
  .f(void 0, void 0)
  .ser(se_SearchSchemasCommand)
  .de(de_SearchSchemasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSchemasRequest;
      output: SearchSchemasResponse;
    };
    sdk: {
      input: SearchSchemasCommandInput;
      output: SearchSchemasCommandOutput;
    };
  };
}
