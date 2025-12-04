// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDirectoryConfigRequest, CreateDirectoryConfigResult } from "../models/models_0";
import { CreateDirectoryConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDirectoryConfigCommand}.
 */
export interface CreateDirectoryConfigCommandInput extends CreateDirectoryConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectoryConfigCommand}.
 */
export interface CreateDirectoryConfigCommandOutput extends CreateDirectoryConfigResult, __MetadataBearer {}

/**
 * <p>Creates a Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateDirectoryConfigRequest
 *   DirectoryName: "STRING_VALUE", // required
 *   OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList // required
 *     "STRING_VALUE",
 *   ],
 *   ServiceAccountCredentials: { // ServiceAccountCredentials
 *     AccountName: "STRING_VALUE", // required
 *     AccountPassword: "STRING_VALUE", // required
 *   },
 *   CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 *     Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 *     CertificateAuthorityArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectoryConfigResult
 * //   DirectoryConfig: { // DirectoryConfig
 * //     DirectoryName: "STRING_VALUE", // required
 * //     OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceAccountCredentials: { // ServiceAccountCredentials
 * //       AccountName: "STRING_VALUE", // required
 * //       AccountPassword: "STRING_VALUE", // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 * //       Status: "DISABLED" || "ENABLED" || "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK",
 * //       CertificateAuthorityArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDirectoryConfigCommandInput - {@link CreateDirectoryConfigCommandInput}
 * @returns {@link CreateDirectoryConfigCommandOutput}
 * @see {@link CreateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateDirectoryConfigCommand extends $Command
  .classBuilder<
    CreateDirectoryConfigCommandInput,
    CreateDirectoryConfigCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateDirectoryConfig", {})
  .n("AppStreamClient", "CreateDirectoryConfigCommand")
  .sc(CreateDirectoryConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectoryConfigRequest;
      output: CreateDirectoryConfigResult;
    };
    sdk: {
      input: CreateDirectoryConfigCommandInput;
      output: CreateDirectoryConfigCommandOutput;
    };
  };
}
