// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentRunRequest } from "../models/models_0";
import { de_DeleteAssessmentRunCommand, se_DeleteAssessmentRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentRunCommand}.
 */
export interface DeleteAssessmentRunCommandInput extends DeleteAssessmentRunRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentRunCommand}.
 */
export interface DeleteAssessmentRunCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DeleteAssessmentRunRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentRunCommandInput - {@link DeleteAssessmentRunCommandInput}
 * @returns {@link DeleteAssessmentRunCommandOutput}
 * @see {@link DeleteAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link AssessmentRunInProgressException} (client fault)
 *  <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example Delete assessment run
 * ```javascript
 * // Deletes the assessment run that is specified by the ARN of the assessment run.
 * const input = {
 *   "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-11LMTAVe"
 * };
 * const command = new DeleteAssessmentRunCommand(input);
 * await client.send(command);
 * // example id: delete-assessment-run-1481064251629
 * ```
 *
 */
export class DeleteAssessmentRunCommand extends $Command
  .classBuilder<
    DeleteAssessmentRunCommandInput,
    DeleteAssessmentRunCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "DeleteAssessmentRun", {})
  .n("InspectorClient", "DeleteAssessmentRunCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssessmentRunCommand)
  .de(de_DeleteAssessmentRunCommand)
  .build() {}
