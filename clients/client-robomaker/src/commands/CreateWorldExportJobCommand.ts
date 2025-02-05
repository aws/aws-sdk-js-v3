// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorldExportJobRequest, CreateWorldExportJobResponse } from "../models/models_0";
import { de_CreateWorldExportJobCommand, se_CreateWorldExportJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorldExportJobCommand}.
 */
export interface CreateWorldExportJobCommandInput extends CreateWorldExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorldExportJobCommand}.
 */
export interface CreateWorldExportJobCommandOutput extends CreateWorldExportJobResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Creates a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RoboMakerClient(config);
 * const input = { // CreateWorldExportJobRequest
 *   clientRequestToken: "STRING_VALUE",
 *   worlds: [ // Arns // required
 *     "STRING_VALUE",
 *   ],
 *   outputLocation: { // OutputLocation
 *     s3Bucket: "STRING_VALUE",
 *     s3Prefix: "STRING_VALUE",
 *   },
 *   iamRole: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorldExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorldExportJobResponse
 * //   arn: "STRING_VALUE",
 * //   status: "Pending" || "Running" || "Completed" || "Failed" || "Canceling" || "Canceled",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   failureCode: "InternalServiceError" || "LimitExceeded" || "ResourceNotFound" || "RequestThrottled" || "InvalidInput" || "AccessDenied",
 * //   clientRequestToken: "STRING_VALUE",
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
 * @param CreateWorldExportJobCommandInput - {@link CreateWorldExportJobCommandInput}
 * @returns {@link CreateWorldExportJobCommandOutput}
 * @see {@link CreateWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldExportJobCommandOutput} for command's `response` shape.
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
export class CreateWorldExportJobCommand extends $Command
  .classBuilder<
    CreateWorldExportJobCommandInput,
    CreateWorldExportJobCommandOutput,
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
  .s("robomaker", "CreateWorldExportJob", {})
  .n("RoboMakerClient", "CreateWorldExportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorldExportJobCommand)
  .de(de_CreateWorldExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorldExportJobRequest;
      output: CreateWorldExportJobResponse;
    };
    sdk: {
      input: CreateWorldExportJobCommandInput;
      output: CreateWorldExportJobCommandOutput;
    };
  };
}
