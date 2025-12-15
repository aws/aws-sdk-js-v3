// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getAcceptHeaderPlugin } from "@aws-sdk/middleware-sdk-api-gateway";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultAPIGatewayHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import type { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import type {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import type { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import type {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import type {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import type {
  CreateDomainNameAccessAssociationCommandInput,
  CreateDomainNameAccessAssociationCommandOutput,
} from "./commands/CreateDomainNameAccessAssociationCommand";
import type { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import type { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import type {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import type { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import type { CreateRestApiCommandInput, CreateRestApiCommandOutput } from "./commands/CreateRestApiCommand";
import type { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import type { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput } from "./commands/CreateUsagePlanCommand";
import type {
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
} from "./commands/CreateUsagePlanKeyCommand";
import type { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import type { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import type { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import type {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import type {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import type { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import type {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import type {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import type {
  DeleteDomainNameAccessAssociationCommandInput,
  DeleteDomainNameAccessAssociationCommandOutput,
} from "./commands/DeleteDomainNameAccessAssociationCommand";
import type { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import type {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import type { DeleteMethodCommandInput, DeleteMethodCommandOutput } from "./commands/DeleteMethodCommand";
import type {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import type { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import type {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import type { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import type { DeleteRestApiCommandInput, DeleteRestApiCommandOutput } from "./commands/DeleteRestApiCommand";
import type { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import type { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput } from "./commands/DeleteUsagePlanCommand";
import type {
  DeleteUsagePlanKeyCommandInput,
  DeleteUsagePlanKeyCommandOutput,
} from "./commands/DeleteUsagePlanKeyCommand";
import type { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import type {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import type { FlushStageCacheCommandInput, FlushStageCacheCommandOutput } from "./commands/FlushStageCacheCommand";
import type {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import type { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import type { GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand";
import type { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand";
import type { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import type { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import type {
  GetBasePathMappingCommandInput,
  GetBasePathMappingCommandOutput,
} from "./commands/GetBasePathMappingCommand";
import type {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import type {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import type {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import type {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import type {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import type {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import type {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
import type {
  GetDomainNameAccessAssociationsCommandInput,
  GetDomainNameAccessAssociationsCommandOutput,
} from "./commands/GetDomainNameAccessAssociationsCommand";
import type { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import type { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import type { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import type {
  GetGatewayResponseCommandInput,
  GetGatewayResponseCommandOutput,
} from "./commands/GetGatewayResponseCommand";
import type {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import type { GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand";
import type {
  GetMethodResponseCommandInput,
  GetMethodResponseCommandOutput,
} from "./commands/GetMethodResponseCommand";
import type { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import type { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import type { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import type {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import type {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import type { GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import type { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import type { GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand";
import type { GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import type { GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand";
import type { GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand";
import type { GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand";
import type { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import type { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import type { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import type { GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand";
import type { GetUsagePlanCommandInput, GetUsagePlanCommandOutput } from "./commands/GetUsagePlanCommand";
import type { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput } from "./commands/GetUsagePlanKeyCommand";
import type { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "./commands/GetUsagePlanKeysCommand";
import type { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "./commands/GetUsagePlansCommand";
import type { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import type { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import type { ImportApiKeysCommandInput, ImportApiKeysCommandOutput } from "./commands/ImportApiKeysCommand";
import type {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import type { ImportRestApiCommandInput, ImportRestApiCommandOutput } from "./commands/ImportRestApiCommand";
import type {
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
} from "./commands/PutGatewayResponseCommand";
import type { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import type {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import type { PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand";
import type {
  PutMethodResponseCommandInput,
  PutMethodResponseCommandOutput,
} from "./commands/PutMethodResponseCommand";
import type { PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand";
import type {
  RejectDomainNameAccessAssociationCommandInput,
  RejectDomainNameAccessAssociationCommandOutput,
} from "./commands/RejectDomainNameAccessAssociationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import type { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput } from "./commands/TestInvokeMethodCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand";
import type { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import type { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import type {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import type {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import type { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import type {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import type {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import type { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import type {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
import type {
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import type {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import type { UpdateMethodCommandInput, UpdateMethodCommandOutput } from "./commands/UpdateMethodCommand";
import type {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import type { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import type {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import type { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import type { UpdateRestApiCommandInput, UpdateRestApiCommandOutput } from "./commands/UpdateRestApiCommand";
import type { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import type { UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand";
import type { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput } from "./commands/UpdateUsagePlanCommand";
import type { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateApiKeyCommandInput
  | CreateAuthorizerCommandInput
  | CreateBasePathMappingCommandInput
  | CreateDeploymentCommandInput
  | CreateDocumentationPartCommandInput
  | CreateDocumentationVersionCommandInput
  | CreateDomainNameAccessAssociationCommandInput
  | CreateDomainNameCommandInput
  | CreateModelCommandInput
  | CreateRequestValidatorCommandInput
  | CreateResourceCommandInput
  | CreateRestApiCommandInput
  | CreateStageCommandInput
  | CreateUsagePlanCommandInput
  | CreateUsagePlanKeyCommandInput
  | CreateVpcLinkCommandInput
  | DeleteApiKeyCommandInput
  | DeleteAuthorizerCommandInput
  | DeleteBasePathMappingCommandInput
  | DeleteClientCertificateCommandInput
  | DeleteDeploymentCommandInput
  | DeleteDocumentationPartCommandInput
  | DeleteDocumentationVersionCommandInput
  | DeleteDomainNameAccessAssociationCommandInput
  | DeleteDomainNameCommandInput
  | DeleteGatewayResponseCommandInput
  | DeleteIntegrationCommandInput
  | DeleteIntegrationResponseCommandInput
  | DeleteMethodCommandInput
  | DeleteMethodResponseCommandInput
  | DeleteModelCommandInput
  | DeleteRequestValidatorCommandInput
  | DeleteResourceCommandInput
  | DeleteRestApiCommandInput
  | DeleteStageCommandInput
  | DeleteUsagePlanCommandInput
  | DeleteUsagePlanKeyCommandInput
  | DeleteVpcLinkCommandInput
  | FlushStageAuthorizersCacheCommandInput
  | FlushStageCacheCommandInput
  | GenerateClientCertificateCommandInput
  | GetAccountCommandInput
  | GetApiKeyCommandInput
  | GetApiKeysCommandInput
  | GetAuthorizerCommandInput
  | GetAuthorizersCommandInput
  | GetBasePathMappingCommandInput
  | GetBasePathMappingsCommandInput
  | GetClientCertificateCommandInput
  | GetClientCertificatesCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentsCommandInput
  | GetDocumentationPartCommandInput
  | GetDocumentationPartsCommandInput
  | GetDocumentationVersionCommandInput
  | GetDocumentationVersionsCommandInput
  | GetDomainNameAccessAssociationsCommandInput
  | GetDomainNameCommandInput
  | GetDomainNamesCommandInput
  | GetExportCommandInput
  | GetGatewayResponseCommandInput
  | GetGatewayResponsesCommandInput
  | GetIntegrationCommandInput
  | GetIntegrationResponseCommandInput
  | GetMethodCommandInput
  | GetMethodResponseCommandInput
  | GetModelCommandInput
  | GetModelTemplateCommandInput
  | GetModelsCommandInput
  | GetRequestValidatorCommandInput
  | GetRequestValidatorsCommandInput
  | GetResourceCommandInput
  | GetResourcesCommandInput
  | GetRestApiCommandInput
  | GetRestApisCommandInput
  | GetSdkCommandInput
  | GetSdkTypeCommandInput
  | GetSdkTypesCommandInput
  | GetStageCommandInput
  | GetStagesCommandInput
  | GetTagsCommandInput
  | GetUsageCommandInput
  | GetUsagePlanCommandInput
  | GetUsagePlanKeyCommandInput
  | GetUsagePlanKeysCommandInput
  | GetUsagePlansCommandInput
  | GetVpcLinkCommandInput
  | GetVpcLinksCommandInput
  | ImportApiKeysCommandInput
  | ImportDocumentationPartsCommandInput
  | ImportRestApiCommandInput
  | PutGatewayResponseCommandInput
  | PutIntegrationCommandInput
  | PutIntegrationResponseCommandInput
  | PutMethodCommandInput
  | PutMethodResponseCommandInput
  | PutRestApiCommandInput
  | RejectDomainNameAccessAssociationCommandInput
  | TagResourceCommandInput
  | TestInvokeAuthorizerCommandInput
  | TestInvokeMethodCommandInput
  | UntagResourceCommandInput
  | UpdateAccountCommandInput
  | UpdateApiKeyCommandInput
  | UpdateAuthorizerCommandInput
  | UpdateBasePathMappingCommandInput
  | UpdateClientCertificateCommandInput
  | UpdateDeploymentCommandInput
  | UpdateDocumentationPartCommandInput
  | UpdateDocumentationVersionCommandInput
  | UpdateDomainNameCommandInput
  | UpdateGatewayResponseCommandInput
  | UpdateIntegrationCommandInput
  | UpdateIntegrationResponseCommandInput
  | UpdateMethodCommandInput
  | UpdateMethodResponseCommandInput
  | UpdateModelCommandInput
  | UpdateRequestValidatorCommandInput
  | UpdateResourceCommandInput
  | UpdateRestApiCommandInput
  | UpdateStageCommandInput
  | UpdateUsageCommandInput
  | UpdateUsagePlanCommandInput
  | UpdateVpcLinkCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateApiKeyCommandOutput
  | CreateAuthorizerCommandOutput
  | CreateBasePathMappingCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDocumentationPartCommandOutput
  | CreateDocumentationVersionCommandOutput
  | CreateDomainNameAccessAssociationCommandOutput
  | CreateDomainNameCommandOutput
  | CreateModelCommandOutput
  | CreateRequestValidatorCommandOutput
  | CreateResourceCommandOutput
  | CreateRestApiCommandOutput
  | CreateStageCommandOutput
  | CreateUsagePlanCommandOutput
  | CreateUsagePlanKeyCommandOutput
  | CreateVpcLinkCommandOutput
  | DeleteApiKeyCommandOutput
  | DeleteAuthorizerCommandOutput
  | DeleteBasePathMappingCommandOutput
  | DeleteClientCertificateCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteDocumentationPartCommandOutput
  | DeleteDocumentationVersionCommandOutput
  | DeleteDomainNameAccessAssociationCommandOutput
  | DeleteDomainNameCommandOutput
  | DeleteGatewayResponseCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteIntegrationResponseCommandOutput
  | DeleteMethodCommandOutput
  | DeleteMethodResponseCommandOutput
  | DeleteModelCommandOutput
  | DeleteRequestValidatorCommandOutput
  | DeleteResourceCommandOutput
  | DeleteRestApiCommandOutput
  | DeleteStageCommandOutput
  | DeleteUsagePlanCommandOutput
  | DeleteUsagePlanKeyCommandOutput
  | DeleteVpcLinkCommandOutput
  | FlushStageAuthorizersCacheCommandOutput
  | FlushStageCacheCommandOutput
  | GenerateClientCertificateCommandOutput
  | GetAccountCommandOutput
  | GetApiKeyCommandOutput
  | GetApiKeysCommandOutput
  | GetAuthorizerCommandOutput
  | GetAuthorizersCommandOutput
  | GetBasePathMappingCommandOutput
  | GetBasePathMappingsCommandOutput
  | GetClientCertificateCommandOutput
  | GetClientCertificatesCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentsCommandOutput
  | GetDocumentationPartCommandOutput
  | GetDocumentationPartsCommandOutput
  | GetDocumentationVersionCommandOutput
  | GetDocumentationVersionsCommandOutput
  | GetDomainNameAccessAssociationsCommandOutput
  | GetDomainNameCommandOutput
  | GetDomainNamesCommandOutput
  | GetExportCommandOutput
  | GetGatewayResponseCommandOutput
  | GetGatewayResponsesCommandOutput
  | GetIntegrationCommandOutput
  | GetIntegrationResponseCommandOutput
  | GetMethodCommandOutput
  | GetMethodResponseCommandOutput
  | GetModelCommandOutput
  | GetModelTemplateCommandOutput
  | GetModelsCommandOutput
  | GetRequestValidatorCommandOutput
  | GetRequestValidatorsCommandOutput
  | GetResourceCommandOutput
  | GetResourcesCommandOutput
  | GetRestApiCommandOutput
  | GetRestApisCommandOutput
  | GetSdkCommandOutput
  | GetSdkTypeCommandOutput
  | GetSdkTypesCommandOutput
  | GetStageCommandOutput
  | GetStagesCommandOutput
  | GetTagsCommandOutput
  | GetUsageCommandOutput
  | GetUsagePlanCommandOutput
  | GetUsagePlanKeyCommandOutput
  | GetUsagePlanKeysCommandOutput
  | GetUsagePlansCommandOutput
  | GetVpcLinkCommandOutput
  | GetVpcLinksCommandOutput
  | ImportApiKeysCommandOutput
  | ImportDocumentationPartsCommandOutput
  | ImportRestApiCommandOutput
  | PutGatewayResponseCommandOutput
  | PutIntegrationCommandOutput
  | PutIntegrationResponseCommandOutput
  | PutMethodCommandOutput
  | PutMethodResponseCommandOutput
  | PutRestApiCommandOutput
  | RejectDomainNameAccessAssociationCommandOutput
  | TagResourceCommandOutput
  | TestInvokeAuthorizerCommandOutput
  | TestInvokeMethodCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountCommandOutput
  | UpdateApiKeyCommandOutput
  | UpdateAuthorizerCommandOutput
  | UpdateBasePathMappingCommandOutput
  | UpdateClientCertificateCommandOutput
  | UpdateDeploymentCommandOutput
  | UpdateDocumentationPartCommandOutput
  | UpdateDocumentationVersionCommandOutput
  | UpdateDomainNameCommandOutput
  | UpdateGatewayResponseCommandOutput
  | UpdateIntegrationCommandOutput
  | UpdateIntegrationResponseCommandOutput
  | UpdateMethodCommandOutput
  | UpdateMethodResponseCommandOutput
  | UpdateModelCommandOutput
  | UpdateRequestValidatorCommandOutput
  | UpdateResourceCommandOutput
  | UpdateRestApiCommandOutput
  | UpdateStageCommandOutput
  | UpdateUsageCommandOutput
  | UpdateUsagePlanCommandOutput
  | UpdateVpcLinkCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type APIGatewayClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of APIGatewayClient class constructor that set the region, credentials and other options.
 */
export interface APIGatewayClientConfig extends APIGatewayClientConfigType {}

/**
 * @public
 */
export type APIGatewayClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of APIGatewayClient class. This is resolved and normalized from the {@link APIGatewayClientConfig | constructor configuration interface}.
 */
export interface APIGatewayClientResolvedConfig extends APIGatewayClientResolvedConfigType {}

/**
 * <fullname>Amazon API Gateway</fullname>
 *          <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 * @public
 */
export class APIGatewayClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  APIGatewayClientResolvedConfig
> {
  /**
   * The resolved configuration of APIGatewayClient class. This is resolved and normalized from the {@link APIGatewayClientConfig | constructor configuration interface}.
   */
  readonly config: APIGatewayClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<APIGatewayClientConfig>) {
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
    this.middlewareStack.use(getAcceptHeaderPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultAPIGatewayHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: APIGatewayClientResolvedConfig) =>
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
