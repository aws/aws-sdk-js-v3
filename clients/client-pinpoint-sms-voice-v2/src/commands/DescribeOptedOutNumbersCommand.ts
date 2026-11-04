// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeOptedOutNumbersRequest, DescribeOptedOutNumbersResult } from "../models/models_0";
import { DescribeOptedOutNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.
 *
 * If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.
 *
 * If you specify an opted out number that isn't valid, an exception is returned.
 *
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
export class DescribeOptedOutNumbersCommand extends command<DescribeOptedOutNumbersCommandInput, DescribeOptedOutNumbersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOptedOutNumbers",
  DescribeOptedOutNumbers$
) {
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
