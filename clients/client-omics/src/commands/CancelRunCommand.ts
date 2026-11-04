// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelRunRequest } from "../models/models_0";
import { CancelRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelRunCommand}.
 */
export interface CancelRunCommandInput extends CancelRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelRunCommand}.
 */
export interface CancelRunCommandOutput extends __MetadataBearer {}

/**
 * Cancels a run using its ID and returns a response with no body if the operation is successful. To confirm that the run has been cancelled, use the `ListRuns` API operation to check that it is no longer listed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CancelRunCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CancelRunCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CancelRunRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new CancelRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelRunCommandInput - {@link CancelRunCommandInput}
 * @returns {@link CancelRunCommandOutput}
 * @see {@link CancelRunCommandInput} for command's `input` shape.
 * @see {@link CancelRunCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CancelRunCommand extends command<CancelRunCommandInput, CancelRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelRun",
  CancelRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelRunRequest;
      output: {};
    };
    sdk: {
      input: CancelRunCommandInput;
      output: CancelRunCommandOutput;
    };
  };
}
