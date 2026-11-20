// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountDataRetentionStorageRequest, GetAccountDataRetentionStorageResponse } from "../models/models_0";
import { GetAccountDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountDataRetentionStorageCommand}.
 */
export interface GetAccountDataRetentionStorageCommandInput extends GetAccountDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountDataRetentionStorageCommand}.
 */
export interface GetAccountDataRetentionStorageCommandOutput extends GetAccountDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Returns your account's stored retention storage configuration for a model provider. Amazon Bedrock determines whether the configuration applies when processing an inference request. Returns <code>ResourceNotFoundException</code> when no configuration exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAccountDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAccountDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetAccountDataRetentionStorageRequest
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new GetAccountDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountDataRetentionStorageResponse
 * //   scope: "account" || "organization" || "project", // required
 * //   modelProvider: "anthropic" || "openai", // required
 * //   storageDestination: "customer_managed" || "amazon_managed", // required
 * //   storageConfiguration: { // DataRetentionStorageConfiguration
 * //     kmsKeyArn: "STRING_VALUE", // required
 * //     s3BucketArn: "STRING_VALUE", // required
 * //     s3BucketOwner: "STRING_VALUE", // required
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   kmsKeyStatus: "pending" || "active" || "access_denied",
 * //   s3BucketStatus: "pending" || "active" || "access_denied",
 * // };
 *
 * ```
 *
 * @param GetAccountDataRetentionStorageCommandInput - {@link GetAccountDataRetentionStorageCommandInput}
 * @returns {@link GetAccountDataRetentionStorageCommandOutput}
 * @see {@link GetAccountDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link GetAccountDataRetentionStorageCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
export class GetAccountDataRetentionStorageCommand extends command<GetAccountDataRetentionStorageCommandInput, GetAccountDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountDataRetentionStorage",
  GetAccountDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountDataRetentionStorageRequest;
      output: GetAccountDataRetentionStorageResponse;
    };
    sdk: {
      input: GetAccountDataRetentionStorageCommandInput;
      output: GetAccountDataRetentionStorageCommandOutput;
    };
  };
}
