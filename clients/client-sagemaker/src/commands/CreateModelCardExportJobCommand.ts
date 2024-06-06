// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelCardExportJobRequest, CreateModelCardExportJobResponse } from "../models/models_1";
import { de_CreateModelCardExportJobCommand, se_CreateModelCardExportJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCardExportJobCommand}.
 */
export interface CreateModelCardExportJobCommandInput extends CreateModelCardExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCardExportJobCommand}.
 */
export interface CreateModelCardExportJobCommandOutput extends CreateModelCardExportJobResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon SageMaker Model Card export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCardExportJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCardExportJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelCardExportJobRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardVersion: Number("int"),
 *   ModelCardExportJobName: "STRING_VALUE", // required
 *   OutputConfig: { // ModelCardExportOutputConfig
 *     S3OutputPath: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateModelCardExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCardExportJobResponse
 * //   ModelCardExportJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCardExportJobCommandInput - {@link CreateModelCardExportJobCommandInput}
 * @returns {@link CreateModelCardExportJobCommandOutput}
 * @see {@link CreateModelCardExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelCardExportJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateModelCardExportJobCommand extends $Command
  .classBuilder<
    CreateModelCardExportJobCommandInput,
    CreateModelCardExportJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateModelCardExportJob", {})
  .n("SageMakerClient", "CreateModelCardExportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelCardExportJobCommand)
  .de(de_CreateModelCardExportJobCommand)
  .build() {}
