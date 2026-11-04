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
 * Removes the specified tag key and value pairs from the specified resource share or managed permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UntagResourceCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UntagResourceCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // UntagResourceRequest
 *   resourceShareArn: "STRING_VALUE",
 *   tagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 *   resourceArn: "STRING_VALUE",
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
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
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
