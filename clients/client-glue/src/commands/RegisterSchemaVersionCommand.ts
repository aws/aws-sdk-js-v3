// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { RegisterSchemaVersionInput, RegisterSchemaVersionResponse } from "../models/models_3";
import { de_RegisterSchemaVersionCommand, se_RegisterSchemaVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterSchemaVersionCommand}.
 */
export interface RegisterSchemaVersionCommandInput extends RegisterSchemaVersionInput {}
/**
 * @public
 *
 * The output of {@link RegisterSchemaVersionCommand}.
 */
export interface RegisterSchemaVersionCommandOutput extends RegisterSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p>
 *          <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p>
 *          <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RegisterSchemaVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RegisterSchemaVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // RegisterSchemaVersionInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaDefinition: "STRING_VALUE", // required
 * };
 * const command = new RegisterSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // { // RegisterSchemaVersionResponse
 * //   SchemaVersionId: "STRING_VALUE",
 * //   VersionNumber: Number("long"),
 * //   Status: "AVAILABLE" || "PENDING" || "FAILURE" || "DELETING",
 * // };
 *
 * ```
 *
 * @param RegisterSchemaVersionCommandInput - {@link RegisterSchemaVersionCommandInput}
 * @returns {@link RegisterSchemaVersionCommandOutput}
 * @see {@link RegisterSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link RegisterSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
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
export class RegisterSchemaVersionCommand extends $Command
  .classBuilder<
    RegisterSchemaVersionCommandInput,
    RegisterSchemaVersionCommandOutput,
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
  .s("AWSGlue", "RegisterSchemaVersion", {})
  .n("GlueClient", "RegisterSchemaVersionCommand")
  .f(void 0, void 0)
  .ser(se_RegisterSchemaVersionCommand)
  .de(de_RegisterSchemaVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterSchemaVersionInput;
      output: RegisterSchemaVersionResponse;
    };
    sdk: {
      input: RegisterSchemaVersionCommandInput;
      output: RegisterSchemaVersionCommandOutput;
    };
  };
}
