// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultBedrockHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchDeleteEvaluationJobCommandInput,
  BatchDeleteEvaluationJobCommandOutput,
} from "./commands/BatchDeleteEvaluationJobCommand";
import {
  CancelAutomatedReasoningPolicyBuildWorkflowCommandInput,
  CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput,
} from "./commands/CancelAutomatedReasoningPolicyBuildWorkflowCommand";
import {
  CreateAutomatedReasoningPolicyCommandInput,
  CreateAutomatedReasoningPolicyCommandOutput,
} from "./commands/CreateAutomatedReasoningPolicyCommand";
import {
  CreateAutomatedReasoningPolicyTestCaseCommandInput,
  CreateAutomatedReasoningPolicyTestCaseCommandOutput,
} from "./commands/CreateAutomatedReasoningPolicyTestCaseCommand";
import {
  CreateAutomatedReasoningPolicyVersionCommandInput,
  CreateAutomatedReasoningPolicyVersionCommandOutput,
} from "./commands/CreateAutomatedReasoningPolicyVersionCommand";
import { CreateCustomModelCommandInput, CreateCustomModelCommandOutput } from "./commands/CreateCustomModelCommand";
import {
  CreateCustomModelDeploymentCommandInput,
  CreateCustomModelDeploymentCommandOutput,
} from "./commands/CreateCustomModelDeploymentCommand";
import {
  CreateEvaluationJobCommandInput,
  CreateEvaluationJobCommandOutput,
} from "./commands/CreateEvaluationJobCommand";
import {
  CreateFoundationModelAgreementCommandInput,
  CreateFoundationModelAgreementCommandOutput,
} from "./commands/CreateFoundationModelAgreementCommand";
import { CreateGuardrailCommandInput, CreateGuardrailCommandOutput } from "./commands/CreateGuardrailCommand";
import {
  CreateGuardrailVersionCommandInput,
  CreateGuardrailVersionCommandOutput,
} from "./commands/CreateGuardrailVersionCommand";
import {
  CreateInferenceProfileCommandInput,
  CreateInferenceProfileCommandOutput,
} from "./commands/CreateInferenceProfileCommand";
import {
  CreateMarketplaceModelEndpointCommandInput,
  CreateMarketplaceModelEndpointCommandOutput,
} from "./commands/CreateMarketplaceModelEndpointCommand";
import { CreateModelCopyJobCommandInput, CreateModelCopyJobCommandOutput } from "./commands/CreateModelCopyJobCommand";
import {
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
} from "./commands/CreateModelCustomizationJobCommand";
import {
  CreateModelImportJobCommandInput,
  CreateModelImportJobCommandOutput,
} from "./commands/CreateModelImportJobCommand";
import {
  CreateModelInvocationJobCommandInput,
  CreateModelInvocationJobCommandOutput,
} from "./commands/CreateModelInvocationJobCommand";
import { CreatePromptRouterCommandInput, CreatePromptRouterCommandOutput } from "./commands/CreatePromptRouterCommand";
import {
  CreateProvisionedModelThroughputCommandInput,
  CreateProvisionedModelThroughputCommandOutput,
} from "./commands/CreateProvisionedModelThroughputCommand";
import {
  DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput,
  DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput,
} from "./commands/DeleteAutomatedReasoningPolicyBuildWorkflowCommand";
import {
  DeleteAutomatedReasoningPolicyCommandInput,
  DeleteAutomatedReasoningPolicyCommandOutput,
} from "./commands/DeleteAutomatedReasoningPolicyCommand";
import {
  DeleteAutomatedReasoningPolicyTestCaseCommandInput,
  DeleteAutomatedReasoningPolicyTestCaseCommandOutput,
} from "./commands/DeleteAutomatedReasoningPolicyTestCaseCommand";
import { DeleteCustomModelCommandInput, DeleteCustomModelCommandOutput } from "./commands/DeleteCustomModelCommand";
import {
  DeleteCustomModelDeploymentCommandInput,
  DeleteCustomModelDeploymentCommandOutput,
} from "./commands/DeleteCustomModelDeploymentCommand";
import {
  DeleteEnforcedGuardrailConfigurationCommandInput,
  DeleteEnforcedGuardrailConfigurationCommandOutput,
} from "./commands/DeleteEnforcedGuardrailConfigurationCommand";
import {
  DeleteFoundationModelAgreementCommandInput,
  DeleteFoundationModelAgreementCommandOutput,
} from "./commands/DeleteFoundationModelAgreementCommand";
import { DeleteGuardrailCommandInput, DeleteGuardrailCommandOutput } from "./commands/DeleteGuardrailCommand";
import {
  DeleteImportedModelCommandInput,
  DeleteImportedModelCommandOutput,
} from "./commands/DeleteImportedModelCommand";
import {
  DeleteInferenceProfileCommandInput,
  DeleteInferenceProfileCommandOutput,
} from "./commands/DeleteInferenceProfileCommand";
import {
  DeleteMarketplaceModelEndpointCommandInput,
  DeleteMarketplaceModelEndpointCommandOutput,
} from "./commands/DeleteMarketplaceModelEndpointCommand";
import {
  DeleteModelInvocationLoggingConfigurationCommandInput,
  DeleteModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/DeleteModelInvocationLoggingConfigurationCommand";
import { DeletePromptRouterCommandInput, DeletePromptRouterCommandOutput } from "./commands/DeletePromptRouterCommand";
import {
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
} from "./commands/DeleteProvisionedModelThroughputCommand";
import {
  DeregisterMarketplaceModelEndpointCommandInput,
  DeregisterMarketplaceModelEndpointCommandOutput,
} from "./commands/DeregisterMarketplaceModelEndpointCommand";
import {
  ExportAutomatedReasoningPolicyVersionCommandInput,
  ExportAutomatedReasoningPolicyVersionCommandOutput,
} from "./commands/ExportAutomatedReasoningPolicyVersionCommand";
import {
  GetAutomatedReasoningPolicyAnnotationsCommandInput,
  GetAutomatedReasoningPolicyAnnotationsCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyAnnotationsCommand";
import {
  GetAutomatedReasoningPolicyBuildWorkflowCommandInput,
  GetAutomatedReasoningPolicyBuildWorkflowCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyBuildWorkflowCommand";
import {
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommandInput,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand";
import {
  GetAutomatedReasoningPolicyCommandInput,
  GetAutomatedReasoningPolicyCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyCommand";
import {
  GetAutomatedReasoningPolicyNextScenarioCommandInput,
  GetAutomatedReasoningPolicyNextScenarioCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyNextScenarioCommand";
import {
  GetAutomatedReasoningPolicyTestCaseCommandInput,
  GetAutomatedReasoningPolicyTestCaseCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyTestCaseCommand";
import {
  GetAutomatedReasoningPolicyTestResultCommandInput,
  GetAutomatedReasoningPolicyTestResultCommandOutput,
} from "./commands/GetAutomatedReasoningPolicyTestResultCommand";
import { GetCustomModelCommandInput, GetCustomModelCommandOutput } from "./commands/GetCustomModelCommand";
import {
  GetCustomModelDeploymentCommandInput,
  GetCustomModelDeploymentCommandOutput,
} from "./commands/GetCustomModelDeploymentCommand";
import { GetEvaluationJobCommandInput, GetEvaluationJobCommandOutput } from "./commands/GetEvaluationJobCommand";
import {
  GetFoundationModelAvailabilityCommandInput,
  GetFoundationModelAvailabilityCommandOutput,
} from "./commands/GetFoundationModelAvailabilityCommand";
import { GetFoundationModelCommandInput, GetFoundationModelCommandOutput } from "./commands/GetFoundationModelCommand";
import { GetGuardrailCommandInput, GetGuardrailCommandOutput } from "./commands/GetGuardrailCommand";
import { GetImportedModelCommandInput, GetImportedModelCommandOutput } from "./commands/GetImportedModelCommand";
import {
  GetInferenceProfileCommandInput,
  GetInferenceProfileCommandOutput,
} from "./commands/GetInferenceProfileCommand";
import {
  GetMarketplaceModelEndpointCommandInput,
  GetMarketplaceModelEndpointCommandOutput,
} from "./commands/GetMarketplaceModelEndpointCommand";
import { GetModelCopyJobCommandInput, GetModelCopyJobCommandOutput } from "./commands/GetModelCopyJobCommand";
import {
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
} from "./commands/GetModelCustomizationJobCommand";
import { GetModelImportJobCommandInput, GetModelImportJobCommandOutput } from "./commands/GetModelImportJobCommand";
import {
  GetModelInvocationJobCommandInput,
  GetModelInvocationJobCommandOutput,
} from "./commands/GetModelInvocationJobCommand";
import {
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/GetModelInvocationLoggingConfigurationCommand";
import { GetPromptRouterCommandInput, GetPromptRouterCommandOutput } from "./commands/GetPromptRouterCommand";
import {
  GetProvisionedModelThroughputCommandInput,
  GetProvisionedModelThroughputCommandOutput,
} from "./commands/GetProvisionedModelThroughputCommand";
import {
  GetUseCaseForModelAccessCommandInput,
  GetUseCaseForModelAccessCommandOutput,
} from "./commands/GetUseCaseForModelAccessCommand";
import {
  ListAutomatedReasoningPoliciesCommandInput,
  ListAutomatedReasoningPoliciesCommandOutput,
} from "./commands/ListAutomatedReasoningPoliciesCommand";
import {
  ListAutomatedReasoningPolicyBuildWorkflowsCommandInput,
  ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput,
} from "./commands/ListAutomatedReasoningPolicyBuildWorkflowsCommand";
import {
  ListAutomatedReasoningPolicyTestCasesCommandInput,
  ListAutomatedReasoningPolicyTestCasesCommandOutput,
} from "./commands/ListAutomatedReasoningPolicyTestCasesCommand";
import {
  ListAutomatedReasoningPolicyTestResultsCommandInput,
  ListAutomatedReasoningPolicyTestResultsCommandOutput,
} from "./commands/ListAutomatedReasoningPolicyTestResultsCommand";
import {
  ListCustomModelDeploymentsCommandInput,
  ListCustomModelDeploymentsCommandOutput,
} from "./commands/ListCustomModelDeploymentsCommand";
import { ListCustomModelsCommandInput, ListCustomModelsCommandOutput } from "./commands/ListCustomModelsCommand";
import {
  ListEnforcedGuardrailsConfigurationCommandInput,
  ListEnforcedGuardrailsConfigurationCommandOutput,
} from "./commands/ListEnforcedGuardrailsConfigurationCommand";
import { ListEvaluationJobsCommandInput, ListEvaluationJobsCommandOutput } from "./commands/ListEvaluationJobsCommand";
import {
  ListFoundationModelAgreementOffersCommandInput,
  ListFoundationModelAgreementOffersCommandOutput,
} from "./commands/ListFoundationModelAgreementOffersCommand";
import {
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
} from "./commands/ListFoundationModelsCommand";
import { ListGuardrailsCommandInput, ListGuardrailsCommandOutput } from "./commands/ListGuardrailsCommand";
import { ListImportedModelsCommandInput, ListImportedModelsCommandOutput } from "./commands/ListImportedModelsCommand";
import {
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput,
} from "./commands/ListInferenceProfilesCommand";
import {
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput,
} from "./commands/ListMarketplaceModelEndpointsCommand";
import { ListModelCopyJobsCommandInput, ListModelCopyJobsCommandOutput } from "./commands/ListModelCopyJobsCommand";
import {
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "./commands/ListModelCustomizationJobsCommand";
import {
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput,
} from "./commands/ListModelImportJobsCommand";
import {
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput,
} from "./commands/ListModelInvocationJobsCommand";
import { ListPromptRoutersCommandInput, ListPromptRoutersCommandOutput } from "./commands/ListPromptRoutersCommand";
import {
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "./commands/ListProvisionedModelThroughputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutEnforcedGuardrailConfigurationCommandInput,
  PutEnforcedGuardrailConfigurationCommandOutput,
} from "./commands/PutEnforcedGuardrailConfigurationCommand";
import {
  PutModelInvocationLoggingConfigurationCommandInput,
  PutModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/PutModelInvocationLoggingConfigurationCommand";
import {
  PutUseCaseForModelAccessCommandInput,
  PutUseCaseForModelAccessCommandOutput,
} from "./commands/PutUseCaseForModelAccessCommand";
import {
  RegisterMarketplaceModelEndpointCommandInput,
  RegisterMarketplaceModelEndpointCommandOutput,
} from "./commands/RegisterMarketplaceModelEndpointCommand";
import {
  StartAutomatedReasoningPolicyBuildWorkflowCommandInput,
  StartAutomatedReasoningPolicyBuildWorkflowCommandOutput,
} from "./commands/StartAutomatedReasoningPolicyBuildWorkflowCommand";
import {
  StartAutomatedReasoningPolicyTestWorkflowCommandInput,
  StartAutomatedReasoningPolicyTestWorkflowCommandOutput,
} from "./commands/StartAutomatedReasoningPolicyTestWorkflowCommand";
import { StopEvaluationJobCommandInput, StopEvaluationJobCommandOutput } from "./commands/StopEvaluationJobCommand";
import {
  StopModelCustomizationJobCommandInput,
  StopModelCustomizationJobCommandOutput,
} from "./commands/StopModelCustomizationJobCommand";
import {
  StopModelInvocationJobCommandInput,
  StopModelInvocationJobCommandOutput,
} from "./commands/StopModelInvocationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAutomatedReasoningPolicyAnnotationsCommandInput,
  UpdateAutomatedReasoningPolicyAnnotationsCommandOutput,
} from "./commands/UpdateAutomatedReasoningPolicyAnnotationsCommand";
import {
  UpdateAutomatedReasoningPolicyCommandInput,
  UpdateAutomatedReasoningPolicyCommandOutput,
} from "./commands/UpdateAutomatedReasoningPolicyCommand";
import {
  UpdateAutomatedReasoningPolicyTestCaseCommandInput,
  UpdateAutomatedReasoningPolicyTestCaseCommandOutput,
} from "./commands/UpdateAutomatedReasoningPolicyTestCaseCommand";
import {
  UpdateCustomModelDeploymentCommandInput,
  UpdateCustomModelDeploymentCommandOutput,
} from "./commands/UpdateCustomModelDeploymentCommand";
import { UpdateGuardrailCommandInput, UpdateGuardrailCommandOutput } from "./commands/UpdateGuardrailCommand";
import {
  UpdateMarketplaceModelEndpointCommandInput,
  UpdateMarketplaceModelEndpointCommandOutput,
} from "./commands/UpdateMarketplaceModelEndpointCommand";
import {
  UpdateProvisionedModelThroughputCommandInput,
  UpdateProvisionedModelThroughputCommandOutput,
} from "./commands/UpdateProvisionedModelThroughputCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchDeleteEvaluationJobCommandInput
  | CancelAutomatedReasoningPolicyBuildWorkflowCommandInput
  | CreateAutomatedReasoningPolicyCommandInput
  | CreateAutomatedReasoningPolicyTestCaseCommandInput
  | CreateAutomatedReasoningPolicyVersionCommandInput
  | CreateCustomModelCommandInput
  | CreateCustomModelDeploymentCommandInput
  | CreateEvaluationJobCommandInput
  | CreateFoundationModelAgreementCommandInput
  | CreateGuardrailCommandInput
  | CreateGuardrailVersionCommandInput
  | CreateInferenceProfileCommandInput
  | CreateMarketplaceModelEndpointCommandInput
  | CreateModelCopyJobCommandInput
  | CreateModelCustomizationJobCommandInput
  | CreateModelImportJobCommandInput
  | CreateModelInvocationJobCommandInput
  | CreatePromptRouterCommandInput
  | CreateProvisionedModelThroughputCommandInput
  | DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput
  | DeleteAutomatedReasoningPolicyCommandInput
  | DeleteAutomatedReasoningPolicyTestCaseCommandInput
  | DeleteCustomModelCommandInput
  | DeleteCustomModelDeploymentCommandInput
  | DeleteEnforcedGuardrailConfigurationCommandInput
  | DeleteFoundationModelAgreementCommandInput
  | DeleteGuardrailCommandInput
  | DeleteImportedModelCommandInput
  | DeleteInferenceProfileCommandInput
  | DeleteMarketplaceModelEndpointCommandInput
  | DeleteModelInvocationLoggingConfigurationCommandInput
  | DeletePromptRouterCommandInput
  | DeleteProvisionedModelThroughputCommandInput
  | DeregisterMarketplaceModelEndpointCommandInput
  | ExportAutomatedReasoningPolicyVersionCommandInput
  | GetAutomatedReasoningPolicyAnnotationsCommandInput
  | GetAutomatedReasoningPolicyBuildWorkflowCommandInput
  | GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommandInput
  | GetAutomatedReasoningPolicyCommandInput
  | GetAutomatedReasoningPolicyNextScenarioCommandInput
  | GetAutomatedReasoningPolicyTestCaseCommandInput
  | GetAutomatedReasoningPolicyTestResultCommandInput
  | GetCustomModelCommandInput
  | GetCustomModelDeploymentCommandInput
  | GetEvaluationJobCommandInput
  | GetFoundationModelAvailabilityCommandInput
  | GetFoundationModelCommandInput
  | GetGuardrailCommandInput
  | GetImportedModelCommandInput
  | GetInferenceProfileCommandInput
  | GetMarketplaceModelEndpointCommandInput
  | GetModelCopyJobCommandInput
  | GetModelCustomizationJobCommandInput
  | GetModelImportJobCommandInput
  | GetModelInvocationJobCommandInput
  | GetModelInvocationLoggingConfigurationCommandInput
  | GetPromptRouterCommandInput
  | GetProvisionedModelThroughputCommandInput
  | GetUseCaseForModelAccessCommandInput
  | ListAutomatedReasoningPoliciesCommandInput
  | ListAutomatedReasoningPolicyBuildWorkflowsCommandInput
  | ListAutomatedReasoningPolicyTestCasesCommandInput
  | ListAutomatedReasoningPolicyTestResultsCommandInput
  | ListCustomModelDeploymentsCommandInput
  | ListCustomModelsCommandInput
  | ListEnforcedGuardrailsConfigurationCommandInput
  | ListEvaluationJobsCommandInput
  | ListFoundationModelAgreementOffersCommandInput
  | ListFoundationModelsCommandInput
  | ListGuardrailsCommandInput
  | ListImportedModelsCommandInput
  | ListInferenceProfilesCommandInput
  | ListMarketplaceModelEndpointsCommandInput
  | ListModelCopyJobsCommandInput
  | ListModelCustomizationJobsCommandInput
  | ListModelImportJobsCommandInput
  | ListModelInvocationJobsCommandInput
  | ListPromptRoutersCommandInput
  | ListProvisionedModelThroughputsCommandInput
  | ListTagsForResourceCommandInput
  | PutEnforcedGuardrailConfigurationCommandInput
  | PutModelInvocationLoggingConfigurationCommandInput
  | PutUseCaseForModelAccessCommandInput
  | RegisterMarketplaceModelEndpointCommandInput
  | StartAutomatedReasoningPolicyBuildWorkflowCommandInput
  | StartAutomatedReasoningPolicyTestWorkflowCommandInput
  | StopEvaluationJobCommandInput
  | StopModelCustomizationJobCommandInput
  | StopModelInvocationJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAutomatedReasoningPolicyAnnotationsCommandInput
  | UpdateAutomatedReasoningPolicyCommandInput
  | UpdateAutomatedReasoningPolicyTestCaseCommandInput
  | UpdateCustomModelDeploymentCommandInput
  | UpdateGuardrailCommandInput
  | UpdateMarketplaceModelEndpointCommandInput
  | UpdateProvisionedModelThroughputCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchDeleteEvaluationJobCommandOutput
  | CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput
  | CreateAutomatedReasoningPolicyCommandOutput
  | CreateAutomatedReasoningPolicyTestCaseCommandOutput
  | CreateAutomatedReasoningPolicyVersionCommandOutput
  | CreateCustomModelCommandOutput
  | CreateCustomModelDeploymentCommandOutput
  | CreateEvaluationJobCommandOutput
  | CreateFoundationModelAgreementCommandOutput
  | CreateGuardrailCommandOutput
  | CreateGuardrailVersionCommandOutput
  | CreateInferenceProfileCommandOutput
  | CreateMarketplaceModelEndpointCommandOutput
  | CreateModelCopyJobCommandOutput
  | CreateModelCustomizationJobCommandOutput
  | CreateModelImportJobCommandOutput
  | CreateModelInvocationJobCommandOutput
  | CreatePromptRouterCommandOutput
  | CreateProvisionedModelThroughputCommandOutput
  | DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput
  | DeleteAutomatedReasoningPolicyCommandOutput
  | DeleteAutomatedReasoningPolicyTestCaseCommandOutput
  | DeleteCustomModelCommandOutput
  | DeleteCustomModelDeploymentCommandOutput
  | DeleteEnforcedGuardrailConfigurationCommandOutput
  | DeleteFoundationModelAgreementCommandOutput
  | DeleteGuardrailCommandOutput
  | DeleteImportedModelCommandOutput
  | DeleteInferenceProfileCommandOutput
  | DeleteMarketplaceModelEndpointCommandOutput
  | DeleteModelInvocationLoggingConfigurationCommandOutput
  | DeletePromptRouterCommandOutput
  | DeleteProvisionedModelThroughputCommandOutput
  | DeregisterMarketplaceModelEndpointCommandOutput
  | ExportAutomatedReasoningPolicyVersionCommandOutput
  | GetAutomatedReasoningPolicyAnnotationsCommandOutput
  | GetAutomatedReasoningPolicyBuildWorkflowCommandOutput
  | GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommandOutput
  | GetAutomatedReasoningPolicyCommandOutput
  | GetAutomatedReasoningPolicyNextScenarioCommandOutput
  | GetAutomatedReasoningPolicyTestCaseCommandOutput
  | GetAutomatedReasoningPolicyTestResultCommandOutput
  | GetCustomModelCommandOutput
  | GetCustomModelDeploymentCommandOutput
  | GetEvaluationJobCommandOutput
  | GetFoundationModelAvailabilityCommandOutput
  | GetFoundationModelCommandOutput
  | GetGuardrailCommandOutput
  | GetImportedModelCommandOutput
  | GetInferenceProfileCommandOutput
  | GetMarketplaceModelEndpointCommandOutput
  | GetModelCopyJobCommandOutput
  | GetModelCustomizationJobCommandOutput
  | GetModelImportJobCommandOutput
  | GetModelInvocationJobCommandOutput
  | GetModelInvocationLoggingConfigurationCommandOutput
  | GetPromptRouterCommandOutput
  | GetProvisionedModelThroughputCommandOutput
  | GetUseCaseForModelAccessCommandOutput
  | ListAutomatedReasoningPoliciesCommandOutput
  | ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput
  | ListAutomatedReasoningPolicyTestCasesCommandOutput
  | ListAutomatedReasoningPolicyTestResultsCommandOutput
  | ListCustomModelDeploymentsCommandOutput
  | ListCustomModelsCommandOutput
  | ListEnforcedGuardrailsConfigurationCommandOutput
  | ListEvaluationJobsCommandOutput
  | ListFoundationModelAgreementOffersCommandOutput
  | ListFoundationModelsCommandOutput
  | ListGuardrailsCommandOutput
  | ListImportedModelsCommandOutput
  | ListInferenceProfilesCommandOutput
  | ListMarketplaceModelEndpointsCommandOutput
  | ListModelCopyJobsCommandOutput
  | ListModelCustomizationJobsCommandOutput
  | ListModelImportJobsCommandOutput
  | ListModelInvocationJobsCommandOutput
  | ListPromptRoutersCommandOutput
  | ListProvisionedModelThroughputsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutEnforcedGuardrailConfigurationCommandOutput
  | PutModelInvocationLoggingConfigurationCommandOutput
  | PutUseCaseForModelAccessCommandOutput
  | RegisterMarketplaceModelEndpointCommandOutput
  | StartAutomatedReasoningPolicyBuildWorkflowCommandOutput
  | StartAutomatedReasoningPolicyTestWorkflowCommandOutput
  | StopEvaluationJobCommandOutput
  | StopModelCustomizationJobCommandOutput
  | StopModelInvocationJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAutomatedReasoningPolicyAnnotationsCommandOutput
  | UpdateAutomatedReasoningPolicyCommandOutput
  | UpdateAutomatedReasoningPolicyTestCaseCommandOutput
  | UpdateCustomModelDeploymentCommandOutput
  | UpdateGuardrailCommandOutput
  | UpdateMarketplaceModelEndpointCommandOutput
  | UpdateProvisionedModelThroughputCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type BedrockClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of BedrockClient class constructor that set the region, credentials and other options.
 */
export interface BedrockClientConfig extends BedrockClientConfigType {}

/**
 * @public
 */
export type BedrockClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of BedrockClient class. This is resolved and normalized from the {@link BedrockClientConfig | constructor configuration interface}.
 */
export interface BedrockClientResolvedConfig extends BedrockClientResolvedConfigType {}

/**
 * <p>Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models.</p>
 * @public
 */
export class BedrockClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockClient class. This is resolved and normalized from the {@link BedrockClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "smithy.api#httpBearerAuth": config.token,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
