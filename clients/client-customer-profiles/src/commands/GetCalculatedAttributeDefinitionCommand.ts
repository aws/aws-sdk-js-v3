// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCalculatedAttributeDefinitionRequest,
  GetCalculatedAttributeDefinitionResponse,
  GetCalculatedAttributeDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetCalculatedAttributeDefinitionCommand,
  se_GetCalculatedAttributeDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCalculatedAttributeDefinitionCommand}.
 */
export interface GetCalculatedAttributeDefinitionCommandInput extends GetCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculatedAttributeDefinitionCommand}.
 */
export interface GetCalculatedAttributeDefinitionCommandOutput
  extends GetCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Provides more information on a calculated attribute definition for Customer Profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 * };
 * const command = new GetCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculatedAttributeDefinitionResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE",
 * //   Conditions: { // Conditions
 * //     Range: { // Range
 * //       Value: Number("int"), // required
 * //       Unit: "DAYS", // required
 * //     },
 * //     ObjectCount: Number("int"),
 * //     Threshold: { // Threshold
 * //       Value: "STRING_VALUE", // required
 * //       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 * //     },
 * //   },
 * //   AttributeDetails: { // AttributeDetails
 * //     Attributes: [ // AttributeList // required
 * //       { // AttributeItem
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Expression: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCalculatedAttributeDefinitionCommandInput - {@link GetCalculatedAttributeDefinitionCommandInput}
 * @returns {@link GetCalculatedAttributeDefinitionCommandOutput}
 * @see {@link GetCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
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
export class GetCalculatedAttributeDefinitionCommand extends $Command
  .classBuilder<
    GetCalculatedAttributeDefinitionCommandInput,
    GetCalculatedAttributeDefinitionCommandOutput,
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
  .s("CustomerProfiles_20200815", "GetCalculatedAttributeDefinition", {})
  .n("CustomerProfilesClient", "GetCalculatedAttributeDefinitionCommand")
  .f(void 0, GetCalculatedAttributeDefinitionResponseFilterSensitiveLog)
  .ser(se_GetCalculatedAttributeDefinitionCommand)
  .de(de_GetCalculatedAttributeDefinitionCommand)
  .build() {}
