// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteModelInvocationLoggingConfigurationRequest,
  DeleteModelInvocationLoggingConfigurationResponse,
} from "../models/models_1";
import {
  de_DeleteModelInvocationLoggingConfigurationCommand,
  se_DeleteModelInvocationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteModelInvocationLoggingConfigurationCommand}.
 */
export interface DeleteModelInvocationLoggingConfigurationCommandInput
  extends DeleteModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelInvocationLoggingConfigurationCommand}.
 */
export interface DeleteModelInvocationLoggingConfigurationCommandOutput
  extends DeleteModelInvocationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Delete the invocation logging. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = {};
 * const command = new DeleteModelInvocationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteModelInvocationLoggingConfigurationCommandInput - {@link DeleteModelInvocationLoggingConfigurationCommandInput}
 * @returns {@link DeleteModelInvocationLoggingConfigurationCommandOutput}
 * @see {@link DeleteModelInvocationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteModelInvocationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class DeleteModelInvocationLoggingConfigurationCommand extends $Command
  .classBuilder<
    DeleteModelInvocationLoggingConfigurationCommandInput,
    DeleteModelInvocationLoggingConfigurationCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "DeleteModelInvocationLoggingConfiguration", {})
  .n("BedrockClient", "DeleteModelInvocationLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteModelInvocationLoggingConfigurationCommand)
  .de(de_DeleteModelInvocationLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteModelInvocationLoggingConfigurationCommandInput;
      output: DeleteModelInvocationLoggingConfigurationCommandOutput;
    };
  };
}
