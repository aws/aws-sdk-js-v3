// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatasetGenerationRequest, GetDatasetGenerationResponse } from "../models/models_0";
import { GetDatasetGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatasetGenerationCommand}.
 */
export interface GetDatasetGenerationCommandInput extends GetDatasetGenerationRequest {}
/**
 * @public
 *
 * The output of {@link GetDatasetGenerationCommand}.
 */
export interface GetDatasetGenerationCommandOutput extends GetDatasetGenerationResponse, __MetadataBearer {}

/**
 * <p>Gets a dataset generation, including its status, the request it was started with, its progress counts, its redaction summary and its errors. Call this operation to track a generation that you started with <code>StartDatasetGeneration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetDatasetGenerationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetDatasetGenerationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetDatasetGenerationRequest
 *   datasetId: "STRING_VALUE", // required
 *   generationId: "STRING_VALUE", // required
 * };
 * const command = new GetDatasetGenerationCommand(input);
 * const response = await client.send(command);
 * // { // GetDatasetGenerationResponse
 * //   generationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   datasetId: "STRING_VALUE", // required
 * //   scenarioType: "FIXED" || "DYNAMIC", // required
 * //   status: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED" || "DELETING", // required
 * //   failureReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   completedAt: new Date("TIMESTAMP"),
 * //   source: { // GenerationSourceRecord Union: only one key present
 * //     traceGeneration: { // TraceGenerationRecord
 * //       sourceConfig: { // TraceSourceConfig Union: only one key present
 * //         cloudWatchLogs: { // CloudWatchLogsSourceConfig
 * //           logGroupNames: [ // CloudWatchLogsSourceConfigLogGroupNamesList
 * //             "STRING_VALUE",
 * //           ],
 * //           logGroupNamePrefixes: [ // CloudWatchLogsSourceConfigLogGroupNamePrefixesList
 * //             "STRING_VALUE",
 * //           ],
 * //           serviceNames: [ // ServiceNameList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //         },
 * //         onlineEvaluation: { // OnlineEvaluationSourceConfig
 * //           onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //         },
 * //         batchEvaluation: { // BatchEvaluationSourceConfig
 * //           batchEvaluationArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       selection: { // GenerationSelectionRecord Union: only one key present
 * //         filters: { // GenerationFilters
 * //           attributeFilters: [ // GenerationAttributeFilterList
 * //             { // GenerationAttributeFilter
 * //               key: "STRING_VALUE", // required
 * //               operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //               value: { // GenerationFilterValue Union: only one key present
 * //                 stringValue: "STRING_VALUE",
 * //                 doubleValue: Number("double"),
 * //                 booleanValue: true || false,
 * //               },
 * //             },
 * //           ],
 * //           turnCount: { // TurnCountRange
 * //             min: Number("int"),
 * //             max: Number("int"),
 * //           },
 * //           evaluatorFilters: [ // EvaluatorFilterList
 * //             { // EvaluatorFilter
 * //               evaluatorId: "STRING_VALUE", // required
 * //               evaluationDimensionName: "STRING_VALUE",
 * //               operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //               value: {//  Union: only one key present
 * //                 stringValue: "STRING_VALUE",
 * //                 doubleValue: Number("double"),
 * //                 booleanValue: true || false,
 * //               },
 * //               aggregation: "Min" || "Max" || "Mean" || "AllMatch" || "AnyMatch",
 * //             },
 * //           ],
 * //         },
 * //         identifiers: { // GenerationIdentifierCounts
 * //           sessionIdCount: Number("int"),
 * //           traceIdCount: Number("int"),
 * //         },
 * //       },
 * //       sampling: { // GenerationSamplingConfig
 * //         maxScenarios: Number("int"),
 * //       },
 * //       groundTruth: { // GroundTruthConfig
 * //         fields: [ // GroundTruthFieldList // required
 * //           "expected_response" || "expected_trajectory",
 * //         ],
 * //         qualityFilters: [
 * //           {
 * //             evaluatorId: "STRING_VALUE", // required
 * //             evaluationDimensionName: "STRING_VALUE",
 * //             operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //             value: {//  Union: only one key present
 * //               stringValue: "STRING_VALUE",
 * //               doubleValue: Number("double"),
 * //               booleanValue: true || false,
 * //             },
 * //             aggregation: "Min" || "Max" || "Mean" || "AllMatch" || "AnyMatch",
 * //           },
 * //         ],
 * //       },
 * //       redactionConfiguration: { // RedactionConfiguration
 * //         identifiers: [ // RedactionIdentifierList
 * //           "ADDRESS" || "AWS_SECRET_KEY" || "BANK_ACCOUNT_NUMBER_DE" || "BANK_ACCOUNT_NUMBER_ES" || "BANK_ACCOUNT_NUMBER_FR" || "BANK_ACCOUNT_NUMBER_GB" || "BANK_ACCOUNT_NUMBER_IT" || "BANK_ACCOUNT_NUMBER_US" || "CEP_CODE_BR" || "CNPJ_BR" || "CPF_CODE_BR" || "CREDIT_CARD_EXPIRATION" || "CREDIT_CARD_MAGNETIC_STRIPE" || "CREDIT_CARD_NUMBER" || "CREDIT_CARD_SECURITY_CODE" || "DATE_OF_BIRTH" || "DRIVERS_LICENSE_AT" || "DRIVERS_LICENSE_AU" || "DRIVERS_LICENSE_BE" || "DRIVERS_LICENSE_BG" || "DRIVERS_LICENSE_CA" || "DRIVERS_LICENSE_CY" || "DRIVERS_LICENSE_CZ" || "DRIVERS_LICENSE_DE" || "DRIVERS_LICENSE_DK" || "DRIVERS_LICENSE_EE" || "DRIVERS_LICENSE_ES" || "DRIVERS_LICENSE_FI" || "DRIVERS_LICENSE_FR" || "DRIVERS_LICENSE_GB" || "DRIVERS_LICENSE_GR" || "DRIVERS_LICENSE_HR" || "DRIVERS_LICENSE_HU" || "DRIVERS_LICENSE_IE" || "DRIVERS_LICENSE_IT" || "DRIVERS_LICENSE_LT" || "DRIVERS_LICENSE_LU" || "DRIVERS_LICENSE_LV" || "DRIVERS_LICENSE_MT" || "DRIVERS_LICENSE_NL" || "DRIVERS_LICENSE_PL" || "DRIVERS_LICENSE_PT" || "DRIVERS_LICENSE_RO" || "DRIVERS_LICENSE_SE" || "DRIVERS_LICENSE_SI" || "DRIVERS_LICENSE_SK" || "DRIVERS_LICENSE_US" || "DRUG_ENFORCEMENT_AGENCY_NUMBER_US" || "ELECTORAL_ROLL_NUMBER_GB" || "EMAIL_ADDRESS" || "HEALTH_INSURANCE_CARD_NUMBER_EU" || "HEALTH_INSURANCE_CLAIM_NUMBER_US" || "HEALTH_INSURANCE_NUMBER_FR" || "HEALTHCARE_PROCEDURE_CODE_US" || "INDIVIDUAL_TAX_IDENTIFICATION_NUMBER_US" || "INSEE_CODE_FR" || "IP_ADDRESS" || "LAT_LONG" || "MEDICARE_BENEFICIARY_NUMBER_US" || "NAME" || "NATIONAL_DRUG_CODE_US" || "NATIONAL_IDENTIFICATION_NUMBER_DE" || "NATIONAL_IDENTIFICATION_NUMBER_ES" || "NATIONAL_IDENTIFICATION_NUMBER_IT" || "NATIONAL_INSURANCE_NUMBER_GB" || "NATIONAL_PROVIDER_ID_US" || "NHS_NUMBER_GB" || "NIE_NUMBER_ES" || "NIF_NUMBER_ES" || "OPEN_SSH_PRIVATE_KEY" || "PASSPORT_NUMBER_CA" || "PASSPORT_NUMBER_DE" || "PASSPORT_NUMBER_ES" || "PASSPORT_NUMBER_FR" || "PASSPORT_NUMBER_GB" || "PASSPORT_NUMBER_IT" || "PASSPORT_NUMBER_US" || "PERMANENT_RESIDENCE_NUMBER_CA" || "PERSONAL_HEALTH_NUMBER_CA" || "PGP_PRIVATE_KEY" || "PHONE_NUMBER_BR" || "PHONE_NUMBER_DE" || "PHONE_NUMBER_ES" || "PHONE_NUMBER_FR" || "PHONE_NUMBER_GB" || "PHONE_NUMBER_IT" || "PHONE_NUMBER_US" || "PKCS_PRIVATE_KEY" || "POSTAL_CODE_CA" || "PUTTY_PRIVATE_KEY" || "RG_NUMBER_BR" || "SOCIAL_INSURANCE_NUMBER_CA" || "SSN_ES" || "SSN_US" || "TAX_ID_DE" || "TAX_ID_ES" || "TAX_ID_FR" || "TAX_ID_GB" || "VEHICLE_IDENTIFICATION_NUMBER" || "ZIP_CODE_US",
 * //         ],
 * //         customDataIdentifiers: [ // CustomDataIdentifierList
 * //           { // CustomDataIdentifier
 * //             name: "STRING_VALUE", // required
 * //             regex: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   generationResults: { // GenerationResults
 * //     sessionsMatched: Number("int"),
 * //     sessionsSelected: Number("int"),
 * //     sessionsUnscored: Number("int"),
 * //     sessionsFailed: Number("int"),
 * //     scenariosGenerated: Number("int"),
 * //     scenariosDeduplicated: Number("int"),
 * //     examplesWritten: Number("int"),
 * //     examplesWithGroundTruth: Number("int"),
 * //   },
 * //   redactionSummary: { // RedactionSummary
 * //     scenariosScanned: Number("int"),
 * //     findingCounts: { // FindingCountMap
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * //   errorDetails: [ // GenerationErrorDetailsList
 * //     { // GenerationErrorDetail
 * //       errorCode: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       count: Number("int"),
 * //       sessionIds: [ // GenerationErrorSessionIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDatasetGenerationCommandInput - {@link GetDatasetGenerationCommandInput}
 * @returns {@link GetDatasetGenerationCommandOutput}
 * @see {@link GetDatasetGenerationCommandInput} for command's `input` shape.
 * @see {@link GetDatasetGenerationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class GetDatasetGenerationCommand extends command<GetDatasetGenerationCommandInput, GetDatasetGenerationCommandOutput>(
  _ep0,
  _mw0,
  "GetDatasetGeneration",
  GetDatasetGeneration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatasetGenerationRequest;
      output: GetDatasetGenerationResponse;
    };
    sdk: {
      input: GetDatasetGenerationCommandInput;
      output: GetDatasetGenerationCommandOutput;
    };
  };
}
