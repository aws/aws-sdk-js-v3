// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserHierarchyGroupRequest } from "../models/models_0";
import { de_DeleteUserHierarchyGroupCommand, se_DeleteUserHierarchyGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserHierarchyGroupCommand}.
 */
export interface DeleteUserHierarchyGroupCommandInput extends DeleteUserHierarchyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserHierarchyGroupCommand}.
 */
export interface DeleteUserHierarchyGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have
 *    any active child groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteUserHierarchyGroupRequest
 *   HierarchyGroupId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserHierarchyGroupCommandInput - {@link DeleteUserHierarchyGroupCommandInput}
 * @returns {@link DeleteUserHierarchyGroupCommandOutput}
 * @see {@link DeleteUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserHierarchyGroupCommandOutput} for command's `response` shape.
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
 *  <p>That resource is already in use. Please try another.</p>
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
 * @public
 */
export class DeleteUserHierarchyGroupCommand extends $Command
  .classBuilder<
    DeleteUserHierarchyGroupCommandInput,
    DeleteUserHierarchyGroupCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeleteUserHierarchyGroup", {})
  .n("ConnectClient", "DeleteUserHierarchyGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserHierarchyGroupCommand)
  .de(de_DeleteUserHierarchyGroupCommand)
  .build() {}
