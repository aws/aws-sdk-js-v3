// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchemaVersionsRequest, ListSchemaVersionsResponse } from "../models/models_0";
import { de_ListSchemaVersionsCommand, se_ListSchemaVersionsCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandInput extends ListSchemaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemaVersionsCommand}.
 */
export interface ListSchemaVersionsCommandOutput extends ListSchemaVersionsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of the schema versions and related information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemaVersionsCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // ListSchemaVersionsRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 * };
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SchemaVersions: [ // __listOfSchemaVersionSummary
 * //     { // SchemaVersionSummary
 * //       SchemaArn: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       SchemaVersion: "STRING_VALUE",
 * //       Type: "OpenApi3" || "JSONSchemaDraft4",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSchemaVersionsCommandInput - {@link ListSchemaVersionsCommandInput}
 * @returns {@link ListSchemaVersionsCommandOutput}
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class ListSchemaVersionsCommand extends $Command
  .classBuilder<
    ListSchemaVersionsCommandInput,
    ListSchemaVersionsCommandOutput,
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
  .s("schemas", "ListSchemaVersions", {})
  .n("SchemasClient", "ListSchemaVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSchemaVersionsCommand)
  .de(de_ListSchemaVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemaVersionsRequest;
      output: ListSchemaVersionsResponse;
    };
    sdk: {
      input: ListSchemaVersionsCommandInput;
      output: ListSchemaVersionsCommandOutput;
    };
  };
}
