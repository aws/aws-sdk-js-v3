// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Extensions, ListExtensionsRequest } from "../models/models_0";
import { de_ListExtensionsCommand, se_ListExtensionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExtensionsCommand}.
 */
export interface ListExtensionsCommandInput extends ListExtensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExtensionsCommand}.
 */
export interface ListExtensionsCommandOutput extends Extensions, __MetadataBearer {}

/**
 * <p>Lists all custom and Amazon Web Services authored AppConfig extensions in the
 *          account. For more information about extensions, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExtensionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExtensionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ListExtensionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new ListExtensionsCommand(input);
 * const response = await client.send(command);
 * // { // Extensions
 * //   Items: [ // ExtensionSummaries
 * //     { // ExtensionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VersionNumber: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtensionsCommandInput - {@link ListExtensionsCommandInput}
 * @returns {@link ListExtensionsCommandOutput}
 * @see {@link ListExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListExtensionsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @public
 */
export class ListExtensionsCommand extends $Command
  .classBuilder<
    ListExtensionsCommandInput,
    ListExtensionsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "ListExtensions", {})
  .n("AppConfigClient", "ListExtensionsCommand")
  .f(void 0, void 0)
  .ser(se_ListExtensionsCommand)
  .de(de_ListExtensionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExtensionsRequest;
      output: Extensions;
    };
    sdk: {
      input: ListExtensionsCommandInput;
      output: ListExtensionsCommandOutput;
    };
  };
}
