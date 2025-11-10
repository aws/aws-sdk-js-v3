// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListUsersByPermissionGroupRequest, ListUsersByPermissionGroupResponse } from "../models/models_0";
import { ListUsersByPermissionGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersByPermissionGroupCommand}.
 */
export interface ListUsersByPermissionGroupCommandInput extends ListUsersByPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersByPermissionGroupCommand}.
 */
export interface ListUsersByPermissionGroupCommandOutput extends ListUsersByPermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Lists details of all the users in a specific permission group.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListUsersByPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListUsersByPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // ListUsersByPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"), // required
 * };
 * const command = new ListUsersByPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersByPermissionGroupResponse
 * //   users: [ // UserByPermissionGroupList
 * //     { // UserByPermissionGroup
 * //       userId: "STRING_VALUE",
 * //       status: "CREATING" || "ENABLED" || "DISABLED",
 * //       firstName: "STRING_VALUE",
 * //       lastName: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //       type: "SUPER_USER" || "APP_USER",
 * //       apiAccess: "ENABLED" || "DISABLED",
 * //       apiAccessPrincipalArn: "STRING_VALUE",
 * //       membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersByPermissionGroupCommandInput - {@link ListUsersByPermissionGroupCommandInput}
 * @returns {@link ListUsersByPermissionGroupCommandOutput}
 * @see {@link ListUsersByPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link ListUsersByPermissionGroupCommandOutput} for command's `response` shape.
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
export class ListUsersByPermissionGroupCommand extends $Command
  .classBuilder<
    ListUsersByPermissionGroupCommandInput,
    ListUsersByPermissionGroupCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "ListUsersByPermissionGroup", {})
  .n("FinspaceDataClient", "ListUsersByPermissionGroupCommand")
  .sc(ListUsersByPermissionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsersByPermissionGroupRequest;
      output: ListUsersByPermissionGroupResponse;
    };
    sdk: {
      input: ListUsersByPermissionGroupCommandInput;
      output: ListUsersByPermissionGroupCommandOutput;
    };
  };
}
