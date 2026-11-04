// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReadSetActivationJobRequest, StartReadSetActivationJobResponse } from "../models/models_0";
import { StartReadSetActivationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReadSetActivationJobCommand}.
 */
export interface StartReadSetActivationJobCommandInput extends StartReadSetActivationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReadSetActivationJobCommand}.
 */
export interface StartReadSetActivationJobCommandOutput extends StartReadSetActivationJobResponse, __MetadataBearer {}

/**
 * Activates an archived read set and returns its metadata in a JSON formatted output. Amazon Web Services HealthOmics automatically archives unused read sets after 30 days. To monitor the status of your read set activation job, use the `GetReadSetActivationJob` operation.
 *
 * To learn more, see [Activating read sets](https://docs.aws.amazon.com/omics/latest/dev/activating-read-sets.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetActivationJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetActivationJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartReadSetActivationJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // StartReadSetActivationJobSourceList // required
 *     { // StartReadSetActivationJobSourceItem
 *       readSetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartReadSetActivationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReadSetActivationJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReadSetActivationJobCommandInput - {@link StartReadSetActivationJobCommandInput}
 * @returns {@link StartReadSetActivationJobCommandOutput}
 * @see {@link StartReadSetActivationJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetActivationJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class StartReadSetActivationJobCommand extends command<StartReadSetActivationJobCommandInput, StartReadSetActivationJobCommandOutput>(
  _ep0,
  _mw0,
  "StartReadSetActivationJob",
  StartReadSetActivationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReadSetActivationJobRequest;
      output: StartReadSetActivationJobResponse;
    };
    sdk: {
      input: StartReadSetActivationJobCommandInput;
      output: StartReadSetActivationJobCommandOutput;
    };
  };
}
