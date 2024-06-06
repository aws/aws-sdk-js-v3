// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import { de_CreateSchemaCommand, se_CreateSchemaCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSchemaCommand}.
 */
export interface CreateSchemaCommandInput extends CreateSchemaRequest {}
/**
 * @public
 *
 * The output of {@link CreateSchemaCommand}.
 */
export interface CreateSchemaCommandOutput extends CreateSchemaResponse, __MetadataBearer {}

/**
 * <p>Creates a schema definition.</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, CreateSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, CreateSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // CreateSchemaRequest
 *   Content: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Type: "OpenApi3" || "JSONSchemaDraft4", // required
 * };
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchemaResponse
 * //   Description: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   SchemaVersion: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Type: "STRING_VALUE",
 * //   VersionCreatedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSchemaCommandInput - {@link CreateSchemaCommandInput}
 * @returns {@link CreateSchemaCommandOutput}
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 * @public
 */
export class CreateSchemaCommand extends $Command
  .classBuilder<
    CreateSchemaCommandInput,
    CreateSchemaCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("schemas", "CreateSchema", {})
  .n("SchemasClient", "CreateSchemaCommand")
  .f(void 0, void 0)
  .ser(se_CreateSchemaCommand)
  .de(de_CreateSchemaCommand)
  .build() {}
