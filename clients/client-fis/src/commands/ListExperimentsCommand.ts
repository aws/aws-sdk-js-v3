// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_0";
import { ListExperiments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandInput extends ListExperimentsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentsCommand}.
 */
export interface ListExperimentsCommandOutput extends ListExperimentsResponse, __MetadataBearer {}

/**
 * <p>Lists your experiments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // ListExperimentsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   experimentTemplateId: "STRING_VALUE",
 * };
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentsResponse
 * //   experiments: [ // ExperimentSummaryList
 * //     { // ExperimentSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       experimentTemplateId: "STRING_VALUE",
 * //       state: { // ExperimentState
 * //         status: "pending" || "initiating" || "running" || "completed" || "stopping" || "stopped" || "failed" || "cancelled",
 * //         reason: "STRING_VALUE",
 * //         error: { // ExperimentError
 * //           accountId: "STRING_VALUE",
 * //           code: "STRING_VALUE",
 * //           location: "STRING_VALUE",
 * //         },
 * //       },
 * //       creationTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       experimentOptions: { // ExperimentOptions
 * //         accountTargeting: "single-account" || "multi-account",
 * //         emptyTargetResolutionMode: "fail" || "skip",
 * //         actionsMode: "skip-all" || "run-all",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentsCommandInput - {@link ListExperimentsCommandInput}
 * @returns {@link ListExperimentsCommandOutput}
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class ListExperimentsCommand extends $Command
  .classBuilder<
    ListExperimentsCommandInput,
    ListExperimentsCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "ListExperiments", {})
  .n("FisClient", "ListExperimentsCommand")
  .sc(ListExperiments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentsRequest;
      output: ListExperimentsResponse;
    };
    sdk: {
      input: ListExperimentsCommandInput;
      output: ListExperimentsCommandOutput;
    };
  };
}
