// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
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
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {}

/**
 * Removes tags from the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, UntagResourceCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, UntagResourceCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // UntagResourceRequest
 *   arn: "STRING_VALUE", // required
 *   tagKeys: [ // TagKeyList // required
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
 * @see {@link InterconnectClientResolvedConfig | config} for InterconnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The calling principal is not allowed to access the specified resource, or the resource does not exist.
 *
 * @throws {@link InterconnectClientException} (client fault)
 *
 * The request was denied due to incorrect client supplied parameters.
 *
 * @throws {@link InterconnectServerException} (server fault)
 *
 * The request resulted in an exception internal to the service.
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that does not exist on the server.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The requested operation would result in the calling principal exceeding their allotted quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link InterconnectServiceException}
 *
 * Base exception class for all service exceptions from Interconnect service.
 *
 * @example Remove Tags
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *   tagKeys: [
 *     "TagKey1",
 *     "TagKey2"
 *   ]
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
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
