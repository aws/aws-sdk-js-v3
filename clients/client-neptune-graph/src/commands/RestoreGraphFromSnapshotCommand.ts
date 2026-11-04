// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreGraphFromSnapshotInput, RestoreGraphFromSnapshotOutput } from "../models/models_0";
import { RestoreGraphFromSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreGraphFromSnapshotCommand}.
 */
export interface RestoreGraphFromSnapshotCommandInput extends RestoreGraphFromSnapshotInput {}
/**
 * @public
 *
 * The output of {@link RestoreGraphFromSnapshotCommand}.
 */
export interface RestoreGraphFromSnapshotCommandOutput extends RestoreGraphFromSnapshotOutput, __MetadataBearer {}

/**
 * Restores a graph from a snapshot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, RestoreGraphFromSnapshotCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, RestoreGraphFromSnapshotCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // RestoreGraphFromSnapshotInput
 *   snapshotIdentifier: "STRING_VALUE", // required
 *   graphName: "STRING_VALUE", // required
 *   provisionedMemory: Number("int"),
 *   deletionProtection: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   replicaCount: Number("int"),
 *   publicConnectivity: true || false,
 * };
 * const command = new RestoreGraphFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreGraphFromSnapshotOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "RESETTING" || "UPDATING" || "SNAPSHOTTING" || "FAILED" || "IMPORTING" || "STARTING" || "STOPPING" || "STOPPED",
 * //   statusReason: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   provisionedMemory: Number("int"),
 * //   endpoint: "STRING_VALUE",
 * //   publicConnectivity: true || false,
 * //   vectorSearchConfiguration: { // VectorSearchConfiguration
 * //     dimension: Number("int"), // required
 * //   },
 * //   replicaCount: Number("int"),
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * //   sourceSnapshotId: "STRING_VALUE",
 * //   deletionProtection: true || false,
 * //   buildNumber: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RestoreGraphFromSnapshotCommandInput - {@link RestoreGraphFromSnapshotCommandInput}
 * @returns {@link RestoreGraphFromSnapshotCommandOutput}
 * @see {@link RestoreGraphFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreGraphFromSnapshotCommandOutput} for command's `response` shape.
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
export class RestoreGraphFromSnapshotCommand extends command<RestoreGraphFromSnapshotCommandInput, RestoreGraphFromSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreGraphFromSnapshot",
  RestoreGraphFromSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreGraphFromSnapshotInput;
      output: RestoreGraphFromSnapshotOutput;
    };
    sdk: {
      input: RestoreGraphFromSnapshotCommandInput;
      output: RestoreGraphFromSnapshotCommandOutput;
    };
  };
}
