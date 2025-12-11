// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { ListPermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandInput extends ListPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandOutput extends ListPermissionsResponse, __MetadataBearer {}

/**
 * <p>Lists the users and groups who have the Grafana <code>Admin</code> and
 *                 <code>Editor</code> roles in this workspace. If you use this operation without
 *             specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles
 *             of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>,
 *             only the roles for that user or group are returned. If you do this, you can specify only
 *             one <code>userId</code> or one <code>groupId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, ListPermissionsCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, ListPermissionsCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // ListPermissionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   userType: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   groupId: "STRING_VALUE",
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   permissions: [ // PermissionEntryList // required
 * //     { // PermissionEntry
 * //       user: { // User
 * //         id: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //       role: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPermissionsCommandInput - {@link ListPermissionsCommandInput}
 * @returns {@link ListPermissionsCommandOutput}
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 *
 * @public
 */
export class ListPermissionsCommand extends $Command
  .classBuilder<
    ListPermissionsCommandInput,
    ListPermissionsCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "ListPermissions", {})
  .n("GrafanaClient", "ListPermissionsCommand")
  .sc(ListPermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionsRequest;
      output: ListPermissionsResponse;
    };
    sdk: {
      input: ListPermissionsCommandInput;
      output: ListPermissionsCommandOutput;
    };
  };
}
