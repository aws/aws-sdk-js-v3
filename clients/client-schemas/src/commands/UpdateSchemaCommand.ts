// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSchemaRequest, UpdateSchemaResponse } from "../models/models_0";
import { de_UpdateSchemaCommand, se_UpdateSchemaCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSchemaCommand}.
 */
export interface UpdateSchemaCommandInput extends UpdateSchemaRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSchemaCommand}.
 */
export interface UpdateSchemaCommandOutput extends UpdateSchemaResponse, __MetadataBearer {}

/**
 * <p>Updates the schema definition</p> <note><p>Inactive schemas will be deleted after two years.</p></note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // UpdateSchemaRequest
 *   ClientTokenId: "STRING_VALUE",
 *   Content: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   Type: "OpenApi3" || "JSONSchemaDraft4",
 * };
 * const command = new UpdateSchemaCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSchemaResponse
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
 * @param UpdateSchemaCommandInput - {@link UpdateSchemaCommandInput}
 * @returns {@link UpdateSchemaCommandOutput}
 * @see {@link UpdateSchemaCommandInput} for command's `input` shape.
 * @see {@link UpdateSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 * @public
 */
export class UpdateSchemaCommand extends $Command
  .classBuilder<
    UpdateSchemaCommandInput,
    UpdateSchemaCommandOutput,
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
  .s("schemas", "UpdateSchema", {})
  .n("SchemasClient", "UpdateSchemaCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSchemaCommand)
  .de(de_UpdateSchemaCommand)
  .build() {}
