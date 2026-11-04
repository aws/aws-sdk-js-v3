// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSchemaVersionsInput, DeleteSchemaVersionsResponse } from "../models/models_1";
import { DeleteSchemaVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSchemaVersionsCommand}.
 */
export interface DeleteSchemaVersionsCommandInput extends DeleteSchemaVersionsInput {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaVersionsCommand}.
 */
export interface DeleteSchemaVersionsCommandOutput extends DeleteSchemaVersionsResponse, __MetadataBearer {}

/**
 * Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the `GetSchemaVersions` API after this call will list the status of the deleted versions.
 *
 * When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the `DeleteSchemaCheckpoint` API before using this API.
 *
 * You cannot use the `DeleteSchemaVersions` API to delete the first schema version in the schema set. The first schema version can only be deleted by the `DeleteSchema` API. This operation will also delete the attached `SchemaVersionMetadata` under the schema versions. Hard deletes will be enforced on the database.
 *
 * If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSchemaVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSchemaVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteSchemaVersionsInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   Versions: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSchemaVersionsResponse
 * //   SchemaVersionErrors: [ // SchemaVersionErrorList
 * //     { // SchemaVersionErrorItem
 * //       VersionNumber: Number("long"),
 * //       ErrorDetails: { // ErrorDetails
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteSchemaVersionsCommandInput - {@link DeleteSchemaVersionsCommandInput}
 * @returns {@link DeleteSchemaVersionsCommandOutput}
 * @see {@link DeleteSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaVersionsCommandOutput} for command's `response` shape.
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
export class DeleteSchemaVersionsCommand extends command<DeleteSchemaVersionsCommandInput, DeleteSchemaVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSchemaVersions",
  DeleteSchemaVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSchemaVersionsInput;
      output: DeleteSchemaVersionsResponse;
    };
    sdk: {
      input: DeleteSchemaVersionsCommandInput;
      output: DeleteSchemaVersionsCommandOutput;
    };
  };
}
