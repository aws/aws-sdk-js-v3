// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlywheelRequest, DeleteFlywheelResponse } from "../models/models_0";
import { de_DeleteFlywheelCommand, se_DeleteFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFlywheelCommand}.
 */
export interface DeleteFlywheelCommandInput extends DeleteFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlywheelCommand}.
 */
export interface DeleteFlywheelCommandOutput extends DeleteFlywheelResponse, __MetadataBearer {}

/**
 * <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend
 *       does not delete the data lake or the model associated with the flywheel.</p>
 *          <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DeleteFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFlywheelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFlywheelCommandInput - {@link DeleteFlywheelCommandInput}
 * @returns {@link DeleteFlywheelCommandOutput}
 * @see {@link DeleteFlywheelCommandInput} for command's `input` shape.
 * @see {@link DeleteFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DeleteFlywheelCommand extends $Command
  .classBuilder<
    DeleteFlywheelCommandInput,
    DeleteFlywheelCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "DeleteFlywheel", {})
  .n("ComprehendClient", "DeleteFlywheelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFlywheelCommand)
  .de(de_DeleteFlywheelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlywheelRequest;
      output: {};
    };
    sdk: {
      input: DeleteFlywheelCommandInput;
      output: DeleteFlywheelCommandOutput;
    };
  };
}
