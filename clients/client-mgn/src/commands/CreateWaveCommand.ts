// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { CreateWaveRequest, Wave } from "../models/models_0";
import { CreateWave } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWaveCommand}.
 */
export interface CreateWaveCommandInput extends CreateWaveRequest {}
/**
 * @public
 *
 * The output of {@link CreateWaveCommand}.
 */
export interface CreateWaveCommandOutput extends Wave, __MetadataBearer {}

/**
 * <p>Create wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // CreateWaveRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new CreateWaveCommand(input);
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
 * @param CreateWaveCommandInput - {@link CreateWaveCommandInput}
 * @returns {@link CreateWaveCommandOutput}
 * @see {@link CreateWaveCommandInput} for command's `input` shape.
 * @see {@link CreateWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
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
export class CreateWaveCommand extends $Command
  .classBuilder<
    CreateWaveCommandInput,
    CreateWaveCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "CreateWave", {})
  .n("MgnClient", "CreateWaveCommand")
  .sc(CreateWave)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWaveRequest;
      output: Wave;
    };
    sdk: {
      input: CreateWaveCommandInput;
      output: CreateWaveCommandOutput;
    };
  };
}
