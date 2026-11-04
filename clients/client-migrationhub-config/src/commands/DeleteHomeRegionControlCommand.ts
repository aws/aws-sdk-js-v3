// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHomeRegionControlRequest, DeleteHomeRegionControlResult } from "../models/models_0";
import { DeleteHomeRegionControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHomeRegionControlCommand}.
 */
export interface DeleteHomeRegionControlCommandInput extends DeleteHomeRegionControlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHomeRegionControlCommand}.
 */
export interface DeleteHomeRegionControlCommandOutput extends DeleteHomeRegionControlResult, __MetadataBearer {}

/**
 * This operation deletes the home region configuration for the calling account. The operation does not delete discovery or migration tracking data in the home region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DeleteHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DeleteHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * // import type { MigrationHubConfigClientConfig } from "@aws-sdk/client-migrationhub-config";
 * const config = {}; // type is MigrationHubConfigClientConfig
 * const client = new MigrationHubConfigClient(config);
 * const input = { // DeleteHomeRegionControlRequest
 *   ControlId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHomeRegionControlCommandInput - {@link DeleteHomeRegionControlCommandInput}
 * @returns {@link DeleteHomeRegionControlCommandOutput}
 * @see {@link DeleteHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link DeleteHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when a request fails due to temporary unavailability of the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MigrationHubConfigServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubConfig service.
 *
 * @public
 */
export class DeleteHomeRegionControlCommand extends command<DeleteHomeRegionControlCommandInput, DeleteHomeRegionControlCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHomeRegionControl",
  DeleteHomeRegionControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHomeRegionControlRequest;
      output: {};
    };
    sdk: {
      input: DeleteHomeRegionControlCommandInput;
      output: DeleteHomeRegionControlCommandOutput;
    };
  };
}
