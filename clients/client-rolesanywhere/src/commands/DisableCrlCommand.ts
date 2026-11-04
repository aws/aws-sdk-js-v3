// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CrlDetailResponse, ScalarCrlRequest } from "../models/models_0";
import { DisableCrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableCrlCommand}.
 */
export interface DisableCrlCommandInput extends ScalarCrlRequest {}
/**
 * @public
 *
 * The output of {@link DisableCrlCommand}.
 */
export interface DisableCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * Disables a certificate revocation list (CRL).
 *
 * **Required permissions:** `rolesanywhere:DisableCrl`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, DisableCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, DisableCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarCrlRequest
 *   crlId: "STRING_VALUE", // required
 * };
 * const command = new DisableCrlCommand(input);
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
 * @param DisableCrlCommandInput - {@link DisableCrlCommandInput}
 * @returns {@link DisableCrlCommandOutput}
 * @see {@link DisableCrlCommandInput} for command's `input` shape.
 * @see {@link DisableCrlCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link RolesAnywhereServiceException}
 *
 * Base exception class for all service exceptions from RolesAnywhere service.
 *
 * @public
 */
export class DisableCrlCommand extends command<DisableCrlCommandInput, DisableCrlCommandOutput>(
  _ep0,
  _mw0,
  "DisableCrl",
  DisableCrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalarCrlRequest;
      output: CrlDetailResponse;
    };
    sdk: {
      input: DisableCrlCommandInput;
      output: DisableCrlCommandOutput;
    };
  };
}
