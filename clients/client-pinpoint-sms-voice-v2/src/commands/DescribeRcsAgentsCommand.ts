// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRcsAgentsRequest, DescribeRcsAgentsResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeRcsAgents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRcsAgentsCommand}.
 */
export interface DescribeRcsAgentsCommandInput extends DescribeRcsAgentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRcsAgentsCommand}.
 */
export interface DescribeRcsAgentsCommandOutput extends DescribeRcsAgentsResult, __MetadataBearer {}

/**
 * <p>Retrieves the specified RCS agents or all RCS agents associated with your Amazon Web Services account.</p> <p>If you specify RCS agent IDs, the output includes information for only the specified RCS agents. If you specify filters, the output includes information for only those RCS agents that meet the filter criteria. If you don't specify RCS agent IDs or filters, the output includes information for all RCS agents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRcsAgentsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRcsAgentsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRcsAgentsRequest
 *   RcsAgentIds: [ // RcsAgentIdList
 *     "STRING_VALUE",
 *   ],
 *   Owner: "STRING_VALUE",
 *   Filters: [ // RcsAgentFilterList
 *     { // RcsAgentFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRcsAgentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRcsAgentsResult
 * //   RcsAgents: [ // RcsAgentInformationList
 * //     { // RcsAgentInformation
 * //       RcsAgentArn: "STRING_VALUE", // required
 * //       RcsAgentId: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //       OptOutListName: "STRING_VALUE",
 * //       SelfManagedOptOutsEnabled: true || false, // required
 * //       TwoWayChannelArn: "STRING_VALUE",
 * //       TwoWayChannelRole: "STRING_VALUE",
 * //       TwoWayEnabled: true || false, // required
 * //       PoolId: "STRING_VALUE",
 * //       TwoWayMediaS3BucketName: "STRING_VALUE",
 * //       TwoWayMediaS3KeyPrefix: "STRING_VALUE",
 * //       TwoWayMediaS3Role: "STRING_VALUE",
 * //       TwoWayRcsEventsEnabled: [ // RcsEventTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       TestingAgent: { // TestingAgentInformation
 * //         Status: "STRING_VALUE", // required
 * //         TestingAgentId: "STRING_VALUE",
 * //         RegistrationId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRcsAgentsCommandInput - {@link DescribeRcsAgentsCommandInput}
 * @returns {@link DescribeRcsAgentsCommandOutput}
 * @see {@link DescribeRcsAgentsCommandInput} for command's `input` shape.
 * @see {@link DescribeRcsAgentsCommandOutput} for command's `response` shape.
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
export class DescribeRcsAgentsCommand extends $Command
  .classBuilder<
    DescribeRcsAgentsCommandInput,
    DescribeRcsAgentsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeRcsAgents", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRcsAgentsCommand")
  .sc(DescribeRcsAgents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRcsAgentsRequest;
      output: DescribeRcsAgentsResult;
    };
    sdk: {
      input: DescribeRcsAgentsCommandInput;
      output: DescribeRcsAgentsCommandOutput;
    };
  };
}
