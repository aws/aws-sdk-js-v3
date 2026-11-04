// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProfileObjectTypeTemplateRequest, GetProfileObjectTypeTemplateResponse } from "../models/models_0";
import { GetProfileObjectTypeTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProfileObjectTypeTemplateCommand}.
 */
export interface GetProfileObjectTypeTemplateCommandInput extends GetProfileObjectTypeTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileObjectTypeTemplateCommand}.
 */
export interface GetProfileObjectTypeTemplateCommandOutput extends GetProfileObjectTypeTemplateResponse, __MetadataBearer {}

/**
 * Returns the template information for a specific object type.
 *
 * A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetProfileObjectTypeTemplateRequest
 *   TemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetProfileObjectTypeTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileObjectTypeTemplateResponse
 * //   TemplateId: "STRING_VALUE",
 * //   SourceName: "STRING_VALUE",
 * //   SourceObject: "STRING_VALUE",
 * //   DefaultMaxProfileObjectCount: Number("int"),
 * //   DefaultMaxProfileObjectCountEffectiveAfter: new Date("TIMESTAMP"),
 * //   StoreOnly: true || false,
 * //   AllowProfileCreation: true || false,
 * //   SourceLastUpdatedTimestampFormat: "STRING_VALUE",
 * //   Fields: { // FieldMap
 * //     "<keys>": { // ObjectTypeField
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 * //     },
 * //   },
 * //   Keys: { // KeyMap
 * //     "<keys>": [ // ObjectTypeKeyList
 * //       { // ObjectTypeKey
 * //         StandardIdentifiers: [ // StandardIdentifierList
 * //           "PROFILE" || "ASSET" || "CASE" || "DEVICE" || "WEB_ANALYTICS" || "ORDER" || "COMMUNICATION_RECORD" || "AIR_PREFERENCE" || "HOTEL_PREFERENCE" || "AIR_BOOKING" || "AIR_SEGMENT" || "HOTEL_RESERVATION" || "HOTEL_STAY_REVENUE" || "LOYALTY" || "LOYALTY_TRANSACTION" || "LOYALTY_PROMOTION" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
 * //         ],
 * //         FieldNames: [ // FieldNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileObjectTypeTemplateCommandInput - {@link GetProfileObjectTypeTemplateCommandInput}
 * @returns {@link GetProfileObjectTypeTemplateCommandOutput}
 * @see {@link GetProfileObjectTypeTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeTemplateCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class GetProfileObjectTypeTemplateCommand extends command<GetProfileObjectTypeTemplateCommandInput, GetProfileObjectTypeTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetProfileObjectTypeTemplate",
  GetProfileObjectTypeTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileObjectTypeTemplateRequest;
      output: GetProfileObjectTypeTemplateResponse;
    };
    sdk: {
      input: GetProfileObjectTypeTemplateCommandInput;
      output: GetProfileObjectTypeTemplateCommandOutput;
    };
  };
}
