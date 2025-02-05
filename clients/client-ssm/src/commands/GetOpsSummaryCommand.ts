// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOpsSummaryResult } from "../models/models_1";
import { GetOpsSummaryRequest } from "../models/models_2";
import { de_GetOpsSummaryCommand, se_GetOpsSummaryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOpsSummaryCommand}.
 */
export interface GetOpsSummaryCommandInput extends GetOpsSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetOpsSummaryCommand}.
 */
export interface GetOpsSummaryCommandOutput extends GetOpsSummaryResult, __MetadataBearer {}

/**
 * <p>View a summary of operations metadata (OpsData) based on specified filters and aggregators.
 *    OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as
 *    well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager
 *    Explorer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsSummaryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsSummaryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // GetOpsSummaryRequest
 *   SyncName: "STRING_VALUE",
 *   Filters: [ // OpsFilterList
 *     { // OpsFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // OpsFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *     },
 *   ],
 *   Aggregators: [ // OpsAggregatorList
 *     { // OpsAggregator
 *       AggregatorType: "STRING_VALUE",
 *       TypeName: "STRING_VALUE",
 *       AttributeName: "STRING_VALUE",
 *       Values: { // OpsAggregatorValueMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       Filters: [
 *         {
 *           Key: "STRING_VALUE", // required
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *         },
 *       ],
 *       Aggregators: [
 *         {
 *           AggregatorType: "STRING_VALUE",
 *           TypeName: "STRING_VALUE",
 *           AttributeName: "STRING_VALUE",
 *           Values: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           Filters: "<OpsFilterList>",
 *           Aggregators: "<OpsAggregatorList>",
 *         },
 *       ],
 *     },
 *   ],
 *   ResultAttributes: [ // OpsResultAttributeList
 *     { // OpsResultAttribute
 *       TypeName: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetOpsSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetOpsSummaryResult
 * //   Entities: [ // OpsEntityList
 * //     { // OpsEntity
 * //       Id: "STRING_VALUE",
 * //       Data: { // OpsEntityItemMap
 * //         "<keys>": { // OpsEntityItem
 * //           CaptureTime: "STRING_VALUE",
 * //           Content: [ // OpsEntityItemEntryList
 * //             { // OpsEntityItemEntry
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpsSummaryCommandInput - {@link GetOpsSummaryCommandInput}
 * @returns {@link GetOpsSummaryCommandOutput}
 * @see {@link GetOpsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetOpsSummaryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAggregatorException} (client fault)
 *  <p>The specified aggregator isn't valid for the group type. Verify that the aggregator you
 *    provided is supported.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetOpsSummaryCommand extends $Command
  .classBuilder<
    GetOpsSummaryCommandInput,
    GetOpsSummaryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetOpsSummary", {})
  .n("SSMClient", "GetOpsSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetOpsSummaryCommand)
  .de(de_GetOpsSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpsSummaryRequest;
      output: GetOpsSummaryResult;
    };
    sdk: {
      input: GetOpsSummaryCommandInput;
      output: GetOpsSummaryCommandOutput;
    };
  };
}
