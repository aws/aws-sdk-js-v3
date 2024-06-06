// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteRelayRequest, DeleteRelayResponse } from "../models/models_0";
import { de_DeleteRelayCommand, se_DeleteRelayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRelayCommand}.
 */
export interface DeleteRelayCommandInput extends DeleteRelayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRelayCommand}.
 */
export interface DeleteRelayCommandOutput extends DeleteRelayResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing relay resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteRelayCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteRelayCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // DeleteRelayRequest
 *   RelayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRelayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRelayCommandInput - {@link DeleteRelayCommandInput}
 * @returns {@link DeleteRelayCommandOutput}
 * @see {@link DeleteRelayCommandInput} for command's `input` shape.
 * @see {@link DeleteRelayCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class DeleteRelayCommand extends $Command
  .classBuilder<
    DeleteRelayCommandInput,
    DeleteRelayCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "DeleteRelay", {})
  .n("MailManagerClient", "DeleteRelayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRelayCommand)
  .de(de_DeleteRelayCommand)
  .build() {}
