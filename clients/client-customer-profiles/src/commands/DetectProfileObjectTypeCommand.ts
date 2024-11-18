// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectProfileObjectTypeRequest,
  DetectProfileObjectTypeRequestFilterSensitiveLog,
  DetectProfileObjectTypeResponse,
  DetectProfileObjectTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectProfileObjectTypeCommand, se_DetectProfileObjectTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>The process of detecting profile object type mapping by using given objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DetectProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DetectProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
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
 * //               "PROFILE" || "ASSET" || "CASE" || "ORDER" || "COMMUNICATION_RECORD" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
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
export class DetectProfileObjectTypeCommand extends $Command
  .classBuilder<
    DetectProfileObjectTypeCommandInput,
    DetectProfileObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "DetectProfileObjectType", {})
  .n("CustomerProfilesClient", "DetectProfileObjectTypeCommand")
  .f(DetectProfileObjectTypeRequestFilterSensitiveLog, DetectProfileObjectTypeResponseFilterSensitiveLog)
  .ser(se_DetectProfileObjectTypeCommand)
  .de(de_DetectProfileObjectTypeCommand)
  .build() {
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
