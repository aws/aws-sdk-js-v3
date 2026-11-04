// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConfigurationSetsRequest, DescribeConfigurationSetsResult } from "../models/models_0";
import { DescribeConfigurationSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified configuration sets or all in your account.
 *
 * If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.
 *
 * If you specify a configuration set name that isn't valid, an error is returned.
 *
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
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class DescribeConfigurationSetsCommand extends command<DescribeConfigurationSetsCommandInput, DescribeConfigurationSetsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConfigurationSets",
  DescribeConfigurationSets$
) {
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
