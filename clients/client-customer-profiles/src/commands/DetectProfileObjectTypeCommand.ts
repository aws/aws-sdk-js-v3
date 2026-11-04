// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectProfileObjectTypeRequest, DetectProfileObjectTypeResponse } from "../models/models_0";
import { DetectProfileObjectType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetectProfileObjectTypeCommand}.
 */
export interface DetectProfileObjectTypeCommandInput extends DetectProfileObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link DetectProfileObjectTypeCommand}.
 */
export interface DetectProfileObjectTypeCommandOutput extends DetectProfileObjectTypeResponse, __MetadataBearer {}

/**
 * The process of detecting profile object type mapping by using given objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DetectProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DetectProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DetectProfileObjectTypeRequest
 *   Objects: [ // Objects // required
 *     "STRING_VALUE",
 *   ],
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DetectProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // DetectProfileObjectTypeResponse
 * //   DetectedProfileObjectTypes: [ // DetectedProfileObjectTypes
 * //     { // DetectedProfileObjectType
 * //       SourceLastUpdatedTimestampFormat: "STRING_VALUE",
 * //       Fields: { // FieldMap
 * //         "<keys>": { // ObjectTypeField
 * //           Source: "STRING_VALUE",
 * //           Target: "STRING_VALUE",
 * //           ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 * //         },
 * //       },
 * //       Keys: { // KeyMap
 * //         "<keys>": [ // ObjectTypeKeyList
 * //           { // ObjectTypeKey
 * //             StandardIdentifiers: [ // StandardIdentifierList
 * //               "PROFILE" || "ASSET" || "CASE" || "DEVICE" || "WEB_ANALYTICS" || "ORDER" || "COMMUNICATION_RECORD" || "AIR_PREFERENCE" || "HOTEL_PREFERENCE" || "AIR_BOOKING" || "AIR_SEGMENT" || "HOTEL_RESERVATION" || "HOTEL_STAY_REVENUE" || "LOYALTY" || "LOYALTY_TRANSACTION" || "LOYALTY_PROMOTION" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
 * //             ],
 * //             FieldNames: [ // FieldNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectProfileObjectTypeCommandInput - {@link DetectProfileObjectTypeCommandInput}
 * @returns {@link DetectProfileObjectTypeCommandOutput}
 * @see {@link DetectProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DetectProfileObjectTypeCommandOutput} for command's `response` shape.
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
export class DetectProfileObjectTypeCommand extends command<DetectProfileObjectTypeCommandInput, DetectProfileObjectTypeCommandOutput>(
  _ep0,
  _mw0,
  "DetectProfileObjectType",
  DetectProfileObjectType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectProfileObjectTypeRequest;
      output: DetectProfileObjectTypeResponse;
    };
    sdk: {
      input: DetectProfileObjectTypeCommandInput;
      output: DetectProfileObjectTypeCommandOutput;
    };
  };
}
