// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelJobRequest, CancelJobResponse } from "../models/models_0";
import { CancelJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelJobCommand}.
 */
export interface CancelJobCommandInput extends CancelJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobCommand}.
 */
export interface CancelJobCommandOutput extends CancelJobResponse, __MetadataBearer {}

/**
 * Cancels an Amazon Braket hybrid job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CancelJobCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CancelJobCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // CancelJobRequest
 *   jobArn: "STRING_VALUE", // required
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   cancellationStatus: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelJobCommandInput - {@link CancelJobCommandInput}
 * @returns {@link CancelJobCommandOutput}
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred due to a conflict.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request failed because of an unknown error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The API throttling rate limit is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input request failed to satisfy constraints expected by Amazon Braket.
 *
 * @throws {@link BraketServiceException}
 *
 * Base exception class for all service exceptions from Braket service.
 *
 * @public
 */
export class CancelJobCommand extends command<CancelJobCommandInput, CancelJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelJob",
  CancelJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobRequest;
      output: CancelJobResponse;
    };
    sdk: {
      input: CancelJobCommandInput;
      output: CancelJobCommandOutput;
    };
  };
}
