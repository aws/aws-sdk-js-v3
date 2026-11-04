// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountDataRetentionRequest, GetAccountDataRetentionResponse } from "../models/models_0";
import { GetAccountDataRetention$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountDataRetentionCommand}.
 */
export interface GetAccountDataRetentionCommandInput extends GetAccountDataRetentionRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountDataRetentionCommand}.
 */
export interface GetAccountDataRetentionCommandOutput extends GetAccountDataRetentionResponse, __MetadataBearer {}

/**
 * Returns the account-wide data retention mode for Amazon Bedrock.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAccountDataRetentionCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAccountDataRetentionCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = {};
 * const command = new GetAccountDataRetentionCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountDataRetentionResponse
 * //   mode: "default" || "none" || "aws_review" || "provider_data_share" || "inherit", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAccountDataRetentionCommandInput - {@link GetAccountDataRetentionCommandInput}
 * @returns {@link GetAccountDataRetentionCommandOutput}
 * @see {@link GetAccountDataRetentionCommandInput} for command's `input` shape.
 * @see {@link GetAccountDataRetentionCommandOutput} for command's `response` shape.
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
export class GetAccountDataRetentionCommand extends command<GetAccountDataRetentionCommandInput, GetAccountDataRetentionCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountDataRetention",
  GetAccountDataRetention$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountDataRetentionResponse;
    };
    sdk: {
      input: GetAccountDataRetentionCommandInput;
      output: GetAccountDataRetentionCommandOutput;
    };
  };
}
