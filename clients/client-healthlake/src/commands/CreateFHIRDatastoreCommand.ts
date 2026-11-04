// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0";
import { CreateFHIRDatastore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFHIRDatastoreCommand}.
 */
export interface CreateFHIRDatastoreCommandInput extends CreateFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateFHIRDatastoreCommand}.
 */
export interface CreateFHIRDatastoreCommandOutput extends CreateFHIRDatastoreResponse, __MetadataBearer {}

/**
 * Create a FHIR-enabled data store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, CreateFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // CreateFHIRDatastoreRequest
 *   DatastoreName: "STRING_VALUE",
 *   DatastoreTypeVersion: "R4", // required
 *   SseConfiguration: { // SseConfiguration
 *     KmsEncryptionConfig: { // KmsEncryptionConfig
 *       CmkType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   PreloadDataConfig: { // PreloadDataConfig
 *     PreloadDataType: "SYNTHEA", // required
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
 *   BackupConfiguration: { // BackupConfiguration
 *     Status: "ENABLED" || "DISABLED",
 *     BackupType: "CONTINUOUS",
 *     RetentionPeriodInDays: Number("int"),
 *     BackupTagsEnabled: true || false,
 *   },
 * };
 * const command = new CreateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateFHIRDatastoreResponse
 * //   DatastoreId: "STRING_VALUE", // required
 * //   DatastoreArn: "STRING_VALUE", // required
 * //   DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED", // required
 * //   DatastoreEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateFHIRDatastoreCommandInput - {@link CreateFHIRDatastoreCommandInput}
 * @returns {@link CreateFHIRDatastoreCommandOutput}
 * @see {@link CreateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
 *
 * @public
 */
export class CreateFHIRDatastoreCommand extends command<CreateFHIRDatastoreCommandInput, CreateFHIRDatastoreCommandOutput>(
  _ep0,
  _mw0,
  "CreateFHIRDatastore",
  CreateFHIRDatastore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFHIRDatastoreRequest;
      output: CreateFHIRDatastoreResponse;
    };
    sdk: {
      input: CreateFHIRDatastoreCommandInput;
      output: CreateFHIRDatastoreCommandOutput;
    };
  };
}
