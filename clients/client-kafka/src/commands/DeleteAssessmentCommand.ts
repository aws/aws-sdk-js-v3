// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssessmentRequest, DeleteAssessmentResponse } from "../models/models_0";
import { DeleteAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentCommand}.
 */
export interface DeleteAssessmentCommandInput extends DeleteAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentCommand}.
 */
export interface DeleteAssessmentCommandOutput extends DeleteAssessmentResponse, __MetadataBearer {}

/**
 * <p>Deletes an assessment and its findings. Frees one slot against the cluster's assessment quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteAssessmentCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteAssessmentCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteAssessmentRequest
 *   AssessmentArn: "STRING_VALUE", // required
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAssessmentResponse
 * //   AssessmentArn: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "COMPLETE" || "FAILED" || "DELETING",
 * // };
 *
 * ```
 *
 * @param DeleteAssessmentCommandInput - {@link DeleteAssessmentCommandInput}
 * @returns {@link DeleteAssessmentCommandOutput}
 * @see {@link DeleteAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentCommandOutput} for command's `response` shape.
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
export class DeleteAssessmentCommand extends command<DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssessment",
  DeleteAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentRequest;
      output: DeleteAssessmentResponse;
    };
    sdk: {
      input: DeleteAssessmentCommandInput;
      output: DeleteAssessmentCommandOutput;
    };
  };
}
