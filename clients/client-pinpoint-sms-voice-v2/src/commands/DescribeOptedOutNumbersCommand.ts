// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOptedOutNumbersRequest, DescribeOptedOutNumbersResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeOptedOutNumbers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOptedOutNumbersCommand}.
 */
export interface DescribeOptedOutNumbersCommandInput extends DescribeOptedOutNumbersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOptedOutNumbersCommand}.
 */
export interface DescribeOptedOutNumbersCommandOutput extends DescribeOptedOutNumbersResult, __MetadataBearer {}

/**
 * <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an exception is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeOptedOutNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeOptedOutNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeOptedOutNumbersRequest
 *   OptOutListName: "STRING_VALUE", // required
 *   OptedOutNumbers: [ // OptedOutNumberList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // OptedOutFilterList
 *     { // OptedOutFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeOptedOutNumbersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOptedOutNumbersResult
 * //   OptOutListArn: "STRING_VALUE",
 * //   OptOutListName: "STRING_VALUE",
 * //   OptedOutNumbers: [ // OptedOutNumberInformationList
 * //     { // OptedOutNumberInformation
 * //       OptedOutNumber: "STRING_VALUE", // required
 * //       OptedOutTimestamp: new Date("TIMESTAMP"), // required
 * //       EndUserOptedOut: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOptedOutNumbersCommandInput - {@link DescribeOptedOutNumbersCommandInput}
 * @returns {@link DescribeOptedOutNumbersCommandOutput}
 * @see {@link DescribeOptedOutNumbersCommandInput} for command's `input` shape.
 * @see {@link DescribeOptedOutNumbersCommandOutput} for command's `response` shape.
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
export class DescribeOptedOutNumbersCommand extends $Command
  .classBuilder<
    DescribeOptedOutNumbersCommandInput,
    DescribeOptedOutNumbersCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeOptedOutNumbers", {})
  .n("PinpointSMSVoiceV2Client", "DescribeOptedOutNumbersCommand")
  .sc(DescribeOptedOutNumbers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOptedOutNumbersRequest;
      output: DescribeOptedOutNumbersResult;
    };
    sdk: {
      input: DescribeOptedOutNumbersCommandInput;
      output: DescribeOptedOutNumbersCommandOutput;
    };
  };
}
