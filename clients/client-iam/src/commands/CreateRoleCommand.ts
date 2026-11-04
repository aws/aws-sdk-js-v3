// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRoleRequest, CreateRoleResponse } from "../models/models_0";
import { CreateRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRoleCommand}.
 */
export interface CreateRoleCommandInput extends CreateRoleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoleCommand}.
 */
export interface CreateRoleCommandOutput extends CreateRoleResponse, __MetadataBearer {}

/**
 * Creates a new role for your Amazon Web Services account.
 *
 * For more information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide*. For information about quotas for role names and the number of roles you can create, see [IAM and STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateRoleRequest
 *   Path: "STRING_VALUE",
 *   RoleName: "STRING_VALUE", // required
 *   AssumeRolePolicyDocument: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   MaxSessionDuration: Number("int"),
 *   PermissionsBoundary: "STRING_VALUE",
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoleResponse
 * //   Role: { // Role
 * //     Path: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE", // required
 * //     RoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     AssumeRolePolicyDocument: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MaxSessionDuration: Number("int"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RoleLastUsed: { // RoleLastUsed
 * //       LastUsedDate: new Date("TIMESTAMP"),
 * //       Region: "STRING_VALUE",
 * //     },
 * //     SourceRoleTemplate: { // SourceRoleTemplate
 * //       TemplateArn: "STRING_VALUE", // required
 * //       TemplateMinorVersion: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRoleCommandInput - {@link CreateRoleCommandInput}
 * @returns {@link CreateRoleCommandOutput}
 * @see {@link CreateRoleCommandInput} for command's `input` shape.
 * @see {@link CreateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To create an IAM role
 * ```javascript
 * // The following command creates a role named Test-Role and attaches a trust policy that you must convert from JSON to a string. Upon success, the response includes the same policy as a URL-encoded JSON string.
 * const input = {
 *   AssumeRolePolicyDocument: "<Stringified-JSON>",
 *   Path: "/",
 *   RoleName: "Test-Role"
 * };
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Role: {
 *     Arn: "arn:aws:iam::123456789012:role/Test-Role",
 *     AssumeRolePolicyDocument: "<URL-encoded-JSON>",
 *     CreateDate: "2013-06-07T20:43:32.821Z",
 *     Path: "/",
 *     RoleId: "AKIAIOSFODNN7EXAMPLE",
 *     RoleName: "Test-Role"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRoleCommand extends command<CreateRoleCommandInput, CreateRoleCommandOutput>(
  _ep0,
  _mw0,
  "CreateRole",
  CreateRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoleRequest;
      output: CreateRoleResponse;
    };
    sdk: {
      input: CreateRoleCommandInput;
      output: CreateRoleCommandOutput;
    };
  };
}
