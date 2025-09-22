// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorldExportJobRequest, DescribeWorldExportJobResponse } from "../models/models_0";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeWorldExportJob } from "../schemas/schemas_10_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorldExportJobCommand}.
 */
export interface DescribeWorldExportJobCommandInput extends DescribeWorldExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorldExportJobCommand}.
 */
export interface DescribeWorldExportJobCommandOutput extends DescribeWorldExportJobResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Describes a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // import type { RoboMakerClientConfig } from "@aws-sdk/client-robomaker";
 * const config = {}; // type is RoboMakerClientConfig
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeWorldExportJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorldExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorldExportJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "Running" || "Completed" || "Failed" || "Canceling" || "Canceled",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "InternalServiceError" || "LimitExceeded" || "ResourceNotFound" || "RequestThrottled" || "InvalidInput" || "AccessDenied",
 * //   failureReason: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   worlds: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   outputLocation: { // OutputLocation
 * //     s3Bucket: "STRING_VALUE",
 * //     s3Prefix: "STRING_VALUE",
 * //   },
 * //   iamRole: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorldExportJobCommandInput - {@link DescribeWorldExportJobCommandInput}
 * @returns {@link DescribeWorldExportJobCommandOutput}
 * @see {@link DescribeWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DescribeWorldExportJobCommand extends $Command
  .classBuilder<
    DescribeWorldExportJobCommandInput,
    DescribeWorldExportJobCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("robomaker", "DescribeWorldExportJob", {})
  .n("RoboMakerClient", "DescribeWorldExportJobCommand")
  .sc(DescribeWorldExportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorldExportJobRequest;
      output: DescribeWorldExportJobResponse;
    };
    sdk: {
      input: DescribeWorldExportJobCommandInput;
      output: DescribeWorldExportJobCommandOutput;
    };
  };
}
