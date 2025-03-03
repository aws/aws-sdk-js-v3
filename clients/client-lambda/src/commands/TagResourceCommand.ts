// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { TagResourceRequest } from "../models/models_0";
import { TagResource } from "../schemas/com.amazonaws.lambda";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface TagResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function, event source mapping, or code signing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, TagResourceCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, TagResourceCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // TagResourceRequest
 *   Resource: "STRING_VALUE", // required
 *   Tags: { // Tags // required
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
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 * @public
 * @example To add tags to an existing Lambda function
 * ```javascript
 * // The following example adds a tag with the key name DEPARTMENT and a value of 'Department A' to the specified Lambda function.
 * const input = {
 *   "Resource": "arn:aws:lambda:us-west-2:123456789012:function:my-function",
 *   "Tags": {
 *     "DEPARTMENT": "Department A"
 *   }
 * };
 * const command = new TagResourceCommand(input);
 * await client.send(command);
 * // example id: to-add-tags-to-an-existing-lambda-function-1586491890446
 * ```
 *
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "TagResource", {})
  .n("LambdaClient", "TagResourceCommand")
  .f(void 0, void 0)
  .sc(TagResource)
  .build() {
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
