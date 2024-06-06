// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  UpdateIngressPointRequest,
  UpdateIngressPointRequestFilterSensitiveLog,
  UpdateIngressPointResponse,
} from "../models/models_0";
import { de_UpdateIngressPointCommand, se_UpdateIngressPointCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIngressPointCommand}.
 */
export interface UpdateIngressPointCommandInput extends UpdateIngressPointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIngressPointCommand}.
 */
export interface UpdateIngressPointCommandOutput extends UpdateIngressPointResponse, __MetadataBearer {}

/**
 * <p>Update attributes of a provisioned ingress endpoint resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, UpdateIngressPointCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, UpdateIngressPointCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // UpdateIngressPointRequest
 *   IngressPointId: "STRING_VALUE", // required
 *   IngressPointName: "STRING_VALUE",
 *   StatusToUpdate: "ACTIVE" || "CLOSED",
 *   RuleSetId: "STRING_VALUE",
 *   TrafficPolicyId: "STRING_VALUE",
 *   IngressPointConfiguration: { // IngressPointConfiguration Union: only one key present
 *     SmtpPassword: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIngressPointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIngressPointCommandInput - {@link UpdateIngressPointCommandInput}
 * @returns {@link UpdateIngressPointCommandOutput}
 * @see {@link UpdateIngressPointCommandInput} for command's `input` shape.
 * @see {@link UpdateIngressPointCommandOutput} for command's `response` shape.
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
export class UpdateIngressPointCommand extends $Command
  .classBuilder<
    UpdateIngressPointCommandInput,
    UpdateIngressPointCommandOutput,
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
  .s("MailManagerSvc", "UpdateIngressPoint", {})
  .n("MailManagerClient", "UpdateIngressPointCommand")
  .f(UpdateIngressPointRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateIngressPointCommand)
  .de(de_UpdateIngressPointCommand)
  .build() {}
