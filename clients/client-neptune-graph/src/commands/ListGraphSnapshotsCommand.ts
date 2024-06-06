// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGraphSnapshotsInput, ListGraphSnapshotsOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListGraphSnapshotsCommand, se_ListGraphSnapshotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGraphSnapshotsCommand}.
 */
export interface ListGraphSnapshotsCommandInput extends ListGraphSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListGraphSnapshotsCommand}.
 */
export interface ListGraphSnapshotsCommandOutput extends ListGraphSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Lists available snapshots of a specified Neptune Analytics graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListGraphSnapshotsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListGraphSnapshotsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListGraphSnapshotsInput
 *   graphIdentifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListGraphSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListGraphSnapshotsOutput
 * //   graphSnapshots: [ // GraphSnapshotSummaryList // required
 * //     { // GraphSnapshotSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       sourceGraphId: "STRING_VALUE",
 * //       snapshotCreateTime: new Date("TIMESTAMP"),
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED",
 * //       kmsKeyIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGraphSnapshotsCommandInput - {@link ListGraphSnapshotsCommandInput}
 * @returns {@link ListGraphSnapshotsCommandOutput}
 * @see {@link ListGraphSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListGraphSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 * @public
 */
export class ListGraphSnapshotsCommand extends $Command
  .classBuilder<
    ListGraphSnapshotsCommandInput,
    ListGraphSnapshotsCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "ListGraphSnapshots", {})
  .n("NeptuneGraphClient", "ListGraphSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_ListGraphSnapshotsCommand)
  .de(de_ListGraphSnapshotsCommand)
  .build() {}
