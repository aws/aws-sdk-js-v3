// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfigurationSetRequest, GetConfigurationSetResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetConfigurationSetCommand, se_GetConfigurationSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationSetCommand}.
 */
export interface GetConfigurationSetCommandInput extends GetConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationSetCommand}.
 */
export interface GetConfigurationSetCommandOutput extends GetConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Get information about an existing configuration set, including the dedicated IP pool
 *             that it's associated with, whether or not it's enabled for sending email, and
 *             more.</p>
 *         <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can
 *             apply to the emails you send. You apply a configuration set to an email by including a
 *             reference to the configuration set in the headers of the email. When you apply a
 *             configuration set to an email, all of the rules in that configuration set are applied to
 *             the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetConfigurationSetCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetConfigurationSetCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetConfigurationSetRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationSetResponse
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   TrackingOptions: { // TrackingOptions
 * //     CustomRedirectDomain: "STRING_VALUE", // required
 * //   },
 * //   DeliveryOptions: { // DeliveryOptions
 * //     TlsPolicy: "REQUIRE" || "OPTIONAL",
 * //     SendingPoolName: "STRING_VALUE",
 * //   },
 * //   ReputationOptions: { // ReputationOptions
 * //     ReputationMetricsEnabled: true || false,
 * //     LastFreshStart: new Date("TIMESTAMP"),
 * //   },
 * //   SendingOptions: { // SendingOptions
 * //     SendingEnabled: true || false,
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetConfigurationSetCommandInput - {@link GetConfigurationSetCommandInput}
 * @returns {@link GetConfigurationSetCommandOutput}
 * @see {@link GetConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class GetConfigurationSetCommand extends $Command
  .classBuilder<
    GetConfigurationSetCommandInput,
    GetConfigurationSetCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPinpointEmailService", "GetConfigurationSet", {})
  .n("PinpointEmailClient", "GetConfigurationSetCommand")
  .f(void 0, void 0)
  .ser(se_GetConfigurationSetCommand)
  .de(de_GetConfigurationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationSetRequest;
      output: GetConfigurationSetResponse;
    };
    sdk: {
      input: GetConfigurationSetCommandInput;
      output: GetConfigurationSetCommandOutput;
    };
  };
}
