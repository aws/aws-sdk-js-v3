// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import { de_ListSchemasCommand, se_ListSchemasCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchemasCommand}.
 */
export interface ListSchemasCommandInput extends ListSchemasRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemasCommand}.
 */
export interface ListSchemasCommandOutput extends ListSchemasResponse, __MetadataBearer {}

/**
 * <p>List the schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // ListSchemasRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaNamePrefix: "STRING_VALUE",
 * };
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemasResponse
 * //   NextToken: "STRING_VALUE",
 * //   Schemas: [ // __listOfSchemaSummary
 * //     { // SchemaSummary
 * //       LastModified: new Date("TIMESTAMP"),
 * //       SchemaArn: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       VersionCount: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSchemasCommandInput - {@link ListSchemasCommandInput}
 * @returns {@link ListSchemasCommandOutput}
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListSchemasCommand extends $Command
  .classBuilder<
    ListSchemasCommandInput,
    ListSchemasCommandOutput,
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
  .s("schemas", "ListSchemas", {})
  .n("SchemasClient", "ListSchemasCommand")
  .f(void 0, void 0)
  .ser(se_ListSchemasCommand)
  .de(de_ListSchemasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemasRequest;
      output: ListSchemasResponse;
    };
    sdk: {
      input: ListSchemasCommandInput;
      output: ListSchemasCommandOutput;
    };
  };
}
