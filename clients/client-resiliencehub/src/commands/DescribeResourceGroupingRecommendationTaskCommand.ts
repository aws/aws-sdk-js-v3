// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeResourceGroupingRecommendationTaskRequest,
  DescribeResourceGroupingRecommendationTaskResponse,
} from "../models/models_0";
import {
  de_DescribeResourceGroupingRecommendationTaskCommand,
  se_DescribeResourceGroupingRecommendationTaskCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceGroupingRecommendationTaskCommand}.
 */
export interface DescribeResourceGroupingRecommendationTaskCommandInput
  extends DescribeResourceGroupingRecommendationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceGroupingRecommendationTaskCommand}.
 */
export interface DescribeResourceGroupingRecommendationTaskCommandOutput
  extends DescribeResourceGroupingRecommendationTaskResponse,
    __MetadataBearer {}

/**
 * <p>Describes the resource grouping recommendation tasks run by Resilience Hub for your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeResourceGroupingRecommendationTaskCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeResourceGroupingRecommendationTaskCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeResourceGroupingRecommendationTaskRequest
 *   appArn: "STRING_VALUE", // required
 *   groupingId: "STRING_VALUE",
 * };
 * const command = new DescribeResourceGroupingRecommendationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceGroupingRecommendationTaskResponse
 * //   groupingId: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourceGroupingRecommendationTaskCommandInput - {@link DescribeResourceGroupingRecommendationTaskCommandInput}
 * @returns {@link DescribeResourceGroupingRecommendationTaskCommandOutput}
 * @see {@link DescribeResourceGroupingRecommendationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceGroupingRecommendationTaskCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class DescribeResourceGroupingRecommendationTaskCommand extends $Command
  .classBuilder<
    DescribeResourceGroupingRecommendationTaskCommandInput,
    DescribeResourceGroupingRecommendationTaskCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DescribeResourceGroupingRecommendationTask", {})
  .n("ResiliencehubClient", "DescribeResourceGroupingRecommendationTaskCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourceGroupingRecommendationTaskCommand)
  .de(de_DescribeResourceGroupingRecommendationTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceGroupingRecommendationTaskRequest;
      output: DescribeResourceGroupingRecommendationTaskResponse;
    };
    sdk: {
      input: DescribeResourceGroupingRecommendationTaskCommandInput;
      output: DescribeResourceGroupingRecommendationTaskCommandOutput;
    };
  };
}
