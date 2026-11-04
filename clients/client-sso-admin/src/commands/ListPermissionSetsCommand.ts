// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPermissionSetsRequest, ListPermissionSetsResponse } from "../models/models_0";
import { ListPermissionSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPermissionSetsCommand}.
 */
export interface ListPermissionSetsCommandInput extends ListPermissionSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetsCommand}.
 */
export interface ListPermissionSetsCommandOutput extends ListPermissionSetsResponse, __MetadataBearer {}

/**
 * Lists the PermissionSets in an IAM Identity Center instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetsRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPermissionSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetsResponse
 * //   PermissionSets: [ // PermissionSetList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionSetsCommandInput - {@link ListPermissionSetsCommandInput}
 * @returns {@link ListPermissionSetsCommandOutput}
 * @see {@link ListPermissionSetsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsCommandOutput} for command's `response` shape.
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
export class ListPermissionSetsCommand extends command<ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListPermissionSets",
  ListPermissionSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionSetsRequest;
      output: ListPermissionSetsResponse;
    };
    sdk: {
      input: ListPermissionSetsCommandInput;
      output: ListPermissionSetsCommandOutput;
    };
  };
}
