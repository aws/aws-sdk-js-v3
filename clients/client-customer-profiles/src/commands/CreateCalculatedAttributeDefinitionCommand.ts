// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCalculatedAttributeDefinitionRequest,
  CreateCalculatedAttributeDefinitionRequestFilterSensitiveLog,
  CreateCalculatedAttributeDefinitionResponse,
  CreateCalculatedAttributeDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateCalculatedAttributeDefinitionCommand,
  se_CreateCalculatedAttributeDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCalculatedAttributeDefinitionCommand}.
 */
export interface CreateCalculatedAttributeDefinitionCommandInput extends CreateCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCalculatedAttributeDefinitionCommand}.
 */
export interface CreateCalculatedAttributeDefinitionCommandOutput
  extends CreateCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new calculated attribute definition. After creation, new object data ingested
 *          into Customer Profiles will be included in the calculated attribute, which can be retrieved
 *          for a profile using the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeForProfile.html">GetCalculatedAttributeForProfile</a> API.
 *          Defining a calculated attribute makes it available for all profiles within a domain. Each
 *          calculated attribute can only reference one <code>ObjectType</code> and at most, two fields
 *          from that <code>ObjectType</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   AttributeDetails: { // AttributeDetails
 *     Attributes: [ // AttributeList // required
 *       { // AttributeItem
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *     Expression: "STRING_VALUE", // required
 *   },
 *   Conditions: { // Conditions
 *     Range: { // Range
 *       Value: Number("int"), // required
 *       Unit: "DAYS", // required
 *     },
 *     ObjectCount: Number("int"),
 *     Threshold: { // Threshold
 *       Value: "STRING_VALUE", // required
 *       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 *     },
 *   },
 *   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCalculatedAttributeDefinitionResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   AttributeDetails: { // AttributeDetails
 * //     Attributes: [ // AttributeList // required
 * //       { // AttributeItem
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Expression: "STRING_VALUE", // required
 * //   },
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
 * //   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCalculatedAttributeDefinitionCommandInput - {@link CreateCalculatedAttributeDefinitionCommandInput}
 * @returns {@link CreateCalculatedAttributeDefinitionCommandOutput}
 * @see {@link CreateCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
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
export class CreateCalculatedAttributeDefinitionCommand extends $Command
  .classBuilder<
    CreateCalculatedAttributeDefinitionCommandInput,
    CreateCalculatedAttributeDefinitionCommandOutput,
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
  .s("CustomerProfiles_20200815", "CreateCalculatedAttributeDefinition", {})
  .n("CustomerProfilesClient", "CreateCalculatedAttributeDefinitionCommand")
  .f(
    CreateCalculatedAttributeDefinitionRequestFilterSensitiveLog,
    CreateCalculatedAttributeDefinitionResponseFilterSensitiveLog
  )
  .ser(se_CreateCalculatedAttributeDefinitionCommand)
  .de(de_CreateCalculatedAttributeDefinitionCommand)
  .build() {}
