// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteChatControlsConfigurationRequest,
  DeleteChatControlsConfigurationResponse,
} from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { DeleteChatControlsConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChatControlsConfigurationCommand}.
 */
export interface DeleteChatControlsConfigurationCommandInput extends DeleteChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChatControlsConfigurationCommand}.
 */
export interface DeleteChatControlsConfigurationCommandOutput
  extends DeleteChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes chat controls configured for an existing Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // DeleteChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChatControlsConfigurationCommandInput - {@link DeleteChatControlsConfigurationCommandInput}
 * @returns {@link DeleteChatControlsConfigurationCommandOutput}
 * @see {@link DeleteChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class DeleteChatControlsConfigurationCommand extends $Command
  .classBuilder<
    DeleteChatControlsConfigurationCommandInput,
    DeleteChatControlsConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "DeleteChatControlsConfiguration", {})
  .n("QBusinessClient", "DeleteChatControlsConfigurationCommand")
  .sc(DeleteChatControlsConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChatControlsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteChatControlsConfigurationCommandInput;
      output: DeleteChatControlsConfigurationCommandOutput;
    };
  };
}
