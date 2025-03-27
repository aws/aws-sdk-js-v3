// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { HostedConfigurationVersions, ListHostedConfigurationVersionsRequest } from "../models/models_0";
import {
  de_ListHostedConfigurationVersionsCommand,
  se_ListHostedConfigurationVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostedConfigurationVersionsCommand}.
 */
export interface ListHostedConfigurationVersionsCommandInput extends ListHostedConfigurationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedConfigurationVersionsCommand}.
 */
export interface ListHostedConfigurationVersionsCommandOutput extends HostedConfigurationVersions, __MetadataBearer {}

/**
 * <p>Lists configurations stored in the AppConfig hosted configuration store by
 *          version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListHostedConfigurationVersionsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListHostedConfigurationVersionsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ListHostedConfigurationVersionsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   VersionLabel: "STRING_VALUE",
 * };
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // HostedConfigurationVersions
 * //   Items: [ // HostedConfigurationVersionSummaryList
 * //     { // HostedConfigurationVersionSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       ConfigurationProfileId: "STRING_VALUE",
 * //       VersionNumber: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       ContentType: "STRING_VALUE",
 * //       VersionLabel: "STRING_VALUE",
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostedConfigurationVersionsCommandInput - {@link ListHostedConfigurationVersionsCommandInput}
 * @returns {@link ListHostedConfigurationVersionsCommandOutput}
 * @see {@link ListHostedConfigurationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHostedConfigurationVersionsCommandOutput} for command's `response` shape.
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
 * @example To list the available hosted configuration versions
 * ```javascript
 * // The following list-hosted-configuration-versions example lists the configurations versions hosted in the AWS AppConfig hosted configuration store for the specified application and configuration profile.
 * const input = {
 *   ApplicationId: "339ohji",
 *   ConfigurationProfileId: "ur8hx2f"
 * };
 * const command = new ListHostedConfigurationVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       ApplicationId: "339ohji",
 *       ConfigurationProfileId: "ur8hx2f",
 *       ContentType: "application/json",
 *       VersionNumber: 1
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListHostedConfigurationVersionsCommand extends $Command
  .classBuilder<
    ListHostedConfigurationVersionsCommandInput,
    ListHostedConfigurationVersionsCommandOutput,
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
  .s("AmazonAppConfig", "ListHostedConfigurationVersions", {})
  .n("AppConfigClient", "ListHostedConfigurationVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListHostedConfigurationVersionsCommand)
  .de(de_ListHostedConfigurationVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedConfigurationVersionsRequest;
      output: HostedConfigurationVersions;
    };
    sdk: {
      input: ListHostedConfigurationVersionsCommandInput;
      output: ListHostedConfigurationVersionsCommandOutput;
    };
  };
}
