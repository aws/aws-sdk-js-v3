// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/models_0";
import { StartAssessmentRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StartAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StartAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link AgentsAlreadyRunningAssessmentException} (client fault)
 *
 * You started an assessment run, but one of the instances is already participating in another assessment run.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidCrossAccountRoleException} (client fault)
 *
 * Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.
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
 * @example Start assessment run
 * ```javascript
 * // Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
 * const input = {
 *   assessmentRunName: "examplerun",
 *   assessmentTemplateArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T"
 * };
 * const command = new StartAssessmentRunCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   assessmentRunArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-jOoroxyY"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartAssessmentRunCommand extends command<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput>(
  _ep0,
  _mw0,
  "StartAssessmentRun",
  StartAssessmentRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssessmentRunRequest;
      output: StartAssessmentRunResponse;
    };
    sdk: {
      input: StartAssessmentRunCommandInput;
      output: StartAssessmentRunCommandOutput;
    };
  };
}
