// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  DeleteNetworkMigrationDefinitionRequest,
  DeleteNetworkMigrationDefinitionResponse,
} from "../models/models_0";
import { DeleteNetworkMigrationDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkMigrationDefinitionCommand}.
 */
export interface DeleteNetworkMigrationDefinitionCommandInput extends DeleteNetworkMigrationDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkMigrationDefinitionCommand}.
 */
export interface DeleteNetworkMigrationDefinitionCommandOutput extends DeleteNetworkMigrationDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes a network migration definition. This operation removes the migration definition and all associated metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteNetworkMigrationDefinitionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteNetworkMigrationDefinitionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteNetworkMigrationDefinitionRequest
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkMigrationDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkMigrationDefinitionCommandInput - {@link DeleteNetworkMigrationDefinitionCommandInput}
 * @returns {@link DeleteNetworkMigrationDefinitionCommandOutput}
 * @see {@link DeleteNetworkMigrationDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkMigrationDefinitionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample DeleteNetworkMigrationDefinition call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567"
 * };
 * const command = new DeleteNetworkMigrationDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNetworkMigrationDefinitionCommand extends $Command
  .classBuilder<
    DeleteNetworkMigrationDefinitionCommandInput,
    DeleteNetworkMigrationDefinitionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DeleteNetworkMigrationDefinition", {})
  .n("MgnClient", "DeleteNetworkMigrationDefinitionCommand")
  .sc(DeleteNetworkMigrationDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkMigrationDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkMigrationDefinitionCommandInput;
      output: DeleteNetworkMigrationDefinitionCommandOutput;
    };
  };
}
