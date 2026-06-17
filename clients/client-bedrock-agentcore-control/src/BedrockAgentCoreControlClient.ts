// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultBedrockAgentCoreControlHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddDatasetExamplesCommandInput,
  AddDatasetExamplesCommandOutput,
} from "./commands/AddDatasetExamplesCommand";
import type {
  CreateAgentRuntimeCommandInput,
  CreateAgentRuntimeCommandOutput,
} from "./commands/CreateAgentRuntimeCommand";
import type {
  CreateAgentRuntimeEndpointCommandInput,
  CreateAgentRuntimeEndpointCommandOutput,
} from "./commands/CreateAgentRuntimeEndpointCommand";
import type {
  CreateApiKeyCredentialProviderCommandInput,
  CreateApiKeyCredentialProviderCommandOutput,
} from "./commands/CreateApiKeyCredentialProviderCommand";
import type { CreateBrowserCommandInput, CreateBrowserCommandOutput } from "./commands/CreateBrowserCommand";
import type {
  CreateBrowserProfileCommandInput,
  CreateBrowserProfileCommandOutput,
} from "./commands/CreateBrowserProfileCommand";
import type {
  CreateCodeInterpreterCommandInput,
  CreateCodeInterpreterCommandOutput,
} from "./commands/CreateCodeInterpreterCommand";
import type {
  CreateConfigurationBundleCommandInput,
  CreateConfigurationBundleCommandOutput,
} from "./commands/CreateConfigurationBundleCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type {
  CreateDatasetVersionCommandInput,
  CreateDatasetVersionCommandOutput,
} from "./commands/CreateDatasetVersionCommand";
import type { CreateEvaluatorCommandInput, CreateEvaluatorCommandOutput } from "./commands/CreateEvaluatorCommand";
import type { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import type {
  CreateGatewayRuleCommandInput,
  CreateGatewayRuleCommandOutput,
} from "./commands/CreateGatewayRuleCommand";
import type {
  CreateGatewayTargetCommandInput,
  CreateGatewayTargetCommandOutput,
} from "./commands/CreateGatewayTargetCommand";
import type { CreateHarnessCommandInput, CreateHarnessCommandOutput } from "./commands/CreateHarnessCommand";
import type {
  CreateHarnessEndpointCommandInput,
  CreateHarnessEndpointCommandOutput,
} from "./commands/CreateHarnessEndpointCommand";
import type { CreateMemoryCommandInput, CreateMemoryCommandOutput } from "./commands/CreateMemoryCommand";
import type {
  CreateOauth2CredentialProviderCommandInput,
  CreateOauth2CredentialProviderCommandOutput,
} from "./commands/CreateOauth2CredentialProviderCommand";
import type {
  CreateOnlineEvaluationConfigCommandInput,
  CreateOnlineEvaluationConfigCommandOutput,
} from "./commands/CreateOnlineEvaluationConfigCommand";
import type {
  CreatePaymentConnectorCommandInput,
  CreatePaymentConnectorCommandOutput,
} from "./commands/CreatePaymentConnectorCommand";
import type {
  CreatePaymentCredentialProviderCommandInput,
  CreatePaymentCredentialProviderCommandOutput,
} from "./commands/CreatePaymentCredentialProviderCommand";
import type {
  CreatePaymentManagerCommandInput,
  CreatePaymentManagerCommandOutput,
} from "./commands/CreatePaymentManagerCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type {
  CreatePolicyEngineCommandInput,
  CreatePolicyEngineCommandOutput,
} from "./commands/CreatePolicyEngineCommand";
import type { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "./commands/CreateRegistryCommand";
import type {
  CreateRegistryRecordCommandInput,
  CreateRegistryRecordCommandOutput,
} from "./commands/CreateRegistryRecordCommand";
import type {
  CreateWorkloadIdentityCommandInput,
  CreateWorkloadIdentityCommandOutput,
} from "./commands/CreateWorkloadIdentityCommand";
import type {
  DeleteAgentRuntimeCommandInput,
  DeleteAgentRuntimeCommandOutput,
} from "./commands/DeleteAgentRuntimeCommand";
import type {
  DeleteAgentRuntimeEndpointCommandInput,
  DeleteAgentRuntimeEndpointCommandOutput,
} from "./commands/DeleteAgentRuntimeEndpointCommand";
import type {
  DeleteApiKeyCredentialProviderCommandInput,
  DeleteApiKeyCredentialProviderCommandOutput,
} from "./commands/DeleteApiKeyCredentialProviderCommand";
import type { DeleteBrowserCommandInput, DeleteBrowserCommandOutput } from "./commands/DeleteBrowserCommand";
import type {
  DeleteBrowserProfileCommandInput,
  DeleteBrowserProfileCommandOutput,
} from "./commands/DeleteBrowserProfileCommand";
import type {
  DeleteCodeInterpreterCommandInput,
  DeleteCodeInterpreterCommandOutput,
} from "./commands/DeleteCodeInterpreterCommand";
import type {
  DeleteConfigurationBundleCommandInput,
  DeleteConfigurationBundleCommandOutput,
} from "./commands/DeleteConfigurationBundleCommand";
import type { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import type {
  DeleteDatasetExamplesCommandInput,
  DeleteDatasetExamplesCommandOutput,
} from "./commands/DeleteDatasetExamplesCommand";
import type { DeleteEvaluatorCommandInput, DeleteEvaluatorCommandOutput } from "./commands/DeleteEvaluatorCommand";
import type { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import type {
  DeleteGatewayRuleCommandInput,
  DeleteGatewayRuleCommandOutput,
} from "./commands/DeleteGatewayRuleCommand";
import type {
  DeleteGatewayTargetCommandInput,
  DeleteGatewayTargetCommandOutput,
} from "./commands/DeleteGatewayTargetCommand";
import type { DeleteHarnessCommandInput, DeleteHarnessCommandOutput } from "./commands/DeleteHarnessCommand";
import type {
  DeleteHarnessEndpointCommandInput,
  DeleteHarnessEndpointCommandOutput,
} from "./commands/DeleteHarnessEndpointCommand";
import type { DeleteMemoryCommandInput, DeleteMemoryCommandOutput } from "./commands/DeleteMemoryCommand";
import type {
  DeleteOauth2CredentialProviderCommandInput,
  DeleteOauth2CredentialProviderCommandOutput,
} from "./commands/DeleteOauth2CredentialProviderCommand";
import type {
  DeleteOnlineEvaluationConfigCommandInput,
  DeleteOnlineEvaluationConfigCommandOutput,
} from "./commands/DeleteOnlineEvaluationConfigCommand";
import type {
  DeletePaymentConnectorCommandInput,
  DeletePaymentConnectorCommandOutput,
} from "./commands/DeletePaymentConnectorCommand";
import type {
  DeletePaymentCredentialProviderCommandInput,
  DeletePaymentCredentialProviderCommandOutput,
} from "./commands/DeletePaymentCredentialProviderCommand";
import type {
  DeletePaymentManagerCommandInput,
  DeletePaymentManagerCommandOutput,
} from "./commands/DeletePaymentManagerCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type {
  DeletePolicyEngineCommandInput,
  DeletePolicyEngineCommandOutput,
} from "./commands/DeletePolicyEngineCommand";
import type { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "./commands/DeleteRegistryCommand";
import type {
  DeleteRegistryRecordCommandInput,
  DeleteRegistryRecordCommandOutput,
} from "./commands/DeleteRegistryRecordCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeleteWorkloadIdentityCommandInput,
  DeleteWorkloadIdentityCommandOutput,
} from "./commands/DeleteWorkloadIdentityCommand";
import type { GetAgentRuntimeCommandInput, GetAgentRuntimeCommandOutput } from "./commands/GetAgentRuntimeCommand";
import type {
  GetAgentRuntimeEndpointCommandInput,
  GetAgentRuntimeEndpointCommandOutput,
} from "./commands/GetAgentRuntimeEndpointCommand";
import type {
  GetApiKeyCredentialProviderCommandInput,
  GetApiKeyCredentialProviderCommandOutput,
} from "./commands/GetApiKeyCredentialProviderCommand";
import type { GetBrowserCommandInput, GetBrowserCommandOutput } from "./commands/GetBrowserCommand";
import type {
  GetBrowserProfileCommandInput,
  GetBrowserProfileCommandOutput,
} from "./commands/GetBrowserProfileCommand";
import type {
  GetCodeInterpreterCommandInput,
  GetCodeInterpreterCommandOutput,
} from "./commands/GetCodeInterpreterCommand";
import type {
  GetConfigurationBundleCommandInput,
  GetConfigurationBundleCommandOutput,
} from "./commands/GetConfigurationBundleCommand";
import type {
  GetConfigurationBundleVersionCommandInput,
  GetConfigurationBundleVersionCommandOutput,
} from "./commands/GetConfigurationBundleVersionCommand";
import type { GetDatasetCommandInput, GetDatasetCommandOutput } from "./commands/GetDatasetCommand";
import type { GetEvaluatorCommandInput, GetEvaluatorCommandOutput } from "./commands/GetEvaluatorCommand";
import type { GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import type { GetGatewayRuleCommandInput, GetGatewayRuleCommandOutput } from "./commands/GetGatewayRuleCommand";
import type { GetGatewayTargetCommandInput, GetGatewayTargetCommandOutput } from "./commands/GetGatewayTargetCommand";
import type { GetHarnessCommandInput, GetHarnessCommandOutput } from "./commands/GetHarnessCommand";
import type {
  GetHarnessEndpointCommandInput,
  GetHarnessEndpointCommandOutput,
} from "./commands/GetHarnessEndpointCommand";
import type { GetMemoryCommandInput, GetMemoryCommandOutput } from "./commands/GetMemoryCommand";
import type {
  GetOauth2CredentialProviderCommandInput,
  GetOauth2CredentialProviderCommandOutput,
} from "./commands/GetOauth2CredentialProviderCommand";
import type {
  GetOnlineEvaluationConfigCommandInput,
  GetOnlineEvaluationConfigCommandOutput,
} from "./commands/GetOnlineEvaluationConfigCommand";
import type {
  GetPaymentConnectorCommandInput,
  GetPaymentConnectorCommandOutput,
} from "./commands/GetPaymentConnectorCommand";
import type {
  GetPaymentCredentialProviderCommandInput,
  GetPaymentCredentialProviderCommandOutput,
} from "./commands/GetPaymentCredentialProviderCommand";
import type {
  GetPaymentManagerCommandInput,
  GetPaymentManagerCommandOutput,
} from "./commands/GetPaymentManagerCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetPolicyEngineCommandInput, GetPolicyEngineCommandOutput } from "./commands/GetPolicyEngineCommand";
import type {
  GetPolicyEngineSummaryCommandInput,
  GetPolicyEngineSummaryCommandOutput,
} from "./commands/GetPolicyEngineSummaryCommand";
import type {
  GetPolicyGenerationCommandInput,
  GetPolicyGenerationCommandOutput,
} from "./commands/GetPolicyGenerationCommand";
import type {
  GetPolicyGenerationSummaryCommandInput,
  GetPolicyGenerationSummaryCommandOutput,
} from "./commands/GetPolicyGenerationSummaryCommand";
import type { GetPolicySummaryCommandInput, GetPolicySummaryCommandOutput } from "./commands/GetPolicySummaryCommand";
import type { GetRegistryCommandInput, GetRegistryCommandOutput } from "./commands/GetRegistryCommand";
import type {
  GetRegistryRecordCommandInput,
  GetRegistryRecordCommandOutput,
} from "./commands/GetRegistryRecordCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type { GetTokenVaultCommandInput, GetTokenVaultCommandOutput } from "./commands/GetTokenVaultCommand";
import type {
  GetWorkloadIdentityCommandInput,
  GetWorkloadIdentityCommandOutput,
} from "./commands/GetWorkloadIdentityCommand";
import type {
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput,
} from "./commands/ListAgentRuntimeEndpointsCommand";
import type {
  ListAgentRuntimesCommandInput,
  ListAgentRuntimesCommandOutput,
} from "./commands/ListAgentRuntimesCommand";
import type {
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput,
} from "./commands/ListAgentRuntimeVersionsCommand";
import type {
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput,
} from "./commands/ListApiKeyCredentialProvidersCommand";
import type {
  ListBrowserProfilesCommandInput,
  ListBrowserProfilesCommandOutput,
} from "./commands/ListBrowserProfilesCommand";
import type { ListBrowsersCommandInput, ListBrowsersCommandOutput } from "./commands/ListBrowsersCommand";
import type {
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput,
} from "./commands/ListCodeInterpretersCommand";
import type {
  ListConfigurationBundlesCommandInput,
  ListConfigurationBundlesCommandOutput,
} from "./commands/ListConfigurationBundlesCommand";
import type {
  ListConfigurationBundleVersionsCommandInput,
  ListConfigurationBundleVersionsCommandOutput,
} from "./commands/ListConfigurationBundleVersionsCommand";
import type {
  ListDatasetExamplesCommandInput,
  ListDatasetExamplesCommandOutput,
} from "./commands/ListDatasetExamplesCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type {
  ListDatasetVersionsCommandInput,
  ListDatasetVersionsCommandOutput,
} from "./commands/ListDatasetVersionsCommand";
import type { ListEvaluatorsCommandInput, ListEvaluatorsCommandOutput } from "./commands/ListEvaluatorsCommand";
import type { ListGatewayRulesCommandInput, ListGatewayRulesCommandOutput } from "./commands/ListGatewayRulesCommand";
import type { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import type {
  ListGatewayTargetsCommandInput,
  ListGatewayTargetsCommandOutput,
} from "./commands/ListGatewayTargetsCommand";
import type {
  ListHarnessEndpointsCommandInput,
  ListHarnessEndpointsCommandOutput,
} from "./commands/ListHarnessEndpointsCommand";
import type { ListHarnessesCommandInput, ListHarnessesCommandOutput } from "./commands/ListHarnessesCommand";
import type {
  ListHarnessVersionsCommandInput,
  ListHarnessVersionsCommandOutput,
} from "./commands/ListHarnessVersionsCommand";
import type { ListMemoriesCommandInput, ListMemoriesCommandOutput } from "./commands/ListMemoriesCommand";
import type {
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput,
} from "./commands/ListOauth2CredentialProvidersCommand";
import type {
  ListOnlineEvaluationConfigsCommandInput,
  ListOnlineEvaluationConfigsCommandOutput,
} from "./commands/ListOnlineEvaluationConfigsCommand";
import type {
  ListPaymentConnectorsCommandInput,
  ListPaymentConnectorsCommandOutput,
} from "./commands/ListPaymentConnectorsCommand";
import type {
  ListPaymentCredentialProvidersCommandInput,
  ListPaymentCredentialProvidersCommandOutput,
} from "./commands/ListPaymentCredentialProvidersCommand";
import type {
  ListPaymentManagersCommandInput,
  ListPaymentManagersCommandOutput,
} from "./commands/ListPaymentManagersCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type {
  ListPolicyEnginesCommandInput,
  ListPolicyEnginesCommandOutput,
} from "./commands/ListPolicyEnginesCommand";
import type {
  ListPolicyEngineSummariesCommandInput,
  ListPolicyEngineSummariesCommandOutput,
} from "./commands/ListPolicyEngineSummariesCommand";
import type {
  ListPolicyGenerationAssetsCommandInput,
  ListPolicyGenerationAssetsCommandOutput,
} from "./commands/ListPolicyGenerationAssetsCommand";
import type {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import type {
  ListPolicyGenerationSummariesCommandInput,
  ListPolicyGenerationSummariesCommandOutput,
} from "./commands/ListPolicyGenerationSummariesCommand";
import type {
  ListPolicySummariesCommandInput,
  ListPolicySummariesCommandOutput,
} from "./commands/ListPolicySummariesCommand";
import type { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "./commands/ListRegistriesCommand";
import type {
  ListRegistryRecordsCommandInput,
  ListRegistryRecordsCommandOutput,
} from "./commands/ListRegistryRecordsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput,
} from "./commands/ListWorkloadIdentitiesCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type { SetTokenVaultCMKCommandInput, SetTokenVaultCMKCommandOutput } from "./commands/SetTokenVaultCMKCommand";
import type {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import type {
  SubmitRegistryRecordForApprovalCommandInput,
  SubmitRegistryRecordForApprovalCommandOutput,
} from "./commands/SubmitRegistryRecordForApprovalCommand";
import type {
  SynchronizeGatewayTargetsCommandInput,
  SynchronizeGatewayTargetsCommandOutput,
} from "./commands/SynchronizeGatewayTargetsCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAgentRuntimeCommandInput,
  UpdateAgentRuntimeCommandOutput,
} from "./commands/UpdateAgentRuntimeCommand";
import type {
  UpdateAgentRuntimeEndpointCommandInput,
  UpdateAgentRuntimeEndpointCommandOutput,
} from "./commands/UpdateAgentRuntimeEndpointCommand";
import type {
  UpdateApiKeyCredentialProviderCommandInput,
  UpdateApiKeyCredentialProviderCommandOutput,
} from "./commands/UpdateApiKeyCredentialProviderCommand";
import type {
  UpdateConfigurationBundleCommandInput,
  UpdateConfigurationBundleCommandOutput,
} from "./commands/UpdateConfigurationBundleCommand";
import type { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import type {
  UpdateDatasetExamplesCommandInput,
  UpdateDatasetExamplesCommandOutput,
} from "./commands/UpdateDatasetExamplesCommand";
import type { UpdateEvaluatorCommandInput, UpdateEvaluatorCommandOutput } from "./commands/UpdateEvaluatorCommand";
import type { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import type {
  UpdateGatewayRuleCommandInput,
  UpdateGatewayRuleCommandOutput,
} from "./commands/UpdateGatewayRuleCommand";
import type {
  UpdateGatewayTargetCommandInput,
  UpdateGatewayTargetCommandOutput,
} from "./commands/UpdateGatewayTargetCommand";
import type { UpdateHarnessCommandInput, UpdateHarnessCommandOutput } from "./commands/UpdateHarnessCommand";
import type {
  UpdateHarnessEndpointCommandInput,
  UpdateHarnessEndpointCommandOutput,
} from "./commands/UpdateHarnessEndpointCommand";
import type { UpdateMemoryCommandInput, UpdateMemoryCommandOutput } from "./commands/UpdateMemoryCommand";
import type {
  UpdateOauth2CredentialProviderCommandInput,
  UpdateOauth2CredentialProviderCommandOutput,
} from "./commands/UpdateOauth2CredentialProviderCommand";
import type {
  UpdateOnlineEvaluationConfigCommandInput,
  UpdateOnlineEvaluationConfigCommandOutput,
} from "./commands/UpdateOnlineEvaluationConfigCommand";
import type {
  UpdatePaymentConnectorCommandInput,
  UpdatePaymentConnectorCommandOutput,
} from "./commands/UpdatePaymentConnectorCommand";
import type {
  UpdatePaymentCredentialProviderCommandInput,
  UpdatePaymentCredentialProviderCommandOutput,
} from "./commands/UpdatePaymentCredentialProviderCommand";
import type {
  UpdatePaymentManagerCommandInput,
  UpdatePaymentManagerCommandOutput,
} from "./commands/UpdatePaymentManagerCommand";
import type { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import type {
  UpdatePolicyEngineCommandInput,
  UpdatePolicyEngineCommandOutput,
} from "./commands/UpdatePolicyEngineCommand";
import type { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "./commands/UpdateRegistryCommand";
import type {
  UpdateRegistryRecordCommandInput,
  UpdateRegistryRecordCommandOutput,
} from "./commands/UpdateRegistryRecordCommand";
import type {
  UpdateRegistryRecordStatusCommandInput,
  UpdateRegistryRecordStatusCommandOutput,
} from "./commands/UpdateRegistryRecordStatusCommand";
import type {
  UpdateWorkloadIdentityCommandInput,
  UpdateWorkloadIdentityCommandOutput,
} from "./commands/UpdateWorkloadIdentityCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddDatasetExamplesCommandInput
  | CreateAgentRuntimeCommandInput
  | CreateAgentRuntimeEndpointCommandInput
  | CreateApiKeyCredentialProviderCommandInput
  | CreateBrowserCommandInput
  | CreateBrowserProfileCommandInput
  | CreateCodeInterpreterCommandInput
  | CreateConfigurationBundleCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetVersionCommandInput
  | CreateEvaluatorCommandInput
  | CreateGatewayCommandInput
  | CreateGatewayRuleCommandInput
  | CreateGatewayTargetCommandInput
  | CreateHarnessCommandInput
  | CreateHarnessEndpointCommandInput
  | CreateMemoryCommandInput
  | CreateOauth2CredentialProviderCommandInput
  | CreateOnlineEvaluationConfigCommandInput
  | CreatePaymentConnectorCommandInput
  | CreatePaymentCredentialProviderCommandInput
  | CreatePaymentManagerCommandInput
  | CreatePolicyCommandInput
  | CreatePolicyEngineCommandInput
  | CreateRegistryCommandInput
  | CreateRegistryRecordCommandInput
  | CreateWorkloadIdentityCommandInput
  | DeleteAgentRuntimeCommandInput
  | DeleteAgentRuntimeEndpointCommandInput
  | DeleteApiKeyCredentialProviderCommandInput
  | DeleteBrowserCommandInput
  | DeleteBrowserProfileCommandInput
  | DeleteCodeInterpreterCommandInput
  | DeleteConfigurationBundleCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetExamplesCommandInput
  | DeleteEvaluatorCommandInput
  | DeleteGatewayCommandInput
  | DeleteGatewayRuleCommandInput
  | DeleteGatewayTargetCommandInput
  | DeleteHarnessCommandInput
  | DeleteHarnessEndpointCommandInput
  | DeleteMemoryCommandInput
  | DeleteOauth2CredentialProviderCommandInput
  | DeleteOnlineEvaluationConfigCommandInput
  | DeletePaymentConnectorCommandInput
  | DeletePaymentCredentialProviderCommandInput
  | DeletePaymentManagerCommandInput
  | DeletePolicyCommandInput
  | DeletePolicyEngineCommandInput
  | DeleteRegistryCommandInput
  | DeleteRegistryRecordCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteWorkloadIdentityCommandInput
  | GetAgentRuntimeCommandInput
  | GetAgentRuntimeEndpointCommandInput
  | GetApiKeyCredentialProviderCommandInput
  | GetBrowserCommandInput
  | GetBrowserProfileCommandInput
  | GetCodeInterpreterCommandInput
  | GetConfigurationBundleCommandInput
  | GetConfigurationBundleVersionCommandInput
  | GetDatasetCommandInput
  | GetEvaluatorCommandInput
  | GetGatewayCommandInput
  | GetGatewayRuleCommandInput
  | GetGatewayTargetCommandInput
  | GetHarnessCommandInput
  | GetHarnessEndpointCommandInput
  | GetMemoryCommandInput
  | GetOauth2CredentialProviderCommandInput
  | GetOnlineEvaluationConfigCommandInput
  | GetPaymentConnectorCommandInput
  | GetPaymentCredentialProviderCommandInput
  | GetPaymentManagerCommandInput
  | GetPolicyCommandInput
  | GetPolicyEngineCommandInput
  | GetPolicyEngineSummaryCommandInput
  | GetPolicyGenerationCommandInput
  | GetPolicyGenerationSummaryCommandInput
  | GetPolicySummaryCommandInput
  | GetRegistryCommandInput
  | GetRegistryRecordCommandInput
  | GetResourcePolicyCommandInput
  | GetTokenVaultCommandInput
  | GetWorkloadIdentityCommandInput
  | ListAgentRuntimeEndpointsCommandInput
  | ListAgentRuntimeVersionsCommandInput
  | ListAgentRuntimesCommandInput
  | ListApiKeyCredentialProvidersCommandInput
  | ListBrowserProfilesCommandInput
  | ListBrowsersCommandInput
  | ListCodeInterpretersCommandInput
  | ListConfigurationBundleVersionsCommandInput
  | ListConfigurationBundlesCommandInput
  | ListDatasetExamplesCommandInput
  | ListDatasetVersionsCommandInput
  | ListDatasetsCommandInput
  | ListEvaluatorsCommandInput
  | ListGatewayRulesCommandInput
  | ListGatewayTargetsCommandInput
  | ListGatewaysCommandInput
  | ListHarnessEndpointsCommandInput
  | ListHarnessVersionsCommandInput
  | ListHarnessesCommandInput
  | ListMemoriesCommandInput
  | ListOauth2CredentialProvidersCommandInput
  | ListOnlineEvaluationConfigsCommandInput
  | ListPaymentConnectorsCommandInput
  | ListPaymentCredentialProvidersCommandInput
  | ListPaymentManagersCommandInput
  | ListPoliciesCommandInput
  | ListPolicyEngineSummariesCommandInput
  | ListPolicyEnginesCommandInput
  | ListPolicyGenerationAssetsCommandInput
  | ListPolicyGenerationSummariesCommandInput
  | ListPolicyGenerationsCommandInput
  | ListPolicySummariesCommandInput
  | ListRegistriesCommandInput
  | ListRegistryRecordsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkloadIdentitiesCommandInput
  | PutResourcePolicyCommandInput
  | SetTokenVaultCMKCommandInput
  | StartPolicyGenerationCommandInput
  | SubmitRegistryRecordForApprovalCommandInput
  | SynchronizeGatewayTargetsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentRuntimeCommandInput
  | UpdateAgentRuntimeEndpointCommandInput
  | UpdateApiKeyCredentialProviderCommandInput
  | UpdateConfigurationBundleCommandInput
  | UpdateDatasetCommandInput
  | UpdateDatasetExamplesCommandInput
  | UpdateEvaluatorCommandInput
  | UpdateGatewayCommandInput
  | UpdateGatewayRuleCommandInput
  | UpdateGatewayTargetCommandInput
  | UpdateHarnessCommandInput
  | UpdateHarnessEndpointCommandInput
  | UpdateMemoryCommandInput
  | UpdateOauth2CredentialProviderCommandInput
  | UpdateOnlineEvaluationConfigCommandInput
  | UpdatePaymentConnectorCommandInput
  | UpdatePaymentCredentialProviderCommandInput
  | UpdatePaymentManagerCommandInput
  | UpdatePolicyCommandInput
  | UpdatePolicyEngineCommandInput
  | UpdateRegistryCommandInput
  | UpdateRegistryRecordCommandInput
  | UpdateRegistryRecordStatusCommandInput
  | UpdateWorkloadIdentityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddDatasetExamplesCommandOutput
  | CreateAgentRuntimeCommandOutput
  | CreateAgentRuntimeEndpointCommandOutput
  | CreateApiKeyCredentialProviderCommandOutput
  | CreateBrowserCommandOutput
  | CreateBrowserProfileCommandOutput
  | CreateCodeInterpreterCommandOutput
  | CreateConfigurationBundleCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetVersionCommandOutput
  | CreateEvaluatorCommandOutput
  | CreateGatewayCommandOutput
  | CreateGatewayRuleCommandOutput
  | CreateGatewayTargetCommandOutput
  | CreateHarnessCommandOutput
  | CreateHarnessEndpointCommandOutput
  | CreateMemoryCommandOutput
  | CreateOauth2CredentialProviderCommandOutput
  | CreateOnlineEvaluationConfigCommandOutput
  | CreatePaymentConnectorCommandOutput
  | CreatePaymentCredentialProviderCommandOutput
  | CreatePaymentManagerCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicyEngineCommandOutput
  | CreateRegistryCommandOutput
  | CreateRegistryRecordCommandOutput
  | CreateWorkloadIdentityCommandOutput
  | DeleteAgentRuntimeCommandOutput
  | DeleteAgentRuntimeEndpointCommandOutput
  | DeleteApiKeyCredentialProviderCommandOutput
  | DeleteBrowserCommandOutput
  | DeleteBrowserProfileCommandOutput
  | DeleteCodeInterpreterCommandOutput
  | DeleteConfigurationBundleCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetExamplesCommandOutput
  | DeleteEvaluatorCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteGatewayRuleCommandOutput
  | DeleteGatewayTargetCommandOutput
  | DeleteHarnessCommandOutput
  | DeleteHarnessEndpointCommandOutput
  | DeleteMemoryCommandOutput
  | DeleteOauth2CredentialProviderCommandOutput
  | DeleteOnlineEvaluationConfigCommandOutput
  | DeletePaymentConnectorCommandOutput
  | DeletePaymentCredentialProviderCommandOutput
  | DeletePaymentManagerCommandOutput
  | DeletePolicyCommandOutput
  | DeletePolicyEngineCommandOutput
  | DeleteRegistryCommandOutput
  | DeleteRegistryRecordCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteWorkloadIdentityCommandOutput
  | GetAgentRuntimeCommandOutput
  | GetAgentRuntimeEndpointCommandOutput
  | GetApiKeyCredentialProviderCommandOutput
  | GetBrowserCommandOutput
  | GetBrowserProfileCommandOutput
  | GetCodeInterpreterCommandOutput
  | GetConfigurationBundleCommandOutput
  | GetConfigurationBundleVersionCommandOutput
  | GetDatasetCommandOutput
  | GetEvaluatorCommandOutput
  | GetGatewayCommandOutput
  | GetGatewayRuleCommandOutput
  | GetGatewayTargetCommandOutput
  | GetHarnessCommandOutput
  | GetHarnessEndpointCommandOutput
  | GetMemoryCommandOutput
  | GetOauth2CredentialProviderCommandOutput
  | GetOnlineEvaluationConfigCommandOutput
  | GetPaymentConnectorCommandOutput
  | GetPaymentCredentialProviderCommandOutput
  | GetPaymentManagerCommandOutput
  | GetPolicyCommandOutput
  | GetPolicyEngineCommandOutput
  | GetPolicyEngineSummaryCommandOutput
  | GetPolicyGenerationCommandOutput
  | GetPolicyGenerationSummaryCommandOutput
  | GetPolicySummaryCommandOutput
  | GetRegistryCommandOutput
  | GetRegistryRecordCommandOutput
  | GetResourcePolicyCommandOutput
  | GetTokenVaultCommandOutput
  | GetWorkloadIdentityCommandOutput
  | ListAgentRuntimeEndpointsCommandOutput
  | ListAgentRuntimeVersionsCommandOutput
  | ListAgentRuntimesCommandOutput
  | ListApiKeyCredentialProvidersCommandOutput
  | ListBrowserProfilesCommandOutput
  | ListBrowsersCommandOutput
  | ListCodeInterpretersCommandOutput
  | ListConfigurationBundleVersionsCommandOutput
  | ListConfigurationBundlesCommandOutput
  | ListDatasetExamplesCommandOutput
  | ListDatasetVersionsCommandOutput
  | ListDatasetsCommandOutput
  | ListEvaluatorsCommandOutput
  | ListGatewayRulesCommandOutput
  | ListGatewayTargetsCommandOutput
  | ListGatewaysCommandOutput
  | ListHarnessEndpointsCommandOutput
  | ListHarnessVersionsCommandOutput
  | ListHarnessesCommandOutput
  | ListMemoriesCommandOutput
  | ListOauth2CredentialProvidersCommandOutput
  | ListOnlineEvaluationConfigsCommandOutput
  | ListPaymentConnectorsCommandOutput
  | ListPaymentCredentialProvidersCommandOutput
  | ListPaymentManagersCommandOutput
  | ListPoliciesCommandOutput
  | ListPolicyEngineSummariesCommandOutput
  | ListPolicyEnginesCommandOutput
  | ListPolicyGenerationAssetsCommandOutput
  | ListPolicyGenerationSummariesCommandOutput
  | ListPolicyGenerationsCommandOutput
  | ListPolicySummariesCommandOutput
  | ListRegistriesCommandOutput
  | ListRegistryRecordsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkloadIdentitiesCommandOutput
  | PutResourcePolicyCommandOutput
  | SetTokenVaultCMKCommandOutput
  | StartPolicyGenerationCommandOutput
  | SubmitRegistryRecordForApprovalCommandOutput
  | SynchronizeGatewayTargetsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentRuntimeCommandOutput
  | UpdateAgentRuntimeEndpointCommandOutput
  | UpdateApiKeyCredentialProviderCommandOutput
  | UpdateConfigurationBundleCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateDatasetExamplesCommandOutput
  | UpdateEvaluatorCommandOutput
  | UpdateGatewayCommandOutput
  | UpdateGatewayRuleCommandOutput
  | UpdateGatewayTargetCommandOutput
  | UpdateHarnessCommandOutput
  | UpdateHarnessEndpointCommandOutput
  | UpdateMemoryCommandOutput
  | UpdateOauth2CredentialProviderCommandOutput
  | UpdateOnlineEvaluationConfigCommandOutput
  | UpdatePaymentConnectorCommandOutput
  | UpdatePaymentCredentialProviderCommandOutput
  | UpdatePaymentManagerCommandOutput
  | UpdatePolicyCommandOutput
  | UpdatePolicyEngineCommandOutput
  | UpdateRegistryCommandOutput
  | UpdateRegistryRecordCommandOutput
  | UpdateRegistryRecordStatusCommandOutput
  | UpdateWorkloadIdentityCommandOutput;

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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type BedrockAgentCoreControlClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BedrockAgentCoreControlClient class constructor that set the region, credentials and other options.
 */
export interface BedrockAgentCoreControlClientConfig extends BedrockAgentCoreControlClientConfigType {}

/**
 * @public
 */
export type BedrockAgentCoreControlClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BedrockAgentCoreControlClient class. This is resolved and normalized from the {@link BedrockAgentCoreControlClientConfig | constructor configuration interface}.
 */
export interface BedrockAgentCoreControlClientResolvedConfig extends BedrockAgentCoreControlClientResolvedConfigType {}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Control plane API reference. Control plane actions configure, create, modify, and monitor Amazon Web Services resources.</p>
 * @public
 */
export class BedrockAgentCoreControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockAgentCoreControlClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockAgentCoreControlClient class. This is resolved and normalized from the {@link BedrockAgentCoreControlClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockAgentCoreControlClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockAgentCoreControlClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBedrockAgentCoreControlHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockAgentCoreControlClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
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
