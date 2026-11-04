// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSpendLimitsRequest, DescribeSpendLimitsResult } from "../models/models_0";
import { DescribeSpendLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the current monthly spend limits for sending voice and text messages.
 *
 * When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see [Requesting increases to your monthly SMS, MMS, or Voice spending quota](https://docs.aws.amazon.com/sms-voice/latest/userguide/awssupport-spend-threshold.html) in the *End User Messaging SMS User Guide*.
 *
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
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
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
export class DescribeSpendLimitsCommand extends command<DescribeSpendLimitsCommandInput, DescribeSpendLimitsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSpendLimits",
  DescribeSpendLimits$
) {
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
