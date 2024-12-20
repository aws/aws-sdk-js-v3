// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStudioLifecycleConfigRequest, CreateStudioLifecycleConfigResponse } from "../models/models_2";
import { de_CreateStudioLifecycleConfigCommand, se_CreateStudioLifecycleConfigCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStudioLifecycleConfigCommand}.
 */
export interface CreateStudioLifecycleConfigCommandInput extends CreateStudioLifecycleConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateStudioLifecycleConfigCommand}.
 */
export interface CreateStudioLifecycleConfigCommandOutput
  extends CreateStudioLifecycleConfigResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Amazon SageMaker AI Studio Lifecycle Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateStudioLifecycleConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateStudioLifecycleConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateStudioLifecycleConfigRequest
 *   StudioLifecycleConfigName: "STRING_VALUE", // required
 *   StudioLifecycleConfigContent: "STRING_VALUE", // required
 *   StudioLifecycleConfigAppType: "JupyterServer" || "KernelGateway" || "CodeEditor" || "JupyterLab", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStudioLifecycleConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateStudioLifecycleConfigResponse
 * //   StudioLifecycleConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStudioLifecycleConfigCommandInput - {@link CreateStudioLifecycleConfigCommandInput}
 * @returns {@link CreateStudioLifecycleConfigCommandOutput}
 * @see {@link CreateStudioLifecycleConfigCommandInput} for command's `input` shape.
 * @see {@link CreateStudioLifecycleConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateStudioLifecycleConfigCommand extends $Command
  .classBuilder<
    CreateStudioLifecycleConfigCommandInput,
    CreateStudioLifecycleConfigCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateStudioLifecycleConfig", {})
  .n("SageMakerClient", "CreateStudioLifecycleConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateStudioLifecycleConfigCommand)
  .de(de_CreateStudioLifecycleConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStudioLifecycleConfigRequest;
      output: CreateStudioLifecycleConfigResponse;
    };
    sdk: {
      input: CreateStudioLifecycleConfigCommandInput;
      output: CreateStudioLifecycleConfigCommandOutput;
    };
  };
}
