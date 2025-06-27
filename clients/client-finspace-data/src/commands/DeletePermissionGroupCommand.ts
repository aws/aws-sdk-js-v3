// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { DeletePermissionGroupRequest, DeletePermissionGroupResponse } from "../models/models_0";
import { de_DeletePermissionGroupCommand, se_DeletePermissionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePermissionGroupCommand}.
 */
export interface DeletePermissionGroupCommandInput extends DeletePermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeletePermissionGroupCommand}.
 */
export interface DeletePermissionGroupCommandOutput extends DeletePermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes a permission group. This action is irreversible.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, DeletePermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, DeletePermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // DeletePermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeletePermissionGroupResponse
 * //   permissionGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePermissionGroupCommandInput - {@link DeletePermissionGroupCommandInput}
 * @returns {@link DeletePermissionGroupCommandOutput}
 * @see {@link DeletePermissionGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 *
 * @public
 */
export class DeletePermissionGroupCommand extends $Command
  .classBuilder<
    DeletePermissionGroupCommandInput,
    DeletePermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroPublicAPI", "DeletePermissionGroup", {})
  .n("FinspaceDataClient", "DeletePermissionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeletePermissionGroupCommand)
  .de(de_DeletePermissionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePermissionGroupRequest;
      output: DeletePermissionGroupResponse;
    };
    sdk: {
      input: DeletePermissionGroupCommandInput;
      output: DeletePermissionGroupCommandOutput;
    };
  };
}
