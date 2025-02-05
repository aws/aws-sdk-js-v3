// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePackageImportJobRequest, CreatePackageImportJobResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_CreatePackageImportJobCommand, se_CreatePackageImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePackageImportJobCommand}.
 */
export interface CreatePackageImportJobCommandInput extends CreatePackageImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackageImportJobCommand}.
 */
export interface CreatePackageImportJobCommandOutput extends CreatePackageImportJobResponse, __MetadataBearer {}

/**
 * <p>Imports a node package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreatePackageImportJobCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreatePackageImportJobCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PanoramaClient(config);
 * const input = { // CreatePackageImportJobRequest
 *   JobType: "STRING_VALUE", // required
 *   InputConfig: { // PackageImportJobInputConfig
 *     PackageVersionInputConfig: { // PackageVersionInputConfig
 *       S3Location: { // S3Location
 *         Region: "STRING_VALUE",
 *         BucketName: "STRING_VALUE", // required
 *         ObjectKey: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   OutputConfig: { // PackageImportJobOutputConfig
 *     PackageVersionOutputConfig: { // PackageVersionOutputConfig
 *       PackageName: "STRING_VALUE", // required
 *       PackageVersion: "STRING_VALUE", // required
 *       MarkLatest: true || false,
 *     },
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   JobTags: [ // JobTagsList
 *     { // JobResourceTags
 *       ResourceType: "STRING_VALUE", // required
 *       Tags: { // TagMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreatePackageImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackageImportJobResponse
 * //   JobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePackageImportJobCommandInput - {@link CreatePackageImportJobCommandInput}
 * @returns {@link CreatePackageImportJobCommandOutput}
 * @see {@link CreatePackageImportJobCommandInput} for command's `input` shape.
 * @see {@link CreatePackageImportJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreatePackageImportJobCommand extends $Command
  .classBuilder<
    CreatePackageImportJobCommandInput,
    CreatePackageImportJobCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "CreatePackageImportJob", {})
  .n("PanoramaClient", "CreatePackageImportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreatePackageImportJobCommand)
  .de(de_CreatePackageImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePackageImportJobRequest;
      output: CreatePackageImportJobResponse;
    };
    sdk: {
      input: CreatePackageImportJobCommandInput;
      output: CreatePackageImportJobCommandOutput;
    };
  };
}
