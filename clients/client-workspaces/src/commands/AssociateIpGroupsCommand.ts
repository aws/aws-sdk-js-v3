// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIpGroupsRequest, AssociateIpGroupsResult } from "../models/models_0";
import { de_AssociateIpGroupsCommand, se_AssociateIpGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates the specified IP access control group with the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
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
export class AssociateIpGroupsCommand extends $Command
  .classBuilder<
    AssociateIpGroupsCommandInput,
    AssociateIpGroupsCommandOutput,
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
  .s("WorkspacesService", "AssociateIpGroups", {})
  .n("WorkSpacesClient", "AssociateIpGroupsCommand")
  .f(void 0, void 0)
  .ser(se_AssociateIpGroupsCommand)
  .de(de_AssociateIpGroupsCommand)
  .build() {}
