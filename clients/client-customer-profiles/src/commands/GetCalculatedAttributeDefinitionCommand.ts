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
import type {
  GetCalculatedAttributeDefinitionRequest,
  GetCalculatedAttributeDefinitionResponse,
} from "../models/models_0";
import { GetCalculatedAttributeDefinition } from "../schemas/schemas_0";

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
 * <p>Provides more information on a calculated attribute definition for Customer
 *          Profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
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
 * //   Filter: { // Filter
 * //     Include: "ALL" || "ANY" || "NONE", // required
 * //     Groups: [ // GroupList // required
 * //       { // FilterGroup
 * //         Type: "ALL" || "ANY" || "NONE", // required
 * //         Dimensions: [ // FilterDimensionList // required
 * //           { // FilterDimension
 * //             Attributes: { // AttributeMap // required
 * //               "<keys>": { // FilterAttributeDimension
 * //                 DimensionType: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH" || "BEFORE" || "AFTER" || "BETWEEN" || "NOT_BETWEEN" || "ON" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "EQUAL", // required
 * //                 Values: [ // ValueList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   Conditions: { // Conditions
 * //     Range: { // Range
 * //       Value: Number("int"),
 * //       Unit: "DAYS",
 * //       ValueRange: { // ValueRange
 * //         Start: Number("int"), // required
 * //         End: Number("int"), // required
 * //       },
 * //       TimestampSource: "STRING_VALUE",
 * //       TimestampFormat: "STRING_VALUE",
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
 * //   UseHistoricalData: true || false,
 * //   Status: "PREPARING" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //   Readiness: { // Readiness
 * //     ProgressPercentage: Number("int"),
 * //     Message: "STRING_VALUE",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetCalculatedAttributeDefinition", {})
  .n("CustomerProfilesClient", "GetCalculatedAttributeDefinitionCommand")
  .sc(GetCalculatedAttributeDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCalculatedAttributeDefinitionRequest;
      output: GetCalculatedAttributeDefinitionResponse;
    };
    sdk: {
      input: GetCalculatedAttributeDefinitionCommandInput;
      output: GetCalculatedAttributeDefinitionCommandOutput;
    };
  };
}
