// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutProfileObjectTypeRequest,
  PutProfileObjectTypeRequestFilterSensitiveLog,
  PutProfileObjectTypeResponse,
  PutProfileObjectTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PutProfileObjectTypeCommand, se_PutProfileObjectTypeCommand } from "../protocols/Aws_restJson1";

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
 *          TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
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
 *           "PROFILE" || "ASSET" || "CASE" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY" || "ORDER",
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
 * //           "PROFILE" || "ASSET" || "CASE" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY" || "ORDER",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "PutProfileObjectType", {})
  .n("CustomerProfilesClient", "PutProfileObjectTypeCommand")
  .f(PutProfileObjectTypeRequestFilterSensitiveLog, PutProfileObjectTypeResponseFilterSensitiveLog)
  .ser(se_PutProfileObjectTypeCommand)
  .de(de_PutProfileObjectTypeCommand)
  .build() {}
