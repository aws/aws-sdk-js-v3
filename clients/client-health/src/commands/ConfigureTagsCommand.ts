// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigureTagsRequest, ConfigureTagsResponse } from "../models/models_0";
import { ConfigureTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConfigureTagsCommand}.
 */
export interface ConfigureTagsCommandInput extends ConfigureTagsRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureTagsCommand}.
 */
export interface ConfigureTagsCommandOutput extends ConfigureTagsResponse, __MetadataBearer {}

/**
 * <p>Configures which resource tag keys are tracked by Health for your account. This operation replaces the existing configuration with the specified tag keys. Only configured tag keys will appear in Health event data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, ConfigureTagsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, ConfigureTagsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // ConfigureTagsRequest
 *   tagKeys: [ // ConfigureTagsResourceTagKeyList // required
 *     { // ResourceTagKey
 *       key: "STRING_VALUE",
 *       enabledForEventBridge: true || false,
 *       status: "PENDING" || "ACTIVE",
 *     },
 *   ],
 * };
 * const command = new ConfigureTagsCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureTagsResponse
 * //   configuredTagKeys: [ // ConfigureTagsResourceTagKeyList
 * //     { // ResourceTagKey
 * //       key: "STRING_VALUE",
 * //       enabledForEventBridge: true || false,
 * //       status: "PENDING" || "ACTIVE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ConfigureTagsCommandInput - {@link ConfigureTagsCommandInput}
 * @returns {@link ConfigureTagsCommandOutput}
 * @see {@link ConfigureTagsCommandInput} for command's `input` shape.
 * @see {@link ConfigureTagsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class ConfigureTagsCommand extends command<ConfigureTagsCommandInput, ConfigureTagsCommandOutput>(
  _ep0,
  _mw0,
  "ConfigureTags",
  ConfigureTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureTagsRequest;
      output: ConfigureTagsResponse;
    };
    sdk: {
      input: ConfigureTagsCommandInput;
      output: ConfigureTagsCommandOutput;
    };
  };
}
