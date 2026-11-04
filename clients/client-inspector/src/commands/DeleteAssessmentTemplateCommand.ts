// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssessmentTemplateRequest } from "../models/models_0";
import { DeleteAssessmentTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentTemplateCommand}.
 */
export interface DeleteAssessmentTemplateCommandInput extends DeleteAssessmentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentTemplateCommand}.
 */
export interface DeleteAssessmentTemplateCommandOutput extends __MetadataBearer {}

/**
 * Deletes the assessment template that is specified by the ARN of the assessment template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DeleteAssessmentTemplateRequest
 *   assessmentTemplateArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentTemplateCommandInput - {@link DeleteAssessmentTemplateCommandInput}
 * @returns {@link DeleteAssessmentTemplateCommandOutput}
 * @see {@link DeleteAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link AssessmentRunInProgressException} (client fault)
 *
 * You cannot perform a specified action if an assessment run is currently in progress.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced an entity that does not exist. The error code describes the entity.
 *
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *
 * The serice is temporary unavailable.
 *
 * @throws {@link InspectorServiceException}
 *
 * Base exception class for all service exceptions from Inspector service.
 *
 * @example Delete assessment template
 * ```javascript
 * // Deletes the assessment template that is specified by the ARN of the assessment template.
 * const input = {
 *   assessmentTemplateArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T"
 * };
 * const command = new DeleteAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAssessmentTemplateCommand extends command<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssessmentTemplate",
  DeleteAssessmentTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentTemplateCommandInput;
      output: DeleteAssessmentTemplateCommandOutput;
    };
  };
}
