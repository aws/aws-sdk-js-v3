// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTopicsInput, ListTopicsResponse } from "../models/models_0";
import { ListTopics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandInput extends ListTopicsInput {}
/**
 * @public
 *
 * The output of {@link ListTopicsCommand}.
 */
export interface ListTopicsCommandOutput extends ListTopicsResponse, __MetadataBearer {}

/**
 * Returns a list of the requester's topics. Each call returns a limited list of topics, up to 100. If there are more topics, a `NextToken` is also returned. Use the `NextToken` parameter in a new `ListTopics` call to get further results.
 *
 * This action is throttled at 30 transactions per second (TPS).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListTopicsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListTopicsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListTopicsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTopicsCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicsResponse
 * //   Topics: [ // TopicsList
 * //     { // Topic
 * //       TopicArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicsCommandInput - {@link ListTopicsCommandInput}
 * @returns {@link ListTopicsCommandOutput}
 * @see {@link ListTopicsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class ListTopicsCommand extends command<ListTopicsCommandInput, ListTopicsCommandOutput>(
  _ep0,
  _mw0,
  "ListTopics",
  ListTopics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicsInput;
      output: ListTopicsResponse;
    };
    sdk: {
      input: ListTopicsCommandInput;
      output: ListTopicsCommandOutput;
    };
  };
}
