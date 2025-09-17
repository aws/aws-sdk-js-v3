// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateMessageTemplateRequest, DeactivateMessageTemplateResponse } from "../models/models_1";
import { de_DeactivateMessageTemplateCommand, se_DeactivateMessageTemplateCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateMessageTemplateCommand}.
 */
export interface DeactivateMessageTemplateCommandInput extends DeactivateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateMessageTemplateCommand}.
 */
export interface DeactivateMessageTemplateCommandOutput extends DeactivateMessageTemplateResponse, __MetadataBearer {}

/**
 * <p>Deactivates a specific version of the Amazon Q in Connect message template . After the version is deactivated, you can no longer use the <code>$ACTIVE_VERSION</code> qualifier to reference the version in active status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeactivateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeactivateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeactivateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   versionNumber: Number("long"), // required
 * };
 * const command = new DeactivateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateMessageTemplateResponse
 * //   messageTemplateArn: "STRING_VALUE", // required
 * //   messageTemplateId: "STRING_VALUE", // required
 * //   versionNumber: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param DeactivateMessageTemplateCommandInput - {@link DeactivateMessageTemplateCommandInput}
 * @returns {@link DeactivateMessageTemplateCommandOutput}
 * @see {@link DeactivateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link DeactivateMessageTemplateCommandOutput} for command's `response` shape.
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
export class DeactivateMessageTemplateCommand extends $Command
  .classBuilder<
    DeactivateMessageTemplateCommandInput,
    DeactivateMessageTemplateCommandOutput,
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
  .s("WisdomService", "DeactivateMessageTemplate", {})
  .n("QConnectClient", "DeactivateMessageTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateMessageTemplateCommand)
  .de(de_DeactivateMessageTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateMessageTemplateRequest;
      output: DeactivateMessageTemplateResponse;
    };
    sdk: {
      input: DeactivateMessageTemplateCommandInput;
      output: DeactivateMessageTemplateCommandOutput;
    };
  };
}
