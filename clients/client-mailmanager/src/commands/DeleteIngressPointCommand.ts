// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteIngressPointRequest, DeleteIngressPointResponse } from "../models/models_0";
import { de_DeleteIngressPointCommand, se_DeleteIngressPointCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIngressPointCommand}.
 */
export interface DeleteIngressPointCommandInput extends DeleteIngressPointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIngressPointCommand}.
 */
export interface DeleteIngressPointCommandOutput extends DeleteIngressPointResponse, __MetadataBearer {}

/**
 * <p>Delete an ingress endpoint resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteIngressPointCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteIngressPointCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // DeleteIngressPointRequest
 *   IngressPointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIngressPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIngressPointCommandInput - {@link DeleteIngressPointCommandInput}
 * @returns {@link DeleteIngressPointCommandOutput}
 * @see {@link DeleteIngressPointCommandInput} for command's `input` shape.
 * @see {@link DeleteIngressPointCommandOutput} for command's `response` shape.
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
export class DeleteIngressPointCommand extends $Command
  .classBuilder<
    DeleteIngressPointCommandInput,
    DeleteIngressPointCommandOutput,
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
  .s("MailManagerSvc", "DeleteIngressPoint", {})
  .n("MailManagerClient", "DeleteIngressPointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIngressPointCommand)
  .de(de_DeleteIngressPointCommand)
  .build() {}
