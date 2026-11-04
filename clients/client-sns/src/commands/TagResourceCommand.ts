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
 * Add tags to the specified Amazon SNS topic. For an overview, see [Amazon SNS Tags](https://docs.aws.amazon.com/sns/latest/dg/sns-tags.html) in the *Amazon SNS Developer Guide*.
 *
 * When you use topic tags, keep the following guidelines in mind:
 *
 * - Adding more than 50 tags to a topic isn't recommended.
 * - Tags don't have any semantic meaning. Amazon SNS interprets tags as character strings.
 * - Tags are case-sensitive.
 * - A new tag with a key identical to that of an existing tag overwrites the existing tag.
 * - Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If your application requires a higher throughput, file a [technical support request](https://console.aws.amazon.com/support/home#/case/create?issueType=technical).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, TagResourceCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, TagResourceCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // TagResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link ConcurrentAccessException} (client fault)
 *
 * Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Can’t perform the action on the specified resource. Make sure that the resource exists.
 *
 * @throws {@link StaleTagException} (client fault)
 *
 * A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *
 * Can't add more than 50 tags to a topic.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * The request doesn't comply with the IAM tag policy. Correct your request and then retry it.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
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
