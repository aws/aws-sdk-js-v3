// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePackageRequest, DescribePackageResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribePackage } from "../schemas/schemas_5_Package";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageCommand}.
 */
export interface DescribePackageCommandInput extends DescribePackageRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageCommand}.
 */
export interface DescribePackageCommandOutput extends DescribePackageResponse, __MetadataBearer {}

/**
 * <p>Returns information about a package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageRequest
 *   PackageId: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageResponse
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   StorageLocation: { // StorageLocation
 * //     Bucket: "STRING_VALUE", // required
 * //     RepoPrefixLocation: "STRING_VALUE", // required
 * //     GeneratedPrefixLocation: "STRING_VALUE", // required
 * //     BinaryPrefixLocation: "STRING_VALUE", // required
 * //     ManifestPrefixLocation: "STRING_VALUE", // required
 * //   },
 * //   ReadAccessPrincipalArns: [ // PrincipalArnsList
 * //     "STRING_VALUE",
 * //   ],
 * //   WriteAccessPrincipalArns: [
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePackageCommandInput - {@link DescribePackageCommandInput}
 * @returns {@link DescribePackageCommandOutput}
 * @see {@link DescribePackageCommandInput} for command's `input` shape.
 * @see {@link DescribePackageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
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
export class DescribePackageCommand extends $Command
  .classBuilder<
    DescribePackageCommandInput,
    DescribePackageCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribePackage", {})
  .n("PanoramaClient", "DescribePackageCommand")
  .sc(DescribePackage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePackageRequest;
      output: DescribePackageResponse;
    };
    sdk: {
      input: DescribePackageCommandInput;
      output: DescribePackageCommandOutput;
    };
  };
}
