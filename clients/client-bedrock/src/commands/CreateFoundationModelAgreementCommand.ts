// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFoundationModelAgreementRequest, CreateFoundationModelAgreementResponse } from "../models/models_1";
import { CreateFoundationModelAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFoundationModelAgreementCommand}.
 */
export interface CreateFoundationModelAgreementCommandInput extends CreateFoundationModelAgreementRequest {}
/**
 * @public
 *
 * The output of {@link CreateFoundationModelAgreementCommand}.
 */
export interface CreateFoundationModelAgreementCommandOutput extends CreateFoundationModelAgreementResponse, __MetadataBearer {}

/**
 * Request a model access agreement for the specified model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateFoundationModelAgreementCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateFoundationModelAgreementCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CreateFoundationModelAgreementRequest
 *   offerToken: "STRING_VALUE", // required
 *   modelId: "STRING_VALUE", // required
 * };
 * const command = new CreateFoundationModelAgreementCommand(input);
 * const response = await client.send(command);
 * // { // CreateFoundationModelAgreementResponse
 * //   modelId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFoundationModelAgreementCommandInput - {@link CreateFoundationModelAgreementCommandInput}
 * @returns {@link CreateFoundationModelAgreementCommandOutput}
 * @see {@link CreateFoundationModelAgreementCommandInput} for command's `input` shape.
 * @see {@link CreateFoundationModelAgreementCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class CreateFoundationModelAgreementCommand extends command<CreateFoundationModelAgreementCommandInput, CreateFoundationModelAgreementCommandOutput>(
  _ep0,
  _mw0,
  "CreateFoundationModelAgreement",
  CreateFoundationModelAgreement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFoundationModelAgreementRequest;
      output: CreateFoundationModelAgreementResponse;
    };
    sdk: {
      input: CreateFoundationModelAgreementCommandInput;
      output: CreateFoundationModelAgreementCommandOutput;
    };
  };
}
