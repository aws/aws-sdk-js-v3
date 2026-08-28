// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreFHIRDatastoreRequest, RestoreFHIRDatastoreResponse } from "../models/models_0";
import { RestoreFHIRDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreFHIRDatastoreCommand}.
 */
export interface RestoreFHIRDatastoreCommandInput extends RestoreFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link RestoreFHIRDatastoreCommand}.
 */
export interface RestoreFHIRDatastoreCommandOutput extends RestoreFHIRDatastoreResponse, __MetadataBearer {}

/**
 * Restore a backup-enabled data store to a point in time. Creates a new data store from the backup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, RestoreFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, RestoreFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // RestoreFHIRDatastoreRequest
 *   SourceDatastoreId: "STRING_VALUE", // required
 *   RestoreConfiguration: { // RestoreConfiguration Union: only one key present
 *     ContinuousBackupRestoreConfiguration: { // ContinuousBackupRestoreConfiguration
 *       RestorePointTime: new Date("TIMESTAMP"),
 *     },
 *   },
 *   DatastoreName: "STRING_VALUE",
 *   SseConfiguration: { // SseConfiguration
 *     KmsEncryptionConfig: { // KmsEncryptionConfig
 *       CmkType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   IdentityProviderConfiguration: { // IdentityProviderConfiguration
 *     AuthorizationStrategy: "SMART_ON_FHIR_V1" || "SMART_ON_FHIR" || "AWS_AUTH", // required
 *     FineGrainedAuthorizationEnabled: true || false,
 *     Metadata: "STRING_VALUE",
 *     IdpLambdaArn: "STRING_VALUE",
 *   },
 *   AnalyticsConfiguration: { // AnalyticsConfiguration
 *     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PAUSING" || "PAUSED",
 *   },
 *   NlpConfiguration: { // NlpConfiguration
 *     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 *   },
 *   ProfileConfiguration: { // ProfileConfiguration
 *     DefaultProfiles: [ // DefaultProfiles
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new RestoreFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // RestoreFHIRDatastoreResponse
 * //   DatastoreId: "STRING_VALUE", // required
 * //   DatastoreArn: "STRING_VALUE", // required
 * //   DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED", // required
 * //   DatastoreEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RestoreFHIRDatastoreCommandInput - {@link RestoreFHIRDatastoreCommandInput}
 * @returns {@link RestoreFHIRDatastoreCommandOutput}
 * @see {@link RestoreFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link RestoreFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The data store is in a transition state and the user requested action cannot be performed.</p>
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
 * @example Restore a data store to a point in time
 * ```javascript
 * //
 * const input = {
 *   DatastoreName: "RestoredFhirDatastore",
 *   RestoreConfiguration: {
 *     ContinuousBackupRestoreConfiguration: {
 *       RestorePointTime: "2026-08-01T00:00:00Z"
 *     }
 *   },
 *   SourceDatastoreId: "source-datastore-id"
 * };
 * const command = new RestoreFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DatastoreArn: "arn:aws:healthlake:us-east-1:123456789012:datastore/fhir/restored-datastore-id",
 *   DatastoreEndpoint: "https://healthlake.us-east-1.amazonaws.com/datastore/restored-datastore-id/r4/",
 *   DatastoreId: "restored-datastore-id",
 *   DatastoreStatus: "CREATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RestoreFHIRDatastoreCommand extends command<RestoreFHIRDatastoreCommandInput, RestoreFHIRDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "RestoreFHIRDatastore",
  RestoreFHIRDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFHIRDatastoreRequest;
      output: RestoreFHIRDatastoreResponse;
    };
    sdk: {
      input: RestoreFHIRDatastoreCommandInput;
      output: RestoreFHIRDatastoreCommandOutput;
    };
  };
}
