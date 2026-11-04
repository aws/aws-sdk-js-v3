// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIpGroupRequest, CreateIpGroupResult } from "../models/models_0";
import { CreateIpGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an IP access control group.
 *
 * An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using AuthorizeIpRules.
 *
 * There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceCreationFailedException} (client fault)
 *
 * The resource could not be created.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class CreateIpGroupCommand extends command<CreateIpGroupCommandInput, CreateIpGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateIpGroup",
  CreateIpGroup$
) {
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
