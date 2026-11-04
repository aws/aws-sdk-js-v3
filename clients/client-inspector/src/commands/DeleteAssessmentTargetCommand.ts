// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssessmentTargetRequest } from "../models/models_0";
import { DeleteAssessmentTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssessmentTargetCommand}.
 */
export interface DeleteAssessmentTargetCommandInput extends DeleteAssessmentTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssessmentTargetCommand}.
 */
export interface DeleteAssessmentTargetCommandOutput extends __MetadataBearer {}

/**
 * Deletes the assessment target that is specified by the ARN of the assessment target.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DeleteAssessmentTargetRequest
 *   assessmentTargetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssessmentTargetCommandInput - {@link DeleteAssessmentTargetCommandInput}
 * @returns {@link DeleteAssessmentTargetCommandOutput}
 * @see {@link DeleteAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTargetCommandOutput} for command's `response` shape.
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
 * @example Delete assessment target
 * ```javascript
 * // Deletes the assessment target that is specified by the ARN of the assessment target.
 * const input = {
 *   assessmentTargetArn: "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 * };
 * const command = new DeleteAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAssessmentTargetCommand extends command<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssessmentTarget",
  DeleteAssessmentTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssessmentTargetRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssessmentTargetCommandInput;
      output: DeleteAssessmentTargetCommandOutput;
    };
  };
}
