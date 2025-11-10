// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePackageVersionRequest, DescribePackageVersionResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DescribePackageVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandInput extends DescribePackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageVersionCommand}.
 */
export interface DescribePackageVersionCommandOutput extends DescribePackageVersionResponse, __MetadataBearer {}

/**
 * <p>Returns information about a package version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribePackageVersionCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribePackageVersionCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DescribePackageVersionRequest
 *   OwnerAccount: "STRING_VALUE",
 *   PackageId: "STRING_VALUE", // required
 *   PackageVersion: "STRING_VALUE", // required
 *   PatchVersion: "STRING_VALUE",
 * };
 * const command = new DescribePackageVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageVersionResponse
 * //   OwnerAccount: "STRING_VALUE",
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageArn: "STRING_VALUE",
 * //   PackageName: "STRING_VALUE", // required
 * //   PackageVersion: "STRING_VALUE", // required
 * //   PatchVersion: "STRING_VALUE", // required
 * //   IsLatestPatch: true || false, // required
 * //   Status: "STRING_VALUE", // required
 * //   StatusDescription: "STRING_VALUE",
 * //   RegisteredTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribePackageVersionCommandInput - {@link DescribePackageVersionCommandInput}
 * @returns {@link DescribePackageVersionCommandOutput}
 * @see {@link DescribePackageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribePackageVersionCommandOutput} for command's `response` shape.
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
export class DescribePackageVersionCommand extends $Command
  .classBuilder<
    DescribePackageVersionCommandInput,
    DescribePackageVersionCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DescribePackageVersion", {})
  .n("PanoramaClient", "DescribePackageVersionCommand")
  .sc(DescribePackageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePackageVersionRequest;
      output: DescribePackageVersionResponse;
    };
    sdk: {
      input: DescribePackageVersionCommandInput;
      output: DescribePackageVersionCommandOutput;
    };
  };
}
