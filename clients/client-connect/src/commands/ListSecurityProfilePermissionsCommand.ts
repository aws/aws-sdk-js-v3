// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSecurityProfilePermissionsRequest, ListSecurityProfilePermissionsResponse } from "../models/models_2";
import { ListSecurityProfilePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSecurityProfilePermissionsCommand}.
 */
export interface ListSecurityProfilePermissionsCommandInput extends ListSecurityProfilePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfilePermissionsCommand}.
 */
export interface ListSecurityProfilePermissionsCommandOutput extends ListSecurityProfilePermissionsResponse, __MetadataBearer {}

/**
 * Lists the permissions granted to a security profile.
 *
 * For information about security profiles, see [Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html) in the *Connect Customer Administrator Guide*. For a mapping of the API name and user interface name of the security profile permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityProfilePermissionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityProfilePermissionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListSecurityProfilePermissionsRequest
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityProfilePermissionsResponse
 * //   Permissions: [ // PermissionsList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityProfilePermissionsCommandInput - {@link ListSecurityProfilePermissionsCommandInput}
 * @returns {@link ListSecurityProfilePermissionsCommandOutput}
 * @see {@link ListSecurityProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListSecurityProfilePermissionsCommand extends command<ListSecurityProfilePermissionsCommandInput, ListSecurityProfilePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSecurityProfilePermissions",
  ListSecurityProfilePermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityProfilePermissionsRequest;
      output: ListSecurityProfilePermissionsResponse;
    };
    sdk: {
      input: ListSecurityProfilePermissionsCommandInput;
      output: ListSecurityProfilePermissionsCommandOutput;
    };
  };
}
