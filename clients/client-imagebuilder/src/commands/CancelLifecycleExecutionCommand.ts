// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { CancelLifecycleExecutionRequest, CancelLifecycleExecutionResponse } from "../models/models_0";
import { de_CancelLifecycleExecutionCommand, se_CancelLifecycleExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelLifecycleExecutionCommand}.
 */
export interface CancelLifecycleExecutionCommandInput extends CancelLifecycleExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelLifecycleExecutionCommand}.
 */
export interface CancelLifecycleExecutionCommandOutput extends CancelLifecycleExecutionResponse, __MetadataBearer {}

/**
 * <p>Cancel a specific image lifecycle policy runtime instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CancelLifecycleExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CancelLifecycleExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CancelLifecycleExecutionRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CancelLifecycleExecutionCommand(input);
 * const response = await client.send(command);
 * // { // CancelLifecycleExecutionResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelLifecycleExecutionCommandInput - {@link CancelLifecycleExecutionCommandInput}
 * @returns {@link CancelLifecycleExecutionCommandOutput}
 * @see {@link CancelLifecycleExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelLifecycleExecutionCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class CancelLifecycleExecutionCommand extends $Command
  .classBuilder<
    CancelLifecycleExecutionCommandInput,
    CancelLifecycleExecutionCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "CancelLifecycleExecution", {})
  .n("ImagebuilderClient", "CancelLifecycleExecutionCommand")
  .f(void 0, void 0)
  .ser(se_CancelLifecycleExecutionCommand)
  .de(de_CancelLifecycleExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelLifecycleExecutionRequest;
      output: CancelLifecycleExecutionResponse;
    };
    sdk: {
      input: CancelLifecycleExecutionCommandInput;
      output: CancelLifecycleExecutionCommandOutput;
    };
  };
}
