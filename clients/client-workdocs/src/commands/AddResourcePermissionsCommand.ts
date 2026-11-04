// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddResourcePermissionsRequest, AddResourcePermissionsResponse } from "../models/models_0";
import { AddResourcePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandInput extends AddResourcePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link AddResourcePermissionsCommand}.
 */
export interface AddResourcePermissionsCommandOutput extends AddResourcePermissionsResponse, __MetadataBearer {}

/**
 * Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AddResourcePermissionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AddResourcePermissionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // AddResourcePermissionsRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   Principals: [ // SharePrincipalList // required
 *     { // SharePrincipal
 *       Id: "STRING_VALUE", // required
 *       Type: "USER" || "GROUP" || "INVITE" || "ANONYMOUS" || "ORGANIZATION", // required
 *       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER", // required
 *     },
 *   ],
 *   NotificationOptions: { // NotificationOptions
 *     SendEmail: true || false,
 *     EmailMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new AddResourcePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // AddResourcePermissionsResponse
 * //   ShareResults: [ // ShareResultsList
 * //     { // ShareResult
 * //       PrincipalId: "STRING_VALUE",
 * //       InviteePrincipalId: "STRING_VALUE",
 * //       Role: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER",
 * //       Status: "SUCCESS" || "FAILURE",
 * //       ShareId: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddResourcePermissionsCommandInput - {@link AddResourcePermissionsCommandInput}
 * @returns {@link AddResourcePermissionsCommandOutput}
 * @see {@link AddResourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link AddResourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class AddResourcePermissionsCommand extends command<AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "AddResourcePermissions",
  AddResourcePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddResourcePermissionsRequest;
      output: AddResourcePermissionsResponse;
    };
    sdk: {
      input: AddResourcePermissionsCommandInput;
      output: AddResourcePermissionsCommandOutput;
    };
  };
}
