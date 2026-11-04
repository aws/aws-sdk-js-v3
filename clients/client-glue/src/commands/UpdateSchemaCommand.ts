// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSchemaInput, UpdateSchemaResponse } from "../models/models_3";
import { UpdateSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSchemaCommand}.
 */
export interface UpdateSchemaCommandInput extends UpdateSchemaInput {}
/**
 * @public
 *
 * The output of {@link UpdateSchemaCommand}.
 */
export interface UpdateSchemaCommandOutput extends UpdateSchemaResponse, __MetadataBearer {}

/**
 * Updates the description, compatibility setting, or version checkpoint for a schema set.
 *
 * For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for `Compatibility` is provided, the `VersionNumber` (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.
 *
 * If the value for the `VersionNumber` (checkpoint) is provided, `Compatibility` is optional and this can be used to set/reset a checkpoint for the schema.
 *
 * This update will happen only if the schema is in the AVAILABLE state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateSchemaInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   Compatibility: "NONE" || "DISABLED" || "BACKWARD" || "BACKWARD_ALL" || "FORWARD" || "FORWARD_ALL" || "FULL" || "FULL_ALL",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateSchemaCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSchemaResponse
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSchemaCommandInput - {@link UpdateSchemaCommandInput}
 * @returns {@link UpdateSchemaCommandOutput}
 * @see {@link UpdateSchemaCommandInput} for command's `input` shape.
 * @see {@link UpdateSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateSchemaCommand extends command<UpdateSchemaCommandInput, UpdateSchemaCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSchema",
  UpdateSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSchemaInput;
      output: UpdateSchemaResponse;
    };
    sdk: {
      input: UpdateSchemaCommandInput;
      output: UpdateSchemaCommandOutput;
    };
  };
}
