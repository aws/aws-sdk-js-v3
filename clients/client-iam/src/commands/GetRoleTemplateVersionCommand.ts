// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRoleTemplateVersionRequest, GetRoleTemplateVersionResponse } from "../models/models_0";
import { GetRoleTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRoleTemplateVersionCommand}.
 */
export interface GetRoleTemplateVersionCommandInput extends GetRoleTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetRoleTemplateVersionCommand}.
 */
export interface GetRoleTemplateVersionCommandOutput extends GetRoleTemplateVersionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a version of the specified role template. Role templates
 *             define a reusable configuration—including role name and path patterns, trust
 *             policy, inline and managed policies, permissions boundary, tags, and maximum session
 *             duration—that you use to create IAM roles with <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AcquireRole.html">AcquireRole</a>.</p>
 *          <p>If you do not specify a minor version, the service returns the template's default
 *             minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRoleTemplateVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRoleTemplateVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetRoleTemplateVersionRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   MinorVersion: Number("int"),
 * };
 * const command = new GetRoleTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleTemplateVersionResponse
 * //   RoleTemplateVersion: { // RoleTemplateVersion
 * //     TemplateArn: "STRING_VALUE",
 * //     TemplateName: "STRING_VALUE",
 * //     TemplateVersionId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MajorVersion: Number("int"),
 * //     DefaultMinorVersion: Number("int"),
 * //     ManagedByType: "Service",
 * //     ManagedByValue: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     MinorVersion: Number("int"),
 * //     RoleNamePattern: "STRING_VALUE",
 * //     RolePathPattern: "STRING_VALUE",
 * //     RoleDescriptionPattern: "STRING_VALUE",
 * //     AssumeRolePolicyDocumentTemplate: "STRING_VALUE",
 * //     InlinePolicyTemplates: [ // inlinePolicyTemplateListType
 * //       { // InlinePolicy
 * //         PolicyName: "STRING_VALUE", // required
 * //         PolicyDocument: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ManagedPolicyArns: [ // managedPolicyArnListType
 * //       "STRING_VALUE",
 * //     ],
 * //     PermissionBoundaryArn: "STRING_VALUE",
 * //     ParametersDefinition: [ // parametersDefinitionListType
 * //       { // ParameterDefinition
 * //         Name: "STRING_VALUE", // required
 * //         Type: "String" || "StringList" || "Number" || "NumberList" || "Arn" || "ArnList", // required
 * //         SubType: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         IsRequired: true || false,
 * //         DefaultValue: "STRING_VALUE",
 * //         Immutable: true || false,
 * //       },
 * //     ],
 * //     RoleTagsTemplate: [ // tagTemplateListType
 * //       { // TagTemplate
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     MaxSessionDuration: Number("int"),
 * //     VersionEnabled: true || false,
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     UpdateTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleTemplateVersionCommandInput - {@link GetRoleTemplateVersionCommandInput}
 * @returns {@link GetRoleTemplateVersionCommandOutput}
 * @see {@link GetRoleTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link GetRoleTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GetRoleTemplateVersionCommand extends command<GetRoleTemplateVersionCommandInput, GetRoleTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetRoleTemplateVersion",
  GetRoleTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoleTemplateVersionRequest;
      output: GetRoleTemplateVersionResponse;
    };
    sdk: {
      input: GetRoleTemplateVersionCommandInput;
      output: GetRoleTemplateVersionCommandOutput;
    };
  };
}
