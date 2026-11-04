// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnarchiveWaveRequest, Wave } from "../models/models_0";
import { UnarchiveWave$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UnarchiveWaveCommand}.
 */
export interface UnarchiveWaveCommandInput extends UnarchiveWaveRequest {}
/**
 * @public
 *
 * The output of {@link UnarchiveWaveCommand}.
 */
export interface UnarchiveWaveCommandOutput extends Wave, __MetadataBearer {}

/**
 * Unarchive wave.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UnarchiveWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UnarchiveWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UnarchiveWaveRequest
 *   waveID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new UnarchiveWaveCommand(input);
 * const response = await client.send(command);
 * // { // Wave
 * //   waveID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   isArchived: true || false,
 * //   waveAggregatedStatus: { // WaveAggregatedStatus
 * //     lastUpdateDateTime: "STRING_VALUE",
 * //     replicationStartedDateTime: "STRING_VALUE",
 * //     healthStatus: "STRING_VALUE",
 * //     progressStatus: "STRING_VALUE",
 * //     totalApplications: Number("long"),
 * //   },
 * //   creationDateTime: "STRING_VALUE",
 * //   lastModifiedDateTime: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UnarchiveWaveCommandInput - {@link UnarchiveWaveCommandInput}
 * @returns {@link UnarchiveWaveCommandOutput}
 * @see {@link UnarchiveWaveCommandInput} for command's `input` shape.
 * @see {@link UnarchiveWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found exception.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because it exceeded the service quota.
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
export class UnarchiveWaveCommand extends command<UnarchiveWaveCommandInput, UnarchiveWaveCommandOutput>(
  _ep0,
  _mw0,
  "UnarchiveWave",
  UnarchiveWave$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnarchiveWaveRequest;
      output: Wave;
    };
    sdk: {
      input: UnarchiveWaveCommandInput;
      output: UnarchiveWaveCommandOutput;
    };
  };
}
