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
 * Adds the specified tags to the specified resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, TagResourceCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, TagResourceCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // TagResourceInput
 *   resourceArn: "STRING_VALUE", // required
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
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To add tags to a proxy
 * ```javascript
 * // The following example adds the specified tags to the specified proxy.
 * const input = {
 *   resourceArn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   tags: {
 *     Environment: "production",
 *     Team: "networking"
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
      input: TagResourceInput;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
