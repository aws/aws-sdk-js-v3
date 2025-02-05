// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterPackageVersionRequest, DeregisterPackageVersionResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DeregisterPackageVersionCommand, se_DeregisterPackageVersionCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OmniCloudServiceLambda", "DeregisterPackageVersion", {})
  .n("PanoramaClient", "DeregisterPackageVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterPackageVersionCommand)
  .de(de_DeregisterPackageVersionCommand)
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
