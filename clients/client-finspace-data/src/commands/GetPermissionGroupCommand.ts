// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { GetPermissionGroupRequest, GetPermissionGroupResponse } from "../models/models_0";
import { GetPermissionGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPermissionGroupCommand}.
 */
export interface GetPermissionGroupCommandInput extends GetPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionGroupCommand}.
 */
export interface GetPermissionGroupCommandOutput extends GetPermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a specific permission group.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // GetPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionGroupResponse
 * //   permissionGroup: { // PermissionGroup
 * //     permissionGroupId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     applicationPermissions: [ // ApplicationPermissionList
 * //       "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 * //     ],
 * //     createTime: Number("long"),
 * //     lastModifiedTime: Number("long"),
 * //     membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPermissionGroupCommandInput - {@link GetPermissionGroupCommandInput}
 * @returns {@link GetPermissionGroupCommandOutput}
 * @see {@link GetPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link GetPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetPermissionGroupCommand extends $Command
  .classBuilder<
    GetPermissionGroupCommandInput,
    GetPermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "GetPermissionGroup", {})
  .n("FinspaceDataClient", "GetPermissionGroupCommand")
  .sc(GetPermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPermissionGroupRequest;
      output: GetPermissionGroupResponse;
    };
    sdk: {
      input: GetPermissionGroupCommandInput;
      output: GetPermissionGroupCommandOutput;
    };
  };
}
