// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopSearchJobInput, StopSearchJobOutput } from "../models/models_0";
import { StopSearchJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopSearchJobCommand}.
 */
export interface StopSearchJobCommandInput extends StopSearchJobInput {}
/**
 * @public
 *
 * The output of {@link StopSearchJobCommand}.
 */
export interface StopSearchJobCommandOutput extends StopSearchJobOutput, __MetadataBearer {}

/**
 * This operations ends a search job.
 *
 * Only a search job with a status of `RUNNING` can be stopped.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupSearchClient, StopSearchJobCommand } from "@aws-sdk/client-backupsearch"; // ES Modules import
 * // const { BackupSearchClient, StopSearchJobCommand } = require("@aws-sdk/client-backupsearch"); // CommonJS import
 * // import type { BackupSearchClientConfig } from "@aws-sdk/client-backupsearch";
 * const config = {}; // type is BackupSearchClientConfig
 * const client = new BackupSearchClient(config);
 * const input = { // StopSearchJobInput
 *   SearchJobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopSearchJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSearchJobCommandInput - {@link StopSearchJobCommandInput}
 * @returns {@link StopSearchJobCommandOutput}
 * @see {@link StopSearchJobCommandInput} for command's `input` shape.
 * @see {@link StopSearchJobCommandOutput} for command's `response` shape.
 * @see {@link BackupSearchClientResolvedConfig | config} for BackupSearchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception occurs when a conflict with a previous successful operation is detected. This generally occurs when the previous operation did not have time to propagate to the host serving the current request.
 *
 * A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found for this request.
 *
 * Confirm the resource information, such as the ARN or type is correct and exists, then retry the request.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link BackupSearchServiceException}
 *
 * Base exception class for all service exceptions from BackupSearch service.
 *
 * @public
 */
export class StopSearchJobCommand extends command<StopSearchJobCommandInput, StopSearchJobCommandOutput>(
  _ep0,
  _mw0,
  "StopSearchJob",
  StopSearchJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSearchJobInput;
      output: {};
    };
    sdk: {
      input: StopSearchJobCommandInput;
      output: StopSearchJobCommandOutput;
    };
  };
}
