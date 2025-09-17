// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreGraphFromSnapshotInput, RestoreGraphFromSnapshotOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_RestoreGraphFromSnapshotCommand, se_RestoreGraphFromSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Restores a graph from a snapshot.</p>
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
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded.</p>
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
export class RestoreGraphFromSnapshotCommand extends $Command
  .classBuilder<
    RestoreGraphFromSnapshotCommandInput,
    RestoreGraphFromSnapshotCommandOutput,
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
  .s("AmazonNeptuneGraph", "RestoreGraphFromSnapshot", {})
  .n("NeptuneGraphClient", "RestoreGraphFromSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_RestoreGraphFromSnapshotCommand)
  .de(de_RestoreGraphFromSnapshotCommand)
  .build() {
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
