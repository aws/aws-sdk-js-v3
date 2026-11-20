// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutOrganizationDataRetentionStorageRequest,
  PutOrganizationDataRetentionStorageResponse,
} from "../models/models_0";
import { PutOrganizationDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutOrganizationDataRetentionStorageCommand}.
 */
export interface PutOrganizationDataRetentionStorageCommandInput extends PutOrganizationDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link PutOrganizationDataRetentionStorageCommand}.
 */
export interface PutOrganizationDataRetentionStorageCommandOutput extends PutOrganizationDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Creates or replaces the organization's retention storage record for a model provider. The organization is resolved from the authenticated caller's management context; the caller must be the organization's management account or a delegated administrator. Requires resolved organization-scope trusted access eligibility for a storage-capable program of the provider; otherwise returns ConflictException. Writes replace the whole record; the last write wins.</p> <p>For <code>customer_managed</code> destinations, Amazon Bedrock validates the caller's and service's access to the bucket and key before saving the configuration. The bucket and key must be in the AWS Region where you register the configuration. Validation failures reject the write.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutOrganizationDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutOrganizationDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutOrganizationDataRetentionStorageRequest
 *   modelProvider: "anthropic" || "openai", // required
 *   storageDestination: "customer_managed" || "amazon_managed", // required
 *   storageConfiguration: { // DataRetentionStorageConfiguration
 *     kmsKeyArn: "STRING_VALUE", // required
 *     s3BucketArn: "STRING_VALUE", // required
 *     s3BucketOwner: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutOrganizationDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // { // PutOrganizationDataRetentionStorageResponse
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
 * @param PutOrganizationDataRetentionStorageCommandInput - {@link PutOrganizationDataRetentionStorageCommandInput}
 * @returns {@link PutOrganizationDataRetentionStorageCommandOutput}
 * @see {@link PutOrganizationDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationDataRetentionStorageCommandOutput} for command's `response` shape.
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
export class PutOrganizationDataRetentionStorageCommand extends command<PutOrganizationDataRetentionStorageCommandInput, PutOrganizationDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "PutOrganizationDataRetentionStorage",
  PutOrganizationDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOrganizationDataRetentionStorageRequest;
      output: PutOrganizationDataRetentionStorageResponse;
    };
    sdk: {
      input: PutOrganizationDataRetentionStorageCommandInput;
      output: PutOrganizationDataRetentionStorageCommandOutput;
    };
  };
}
