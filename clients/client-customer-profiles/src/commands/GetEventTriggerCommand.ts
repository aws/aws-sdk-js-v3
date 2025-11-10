// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEventTriggerRequest, GetEventTriggerResponse } from "../models/models_0";
import { GetEventTrigger } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventTriggerCommand}.
 */
export interface GetEventTriggerCommandInput extends GetEventTriggerRequest {}
/**
 * @public
 *
 * The output of {@link GetEventTriggerCommand}.
 */
export interface GetEventTriggerCommandOutput extends GetEventTriggerResponse, __MetadataBearer {}

/**
 * <p>Get a specific Event Trigger from the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetEventTriggerCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetEventTriggerCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetEventTriggerRequest
 *   DomainName: "STRING_VALUE", // required
 *   EventTriggerName: "STRING_VALUE", // required
 * };
 * const command = new GetEventTriggerCommand(input);
 * const response = await client.send(command);
 * // { // GetEventTriggerResponse
 * //   EventTriggerName: "STRING_VALUE",
 * //   ObjectTypeName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EventTriggerConditions: [ // EventTriggerConditions
 * //     { // EventTriggerCondition
 * //       EventTriggerDimensions: [ // EventTriggerDimensions // required
 * //         { // EventTriggerDimension
 * //           ObjectAttributes: [ // ObjectAttributes // required
 * //             { // ObjectAttribute
 * //               Source: "STRING_VALUE",
 * //               FieldName: "STRING_VALUE",
 * //               ComparisonOperator: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "EQUAL" || "BEFORE" || "AFTER" || "ON" || "BETWEEN" || "NOT_BETWEEN", // required
 * //               Values: [ // EventTriggerValues // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       LogicalOperator: "ANY" || "ALL" || "NONE", // required
 * //     },
 * //   ],
 * //   SegmentFilter: "STRING_VALUE",
 * //   EventTriggerLimits: { // EventTriggerLimits
 * //     EventExpiration: Number("long"),
 * //     Periods: [ // Periods
 * //       { // Period
 * //         Unit: "HOURS" || "DAYS" || "WEEKS" || "MONTHS", // required
 * //         Value: Number("int"), // required
 * //         MaxInvocationsPerProfile: Number("int"),
 * //         Unlimited: true || false,
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
 * @param GetEventTriggerCommandInput - {@link GetEventTriggerCommandInput}
 * @returns {@link GetEventTriggerCommandOutput}
 * @see {@link GetEventTriggerCommandInput} for command's `input` shape.
 * @see {@link GetEventTriggerCommandOutput} for command's `response` shape.
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
export class GetEventTriggerCommand extends $Command
  .classBuilder<
    GetEventTriggerCommandInput,
    GetEventTriggerCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetEventTrigger", {})
  .n("CustomerProfilesClient", "GetEventTriggerCommand")
  .sc(GetEventTrigger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventTriggerRequest;
      output: GetEventTriggerResponse;
    };
    sdk: {
      input: GetEventTriggerCommandInput;
      output: GetEventTriggerCommandOutput;
    };
  };
}
