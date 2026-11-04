// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGeneratedTemplateInput, CreateGeneratedTemplateOutput } from "../models/models_0";
import { CreateGeneratedTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGeneratedTemplateCommand}.
 */
export interface CreateGeneratedTemplateCommandInput extends CreateGeneratedTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateGeneratedTemplateCommand}.
 */
export interface CreateGeneratedTemplateCommandOutput extends CreateGeneratedTemplateOutput, __MetadataBearer {}

/**
 * Creates a template from existing resources that are not already managed with CloudFormation. You can check the status of the template generation using the `DescribeGeneratedTemplate` API action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateGeneratedTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateGeneratedTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // CreateGeneratedTemplateInput
 *   Resources: [ // ResourceDefinitions
 *     { // ResourceDefinition
 *       ResourceType: "STRING_VALUE", // required
 *       LogicalResourceId: "STRING_VALUE",
 *       ResourceIdentifier: { // ResourceIdentifierProperties // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   GeneratedTemplateName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   TemplateConfiguration: { // TemplateConfiguration
 *     DeletionPolicy: "DELETE" || "RETAIN",
 *     UpdateReplacePolicy: "DELETE" || "RETAIN",
 *   },
 * };
 * const command = new CreateGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateGeneratedTemplateOutput
 * //   GeneratedTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGeneratedTemplateCommandInput - {@link CreateGeneratedTemplateCommandInput}
 * @returns {@link CreateGeneratedTemplateCommandOutput}
 * @see {@link CreateGeneratedTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateGeneratedTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource with the name requested already exists.
 *
 * @throws {@link ConcurrentResourcesLimitExceededException} (client fault)
 *
 * No more than 5 generated templates can be in an `InProgress` or `Pending` status at one time. This error is also returned if a generated template that is in an `InProgress` or `Pending` status is attempted to be updated or deleted.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @example To create a generated template
 * ```javascript
 * // This example creates a generated template with a resources file.
 * const input = {
 *   GeneratedTemplateName: "JazzyTemplate",
 *   Resources: [
 *     {
 *       ResourceIdentifier: {
 *         BucketName: "jazz-bucket"
 *       },
 *       ResourceType: "AWS::S3::Bucket"
 *     },
 *     {
 *       ResourceIdentifier: {
 *         DhcpOptionsId: "random-id123"
 *       },
 *       ResourceType: "AWS::EC2::DHCPOptions"
 *     }
 *   ]
 * };
 * const command = new CreateGeneratedTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GeneratedTemplateId: "arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/88f09db1-d211-4cb7-964b-434e2b8469ca"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateGeneratedTemplateCommand extends command<CreateGeneratedTemplateCommandInput, CreateGeneratedTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateGeneratedTemplate",
  CreateGeneratedTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGeneratedTemplateInput;
      output: CreateGeneratedTemplateOutput;
    };
    sdk: {
      input: CreateGeneratedTemplateCommandInput;
      output: CreateGeneratedTemplateCommandOutput;
    };
  };
}
