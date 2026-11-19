// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicReassignmentRequest, DescribeTopicReassignmentResponse } from "../models/models_0";
import { DescribeTopicReassignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicReassignmentCommand}.
 */
export interface DescribeTopicReassignmentCommandInput extends DescribeTopicReassignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicReassignmentCommand}.
 */
export interface DescribeTopicReassignmentCommandOutput extends DescribeTopicReassignmentResponse, __MetadataBearer {}

/**
 * <p>Returns the status and progress of a topic reassignment operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeTopicReassignmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeTopicReassignmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeTopicReassignmentRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicReassignmentOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicReassignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicReassignmentResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   CompletedTopics: Number("int"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ErrorInfo: { // ErrorInfo
 * //     ErrorCode: "STRING_VALUE",
 * //     ErrorString: "STRING_VALUE",
 * //   },
 * //   LastUpdateTime: new Date("TIMESTAMP"),
 * //   MigratedPartitions: Number("int"),
 * //   Status: "PENDING" || "IN_PROGRESS" || "STOPPING" || "COMPLETE" || "FAILED" || "STOPPED",
 * //   TargetInstanceType: "STRING_VALUE",
 * //   TopicReassignmentOperationArn: "STRING_VALUE",
 * //   TopicsToExclude: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   TopicsToInclude: [
 * //     "STRING_VALUE",
 * //   ],
 * //   TotalPartitions: Number("int"),
 * //   TotalTopics: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeTopicReassignmentCommandInput - {@link DescribeTopicReassignmentCommandInput}
 * @returns {@link DescribeTopicReassignmentCommandOutput}
 * @see {@link DescribeTopicReassignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicReassignmentCommandOutput} for command's `response` shape.
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
export class DescribeTopicReassignmentCommand extends command<DescribeTopicReassignmentCommandInput, DescribeTopicReassignmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopicReassignment",
  DescribeTopicReassignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicReassignmentRequest;
      output: DescribeTopicReassignmentResponse;
    };
    sdk: {
      input: DescribeTopicReassignmentCommandInput;
      output: DescribeTopicReassignmentCommandOutput;
    };
  };
}
