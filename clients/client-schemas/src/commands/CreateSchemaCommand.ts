// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSchemaRequest, CreateSchemaResponse } from "../models/models_0";
import { CreateSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
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
 *
 * @public
 */
export class CreateSchemaCommand extends command<CreateSchemaCommandInput, CreateSchemaCommandOutput>(
  _ep0,
  _mw0,
  "CreateSchema",
  CreateSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSchemaRequest;
      output: CreateSchemaResponse;
    };
    sdk: {
      input: CreateSchemaCommandInput;
      output: CreateSchemaCommandOutput;
    };
  };
}
