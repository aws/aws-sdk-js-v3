// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/models_0";
import { CreateAssessmentTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAssessmentTemplateCommand}.
 */
export interface CreateAssessmentTemplateCommandInput extends CreateAssessmentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssessmentTemplateCommand}.
 */
export interface CreateAssessmentTemplateCommandOutput extends CreateAssessmentTemplateResponse, __MetadataBearer {}

/**
 * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the [service-linked role](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html) isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // CreateAssessmentTemplateRequest
 *   assessmentTargetArn: "STRING_VALUE", // required
 *   assessmentTemplateName: "STRING_VALUE", // required
 *   durationInSeconds: Number("int"), // required
 *   rulesPackageArns: [ // AssessmentTemplateRulesPackageArnList // required
 *     "STRING_VALUE",
 *   ],
 *   userAttributesForFindings: [ // UserAttributeList
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssessmentTemplateResponse
 * //   assessmentTemplateArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAssessmentTemplateCommandInput - {@link CreateAssessmentTemplateCommandInput}
 * @returns {@link CreateAssessmentTemplateCommandOutput}
 * @see {@link CreateAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have required permissions to access the requested resource.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
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
 * @example Create assessment template
 * ```javascript
 * // Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.
 * const input = {
 *   assessmentTargetArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX",
 *   assessmentTemplateName: "ExampleAssessmentTemplate",
 *   durationInSeconds: 180,
 *   rulesPackageArns: [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-11B9DBXp"
 *   ],
 *   userAttributesForFindings: [
 *     {
 *       key: "Example",
 *       value: "example"
 *     }
 *   ]
 * };
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   assessmentTemplateArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAssessmentTemplateCommand extends command<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssessmentTemplate",
  CreateAssessmentTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssessmentTemplateRequest;
      output: CreateAssessmentTemplateResponse;
    };
    sdk: {
      input: CreateAssessmentTemplateCommandInput;
      output: CreateAssessmentTemplateCommandOutput;
    };
  };
}
