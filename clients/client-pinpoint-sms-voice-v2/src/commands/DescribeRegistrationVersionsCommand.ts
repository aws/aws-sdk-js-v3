// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegistrationVersionsRequest, DescribeRegistrationVersionsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationVersionsCommand,
  se_DescribeRegistrationVersionsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationVersionsCommand}.
 */
export interface DescribeRegistrationVersionsCommandInput extends DescribeRegistrationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationVersionsCommand}.
 */
export interface DescribeRegistrationVersionsCommandOutput
  extends DescribeRegistrationVersionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationVersionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationVersionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationVersionsRequest
 *   RegistrationId: "STRING_VALUE", // required
 *   VersionNumbers: [ // RegistrationVersionNumberList
 *     Number("long"),
 *   ],
 *   Filters: [ // RegistrationVersionFilterList
 *     { // RegistrationVersionFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationVersionsResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   RegistrationVersions: [ // RegistrationVersionInformationList // required
 * //     { // RegistrationVersionInformation
 * //       VersionNumber: Number("long"), // required
 * //       RegistrationVersionStatus: "STRING_VALUE", // required
 * //       RegistrationVersionStatusHistory: { // RegistrationVersionStatusHistory
 * //         DraftTimestamp: new Date("TIMESTAMP"), // required
 * //         SubmittedTimestamp: new Date("TIMESTAMP"),
 * //         ReviewingTimestamp: new Date("TIMESTAMP"),
 * //         ApprovedTimestamp: new Date("TIMESTAMP"),
 * //         DiscardedTimestamp: new Date("TIMESTAMP"),
 * //         DeniedTimestamp: new Date("TIMESTAMP"),
 * //         RevokedTimestamp: new Date("TIMESTAMP"),
 * //         ArchivedTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       DeniedReasons: [ // RegistrationDeniedReasonInformationList
 * //         { // RegistrationDeniedReasonInformation
 * //           Reason: "STRING_VALUE", // required
 * //           ShortDescription: "STRING_VALUE", // required
 * //           LongDescription: "STRING_VALUE",
 * //           DocumentationTitle: "STRING_VALUE",
 * //           DocumentationLink: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationVersionsCommandInput - {@link DescribeRegistrationVersionsCommandInput}
 * @returns {@link DescribeRegistrationVersionsCommandOutput}
 * @see {@link DescribeRegistrationVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 * @public
 */
export class DescribeRegistrationVersionsCommand extends $Command
  .classBuilder<
    DescribeRegistrationVersionsCommandInput,
    DescribeRegistrationVersionsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "DescribeRegistrationVersions", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistrationVersionsCommand)
  .de(de_DescribeRegistrationVersionsCommand)
  .build() {}
