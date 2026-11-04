// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegistrationAssociationsRequest, ListRegistrationAssociationsResult } from "../models/models_0";
import { ListRegistrationAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListRegistrationAssociationsCommandOutput extends ListRegistrationAssociationsResult, __MetadataBearer {}

/**
 * Retrieve all of the origination identities that are associated with a registration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListRegistrationAssociationsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListRegistrationAssociationsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
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
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
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
export class ListRegistrationAssociationsCommand extends command<ListRegistrationAssociationsCommandInput, ListRegistrationAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRegistrationAssociations",
  ListRegistrationAssociations$
) {
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
