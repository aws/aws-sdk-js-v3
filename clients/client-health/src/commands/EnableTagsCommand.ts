// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import { EnableTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableTagsCommand}.
 */
export interface EnableTagsCommandInput {}
/**
 * @public
 *
 * The output of {@link EnableTagsCommand}.
 */
export interface EnableTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the Health tags feature for your account. Once enabled, Health events will include resource tag information for affected entities. If the feature is already enabled, this operation has no effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, EnableTagsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, EnableTagsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new EnableTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableTagsCommandInput - {@link EnableTagsCommandInput}
 * @returns {@link EnableTagsCommandOutput}
 * @see {@link EnableTagsCommandInput} for command's `input` shape.
 * @see {@link EnableTagsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class EnableTagsCommand extends command<EnableTagsCommandInput, EnableTagsCommandOutput>(
  _ep0,
  _mw0,
  "EnableTags",
  EnableTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableTagsCommandInput;
      output: EnableTagsCommandOutput;
    };
  };
}
