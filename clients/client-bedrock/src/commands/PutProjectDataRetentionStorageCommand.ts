// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutProjectDataRetentionStorageRequest, PutProjectDataRetentionStorageResponse } from "../models/models_0";
import { PutProjectDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProjectDataRetentionStorageCommand}.
 */
export interface PutProjectDataRetentionStorageCommandInput extends PutProjectDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link PutProjectDataRetentionStorageCommand}.
 */
export interface PutProjectDataRetentionStorageCommandOutput extends PutProjectDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Creates or replaces a project's retention storage record for a model provider. The project must be active in this AWS Region and owned by the calling account. A missing or unowned project returns <code>ResourceNotFoundException</code>; an archived project returns <code>ValidationException</code>.</p> <p>Requires applicable project, account, or organization approval for a storage-capable trusted access program of the provider, with no applicable revocation. Otherwise, the operation returns <code>ConflictException</code>. Enrollment is not required to save the configuration.</p> <p>The request replaces the complete stored configuration. The last successful write wins.</p> <p>For <code>customer_managed</code> destinations, Amazon Bedrock validates the caller's and service's access to the bucket and key before saving the configuration. The bucket and key must be in the AWS Region where you register the configuration. Validation failures reject the write.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutProjectDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutProjectDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutProjectDataRetentionStorageRequest
 *   projectIdentifier: "STRING_VALUE", // required
 *   modelProvider: "anthropic" || "openai", // required
 *   storageDestination: "customer_managed" || "amazon_managed", // required
 *   storageConfiguration: { // DataRetentionStorageConfiguration
 *     kmsKeyArn: "STRING_VALUE", // required
 *     s3BucketArn: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutProjectDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // { // PutProjectDataRetentionStorageResponse
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
 * //   projectArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutProjectDataRetentionStorageCommandInput - {@link PutProjectDataRetentionStorageCommandInput}
 * @returns {@link PutProjectDataRetentionStorageCommandOutput}
 * @see {@link PutProjectDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link PutProjectDataRetentionStorageCommandOutput} for command's `response` shape.
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
export class PutProjectDataRetentionStorageCommand extends command<PutProjectDataRetentionStorageCommandInput, PutProjectDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "PutProjectDataRetentionStorage",
  PutProjectDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProjectDataRetentionStorageRequest;
      output: PutProjectDataRetentionStorageResponse;
    };
    sdk: {
      input: PutProjectDataRetentionStorageCommandInput;
      output: PutProjectDataRetentionStorageCommandOutput;
    };
  };
}
