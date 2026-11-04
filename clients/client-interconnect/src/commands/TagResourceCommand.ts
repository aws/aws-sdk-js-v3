// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
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
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Add new tags to the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, TagResourceCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, TagResourceCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // TagResourceRequest
 *   arn: "STRING_VALUE", // required
 *   tags: { // TagMap // required
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
 * @example Apply Tags
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *   tags: {
 *     TagKey1: "TagValue1",
 *     TagKey2: "TagValue2"
 *   }
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
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
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
