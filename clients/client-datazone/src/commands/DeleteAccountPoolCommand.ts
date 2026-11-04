// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountPoolInput, DeleteAccountPoolOutput } from "../models/models_1";
import { DeleteAccountPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountPoolCommand}.
 */
export interface DeleteAccountPoolCommandInput extends DeleteAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPoolCommand}.
 */
export interface DeleteAccountPoolCommandOutput extends DeleteAccountPoolOutput, __MetadataBearer {}

/**
 * Deletes an account pool.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPoolCommandInput - {@link DeleteAccountPoolCommandInput}
 * @returns {@link DeleteAccountPoolCommandOutput}
 * @see {@link DeleteAccountPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPoolCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteAccountPoolCommand extends command<DeleteAccountPoolCommandInput, DeleteAccountPoolCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountPool",
  DeleteAccountPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountPoolInput;
      output: {};
    };
    sdk: {
      input: DeleteAccountPoolCommandInput;
      output: DeleteAccountPoolCommandOutput;
    };
  };
}
