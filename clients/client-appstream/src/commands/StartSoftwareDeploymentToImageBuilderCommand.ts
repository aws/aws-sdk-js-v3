// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartSoftwareDeploymentToImageBuilderRequest,
  StartSoftwareDeploymentToImageBuilderResult,
} from "../models/models_0";
import { StartSoftwareDeploymentToImageBuilder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSoftwareDeploymentToImageBuilderCommand}.
 */
export interface StartSoftwareDeploymentToImageBuilderCommandInput extends StartSoftwareDeploymentToImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link StartSoftwareDeploymentToImageBuilderCommand}.
 */
export interface StartSoftwareDeploymentToImageBuilderCommandOutput extends StartSoftwareDeploymentToImageBuilderResult, __MetadataBearer {}

/**
 * Initiates license included applications deployment to an image builder instance.
 *
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
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class StartSoftwareDeploymentToImageBuilderCommand extends command<StartSoftwareDeploymentToImageBuilderCommandInput, StartSoftwareDeploymentToImageBuilderCommandOutput>(
  _ep0,
  _mw0,
  "StartSoftwareDeploymentToImageBuilder",
  StartSoftwareDeploymentToImageBuilder$
) {
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
