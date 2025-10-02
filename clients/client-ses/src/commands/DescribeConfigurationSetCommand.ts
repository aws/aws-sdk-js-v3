// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationSetRequest, DescribeConfigurationSetResponse } from "../models/models_0";
import { de_DescribeConfigurationSetCommand, se_DescribeConfigurationSetCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationSetCommand}.
 */
export interface DescribeConfigurationSetCommandInput extends DescribeConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationSetCommand}.
 */
export interface DescribeConfigurationSetCommandOutput extends DescribeConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the specified configuration set. For information about using
 *             configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html">Amazon SES Developer
 *             Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeConfigurationSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeConfigurationSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // DescribeConfigurationSetRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   ConfigurationSetAttributeNames: [ // ConfigurationSetAttributeList
 *     "eventDestinations" || "trackingOptions" || "deliveryOptions" || "reputationOptions",
 *   ],
 * };
 * const command = new DescribeConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationSetResponse
 * //   ConfigurationSet: { // ConfigurationSet
 * //     Name: "STRING_VALUE", // required
 * //   },
 * //   EventDestinations: [ // EventDestinations
 * //     { // EventDestination
 * //       Name: "STRING_VALUE", // required
 * //       Enabled: true || false,
 * //       MatchingEventTypes: [ // EventTypes // required
 * //         "send" || "reject" || "bounce" || "complaint" || "delivery" || "open" || "click" || "renderingFailure",
 * //       ],
 * //       KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //         IAMRoleARN: "STRING_VALUE", // required
 * //         DeliveryStreamARN: "STRING_VALUE", // required
 * //       },
 * //       CloudWatchDestination: { // CloudWatchDestination
 * //         DimensionConfigurations: [ // CloudWatchDimensionConfigurations // required
 * //           { // CloudWatchDimensionConfiguration
 * //             DimensionName: "STRING_VALUE", // required
 * //             DimensionValueSource: "messageTag" || "emailHeader" || "linkTag", // required
 * //             DefaultDimensionValue: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       SNSDestination: { // SNSDestination
 * //         TopicARN: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   TrackingOptions: { // TrackingOptions
 * //     CustomRedirectDomain: "STRING_VALUE",
 * //   },
 * //   DeliveryOptions: { // DeliveryOptions
 * //     TlsPolicy: "Require" || "Optional",
 * //   },
 * //   ReputationOptions: { // ReputationOptions
 * //     SendingEnabled: true || false,
 * //     ReputationMetricsEnabled: true || false,
 * //     LastFreshStart: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationSetCommandInput - {@link DescribeConfigurationSetCommandInput}
 * @returns {@link DescribeConfigurationSetCommandOutput}
 * @see {@link DescribeConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @public
 */
export class DescribeConfigurationSetCommand extends $Command
  .classBuilder<
    DescribeConfigurationSetCommandInput,
    DescribeConfigurationSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "DescribeConfigurationSet", {})
  .n("SESClient", "DescribeConfigurationSetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationSetCommand)
  .de(de_DescribeConfigurationSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationSetRequest;
      output: DescribeConfigurationSetResponse;
    };
    sdk: {
      input: DescribeConfigurationSetCommandInput;
      output: DescribeConfigurationSetCommandOutput;
    };
  };
}
