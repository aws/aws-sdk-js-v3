// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveSchemaVersionMetadataInput, RemoveSchemaVersionMetadataResponse } from "../models/models_2";
import { RemoveSchemaVersionMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveSchemaVersionMetadataCommand}.
 */
export interface RemoveSchemaVersionMetadataCommandInput extends RemoveSchemaVersionMetadataInput {}
/**
 * @public
 *
 * The output of {@link RemoveSchemaVersionMetadataCommand}.
 */
export interface RemoveSchemaVersionMetadataCommandOutput extends RemoveSchemaVersionMetadataResponse, __MetadataBearer {}

/**
 * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RemoveSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RemoveSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // RemoveSchemaVersionMetadataInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SchemaVersionId: "STRING_VALUE",
 *   MetadataKeyValue: { // MetadataKeyValuePair
 *     MetadataKey: "STRING_VALUE",
 *     MetadataValue: "STRING_VALUE",
 *   },
 * };
 * const command = new RemoveSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // RemoveSchemaVersionMetadataResponse
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * //   LatestVersion: true || false,
 * //   VersionNumber: Number("long"),
 * //   SchemaVersionId: "STRING_VALUE",
 * //   MetadataKey: "STRING_VALUE",
 * //   MetadataValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveSchemaVersionMetadataCommandInput - {@link RemoveSchemaVersionMetadataCommandInput}
 * @returns {@link RemoveSchemaVersionMetadataCommandOutput}
 * @see {@link RemoveSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link RemoveSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class RemoveSchemaVersionMetadataCommand extends command<RemoveSchemaVersionMetadataCommandInput, RemoveSchemaVersionMetadataCommandOutput>(
  _ep0,
  _mw0,
  "RemoveSchemaVersionMetadata",
  RemoveSchemaVersionMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveSchemaVersionMetadataInput;
      output: RemoveSchemaVersionMetadataResponse;
    };
    sdk: {
      input: RemoveSchemaVersionMetadataCommandInput;
      output: RemoveSchemaVersionMetadataCommandOutput;
    };
  };
}
