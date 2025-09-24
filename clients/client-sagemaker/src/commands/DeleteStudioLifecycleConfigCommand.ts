// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStudioLifecycleConfigRequest } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteStudioLifecycleConfig } from "../schemas/schemas_101_Lifecycle";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStudioLifecycleConfigCommand}.
 */
export interface DeleteStudioLifecycleConfigCommandInput extends DeleteStudioLifecycleConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStudioLifecycleConfigCommand}.
 */
export interface DeleteStudioLifecycleConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the Amazon SageMaker AI Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteStudioLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteStudioLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteStudioLifecycleConfigRequest
 *   StudioLifecycleConfigName: "STRING_VALUE", // required
 * };
 * const command = new DeleteStudioLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStudioLifecycleConfigCommandInput - {@link DeleteStudioLifecycleConfigCommandInput}
 * @returns {@link DeleteStudioLifecycleConfigCommandOutput}
 * @see {@link DeleteStudioLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteStudioLifecycleConfigCommand extends $Command
  .classBuilder<
    DeleteStudioLifecycleConfigCommandInput,
    DeleteStudioLifecycleConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteStudioLifecycleConfig", {})
  .n("SageMakerClient", "DeleteStudioLifecycleConfigCommand")
  .sc(DeleteStudioLifecycleConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStudioLifecycleConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteStudioLifecycleConfigCommandInput;
      output: DeleteStudioLifecycleConfigCommandOutput;
    };
  };
}
