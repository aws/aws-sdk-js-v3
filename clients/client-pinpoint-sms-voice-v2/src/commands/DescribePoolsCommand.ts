// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribePoolsRequest, DescribePoolsResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribePools } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePoolsCommand}.
 */
export interface DescribePoolsCommandInput extends DescribePoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePoolsCommand}.
 */
export interface DescribePoolsCommandOutput extends DescribePoolsResult, __MetadataBearer {}

/**
 * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePoolsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePoolsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribePoolsRequest
 *   PoolIds: [ // PoolIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // PoolFilterList
 *     { // PoolFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Owner: "STRING_VALUE",
 * };
 * const command = new DescribePoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePoolsResult
 * //   Pools: [ // PoolInformationList
 * //     { // PoolInformation
 * //       PoolArn: "STRING_VALUE", // required
 * //       PoolId: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       MessageType: "STRING_VALUE", // required
 * //       TwoWayEnabled: true || false, // required
 * //       TwoWayChannelArn: "STRING_VALUE",
 * //       TwoWayChannelRole: "STRING_VALUE",
 * //       SelfManagedOptOutsEnabled: true || false, // required
 * //       OptOutListName: "STRING_VALUE", // required
 * //       SharedRoutesEnabled: true || false, // required
 * //       DeletionProtectionEnabled: true || false, // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePoolsCommandInput - {@link DescribePoolsCommandInput}
 * @returns {@link DescribePoolsCommandOutput}
 * @see {@link DescribePoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePoolsCommandOutput} for command's `response` shape.
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
export class DescribePoolsCommand extends $Command
  .classBuilder<
    DescribePoolsCommandInput,
    DescribePoolsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribePools", {})
  .n("PinpointSMSVoiceV2Client", "DescribePoolsCommand")
  .sc(DescribePools)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePoolsRequest;
      output: DescribePoolsResult;
    };
    sdk: {
      input: DescribePoolsCommandInput;
      output: DescribePoolsCommandOutput;
    };
  };
}
