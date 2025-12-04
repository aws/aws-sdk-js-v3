// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Extension, GetExtensionRequest } from "../models/models_0";
import { GetExtension } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExtensionCommand}.
 */
export interface GetExtensionCommandInput extends GetExtensionRequest {}
/**
 * @public
 *
 * The output of {@link GetExtensionCommand}.
 */
export interface GetExtensionCommandOutput extends Extension, __MetadataBearer {}

/**
 * <p>Returns information about an AppConfig extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetExtensionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetExtensionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetExtensionRequest
 *   ExtensionIdentifier: "STRING_VALUE", // required
 *   VersionNumber: Number("int"),
 * };
 * const command = new GetExtensionCommand(input);
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
 * @param GetExtensionCommandInput - {@link GetExtensionCommandInput}
 * @returns {@link GetExtensionCommandOutput}
 * @see {@link GetExtensionCommandInput} for command's `input` shape.
 * @see {@link GetExtensionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetExtensionCommand extends $Command
  .classBuilder<
    GetExtensionCommandInput,
    GetExtensionCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "GetExtension", {})
  .n("AppConfigClient", "GetExtensionCommand")
  .sc(GetExtension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExtensionRequest;
      output: Extension;
    };
    sdk: {
      input: GetExtensionCommandInput;
      output: GetExtensionCommandOutput;
    };
  };
}
