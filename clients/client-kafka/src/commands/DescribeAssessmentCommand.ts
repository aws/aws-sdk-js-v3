// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAssessmentRequest, DescribeAssessmentResponse } from "../models/models_0";
import { DescribeAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandInput extends DescribeAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandOutput extends DescribeAssessmentResponse, __MetadataBearer {}

/**
 * <p>Returns the status and summary of an assessment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeAssessmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeAssessmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeAssessmentRequest
 *   AssessmentArn: "STRING_VALUE", // required
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentResponse
 * //   AssessmentArn: "STRING_VALUE",
 * //   AssessmentParameters: { // AssessmentParameters
 * //     TargetInstanceType: "STRING_VALUE",
 * //   },
 * //   AssessmentType: "UPDATE_BROKER_TYPE",
 * //   ClusterArn: "STRING_VALUE",
 * //   CompletionTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * //   StatusMessage: "STRING_VALUE",
 * //   Summary: { // AssessmentSummary
 * //     ByCategory: { // __mapOf__integer
 * //       "<keys>": Number("int"),
 * //     },
 * //     BySeverity: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     FindingsCapped: true || false,
 * //     HasBlockingFindings: true || false,
 * //     TotalFindings: Number("int"),
 * //   },
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentCommandInput - {@link DescribeAssessmentCommandInput}
 * @returns {@link DescribeAssessmentCommandOutput}
 * @see {@link DescribeAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentCommandOutput} for command's `response` shape.
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
export class DescribeAssessmentCommand extends command<DescribeAssessmentCommandInput, DescribeAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAssessment",
  DescribeAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentRequest;
      output: DescribeAssessmentResponse;
    };
    sdk: {
      input: DescribeAssessmentCommandInput;
      output: DescribeAssessmentCommandOutput;
    };
  };
}
