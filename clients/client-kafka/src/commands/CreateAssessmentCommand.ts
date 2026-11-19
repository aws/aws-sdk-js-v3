// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssessmentRequest, CreateAssessmentResponse } from "../models/models_0";
import { CreateAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssessmentCommand}.
 */
export interface CreateAssessmentCommandInput extends CreateAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssessmentCommand}.
 */
export interface CreateAssessmentCommandOutput extends CreateAssessmentResponse, __MetadataBearer {}

/**
 * <p>Creates a new assessment for the specified cluster. Kicks off an asynchronous scan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateAssessmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateAssessmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // CreateAssessmentRequest
 *   AssessmentParameters: { // AssessmentParameters
 *     TargetInstanceType: "STRING_VALUE",
 *   },
 *   AssessmentType: "UPDATE_BROKER_TYPE", // required
 *   ClusterArn: "STRING_VALUE", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssessmentResponse
 * //   AssessmentArn: "STRING_VALUE",
 * //   AssessmentType: "UPDATE_BROKER_TYPE",
 * //   ClusterArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * // };
 *
 * ```
 *
 * @param CreateAssessmentCommandInput - {@link CreateAssessmentCommandInput}
 * @returns {@link CreateAssessmentCommandOutput}
 * @see {@link CreateAssessmentCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentCommandOutput} for command's `response` shape.
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
export class CreateAssessmentCommand extends command<CreateAssessmentCommandInput, CreateAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssessment",
  CreateAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssessmentRequest;
      output: CreateAssessmentResponse;
    };
    sdk: {
      input: CreateAssessmentCommandInput;
      output: CreateAssessmentCommandOutput;
    };
  };
}
