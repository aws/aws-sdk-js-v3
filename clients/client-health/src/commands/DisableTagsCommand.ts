// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { DisableTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableTagsCommand}.
 */
export interface DisableTagsCommandInput {}
/**
 * @public
 *
 * The output of {@link DisableTagsCommand}.
 */
export interface DisableTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the Health tags feature for your account. After disabling, Health events will no longer include resource tag information. Previously configured tag keys are discarded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DisableTagsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DisableTagsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DisableTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableTagsCommandInput - {@link DisableTagsCommandInput}
 * @returns {@link DisableTagsCommandOutput}
 * @see {@link DisableTagsCommandInput} for command's `input` shape.
 * @see {@link DisableTagsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DisableTagsCommand extends command<DisableTagsCommandInput, DisableTagsCommandOutput>(
  _ep0,
  _mw0,
  "DisableTags",
  DisableTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableTagsCommandInput;
      output: DisableTagsCommandOutput;
    };
  };
}
