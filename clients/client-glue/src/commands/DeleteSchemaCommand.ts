// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteSchemaInput, DeleteSchemaResponse } from "../models/models_1";
import { DeleteSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandInput extends DeleteSchemaInput {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandOutput extends DeleteSchemaResponse, __MetadataBearer {}

/**
 * <p>Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteSchemaInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 * };
 * const command = new DeleteSchemaCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSchemaResponse
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "PENDING" || "DELETING",
 * // };
 *
 * ```
 *
 * @param DeleteSchemaCommandInput - {@link DeleteSchemaCommandInput}
 * @returns {@link DeleteSchemaCommandOutput}
 * @see {@link DeleteSchemaCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteSchemaCommand extends $Command
  .classBuilder<
    DeleteSchemaCommandInput,
    DeleteSchemaCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteSchema", {})
  .n("GlueClient", "DeleteSchemaCommand")
  .sc(DeleteSchema$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSchemaInput;
      output: DeleteSchemaResponse;
    };
    sdk: {
      input: DeleteSchemaCommandInput;
      output: DeleteSchemaCommandOutput;
    };
  };
}
