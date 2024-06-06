// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageVersionRequest, DescribeImageVersionResponse } from "../models/models_2";
import { de_DescribeImageVersionCommand, se_DescribeImageVersionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageVersionCommand}.
 */
export interface DescribeImageVersionCommandInput extends DescribeImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageVersionCommand}.
 */
export interface DescribeImageVersionCommandOutput extends DescribeImageVersionResponse, __MetadataBearer {}

/**
 * <p>Describes a version of a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeImageVersionRequest
 *   ImageName: "STRING_VALUE", // required
 *   Version: Number("int"),
 *   Alias: "STRING_VALUE",
 * };
 * const command = new DescribeImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageVersionResponse
 * //   BaseImage: "STRING_VALUE",
 * //   ContainerImage: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * //   ImageArn: "STRING_VALUE",
 * //   ImageVersionArn: "STRING_VALUE",
 * //   ImageVersionStatus: "CREATING" || "CREATED" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Version: Number("int"),
 * //   VendorGuidance: "NOT_PROVIDED" || "STABLE" || "TO_BE_ARCHIVED" || "ARCHIVED",
 * //   JobType: "TRAINING" || "INFERENCE" || "NOTEBOOK_KERNEL",
 * //   MLFramework: "STRING_VALUE",
 * //   ProgrammingLang: "STRING_VALUE",
 * //   Processor: "CPU" || "GPU",
 * //   Horovod: true || false,
 * //   ReleaseNotes: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageVersionCommandInput - {@link DescribeImageVersionCommandInput}
 * @returns {@link DescribeImageVersionCommandOutput}
 * @see {@link DescribeImageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DescribeImageVersionCommand extends $Command
  .classBuilder<
    DescribeImageVersionCommandInput,
    DescribeImageVersionCommandOutput,
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
  .s("SageMaker", "DescribeImageVersion", {})
  .n("SageMakerClient", "DescribeImageVersionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageVersionCommand)
  .de(de_DescribeImageVersionCommand)
  .build() {}
