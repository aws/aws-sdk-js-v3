// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { CreatePermissionGroupRequest, CreatePermissionGroupResponse } from "../models/models_0";
import { CreatePermissionGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePermissionGroupCommand}.
 */
export interface CreatePermissionGroupCommandInput extends CreatePermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionGroupCommand}.
 */
export interface CreatePermissionGroupCommandOutput extends CreatePermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a group of permissions for various actions that a user can perform in FinSpace.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreatePermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreatePermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // CreatePermissionGroupRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   applicationPermissions: [ // ApplicationPermissionList // required
 *     "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionGroupResponse
 * //   permissionGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePermissionGroupCommandInput - {@link CreatePermissionGroupCommandInput}
 * @returns {@link CreatePermissionGroupCommandOutput}
 * @see {@link CreatePermissionGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionGroupCommandOutput} for command's `response` shape.
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
export class CreatePermissionGroupCommand extends $Command
  .classBuilder<
    CreatePermissionGroupCommandInput,
    CreatePermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "CreatePermissionGroup", {})
  .n("FinspaceDataClient", "CreatePermissionGroupCommand")
  .sc(CreatePermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionGroupRequest;
      output: CreatePermissionGroupResponse;
    };
    sdk: {
      input: CreatePermissionGroupCommandInput;
      output: CreatePermissionGroupCommandOutput;
    };
  };
}
