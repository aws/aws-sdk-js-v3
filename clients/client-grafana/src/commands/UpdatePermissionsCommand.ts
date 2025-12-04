// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import type { UpdatePermissionsRequest, UpdatePermissionsResponse } from "../models/models_0";
import { UpdatePermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePermissionsCommand}.
 */
export interface UpdatePermissionsCommandInput extends UpdatePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePermissionsCommand}.
 */
export interface UpdatePermissionsCommandOutput extends UpdatePermissionsResponse, __MetadataBearer {}

/**
 * <p>Updates which users in a workspace have the Grafana <code>Admin</code> or
 *                 <code>Editor</code> roles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdatePermissionsCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdatePermissionsCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // import type { GrafanaClientConfig } from "@aws-sdk/client-grafana";
 * const config = {}; // type is GrafanaClientConfig
 * const client = new GrafanaClient(config);
 * const input = { // UpdatePermissionsRequest
 *   updateInstructionBatch: [ // UpdateInstructionBatch // required
 *     { // UpdateInstruction
 *       action: "STRING_VALUE", // required
 *       role: "STRING_VALUE", // required
 *       users: [ // UserList // required
 *         { // User
 *           id: "STRING_VALUE", // required
 *           type: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new UpdatePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePermissionsResponse
 * //   errors: [ // UpdateErrorList // required
 * //     { // UpdateError
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE", // required
 * //       causedBy: { // UpdateInstruction
 * //         action: "STRING_VALUE", // required
 * //         role: "STRING_VALUE", // required
 * //         users: [ // UserList // required
 * //           { // User
 * //             id: "STRING_VALUE", // required
 * //             type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePermissionsCommandInput - {@link UpdatePermissionsCommandInput}
 * @returns {@link UpdatePermissionsCommandOutput}
 * @see {@link UpdatePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionsCommandOutput} for command's `response` shape.
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
export class UpdatePermissionsCommand extends $Command
  .classBuilder<
    UpdatePermissionsCommandInput,
    UpdatePermissionsCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGrafanaControlPlane", "UpdatePermissions", {})
  .n("GrafanaClient", "UpdatePermissionsCommand")
  .sc(UpdatePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePermissionsRequest;
      output: UpdatePermissionsResponse;
    };
    sdk: {
      input: UpdatePermissionsCommandInput;
      output: UpdatePermissionsCommandOutput;
    };
  };
}
