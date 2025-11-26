// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import type { ListPermissionGroupsRequest, ListPermissionGroupsResponse } from "../models/models_0";
import { ListPermissionGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionGroupsCommand}.
 */
export interface ListPermissionGroupsCommandInput extends ListPermissionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionGroupsCommand}.
 */
export interface ListPermissionGroupsCommandOutput extends ListPermissionGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists all available permission groups in FinSpace.</p>
 *
 * @deprecated This method will be discontinued.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListPermissionGroupsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListPermissionGroupsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * // import type { FinspaceDataClientConfig } from "@aws-sdk/client-finspace-data";
 * const config = {}; // type is FinspaceDataClientConfig
 * const client = new FinspaceDataClient(config);
 * const input = { // ListPermissionGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"), // required
 * };
 * const command = new ListPermissionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionGroupsResponse
 * //   permissionGroups: [ // PermissionGroupList
 * //     { // PermissionGroup
 * //       permissionGroupId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       applicationPermissions: [ // ApplicationPermissionList
 * //         "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 * //       ],
 * //       createTime: Number("long"),
 * //       lastModifiedTime: Number("long"),
 * //       membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionGroupsCommandInput - {@link ListPermissionGroupsCommandInput}
 * @returns {@link ListPermissionGroupsCommandOutput}
 * @see {@link ListPermissionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionGroupsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
export class ListPermissionGroupsCommand extends $Command
  .classBuilder<
    ListPermissionGroupsCommandInput,
    ListPermissionGroupsCommandOutput,
    FinspaceDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroPublicAPI", "ListPermissionGroups", {})
  .n("FinspaceDataClient", "ListPermissionGroupsCommand")
  .sc(ListPermissionGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionGroupsRequest;
      output: ListPermissionGroupsResponse;
    };
    sdk: {
      input: ListPermissionGroupsCommandInput;
      output: ListPermissionGroupsCommandOutput;
    };
  };
}
