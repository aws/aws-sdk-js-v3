// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGraphInput, DeleteGraphOutput } from "../models/models_0";
import { DeleteGraph$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGraphCommand}.
 */
export interface DeleteGraphCommandInput extends DeleteGraphInput {}
/**
 * @public
 *
 * The output of {@link DeleteGraphCommand}.
 */
export interface DeleteGraphCommandOutput extends DeleteGraphOutput, __MetadataBearer {}

/**
 * Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, DeleteGraphCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, DeleteGraphCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // DeleteGraphInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   skipSnapshot: true || false, // required
 * };
 * const command = new DeleteGraphCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGraphOutput
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
 * @param DeleteGraphCommandInput - {@link DeleteGraphCommandInput}
 * @returns {@link DeleteGraphCommandOutput}
 * @see {@link DeleteGraphCommandInput} for command's `input` shape.
 * @see {@link DeleteGraphCommandOutput} for command's `response` shape.
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
export class DeleteGraphCommand extends command<DeleteGraphCommandInput, DeleteGraphCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGraph",
  DeleteGraph$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGraphInput;
      output: DeleteGraphOutput;
    };
    sdk: {
      input: DeleteGraphCommandInput;
      output: DeleteGraphCommandOutput;
    };
  };
}
