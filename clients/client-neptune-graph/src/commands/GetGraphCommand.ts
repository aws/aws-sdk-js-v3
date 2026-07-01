// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGraphInput, GetGraphOutput } from "../models/models_0";
import { GetGraph$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGraphCommand}.
 */
export interface GetGraphCommandInput extends GetGraphInput {}
/**
 * @public
 *
 * The output of {@link GetGraphCommand}.
 */
export interface GetGraphCommandOutput extends GetGraphOutput, __MetadataBearer {}

/**
 * <p>Gets information about a specified graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetGraphCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetGraphCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetGraphInput
 *   graphIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetGraphOutput
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
 * @param GetGraphCommandInput - {@link GetGraphCommandInput}
 * @returns {@link GetGraphCommandOutput}
 * @see {@link GetGraphCommandInput} for command's `input` shape.
 * @see {@link GetGraphCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetGraphCommand extends command<GetGraphCommandInput, GetGraphCommandOutput>(
  _ep0,
  _mw0,
  "GetGraph",
  GetGraph$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGraphInput;
      output: GetGraphOutput;
    };
    sdk: {
      input: GetGraphCommandInput;
      output: GetGraphCommandOutput;
    };
  };
}
