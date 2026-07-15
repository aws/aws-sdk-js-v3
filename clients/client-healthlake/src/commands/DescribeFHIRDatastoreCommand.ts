// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse } from "../models/models_0";
import { DescribeFHIRDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFHIRDatastoreCommand}.
 */
export interface DescribeFHIRDatastoreCommandInput extends DescribeFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFHIRDatastoreCommand}.
 */
export interface DescribeFHIRDatastoreCommandOutput extends DescribeFHIRDatastoreResponse, __MetadataBearer {}

/**
 * <p>Get properties for a FHIR-enabled data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // DescribeFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFHIRDatastoreResponse
 * //   DatastoreProperties: { // DatastoreProperties
 * //     DatastoreId: "STRING_VALUE", // required
 * //     DatastoreArn: "STRING_VALUE", // required
 * //     DatastoreName: "STRING_VALUE",
 * //     DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED", // required
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DatastoreTypeVersion: "R4", // required
 * //     DatastoreEndpoint: "STRING_VALUE", // required
 * //     SseConfiguration: { // SseConfiguration
 * //       KmsEncryptionConfig: { // KmsEncryptionConfig
 * //         CmkType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //     PreloadDataConfig: { // PreloadDataConfig
 * //       PreloadDataType: "SYNTHEA", // required
 * //     },
 * //     IdentityProviderConfiguration: { // IdentityProviderConfiguration
 * //       AuthorizationStrategy: "SMART_ON_FHIR_V1" || "SMART_ON_FHIR" || "AWS_AUTH", // required
 * //       FineGrainedAuthorizationEnabled: true || false,
 * //       Metadata: "STRING_VALUE",
 * //       IdpLambdaArn: "STRING_VALUE",
 * //     },
 * //     ErrorCause: { // ErrorCause
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCategory: "RETRYABLE_ERROR" || "NON_RETRYABLE_ERROR",
 * //     },
 * //     NlpConfiguration: { // NlpConfiguration
 * //       Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //     },
 * //     AnalyticsConfiguration: { // AnalyticsConfiguration
 * //       Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PAUSING" || "PAUSED",
 * //     },
 * //     ProfileConfiguration: { // ProfileConfiguration
 * //       DefaultProfiles: [ // DefaultProfiles
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFHIRDatastoreCommandInput - {@link DescribeFHIRDatastoreCommandInput}
 * @returns {@link DescribeFHIRDatastoreCommandOutput}
 * @see {@link DescribeFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class DescribeFHIRDatastoreCommand extends command<DescribeFHIRDatastoreCommandInput, DescribeFHIRDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFHIRDatastore",
  DescribeFHIRDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFHIRDatastoreRequest;
      output: DescribeFHIRDatastoreResponse;
    };
    sdk: {
      input: DescribeFHIRDatastoreCommandInput;
      output: DescribeFHIRDatastoreCommandOutput;
    };
  };
}
