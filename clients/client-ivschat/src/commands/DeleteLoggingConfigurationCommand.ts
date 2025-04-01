// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { DeleteLoggingConfigurationRequest } from "../models/models_0";
import { de_DeleteLoggingConfigurationCommand, se_DeleteLoggingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandInput extends DeleteLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLoggingConfigurationCommand}.
 */
export interface DeleteLoggingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified logging configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DeleteLoggingConfigurationCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DeleteLoggingConfigurationCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // DeleteLoggingConfigurationRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLoggingConfigurationCommandInput - {@link DeleteLoggingConfigurationCommandInput}
 * @returns {@link DeleteLoggingConfigurationCommandOutput}
 * @see {@link DeleteLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 *
 * @public
 */
export class DeleteLoggingConfigurationCommand extends $Command
  .classBuilder<
    DeleteLoggingConfigurationCommandInput,
    DeleteLoggingConfigurationCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "DeleteLoggingConfiguration", {})
  .n("IvschatClient", "DeleteLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLoggingConfigurationCommand)
  .de(de_DeleteLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLoggingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLoggingConfigurationCommandInput;
      output: DeleteLoggingConfigurationCommandOutput;
    };
  };
}
