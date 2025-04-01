// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  CreateIngressPointRequest,
  CreateIngressPointRequestFilterSensitiveLog,
  CreateIngressPointResponse,
} from "../models/models_0";
import { de_CreateIngressPointCommand, se_CreateIngressPointCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIngressPointCommand}.
 */
export interface CreateIngressPointCommandInput extends CreateIngressPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngressPointCommand}.
 */
export interface CreateIngressPointCommandOutput extends CreateIngressPointResponse, __MetadataBearer {}

/**
 * <p>Provision a new ingress endpoint resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateIngressPointCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateIngressPointCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // CreateIngressPointRequest
 *   ClientToken: "STRING_VALUE",
 *   IngressPointName: "STRING_VALUE", // required
 *   Type: "OPEN" || "AUTH", // required
 *   RuleSetId: "STRING_VALUE", // required
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   IngressPointConfiguration: { // IngressPointConfiguration Union: only one key present
 *     SmtpPassword: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateIngressPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngressPointResponse
 * //   IngressPointId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIngressPointCommandInput - {@link CreateIngressPointCommandInput}
 * @returns {@link CreateIngressPointCommandOutput}
 * @see {@link CreateIngressPointCommandInput} for command's `input` shape.
 * @see {@link CreateIngressPointCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @example Create Open IngressPoint
 * ```javascript
 * //
 * const input = {
 *   IngressPointName: "ingressPointName",
 *   RuleSetId: "rs-12345",
 *   Tags: [
 *     {
 *       Key: "key",
 *       Value: "value"
 *     }
 *   ],
 *   TrafficPolicyId: "tp-12345",
 *   Type: "OPEN"
 * };
 * const command = new CreateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IngressPointId: "inp-12345"
 * }
 * *\/
 * ```
 *
 * @example Create Auth IngressPoint with Password
 * ```javascript
 * //
 * const input = {
 *   IngressPointConfiguration: {
 *     SmtpPassword: "smtpPassword"
 *   },
 *   IngressPointName: "ingressPointName",
 *   RuleSetId: "rs-12345",
 *   Tags: [
 *     {
 *       Key: "key",
 *       Value: "value"
 *     }
 *   ],
 *   TrafficPolicyId: "tp-12345",
 *   Type: "AUTH"
 * };
 * const command = new CreateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IngressPointId: "inp-12345"
 * }
 * *\/
 * ```
 *
 * @example Create Auth IngressPoint with SecretsManager Secret
 * ```javascript
 * //
 * const input = {
 *   IngressPointConfiguration: {
 *     SecretArn: "arn:aws:secretsmanager:us-west-2:123456789012:secret:abcde"
 *   },
 *   IngressPointName: "ingressPointName",
 *   RuleSetId: "rs-12345",
 *   Tags: [
 *     {
 *       Key: "key",
 *       Value: "value"
 *     }
 *   ],
 *   TrafficPolicyId: "tp-12345",
 *   Type: "AUTH"
 * };
 * const command = new CreateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IngressPointId: "inp-12345"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateIngressPointCommand extends $Command
  .classBuilder<
    CreateIngressPointCommandInput,
    CreateIngressPointCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "CreateIngressPoint", {})
  .n("MailManagerClient", "CreateIngressPointCommand")
  .f(CreateIngressPointRequestFilterSensitiveLog, void 0)
  .ser(se_CreateIngressPointCommand)
  .de(de_CreateIngressPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngressPointRequest;
      output: CreateIngressPointResponse;
    };
    sdk: {
      input: CreateIngressPointCommandInput;
      output: CreateIngressPointCommandOutput;
    };
  };
}
