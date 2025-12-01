// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CrlDetailResponse, ImportCrlRequest } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { ImportCrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportCrlCommand}.
 */
export interface ImportCrlCommandInput extends ImportCrlRequest {}
/**
 * @public
 *
 * The output of {@link ImportCrlCommand}.
 */
export interface ImportCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * <p>Imports the certificate revocation list (CRL). A CRL is a list of certificates that have
 *          been revoked by the issuing certificate Authority (CA).In order to be properly imported, a CRL must be in PEM
 *          format. IAM Roles Anywhere
 *          validates against the CRL before issuing credentials. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ImportCrl</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ImportCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ImportCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ImportCrlRequest
 *   name: "STRING_VALUE", // required
 *   crlData: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   enabled: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   trustAnchorArn: "STRING_VALUE", // required
 * };
 * const command = new ImportCrlCommand(input);
 * const response = await client.send(command);
 * // { // CrlDetailResponse
 * //   crl: { // CrlDetail
 * //     crlId: "STRING_VALUE",
 * //     crlArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     enabled: true || false,
 * //     crlData: new Uint8Array(),
 * //     trustAnchorArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportCrlCommandInput - {@link ImportCrlCommandInput}
 * @returns {@link ImportCrlCommandOutput}
 * @see {@link ImportCrlCommandInput} for command's `input` shape.
 * @see {@link ImportCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @public
 */
export class ImportCrlCommand extends $Command
  .classBuilder<
    ImportCrlCommandInput,
    ImportCrlCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "ImportCrl", {})
  .n("RolesAnywhereClient", "ImportCrlCommand")
  .sc(ImportCrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportCrlRequest;
      output: CrlDetailResponse;
    };
    sdk: {
      input: ImportCrlCommandInput;
      output: ImportCrlCommandOutput;
    };
  };
}
