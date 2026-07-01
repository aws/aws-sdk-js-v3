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
 * <p>Returns the account-wide data retention mode for Amazon Bedrock.</p>
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
 * //   mode: "default" || "none" || "provider_data_share" || "inherit", // required
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
