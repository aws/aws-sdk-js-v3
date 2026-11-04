// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRolesRequest, ListRolesResponse } from "../models/models_0";
import { ListRoles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRolesCommand}.
 */
export interface ListRolesCommandInput extends ListRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListRolesCommand}.
 */
export interface ListRolesCommandOutput extends ListRolesResponse, __MetadataBearer {}

/**
 * Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide*.
 *
 * > **Note:**
 * >
 * > IAM resource-listing operations return a subset of the available attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object:
 * >
 * > - PermissionsBoundary
 * > - RoleLastUsed
 * > - Tags
 * >
 * > To view all of the information for a role, see [GetRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html).
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListRolesRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListRolesResponse
 * //   Roles: [ // roleListType // required
 * //     { // Role
 * //       Path: "STRING_VALUE", // required
 * //       RoleName: "STRING_VALUE", // required
 * //       RoleId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       AssumeRolePolicyDocument: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MaxSessionDuration: Number("int"),
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       RoleLastUsed: { // RoleLastUsed
 * //         LastUsedDate: new Date("TIMESTAMP"),
 * //         Region: "STRING_VALUE",
 * //       },
 * //       SourceRoleTemplate: { // SourceRoleTemplate
 * //         TemplateArn: "STRING_VALUE", // required
 * //         TemplateMinorVersion: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRolesCommandInput - {@link ListRolesCommandInput}
 * @returns {@link ListRolesCommandOutput}
 * @see {@link ListRolesCommandInput} for command's `input` shape.
 * @see {@link ListRolesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class ListRolesCommand extends command<ListRolesCommandInput, ListRolesCommandOutput>(
  _ep0,
  _mw0,
  "ListRoles",
  ListRoles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRolesRequest;
      output: ListRolesResponse;
    };
    sdk: {
      input: ListRolesCommandInput;
      output: ListRolesCommandOutput;
    };
  };
}
