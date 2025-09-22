// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { UpdatePermissionGroupRequest, UpdatePermissionGroupResponse } from "../models/models_0";
import { UpdatePermissionGroup } from "../schemas/schemas_8_Permission";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePermissionGroupCommand}.
 */
export interface UpdatePermissionGroupCommandInput extends UpdatePermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePermissionGroupCommand}.
 */
export interface UpdatePermissionGroupCommandOutput extends UpdatePermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdatePermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdatePermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // UpdatePermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   applicationPermissions: [ // ApplicationPermissionList
 *     "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePermissionGroupResponse
 * //   permissionGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePermissionGroupCommandInput - {@link UpdatePermissionGroupCommandInput}
 * @returns {@link UpdatePermissionGroupCommandOutput}
 * @see {@link UpdatePermissionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionGroupCommandOutput} for command's `response` shape.
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
export class UpdatePermissionGroupCommand extends $Command
  .classBuilder<
    UpdatePermissionGroupCommandInput,
    UpdatePermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "UpdatePermissionGroup", {})
  .n("FinspaceDataClient", "UpdatePermissionGroupCommand")
  .sc(UpdatePermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePermissionGroupRequest;
      output: UpdatePermissionGroupResponse;
    };
    sdk: {
      input: UpdatePermissionGroupCommandInput;
      output: UpdatePermissionGroupCommandOutput;
    };
  };
}
