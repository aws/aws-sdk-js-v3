// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PrepareFlowRequest, PrepareFlowResponse } from "../models/models_0";
import { PrepareFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PrepareFlowCommand}.
 */
export interface PrepareFlowCommandInput extends PrepareFlowRequest {}
/**
 * @public
 *
 * The output of {@link PrepareFlowCommand}.
 */
export interface PrepareFlowCommandOutput extends PrepareFlowResponse, __MetadataBearer {}

/**
 * Prepares the `DRAFT` version of a flow so that it can be invoked. For more information, see [Test a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-test.html) in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, PrepareFlowCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, PrepareFlowCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // PrepareFlowRequest
 *   flowIdentifier: "STRING_VALUE", // required
 * };
 * const command = new PrepareFlowCommand(input);
 * const response = await client.send(command);
 * // { // PrepareFlowResponse
 * //   id: "STRING_VALUE", // required
 * //   status: "Failed" || "Prepared" || "Preparing" || "NotPrepared", // required
 * // };
 *
 * ```
 *
 * @param PrepareFlowCommandInput - {@link PrepareFlowCommandInput}
 * @returns {@link PrepareFlowCommandOutput}
 * @see {@link PrepareFlowCommandInput} for command's `input` shape.
 * @see {@link PrepareFlowCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class PrepareFlowCommand extends command<PrepareFlowCommandInput, PrepareFlowCommandOutput>(
  _ep0,
  _mw0,
  "PrepareFlow",
  PrepareFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PrepareFlowRequest;
      output: PrepareFlowResponse;
    };
    sdk: {
      input: PrepareFlowCommandInput;
      output: PrepareFlowCommandOutput;
    };
  };
}
