// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTemplateSummaryInput, GetTemplateSummaryOutput } from "../models/models_0";
import { de_GetTemplateSummaryCommand, se_GetTemplateSummaryCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateSummaryCommand}.
 */
export interface GetTemplateSummaryCommandInput extends GetTemplateSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateSummaryCommand}.
 */
export interface GetTemplateSummaryCommandOutput extends GetTemplateSummaryOutput, __MetadataBearer {}

/**
 * <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code>
 *       action is useful for viewing parameter information, such as default parameter values and
 *       parameter types, before you create or update a stack or stack set.</p>
 *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you
 *       can get template information for a stack set, or a running or deleted stack.</p>
 *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for
 *       up to 90 days after the stack has been deleted. If the template doesn't exist, a
 *         <code>ValidationError</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateSummaryCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateSummaryCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // GetTemplateSummaryInput
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   StackName: "STRING_VALUE",
 *   StackSetName: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 *   TemplateSummaryConfig: { // TemplateSummaryConfig
 *     TreatUnrecognizedResourceTypesAsWarnings: true || false,
 *   },
 * };
 * const command = new GetTemplateSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateSummaryOutput
 * //   Parameters: [ // ParameterDeclarations
 * //     { // ParameterDeclaration
 * //       ParameterKey: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       ParameterType: "STRING_VALUE",
 * //       NoEcho: true || false,
 * //       Description: "STRING_VALUE",
 * //       ParameterConstraints: { // ParameterConstraints
 * //         AllowedValues: [ // AllowedValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Description: "STRING_VALUE",
 * //   Capabilities: [ // Capabilities
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //   ],
 * //   CapabilitiesReason: "STRING_VALUE",
 * //   ResourceTypes: [ // ResourceTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   Version: "STRING_VALUE",
 * //   Metadata: "STRING_VALUE",
 * //   DeclaredTransforms: [ // TransformsList
 * //     "STRING_VALUE",
 * //   ],
 * //   ResourceIdentifierSummaries: [ // ResourceIdentifierSummaries
 * //     { // ResourceIdentifierSummary
 * //       ResourceType: "STRING_VALUE",
 * //       LogicalResourceIds: [ // LogicalResourceIds
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceIdentifiers: [ // ResourceIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Warnings: { // Warnings
 * //     UnrecognizedResourceTypes: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateSummaryCommandInput - {@link GetTemplateSummaryCommandInput}
 * @returns {@link GetTemplateSummaryCommandOutput}
 * @see {@link GetTemplateSummaryCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSummaryCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class GetTemplateSummaryCommand extends $Command
  .classBuilder<
    GetTemplateSummaryCommandInput,
    GetTemplateSummaryCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "GetTemplateSummary", {})
  .n("CloudFormationClient", "GetTemplateSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetTemplateSummaryCommand)
  .de(de_GetTemplateSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateSummaryInput;
      output: GetTemplateSummaryOutput;
    };
    sdk: {
      input: GetTemplateSummaryCommandInput;
      output: GetTemplateSummaryCommandOutput;
    };
  };
}
