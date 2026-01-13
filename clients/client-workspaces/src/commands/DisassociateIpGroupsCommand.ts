// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateIpGroupsRequest, DisassociateIpGroupsResult } from "../models/models_0";
import { DisassociateIpGroups$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateIpGroupsCommand}.
 */
export interface DisassociateIpGroupsCommandInput extends DisassociateIpGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpGroupsCommand}.
 */
export interface DisassociateIpGroupsCommandOutput extends DisassociateIpGroupsResult, __MetadataBearer {}

/**
 * <p>Disassociates the specified IP access control group from the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DisassociateIpGroupsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   GroupIds: [ // IpGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateIpGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateIpGroupsCommandInput - {@link DisassociateIpGroupsCommandInput}
 * @returns {@link DisassociateIpGroupsCommandOutput}
 * @see {@link DisassociateIpGroupsCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpGroupsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DisassociateIpGroupsCommand extends $Command
  .classBuilder<
    DisassociateIpGroupsCommandInput,
    DisassociateIpGroupsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DisassociateIpGroups", {})
  .n("WorkSpacesClient", "DisassociateIpGroupsCommand")
  .sc(DisassociateIpGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIpGroupsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateIpGroupsCommandInput;
      output: DisassociateIpGroupsCommandOutput;
    };
  };
}
