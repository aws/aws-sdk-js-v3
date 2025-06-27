// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateMessageTemplateRequest, ActivateMessageTemplateResponse } from "../models/models_0";
import { de_ActivateMessageTemplateCommand, se_ActivateMessageTemplateCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateMessageTemplateCommand}.
 */
export interface ActivateMessageTemplateCommandInput extends ActivateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ActivateMessageTemplateCommand}.
 */
export interface ActivateMessageTemplateCommandOutput extends ActivateMessageTemplateResponse, __MetadataBearer {}

/**
 * <p>Activates a specific version of the Amazon Q in Connect message template. After the version is activated, the previous active version will be deactivated automatically. You can use the <code>$ACTIVE_VERSION</code> qualifier later to reference the version that is in active status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ActivateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ActivateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ActivateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new ActivateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ActivateMessageTemplateResponse
 * //   messageTemplateArn: "STRING_VALUE", // required
 * //   messageTemplateId: "STRING_VALUE", // required
 * //   versionNumber: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param ActivateMessageTemplateCommandInput - {@link ActivateMessageTemplateCommandInput}
 * @returns {@link ActivateMessageTemplateCommandOutput}
 * @see {@link ActivateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link ActivateMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ActivateMessageTemplateCommand extends $Command
  .classBuilder<
    ActivateMessageTemplateCommandInput,
    ActivateMessageTemplateCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "ActivateMessageTemplate", {})
  .n("QConnectClient", "ActivateMessageTemplateCommand")
  .f(void 0, void 0)
  .ser(se_ActivateMessageTemplateCommand)
  .de(de_ActivateMessageTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateMessageTemplateRequest;
      output: ActivateMessageTemplateResponse;
    };
    sdk: {
      input: ActivateMessageTemplateCommandInput;
      output: ActivateMessageTemplateCommandOutput;
    };
  };
}
