// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHumanLoopRequest, DescribeHumanLoopResponse } from "../models/models_0";
import { de_DescribeHumanLoopCommand, se_DescribeHumanLoopCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHumanLoopCommand}.
 */
export interface DescribeHumanLoopCommandInput extends DescribeHumanLoopRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHumanLoopCommand}.
 */
export interface DescribeHumanLoopCommandOutput extends DescribeHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified human loop. If the human loop was deleted, this
 *       operation will return a <code>ResourceNotFoundException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // DescribeHumanLoopRequest
 *   HumanLoopName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHumanLoopCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHumanLoopResponse
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   FailureCode: "STRING_VALUE",
 * //   HumanLoopStatus: "InProgress" || "Failed" || "Completed" || "Stopped" || "Stopping", // required
 * //   HumanLoopName: "STRING_VALUE", // required
 * //   HumanLoopArn: "STRING_VALUE", // required
 * //   FlowDefinitionArn: "STRING_VALUE", // required
 * //   HumanLoopOutput: { // HumanLoopOutput
 * //     OutputS3Uri: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHumanLoopCommandInput - {@link DescribeHumanLoopCommandInput}
 * @returns {@link DescribeHumanLoopCommandOutput}
 * @see {@link DescribeHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link SageMakerA2IRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerA2IRuntime service.</p>
 *
 * @public
 */
export class DescribeHumanLoopCommand extends $Command
  .classBuilder<
    DescribeHumanLoopCommandInput,
    DescribeHumanLoopCommandOutput,
    SageMakerA2IRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerA2IRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerA2IRuntime", "DescribeHumanLoop", {})
  .n("SageMakerA2IRuntimeClient", "DescribeHumanLoopCommand")
  .f(void 0, void 0)
  .ser(se_DescribeHumanLoopCommand)
  .de(de_DescribeHumanLoopCommand)
  .build() {}
