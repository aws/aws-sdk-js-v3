// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetProfileObjectTypeRequest,
  GetProfileObjectTypeResponse,
  GetProfileObjectTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetProfileObjectTypeCommand, se_GetProfileObjectTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileObjectTypeCommand}.
 */
export interface GetProfileObjectTypeCommandInput extends GetProfileObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileObjectTypeCommand}.
 */
export interface GetProfileObjectTypeCommandOutput extends GetProfileObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Returns the object types for a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetProfileObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 * };
 * const command = new GetProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileObjectTypeResponse
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
 * @param GetProfileObjectTypeCommandInput - {@link GetProfileObjectTypeCommandInput}
 * @returns {@link GetProfileObjectTypeCommandOutput}
 * @see {@link GetProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeCommandOutput} for command's `response` shape.
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
export class GetProfileObjectTypeCommand extends $Command
  .classBuilder<
    GetProfileObjectTypeCommandInput,
    GetProfileObjectTypeCommandOutput,
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
  .s("CustomerProfiles_20200815", "GetProfileObjectType", {})
  .n("CustomerProfilesClient", "GetProfileObjectTypeCommand")
  .f(void 0, GetProfileObjectTypeResponseFilterSensitiveLog)
  .ser(se_GetProfileObjectTypeCommand)
  .de(de_GetProfileObjectTypeCommand)
  .build() {}
