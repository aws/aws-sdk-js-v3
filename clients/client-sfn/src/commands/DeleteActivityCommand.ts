// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/models_0";
import { de_DeleteActivityCommand, se_DeleteActivityCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteActivityCommand}.
 */
export interface DeleteActivityCommandInput extends DeleteActivityInput {}
/**
 * @public
 *
 * The output of {@link DeleteActivityCommand}.
 */
export interface DeleteActivityCommandOutput extends DeleteActivityOutput, __MetadataBearer {}

/**
 * <p>Deletes an activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SFNClient(config);
 * const input = { // DeleteActivityInput
 *   activityArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteActivityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteActivityCommandInput - {@link DeleteActivityCommandInput}
 * @returns {@link DeleteActivityCommandOutput}
 * @see {@link DeleteActivityCommandInput} for command's `input` shape.
 * @see {@link DeleteActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class DeleteActivityCommand extends $Command
  .classBuilder<
    DeleteActivityCommandInput,
    DeleteActivityCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DeleteActivity", {})
  .n("SFNClient", "DeleteActivityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteActivityCommand)
  .de(de_DeleteActivityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteActivityInput;
      output: {};
    };
    sdk: {
      input: DeleteActivityCommandInput;
      output: DeleteActivityCommandOutput;
    };
  };
}
