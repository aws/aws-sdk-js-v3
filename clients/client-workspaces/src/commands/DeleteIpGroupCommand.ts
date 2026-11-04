// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIpGroupRequest, DeleteIpGroupResult } from "../models/models_0";
import { DeleteIpGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified IP access control group.
 *
 * You cannot delete an IP access control group that is associated with a directory.
 *
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
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link ResourceAssociatedException} (client fault)
 *
 * The resource is associated with a directory.
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
export class DeleteIpGroupCommand extends command<DeleteIpGroupCommandInput, DeleteIpGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIpGroup",
  DeleteIpGroup$
) {
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
