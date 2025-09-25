// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigurationSetsRequest, DescribeConfigurationSetsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeConfigurationSets } from "../schemas/schemas_8_Sender";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationSetsCommand}.
 */
export interface DescribeConfigurationSetsCommandInput extends DescribeConfigurationSetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationSetsCommand}.
 */
export interface DescribeConfigurationSetsCommandOutput extends DescribeConfigurationSetsResult, __MetadataBearer {}

/**
 * <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeConfigurationSetsRequest
 *   ConfigurationSetNames: [ // ConfigurationSetNameList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // ConfigurationSetFilterList
 *     { // ConfigurationSetFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationSetsResult
 * //   ConfigurationSets: [ // ConfigurationSetInformationList
 * //     { // ConfigurationSetInformation
 * //       ConfigurationSetArn: "STRING_VALUE", // required
 * //       ConfigurationSetName: "STRING_VALUE", // required
 * //       EventDestinations: [ // EventDestinationList // required
 * //         { // EventDestination
 * //           EventDestinationName: "STRING_VALUE", // required
 * //           Enabled: true || false, // required
 * //           MatchingEventTypes: [ // EventTypeList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           CloudWatchLogsDestination: { // CloudWatchLogsDestination
 * //             IamRoleArn: "STRING_VALUE", // required
 * //             LogGroupArn: "STRING_VALUE", // required
 * //           },
 * //           KinesisFirehoseDestination: { // KinesisFirehoseDestination
 * //             IamRoleArn: "STRING_VALUE", // required
 * //             DeliveryStreamArn: "STRING_VALUE", // required
 * //           },
 * //           SnsDestination: { // SnsDestination
 * //             TopicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       DefaultMessageType: "STRING_VALUE",
 * //       DefaultSenderId: "STRING_VALUE",
 * //       DefaultMessageFeedbackEnabled: true || false,
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       ProtectConfigurationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationSetsCommandInput - {@link DescribeConfigurationSetsCommandInput}
 * @returns {@link DescribeConfigurationSetsCommandOutput}
 * @see {@link DescribeConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class DescribeConfigurationSetsCommand extends $Command
  .classBuilder<
    DescribeConfigurationSetsCommandInput,
    DescribeConfigurationSetsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeConfigurationSets", {})
  .n("PinpointSMSVoiceV2Client", "DescribeConfigurationSetsCommand")
  .sc(DescribeConfigurationSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationSetsRequest;
      output: DescribeConfigurationSetsResult;
    };
    sdk: {
      input: DescribeConfigurationSetsCommandInput;
      output: DescribeConfigurationSetsCommandOutput;
    };
  };
}
