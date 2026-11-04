// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSchemaInput, CreateSchemaResponse } from "../models/models_1";
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
export interface CreateSchemaCommandInput extends CreateSchemaInput {}
/**
 * @public
 *
 * The output of {@link CreateSchemaCommand}.
 */
export interface CreateSchemaCommandOutput extends CreateSchemaResponse, __MetadataBearer {}

/**
 * Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.
 *
 * When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the `RegisterSchemaVersion` API is used.
 *
 * When this API is called without a `RegistryId`, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateSchemaInput
 *   RegistryId: { // RegistryId
 *     RegistryName: "STRING_VALUE",
 *     RegistryArn: "STRING_VALUE",
 *   },
 *   SchemaName: "STRING_VALUE", // required
 *   DataFormat: "AVRO" || "JSON" || "PROTOBUF", // required
 *   Compatibility: "NONE" || "DISABLED" || "BACKWARD" || "BACKWARD_ALL" || "FORWARD" || "FORWARD_ALL" || "FULL" || "FULL_ALL",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SchemaDefinition: "STRING_VALUE",
 * };
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * // { // CreateSchemaResponse
 * //   RegistryName: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   SchemaArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DataFormat: "AVRO" || "JSON" || "PROTOBUF",
 * //   Compatibility: "NONE" || "DISABLED" || "BACKWARD" || "BACKWARD_ALL" || "FORWARD" || "FORWARD_ALL" || "FULL" || "FULL_ALL",
 * //   SchemaCheckpoint: Number("long"),
 * //   LatestSchemaVersion: Number("long"),
 * //   NextSchemaVersion: Number("long"),
 * //   SchemaStatus: "AVAILABLE" || "PENDING" || "DELETING",
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   SchemaVersionId: "STRING_VALUE",
 * //   SchemaVersionStatus: "AVAILABLE" || "PENDING" || "FAILURE" || "DELETING",
 * // };
 *
 * ```
 *
 * @param CreateSchemaCommandInput - {@link CreateSchemaCommandInput}
 * @returns {@link CreateSchemaCommandOutput}
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
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
export class CreateSchemaCommand extends command<CreateSchemaCommandInput, CreateSchemaCommandOutput>(
  _ep0,
  _mw0,
  "CreateSchema",
  CreateSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSchemaInput;
      output: CreateSchemaResponse;
    };
    sdk: {
      input: CreateSchemaCommandInput;
      output: CreateSchemaCommandOutput;
    };
  };
}
