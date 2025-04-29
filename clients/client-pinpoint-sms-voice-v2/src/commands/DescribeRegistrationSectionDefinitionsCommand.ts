// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeRegistrationSectionDefinitionsRequest,
  DescribeRegistrationSectionDefinitionsResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationSectionDefinitionsCommand,
  se_DescribeRegistrationSectionDefinitionsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationSectionDefinitionsCommand}.
 */
export interface DescribeRegistrationSectionDefinitionsCommandInput
  extends DescribeRegistrationSectionDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationSectionDefinitionsCommand}.
 */
export interface DescribeRegistrationSectionDefinitionsCommandOutput
  extends DescribeRegistrationSectionDefinitionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration section definitions. You can use DescribeRegistrationSectionDefinitions to view the requirements for creating, filling out, and submitting each registration type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationSectionDefinitionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationSectionDefinitionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationSectionDefinitionsRequest
 *   RegistrationType: "STRING_VALUE", // required
 *   SectionPaths: [ // SectionPathList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationSectionDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationSectionDefinitionsResult
 * //   RegistrationType: "STRING_VALUE", // required
 * //   RegistrationSectionDefinitions: [ // RegistrationSectionDefinitionList // required
 * //     { // RegistrationSectionDefinition
 * //       SectionPath: "STRING_VALUE", // required
 * //       DisplayHints: { // RegistrationSectionDisplayHints
 * //         Title: "STRING_VALUE", // required
 * //         ShortDescription: "STRING_VALUE", // required
 * //         LongDescription: "STRING_VALUE",
 * //         DocumentationTitle: "STRING_VALUE",
 * //         DocumentationLink: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationSectionDefinitionsCommandInput - {@link DescribeRegistrationSectionDefinitionsCommandInput}
 * @returns {@link DescribeRegistrationSectionDefinitionsCommandOutput}
 * @see {@link DescribeRegistrationSectionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationSectionDefinitionsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationSectionDefinitionsCommand extends $Command
  .classBuilder<
    DescribeRegistrationSectionDefinitionsCommandInput,
    DescribeRegistrationSectionDefinitionsCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DescribeRegistrationSectionDefinitions", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationSectionDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistrationSectionDefinitionsCommand)
  .de(de_DescribeRegistrationSectionDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationSectionDefinitionsRequest;
      output: DescribeRegistrationSectionDefinitionsResult;
    };
    sdk: {
      input: DescribeRegistrationSectionDefinitionsCommandInput;
      output: DescribeRegistrationSectionDefinitionsCommandOutput;
    };
  };
}
