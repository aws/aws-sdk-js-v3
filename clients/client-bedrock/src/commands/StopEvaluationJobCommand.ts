// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StopEvaluationJobRequest,
  StopEvaluationJobRequestFilterSensitiveLog,
  StopEvaluationJobResponse,
} from "../models/models_0";
import { de_StopEvaluationJobCommand, se_StopEvaluationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopEvaluationJobCommand}.
 */
export interface StopEvaluationJobCommandInput extends StopEvaluationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopEvaluationJobCommand}.
 */
export interface StopEvaluationJobCommandOutput extends StopEvaluationJobResponse, __MetadataBearer {}

/**
 * <p>Stops an evaluation job that is current being created or running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StopEvaluationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StopEvaluationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // StopEvaluationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopEvaluationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEvaluationJobCommandInput - {@link StopEvaluationJobCommandInput}
 * @returns {@link StopEvaluationJobCommandOutput}
 * @see {@link StopEvaluationJobCommandInput} for command's `input` shape.
 * @see {@link StopEvaluationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class StopEvaluationJobCommand extends $Command
  .classBuilder<
    StopEvaluationJobCommandInput,
    StopEvaluationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {})
  .n("BedrockClient", "StopEvaluationJobCommand")
  .f(StopEvaluationJobRequestFilterSensitiveLog, void 0)
  .ser(se_StopEvaluationJobCommand)
  .de(de_StopEvaluationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEvaluationJobRequest;
      output: {};
    };
    sdk: {
      input: StopEvaluationJobCommandInput;
      output: StopEvaluationJobCommandOutput;
    };
  };
}
