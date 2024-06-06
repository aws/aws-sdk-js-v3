// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMapRunInput, UpdateMapRunOutput } from "../models/models_0";
import { de_UpdateMapRunCommand, se_UpdateMapRunCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMapRunCommand}.
 */
export interface UpdateMapRunCommandInput extends UpdateMapRunInput {}
/**
 * @public
 *
 * The output of {@link UpdateMapRunCommand}.
 */
export interface UpdateMapRunCommandOutput extends UpdateMapRunOutput, __MetadataBearer {}

/**
 * <p>Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateMapRunCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateMapRunCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // UpdateMapRunInput
 *   mapRunArn: "STRING_VALUE", // required
 *   maxConcurrency: Number("int"),
 *   toleratedFailurePercentage: Number("float"),
 *   toleratedFailureCount: Number("long"),
 * };
 * const command = new UpdateMapRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMapRunCommandInput - {@link UpdateMapRunCommandInput}
 * @returns {@link UpdateMapRunCommandOutput}
 * @see {@link UpdateMapRunCommandInput} for command's `input` shape.
 * @see {@link UpdateMapRunCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 * @public
 */
export class UpdateMapRunCommand extends $Command
  .classBuilder<
    UpdateMapRunCommandInput,
    UpdateMapRunCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "UpdateMapRun", {})
  .n("SFNClient", "UpdateMapRunCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMapRunCommand)
  .de(de_UpdateMapRunCommand)
  .build() {}
