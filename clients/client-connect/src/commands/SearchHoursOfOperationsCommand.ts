// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchHoursOfOperationsResponse } from "../models/models_2";
import { SearchHoursOfOperationsRequest } from "../models/models_3";
import { de_SearchHoursOfOperationsCommand, se_SearchHoursOfOperationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchHoursOfOperationsCommand}.
 */
export interface SearchHoursOfOperationsCommandInput extends SearchHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link SearchHoursOfOperationsCommand}.
 */
export interface SearchHoursOfOperationsCommandOutput extends SearchHoursOfOperationsResponse, __MetadataBearer {}

/**
 * <p>Searches the hours of operation in an Amazon Connect instance, with optional
 *    filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchHoursOfOperationsRequest
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
 *   SearchCriteria: { // HoursOfOperationSearchCriteria
 *     OrConditions: [ // HoursOfOperationSearchConditionList
 *       {
 *         OrConditions: [
 *           "<HoursOfOperationSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<HoursOfOperationSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<HoursOfOperationSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchHoursOfOperationsResponse
 * //   HoursOfOperations: [ // HoursOfOperationList
 * //     { // HoursOfOperation
 * //       HoursOfOperationId: "STRING_VALUE",
 * //       HoursOfOperationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       TimeZone: "STRING_VALUE",
 * //       Config: [ // HoursOfOperationConfigList
 * //         { // HoursOfOperationConfig
 * //           Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 * //           StartTime: { // HoursOfOperationTimeSlice
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //           EndTime: {
 * //             Hours: Number("int"), // required
 * //             Minutes: Number("int"), // required
 * //           },
 * //         },
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchHoursOfOperationsCommandInput - {@link SearchHoursOfOperationsCommandInput}
 * @returns {@link SearchHoursOfOperationsCommandOutput}
 * @see {@link SearchHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link SearchHoursOfOperationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SearchHoursOfOperationsCommand extends $Command
  .classBuilder<
    SearchHoursOfOperationsCommandInput,
    SearchHoursOfOperationsCommandOutput,
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
  .s("AmazonConnectService", "SearchHoursOfOperations", {})
  .n("ConnectClient", "SearchHoursOfOperationsCommand")
  .f(void 0, void 0)
  .ser(se_SearchHoursOfOperationsCommand)
  .de(de_SearchHoursOfOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchHoursOfOperationsRequest;
      output: SearchHoursOfOperationsResponse;
    };
    sdk: {
      input: SearchHoursOfOperationsCommandInput;
      output: SearchHoursOfOperationsCommandOutput;
    };
  };
}
