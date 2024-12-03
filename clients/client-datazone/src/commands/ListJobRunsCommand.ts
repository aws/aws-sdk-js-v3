// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobRunsInput, ListJobRunsOutput } from "../models/models_1";
import { de_ListJobRunsCommand, se_ListJobRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsInput {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsOutput, __MetadataBearer {}

/**
 * <p>Lists job runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListJobRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListJobRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListJobRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   jobIdentifier: "STRING_VALUE", // required
 *   status: "SCHEDULED" || "IN_PROGRESS" || "SUCCESS" || "PARTIALLY_SUCCEEDED" || "FAILED" || "ABORTED" || "TIMED_OUT" || "CANCELED",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsOutput
 * //   items: [ // JobRunSummaries
 * //     { // JobRunSummary
 * //       domainId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //       jobType: "LINEAGE",
 * //       runId: "STRING_VALUE",
 * //       runMode: "SCHEDULED" || "ON_DEMAND",
 * //       status: "SCHEDULED" || "IN_PROGRESS" || "SUCCESS" || "PARTIALLY_SUCCEEDED" || "FAILED" || "ABORTED" || "TIMED_OUT" || "CANCELED",
 * //       error: { // JobRunError
 * //         message: "STRING_VALUE", // required
 * //       },
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class ListJobRunsCommand extends $Command
  .classBuilder<
    ListJobRunsCommandInput,
    ListJobRunsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListJobRuns", {})
  .n("DataZoneClient", "ListJobRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobRunsCommand)
  .de(de_ListJobRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunsInput;
      output: ListJobRunsOutput;
    };
    sdk: {
      input: ListJobRunsCommandInput;
      output: ListJobRunsCommandOutput;
    };
  };
}
