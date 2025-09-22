// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeRegistrationFieldDefinitionsRequest,
  DescribeRegistrationFieldDefinitionsResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeRegistrationFieldDefinitions } from "../schemas/schemas_4_Registration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationFieldDefinitionsCommand}.
 */
export interface DescribeRegistrationFieldDefinitionsCommandInput extends DescribeRegistrationFieldDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationFieldDefinitionsCommand}.
 */
export interface DescribeRegistrationFieldDefinitionsCommandOutput
  extends DescribeRegistrationFieldDefinitionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationFieldDefinitionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationFieldDefinitionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationFieldDefinitionsRequest
 *   RegistrationType: "STRING_VALUE", // required
 *   SectionPath: "STRING_VALUE",
 *   FieldPaths: [ // FieldPathList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationFieldDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationFieldDefinitionsResult
 * //   RegistrationType: "STRING_VALUE", // required
 * //   RegistrationFieldDefinitions: [ // RegistrationFieldDefinitionList // required
 * //     { // RegistrationFieldDefinition
 * //       SectionPath: "STRING_VALUE", // required
 * //       FieldPath: "STRING_VALUE", // required
 * //       FieldType: "STRING_VALUE", // required
 * //       FieldRequirement: "STRING_VALUE", // required
 * //       SelectValidation: { // SelectValidation
 * //         MinChoices: Number("int"), // required
 * //         MaxChoices: Number("int"), // required
 * //         Options: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       TextValidation: { // TextValidation
 * //         MinLength: Number("int"), // required
 * //         MaxLength: Number("int"), // required
 * //         Pattern: "STRING_VALUE", // required
 * //       },
 * //       DisplayHints: { // RegistrationFieldDisplayHints
 * //         Title: "STRING_VALUE", // required
 * //         ShortDescription: "STRING_VALUE", // required
 * //         LongDescription: "STRING_VALUE",
 * //         DocumentationTitle: "STRING_VALUE",
 * //         DocumentationLink: "STRING_VALUE",
 * //         SelectOptionDescriptions: [ // SelectOptionDescriptionsList
 * //           { // SelectOptionDescription
 * //             Option: "STRING_VALUE", // required
 * //             Title: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //           },
 * //         ],
 * //         TextValidationDescription: "STRING_VALUE",
 * //         ExampleTextValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationFieldDefinitionsCommandInput - {@link DescribeRegistrationFieldDefinitionsCommandInput}
 * @returns {@link DescribeRegistrationFieldDefinitionsCommandOutput}
 * @see {@link DescribeRegistrationFieldDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationFieldDefinitionsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationFieldDefinitionsCommand extends $Command
  .classBuilder<
    DescribeRegistrationFieldDefinitionsCommandInput,
    DescribeRegistrationFieldDefinitionsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeRegistrationFieldDefinitions", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationFieldDefinitionsCommand")
  .sc(DescribeRegistrationFieldDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationFieldDefinitionsRequest;
      output: DescribeRegistrationFieldDefinitionsResult;
    };
    sdk: {
      input: DescribeRegistrationFieldDefinitionsCommandInput;
      output: DescribeRegistrationFieldDefinitionsCommandOutput;
    };
  };
}
