// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSchemaVersionMetadataInput, PutSchemaVersionMetadataResponse } from "../models/models_2";
import { PutSchemaVersionMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSchemaVersionMetadataCommand}.
 */
export interface PutSchemaVersionMetadataCommandInput extends PutSchemaVersionMetadataInput {}
/**
 * @public
 *
 * The output of {@link PutSchemaVersionMetadataCommand}.
 */
export interface PutSchemaVersionMetadataCommandOutput extends PutSchemaVersionMetadataResponse, __MetadataBearer {}

/**
 * Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutSchemaVersionMetadataInput
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
 * const command = new PutSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // PutSchemaVersionMetadataResponse
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
 * @param PutSchemaVersionMetadataCommandInput - {@link PutSchemaVersionMetadataCommandInput}
 * @returns {@link PutSchemaVersionMetadataCommandOutput}
 * @see {@link PutSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link PutSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class PutSchemaVersionMetadataCommand extends command<PutSchemaVersionMetadataCommandInput, PutSchemaVersionMetadataCommandOutput>(
  _ep0,
  _mw0,
  "PutSchemaVersionMetadata",
  PutSchemaVersionMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSchemaVersionMetadataInput;
      output: PutSchemaVersionMetadataResponse;
    };
    sdk: {
      input: PutSchemaVersionMetadataCommandInput;
      output: PutSchemaVersionMetadataCommandOutput;
    };
  };
}
