// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDirectoryConfigRequest, UpdateDirectoryConfigResult } from "../models/models_0";
import { UpdateDirectoryConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDirectoryConfigCommand}.
 */
export interface UpdateDirectoryConfigCommandInput extends UpdateDirectoryConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectoryConfigCommand}.
 */
export interface UpdateDirectoryConfigCommandOutput extends UpdateDirectoryConfigResult, __MetadataBearer {}

/**
 * Updates the specified Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateDirectoryConfigRequest
 *   DirectoryName: "STRING_VALUE", // required
 *   OrganizationalUnitDistinguishedNames: [ // OrganizationalUnitDistinguishedNamesList
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
 * const command = new UpdateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectoryConfigResult
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
 * @param UpdateDirectoryConfigCommandInput - {@link UpdateDirectoryConfigCommandInput}
 * @returns {@link UpdateDirectoryConfigCommandOutput}
 * @see {@link UpdateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *
 * The image can't be updated because it's not compatible for updates.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The specified role is invalid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class UpdateDirectoryConfigCommand extends command<UpdateDirectoryConfigCommandInput, UpdateDirectoryConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDirectoryConfig",
  UpdateDirectoryConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectoryConfigRequest;
      output: UpdateDirectoryConfigResult;
    };
    sdk: {
      input: UpdateDirectoryConfigCommandInput;
      output: UpdateDirectoryConfigCommandOutput;
    };
  };
}
