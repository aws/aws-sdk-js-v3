// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTopicReassignmentRequest, StartTopicReassignmentResponse } from "../models/models_0";
import { StartTopicReassignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTopicReassignmentCommand}.
 */
export interface StartTopicReassignmentCommandInput extends StartTopicReassignmentRequest {}
/**
 * @public
 *
 * The output of {@link StartTopicReassignmentCommand}.
 */
export interface StartTopicReassignmentCommandOutput extends StartTopicReassignmentResponse, __MetadataBearer {}

/**
 * <p>Initiates topic partition reassignment between broker types in a mixed-mode cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, StartTopicReassignmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, StartTopicReassignmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // StartTopicReassignmentRequest
 *   ClientToken: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE", // required
 *   TargetInstanceType: "STRING_VALUE", // required
 *   TopicsToExclude: [ // __listOf__stringMin1Max256
 *     "STRING_VALUE",
 *   ],
 *   TopicsToInclude: [ // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartTopicReassignmentCommand(input);
 * const response = await client.send(command);
 * // { // StartTopicReassignmentResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "STOPPING" || "COMPLETE" || "FAILED" || "STOPPED",
 * //   TopicReassignmentOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTopicReassignmentCommandInput - {@link StartTopicReassignmentCommandInput}
 * @returns {@link StartTopicReassignmentCommandOutput}
 * @see {@link StartTopicReassignmentCommandInput} for command's `input` shape.
 * @see {@link StartTopicReassignmentCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
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
export class StartTopicReassignmentCommand extends command<StartTopicReassignmentCommandInput, StartTopicReassignmentCommandOutput>(
  _ep0,
  _mw0,
  "StartTopicReassignment",
  StartTopicReassignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTopicReassignmentRequest;
      output: StartTopicReassignmentResponse;
    };
    sdk: {
      input: StartTopicReassignmentCommandInput;
      output: StartTopicReassignmentCommandOutput;
    };
  };
}
