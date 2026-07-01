// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExperimentDefinitionRequest } from "../models/models_0";
import { DeleteExperimentDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteExperimentDefinitionCommand}.
 */
export interface DeleteExperimentDefinitionCommandInput extends DeleteExperimentDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExperimentDefinitionCommand}.
 */
export interface DeleteExperimentDefinitionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an experiment definition. You can archive the definition to hide it from the active list while preserving it for future reference, or permanently delete it along with all associated run history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteExperimentDefinitionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteExperimentDefinitionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteExperimentDefinitionRequest
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   ExperimentDefinitionIdentifier: "STRING_VALUE", // required
 *   DeleteType: "ARCHIVE" || "DESTROY",
 * };
 * const command = new DeleteExperimentDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExperimentDefinitionCommandInput - {@link DeleteExperimentDefinitionCommandInput}
 * @returns {@link DeleteExperimentDefinitionCommandOutput}
 * @see {@link DeleteExperimentDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentDefinitionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To delete an experiment definition
 * ```javascript
 * // The following DeleteExperimentDefinition example archives (soft-deletes) the specified experiment definition.
 * const input = {
 *   ApplicationIdentifier: "339ohji",
 *   ExperimentDefinitionIdentifier: "bsxyd7k"
 * };
 * const command = new DeleteExperimentDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteExperimentDefinitionCommand extends command<DeleteExperimentDefinitionCommandInput, DeleteExperimentDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExperimentDefinition",
  DeleteExperimentDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExperimentDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteExperimentDefinitionCommandInput;
      output: DeleteExperimentDefinitionCommandOutput;
    };
  };
}
