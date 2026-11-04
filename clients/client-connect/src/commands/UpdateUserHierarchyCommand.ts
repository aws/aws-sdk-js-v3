// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserHierarchyRequest } from "../models/models_4";
import { UpdateUserHierarchy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserHierarchyCommand}.
 */
export interface UpdateUserHierarchyCommandInput extends UpdateUserHierarchyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserHierarchyCommand}.
 */
export interface UpdateUserHierarchyCommandOutput extends __MetadataBearer {}

/**
 * Assigns the specified hierarchy group to the specified user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserHierarchyRequest
 *   HierarchyGroupId: "STRING_VALUE",
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserHierarchyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserHierarchyCommandInput - {@link UpdateUserHierarchyCommandInput}
 * @returns {@link UpdateUserHierarchyCommandOutput}
 * @see {@link UpdateUserHierarchyCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateUserHierarchyCommand extends command<UpdateUserHierarchyCommandInput, UpdateUserHierarchyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserHierarchy",
  UpdateUserHierarchy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserHierarchyRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserHierarchyCommandInput;
      output: UpdateUserHierarchyCommandOutput;
    };
  };
}
