// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetOrganizationDataRetentionStorageRequest,
  GetOrganizationDataRetentionStorageResponse,
} from "../models/models_0";
import { GetOrganizationDataRetentionStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOrganizationDataRetentionStorageCommand}.
 */
export interface GetOrganizationDataRetentionStorageCommandInput extends GetOrganizationDataRetentionStorageRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationDataRetentionStorageCommand}.
 */
export interface GetOrganizationDataRetentionStorageCommandOutput extends GetOrganizationDataRetentionStorageResponse, __MetadataBearer {}

/**
 * <p>Returns the organization's retention storage configuration for a model provider. The caller must be the organization's management account or a delegated administrator. Returns ResourceNotFoundException when no configuration exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetOrganizationDataRetentionStorageCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetOrganizationDataRetentionStorageCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetOrganizationDataRetentionStorageRequest
 *   modelProvider: "anthropic" || "openai", // required
 * };
 * const command = new GetOrganizationDataRetentionStorageCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationDataRetentionStorageResponse
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
 * @param GetOrganizationDataRetentionStorageCommandInput - {@link GetOrganizationDataRetentionStorageCommandInput}
 * @returns {@link GetOrganizationDataRetentionStorageCommandOutput}
 * @see {@link GetOrganizationDataRetentionStorageCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationDataRetentionStorageCommandOutput} for command's `response` shape.
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
export class GetOrganizationDataRetentionStorageCommand extends command<GetOrganizationDataRetentionStorageCommandInput, GetOrganizationDataRetentionStorageCommandOutput>(
  _ep0,
  _mw0,
  "GetOrganizationDataRetentionStorage",
  GetOrganizationDataRetentionStorage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOrganizationDataRetentionStorageRequest;
      output: GetOrganizationDataRetentionStorageResponse;
    };
    sdk: {
      input: GetOrganizationDataRetentionStorageCommandInput;
      output: GetOrganizationDataRetentionStorageCommandOutput;
    };
  };
}
