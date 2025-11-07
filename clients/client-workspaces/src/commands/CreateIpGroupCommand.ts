// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpGroupRequest, CreateIpGroupResult } from "../models/models_0";
import { CreateIpGroup } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIpGroupCommand}.
 */
export interface CreateIpGroupCommandInput extends CreateIpGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpGroupCommand}.
 */
export interface CreateIpGroupCommandOutput extends CreateIpGroupResult, __MetadataBearer {}

/**
 * <p>Creates an IP access control group.</p>
 *          <p>An IP access control group provides you with the ability to control the IP addresses
 *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
 *          ranges, add rules to your IP access control group and then associate the group with your
 *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
 *          <p>There is a default IP access control group associated with your directory. If you don't
 *          associate an IP access control group with your directory, the default group is used. The
 *          default group includes a default rule that allows users to access their WorkSpaces from
 *          anywhere. You cannot modify the default IP access control group for your directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateIpGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   GroupDesc: "STRING_VALUE",
 *   UserRules: [ // IpRuleList
 *     { // IpRuleItem
 *       ipRule: "STRING_VALUE",
 *       ruleDesc: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateIpGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpGroupResult
 * //   GroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateIpGroupCommandInput - {@link CreateIpGroupCommandInput}
 * @returns {@link CreateIpGroupCommandOutput}
 * @see {@link CreateIpGroupCommandInput} for command's `input` shape.
 * @see {@link CreateIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceCreationFailedException} (client fault)
 *  <p>The resource could not be created.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class CreateIpGroupCommand extends $Command
  .classBuilder<
    CreateIpGroupCommandInput,
    CreateIpGroupCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "CreateIpGroup", {})
  .n("WorkSpacesClient", "CreateIpGroupCommand")
  .sc(CreateIpGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpGroupRequest;
      output: CreateIpGroupResult;
    };
    sdk: {
      input: CreateIpGroupCommandInput;
      output: CreateIpGroupCommandOutput;
    };
  };
}
