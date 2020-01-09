import {
  BatchGetAggregateResourceConfigRequest,
  BatchGetAggregateResourceConfigResponse,
  BatchGetResourceConfigRequest,
  BatchGetResourceConfigResponse,
  DeleteAggregationAuthorizationRequest,
  DeleteConfigRuleRequest,
  DeleteConfigurationAggregatorRequest,
  DeleteConfigurationRecorderRequest,
  DeleteConformancePackRequest,
  DeleteDeliveryChannelRequest,
  DeleteEvaluationResultsRequest,
  DeleteEvaluationResultsResponse,
  DeleteOrganizationConfigRuleRequest,
  DeleteOrganizationConformancePackRequest,
  DeletePendingAggregationRequestRequest,
  DeleteRemediationConfigurationRequest,
  DeleteRemediationConfigurationResponse,
  DeleteRemediationExceptionsRequest,
  DeleteRemediationExceptionsResponse,
  DeleteResourceConfigRequest,
  DeleteRetentionConfigurationRequest,
  DeliverConfigSnapshotRequest,
  DeliverConfigSnapshotResponse,
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesResponse,
  DescribeAggregationAuthorizationsRequest,
  DescribeAggregationAuthorizationsResponse,
  DescribeComplianceByConfigRuleRequest,
  DescribeComplianceByConfigRuleResponse,
  DescribeComplianceByResourceRequest,
  DescribeComplianceByResourceResponse,
  DescribeConfigRuleEvaluationStatusRequest,
  DescribeConfigRuleEvaluationStatusResponse,
  DescribeConfigRulesRequest,
  DescribeConfigRulesResponse,
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
  DescribeConfigurationAggregatorsRequest,
  DescribeConfigurationAggregatorsResponse,
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
  DescribeConfigurationRecordersRequest,
  DescribeConfigurationRecordersResponse,
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
  DescribeConformancePackStatusRequest,
  DescribeConformancePackStatusResponse,
  DescribeConformancePacksRequest,
  DescribeConformancePacksResponse,
  DescribeDeliveryChannelStatusRequest,
  DescribeDeliveryChannelStatusResponse,
  DescribeDeliveryChannelsRequest,
  DescribeDeliveryChannelsResponse,
  DescribeOrganizationConfigRuleStatusesRequest,
  DescribeOrganizationConfigRuleStatusesResponse,
  DescribeOrganizationConfigRulesRequest,
  DescribeOrganizationConfigRulesResponse,
  DescribeOrganizationConformancePackStatusesRequest,
  DescribeOrganizationConformancePackStatusesResponse,
  DescribeOrganizationConformancePacksRequest,
  DescribeOrganizationConformancePacksResponse,
  DescribePendingAggregationRequestsRequest,
  DescribePendingAggregationRequestsResponse,
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationConfigurationsResponse,
  DescribeRemediationExceptionsRequest,
  DescribeRemediationExceptionsResponse,
  DescribeRemediationExecutionStatusRequest,
  DescribeRemediationExecutionStatusResponse,
  DescribeRetentionConfigurationsRequest,
  DescribeRetentionConfigurationsResponse,
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
  GetAggregateDiscoveredResourceCountsRequest,
  GetAggregateDiscoveredResourceCountsResponse,
  GetAggregateResourceConfigRequest,
  GetAggregateResourceConfigResponse,
  GetComplianceDetailsByConfigRuleRequest,
  GetComplianceDetailsByConfigRuleResponse,
  GetComplianceDetailsByResourceRequest,
  GetComplianceDetailsByResourceResponse,
  GetComplianceSummaryByConfigRuleResponse,
  GetComplianceSummaryByResourceTypeRequest,
  GetComplianceSummaryByResourceTypeResponse,
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryResponse,
  GetDiscoveredResourceCountsRequest,
  GetDiscoveredResourceCountsResponse,
  GetOrganizationConfigRuleDetailedStatusRequest,
  GetOrganizationConfigRuleDetailedStatusResponse,
  GetOrganizationConformancePackDetailedStatusRequest,
  GetOrganizationConformancePackDetailedStatusResponse,
  GetResourceConfigHistoryRequest,
  GetResourceConfigHistoryResponse,
  ListAggregateDiscoveredResourcesRequest,
  ListAggregateDiscoveredResourcesResponse,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutAggregationAuthorizationRequest,
  PutAggregationAuthorizationResponse,
  PutConfigRuleRequest,
  PutConfigurationAggregatorRequest,
  PutConfigurationAggregatorResponse,
  PutConfigurationRecorderRequest,
  PutConformancePackRequest,
  PutConformancePackResponse,
  PutDeliveryChannelRequest,
  PutEvaluationsRequest,
  PutEvaluationsResponse,
  PutOrganizationConfigRuleRequest,
  PutOrganizationConfigRuleResponse,
  PutOrganizationConformancePackRequest,
  PutOrganizationConformancePackResponse,
  PutRemediationConfigurationsRequest,
  PutRemediationConfigurationsResponse,
  PutRemediationExceptionsRequest,
  PutRemediationExceptionsResponse,
  PutResourceConfigRequest,
  PutRetentionConfigurationRequest,
  PutRetentionConfigurationResponse,
  SelectResourceConfigRequest,
  SelectResourceConfigResponse,
  StartConfigRulesEvaluationRequest,
  StartConfigRulesEvaluationResponse,
  StartConfigurationRecorderRequest,
  StartRemediationExecutionRequest,
  StartRemediationExecutionResponse,
  StopConfigurationRecorderRequest,
  TagResourceRequest,
  UntagResourceRequest,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | BatchGetAggregateResourceConfigRequest
  | BatchGetResourceConfigRequest
  | DeleteAggregationAuthorizationRequest
  | DeleteConfigRuleRequest
  | DeleteConfigurationAggregatorRequest
  | DeleteConfigurationRecorderRequest
  | DeleteConformancePackRequest
  | DeleteDeliveryChannelRequest
  | DeleteEvaluationResultsRequest
  | DeleteOrganizationConfigRuleRequest
  | DeleteOrganizationConformancePackRequest
  | DeletePendingAggregationRequestRequest
  | DeleteRemediationConfigurationRequest
  | DeleteRemediationExceptionsRequest
  | DeleteResourceConfigRequest
  | DeleteRetentionConfigurationRequest
  | DeliverConfigSnapshotRequest
  | DescribeAggregateComplianceByConfigRulesRequest
  | DescribeAggregationAuthorizationsRequest
  | DescribeComplianceByConfigRuleRequest
  | DescribeComplianceByResourceRequest
  | DescribeConfigRuleEvaluationStatusRequest
  | DescribeConfigRulesRequest
  | DescribeConfigurationAggregatorSourcesStatusRequest
  | DescribeConfigurationAggregatorsRequest
  | DescribeConfigurationRecorderStatusRequest
  | DescribeConfigurationRecordersRequest
  | DescribeConformancePackComplianceRequest
  | DescribeConformancePackStatusRequest
  | DescribeConformancePacksRequest
  | DescribeDeliveryChannelStatusRequest
  | DescribeDeliveryChannelsRequest
  | DescribeOrganizationConfigRuleStatusesRequest
  | DescribeOrganizationConfigRulesRequest
  | DescribeOrganizationConformancePackStatusesRequest
  | DescribeOrganizationConformancePacksRequest
  | DescribePendingAggregationRequestsRequest
  | DescribeRemediationConfigurationsRequest
  | DescribeRemediationExceptionsRequest
  | DescribeRemediationExecutionStatusRequest
  | DescribeRetentionConfigurationsRequest
  | GetAggregateComplianceDetailsByConfigRuleRequest
  | GetAggregateConfigRuleComplianceSummaryRequest
  | GetAggregateDiscoveredResourceCountsRequest
  | GetAggregateResourceConfigRequest
  | GetComplianceDetailsByConfigRuleRequest
  | GetComplianceDetailsByResourceRequest
  | GetComplianceSummaryByResourceTypeRequest
  | GetConformancePackComplianceDetailsRequest
  | GetConformancePackComplianceSummaryRequest
  | GetDiscoveredResourceCountsRequest
  | GetOrganizationConfigRuleDetailedStatusRequest
  | GetOrganizationConformancePackDetailedStatusRequest
  | GetResourceConfigHistoryRequest
  | ListAggregateDiscoveredResourcesRequest
  | ListDiscoveredResourcesRequest
  | ListTagsForResourceRequest
  | PutAggregationAuthorizationRequest
  | PutConfigRuleRequest
  | PutConfigurationAggregatorRequest
  | PutConfigurationRecorderRequest
  | PutConformancePackRequest
  | PutDeliveryChannelRequest
  | PutEvaluationsRequest
  | PutOrganizationConfigRuleRequest
  | PutOrganizationConformancePackRequest
  | PutRemediationConfigurationsRequest
  | PutRemediationExceptionsRequest
  | PutResourceConfigRequest
  | PutRetentionConfigurationRequest
  | SelectResourceConfigRequest
  | StartConfigRulesEvaluationRequest
  | StartConfigurationRecorderRequest
  | StartRemediationExecutionRequest
  | StopConfigurationRecorderRequest
  | TagResourceRequest
  | UntagResourceRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | BatchGetAggregateResourceConfigResponse
  | BatchGetResourceConfigResponse
  | DeleteEvaluationResultsResponse
  | DeleteRemediationConfigurationResponse
  | DeleteRemediationExceptionsResponse
  | DeliverConfigSnapshotResponse
  | DescribeAggregateComplianceByConfigRulesResponse
  | DescribeAggregationAuthorizationsResponse
  | DescribeComplianceByConfigRuleResponse
  | DescribeComplianceByResourceResponse
  | DescribeConfigRuleEvaluationStatusResponse
  | DescribeConfigRulesResponse
  | DescribeConfigurationAggregatorSourcesStatusResponse
  | DescribeConfigurationAggregatorsResponse
  | DescribeConfigurationRecorderStatusResponse
  | DescribeConfigurationRecordersResponse
  | DescribeConformancePackComplianceResponse
  | DescribeConformancePackStatusResponse
  | DescribeConformancePacksResponse
  | DescribeDeliveryChannelStatusResponse
  | DescribeDeliveryChannelsResponse
  | DescribeOrganizationConfigRuleStatusesResponse
  | DescribeOrganizationConfigRulesResponse
  | DescribeOrganizationConformancePackStatusesResponse
  | DescribeOrganizationConformancePacksResponse
  | DescribePendingAggregationRequestsResponse
  | DescribeRemediationConfigurationsResponse
  | DescribeRemediationExceptionsResponse
  | DescribeRemediationExecutionStatusResponse
  | DescribeRetentionConfigurationsResponse
  | GetAggregateComplianceDetailsByConfigRuleResponse
  | GetAggregateConfigRuleComplianceSummaryResponse
  | GetAggregateDiscoveredResourceCountsResponse
  | GetAggregateResourceConfigResponse
  | GetComplianceDetailsByConfigRuleResponse
  | GetComplianceDetailsByResourceResponse
  | GetComplianceSummaryByConfigRuleResponse
  | GetComplianceSummaryByResourceTypeResponse
  | GetConformancePackComplianceDetailsResponse
  | GetConformancePackComplianceSummaryResponse
  | GetDiscoveredResourceCountsResponse
  | GetOrganizationConfigRuleDetailedStatusResponse
  | GetOrganizationConformancePackDetailedStatusResponse
  | GetResourceConfigHistoryResponse
  | ListAggregateDiscoveredResourcesResponse
  | ListDiscoveredResourcesResponse
  | ListTagsForResourceResponse
  | PutAggregationAuthorizationResponse
  | PutConfigurationAggregatorResponse
  | PutConformancePackResponse
  | PutEvaluationsResponse
  | PutOrganizationConfigRuleResponse
  | PutOrganizationConformancePackResponse
  | PutRemediationConfigurationsResponse
  | PutRemediationExceptionsResponse
  | PutRetentionConfigurationResponse
  | SelectResourceConfigResponse
  | StartConfigRulesEvaluationResponse
  | StartRemediationExecutionResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ConfigServiceClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type ConfigServiceClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 * 		       <fullname>AWS Config</fullname>
 *
 * 		       <p>AWS Config provides a way to keep track of the configurations
 * 			of all the AWS resources associated with your AWS account. You can
 * 			use AWS Config to get the current and historical configurations of
 * 			each AWS resource and also to get information about the relationship
 * 			between the resources. An AWS resource can be an Amazon Compute
 * 			Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an
 * 			elastic network Interface (ENI), or a security group. For a complete
 * 			list of resources currently supported by AWS Config, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported AWS Resources</a>.</p>
 *
 * 		       <p>You can access and manage AWS Config through the AWS Management
 * 			Console, the AWS Command Line Interface (AWS CLI), the AWS Config
 * 			API, or the AWS SDKs for AWS Config. This reference guide contains
 * 			documentation for the AWS Config API and the AWS CLI commands that
 * 			you can use to manage AWS Config. The AWS Config API uses the
 * 			Signature Version 4 protocol for signing requests. For more
 * 			information about how to sign a request with this protocol, see
 * 				<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 * 				Version 4 Signing Process</a>. For detailed information
 * 			about AWS Config features and their associated actions or commands,
 * 			as well as how to work with AWS Management Console, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html">What Is AWS
 * 				Config</a> in the <i>AWS Config Developer
 * 				Guide</i>.</p>
 *
 * 		
 * 		
 * 		
 *
 * 		
 * 		
 * 		
 *
 * 		
 * 		
 * 		
 *
 * 		
 * 		
 * 		
 *
 * 	
 */
export class ConfigServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConfigServiceClientResolvedConfig
> {
  readonly config: ConfigServiceClientResolvedConfig;

  constructor(configuration: ConfigServiceClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
