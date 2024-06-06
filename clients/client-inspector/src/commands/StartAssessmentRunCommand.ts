// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/models_0";
import { de_StartAssessmentRunCommand, se_StartAssessmentRunCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAssessmentRunCommand}.
 */
export interface StartAssessmentRunCommandInput extends StartAssessmentRunRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentRunCommand}.
 */
export interface StartAssessmentRunCommandOutput extends StartAssessmentRunResponse, __MetadataBearer {}

/**
 * <p>Starts the assessment run specified by the ARN of the assessment template. For this
 *          API to function properly, you must not exceed the limit of running up to 500 concurrent
 *          agents per AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StartAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StartAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // StartAssessmentRunRequest
 *   assessmentTemplateArn: "STRING_VALUE", // required
 *   assessmentRunName: "STRING_VALUE",
 * };
 * const command = new StartAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // { // StartAssessmentRunResponse
 * //   assessmentRunArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAssessmentRunCommandInput - {@link StartAssessmentRunCommandInput}
 * @returns {@link StartAssessmentRunCommandOutput}
 * @see {@link StartAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link AgentsAlreadyRunningAssessmentException} (client fault)
 *  <p>You started an assessment run, but one of the instances is already participating in
 *          another assessment run.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidCrossAccountRoleException} (client fault)
 *  <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
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
 * @example Start assessment run
 * ```javascript
 * // Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
 * const input = {
 *   "assessmentRunName": "examplerun",
 *   "assessmentTemplateArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T"
 * };
 * const command = new StartAssessmentRunCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-jOoroxyY"
 * }
 * *\/
 * // example id: start-assessment-run-1481067407484
 * ```
 *
 */
export class StartAssessmentRunCommand extends $Command
  .classBuilder<
    StartAssessmentRunCommandInput,
    StartAssessmentRunCommandOutput,
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
  .s("InspectorService", "StartAssessmentRun", {})
  .n("InspectorClient", "StartAssessmentRunCommand")
  .f(void 0, void 0)
  .ser(se_StartAssessmentRunCommand)
  .de(de_StartAssessmentRunCommand)
  .build() {}
