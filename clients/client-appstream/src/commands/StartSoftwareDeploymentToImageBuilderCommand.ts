// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartSoftwareDeploymentToImageBuilderRequest,
  StartSoftwareDeploymentToImageBuilderResult,
} from "../models/models_0";
import {
  de_StartSoftwareDeploymentToImageBuilderCommand,
  se_StartSoftwareDeploymentToImageBuilderCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSoftwareDeploymentToImageBuilderCommand}.
 */
export interface StartSoftwareDeploymentToImageBuilderCommandInput
  extends StartSoftwareDeploymentToImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link StartSoftwareDeploymentToImageBuilderCommand}.
 */
export interface StartSoftwareDeploymentToImageBuilderCommandOutput
  extends StartSoftwareDeploymentToImageBuilderResult,
    __MetadataBearer {}

/**
 * <p>Initiates license included applications deployment to an image builder instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartSoftwareDeploymentToImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartSoftwareDeploymentToImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // StartSoftwareDeploymentToImageBuilderRequest
 *   ImageBuilderName: "STRING_VALUE", // required
 *   RetryFailedDeployments: true || false,
 * };
 * const command = new StartSoftwareDeploymentToImageBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartSoftwareDeploymentToImageBuilderCommandInput - {@link StartSoftwareDeploymentToImageBuilderCommandInput}
 * @returns {@link StartSoftwareDeploymentToImageBuilderCommandOutput}
 * @see {@link StartSoftwareDeploymentToImageBuilderCommandInput} for command's `input` shape.
 * @see {@link StartSoftwareDeploymentToImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class StartSoftwareDeploymentToImageBuilderCommand extends $Command
  .classBuilder<
    StartSoftwareDeploymentToImageBuilderCommandInput,
    StartSoftwareDeploymentToImageBuilderCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "StartSoftwareDeploymentToImageBuilder", {})
  .n("AppStreamClient", "StartSoftwareDeploymentToImageBuilderCommand")
  .f(void 0, void 0)
  .ser(se_StartSoftwareDeploymentToImageBuilderCommand)
  .de(de_StartSoftwareDeploymentToImageBuilderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSoftwareDeploymentToImageBuilderRequest;
      output: {};
    };
    sdk: {
      input: StartSoftwareDeploymentToImageBuilderCommandInput;
      output: StartSoftwareDeploymentToImageBuilderCommandOutput;
    };
  };
}
