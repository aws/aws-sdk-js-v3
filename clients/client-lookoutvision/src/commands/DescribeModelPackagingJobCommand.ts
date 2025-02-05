// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DescribeModelPackagingJobRequest, DescribeModelPackagingJobResponse } from "../models/models_0";
import { de_DescribeModelPackagingJobCommand, se_DescribeModelPackagingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelPackagingJobCommand}.
 */
export interface DescribeModelPackagingJobCommandInput extends DescribeModelPackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelPackagingJobCommand}.
 */
export interface DescribeModelPackagingJobCommandOutput extends DescribeModelPackagingJobResponse, __MetadataBearer {}

/**
 * <p>Describes an Amazon Lookout for Vision model packaging job.
 * </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DescribeModelPackagingJob</code> operation.</p>
 *          <p>For more information, see
 *          <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DescribeModelPackagingJobCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DescribeModelPackagingJobCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LookoutVisionClient(config);
 * const input = { // DescribeModelPackagingJobRequest
 *   ProjectName: "STRING_VALUE", // required
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelPackagingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelPackagingJobResponse
 * //   ModelPackagingDescription: { // ModelPackagingDescription
 * //     JobName: "STRING_VALUE",
 * //     ProjectName: "STRING_VALUE",
 * //     ModelVersion: "STRING_VALUE",
 * //     ModelPackagingConfiguration: { // ModelPackagingConfiguration
 * //       Greengrass: { // GreengrassConfiguration
 * //         CompilerOptions: "STRING_VALUE",
 * //         TargetDevice: "jetson_xavier",
 * //         TargetPlatform: { // TargetPlatform
 * //           Os: "LINUX", // required
 * //           Arch: "ARM64" || "X86_64", // required
 * //           Accelerator: "NVIDIA",
 * //         },
 * //         S3OutputLocation: { // S3Location
 * //           Bucket: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //         },
 * //         ComponentName: "STRING_VALUE", // required
 * //         ComponentVersion: "STRING_VALUE",
 * //         ComponentDescription: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ModelPackagingJobDescription: "STRING_VALUE",
 * //     ModelPackagingMethod: "STRING_VALUE",
 * //     ModelPackagingOutputDetails: { // ModelPackagingOutputDetails
 * //       Greengrass: { // GreengrassOutputDetails
 * //         ComponentVersionArn: "STRING_VALUE",
 * //         ComponentName: "STRING_VALUE",
 * //         ComponentVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: "CREATED" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeModelPackagingJobCommandInput - {@link DescribeModelPackagingJobCommandInput}
 * @returns {@link DescribeModelPackagingJobCommandOutput}
 * @see {@link DescribeModelPackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackagingJobCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
 *
 * @public
 */
export class DescribeModelPackagingJobCommand extends $Command
  .classBuilder<
    DescribeModelPackagingJobCommandInput,
    DescribeModelPackagingJobCommandOutput,
    LookoutVisionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutVisionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutVisionService", "DescribeModelPackagingJob", {})
  .n("LookoutVisionClient", "DescribeModelPackagingJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeModelPackagingJobCommand)
  .de(de_DescribeModelPackagingJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeModelPackagingJobRequest;
      output: DescribeModelPackagingJobResponse;
    };
    sdk: {
      input: DescribeModelPackagingJobCommandInput;
      output: DescribeModelPackagingJobCommandOutput;
    };
  };
}
