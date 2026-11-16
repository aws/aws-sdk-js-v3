// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { EnableTagsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableTagsForOrganizationCommand}.
 */
export interface EnableTagsForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link EnableTagsForOrganizationCommand}.
 */
export interface EnableTagsForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the Health tags feature for all accounts in your organization. Once enabled, Health events will include resource tag information for affected entities across your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableTagsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableTagsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new EnableTagsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableTagsForOrganizationCommandInput - {@link EnableTagsForOrganizationCommandInput}
 * @returns {@link EnableTagsForOrganizationCommandOutput}
 * @see {@link EnableTagsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableTagsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class EnableTagsForOrganizationCommand extends command<EnableTagsForOrganizationCommandInput, EnableTagsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "EnableTagsForOrganization",
  EnableTagsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableTagsForOrganizationCommandInput;
      output: EnableTagsForOrganizationCommandOutput;
    };
  };
}
