// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationAssignmentsRequest, ListApplicationAssignmentsResponse } from "../models/models_0";
import { de_ListApplicationAssignmentsCommand, se_ListApplicationAssignmentsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAssignmentsCommand}.
 */
export interface ListApplicationAssignmentsCommandInput extends ListApplicationAssignmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAssignmentsCommand}.
 */
export interface ListApplicationAssignmentsCommandOutput extends ListApplicationAssignmentsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Web Services account users that are assigned to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAssignmentsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAssignmentsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAssignmentsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAssignmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAssignmentsResponse
 * //   ApplicationAssignments: [ // ApplicationAssignmentsList
 * //     { // ApplicationAssignment
 * //       ApplicationArn: "STRING_VALUE", // required
 * //       PrincipalId: "STRING_VALUE", // required
 * //       PrincipalType: "USER" || "GROUP", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAssignmentsCommandInput - {@link ListApplicationAssignmentsCommandInput}
 * @returns {@link ListApplicationAssignmentsCommandOutput}
 * @see {@link ListApplicationAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAssignmentsCommandOutput} for command's `response` shape.
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
export class ListApplicationAssignmentsCommand extends $Command
  .classBuilder<
    ListApplicationAssignmentsCommandInput,
    ListApplicationAssignmentsCommandOutput,
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
  .s("SWBExternalService", "ListApplicationAssignments", {})
  .n("SSOAdminClient", "ListApplicationAssignmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationAssignmentsCommand)
  .de(de_ListApplicationAssignmentsCommand)
  .build() {}
