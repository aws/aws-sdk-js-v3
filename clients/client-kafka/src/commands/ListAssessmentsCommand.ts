// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssessmentsRequest, ListAssessmentsResponse } from "../models/models_0";
import { ListAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandInput extends ListAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandOutput extends ListAssessmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of assessments for the specified cluster. Optionally filterable by assessment type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListAssessmentsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListAssessmentsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListAssessmentsRequest
 *   AssessmentType: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentsResponse
 * //   Assessments: [ // __listOfAssessmentInfo
 * //     { // AssessmentInfo
 * //       AssessmentArn: "STRING_VALUE",
 * //       AssessmentType: "UPDATE_BROKER_TYPE",
 * //       ClusterArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentsCommandInput - {@link ListAssessmentsCommandInput}
 * @returns {@link ListAssessmentsCommandOutput}
 * @see {@link ListAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentsCommandOutput} for command's `response` shape.
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
export class ListAssessmentsCommand extends command<ListAssessmentsCommandInput, ListAssessmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssessments",
  ListAssessments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentsRequest;
      output: ListAssessmentsResponse;
    };
    sdk: {
      input: ListAssessmentsCommandInput;
      output: ListAssessmentsCommandOutput;
    };
  };
}
