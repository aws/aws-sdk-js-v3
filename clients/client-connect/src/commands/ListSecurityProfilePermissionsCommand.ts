// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityProfilePermissionsRequest, ListSecurityProfilePermissionsResponse } from "../models/models_2";
import { ListSecurityProfilePermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListSecurityProfilePermissionsCommandOutput
  extends ListSecurityProfilePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the permissions granted to a security profile.</p>
 *          <p>For information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>. For a mapping of the API name and user interface name of the security
 *    profile permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
 *     of security profile permissions</a>. </p>
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListSecurityProfilePermissionsCommand extends $Command
  .classBuilder<
    ListSecurityProfilePermissionsCommandInput,
    ListSecurityProfilePermissionsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListSecurityProfilePermissions", {})
  .n("ConnectClient", "ListSecurityProfilePermissionsCommand")
  .sc(ListSecurityProfilePermissions)
  .build() {
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
