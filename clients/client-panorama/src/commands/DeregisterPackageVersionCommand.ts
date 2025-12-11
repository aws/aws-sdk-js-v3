// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterPackageVersionRequest, DeregisterPackageVersionResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { DeregisterPackageVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterPackageVersionCommand}.
 */
export interface DeregisterPackageVersionCommandInput extends DeregisterPackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterPackageVersionCommand}.
 */
export interface DeregisterPackageVersionCommandOutput extends DeregisterPackageVersionResponse, __MetadataBearer {}

/**
 * <p>Deregisters a package version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DeregisterPackageVersionCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DeregisterPackageVersionCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // DeregisterPackageVersionRequest
 *   OwnerAccount: "STRING_VALUE",
 *   PackageId: "STRING_VALUE", // required
 *   PackageVersion: "STRING_VALUE", // required
 *   PatchVersion: "STRING_VALUE", // required
 *   UpdatedLatestPatchVersion: "STRING_VALUE",
 * };
 * const command = new DeregisterPackageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterPackageVersionCommandInput - {@link DeregisterPackageVersionCommandInput}
 * @returns {@link DeregisterPackageVersionCommandOutput}
 * @see {@link DeregisterPackageVersionCommandInput} for command's `input` shape.
 * @see {@link DeregisterPackageVersionCommandOutput} for command's `response` shape.
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
export class DeregisterPackageVersionCommand extends $Command
  .classBuilder<
    DeregisterPackageVersionCommandInput,
    DeregisterPackageVersionCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "DeregisterPackageVersion", {})
  .n("PanoramaClient", "DeregisterPackageVersionCommand")
  .sc(DeregisterPackageVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterPackageVersionRequest;
      output: {};
    };
    sdk: {
      input: DeregisterPackageVersionCommandInput;
      output: DeregisterPackageVersionCommandOutput;
    };
  };
}
