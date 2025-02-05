// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGeneratedTemplateInput, DescribeGeneratedTemplateOutput } from "../models/models_0";
import { de_DescribeGeneratedTemplateCommand, se_DescribeGeneratedTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGeneratedTemplateCommand}.
 */
export interface DescribeGeneratedTemplateCommandInput extends DescribeGeneratedTemplateInput {}
/**
 * @public
 *
 * The output of {@link DescribeGeneratedTemplateCommand}.
 */
export interface DescribeGeneratedTemplateCommandOutput extends DescribeGeneratedTemplateOutput, __MetadataBearer {}

/**
 * <p>Describes a generated template. The output includes details about the progress of the
 *       creation of a generated template started by a <code>CreateGeneratedTemplate</code> API action
 *       or the update of a generated template started with an <code>UpdateGeneratedTemplate</code> API
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeGeneratedTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeGeneratedTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeGeneratedTemplateInput
 *   GeneratedTemplateName: "STRING_VALUE", // required
 * };
 * const command = new DescribeGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGeneratedTemplateOutput
 * //   GeneratedTemplateId: "STRING_VALUE",
 * //   GeneratedTemplateName: "STRING_VALUE",
 * //   Resources: [ // ResourceDetails
 * //     { // ResourceDetail
 * //       ResourceType: "STRING_VALUE",
 * //       LogicalResourceId: "STRING_VALUE",
 * //       ResourceIdentifier: { // ResourceIdentifierProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResourceStatus: "PENDING" || "IN_PROGRESS" || "FAILED" || "COMPLETE",
 * //       ResourceStatusReason: "STRING_VALUE",
 * //       Warnings: [ // WarningDetails
 * //         { // WarningDetail
 * //           Type: "MUTUALLY_EXCLUSIVE_PROPERTIES" || "UNSUPPORTED_PROPERTIES" || "MUTUALLY_EXCLUSIVE_TYPES",
 * //           Properties: [ // WarningProperties
 * //             { // WarningProperty
 * //               PropertyPath: "STRING_VALUE",
 * //               Required: true || false,
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Status: "CREATE_PENDING" || "UPDATE_PENDING" || "DELETE_PENDING" || "CREATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "FAILED" || "COMPLETE",
 * //   StatusReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   Progress: { // TemplateProgress
 * //     ResourcesSucceeded: Number("int"),
 * //     ResourcesFailed: Number("int"),
 * //     ResourcesProcessing: Number("int"),
 * //     ResourcesPending: Number("int"),
 * //   },
 * //   StackId: "STRING_VALUE",
 * //   TemplateConfiguration: { // TemplateConfiguration
 * //     DeletionPolicy: "DELETE" || "RETAIN",
 * //     UpdateReplacePolicy: "DELETE" || "RETAIN",
 * //   },
 * //   TotalWarnings: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeGeneratedTemplateCommandInput - {@link DescribeGeneratedTemplateCommandInput}
 * @returns {@link DescribeGeneratedTemplateCommandOutput}
 * @see {@link DescribeGeneratedTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeGeneratedTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link GeneratedTemplateNotFoundException} (client fault)
 *  <p>The generated template was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 * @example To describe a generated template
 * ```javascript
 * // This example describes a generated template
 * const input = {
 *   "GeneratedTemplateName": "JazzyTemplate"
 * };
 * const command = new DescribeGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreationTime": "2023-12-28T17:55:20.086000+00:00",
 *   "GeneratedTemplateId": "arn:aws:cloudformation:us-east-1:*:generatedtemplate/*",
 *   "GeneratedTemplateName": "DeletedResourceTest",
 *   "LastUpdatedTime": "2023-12-28T17:57:16.610000+00:00",
 *   "Progress": {
 *     "ResourcesFailed": 0,
 *     "ResourcesPending": 0,
 *     "ResourcesProcessing": 0,
 *     "ResourcesSucceeded": 0
 *   },
 *   "Status": "COMPLETE",
 *   "StatusReason": "All resources complete",
 *   "TemplateConfiguration": {
 *     "DeletionPolicy": "RETAIN",
 *     "UpdateReplacePolicy": "RETAIN"
 *   },
 *   "TotalWarnings": 0
 * }
 * *\/
 * // example id: to-describe-a-generated-template
 * ```
 *
 */
export class DescribeGeneratedTemplateCommand extends $Command
  .classBuilder<
    DescribeGeneratedTemplateCommandInput,
    DescribeGeneratedTemplateCommandOutput,
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
  .s("CloudFormation", "DescribeGeneratedTemplate", {})
  .n("CloudFormationClient", "DescribeGeneratedTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGeneratedTemplateCommand)
  .de(de_DescribeGeneratedTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGeneratedTemplateInput;
      output: DescribeGeneratedTemplateOutput;
    };
    sdk: {
      input: DescribeGeneratedTemplateCommandInput;
      output: DescribeGeneratedTemplateCommandOutput;
    };
  };
}
