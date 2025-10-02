// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegistrationAttachmentsRequest, DescribeRegistrationAttachmentsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationAttachmentsCommand,
  se_DescribeRegistrationAttachmentsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationAttachmentsCommand}.
 */
export interface DescribeRegistrationAttachmentsCommandInput extends DescribeRegistrationAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationAttachmentsCommand}.
 */
export interface DescribeRegistrationAttachmentsCommandOutput
  extends DescribeRegistrationAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationAttachmentsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationAttachmentsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationAttachmentsRequest
 *   RegistrationAttachmentIds: [ // RegistrationAttachmentIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // RegistrationAttachmentFilterList
 *     { // RegistrationAttachmentFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationAttachmentsResult
 * //   RegistrationAttachments: [ // RegistrationAttachmentsInformationList // required
 * //     { // RegistrationAttachmentsInformation
 * //       RegistrationAttachmentArn: "STRING_VALUE", // required
 * //       RegistrationAttachmentId: "STRING_VALUE", // required
 * //       AttachmentStatus: "STRING_VALUE", // required
 * //       AttachmentUploadErrorReason: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationAttachmentsCommandInput - {@link DescribeRegistrationAttachmentsCommandInput}
 * @returns {@link DescribeRegistrationAttachmentsCommandOutput}
 * @see {@link DescribeRegistrationAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationAttachmentsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationAttachmentsCommand extends $Command
  .classBuilder<
    DescribeRegistrationAttachmentsCommandInput,
    DescribeRegistrationAttachmentsCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DescribeRegistrationAttachments", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationAttachmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistrationAttachmentsCommand)
  .de(de_DescribeRegistrationAttachmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationAttachmentsRequest;
      output: DescribeRegistrationAttachmentsResult;
    };
    sdk: {
      input: DescribeRegistrationAttachmentsCommandInput;
      output: DescribeRegistrationAttachmentsCommandOutput;
    };
  };
}
