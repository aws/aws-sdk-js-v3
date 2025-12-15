// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { SendWorkflowStepActionRequest, SendWorkflowStepActionResponse } from "../models/models_0";
import { SendWorkflowStepAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandInput extends SendWorkflowStepActionRequest {}
/**
 * @public
 *
 * The output of {@link SendWorkflowStepActionCommand}.
 */
export interface SendWorkflowStepActionCommandOutput extends SendWorkflowStepActionResponse, __MetadataBearer {}

/**
 * <p>Pauses or resumes image creation when the associated workflow runs a
 * 			<code>WaitForAction</code> step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, SendWorkflowStepActionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, SendWorkflowStepActionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // SendWorkflowStepActionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   action: "RESUME" || "STOP", // required
 *   reason: "STRING_VALUE",
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new SendWorkflowStepActionCommand(input);
 * const response = await client.send(command);
 * // { // SendWorkflowStepActionResponse
 * //   stepExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendWorkflowStepActionCommandInput - {@link SendWorkflowStepActionCommandInput}
 * @returns {@link SendWorkflowStepActionCommandOutput}
 * @see {@link SendWorkflowStepActionCommandInput} for command's `input` shape.
 * @see {@link SendWorkflowStepActionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value that you provided for the specified parameter is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
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
export class SendWorkflowStepActionCommand extends $Command
  .classBuilder<
    SendWorkflowStepActionCommandInput,
    SendWorkflowStepActionCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "SendWorkflowStepAction", {})
  .n("ImagebuilderClient", "SendWorkflowStepActionCommand")
  .sc(SendWorkflowStepAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendWorkflowStepActionRequest;
      output: SendWorkflowStepActionResponse;
    };
    sdk: {
      input: SendWorkflowStepActionCommandInput;
      output: SendWorkflowStepActionCommandOutput;
    };
  };
}
