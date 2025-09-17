// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserHierarchyStructureRequest } from "../models/models_3";
import {
  de_UpdateUserHierarchyStructureCommand,
  se_UpdateUserHierarchyStructureCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.</p>
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same
 *    name as an existing record). If you are trying to delete a resource (for example,
 *    DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources
 *    and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateUserHierarchyStructureCommand extends $Command
  .classBuilder<
    UpdateUserHierarchyStructureCommandInput,
    UpdateUserHierarchyStructureCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateUserHierarchyStructure", {})
  .n("ConnectClient", "UpdateUserHierarchyStructureCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserHierarchyStructureCommand)
  .de(de_UpdateUserHierarchyStructureCommand)
  .build() {
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
