// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ConfigurationProfiles, ListConfigurationProfilesRequest } from "../models/models_0";
import { ListConfigurationProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationProfilesCommand}.
 */
export interface ListConfigurationProfilesCommandInput extends ListConfigurationProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationProfilesCommand}.
 */
export interface ListConfigurationProfilesCommandOutput extends ConfigurationProfiles, __MetadataBearer {}

/**
 * <p>Lists the configuration profiles for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListConfigurationProfilesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListConfigurationProfilesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListConfigurationProfilesRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 * };
 * const command = new ListConfigurationProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationProfiles
 * //   Items: [ // ConfigurationProfileSummaryList
 * //     { // ConfigurationProfileSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LocationUri: "STRING_VALUE",
 * //       ValidatorTypes: [ // ValidatorTypeList
 * //         "JSON_SCHEMA" || "LAMBDA",
 * //       ],
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationProfilesCommandInput - {@link ListConfigurationProfilesCommandInput}
 * @returns {@link ListConfigurationProfilesCommandOutput}
 * @see {@link ListConfigurationProfilesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationProfilesCommandOutput} for command's `response` shape.
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
 * @example To list the available configuration profiles
 * ```javascript
 * // The following list-configuration-profiles example lists the available configuration profiles for the specified application.
 * const input = {
 *   ApplicationId: "339ohji"
 * };
 * const command = new ListConfigurationProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       ApplicationId: "339ohji",
 *       Id: "ur8hx2f",
 *       LocationUri: "ssm-parameter://Example-Parameter",
 *       Name: "Example-Configuration-Profile"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConfigurationProfilesCommand extends $Command
  .classBuilder<
    ListConfigurationProfilesCommandInput,
    ListConfigurationProfilesCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "ListConfigurationProfiles", {})
  .n("AppConfigClient", "ListConfigurationProfilesCommand")
  .sc(ListConfigurationProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationProfilesRequest;
      output: ConfigurationProfiles;
    };
    sdk: {
      input: ListConfigurationProfilesCommandInput;
      output: ListConfigurationProfilesCommandOutput;
    };
  };
}
