// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
} from "../models/models_0";
import {
  de_ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  se_ListCustomerManagedPolicyReferencesInPermissionSetCommand,
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
 * The input for {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}.
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandInput
  extends ListCustomerManagedPolicyReferencesInPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}.
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
  extends ListCustomerManagedPolicyReferencesInPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Lists all customer managed policies attached to a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListCustomerManagedPolicyReferencesInPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomerManagedPolicyReferencesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomerManagedPolicyReferencesInPermissionSetResponse
 * //   CustomerManagedPolicyReferences: [ // CustomerManagedPolicyReferenceList
 * //     { // CustomerManagedPolicyReference
 * //       Name: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomerManagedPolicyReferencesInPermissionSetCommandInput - {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandInput}
 * @returns {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput}
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListCustomerManagedPolicyReferencesInPermissionSetCommand extends $Command
  .classBuilder<
    ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListCustomerManagedPolicyReferencesInPermissionSet", {})
  .n("SSOAdminClient", "ListCustomerManagedPolicyReferencesInPermissionSetCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomerManagedPolicyReferencesInPermissionSetCommand)
  .de(de_ListCustomerManagedPolicyReferencesInPermissionSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomerManagedPolicyReferencesInPermissionSetRequest;
      output: ListCustomerManagedPolicyReferencesInPermissionSetResponse;
    };
    sdk: {
      input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput;
      output: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput;
    };
  };
}
