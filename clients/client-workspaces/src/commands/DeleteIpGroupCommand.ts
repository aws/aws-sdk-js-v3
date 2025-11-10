// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpGroupRequest, DeleteIpGroupResult } from "../models/models_0";
import { DeleteIpGroup } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpGroupCommand}.
 */
export interface DeleteIpGroupCommandInput extends DeleteIpGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpGroupCommand}.
 */
export interface DeleteIpGroupCommandOutput extends DeleteIpGroupResult, __MetadataBearer {}

/**
 * <p>Deletes the specified IP access control group.</p>
 *          <p>You cannot delete an IP access control group that is associated with a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteIpGroupCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteIpGroupCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DeleteIpGroupRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIpGroupCommandInput - {@link DeleteIpGroupCommandInput}
 * @returns {@link DeleteIpGroupCommandOutput}
 * @see {@link DeleteIpGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteIpGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *  <p>The resource is associated with a directory.</p>
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
export class DeleteIpGroupCommand extends $Command
  .classBuilder<
    DeleteIpGroupCommandInput,
    DeleteIpGroupCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DeleteIpGroup", {})
  .n("WorkSpacesClient", "DeleteIpGroupCommand")
  .sc(DeleteIpGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteIpGroupCommandInput;
      output: DeleteIpGroupCommandOutput;
    };
  };
}
