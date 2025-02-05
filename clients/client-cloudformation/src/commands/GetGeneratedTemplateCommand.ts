// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGeneratedTemplateInput, GetGeneratedTemplateOutput } from "../models/models_0";
import { de_GetGeneratedTemplateCommand, se_GetGeneratedTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGeneratedTemplateCommand}.
 */
export interface GetGeneratedTemplateCommandInput extends GetGeneratedTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetGeneratedTemplateCommand}.
 */
export interface GetGeneratedTemplateCommandOutput extends GetGeneratedTemplateOutput, __MetadataBearer {}

/**
 * <p>Retrieves a generated template. If the template is in an <code>InProgress</code> or
 *         <code>Pending</code> status then the template returned will be the template when the
 *       template was last in a <code>Complete</code> status. If the template has not yet been in a
 *         <code>Complete</code> status then an empty template will be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetGeneratedTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetGeneratedTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFormationClient(config);
 * const input = { // GetGeneratedTemplateInput
 *   Format: "JSON" || "YAML",
 *   GeneratedTemplateName: "STRING_VALUE", // required
 * };
 * const command = new GetGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetGeneratedTemplateOutput
 * //   Status: "CREATE_PENDING" || "UPDATE_PENDING" || "DELETE_PENDING" || "CREATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "FAILED" || "COMPLETE",
 * //   TemplateBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGeneratedTemplateCommandInput - {@link GetGeneratedTemplateCommandInput}
 * @returns {@link GetGeneratedTemplateCommandOutput}
 * @see {@link GetGeneratedTemplateCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link GeneratedTemplateNotFoundException} (client fault)
 *  <p>The generated template was not found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 * @example To get a generated template in JSON format
 * ```javascript
 * // This example gets a generated template ins JSON format.
 * const input = {
 *   "GeneratedTemplateName": "JazzyTemplate"
 * };
 * const command = new GetGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Status": "COMPLETE",
 *   "TemplateBody": "{\"Metadata\":{\"TemplateId\":\"arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/*\"},\"Parameters\":{\"Stage\":{\"Default\":\"beta\",\"Type\":\"String\"}},\"Resources\":{\"TestRole\":{\"Properties\":{\"AssumeRolePolicyDocument\":{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":{\"Fn::Sub\":[\"arn:${AWS::Partition}:iam::${AccountId}:root\",{\"AccountId\":{\"Fn::AccountIdFromAlias\":\"test-account-alias\"}}]}},\"Action\":\"sts:AssumeRole\"}]}},\"Type\":\"AWS::IAM::Role\",\"DeletionPolicy\":\"Delete\"},\"DocumentationPartl7ob4vsd76vs\":{\"UpdateReplacePolicy\":\"Retain\",\"Type\":\"AWS::ApiGateway::DocumentationPart\",\"DeletionPolicy\":\"Retain\",\"Properties\":{\"RestApiId\":\"l7ob4vsd76\",\"Properties\":\"{\\n  \\\"description\\\" : \\\"ListGeneratedTemplates 200 response\\\"\\n}\",\"Location\":{\"Path\":\"/ListGeneratedTemplates\",\"Type\":\"RESPONSE\",\"Method\":\"POST\",\"StatusCode\":\"200\"}}}}}"
 * }
 * *\/
 * // example id: to-get-a-generated-template-json
 * ```
 *
 * @example To get a generated template in YAML format
 * ```javascript
 * // This example gets a generated template in YAML format.
 * const input = {
 *   "Format": "YAML",
 *   "GeneratedTemplateName": "JazzyTemplate"
 * };
 * const command = new GetGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Status": "COMPLETE",
 *   "TemplateBody": "---\nMetadata:\n  TemplateId: \"arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/*\"\nParameters:\n  Stage:\n    Default: \"beta\"\n    Type: \"String\"\nResources:\n  TestRole:\n    Properties:\n      AssumeRolePolicyDocument:\n        Version: \"2012-10-17\"\n        Statement:\n        - Effect: \"Allow\"\n          Principal:\n            AWS:\n              Fn::Sub:\n              - \"arn:${AWS::Partition}:iam::${AccountId}:root\"\n              - AccountId:\n                  Fn::AccountIdFromAlias: \"test-account-alias\"\n          Action: \"sts:AssumeRole\"\n    Type: \"AWS::IAM::Role\"\n    DeletionPolicy: \"Delete\"\n  DocumentationPartl7ob4vsd76vsnAlFMLXKVm:\n    UpdateReplacePolicy: \"Retain\"\n    Type: \"AWS::ApiGateway::DocumentationPart\"\n    DeletionPolicy: \"Retain\"\n    Properties:\n      RestApiId: \"l7ob4vsd76\"\n      Properties: \"{\\n  \\\"description\\\" : \\\"ListGeneratedTemplates 200 response\\\"\\n\\\n        }\"\n      Location:\n        Path: \"/ListGeneratedTemplates\"\n        Type: \"RESPONSE\"\n        Method: \"POST\"\n        StatusCode: \"200\"\n"
 * }
 * *\/
 * // example id: to-get-a-generated-template-yaml
 * ```
 *
 */
export class GetGeneratedTemplateCommand extends $Command
  .classBuilder<
    GetGeneratedTemplateCommandInput,
    GetGeneratedTemplateCommandOutput,
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
  .s("CloudFormation", "GetGeneratedTemplate", {})
  .n("CloudFormationClient", "GetGeneratedTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetGeneratedTemplateCommand)
  .de(de_GetGeneratedTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGeneratedTemplateInput;
      output: GetGeneratedTemplateOutput;
    };
    sdk: {
      input: GetGeneratedTemplateCommandInput;
      output: GetGeneratedTemplateCommandOutput;
    };
  };
}
