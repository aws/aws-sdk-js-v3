// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSegmentDefinitionRequest,
  CreateSegmentDefinitionRequestFilterSensitiveLog,
  CreateSegmentDefinitionResponse,
  CreateSegmentDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateSegmentDefinitionCommand, se_CreateSegmentDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSegmentDefinitionCommand}.
 */
export interface CreateSegmentDefinitionCommandInput extends CreateSegmentDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSegmentDefinitionCommand}.
 */
export interface CreateSegmentDefinitionCommandOutput extends CreateSegmentDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates a segment definition associated to the given domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateSegmentDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateSegmentDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateSegmentDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SegmentGroups: { // SegmentGroup
 *     Groups: [ // SegmentGroupList
 *       { // Group
 *         Dimensions: [ // DimensionList
 *           { // Dimension Union: only one key present
 *             ProfileAttributes: { // ProfileAttributes
 *               AccountNumber: { // ProfileDimension
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // Values // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               AdditionalInformation: { // ExtraLengthValueProfileDimension
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // ExtraLengthValues // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               FirstName: {
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               LastName: {
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MiddleName: {
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               GenderString: {
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               PartyTypeString: "<ProfileDimension>",
 *               BirthDate: { // DateDimension
 *                 DimensionType: "BEFORE" || "AFTER" || "BETWEEN" || "NOT_BETWEEN" || "ON", // required
 *                 Values: [ // DateValues // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               PhoneNumber: "<ProfileDimension>",
 *               BusinessName: "<ProfileDimension>",
 *               BusinessPhoneNumber: "<ProfileDimension>",
 *               HomePhoneNumber: "<ProfileDimension>",
 *               MobilePhoneNumber: "<ProfileDimension>",
 *               EmailAddress: "<ProfileDimension>",
 *               PersonalEmailAddress: "<ProfileDimension>",
 *               BusinessEmailAddress: "<ProfileDimension>",
 *               Address: { // AddressDimension
 *                 City: "<ProfileDimension>",
 *                 Country: "<ProfileDimension>",
 *                 County: "<ProfileDimension>",
 *                 PostalCode: "<ProfileDimension>",
 *                 Province: "<ProfileDimension>",
 *                 State: "<ProfileDimension>",
 *               },
 *               ShippingAddress: {
 *                 City: "<ProfileDimension>",
 *                 Country: "<ProfileDimension>",
 *                 County: "<ProfileDimension>",
 *                 PostalCode: "<ProfileDimension>",
 *                 Province: "<ProfileDimension>",
 *                 State: "<ProfileDimension>",
 *               },
 *               MailingAddress: {
 *                 City: "<ProfileDimension>",
 *                 Country: "<ProfileDimension>",
 *                 County: "<ProfileDimension>",
 *                 PostalCode: "<ProfileDimension>",
 *                 Province: "<ProfileDimension>",
 *                 State: "<ProfileDimension>",
 *               },
 *               BillingAddress: {
 *                 City: "<ProfileDimension>",
 *                 Country: "<ProfileDimension>",
 *                 County: "<ProfileDimension>",
 *                 PostalCode: "<ProfileDimension>",
 *                 Province: "<ProfileDimension>",
 *                 State: "<ProfileDimension>",
 *               },
 *               Attributes: { // CustomAttributes
 *                 "<keys>": { // AttributeDimension
 *                   DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH" || "BEFORE" || "AFTER" || "BETWEEN" || "NOT_BETWEEN" || "ON" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "EQUAL", // required
 *                   Values: "<Values>", // required
 *                 },
 *               },
 *             },
 *             CalculatedAttributes: { // CalculatedCustomAttributes
 *               "<keys>": { // CalculatedAttributeDimension
 *                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH" || "BEFORE" || "AFTER" || "BETWEEN" || "NOT_BETWEEN" || "ON" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "EQUAL", // required
 *                 Values: "<Values>", // required
 *                 ConditionOverrides: { // ConditionOverrides
 *                   Range: { // RangeOverride
 *                     Start: Number("int"), // required
 *                     End: Number("int"),
 *                     Unit: "DAYS", // required
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *         SourceSegments: [ // SourceSegmentList
 *           { // SourceSegment
 *             SegmentDefinitionName: "STRING_VALUE",
 *           },
 *         ],
 *         SourceType: "ALL" || "ANY" || "NONE",
 *         Type: "ALL" || "ANY" || "NONE",
 *       },
 *     ],
 *     Include: "ALL" || "ANY" || "NONE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSegmentDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSegmentDefinitionResponse
 * //   SegmentDefinitionName: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   SegmentDefinitionArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSegmentDefinitionCommandInput - {@link CreateSegmentDefinitionCommandInput}
 * @returns {@link CreateSegmentDefinitionCommandOutput}
 * @see {@link CreateSegmentDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentDefinitionCommandOutput} for command's `response` shape.
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
export class CreateSegmentDefinitionCommand extends $Command
  .classBuilder<
    CreateSegmentDefinitionCommandInput,
    CreateSegmentDefinitionCommandOutput,
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
  .s("CustomerProfiles_20200815", "CreateSegmentDefinition", {})
  .n("CustomerProfilesClient", "CreateSegmentDefinitionCommand")
  .f(CreateSegmentDefinitionRequestFilterSensitiveLog, CreateSegmentDefinitionResponseFilterSensitiveLog)
  .ser(se_CreateSegmentDefinitionCommand)
  .de(de_CreateSegmentDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSegmentDefinitionRequest;
      output: CreateSegmentDefinitionResponse;
    };
    sdk: {
      input: CreateSegmentDefinitionCommandInput;
      output: CreateSegmentDefinitionCommandOutput;
    };
  };
}
