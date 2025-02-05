// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterPackageVersionRequest, RegisterPackageVersionResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_RegisterPackageVersionCommand, se_RegisterPackageVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterPackageVersionCommand}.
 */
export interface RegisterPackageVersionCommandInput extends RegisterPackageVersionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterPackageVersionCommand}.
 */
export interface RegisterPackageVersionCommandOutput extends RegisterPackageVersionResponse, __MetadataBearer {}

/**
 * <p>Registers a package version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, RegisterPackageVersionCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, RegisterPackageVersionCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PanoramaClient(config);
 * const input = { // RegisterPackageVersionRequest
 *   OwnerAccount: "STRING_VALUE",
 *   PackageId: "STRING_VALUE", // required
 *   PackageVersion: "STRING_VALUE", // required
 *   PatchVersion: "STRING_VALUE", // required
 *   MarkLatest: true || false,
 * };
 * const command = new RegisterPackageVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterPackageVersionCommandInput - {@link RegisterPackageVersionCommandInput}
 * @returns {@link RegisterPackageVersionCommandOutput}
 * @see {@link RegisterPackageVersionCommandInput} for command's `input` shape.
 * @see {@link RegisterPackageVersionCommandOutput} for command's `response` shape.
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
export class RegisterPackageVersionCommand extends $Command
  .classBuilder<
    RegisterPackageVersionCommandInput,
    RegisterPackageVersionCommandOutput,
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
  .s("OmniCloudServiceLambda", "RegisterPackageVersion", {})
  .n("PanoramaClient", "RegisterPackageVersionCommand")
  .f(void 0, void 0)
  .ser(se_RegisterPackageVersionCommand)
  .de(de_RegisterPackageVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterPackageVersionRequest;
      output: {};
    };
    sdk: {
      input: RegisterPackageVersionCommandInput;
      output: RegisterPackageVersionCommandOutput;
    };
  };
}
