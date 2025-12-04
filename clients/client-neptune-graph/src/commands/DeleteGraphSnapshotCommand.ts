// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteGraphSnapshotInput, DeleteGraphSnapshotOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { DeleteGraphSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGraphSnapshotCommand}.
 */
export interface DeleteGraphSnapshotCommandInput extends DeleteGraphSnapshotInput {}
/**
 * @public
 *
 * The output of {@link DeleteGraphSnapshotCommand}.
 */
export interface DeleteGraphSnapshotCommandOutput extends DeleteGraphSnapshotOutput, __MetadataBearer {}

/**
 * <p>Deletes the specifed graph snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, DeleteGraphSnapshotCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, DeleteGraphSnapshotCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // DeleteGraphSnapshotInput
 *   snapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGraphSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGraphSnapshotOutput
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
 * @param DeleteGraphSnapshotCommandInput - {@link DeleteGraphSnapshotCommandInput}
 * @returns {@link DeleteGraphSnapshotCommandOutput}
 * @see {@link DeleteGraphSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteGraphSnapshotCommandOutput} for command's `response` shape.
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
export class DeleteGraphSnapshotCommand extends $Command
  .classBuilder<
    DeleteGraphSnapshotCommandInput,
    DeleteGraphSnapshotCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "DeleteGraphSnapshot", {})
  .n("NeptuneGraphClient", "DeleteGraphSnapshotCommand")
  .sc(DeleteGraphSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGraphSnapshotInput;
      output: DeleteGraphSnapshotOutput;
    };
    sdk: {
      input: DeleteGraphSnapshotCommandInput;
      output: DeleteGraphSnapshotCommandOutput;
    };
  };
}
