// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorldGenerationJobRequest, CreateWorldGenerationJobResponse } from "../models/models_0";
import { de_CreateWorldGenerationJobCommand, se_CreateWorldGenerationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorldGenerationJobCommand}.
 */
export interface CreateWorldGenerationJobCommandInput extends CreateWorldGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorldGenerationJobCommand}.
 */
export interface CreateWorldGenerationJobCommandOutput extends CreateWorldGenerationJobResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Creates worlds using the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RoboMakerClient(config);
 * const input = { // CreateWorldGenerationJobRequest
 *   clientRequestToken: "STRING_VALUE",
 *   template: "STRING_VALUE", // required
 *   worldCount: { // WorldCount
 *     floorplanCount: Number("int"),
 *     interiorCountPerFloorplan: Number("int"),
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   worldTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorldGenerationJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "Running" || "Completed" || "Failed" || "PartialFailed" || "Canceling" || "Canceled",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "InternalServiceError" || "LimitExceeded" || "ResourceNotFound" || "RequestThrottled" || "InvalidInput" || "AllWorldGenerationFailed",
 * //   clientRequestToken: "STRING_VALUE",
 * //   template: "STRING_VALUE",
 * //   worldCount: { // WorldCount
 * //     floorplanCount: Number("int"),
 * //     interiorCountPerFloorplan: Number("int"),
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   worldTags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorldGenerationJobCommandInput - {@link CreateWorldGenerationJobCommandInput}
 * @returns {@link CreateWorldGenerationJobCommandOutput}
 * @see {@link CreateWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class CreateWorldGenerationJobCommand extends $Command
  .classBuilder<
    CreateWorldGenerationJobCommandInput,
    CreateWorldGenerationJobCommandOutput,
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
  .s("robomaker", "CreateWorldGenerationJob", {})
  .n("RoboMakerClient", "CreateWorldGenerationJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorldGenerationJobCommand)
  .de(de_CreateWorldGenerationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorldGenerationJobRequest;
      output: CreateWorldGenerationJobResponse;
    };
    sdk: {
      input: CreateWorldGenerationJobCommandInput;
      output: CreateWorldGenerationJobCommandOutput;
    };
  };
}
