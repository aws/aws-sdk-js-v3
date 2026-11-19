// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTopicReassignmentRequest, StopTopicReassignmentResponse } from "../models/models_0";
import { StopTopicReassignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTopicReassignmentCommand}.
 */
export interface StopTopicReassignmentCommandInput extends StopTopicReassignmentRequest {}
/**
 * @public
 *
 * The output of {@link StopTopicReassignmentCommand}.
 */
export interface StopTopicReassignmentCommandOutput extends StopTopicReassignmentResponse, __MetadataBearer {}

/**
 * <p>Stops an active topic reassignment operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, StopTopicReassignmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, StopTopicReassignmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // StopTopicReassignmentRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicReassignmentOperationArn: "STRING_VALUE", // required
 * };
 * const command = new StopTopicReassignmentCommand(input);
 * const response = await client.send(command);
 * // { // StopTopicReassignmentResponse
 * //   Status: "PENDING" || "IN_PROGRESS" || "STOPPING" || "COMPLETE" || "FAILED" || "STOPPED",
 * //   TopicReassignmentOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopTopicReassignmentCommandInput - {@link StopTopicReassignmentCommandInput}
 * @returns {@link StopTopicReassignmentCommandOutput}
 * @see {@link StopTopicReassignmentCommandInput} for command's `input` shape.
 * @see {@link StopTopicReassignmentCommandOutput} for command's `response` shape.
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
export class StopTopicReassignmentCommand extends command<StopTopicReassignmentCommandInput, StopTopicReassignmentCommandOutput>(
  _ep0,
  _mw0,
  "StopTopicReassignment",
  StopTopicReassignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTopicReassignmentRequest;
      output: StopTopicReassignmentResponse;
    };
    sdk: {
      input: StopTopicReassignmentCommandInput;
      output: StopTopicReassignmentCommandOutput;
    };
  };
}
