// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateRetrievalInstructionVersionRequest,
  CreateRetrievalInstructionVersionResponse,
} from "../models/models_1";
import { CreateRetrievalInstructionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRetrievalInstructionVersionCommand}.
 */
export interface CreateRetrievalInstructionVersionCommandInput extends CreateRetrievalInstructionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRetrievalInstructionVersionCommand}.
 */
export interface CreateRetrievalInstructionVersionCommandOutput extends CreateRetrievalInstructionVersionResponse, __MetadataBearer {}

/**
 * <p>Creates an immutable numbered version from the retrieval instruction's current reviewed content. The service creates the version synchronously.</p> <p>The service numbers versions from 1 and assigns them in order, never reusing a number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateRetrievalInstructionVersionCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateRetrievalInstructionVersionCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateRetrievalInstructionVersionRequest
 *   retrievalInstructionId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateRetrievalInstructionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRetrievalInstructionVersionResponse
 * //   retrievalInstructionId: "STRING_VALUE", // required
 * //   retrievalInstructionArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRetrievalInstructionVersionCommandInput - {@link CreateRetrievalInstructionVersionCommandInput}
 * @returns {@link CreateRetrievalInstructionVersionCommandOutput}
 * @see {@link CreateRetrievalInstructionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateRetrievalInstructionVersionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class CreateRetrievalInstructionVersionCommand extends command<CreateRetrievalInstructionVersionCommandInput, CreateRetrievalInstructionVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateRetrievalInstructionVersion",
  CreateRetrievalInstructionVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRetrievalInstructionVersionRequest;
      output: CreateRetrievalInstructionVersionResponse;
    };
    sdk: {
      input: CreateRetrievalInstructionVersionCommandInput;
      output: CreateRetrievalInstructionVersionCommandOutput;
    };
  };
}
