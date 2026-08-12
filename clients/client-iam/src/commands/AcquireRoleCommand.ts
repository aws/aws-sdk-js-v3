// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcquireRoleRequest, AcquireRoleResponse } from "../models/models_0";
import { AcquireRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcquireRoleCommand}.
 */
export interface AcquireRoleCommandInput extends AcquireRoleRequest {}
/**
 * @public
 *
 * The output of {@link AcquireRoleCommand}.
 */
export interface AcquireRoleCommandOutput extends AcquireRoleResponse, __MetadataBearer {}

/**
 * <p>Creates an IAM role from the specified role template. The new role takes its
 *             configuration—including its name, path, trust policy, inline and managed policies,
 *             permissions boundary, tags, and maximum session duration—from the role
 *             template version that you specify. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>If the template version defines parameters, use the <code>ReplacementValues</code>
 *             parameter to supply the values that the service substitutes into the role during
 *             creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AcquireRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AcquireRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AcquireRoleRequest
 *   TemplateArn: "STRING_VALUE", // required
 *   TemplateMinorVersion: Number("int"),
 *   ReplacementValues: { // mapStringReplacementValueEntry
 *     "<keys>": { // ReplacementValueEntry
 *       Values: [ // replacementValueListType // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new AcquireRoleCommand(input);
 * const response = await client.send(command);
 * // { // AcquireRoleResponse
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
 * @param AcquireRoleCommandInput - {@link AcquireRoleCommandInput}
 * @returns {@link AcquireRoleCommandOutput}
 * @see {@link AcquireRoleCommandInput} for command's `input` shape.
 * @see {@link AcquireRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 *
 * @throws {@link NameConflictException} (client fault)
 *  <p>The request was rejected because the resulting role name conflicts with an existing role
 *       in the account.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link RoleModifiedException} (client fault)
 *  <p>The request was rejected because someone modified the role template while the service was
 *       creating the role. Wait a few minutes and try the request again.</p>
 *
 * @throws {@link RoleTemplateDisabledException} (client fault)
 *  <p>The request was rejected because the specified role template is disabled. A disabled
 *       role template cannot be used to create new roles. Contact your administrator to enable the
 *       role template, or use a different role template.</p>
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
export class AcquireRoleCommand extends command<AcquireRoleCommandInput, AcquireRoleCommandOutput>(
  _ep0,
  _mw0,
  "AcquireRole",
  AcquireRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcquireRoleRequest;
      output: AcquireRoleResponse;
    };
    sdk: {
      input: AcquireRoleCommandInput;
      output: AcquireRoleCommandOutput;
    };
  };
}
