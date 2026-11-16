// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { DisableTagsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableTagsForOrganizationCommand}.
 */
export interface DisableTagsForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableTagsForOrganizationCommand}.
 */
export interface DisableTagsForOrganizationCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the Health tags feature for all accounts in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DisableTagsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DisableTagsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DisableTagsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableTagsForOrganizationCommandInput - {@link DisableTagsForOrganizationCommandInput}
 * @returns {@link DisableTagsForOrganizationCommandOutput}
 * @see {@link DisableTagsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DisableTagsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DisableTagsForOrganizationCommand extends command<DisableTagsForOrganizationCommandInput, DisableTagsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DisableTagsForOrganization",
  DisableTagsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableTagsForOrganizationCommandInput;
      output: DisableTagsForOrganizationCommandOutput;
    };
  };
}
