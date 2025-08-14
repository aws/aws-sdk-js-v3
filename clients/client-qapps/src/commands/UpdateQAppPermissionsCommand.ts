// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQAppPermissionsInput, UpdateQAppPermissionsOutput } from "../models/models_0";
import { de_UpdateQAppPermissionsCommand, se_UpdateQAppPermissionsCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQAppPermissionsCommand}.
 */
export interface UpdateQAppPermissionsCommandInput extends UpdateQAppPermissionsInput {}
/**
 * @public
 *
 * The output of {@link UpdateQAppPermissionsCommand}.
 */
export interface UpdateQAppPermissionsCommandOutput extends UpdateQAppPermissionsOutput, __MetadataBearer {}

/**
 * <p>Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateQAppPermissionsCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateQAppPermissionsCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // UpdateQAppPermissionsInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   grantPermissions: [ // PermissionsInputList
 *     { // PermissionInput
 *       action: "read" || "write", // required
 *       principal: "STRING_VALUE", // required
 *     },
 *   ],
 *   revokePermissions: [
 *     {
 *       action: "read" || "write", // required
 *       principal: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateQAppPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQAppPermissionsOutput
 * //   resourceArn: "STRING_VALUE",
 * //   appId: "STRING_VALUE",
 * //   permissions: [ // PermissionsOutputList
 * //     { // PermissionOutput
 * //       action: "read" || "write", // required
 * //       principal: { // PrincipalOutput
 * //         userId: "STRING_VALUE",
 * //         userType: "owner" || "user",
 * //         email: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateQAppPermissionsCommandInput - {@link UpdateQAppPermissionsCommandInput}
 * @returns {@link UpdateQAppPermissionsCommandOutput}
 * @see {@link UpdateQAppPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateQAppPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Grant permissions for the app
 * ```javascript
 * //
 * const input = {
 *   appId: "fe0acf86-49e5-4def-a0c2-40ce0cafee14",
 *   grantPermissions: [
 *     {
 *       action: "read",
 *       principal: "user2@example.com"
 *     }
 *   ],
 *   instanceId: "01793661-ad73-4c7d-8eaa-1c95a10151c2"
 * };
 * const command = new UpdateQAppPermissionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appId: "fe0acf86-49e5-4def-a0c2-40ce0cafee14",
 *   permissions: [
 *     {
 *       action: "write",
 *       principal: {
 *         email: "user1@example.com",
 *         userId: "f8f15330-b091-708b-d46e-adb0d914b699"
 *       }
 *     },
 *     {
 *       action: "read",
 *       principal: {
 *         email: "user2@example.com",
 *         userId: "c81133d0-10d1-70eb-aaa3-d427ea6fc0f3"
 *       }
 *     }
 *   ],
 *   resourceArn: "arn:aws:qapps:us-west-2:111111111111:application/01793661-ad73-4c7d-8eaa-1c95a10151c2/qapp/fe0acf86-49e5-4def-a0c2-40ce0cafee14"
 * }
 * *\/
 * ```
 *
 * @example Revoke permissions for the app
 * ```javascript
 * //
 * const input = {
 *   appId: "fe0acf86-49e5-4def-a0c2-40ce0cafee14",
 *   instanceId: "01793661-ad73-4c7d-8eaa-1c95a10151c2",
 *   revokePermissions: [
 *     {
 *       action: "read",
 *       principal: "user2@example.com"
 *     }
 *   ]
 * };
 * const command = new UpdateQAppPermissionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appId: "fe0acf86-49e5-4def-a0c2-40ce0cafee14",
 *   permissions: [
 *     {
 *       action: "write",
 *       principal: {
 *         email: "user1@example.com",
 *         userId: "f8f15330-b091-708b-d46e-adb0d914b699"
 *       }
 *     }
 *   ],
 *   resourceArn: "arn:aws:qapps:us-west-2:111111111111:application/01793661-ad73-4c7d-8eaa-1c95a10151c2/qapp/fe0acf86-49e5-4def-a0c2-40ce0cafee14"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateQAppPermissionsCommand extends $Command
  .classBuilder<
    UpdateQAppPermissionsCommandInput,
    UpdateQAppPermissionsCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "UpdateQAppPermissions", {})
  .n("QAppsClient", "UpdateQAppPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQAppPermissionsCommand)
  .de(de_UpdateQAppPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQAppPermissionsInput;
      output: UpdateQAppPermissionsOutput;
    };
    sdk: {
      input: UpdateQAppPermissionsCommandInput;
      output: UpdateQAppPermissionsCommandOutput;
    };
  };
}
