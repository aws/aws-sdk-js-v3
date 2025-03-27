// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAccountAssignmentsForPrincipalRequest,
  ListAccountAssignmentsForPrincipalResponse,
} from "../models/models_0";
import {
  de_ListAccountAssignmentsForPrincipalCommand,
  se_ListAccountAssignmentsForPrincipalCommand,
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
 * The input for {@link ListAccountAssignmentsForPrincipalCommand}.
 */
export interface ListAccountAssignmentsForPrincipalCommandInput extends ListAccountAssignmentsForPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssignmentsForPrincipalCommand}.
 */
export interface ListAccountAssignmentsForPrincipalCommandOutput
  extends ListAccountAssignmentsForPrincipalResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of the IAM Identity Center associated Amazon Web Services accounts that the principal has access
 *             to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentsForPrincipalCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentsForPrincipalCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListAccountAssignmentsForPrincipalRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   Filter: { // ListAccountAssignmentsFilter
 *     AccountId: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccountAssignmentsForPrincipalCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssignmentsForPrincipalResponse
 * //   AccountAssignments: [ // AccountAssignmentListForPrincipal
 * //     { // AccountAssignmentForPrincipal
 * //       AccountId: "STRING_VALUE",
 * //       PermissionSetArn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       PrincipalType: "USER" || "GROUP",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssignmentsForPrincipalCommandInput - {@link ListAccountAssignmentsForPrincipalCommandInput}
 * @returns {@link ListAccountAssignmentsForPrincipalCommandOutput}
 * @see {@link ListAccountAssignmentsForPrincipalCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentsForPrincipalCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAccountAssignmentsForPrincipalCommand extends $Command
  .classBuilder<
    ListAccountAssignmentsForPrincipalCommandInput,
    ListAccountAssignmentsForPrincipalCommandOutput,
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
  .s("SWBExternalService", "ListAccountAssignmentsForPrincipal", {})
  .n("SSOAdminClient", "ListAccountAssignmentsForPrincipalCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountAssignmentsForPrincipalCommand)
  .de(de_ListAccountAssignmentsForPrincipalCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssignmentsForPrincipalRequest;
      output: ListAccountAssignmentsForPrincipalResponse;
    };
    sdk: {
      input: ListAccountAssignmentsForPrincipalCommandInput;
      output: ListAccountAssignmentsForPrincipalCommandOutput;
    };
  };
}
