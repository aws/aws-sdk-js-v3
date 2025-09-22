// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExtensionAssociations, ListExtensionAssociationsRequest } from "../models/models_0";
import { ListExtensionAssociations } from "../schemas/schemas_4_Extension";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExtensionAssociationsCommand}.
 */
export interface ListExtensionAssociationsCommandInput extends ListExtensionAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListExtensionAssociationsCommand}.
 */
export interface ListExtensionAssociationsCommandOutput extends ExtensionAssociations, __MetadataBearer {}

/**
 * <p>Lists all AppConfig extension associations in the account. For more
 *          information about extensions and associations, see <a href="https://docs.aws.amazon.com/appconfig/latest/userguide/working-with-appconfig-extensions.html">Extending
 *             workflows</a> in the <i>AppConfig User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListExtensionAssociationsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListExtensionAssociationsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListExtensionAssociationsRequest
 *   ResourceIdentifier: "STRING_VALUE",
 *   ExtensionIdentifier: "STRING_VALUE",
 *   ExtensionVersionNumber: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExtensionAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ExtensionAssociations
 * //   Items: [ // ExtensionAssociationSummaries
 * //     { // ExtensionAssociationSummary
 * //       Id: "STRING_VALUE",
 * //       ExtensionArn: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtensionAssociationsCommandInput - {@link ListExtensionAssociationsCommandInput}
 * @returns {@link ListExtensionAssociationsCommandOutput}
 * @see {@link ListExtensionAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListExtensionAssociationsCommandOutput} for command's `response` shape.
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
export class ListExtensionAssociationsCommand extends $Command
  .classBuilder<
    ListExtensionAssociationsCommandInput,
    ListExtensionAssociationsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "ListExtensionAssociations", {})
  .n("AppConfigClient", "ListExtensionAssociationsCommand")
  .sc(ListExtensionAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExtensionAssociationsRequest;
      output: ExtensionAssociations;
    };
    sdk: {
      input: ListExtensionAssociationsCommandInput;
      output: ListExtensionAssociationsCommandOutput;
    };
  };
}
