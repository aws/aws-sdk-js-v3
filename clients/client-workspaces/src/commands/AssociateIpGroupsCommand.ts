// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateIpGroupsRequest, AssociateIpGroupsResult } from "../models/models_0";
import { AssociateIpGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateIpGroupsCommand}.
 */
export interface AssociateIpGroupsCommandInput extends AssociateIpGroupsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateIpGroupsCommand}.
 */
export interface AssociateIpGroupsCommandOutput extends AssociateIpGroupsResult, __MetadataBearer {}

/**
 * Associates the specified IP access control group with the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // AssociateIpGroupsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   GroupIds: [ // IpGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateIpGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateIpGroupsCommandInput - {@link AssociateIpGroupsCommandInput}
 * @returns {@link AssociateIpGroupsCommandOutput}
 * @see {@link AssociateIpGroupsCommandInput} for command's `input` shape.
 * @see {@link AssociateIpGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The state of the resource is not valid for this operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class AssociateIpGroupsCommand extends command<AssociateIpGroupsCommandInput, AssociateIpGroupsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateIpGroups",
  AssociateIpGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateIpGroupsRequest;
      output: {};
    };
    sdk: {
      input: AssociateIpGroupsCommandInput;
      output: AssociateIpGroupsCommandOutput;
    };
  };
}
