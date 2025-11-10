// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ArchiveWaveRequest, Wave } from "../models/models_0";
import { ArchiveWave } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ArchiveWaveCommand}.
 */
export interface ArchiveWaveCommandInput extends ArchiveWaveRequest {}
/**
 * @public
 *
 * The output of {@link ArchiveWaveCommand}.
 */
export interface ArchiveWaveCommandOutput extends Wave, __MetadataBearer {}

/**
 * <p>Archive wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ArchiveWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ArchiveWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ArchiveWaveRequest
 *   waveID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ArchiveWaveCommand(input);
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
 * @param ArchiveWaveCommandInput - {@link ArchiveWaveCommandInput}
 * @returns {@link ArchiveWaveCommandOutput}
 * @see {@link ArchiveWaveCommandInput} for command's `input` shape.
 * @see {@link ArchiveWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ArchiveWaveCommand extends $Command
  .classBuilder<
    ArchiveWaveCommandInput,
    ArchiveWaveCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ArchiveWave", {})
  .n("MgnClient", "ArchiveWaveCommand")
  .sc(ArchiveWave)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ArchiveWaveRequest;
      output: Wave;
    };
    sdk: {
      input: ArchiveWaveCommandInput;
      output: ArchiveWaveCommandOutput;
    };
  };
}
