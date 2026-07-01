// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagResourceRequest, UntagResourceResult } from "../models/models_0";
import { UntagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends UntagResourceResult, __MetadataBearer {}

/**
 * <p>Removes tags from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UntagResourceCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UntagResourceCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // UntagResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagResourceCommandInput - {@link UntagResourceCommandInput}
 * @returns {@link UntagResourceCommandOutput}
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class UntagResourceCommand extends command<UntagResourceCommandInput, UntagResourceCommandOutput>(
  _ep0,
  _mw0,
  "UntagResource",
  UntagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagResourceRequest;
      output: {};
    };
    sdk: {
      input: UntagResourceCommandInput;
      output: UntagResourceCommandOutput;
    };
  };
}
