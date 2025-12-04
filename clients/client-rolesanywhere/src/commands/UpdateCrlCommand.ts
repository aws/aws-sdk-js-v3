// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CrlDetailResponse, UpdateCrlRequest } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { UpdateCrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCrlCommand}.
 */
export interface UpdateCrlCommandInput extends UpdateCrlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCrlCommand}.
 */
export interface UpdateCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * <p>Updates the certificate revocation list (CRL). A CRL is a list of certificates that have
 *          been revoked by the issuing certificate authority (CA). IAM Roles Anywhere
 *          validates against the CRL before issuing credentials.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:UpdateCrl</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, UpdateCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, UpdateCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // UpdateCrlRequest
 *   crlId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   crlData: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateCrlCommand(input);
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
 * @param UpdateCrlCommandInput - {@link UpdateCrlCommandInput}
 * @returns {@link UpdateCrlCommandOutput}
 * @see {@link UpdateCrlCommandInput} for command's `input` shape.
 * @see {@link UpdateCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
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
export class UpdateCrlCommand extends $Command
  .classBuilder<
    UpdateCrlCommandInput,
    UpdateCrlCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "UpdateCrl", {})
  .n("RolesAnywhereClient", "UpdateCrlCommand")
  .sc(UpdateCrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCrlRequest;
      output: CrlDetailResponse;
    };
    sdk: {
      input: UpdateCrlCommandInput;
      output: UpdateCrlCommandOutput;
    };
  };
}
