// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListIntermediateTablesInput, ListIntermediateTablesOutput } from "../models/models_0";
import { ListIntermediateTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntermediateTablesCommand}.
 */
export interface ListIntermediateTablesCommandInput extends ListIntermediateTablesInput {}
/**
 * @public
 *
 * The output of {@link ListIntermediateTablesCommand}.
 */
export interface ListIntermediateTablesCommandOutput extends ListIntermediateTablesOutput, __MetadataBearer {}

/**
 * <p>Lists intermediate tables owned by the caller in a membership. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListIntermediateTablesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListIntermediateTablesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListIntermediateTablesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntermediateTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListIntermediateTablesOutput
 * //   intermediateTableSummaries: [ // IntermediateTableSummaryList // required
 * //     { // IntermediateTableSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       membershipArn: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       status: "CREATED" || "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "DISALLOWED_BY_DATA_PROVIDER" || "BASE_TABLE_REMOVED" || "RETENTION_PERIOD_EXPIRED", // required
 * //       retentionInDays: Number("int"),
 * //       analysisRuleTypes: [ // IntermediateTableAnalysisRuleTypeList
 * //         "CUSTOM",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntermediateTablesCommandInput - {@link ListIntermediateTablesCommandInput}
 * @returns {@link ListIntermediateTablesCommandOutput}
 * @see {@link ListIntermediateTablesCommandInput} for command's `input` shape.
 * @see {@link ListIntermediateTablesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
 *
 * @public
 */
export class ListIntermediateTablesCommand extends $Command
  .classBuilder<
    ListIntermediateTablesCommandInput,
    ListIntermediateTablesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListIntermediateTables", {})
  .n("CleanRoomsClient", "ListIntermediateTablesCommand")
  .sc(ListIntermediateTables$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntermediateTablesInput;
      output: ListIntermediateTablesOutput;
    };
    sdk: {
      input: ListIntermediateTablesCommandInput;
      output: ListIntermediateTablesCommandOutput;
    };
  };
}
