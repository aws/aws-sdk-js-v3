// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutProfileObjectTypeRequest, PutProfileObjectTypeResponse } from "../models/models_0";
import { PutProfileObjectType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProfileObjectTypeCommand}.
 */
export interface PutProfileObjectTypeCommandInput extends PutProfileObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutProfileObjectTypeCommand}.
 */
export interface PutProfileObjectTypeCommandOutput extends PutProfileObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Defines a ProfileObjectType.</p>
 *          <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">
 *             TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutProfileObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE",
 *   ExpirationDays: Number("int"),
 *   EncryptionKey: "STRING_VALUE",
 *   AllowProfileCreation: true || false,
 *   SourceLastUpdatedTimestampFormat: "STRING_VALUE",
 *   MaxProfileObjectCount: Number("int"),
 *   Fields: { // FieldMap
 *     "<keys>": { // ObjectTypeField
 *       Source: "STRING_VALUE",
 *       Target: "STRING_VALUE",
 *       ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 *     },
 *   },
 *   Keys: { // KeyMap
 *     "<keys>": [ // ObjectTypeKeyList
 *       { // ObjectTypeKey
 *         StandardIdentifiers: [ // StandardIdentifierList
 *           "PROFILE" || "ASSET" || "CASE" || "ORDER" || "COMMUNICATION_RECORD" || "AIR_PREFERENCE" || "HOTEL_PREFERENCE" || "AIR_BOOKING" || "AIR_SEGMENT" || "HOTEL_RESERVATION" || "HOTEL_STAY_REVENUE" || "LOYALTY" || "LOYALTY_TRANSACTION" || "LOYALTY_PROMOTION" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
 *         ],
 *         FieldNames: [ // FieldNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // PutProfileObjectTypeResponse
 * //   ObjectTypeName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   TemplateId: "STRING_VALUE",
 * //   ExpirationDays: Number("int"),
 * //   EncryptionKey: "STRING_VALUE",
 * //   AllowProfileCreation: true || false,
 * //   SourceLastUpdatedTimestampFormat: "STRING_VALUE",
 * //   MaxProfileObjectCount: Number("int"),
 * //   MaxAvailableProfileObjectCount: Number("int"),
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
 * //           "PROFILE" || "ASSET" || "CASE" || "ORDER" || "COMMUNICATION_RECORD" || "AIR_PREFERENCE" || "HOTEL_PREFERENCE" || "AIR_BOOKING" || "AIR_SEGMENT" || "HOTEL_RESERVATION" || "HOTEL_STAY_REVENUE" || "LOYALTY" || "LOYALTY_TRANSACTION" || "LOYALTY_PROMOTION" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
 * //         ],
 * //         FieldNames: [ // FieldNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutProfileObjectTypeCommandInput - {@link PutProfileObjectTypeCommandInput}
 * @returns {@link PutProfileObjectTypeCommandOutput}
 * @see {@link PutProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class PutProfileObjectTypeCommand extends $Command
  .classBuilder<
    PutProfileObjectTypeCommandInput,
    PutProfileObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "PutProfileObjectType", {})
  .n("CustomerProfilesClient", "PutProfileObjectTypeCommand")
  .sc(PutProfileObjectType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProfileObjectTypeRequest;
      output: PutProfileObjectTypeResponse;
    };
    sdk: {
      input: PutProfileObjectTypeCommandInput;
      output: PutProfileObjectTypeCommandOutput;
    };
  };
}
