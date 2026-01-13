// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSpendLimitsRequest, DescribeSpendLimitsResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeSpendLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpendLimitsCommand}.
 */
export interface DescribeSpendLimitsCommandInput extends DescribeSpendLimitsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpendLimitsCommand}.
 */
export interface DescribeSpendLimitsCommandOutput extends DescribeSpendLimitsResult, __MetadataBearer {}

/**
 * <p>Describes the current monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/awssupport-spend-threshold.html"> Requesting increases to your monthly SMS, MMS, or Voice spending quota </a> in the <i>End User Messaging SMS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeSpendLimitsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeSpendLimitsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeSpendLimitsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSpendLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpendLimitsResult
 * //   SpendLimits: [ // SpendLimitList
 * //     { // SpendLimit
 * //       Name: "STRING_VALUE", // required
 * //       EnforcedLimit: Number("long"), // required
 * //       MaxLimit: Number("long"), // required
 * //       Overridden: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSpendLimitsCommandInput - {@link DescribeSpendLimitsCommandInput}
 * @returns {@link DescribeSpendLimitsCommandOutput}
 * @see {@link DescribeSpendLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpendLimitsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
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
export class DescribeSpendLimitsCommand extends $Command
  .classBuilder<
    DescribeSpendLimitsCommandInput,
    DescribeSpendLimitsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeSpendLimits", {})
  .n("PinpointSMSVoiceV2Client", "DescribeSpendLimitsCommand")
  .sc(DescribeSpendLimits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpendLimitsRequest;
      output: DescribeSpendLimitsResult;
    };
    sdk: {
      input: DescribeSpendLimitsCommandInput;
      output: DescribeSpendLimitsCommandOutput;
    };
  };
}
