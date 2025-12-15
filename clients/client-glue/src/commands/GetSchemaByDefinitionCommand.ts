// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetSchemaByDefinitionInput, GetSchemaByDefinitionResponse } from "../models/models_2";
import { GetSchemaByDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaByDefinitionCommand}.
 */
export interface GetSchemaByDefinitionCommandInput extends GetSchemaByDefinitionInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaByDefinitionCommand}.
 */
export interface GetSchemaByDefinitionCommandOutput extends GetSchemaByDefinitionResponse, __MetadataBearer {}

/**
 * <p>Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaByDefinitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaByDefinitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSchemaByDefinitionInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaDefinition: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaByDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaByDefinitionResponse
 * //   SchemaVersionId: "STRING_VALUE",
 * //   SchemaArn: "STRING_VALUE",
 * //   DataFormat: "AVRO" || "JSON" || "PROTOBUF",
 * //   Status: "AVAILABLE" || "PENDING" || "FAILURE" || "DELETING",
 * //   CreatedTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaByDefinitionCommandInput - {@link GetSchemaByDefinitionCommandInput}
 * @returns {@link GetSchemaByDefinitionCommandOutput}
 * @see {@link GetSchemaByDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSchemaByDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSchemaByDefinitionCommand extends $Command
  .classBuilder<
    GetSchemaByDefinitionCommandInput,
    GetSchemaByDefinitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetSchemaByDefinition", {})
  .n("GlueClient", "GetSchemaByDefinitionCommand")
  .sc(GetSchemaByDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaByDefinitionInput;
      output: GetSchemaByDefinitionResponse;
    };
    sdk: {
      input: GetSchemaByDefinitionCommandInput;
      output: GetSchemaByDefinitionCommandOutput;
    };
  };
}
