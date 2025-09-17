// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHumanLoopsRequest, ListHumanLoopsResponse } from "../models/models_0";
import { de_ListHumanLoopsCommand, se_ListHumanLoopsCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListHumanLoopsCommand}.
 */
export interface ListHumanLoopsCommandInput extends ListHumanLoopsRequest {}
/**
 * @public
 *
 * The output of {@link ListHumanLoopsCommand}.
 */
export interface ListHumanLoopsCommandOutput extends ListHumanLoopsResponse, __MetadataBearer {}

/**
 * <p>Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * // import type { SageMakerA2IRuntimeClientConfig } from "@aws-sdk/client-sagemaker-a2i-runtime";
 * const config = {}; // type is SageMakerA2IRuntimeClientConfig
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // ListHumanLoopsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   FlowDefinitionArn: "STRING_VALUE", // required
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHumanLoopsCommand(input);
 * const response = await client.send(command);
 * // { // ListHumanLoopsResponse
 * //   HumanLoopSummaries: [ // HumanLoopSummaries // required
 * //     { // HumanLoopSummary
 * //       HumanLoopName: "STRING_VALUE",
 * //       HumanLoopStatus: "InProgress" || "Failed" || "Completed" || "Stopped" || "Stopping",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FailureReason: "STRING_VALUE",
 * //       FlowDefinitionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHumanLoopsCommandInput - {@link ListHumanLoopsCommandInput}
 * @returns {@link ListHumanLoopsCommandOutput}
 * @see {@link ListHumanLoopsCommandInput} for command's `input` shape.
 * @see {@link ListHumanLoopsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListHumanLoopsCommand extends $Command
  .classBuilder<
    ListHumanLoopsCommandInput,
    ListHumanLoopsCommandOutput,
    SageMakerA2IRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerA2IRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerA2IRuntime", "ListHumanLoops", {})
  .n("SageMakerA2IRuntimeClient", "ListHumanLoopsCommand")
  .f(void 0, void 0)
  .ser(se_ListHumanLoopsCommand)
  .de(de_ListHumanLoopsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHumanLoopsRequest;
      output: ListHumanLoopsResponse;
    };
    sdk: {
      input: ListHumanLoopsCommandInput;
      output: ListHumanLoopsCommandOutput;
    };
  };
}
