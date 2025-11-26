// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import type { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/models_0";
import { CreateHomeRegionControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API sets up the home region for the calling account only.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DryRunOperation} (client fault)
 *  <p>Exception raised to indicate that authorization of an action was successful, when the
 *         <code>DryRun</code> flag is set to true.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when a request fails due to temporary unavailability of the
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubConfigServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubConfig service.</p>
 *
 *
 * @public
 */
export class CreateHomeRegionControlCommand extends $Command
  .classBuilder<
    CreateHomeRegionControlCommandInput,
    CreateHomeRegionControlCommandOutput,
    MigrationHubConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubMultiAccountService", "CreateHomeRegionControl", {})
  .n("MigrationHubConfigClient", "CreateHomeRegionControlCommand")
  .sc(CreateHomeRegionControl)
  .build() {
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
