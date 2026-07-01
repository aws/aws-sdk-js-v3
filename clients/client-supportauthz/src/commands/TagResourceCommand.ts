// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceInput, TagResourceOutput } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceInput {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceOutput, __MetadataBearer {}

/**
 * <p>Adds or overwrites one or more tags for a support permit resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, TagResourceCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, TagResourceCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // TagResourceInput
 *   resourceArn: "STRING_VALUE", // required
 *   tags: { // Tags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SupportAuthZServiceException}
 * <p>Base exception class for all service exceptions from SupportAuthZ service.</p>
 *
 *
 * @public
 */
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceInput;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
