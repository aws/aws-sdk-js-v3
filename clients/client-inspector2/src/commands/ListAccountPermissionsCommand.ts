// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountPermissionsRequest, ListAccountPermissionsResponse } from "../models/models_0";
import { ListAccountPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountPermissionsCommand}.
 */
export interface ListAccountPermissionsCommandInput extends ListAccountPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountPermissionsCommand}.
 */
export interface ListAccountPermissionsCommandOutput extends ListAccountPermissionsResponse, __MetadataBearer {}

/**
 * Lists the permissions an account has to configure Amazon Inspector. If the account is a member account or standalone account with resources managed by an Organizations policy, the operation returns fewer permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListAccountPermissionsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListAccountPermissionsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListAccountPermissionsRequest
 *   service: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountPermissionsResponse
 * //   permissions: [ // Permissions // required
 * //     { // Permission
 * //       service: "STRING_VALUE", // required
 * //       operation: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountPermissionsCommandInput - {@link ListAccountPermissionsCommandInput}
 * @returns {@link ListAccountPermissionsCommandOutput}
 * @see {@link ListAccountPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListAccountPermissionsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class ListAccountPermissionsCommand extends command<ListAccountPermissionsCommandInput, ListAccountPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountPermissions",
  ListAccountPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountPermissionsRequest;
      output: ListAccountPermissionsResponse;
    };
    sdk: {
      input: ListAccountPermissionsCommandInput;
      output: ListAccountPermissionsCommandOutput;
    };
  };
}
