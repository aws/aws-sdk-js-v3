// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CrlDetailResponse, ScalarCrlRequest } from "../models/models_0";
import { DeleteCrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCrlCommand}.
 */
export interface DeleteCrlCommandInput extends ScalarCrlRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCrlCommand}.
 */
export interface DeleteCrlCommandOutput extends CrlDetailResponse, __MetadataBearer {}

/**
 * Deletes a certificate revocation list (CRL).
 *
 * **Required permissions:** `rolesanywhere:DeleteCrl`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, DeleteCrlCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, DeleteCrlCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ScalarCrlRequest
 *   crlId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCrlCommand(input);
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
 * @param DeleteCrlCommandInput - {@link DeleteCrlCommandInput}
 * @returns {@link DeleteCrlCommandOutput}
 * @see {@link DeleteCrlCommandInput} for command's `input` shape.
 * @see {@link DeleteCrlCommandOutput} for command's `response` shape.
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
export class DeleteCrlCommand extends command<DeleteCrlCommandInput, DeleteCrlCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCrl",
  DeleteCrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScalarCrlRequest;
      output: CrlDetailResponse;
    };
    sdk: {
      input: DeleteCrlCommandInput;
      output: DeleteCrlCommandOutput;
    };
  };
}
