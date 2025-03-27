// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchHoursOfOperationOverridesResponse } from "../models/models_2";
import { SearchHoursOfOperationOverridesRequest } from "../models/models_3";
import {
  de_SearchHoursOfOperationOverridesCommand,
  se_SearchHoursOfOperationOverridesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchHoursOfOperationOverridesCommand}.
 */
export interface SearchHoursOfOperationOverridesCommandInput extends SearchHoursOfOperationOverridesRequest {}
/**
 * @public
 *
 * The output of {@link SearchHoursOfOperationOverridesCommand}.
 */
export interface SearchHoursOfOperationOverridesCommandOutput
  extends SearchHoursOfOperationOverridesResponse,
    __MetadataBearer {}

/**
 * <p>Searches the hours of operation overrides.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchHoursOfOperationOverridesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchHoursOfOperationOverridesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchHoursOfOperationOverridesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // HoursOfOperationSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // HoursOfOperationOverrideSearchCriteria
 *     OrConditions: [ // HoursOfOperationOverrideSearchConditionList
 *       {
 *         OrConditions: [
 *           "<HoursOfOperationOverrideSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<HoursOfOperationOverrideSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         DateCondition: { // DateCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL_TO" || "LESS_THAN_OR_EQUAL_TO" || "EQUAL_TO",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<HoursOfOperationOverrideSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     DateCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_OR_EQUAL_TO" || "LESS_THAN_OR_EQUAL_TO" || "EQUAL_TO",
 *     },
 *   },
 * };
 * const command = new SearchHoursOfOperationOverridesCommand(input);
 * const response = await client.send(command);
 * // { // SearchHoursOfOperationOverridesResponse
 * //   HoursOfOperationOverrides: [ // HoursOfOperationOverrideList
 * //     { // HoursOfOperationOverride
 * //       HoursOfOperationOverrideId: "STRING_VALUE",
 * //       HoursOfOperationId: "STRING_VALUE",
 * //       HoursOfOperationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Config: [ // HoursOfOperationOverrideConfigList
 * //         { // HoursOfOperationOverrideConfig
 * //           Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //           StartTime: { // OverrideTimeSlice
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           EndTime: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //         },
 * //       ],
 * //       EffectiveFrom: "STRING_VALUE",
 * //       EffectiveTill: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchHoursOfOperationOverridesCommandInput - {@link SearchHoursOfOperationOverridesCommandInput}
 * @returns {@link SearchHoursOfOperationOverridesCommandOutput}
 * @see {@link SearchHoursOfOperationOverridesCommandInput} for command's `input` shape.
 * @see {@link SearchHoursOfOperationOverridesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchHoursOfOperationOverridesCommand extends $Command
  .classBuilder<
    SearchHoursOfOperationOverridesCommandInput,
    SearchHoursOfOperationOverridesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchHoursOfOperationOverrides", {})
  .n("ConnectClient", "SearchHoursOfOperationOverridesCommand")
  .f(void 0, void 0)
  .ser(se_SearchHoursOfOperationOverridesCommand)
  .de(de_SearchHoursOfOperationOverridesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchHoursOfOperationOverridesRequest;
      output: SearchHoursOfOperationOverridesResponse;
    };
    sdk: {
      input: SearchHoursOfOperationOverridesCommandInput;
      output: SearchHoursOfOperationOverridesCommandOutput;
    };
  };
}
