// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFeatureMetadataRequest, DescribeFeatureMetadataResponse } from "../models/models_2";
import { de_DescribeFeatureMetadataCommand, se_DescribeFeatureMetadataCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFeatureMetadataCommand}.
 */
export interface DescribeFeatureMetadataCommandInput extends DescribeFeatureMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFeatureMetadataCommand}.
 */
export interface DescribeFeatureMetadataCommandOutput extends DescribeFeatureMetadataResponse, __MetadataBearer {}

/**
 * <p>Shows the metadata for a feature within a feature group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureMetadataCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureMetadataCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeFeatureMetadataRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFeatureMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFeatureMetadataResponse
 * //   FeatureGroupArn: "STRING_VALUE", // required
 * //   FeatureGroupName: "STRING_VALUE", // required
 * //   FeatureName: "STRING_VALUE", // required
 * //   FeatureType: "Integral" || "Fractional" || "String", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   Parameters: [ // FeatureParameters
 * //     { // FeatureParameter
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeFeatureMetadataCommandInput - {@link DescribeFeatureMetadataCommandInput}
 * @returns {@link DescribeFeatureMetadataCommandOutput}
 * @see {@link DescribeFeatureMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureMetadataCommandOutput} for command's `response` shape.
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
export class DescribeFeatureMetadataCommand extends $Command
  .classBuilder<
    DescribeFeatureMetadataCommandInput,
    DescribeFeatureMetadataCommandOutput,
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
  .s("SageMaker", "DescribeFeatureMetadata", {})
  .n("SageMakerClient", "DescribeFeatureMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFeatureMetadataCommand)
  .de(de_DescribeFeatureMetadataCommand)
  .build() {}
