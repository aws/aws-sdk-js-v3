// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { DeleteRecordingConfigurationRequest } from "../models/models_0";
import {
  de_DeleteRecordingConfigurationCommand,
  se_DeleteRecordingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecordingConfigurationCommand}.
 */
export interface DeleteRecordingConfigurationCommandInput extends DeleteRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecordingConfigurationCommand}.
 */
export interface DeleteRecordingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the recording configuration for the specified ARN.</p>
 *          <p>If you try to delete a recording configuration that is associated with a channel, you will
 *       get an error (409 ConflictException). To avoid this, for all channels that reference the
 *       recording configuration, first use <a>UpdateChannel</a> to set the
 *         <code>recordingConfigurationArn</code> field to an empty string, then use
 *       DeleteRecordingConfiguration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // DeleteRecordingConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecordingConfigurationCommandInput - {@link DeleteRecordingConfigurationCommandInput}
 * @returns {@link DeleteRecordingConfigurationCommandOutput}
 * @see {@link DeleteRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class DeleteRecordingConfigurationCommand extends $Command
  .classBuilder<
    DeleteRecordingConfigurationCommandInput,
    DeleteRecordingConfigurationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "DeleteRecordingConfiguration", {})
  .n("IvsClient", "DeleteRecordingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecordingConfigurationCommand)
  .de(de_DeleteRecordingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecordingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecordingConfigurationCommandInput;
      output: DeleteRecordingConfigurationCommandOutput;
    };
  };
}
