// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_0";
import { de_ListExperimentsCommand, se_ListExperimentsCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "ListExperiments", {})
  .n("FisClient", "ListExperimentsCommand")
  .f(void 0, void 0)
  .ser(se_ListExperimentsCommand)
  .de(de_ListExperimentsCommand)
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
