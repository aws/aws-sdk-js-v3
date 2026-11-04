// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWaveRequest, DeleteWaveResponse } from "../models/models_0";
import { DeleteWave$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandInput extends DeleteWaveRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandOutput extends DeleteWaveResponse, __MetadataBearer {}

/**
 * Delete wave.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DeleteWaveRequest
 *   waveID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteWaveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWaveCommandInput - {@link DeleteWaveCommandInput}
 * @returns {@link DeleteWaveCommandOutput}
 * @see {@link DeleteWaveCommandInput} for command's `input` shape.
 * @see {@link DeleteWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * Uninitialized account exception.
 *
 * @throws {@link MgnServiceException}
 *
 * Base exception class for all service exceptions from Mgn service.
 *
 * @public
 */
export class DeleteWaveCommand extends command<DeleteWaveCommandInput, DeleteWaveCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWave",
  DeleteWave$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWaveRequest;
      output: {};
    };
    sdk: {
      input: DeleteWaveCommandInput;
      output: DeleteWaveCommandOutput;
    };
  };
}
