// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationAssignmentsRequest, ListApplicationAssignmentsResponse } from "../models/models_0";
import { ListApplicationAssignments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists Amazon Web Services account users that are assigned to an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAssignmentsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAssignmentsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class ListApplicationAssignmentsCommand extends command<ListApplicationAssignmentsCommandInput, ListApplicationAssignmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationAssignments",
  ListApplicationAssignments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAssignmentsRequest;
      output: ListApplicationAssignmentsResponse;
    };
    sdk: {
      input: ListApplicationAssignmentsCommandInput;
      output: ListApplicationAssignmentsCommandOutput;
    };
  };
}
