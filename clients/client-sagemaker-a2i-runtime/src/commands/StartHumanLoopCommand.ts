// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartHumanLoopRequest, StartHumanLoopResponse } from "../models/models_0";
import type {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";
import { StartHumanLoop$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartHumanLoopCommand}.
 */
export interface StartHumanLoopCommandInput extends StartHumanLoopRequest {}
/**
 * @public
 *
 * The output of {@link StartHumanLoopCommand}.
 */
export interface StartHumanLoopCommandOutput extends StartHumanLoopResponse, __MetadataBearer {}

/**
 * <p>Starts a human loop, provided that at least one activation condition is met.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StartHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StartHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * // import type { SageMakerA2IRuntimeClientConfig } from "@aws-sdk/client-sagemaker-a2i-runtime";
 * const config = {}; // type is SageMakerA2IRuntimeClientConfig
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // StartHumanLoopRequest
 *   HumanLoopName: "STRING_VALUE", // required
 *   FlowDefinitionArn: "STRING_VALUE", // required
 *   HumanLoopInput: { // HumanLoopInput
 *     InputContent: "STRING_VALUE", // required
 *   },
 *   DataAttributes: { // HumanLoopDataAttributes
 *     ContentClassifiers: [ // ContentClassifiers // required
 *       "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 *     ],
 *   },
 * };
 * const command = new StartHumanLoopCommand(input);
 * const response = await client.send(command);
 * // { // StartHumanLoopResponse
 * //   HumanLoopArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartHumanLoopCommandInput - {@link StartHumanLoopCommandInput}
 * @returns {@link StartHumanLoopCommandOutput}
 * @see {@link StartHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StartHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has the same name as another active human loop but has different input data. You cannot start two
 *     human loops with the same name and different input data.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your AWS account. For a list of
 *       Amazon A2I service quotes, see <a href="https://docs.aws.amazon.com/general/latest/gr/a2i.html">Amazon Augmented AI Service Quotes</a>. Delete some resources or request an increase in your
 *       service quota. You can request a quota increase using Service Quotas or the AWS Support
 *       Center. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
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
 *
 * @public
 */
export class StartHumanLoopCommand extends $Command
  .classBuilder<
    StartHumanLoopCommandInput,
    StartHumanLoopCommandOutput,
    SageMakerA2IRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerA2IRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSageMakerA2IRuntime", "StartHumanLoop", {})
  .n("SageMakerA2IRuntimeClient", "StartHumanLoopCommand")
  .sc(StartHumanLoop$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartHumanLoopRequest;
      output: StartHumanLoopResponse;
    };
    sdk: {
      input: StartHumanLoopCommandInput;
      output: StartHumanLoopCommandOutput;
    };
  };
}
