// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProjectDataRetentionStorageRequest, GetProjectDataRetentionStorageResponse } from "../models/models_0";
import { GetProjectDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProjectDataRetentionStorageCommand}.
 */
export interface GetProjectDataRetentionStorageCommandInput extends GetProjectDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link GetProjectDataRetentionStorageCommand}.
 */
export interface GetProjectDataRetentionStorageCommandOutput extends GetProjectDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Returns a project's retention storage configuration for a model provider. Returns ResourceNotFoundException when the project does not exist, is not owned by the calling account, or has no configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetProjectDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetProjectDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetProjectDataRetentionStorageRequest
 *   projectIdentifier: "STRING_VALUE", // required
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new GetProjectDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // { // GetProjectDataRetentionStorageResponse
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
 * @param GetProjectDataRetentionStorageCommandInput - {@link GetProjectDataRetentionStorageCommandInput}
 * @returns {@link GetProjectDataRetentionStorageCommandOutput}
 * @see {@link GetProjectDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link GetProjectDataRetentionStorageCommandOutput} for command's `response` shape.
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
export class GetProjectDataRetentionStorageCommand extends command<GetProjectDataRetentionStorageCommandInput, GetProjectDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "GetProjectDataRetentionStorage",
  GetProjectDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProjectDataRetentionStorageRequest;
      output: GetProjectDataRetentionStorageResponse;
    };
    sdk: {
      input: GetProjectDataRetentionStorageCommandInput;
      output: GetProjectDataRetentionStorageCommandOutput;
    };
  };
}
