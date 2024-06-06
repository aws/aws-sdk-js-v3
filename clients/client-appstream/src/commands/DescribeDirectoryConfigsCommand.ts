// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
  DescribeDirectoryConfigsResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDirectoryConfigsCommand, se_DescribeDirectoryConfigsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectoryConfigsCommand}.
 */
export interface DescribeDirectoryConfigsCommandInput extends DescribeDirectoryConfigsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoryConfigsCommand}.
 */
export interface DescribeDirectoryConfigsCommandOutput extends DescribeDirectoryConfigsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *         </p>
 *          <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeDirectoryConfigsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeDirectoryConfigsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeDirectoryConfigsRequest
 *   DirectoryNames: [ // DirectoryNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectoryConfigsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoryConfigsResult
 * //   DirectoryConfigs: [ // DirectoryConfigList
 * //     { // DirectoryConfig
 * //       DirectoryName: "STRING_VALUE", // required
 * //       OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ServiceAccountCredentials: { // ServiceAccountCredentials
 * //         AccountName: "STRING_VALUE", // required
 * //         AccountPassword: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 * //         Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 * //         CertificateAuthorityArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoryConfigsCommandInput - {@link DescribeDirectoryConfigsCommandInput}
 * @returns {@link DescribeDirectoryConfigsCommandOutput}
 * @see {@link DescribeDirectoryConfigsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoryConfigsCommandOutput} for command's `response` shape.
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
export class DescribeDirectoryConfigsCommand extends $Command
  .classBuilder<
    DescribeDirectoryConfigsCommandInput,
    DescribeDirectoryConfigsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeDirectoryConfigs", {})
  .n("AppStreamClient", "DescribeDirectoryConfigsCommand")
  .f(void 0, DescribeDirectoryConfigsResultFilterSensitiveLog)
  .ser(se_DescribeDirectoryConfigsCommand)
  .de(de_DescribeDirectoryConfigsCommand)
  .build() {}
