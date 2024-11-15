// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRegistrationAssociationsRequest, ListRegistrationAssociationsResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_ListRegistrationAssociationsCommand,
  se_ListRegistrationAssociationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegistrationAssociationsCommand}.
 */
export interface ListRegistrationAssociationsCommandInput extends ListRegistrationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistrationAssociationsCommand}.
 */
export interface ListRegistrationAssociationsCommandOutput
  extends ListRegistrationAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieve all of the origination identities that are associated with a registration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListRegistrationAssociationsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListRegistrationAssociationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ListRegistrationAssociationsRequest
 *   RegistrationId: "STRING_VALUE", // required
 *   Filters: [ // RegistrationAssociationFilterList
 *     { // RegistrationAssociationFilter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRegistrationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistrationAssociationsResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   RegistrationType: "STRING_VALUE", // required
 * //   RegistrationAssociations: [ // RegistrationAssociationMetadataList // required
 * //     { // RegistrationAssociationMetadata
 * //       ResourceArn: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegistrationAssociationsCommandInput - {@link ListRegistrationAssociationsCommandInput}
 * @returns {@link ListRegistrationAssociationsCommandOutput}
 * @see {@link ListRegistrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListRegistrationAssociationsCommandOutput} for command's `response` shape.
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
export class ListRegistrationAssociationsCommand extends $Command
  .classBuilder<
    ListRegistrationAssociationsCommandInput,
    ListRegistrationAssociationsCommandOutput,
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
  .s("PinpointSMSVoiceV2", "ListRegistrationAssociations", {})
  .n("PinpointSMSVoiceV2Client", "ListRegistrationAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListRegistrationAssociationsCommand)
  .de(de_ListRegistrationAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistrationAssociationsRequest;
      output: ListRegistrationAssociationsResult;
    };
    sdk: {
      input: ListRegistrationAssociationsCommandInput;
      output: ListRegistrationAssociationsCommandOutput;
    };
  };
}
