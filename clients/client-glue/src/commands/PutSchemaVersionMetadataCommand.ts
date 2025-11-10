// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { PutSchemaVersionMetadataInput, PutSchemaVersionMetadataResponse } from "../models/models_3";
import { PutSchemaVersionMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</p>
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
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class PutSchemaVersionMetadataCommand extends $Command
  .classBuilder<
    PutSchemaVersionMetadataCommandInput,
    PutSchemaVersionMetadataCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "PutSchemaVersionMetadata", {})
  .n("GlueClient", "PutSchemaVersionMetadataCommand")
  .sc(PutSchemaVersionMetadata)
  .build() {
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
