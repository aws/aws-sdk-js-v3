// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "../models/models_0";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { BatchDeleteWorlds } from "../schemas/schemas_12_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteWorldsCommand}.
 */
export interface BatchDeleteWorldsCommandInput extends BatchDeleteWorldsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteWorldsCommand}.
 */
export interface BatchDeleteWorldsCommandOutput extends BatchDeleteWorldsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Deletes one or more worlds in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDeleteWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDeleteWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // import type { RoboMakerClientConfig } from "@aws-sdk/client-robomaker";
 * const config = {}; // type is RoboMakerClientConfig
 * const client = new RoboMakerClient(config);
 * const input = { // BatchDeleteWorldsRequest
 *   worlds: [ // Arns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteWorldsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteWorldsResponse
 * //   unprocessedWorlds: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteWorldsCommandInput - {@link BatchDeleteWorldsCommandInput}
 * @returns {@link BatchDeleteWorldsCommandOutput}
 * @see {@link BatchDeleteWorldsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteWorldsCommandOutput} for command's `response` shape.
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
export class BatchDeleteWorldsCommand extends $Command
  .classBuilder<
    BatchDeleteWorldsCommandInput,
    BatchDeleteWorldsCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("robomaker", "BatchDeleteWorlds", {})
  .n("RoboMakerClient", "BatchDeleteWorldsCommand")
  .sc(BatchDeleteWorlds)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteWorldsRequest;
      output: BatchDeleteWorldsResponse;
    };
    sdk: {
      input: BatchDeleteWorldsCommandInput;
      output: BatchDeleteWorldsCommandOutput;
    };
  };
}
