// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeRegistrationTypeDefinitionsRequest,
  DescribeRegistrationTypeDefinitionsResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DescribeRegistrationTypeDefinitions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationTypeDefinitionsCommand}.
 */
export interface DescribeRegistrationTypeDefinitionsCommandInput extends DescribeRegistrationTypeDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationTypeDefinitionsCommand}.
 */
export interface DescribeRegistrationTypeDefinitionsCommandOutput
  extends DescribeRegistrationTypeDefinitionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration type definitions. You can use DescribeRegistrationTypeDefinitions to view the requirements for creating, filling out, and submitting each registration type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationTypeDefinitionsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationTypeDefinitionsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationTypeDefinitionsRequest
 *   RegistrationTypes: [ // RegistrationTypeList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // RegistrationTypeFilterList
 *     { // RegistrationTypeFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationTypeDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationTypeDefinitionsResult
 * //   RegistrationTypeDefinitions: [ // RegistrationTypeDefinitionList // required
 * //     { // RegistrationTypeDefinition
 * //       RegistrationType: "STRING_VALUE", // required
 * //       SupportedAssociations: [ // SupportedAssociationList
 * //         { // SupportedAssociation
 * //           ResourceType: "STRING_VALUE", // required
 * //           IsoCountryCode: "STRING_VALUE",
 * //           AssociationBehavior: "STRING_VALUE", // required
 * //           DisassociationBehavior: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       DisplayHints: { // RegistrationTypeDisplayHints
 * //         Title: "STRING_VALUE", // required
 * //         ShortDescription: "STRING_VALUE",
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
 * @param DescribeRegistrationTypeDefinitionsCommandInput - {@link DescribeRegistrationTypeDefinitionsCommandInput}
 * @returns {@link DescribeRegistrationTypeDefinitionsCommandOutput}
 * @see {@link DescribeRegistrationTypeDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationTypeDefinitionsCommandOutput} for command's `response` shape.
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
export class DescribeRegistrationTypeDefinitionsCommand extends $Command
  .classBuilder<
    DescribeRegistrationTypeDefinitionsCommandInput,
    DescribeRegistrationTypeDefinitionsCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DescribeRegistrationTypeDefinitions", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationTypeDefinitionsCommand")
  .sc(DescribeRegistrationTypeDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationTypeDefinitionsRequest;
      output: DescribeRegistrationTypeDefinitionsResult;
    };
    sdk: {
      input: DescribeRegistrationTypeDefinitionsCommandInput;
      output: DescribeRegistrationTypeDefinitionsCommandOutput;
    };
  };
}
