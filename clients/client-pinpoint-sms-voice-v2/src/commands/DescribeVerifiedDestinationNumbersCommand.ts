// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeVerifiedDestinationNumbersRequest,
  DescribeVerifiedDestinationNumbersResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeVerifiedDestinationNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedDestinationNumbersCommand}.
 */
export interface DescribeVerifiedDestinationNumbersCommandInput extends DescribeVerifiedDestinationNumbersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedDestinationNumbersCommand}.
 */
export interface DescribeVerifiedDestinationNumbersCommandOutput
  extends DescribeVerifiedDestinationNumbersResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified verified destination numbers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeVerifiedDestinationNumbersCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeVerifiedDestinationNumbersCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeVerifiedDestinationNumbersRequest
 *   VerifiedDestinationNumberIds: [ // VerifiedDestinationNumberIdList
 *     "STRING_VALUE",
 *   ],
 *   DestinationPhoneNumbers: [ // DestinationPhoneNumberList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // VerifiedDestinationNumberFilterList
 *     { // VerifiedDestinationNumberFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVerifiedDestinationNumbersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedDestinationNumbersResult
 * //   VerifiedDestinationNumbers: [ // VerifiedDestinationNumberInformationList // required
 * //     { // VerifiedDestinationNumberInformation
 * //       VerifiedDestinationNumberArn: "STRING_VALUE", // required
 * //       VerifiedDestinationNumberId: "STRING_VALUE", // required
 * //       DestinationPhoneNumber: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedDestinationNumbersCommandInput - {@link DescribeVerifiedDestinationNumbersCommandInput}
 * @returns {@link DescribeVerifiedDestinationNumbersCommandOutput}
 * @see {@link DescribeVerifiedDestinationNumbersCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedDestinationNumbersCommandOutput} for command's `response` shape.
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
export class DescribeVerifiedDestinationNumbersCommand extends $Command
  .classBuilder<
    DescribeVerifiedDestinationNumbersCommandInput,
    DescribeVerifiedDestinationNumbersCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeVerifiedDestinationNumbers", {})
  .n("PinpointSMSVoiceV2Client", "DescribeVerifiedDestinationNumbersCommand")
  .sc(DescribeVerifiedDestinationNumbers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVerifiedDestinationNumbersRequest;
      output: DescribeVerifiedDestinationNumbersResult;
    };
    sdk: {
      input: DescribeVerifiedDestinationNumbersCommandInput;
      output: DescribeVerifiedDestinationNumbersCommandOutput;
    };
  };
}
