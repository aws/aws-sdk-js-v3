// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { SendCisSessionTelemetryRequest, SendCisSessionTelemetryResponse } from "../models/models_1";
import { de_SendCisSessionTelemetryCommand, se_SendCisSessionTelemetryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendCisSessionTelemetryCommand}.
 */
export interface SendCisSessionTelemetryCommandInput extends SendCisSessionTelemetryRequest {}
/**
 * @public
 *
 * The output of {@link SendCisSessionTelemetryCommand}.
 */
export interface SendCisSessionTelemetryCommandOutput extends SendCisSessionTelemetryResponse, __MetadataBearer {}

/**
 * <p> Sends a CIS session telemetry. This API is used by the Amazon Inspector SSM plugin to
 *          communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls
 *          this API to start a CIS scan session for the scan ID supplied by the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, SendCisSessionTelemetryCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, SendCisSessionTelemetryCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // SendCisSessionTelemetryRequest
 *   scanJobId: "STRING_VALUE", // required
 *   sessionToken: "STRING_VALUE", // required
 *   messages: [ // CisSessionMessages // required
 *     { // CisSessionMessage
 *       ruleId: "STRING_VALUE", // required
 *       status: "FAILED" || "PASSED" || "NOT_EVALUATED" || "INFORMATIONAL" || "UNKNOWN" || "NOT_APPLICABLE" || "ERROR", // required
 *       cisRuleDetails: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *   ],
 * };
 * const command = new SendCisSessionTelemetryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendCisSessionTelemetryCommandInput - {@link SendCisSessionTelemetryCommandInput}
 * @returns {@link SendCisSessionTelemetryCommandOutput}
 * @see {@link SendCisSessionTelemetryCommandInput} for command's `input` shape.
 * @see {@link SendCisSessionTelemetryCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by
 *          concurrent requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example Sample SendCisSessionTelemetry Call
 * ```javascript
 * //
 * const input = {
 *   messages: [
 *     {
 *       cisRuleDetails: "dGVzdCBleGFtcGxlCg==",
 *       ruleId: "1.12.1",
 *       status: "FAILED"
 *     },
 *     {
 *       cisRuleDetails: "dGVzdCBleGFtcGxlCg==dGVzdCBleGFtcGxlCg",
 *       ruleId: "1.2.1",
 *       status: "PASSED"
 *     }
 *   ],
 *   scanJobId: "624b746d-e080-44ae-8c1d-48e653365a38",
 *   sessionToken: "624b746d-e080-44ae-8c1d-48e653365a31"
 * };
 * const command = new SendCisSessionTelemetryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SendCisSessionTelemetryCommand extends $Command
  .classBuilder<
    SendCisSessionTelemetryCommandInput,
    SendCisSessionTelemetryCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "SendCisSessionTelemetry", {})
  .n("Inspector2Client", "SendCisSessionTelemetryCommand")
  .f(void 0, void 0)
  .ser(se_SendCisSessionTelemetryCommand)
  .de(de_SendCisSessionTelemetryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendCisSessionTelemetryRequest;
      output: {};
    };
    sdk: {
      input: SendCisSessionTelemetryCommandInput;
      output: SendCisSessionTelemetryCommandOutput;
    };
  };
}
