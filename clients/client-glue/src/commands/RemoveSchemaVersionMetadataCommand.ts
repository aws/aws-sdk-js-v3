// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { RemoveSchemaVersionMetadataInput, RemoveSchemaVersionMetadataResponse } from "../models/models_3";
import { de_RemoveSchemaVersionMetadataCommand, se_RemoveSchemaVersionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface RemoveSchemaVersionMetadataCommandOutput
  extends RemoveSchemaVersionMetadataResponse,
    __MetadataBearer {}

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
export class RemoveSchemaVersionMetadataCommand extends $Command
  .classBuilder<
    RemoveSchemaVersionMetadataCommandInput,
    RemoveSchemaVersionMetadataCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "RemoveSchemaVersionMetadata", {})
  .n("GlueClient", "RemoveSchemaVersionMetadataCommand")
  .f(void 0, void 0)
  .ser(se_RemoveSchemaVersionMetadataCommand)
  .de(de_RemoveSchemaVersionMetadataCommand)
  .build() {
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
