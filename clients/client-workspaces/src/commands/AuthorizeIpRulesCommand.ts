// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeIpRulesRequest, AuthorizeIpRulesResult } from "../models/models_0";
import { de_AuthorizeIpRulesCommand, se_AuthorizeIpRulesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeIpRulesCommand}.
 */
export interface AuthorizeIpRulesCommandInput extends AuthorizeIpRulesRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeIpRulesCommand}.
 */
export interface AuthorizeIpRulesCommandOutput extends AuthorizeIpRulesResult, __MetadataBearer {}

/**
 * <p>Adds one or more rules to the specified IP access control group.</p>
 *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
 *          ranges specified in the rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AuthorizeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AuthorizeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // AuthorizeIpRulesRequest
 *   GroupId: "STRING_VALUE", // required
 *   UserRules: [ // IpRuleList // required
 *     { // IpRuleItem
 *       ipRule: "STRING_VALUE",
 *       ruleDesc: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AuthorizeIpRulesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AuthorizeIpRulesCommandInput - {@link AuthorizeIpRulesCommandInput}
 * @returns {@link AuthorizeIpRulesCommandOutput}
 * @see {@link AuthorizeIpRulesCommandInput} for command's `input` shape.
 * @see {@link AuthorizeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class AuthorizeIpRulesCommand extends $Command
  .classBuilder<
    AuthorizeIpRulesCommandInput,
    AuthorizeIpRulesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "AuthorizeIpRules", {})
  .n("WorkSpacesClient", "AuthorizeIpRulesCommand")
  .f(void 0, void 0)
  .ser(se_AuthorizeIpRulesCommand)
  .de(de_AuthorizeIpRulesCommand)
  .build() {}
