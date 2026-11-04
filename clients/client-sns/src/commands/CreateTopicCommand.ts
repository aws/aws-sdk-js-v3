// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import { CreateTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandInput extends CreateTopicInput {}
/**
 * @public
 *
 * The output of {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandOutput extends CreateTopicResponse, __MetadataBearer {}

/**
 * Creates a topic to which notifications can be published. Users can create at most 100,000 standard topics (at most 1,000 FIFO topics). For more information, see [Creating an Amazon SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html) in the *Amazon SNS Developer Guide*. This action is idempotent, so if the requester already owns a topic with the specified name, that topic's ARN is returned without creating a new topic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CreateTopicInput
 *   Name: "STRING_VALUE", // required
 *   Attributes: { // TopicAttributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DataProtectionPolicy: "STRING_VALUE",
 * };
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * // { // CreateTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTopicCommandInput - {@link CreateTopicCommandInput}
 * @returns {@link CreateTopicCommandOutput}
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
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
 * @throws {@link TopicLimitExceededException} (client fault)
 *
 * Indicates that the customer already owns the maximum allowed number of topics.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class CreateTopicCommand extends command<CreateTopicCommandInput, CreateTopicCommandOutput>(
  _ep0,
  _mw0,
  "CreateTopic",
  CreateTopic$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTopicInput;
      output: CreateTopicResponse;
    };
    sdk: {
      input: CreateTopicCommandInput;
      output: CreateTopicCommandOutput;
    };
  };
}
