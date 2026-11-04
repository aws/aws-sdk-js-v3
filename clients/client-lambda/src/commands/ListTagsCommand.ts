// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { ListTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsCommand}.
 */
export interface ListTagsCommandInput extends ListTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsCommand}.
 */
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {}

/**
 * Returns a function, event source mapping, or code signing configuration's [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html). You can also view function tags with GetFunction.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListTagsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListTagsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListTagsRequest
 *   Resource: "STRING_VALUE", // required
 * };
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsResponse
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsCommandInput - {@link ListTagsCommandInput}
 * @returns {@link ListTagsCommandOutput}
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To retrieve the list of tags for a Lambda function
 * ```javascript
 * // The following example displays the tags attached to the my-function Lambda function.
 * const input = {
 *   Resource: "arn:aws:lambda:us-west-2:123456789012:function:my-function"
 * };
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Tags: {
 *     Category: "Web Tools",
 *     Department: "Sales"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTagsCommand extends command<ListTagsCommandInput, ListTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListTags",
  ListTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsRequest;
      output: ListTagsResponse;
    };
    sdk: {
      input: ListTagsCommandInput;
      output: ListTagsCommandOutput;
    };
  };
}
