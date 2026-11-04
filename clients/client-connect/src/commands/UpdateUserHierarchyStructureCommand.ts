// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserHierarchyStructureRequest } from "../models/models_4";
import { UpdateUserHierarchyStructure$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserHierarchyStructureCommand}.
 */
export interface UpdateUserHierarchyStructureCommandInput extends UpdateUserHierarchyStructureRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserHierarchyStructureCommand}.
 */
export interface UpdateUserHierarchyStructureCommandOutput extends __MetadataBearer {}

/**
 * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserHierarchyStructureCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserHierarchyStructureCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserHierarchyStructureRequest
 *   HierarchyStructure: { // HierarchyStructureUpdate
 *     LevelOne: { // HierarchyLevelUpdate
 *       Name: "STRING_VALUE", // required
 *     },
 *     LevelTwo: {
 *       Name: "STRING_VALUE", // required
 *     },
 *     LevelThree: {
 *       Name: "STRING_VALUE", // required
 *     },
 *     LevelFour: {
 *       Name: "STRING_VALUE", // required
 *     },
 *     LevelFive: {
 *       Name: "STRING_VALUE", // required
 *     },
 *   },
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserHierarchyStructureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserHierarchyStructureCommandInput - {@link UpdateUserHierarchyStructureCommandInput}
 * @returns {@link UpdateUserHierarchyStructureCommandOutput}
 * @see {@link UpdateUserHierarchyStructureCommandInput} for command's `input` shape.
 * @see {@link UpdateUserHierarchyStructureCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * That resource is already in use (for example, you're trying to add a record with the same name as an existing record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources and then try again.
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
export class UpdateUserHierarchyStructureCommand extends command<UpdateUserHierarchyStructureCommandInput, UpdateUserHierarchyStructureCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserHierarchyStructure",
  UpdateUserHierarchyStructure$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserHierarchyStructureRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserHierarchyStructureCommandInput;
      output: UpdateUserHierarchyStructureCommandOutput;
    };
  };
}
