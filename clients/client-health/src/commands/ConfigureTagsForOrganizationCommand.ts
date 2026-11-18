// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigureTagsForOrganizationRequest, ConfigureTagsForOrganizationResponse } from "../models/models_0";
import { ConfigureTagsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConfigureTagsForOrganizationCommand}.
 */
export interface ConfigureTagsForOrganizationCommandInput extends ConfigureTagsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureTagsForOrganizationCommand}.
 */
export interface ConfigureTagsForOrganizationCommandOutput extends ConfigureTagsForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Configures which tag keys are tracked by Health for all accounts in your organization. This operation replaces the existing configuration with the specified tag keys. Only configured tag keys will appear in Health event data across the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, ConfigureTagsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, ConfigureTagsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // ConfigureTagsForOrganizationRequest
 *   tagKeys: [ // ConfigureTagsForOrganizationTagKeyList // required
 *     { // TagKeyForOrganization
 *       key: "STRING_VALUE", // required
 *       enabledForEventBridge: true || false,
 *     },
 *   ],
 * };
 * const command = new ConfigureTagsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureTagsForOrganizationResponse
 * //   configuredTagKeys: [ // ConfigureTagsForOrganizationResponseTagKeyList
 * //     { // OrganizationTagKey
 * //       key: "STRING_VALUE",
 * //       enabledForEventBridge: true || false,
 * //       status: "PENDING" || "ACTIVE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ConfigureTagsForOrganizationCommandInput - {@link ConfigureTagsForOrganizationCommandInput}
 * @returns {@link ConfigureTagsForOrganizationCommandOutput}
 * @see {@link ConfigureTagsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ConfigureTagsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class ConfigureTagsForOrganizationCommand extends command<ConfigureTagsForOrganizationCommandInput, ConfigureTagsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "ConfigureTagsForOrganization",
  ConfigureTagsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureTagsForOrganizationRequest;
      output: ConfigureTagsForOrganizationResponse;
    };
    sdk: {
      input: ConfigureTagsForOrganizationCommandInput;
      output: ConfigureTagsForOrganizationCommandOutput;
    };
  };
}
