// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGraphSnapshotsInput, ListGraphSnapshotsOutput } from "../models/models_0";
import { ListGraphSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists available snapshots of a specified Neptune Analytics graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListGraphSnapshotsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListGraphSnapshotsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
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
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class ListGraphSnapshotsCommand extends command<ListGraphSnapshotsCommandInput, ListGraphSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListGraphSnapshots",
  ListGraphSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGraphSnapshotsInput;
      output: ListGraphSnapshotsOutput;
    };
    sdk: {
      input: ListGraphSnapshotsCommandInput;
      output: ListGraphSnapshotsCommandOutput;
    };
  };
}
