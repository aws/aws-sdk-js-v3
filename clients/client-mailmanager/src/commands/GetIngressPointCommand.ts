// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetIngressPointRequest, GetIngressPointResponse } from "../models/models_0";
import { de_GetIngressPointCommand, se_GetIngressPointCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIngressPointCommand}.
 */
export interface GetIngressPointCommandInput extends GetIngressPointRequest {}
/**
 * @public
 *
 * The output of {@link GetIngressPointCommand}.
 */
export interface GetIngressPointCommandOutput extends GetIngressPointResponse, __MetadataBearer {}

/**
 * <p>Fetch ingress endpoint resource attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetIngressPointCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetIngressPointCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // GetIngressPointRequest
 *   IngressPointId: "STRING_VALUE", // required
 * };
 * const command = new GetIngressPointCommand(input);
 * const response = await client.send(command);
 * // { // GetIngressPointResponse
 * //   IngressPointId: "STRING_VALUE", // required
 * //   IngressPointName: "STRING_VALUE", // required
 * //   IngressPointArn: "STRING_VALUE",
 * //   Status: "PROVISIONING" || "DEPROVISIONING" || "UPDATING" || "ACTIVE" || "CLOSED" || "FAILED",
 * //   Type: "OPEN" || "AUTH",
 * //   ARecord: "STRING_VALUE",
 * //   RuleSetId: "STRING_VALUE",
 * //   TrafficPolicyId: "STRING_VALUE",
 * //   IngressPointAuthConfiguration: { // IngressPointAuthConfiguration
 * //     IngressPointPasswordConfiguration: { // IngressPointPasswordConfiguration
 * //       SmtpPasswordVersion: "STRING_VALUE",
 * //       PreviousSmtpPasswordVersion: "STRING_VALUE",
 * //       PreviousSmtpPasswordExpiryTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     SecretArn: "STRING_VALUE",
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetIngressPointCommandInput - {@link GetIngressPointCommandInput}
 * @returns {@link GetIngressPointCommandOutput}
 * @see {@link GetIngressPointCommandInput} for command's `input` shape.
 * @see {@link GetIngressPointCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
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
 * @example Get Open IngressPoint
 * ```javascript
 * //
 * const input = {
 *   IngressPointId: "inp-12345"
 * };
 * const command = new GetIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARecord: "abcde123.prod.us-east-1.email-border.ses.aws.a2z.com",
 *   IngressPointArn: "arn:aws:ses:us-east-1:123456789012:mailmanager-ingress-point/inp-12345",
 *   IngressPointId: "inp-12345",
 *   IngressPointName: "ingressPointName",
 *   Status: "ACTIVE",
 *   Type: "OPEN"
 * }
 * *\/
 * ```
 *
 * @example Get Auth IngressPoint
 * ```javascript
 * //
 * const input = {
 *   IngressPointId: "inp-12345"
 * };
 * const command = new GetIngressPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARecord: "abcde123.prod.us-east-1.email-border.ses.aws.a2z.com",
 *   IngressPointArn: "arn:aws:ses:us-east-1:123456789012:mailmanager-ingress-point/inp-12345",
 *   IngressPointAuthConfiguration: {
 *     SecretArn: "arn:aws:secretsmanager:us-west-2:123456789012:secret:abcde"
 *   },
 *   IngressPointId: "inp-12345",
 *   IngressPointName: "ingressPointName",
 *   Status: "ACTIVE",
 *   Type: "AUTH"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetIngressPointCommand extends $Command
  .classBuilder<
    GetIngressPointCommandInput,
    GetIngressPointCommandOutput,
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
  .s("MailManagerSvc", "GetIngressPoint", {})
  .n("MailManagerClient", "GetIngressPointCommand")
  .f(void 0, void 0)
  .ser(se_GetIngressPointCommand)
  .de(de_GetIngressPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngressPointRequest;
      output: GetIngressPointResponse;
    };
    sdk: {
      input: GetIngressPointCommandInput;
      output: GetIngressPointCommandOutput;
    };
  };
}
