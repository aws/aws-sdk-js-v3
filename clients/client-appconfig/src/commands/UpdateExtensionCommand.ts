// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Extension, UpdateExtensionRequest } from "../models/models_0";
import { UpdateExtension } from "../schemas/schemas_4_Extension";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExtensionCommand}.
 */
export interface UpdateExtensionCommandInput extends UpdateExtensionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExtensionCommand}.
 */
export interface UpdateExtensionCommandOutput extends Extension, __MetadataBearer {}

/**
 * <p>Updates an AppConfig extension. For more information about extensions, see
 *             <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // UpdateExtensionRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Actions: { // ActionsMap
 *     "<keys>": [ // ActionList
 *       { // Action
 *         Name: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Uri: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Parameters: { // ParameterMap
 *     "<keys>": { // Parameter
 *       Description: "STRING_VALUE",
 *       Required: true || false,
 *       Dynamic: true || false,
 *     },
 *   },
 *   VersionNumber: Number("int"),
 * };
 * const command = new UpdateExtensionCommand(input);
 * const response = await client.send(command);
 * // { // Extension
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionNumber: Number("int"),
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Actions: { // ActionsMap
 * //     "<keys>": [ // ActionList
 * //       { // Action
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Uri: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Parameters: { // ParameterMap
 * //     "<keys>": { // Parameter
 * //       Description: "STRING_VALUE",
 * //       Required: true || false,
 * //       Dynamic: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateExtensionCommandInput - {@link UpdateExtensionCommandInput}
 * @returns {@link UpdateExtensionCommandOutput}
 * @see {@link UpdateExtensionCommandInput} for command's `input` shape.
 * @see {@link UpdateExtensionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 *
 * @public
 */
export class UpdateExtensionCommand extends $Command
  .classBuilder<
    UpdateExtensionCommandInput,
    UpdateExtensionCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "UpdateExtension", {})
  .n("AppConfigClient", "UpdateExtensionCommand")
  .sc(UpdateExtension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExtensionRequest;
      output: Extension;
    };
    sdk: {
      input: UpdateExtensionCommandInput;
      output: UpdateExtensionCommandOutput;
    };
  };
}
