// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UpdateAssessmentTargetRequest } from "../models/models_0";
import { de_UpdateAssessmentTargetCommand, se_UpdateAssessmentTargetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssessmentTargetCommand}.
 */
export interface UpdateAssessmentTargetCommandInput extends UpdateAssessmentTargetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssessmentTargetCommand}.
 */
export interface UpdateAssessmentTargetCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
 *          and region are included in the assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UpdateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UpdateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // UpdateAssessmentTargetRequest
 *   assessmentTargetArn: "STRING_VALUE", // required
 *   assessmentTargetName: "STRING_VALUE", // required
 *   resourceGroupArn: "STRING_VALUE",
 * };
 * const command = new UpdateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAssessmentTargetCommandInput - {@link UpdateAssessmentTargetCommandInput}
 * @returns {@link UpdateAssessmentTargetCommandOutput}
 * @see {@link UpdateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
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
 * @example Update assessment target
 * ```javascript
 * // Updates the assessment target that is specified by the ARN of the assessment target.
 * const input = {
 *   "assessmentTargetArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX",
 *   "assessmentTargetName": "Example",
 *   "resourceGroupArn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-yNbgL5Pt"
 * };
 * const command = new UpdateAssessmentTargetCommand(input);
 * await client.send(command);
 * // example id: update-assessment-target-1481067866692
 * ```
 *
 */
export class UpdateAssessmentTargetCommand extends $Command
  .classBuilder<
    UpdateAssessmentTargetCommandInput,
    UpdateAssessmentTargetCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "UpdateAssessmentTarget", {})
  .n("InspectorClient", "UpdateAssessmentTargetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAssessmentTargetCommand)
  .de(de_UpdateAssessmentTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssessmentTargetRequest;
      output: {};
    };
    sdk: {
      input: UpdateAssessmentTargetCommandInput;
      output: UpdateAssessmentTargetCommandOutput;
    };
  };
}
