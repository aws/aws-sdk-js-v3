// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfiguredTablesInput, ListConfiguredTablesOutput } from "../models/models_0";
import { de_ListConfiguredTablesCommand, se_ListConfiguredTablesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredTablesCommand}.
 */
export interface ListConfiguredTablesCommandInput extends ListConfiguredTablesInput {}
/**
 * @public
 *
 * The output of {@link ListConfiguredTablesCommand}.
 */
export interface ListConfiguredTablesCommandOutput extends ListConfiguredTablesOutput, __MetadataBearer {}

/**
 * <p>Lists configured tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredTablesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredTablesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // ListConfiguredTablesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredTablesOutput
 * //   configuredTableSummaries: [ // ConfiguredTableSummaryList // required
 * //     { // ConfiguredTableSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       analysisRuleTypes: [ // ConfiguredTableAnalysisRuleTypeList // required
 * //         "AGGREGATION" || "LIST" || "CUSTOM",
 * //       ],
 * //       analysisMethod: "DIRECT_QUERY", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfiguredTablesCommandInput - {@link ListConfiguredTablesCommandInput}
 * @returns {@link ListConfiguredTablesCommandOutput}
 * @see {@link ListConfiguredTablesCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredTablesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class ListConfiguredTablesCommand extends $Command
  .classBuilder<
    ListConfiguredTablesCommandInput,
    ListConfiguredTablesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListConfiguredTables", {})
  .n("CleanRoomsClient", "ListConfiguredTablesCommand")
  .f(void 0, void 0)
  .ser(se_ListConfiguredTablesCommand)
  .de(de_ListConfiguredTablesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredTablesInput;
      output: ListConfiguredTablesOutput;
    };
    sdk: {
      input: ListConfiguredTablesCommandInput;
      output: ListConfiguredTablesCommandOutput;
    };
  };
}
