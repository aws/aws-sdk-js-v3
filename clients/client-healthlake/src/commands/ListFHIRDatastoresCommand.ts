// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFHIRDatastoresRequest, ListFHIRDatastoresResponse } from "../models/models_0";
import { ListFHIRDatastores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFHIRDatastoresCommand}.
 */
export interface ListFHIRDatastoresCommandInput extends ListFHIRDatastoresRequest {}
/**
 * @public
 *
 * The output of {@link ListFHIRDatastoresCommand}.
 */
export interface ListFHIRDatastoresCommandOutput extends ListFHIRDatastoresResponse, __MetadataBearer {}

/**
 * <p>List all FHIR-enabled data stores in a user’s account, regardless of data store status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRDatastoresCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRDatastoresCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListFHIRDatastoresRequest
 *   Filter: { // DatastoreFilter
 *     DatastoreName: "STRING_VALUE",
 *     DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFHIRDatastoresCommand(input);
 * const response = await client.send(command);
 * // { // ListFHIRDatastoresResponse
 * //   DatastorePropertiesList: [ // DatastorePropertiesList // required
 * //     { // DatastoreProperties
 * //       DatastoreId: "STRING_VALUE", // required
 * //       DatastoreArn: "STRING_VALUE", // required
 * //       DatastoreName: "STRING_VALUE",
 * //       DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED", // required
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       DatastoreTypeVersion: "R4", // required
 * //       DatastoreEndpoint: "STRING_VALUE", // required
 * //       SseConfiguration: { // SseConfiguration
 * //         KmsEncryptionConfig: { // KmsEncryptionConfig
 * //           CmkType: "CUSTOMER_MANAGED_KMS_KEY" || "AWS_OWNED_KMS_KEY", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //       PreloadDataConfig: { // PreloadDataConfig
 * //         PreloadDataType: "SYNTHEA", // required
 * //       },
 * //       IdentityProviderConfiguration: { // IdentityProviderConfiguration
 * //         AuthorizationStrategy: "SMART_ON_FHIR_V1" || "SMART_ON_FHIR" || "AWS_AUTH", // required
 * //         FineGrainedAuthorizationEnabled: true || false,
 * //         Metadata: "STRING_VALUE",
 * //         IdpLambdaArn: "STRING_VALUE",
 * //       },
 * //       ErrorCause: { // ErrorCause
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorCategory: "RETRYABLE_ERROR" || "NON_RETRYABLE_ERROR",
 * //       },
 * //       NlpConfiguration: { // NlpConfiguration
 * //         Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //       },
 * //       AnalyticsConfiguration: { // AnalyticsConfiguration
 * //         Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PAUSING" || "PAUSED",
 * //       },
 * //       ProfileConfiguration: { // ProfileConfiguration
 * //         DefaultProfiles: [ // DefaultProfiles
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFHIRDatastoresCommandInput - {@link ListFHIRDatastoresCommandInput}
 * @returns {@link ListFHIRDatastoresCommandOutput}
 * @see {@link ListFHIRDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListFHIRDatastoresCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
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
export class ListFHIRDatastoresCommand extends command<ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput>(
  _ep0,
  _mw0,
  "ListFHIRDatastores",
  ListFHIRDatastores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFHIRDatastoresRequest;
      output: ListFHIRDatastoresResponse;
    };
    sdk: {
      input: ListFHIRDatastoresCommandInput;
      output: ListFHIRDatastoresCommandOutput;
    };
  };
}
