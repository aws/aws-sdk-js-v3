// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/models_0";
import { de_DescribeStacksCommand, se_DescribeStacksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandInput extends DescribeStacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeStacksRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStacksResult
 * //   Stacks: [ // StackList
 * //     { // Stack
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       StorageConnectors: [ // StorageConnectorList
 * //         { // StorageConnector
 * //           ConnectorType: "HOMEFOLDERS" || "GOOGLE_DRIVE" || "ONE_DRIVE", // required
 * //           ResourceIdentifier: "STRING_VALUE",
 * //           Domains: [ // DomainList
 * //             "STRING_VALUE",
 * //           ],
 * //           DomainsRequireAdminConsent: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       RedirectURL: "STRING_VALUE",
 * //       FeedbackURL: "STRING_VALUE",
 * //       StackErrors: [ // StackErrors
 * //         { // StackError
 * //           ErrorCode: "STORAGE_CONNECTOR_ERROR" || "INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UserSettings: [ // UserSettingList
 * //         { // UserSetting
 * //           Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "FILE_UPLOAD" || "FILE_DOWNLOAD" || "PRINTING_TO_LOCAL_DEVICE" || "DOMAIN_PASSWORD_SIGNIN" || "DOMAIN_SMART_CARD_SIGNIN" || "AUTO_TIME_ZONE_REDIRECTION", // required
 * //           Permission: "ENABLED" || "DISABLED", // required
 * //           MaximumLength: Number("int"),
 * //         },
 * //       ],
 * //       ApplicationSettings: { // ApplicationSettingsResponse
 * //         Enabled: true || false,
 * //         SettingsGroup: "STRING_VALUE",
 * //         S3BucketName: "STRING_VALUE",
 * //       },
 * //       AccessEndpoints: [ // AccessEndpointList
 * //         { // AccessEndpoint
 * //           EndpointType: "STREAMING", // required
 * //           VpceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EmbedHostDomains: [ // EmbedHostDomains
 * //         "STRING_VALUE",
 * //       ],
 * //       StreamingExperienceSettings: { // StreamingExperienceSettings
 * //         PreferredProtocol: "TCP" || "UDP",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStacksCommandInput - {@link DescribeStacksCommandInput}
 * @returns {@link DescribeStacksCommandOutput}
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class DescribeStacksCommand extends $Command
  .classBuilder<
    DescribeStacksCommandInput,
    DescribeStacksCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeStacks", {})
  .n("AppStreamClient", "DescribeStacksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStacksCommand)
  .de(de_DescribeStacksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStacksRequest;
      output: DescribeStacksResult;
    };
    sdk: {
      input: DescribeStacksCommandInput;
      output: DescribeStacksCommandOutput;
    };
  };
}
