// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getAcceptHeaderPlugin } from "@aws-sdk/middleware-sdk-api-gateway";
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
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultAPIGatewayHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import {
  CreateDomainNameAccessAssociationCommandInput,
  CreateDomainNameAccessAssociationCommandOutput,
} from "./commands/CreateDomainNameAccessAssociationCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateRestApiCommandInput, CreateRestApiCommandOutput } from "./commands/CreateRestApiCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput } from "./commands/CreateUsagePlanCommand";
import { CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput } from "./commands/CreateUsagePlanKeyCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import {
  DeleteDomainNameAccessAssociationCommandInput,
  DeleteDomainNameAccessAssociationCommandOutput,
} from "./commands/DeleteDomainNameAccessAssociationCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteMethodCommandInput, DeleteMethodCommandOutput } from "./commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import { DeleteRestApiCommandInput, DeleteRestApiCommandOutput } from "./commands/DeleteRestApiCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput } from "./commands/DeleteUsagePlanCommand";
import { DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput } from "./commands/DeleteUsagePlanKeyCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import { FlushStageCacheCommandInput, FlushStageCacheCommandOutput } from "./commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import { GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput } from "./commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
import {
  GetDomainNameAccessAssociationsCommandInput,
  GetDomainNameAccessAssociationsCommandOutput,
} from "./commands/GetDomainNameAccessAssociationsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput } from "./commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import { GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand";
import { GetMethodResponseCommandInput, GetMethodResponseCommandOutput } from "./commands/GetMethodResponseCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import { GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand";
import { GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import { GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand";
import { GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand";
import { GetUsagePlanCommandInput, GetUsagePlanCommandOutput } from "./commands/GetUsagePlanCommand";
import { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput } from "./commands/GetUsagePlanKeyCommand";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "./commands/GetUsagePlanKeysCommand";
import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiKeysCommandInput, ImportApiKeysCommandOutput } from "./commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import { ImportRestApiCommandInput, ImportRestApiCommandOutput } from "./commands/ImportRestApiCommand";
import { PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput } from "./commands/PutGatewayResponseCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand";
import { PutMethodResponseCommandInput, PutMethodResponseCommandOutput } from "./commands/PutMethodResponseCommand";
import { PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand";
import {
  RejectDomainNameAccessAssociationCommandInput,
  RejectDomainNameAccessAssociationCommandOutput,
} from "./commands/RejectDomainNameAccessAssociationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput } from "./commands/TestInvokeMethodCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateMethodCommandInput, UpdateMethodCommandOutput } from "./commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { UpdateRestApiCommandInput, UpdateRestApiCommandOutput } from "./commands/UpdateRestApiCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand";
import { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput } from "./commands/UpdateUsagePlanCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
