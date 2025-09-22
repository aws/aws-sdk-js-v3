// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEventTriggerRequest, CreateEventTriggerResponse } from "../models/models_0";
import { CreateEventTrigger } from "../schemas/schemas_3_ProfileObject";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventTriggerCommand}.
 */
export interface CreateEventTriggerCommandInput extends CreateEventTriggerRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventTriggerCommand}.
 */
export interface CreateEventTriggerCommandOutput extends CreateEventTriggerResponse, __MetadataBearer {}

/**
 * <p>Creates an event trigger, which specifies the rules when to perform action based on
 *          customer's ingested data.</p>
 *          <p>Each event stream can be associated with only one integration in the same region and AWS
 *          account as the event stream. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateEventTriggerCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateEventTriggerCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateEventTriggerRequest
 *   DomainName: "STRING_VALUE", // required
 *   EventTriggerName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventTriggerConditions: [ // EventTriggerConditions // required
 *     { // EventTriggerCondition
 *       EventTriggerDimensions: [ // EventTriggerDimensions // required
 *         { // EventTriggerDimension
 *           ObjectAttributes: [ // ObjectAttributes // required
 *             { // ObjectAttribute
 *               Source: "STRING_VALUE",
 *               FieldName: "STRING_VALUE",
 *               ComparisonOperator: "INCLUSIVE" || "EXCLUSIVE" || "CONTAINS" || "BEGINS_WITH" || "ENDS_WITH" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN_OR_EQUAL" || "EQUAL" || "BEFORE" || "AFTER" || "ON" || "BETWEEN" || "NOT_BETWEEN", // required
 *               Values: [ // EventTriggerValues // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       LogicalOperator: "ANY" || "ALL" || "NONE", // required
 *     },
 *   ],
 *   SegmentFilter: "STRING_VALUE",
 *   EventTriggerLimits: { // EventTriggerLimits
 *     EventExpiration: Number("long"),
 *     Periods: [ // Periods
 *       { // Period
 *         Unit: "HOURS" || "DAYS" || "WEEKS" || "MONTHS", // required
 *         Value: Number("int"), // required
 *         MaxInvocationsPerProfile: Number("int"),
 *         Unlimited: true || false,
 *       },
 *     ],
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEventTriggerCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventTriggerResponse
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
 * @param CreateEventTriggerCommandInput - {@link CreateEventTriggerCommandInput}
 * @returns {@link CreateEventTriggerCommandOutput}
 * @see {@link CreateEventTriggerCommandInput} for command's `input` shape.
 * @see {@link CreateEventTriggerCommandOutput} for command's `response` shape.
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
export class CreateEventTriggerCommand extends $Command
  .classBuilder<
    CreateEventTriggerCommandInput,
    CreateEventTriggerCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateEventTrigger", {})
  .n("CustomerProfilesClient", "CreateEventTriggerCommand")
  .sc(CreateEventTrigger)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventTriggerRequest;
      output: CreateEventTriggerResponse;
    };
    sdk: {
      input: CreateEventTriggerCommandInput;
      output: CreateEventTriggerCommandOutput;
    };
  };
}
