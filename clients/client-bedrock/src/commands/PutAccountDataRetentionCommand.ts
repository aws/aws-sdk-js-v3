// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountDataRetentionRequest, PutAccountDataRetentionResponse } from "../models/models_0";
import { PutAccountDataRetention$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountDataRetentionCommand}.
 */
export interface PutAccountDataRetentionCommandInput extends PutAccountDataRetentionRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountDataRetentionCommand}.
 */
export interface PutAccountDataRetentionCommandOutput extends PutAccountDataRetentionResponse, __MetadataBearer {}

/**
 * Sets the account-wide data retention mode for Amazon Bedrock.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutAccountDataRetentionCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutAccountDataRetentionCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutAccountDataRetentionRequest
 *   mode: "default" || "none" || "aws_review" || "provider_data_share" || "inherit", // required
 * };
 * const command = new PutAccountDataRetentionCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountDataRetentionResponse
 * //   mode: "default" || "none" || "aws_review" || "provider_data_share" || "inherit", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAccountDataRetentionCommandInput - {@link PutAccountDataRetentionCommandInput}
 * @returns {@link PutAccountDataRetentionCommandOutput}
 * @see {@link PutAccountDataRetentionCommandInput} for command's `input` shape.
 * @see {@link PutAccountDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
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
export class PutAccountDataRetentionCommand extends command<PutAccountDataRetentionCommandInput, PutAccountDataRetentionCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountDataRetention",
  PutAccountDataRetention$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountDataRetentionRequest;
      output: PutAccountDataRetentionResponse;
    };
    sdk: {
      input: PutAccountDataRetentionCommandInput;
      output: PutAccountDataRetentionCommandOutput;
    };
  };
}
