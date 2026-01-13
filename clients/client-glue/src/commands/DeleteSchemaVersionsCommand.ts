// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteSchemaVersionsInput, DeleteSchemaVersionsResponse } from "../models/models_1";
import { DeleteSchemaVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.  Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p>
 *          <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p>
 *          <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p>
 *          <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
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
export class DeleteSchemaVersionsCommand extends $Command
  .classBuilder<
    DeleteSchemaVersionsCommandInput,
    DeleteSchemaVersionsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteSchemaVersions", {})
  .n("GlueClient", "DeleteSchemaVersionsCommand")
  .sc(DeleteSchemaVersions$)
  .build() {
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
