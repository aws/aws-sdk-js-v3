// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorldGenerationJobsRequest, ListWorldGenerationJobsResponse } from "../models/models_0";
import { de_ListWorldGenerationJobsCommand, se_ListWorldGenerationJobsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorldGenerationJobsCommand}.
 */
export interface ListWorldGenerationJobsCommandInput extends ListWorldGenerationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorldGenerationJobsCommand}.
 */
export interface ListWorldGenerationJobsCommandOutput extends ListWorldGenerationJobsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Lists world generator jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldGenerationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldGenerationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListWorldGenerationJobsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListWorldGenerationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorldGenerationJobsResponse
 * //   worldGenerationJobSummaries: [ // WorldGenerationJobSummaries // required
 * //     { // WorldGenerationJobSummary
 * //       arn: "STRING_VALUE",
 * //       template: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "Pending" || "Running" || "Completed" || "Failed" || "PartialFailed" || "Canceling" || "Canceled",
 * //       worldCount: { // WorldCount
 * //         floorplanCount: Number("int"),
 * //         interiorCountPerFloorplan: Number("int"),
 * //       },
 * //       succeededWorldCount: Number("int"),
 * //       failedWorldCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorldGenerationJobsCommandInput - {@link ListWorldGenerationJobsCommandInput}
 * @returns {@link ListWorldGenerationJobsCommandOutput}
 * @see {@link ListWorldGenerationJobsCommandInput} for command's `input` shape.
 * @see {@link ListWorldGenerationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class ListWorldGenerationJobsCommand extends $Command
  .classBuilder<
    ListWorldGenerationJobsCommandInput,
    ListWorldGenerationJobsCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "ListWorldGenerationJobs", {})
  .n("RoboMakerClient", "ListWorldGenerationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorldGenerationJobsCommand)
  .de(de_ListWorldGenerationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorldGenerationJobsRequest;
      output: ListWorldGenerationJobsResponse;
    };
    sdk: {
      input: ListWorldGenerationJobsCommandInput;
      output: ListWorldGenerationJobsCommandOutput;
    };
  };
}
