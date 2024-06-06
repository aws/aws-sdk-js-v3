// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAccountRolesRequest,
  ListAccountRolesRequestFilterSensitiveLog,
  ListAccountRolesResponse,
} from "../models/models_0";
import { de_ListAccountRolesCommand, se_ListAccountRolesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandInput extends ListAccountRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandOutput extends ListAccountRolesResponse, __MetadataBearer {}

/**
 * <p>Lists all roles that are assigned to the user for a given AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, ListAccountRolesCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, ListAccountRolesCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // ListAccountRolesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accessToken: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new ListAccountRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountRolesResponse
 * //   nextToken: "STRING_VALUE",
 * //   roleList: [ // RoleListType
 * //     { // RoleInfo
 * //       roleName: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccountRolesCommandInput - {@link ListAccountRolesCommandInput}
 * @returns {@link ListAccountRolesCommandOutput}
 * @see {@link ListAccountRolesCommandInput} for command's `input` shape.
 * @see {@link ListAccountRolesCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 * @public
 */
export class ListAccountRolesCommand extends $Command
  .classBuilder<
    ListAccountRolesCommandInput,
    ListAccountRolesCommandOutput,
    SSOClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBPortalService", "ListAccountRoles", {})
  .n("SSOClient", "ListAccountRolesCommand")
  .f(ListAccountRolesRequestFilterSensitiveLog, void 0)
  .ser(se_ListAccountRolesCommand)
  .de(de_ListAccountRolesCommand)
  .build() {}
