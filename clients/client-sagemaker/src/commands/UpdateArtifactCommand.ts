// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateArtifactRequest, UpdateArtifactResponse } from "../models/models_5";
import { de_UpdateArtifactCommand, se_UpdateArtifactCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateArtifactCommand}.
 */
export interface UpdateArtifactCommandInput extends UpdateArtifactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateArtifactCommand}.
 */
export interface UpdateArtifactCommandOutput extends UpdateArtifactResponse, __MetadataBearer {}

/**
 * <p>Updates an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateArtifactRequest
 *   ArtifactArn: "STRING_VALUE", // required
 *   ArtifactName: "STRING_VALUE",
 *   Properties: { // ArtifactProperties
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PropertiesToRemove: [ // ListLineageEntityParameterKey
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateArtifactCommand(input);
 * const response = await client.send(command);
 * // { // UpdateArtifactResponse
 * //   ArtifactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateArtifactCommandInput - {@link UpdateArtifactCommandInput}
 * @returns {@link UpdateArtifactCommandOutput}
 * @see {@link UpdateArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateArtifactCommand extends $Command
  .classBuilder<
    UpdateArtifactCommandInput,
    UpdateArtifactCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateArtifact", {})
  .n("SageMakerClient", "UpdateArtifactCommand")
  .f(void 0, void 0)
  .ser(se_UpdateArtifactCommand)
  .de(de_UpdateArtifactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateArtifactRequest;
      output: UpdateArtifactResponse;
    };
    sdk: {
      input: UpdateArtifactCommandInput;
      output: UpdateArtifactCommandOutput;
    };
  };
}
