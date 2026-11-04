// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateArtifactRequest, UpdateArtifactResponse } from "../models/models_4";
import { UpdateArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an artifact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateArtifactCommand extends command<UpdateArtifactCommandInput, UpdateArtifactCommandOutput>(
  _ep0,
  _mw0,
  "UpdateArtifact",
  UpdateArtifact$
) {
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
