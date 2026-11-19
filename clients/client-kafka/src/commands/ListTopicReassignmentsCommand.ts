// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTopicReassignmentsRequest, ListTopicReassignmentsResponse } from "../models/models_0";
import { ListTopicReassignments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTopicReassignmentsCommand}.
 */
export interface ListTopicReassignmentsCommandInput extends ListTopicReassignmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicReassignmentsCommand}.
 */
export interface ListTopicReassignmentsCommandOutput extends ListTopicReassignmentsResponse, __MetadataBearer {}

/**
 * <p>Lists topic reassignment operations for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListTopicReassignmentsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListTopicReassignmentsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListTopicReassignmentsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StatusFilter: "STRING_VALUE",
 * };
 * const command = new ListTopicReassignmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicReassignmentsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Reassignments: [ // __listOfTopicReassignmentInfo
 * //     { // TopicReassignmentInfo
 * //       CompletedTopics: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "PENDING" || "IN_PROGRESS" || "STOPPING" || "COMPLETE" || "FAILED" || "STOPPED",
 * //       TargetInstanceType: "STRING_VALUE",
 * //       TopicReassignmentOperationArn: "STRING_VALUE",
 * //       TotalTopics: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTopicReassignmentsCommandInput - {@link ListTopicReassignmentsCommandInput}
 * @returns {@link ListTopicReassignmentsCommandOutput}
 * @see {@link ListTopicReassignmentsCommandInput} for command's `input` shape.
 * @see {@link ListTopicReassignmentsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListTopicReassignmentsCommand extends command<ListTopicReassignmentsCommandInput, ListTopicReassignmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListTopicReassignments",
  ListTopicReassignments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicReassignmentsRequest;
      output: ListTopicReassignmentsResponse;
    };
    sdk: {
      input: ListTopicReassignmentsCommandInput;
      output: ListTopicReassignmentsCommandOutput;
    };
  };
}
