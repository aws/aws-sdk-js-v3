// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMetadataGenerationRunInput, CancelMetadataGenerationRunOutput } from "../models/models_0";
import { CancelMetadataGenerationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMetadataGenerationRunCommand}.
 */
export interface CancelMetadataGenerationRunCommandInput extends CancelMetadataGenerationRunInput {}
/**
 * @public
 *
 * The output of {@link CancelMetadataGenerationRunCommand}.
 */
export interface CancelMetadataGenerationRunCommandOutput extends CancelMetadataGenerationRunOutput, __MetadataBearer {}

/**
 * Cancels the metadata generation run.
 *
 * Prerequisites:
 *
 * - The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS).
 * - Runs in SUCCEEDED status cannot be cancelled.
 * - User must have access to the run and cancel permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CancelMetadataGenerationRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CancelMetadataGenerationRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CancelMetadataGenerationRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new CancelMetadataGenerationRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelMetadataGenerationRunCommandInput - {@link CancelMetadataGenerationRunCommandInput}
 * @returns {@link CancelMetadataGenerationRunCommandOutput}
 * @see {@link CancelMetadataGenerationRunCommandInput} for command's `input` shape.
 * @see {@link CancelMetadataGenerationRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
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
export class CancelMetadataGenerationRunCommand extends command<CancelMetadataGenerationRunCommandInput, CancelMetadataGenerationRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelMetadataGenerationRun",
  CancelMetadataGenerationRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMetadataGenerationRunInput;
      output: {};
    };
    sdk: {
      input: CancelMetadataGenerationRunCommandInput;
      output: CancelMetadataGenerationRunCommandOutput;
    };
  };
}
