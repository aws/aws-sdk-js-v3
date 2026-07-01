// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFHIRDatastoreRequest, UpdateFHIRDatastoreResponse } from "../models/models_0";
import { UpdateFHIRDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFHIRDatastoreCommand}.
 */
export interface UpdateFHIRDatastoreCommandInput extends UpdateFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFHIRDatastoreCommand}.
 */
export interface UpdateFHIRDatastoreCommandOutput extends UpdateFHIRDatastoreResponse, __MetadataBearer {}

/**
 * <p>Update the properties of a FHIR-enabled data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, UpdateFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, UpdateFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // UpdateFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   DatastoreName: "STRING_VALUE",
 *   NlpConfiguration: { // NlpConfiguration
 *     Status: "ENABLED" || "DISABLED" || "ENABLING" || "DISABLING",
 *   },
 *   AnalyticsConfiguration: { // AnalyticsConfiguration
 *     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PAUSING" || "PAUSED",
 *   },
 *   ProfileConfiguration: { // ProfileConfiguration
 *     DefaultProfiles: [ // DefaultProfiles
 *       "STRING_VALUE",
 *     ],
 *   },
 *   IdentityProviderConfiguration: { // IdentityProviderConfiguration
 *     AuthorizationStrategy: "SMART_ON_FHIR_V1" || "SMART_ON_FHIR" || "AWS_AUTH", // required
 *     FineGrainedAuthorizationEnabled: true || false,
 *     Metadata: "STRING_VALUE",
 *     IdpLambdaArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFHIRDatastoreResponse
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
 * //       Status: "ENABLED" || "DISABLED" || "ENABLING" || "DISABLING",
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
 * @param UpdateFHIRDatastoreCommandInput - {@link UpdateFHIRDatastoreCommandInput}
 * @returns {@link UpdateFHIRDatastoreCommandOutput}
 * @see {@link UpdateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link UpdateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The data store is in a transition state and the user requested action cannot be
 *          performed.</p>
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
export class UpdateFHIRDatastoreCommand extends command<UpdateFHIRDatastoreCommandInput, UpdateFHIRDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFHIRDatastore",
  UpdateFHIRDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFHIRDatastoreRequest;
      output: UpdateFHIRDatastoreResponse;
    };
    sdk: {
      input: UpdateFHIRDatastoreCommandInput;
      output: UpdateFHIRDatastoreCommandOutput;
    };
  };
}
