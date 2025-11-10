// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { UpdateIngressPointRequest, UpdateIngressPointResponse } from "../models/models_0";
import { UpdateIngressPoint } from "../schemas/schemas_0";

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
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
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
 *
 * @example Update Open/Auth IngressPoint with new Name
 * ```javascript
 * //
 * const input = {
 *   IngressPointId: "inp-12345",
 *   IngressPointName: "ingressPointNewName"
 * };
 * const command = new UpdateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update Open/Auth IngressPoint with new RuleSetId / TrafficPolicyId
 * ```javascript
 * //
 * const input = {
 *   IngressPointId: "inp-12345",
 *   RuleSetId: "rs-12345",
 *   TrafficPolicyId: "tp-12345"
 * };
 * const command = new UpdateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update Auth IngressPoint with new SmtpPassword
 * ```javascript
 * //
 * const input = {
 *   IngressPointConfiguration: {
 *     SmtpPassword: "newSmtpPassword"
 *   },
 *   IngressPointId: "inp-12345"
 * };
 * const command = new UpdateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update Auth IngressPoint with new SecretArn
 * ```javascript
 * //
 * const input = {
 *   IngressPointConfiguration: {
 *     SecretArn: "arn:aws:secretsmanager:us-west-2:123456789012:secret:abcde"
 *   },
 *   IngressPointId: "inp-12345"
 * };
 * const command = new UpdateIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "UpdateIngressPoint", {})
  .n("MailManagerClient", "UpdateIngressPointCommand")
  .sc(UpdateIngressPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIngressPointRequest;
      output: {};
    };
    sdk: {
      input: UpdateIngressPointCommandInput;
      output: UpdateIngressPointCommandOutput;
    };
  };
}
