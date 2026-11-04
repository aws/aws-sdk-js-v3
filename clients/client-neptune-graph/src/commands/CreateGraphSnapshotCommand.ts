// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGraphSnapshotInput, CreateGraphSnapshotOutput } from "../models/models_0";
import { CreateGraphSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGraphSnapshotCommand}.
 */
export interface CreateGraphSnapshotCommandInput extends CreateGraphSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateGraphSnapshotCommand}.
 */
export interface CreateGraphSnapshotCommandOutput extends CreateGraphSnapshotOutput, __MetadataBearer {}

/**
 * Creates a snapshot of the specific graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreateGraphSnapshotCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreateGraphSnapshotCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreateGraphSnapshotInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   snapshotName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGraphSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateGraphSnapshotOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   sourceGraphId: "STRING_VALUE",
 * //   snapshotCreateTime: new Date("TIMESTAMP"),
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED",
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGraphSnapshotCommandInput - {@link CreateGraphSnapshotCommandInput}
 * @returns {@link CreateGraphSnapshotCommandOutput}
 * @see {@link CreateGraphSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateGraphSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Raised when a conflict is encountered.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource could not be located.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota was exceeded.
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
export class CreateGraphSnapshotCommand extends command<CreateGraphSnapshotCommandInput, CreateGraphSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateGraphSnapshot",
  CreateGraphSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGraphSnapshotInput;
      output: CreateGraphSnapshotOutput;
    };
    sdk: {
      input: CreateGraphSnapshotCommandInput;
      output: CreateGraphSnapshotCommandOutput;
    };
  };
}
