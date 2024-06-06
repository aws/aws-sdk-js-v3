// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Environment, UpdateEnvironmentRequest } from "../models/models_0";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends Environment, __MetadataBearer {}

/**
 * <p>Updates an environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateEnvironmentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // UpdateEnvironmentRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EnvironmentId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Monitors: [ // MonitorList
 *     { // Monitor
 *       AlarmArn: "STRING_VALUE", // required
 *       AlarmRoleArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // Environment
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   State: "READY_FOR_DEPLOYMENT" || "DEPLOYING" || "ROLLING_BACK" || "ROLLED_BACK",
 * //   Monitors: [ // MonitorList
 * //     { // Monitor
 * //       AlarmArn: "STRING_VALUE", // required
 * //       AlarmRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To update an environment
 * ```javascript
 * // The following update-environment example updates an environment's description.
 * const input = {
 *   "ApplicationId": "339ohji",
 *   "Description": "An environment for examples.",
 *   "EnvironmentId": "54j1r29"
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationId": "339ohji",
 *   "Description": "An environment for examples.",
 *   "Id": "54j1r29",
 *   "Name": "Example-Environment",
 *   "State": "ROLLED_BACK"
 * }
 * *\/
 * // example id: to-update-an-environment-1632331382428
 * ```
 *
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "UpdateEnvironment", {})
  .n("AppConfigClient", "UpdateEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnvironmentCommand)
  .de(de_UpdateEnvironmentCommand)
  .build() {}
