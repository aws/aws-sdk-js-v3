// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegistrationsRequest, DescribeRegistrationsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_DescribeRegistrationsCommand, se_DescribeRegistrationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationsCommand}.
 */
export interface DescribeRegistrationsCommandInput extends DescribeRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationsCommand}.
 */
export interface DescribeRegistrationsCommandOutput extends DescribeRegistrationsResult, __MetadataBearer {}

/**
 * <p>Retrieves the specified registrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationsRequest
 *   RegistrationIds: [ // RegistrationIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // RegistrationFilterList
 *     { // RegistrationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationsResult
 * //   Registrations: [ // RegistrationInformationList // required
 * //     { // RegistrationInformation
 * //       RegistrationArn: "STRING_VALUE", // required
 * //       RegistrationId: "STRING_VALUE", // required
 * //       RegistrationType: "STRING_VALUE", // required
 * //       RegistrationStatus: "STRING_VALUE", // required
 * //       CurrentVersionNumber: Number("long"), // required
 * //       ApprovedVersionNumber: Number("long"),
 * //       LatestDeniedVersionNumber: Number("long"),
 * //       AdditionalAttributes: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationsCommandInput - {@link DescribeRegistrationsCommandInput}
 * @returns {@link DescribeRegistrationsCommandOutput}
 * @see {@link DescribeRegistrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationsCommand extends $Command
  .classBuilder<
    DescribeRegistrationsCommandInput,
    DescribeRegistrationsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "DescribeRegistrations", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistrationsCommand)
  .de(de_DescribeRegistrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationsRequest;
      output: DescribeRegistrationsResult;
    };
    sdk: {
      input: DescribeRegistrationsCommandInput;
      output: DescribeRegistrationsCommandOutput;
    };
  };
}
