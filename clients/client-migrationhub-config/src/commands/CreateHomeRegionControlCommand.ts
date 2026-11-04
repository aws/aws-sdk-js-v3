// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/models_0";
import { CreateHomeRegionControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHomeRegionControlCommand}.
 */
export interface CreateHomeRegionControlCommandInput extends CreateHomeRegionControlRequest {}
/**
 * @public
 *
 * The output of {@link CreateHomeRegionControlCommand}.
 */
export interface CreateHomeRegionControlCommandOutput extends CreateHomeRegionControlResult, __MetadataBearer {}

/**
 * This API sets up the home region for the calling account only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, CreateHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, CreateHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * // import type { MigrationHubConfigClientConfig } from "@aws-sdk/client-migrationhub-config";
 * const config = {}; // type is MigrationHubConfigClientConfig
 * const client = new MigrationHubConfigClient(config);
 * const input = { // CreateHomeRegionControlRequest
 *   HomeRegion: "STRING_VALUE", // required
 *   Target: { // Target
 *     Type: "ACCOUNT", // required
 *     Id: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new CreateHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * // { // CreateHomeRegionControlResult
 * //   HomeRegionControl: { // HomeRegionControl
 * //     ControlId: "STRING_VALUE",
 * //     HomeRegion: "STRING_VALUE",
 * //     Target: { // Target
 * //       Type: "ACCOUNT", // required
 * //       Id: "STRING_VALUE",
 * //     },
 * //     RequestedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHomeRegionControlCommandInput - {@link CreateHomeRegionControlCommandInput}
 * @returns {@link CreateHomeRegionControlCommandOutput}
 * @see {@link CreateHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link CreateHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link DryRunOperation} (client fault)
 *
 * Exception raised to indicate that authorization of an action was successful, when the `DryRun` flag is set to true.
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
export class CreateHomeRegionControlCommand extends command<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput>(
  _ep0,
  _mw0,
  "CreateHomeRegionControl",
  CreateHomeRegionControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHomeRegionControlRequest;
      output: CreateHomeRegionControlResult;
    };
    sdk: {
      input: CreateHomeRegionControlCommandInput;
      output: CreateHomeRegionControlCommandOutput;
    };
  };
}
