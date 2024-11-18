// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetProfileObjectTypeTemplateRequest,
  GetProfileObjectTypeTemplateResponse,
  GetProfileObjectTypeTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetProfileObjectTypeTemplateCommand,
  se_GetProfileObjectTypeTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetProfileObjectTypeTemplateCommandOutput
  extends GetProfileObjectTypeTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Returns the template information for a specific object type.</p>
 *          <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or
 *          “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API,
 *          with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeTemplateCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
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
 * //           "PROFILE" || "ASSET" || "CASE" || "ORDER" || "COMMUNICATION_RECORD" || "UNIQUE" || "SECONDARY" || "LOOKUP_ONLY" || "NEW_ONLY",
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
export class GetProfileObjectTypeTemplateCommand extends $Command
  .classBuilder<
    GetProfileObjectTypeTemplateCommandInput,
    GetProfileObjectTypeTemplateCommandOutput,
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
  .s("CustomerProfiles_20200815", "GetProfileObjectTypeTemplate", {})
  .n("CustomerProfilesClient", "GetProfileObjectTypeTemplateCommand")
  .f(void 0, GetProfileObjectTypeTemplateResponseFilterSensitiveLog)
  .ser(se_GetProfileObjectTypeTemplateCommand)
  .de(de_GetProfileObjectTypeTemplateCommand)
  .build() {
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
