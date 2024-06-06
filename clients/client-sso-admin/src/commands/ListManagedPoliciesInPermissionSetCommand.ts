// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
} from "../models/models_0";
import {
  de_ListManagedPoliciesInPermissionSetCommand,
  se_ListManagedPoliciesInPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedPoliciesInPermissionSetCommand}.
 */
export interface ListManagedPoliciesInPermissionSetCommandInput extends ListManagedPoliciesInPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedPoliciesInPermissionSetCommand}.
 */
export interface ListManagedPoliciesInPermissionSetCommandOutput
  extends ListManagedPoliciesInPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Amazon Web Services managed policy that is attached to a specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListManagedPoliciesInPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedPoliciesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedPoliciesInPermissionSetResponse
 * //   AttachedManagedPolicies: [ // AttachedManagedPolicyList
 * //     { // AttachedManagedPolicy
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedPoliciesInPermissionSetCommandInput - {@link ListManagedPoliciesInPermissionSetCommandInput}
 * @returns {@link ListManagedPoliciesInPermissionSetCommandOutput}
 * @see {@link ListManagedPoliciesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListManagedPoliciesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 * @public
 */
export class ListManagedPoliciesInPermissionSetCommand extends $Command
  .classBuilder<
    ListManagedPoliciesInPermissionSetCommandInput,
    ListManagedPoliciesInPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListManagedPoliciesInPermissionSet", {})
  .n("SSOAdminClient", "ListManagedPoliciesInPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedPoliciesInPermissionSetCommand)
  .de(de_ListManagedPoliciesInPermissionSetCommand)
  .build() {}
