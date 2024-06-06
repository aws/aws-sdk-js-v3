// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGraphInput, DeleteGraphOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_DeleteGraphCommand, se_DeleteGraphCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified graph. Graphs cannot be deleted if delete-protection is enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, DeleteGraphCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, DeleteGraphCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
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
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "RESETTING" || "UPDATING" || "SNAPSHOTTING" || "FAILED" || "IMPORTING",
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
 * @public
 */
export class DeleteGraphCommand extends $Command
  .classBuilder<
    DeleteGraphCommandInput,
    DeleteGraphCommandOutput,
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
  .s("AmazonNeptuneGraph", "DeleteGraph", {})
  .n("NeptuneGraphClient", "DeleteGraphCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGraphCommand)
  .de(de_DeleteGraphCommand)
  .build() {}
