// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePackageImportJobRequest, DescribePackageImportJobResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribePackageImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageImportJobCommand}.
 */
export interface DescribePackageImportJobCommandInput extends DescribePackageImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageImportJobCommand}.
 */
export interface DescribePackageImportJobCommandOutput extends DescribePackageImportJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about a package import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageImportJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageImportJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageImportJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * //   ClientToken: "STRING_VALUE",
 * //   JobType: "STRING_VALUE", // required
 * //   InputConfig: { // PackageImportJobInputConfig
 * //     PackageVersionInputConfig: { // PackageVersionInputConfig
 * //       S3Location: { // S3Location
 * //         Region: "STRING_VALUE",
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKey: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   OutputConfig: { // PackageImportJobOutputConfig
 * //     PackageVersionOutputConfig: { // PackageVersionOutputConfig
 * //       PackageName: "STRING_VALUE", // required
 * //       PackageVersion: "STRING_VALUE", // required
 * //       MarkLatest: true || false,
 * //     },
 * //   },
 * //   Output: { // PackageImportJobOutput
 * //     PackageId: "STRING_VALUE", // required
 * //     PackageVersion: "STRING_VALUE", // required
 * //     PatchVersion: "STRING_VALUE", // required
 * //     OutputS3Location: { // OutPutS3Location
 * //       BucketName: "STRING_VALUE", // required
 * //       ObjectKey: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //   Status: "STRING_VALUE", // required
 * //   StatusMessage: "STRING_VALUE", // required
 * //   JobTags: [ // JobTagsList
 * //     { // JobResourceTags
 * //       ResourceType: "STRING_VALUE", // required
 * //       Tags: { // TagMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePackageImportJobCommandInput - {@link DescribePackageImportJobCommandInput}
 * @returns {@link DescribePackageImportJobCommandOutput}
 * @see {@link DescribePackageImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribePackageImportJobCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class DescribePackageImportJobCommand extends $Command
  .classBuilder<
    DescribePackageImportJobCommandInput,
    DescribePackageImportJobCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribePackageImportJob", {})
  .n("PanoramaClient", "DescribePackageImportJobCommand")
  .sc(DescribePackageImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePackageImportJobRequest;
      output: DescribePackageImportJobResponse;
    };
    sdk: {
      input: DescribePackageImportJobCommandInput;
      output: DescribePackageImportJobCommandOutput;
    };
  };
}
