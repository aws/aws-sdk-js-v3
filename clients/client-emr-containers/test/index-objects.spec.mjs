import {
  AllowAWSToRetainLogs,
  AuthorizationConfiguration$,
  CancelJobRun$,
  CancelJobRunCommand,
  CancelJobRunRequest$,
  CancelJobRunResponse$,
  Certificate$,
  CertificateProviderType,
  CloudWatchMonitoringConfiguration$,
  Configuration$,
  ConfigurationOverrides$,
  ContainerInfo$,
  ContainerLogRotationConfiguration$,
  ContainerProvider$,
  ContainerProviderType,
  CreateJobTemplate$,
  CreateJobTemplateCommand,
  CreateJobTemplateRequest$,
  CreateJobTemplateResponse$,
  CreateManagedEndpoint$,
  CreateManagedEndpointCommand,
  CreateManagedEndpointRequest$,
  CreateManagedEndpointResponse$,
  CreateSecurityConfiguration$,
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationRequest$,
  CreateSecurityConfigurationResponse$,
  CreateVirtualCluster$,
  CreateVirtualClusterCommand,
  CreateVirtualClusterRequest$,
  CreateVirtualClusterResponse$,
  Credentials$,
  DeleteJobTemplate$,
  DeleteJobTemplateCommand,
  DeleteJobTemplateRequest$,
  DeleteJobTemplateResponse$,
  DeleteManagedEndpoint$,
  DeleteManagedEndpointCommand,
  DeleteManagedEndpointRequest$,
  DeleteManagedEndpointResponse$,
  DeleteVirtualCluster$,
  DeleteVirtualClusterCommand,
  DeleteVirtualClusterRequest$,
  DeleteVirtualClusterResponse$,
  DescribeJobRun$,
  DescribeJobRunCommand,
  DescribeJobRunRequest$,
  DescribeJobRunResponse$,
  DescribeJobTemplate$,
  DescribeJobTemplateCommand,
  DescribeJobTemplateRequest$,
  DescribeJobTemplateResponse$,
  DescribeManagedEndpoint$,
  DescribeManagedEndpointCommand,
  DescribeManagedEndpointRequest$,
  DescribeManagedEndpointResponse$,
  DescribeSecurityConfiguration$,
  DescribeSecurityConfigurationCommand,
  DescribeSecurityConfigurationRequest$,
  DescribeSecurityConfigurationResponse$,
  DescribeVirtualCluster$,
  DescribeVirtualClusterCommand,
  DescribeVirtualClusterRequest$,
  DescribeVirtualClusterResponse$,
  EksInfo$,
  EKSRequestThrottledException,
  EKSRequestThrottledException$,
  EMRContainers,
  EMRContainersClient,
  EMRContainersServiceException,
  EncryptionConfiguration$,
  Endpoint$,
  EndpointState,
  FailureReason,
  GetManagedEndpointSessionCredentials$,
  GetManagedEndpointSessionCredentialsCommand,
  GetManagedEndpointSessionCredentialsRequest$,
  GetManagedEndpointSessionCredentialsResponse$,
  InternalServerException,
  InternalServerException$,
  InTransitEncryptionConfiguration$,
  JobDriver$,
  JobRun$,
  JobRunState,
  JobTemplate$,
  JobTemplateData$,
  LakeFormationConfiguration$,
  ListJobRuns$,
  ListJobRunsCommand,
  ListJobRunsRequest$,
  ListJobRunsResponse$,
  ListJobTemplates$,
  ListJobTemplatesCommand,
  ListJobTemplatesRequest$,
  ListJobTemplatesResponse$,
  ListManagedEndpoints$,
  ListManagedEndpointsCommand,
  ListManagedEndpointsRequest$,
  ListManagedEndpointsResponse$,
  ListSecurityConfigurations$,
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsRequest$,
  ListSecurityConfigurationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVirtualClusters$,
  ListVirtualClustersCommand,
  ListVirtualClustersRequest$,
  ListVirtualClustersResponse$,
  ManagedLogs$,
  MonitoringConfiguration$,
  paginateListJobRuns,
  paginateListJobTemplates,
  paginateListManagedEndpoints,
  paginateListSecurityConfigurations,
  paginateListVirtualClusters,
  ParametricCloudWatchMonitoringConfiguration$,
  ParametricConfigurationOverrides$,
  ParametricMonitoringConfiguration$,
  ParametricS3MonitoringConfiguration$,
  PersistentAppUI,
  RequestThrottledException,
  RequestThrottledException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryPolicyConfiguration$,
  RetryPolicyExecution$,
  S3MonitoringConfiguration$,
  SecureNamespaceInfo$,
  SecurityConfiguration$,
  SecurityConfigurationData$,
  SparkSqlJobDriver$,
  SparkSubmitJobDriver$,
  StartJobRun$,
  StartJobRunCommand,
  StartJobRunRequest$,
  StartJobRunResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TemplateParameterConfiguration$,
  TemplateParameterDataType,
  TLSCertificateConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  VirtualCluster$,
  VirtualClusterState,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EMRContainersClient === "function");
assert(typeof EMRContainers === "function");
// commands
assert(typeof CancelJobRunCommand === "function");
assert(typeof CancelJobRun$ === "object");
assert(typeof CreateJobTemplateCommand === "function");
assert(typeof CreateJobTemplate$ === "object");
assert(typeof CreateManagedEndpointCommand === "function");
assert(typeof CreateManagedEndpoint$ === "object");
assert(typeof CreateSecurityConfigurationCommand === "function");
assert(typeof CreateSecurityConfiguration$ === "object");
assert(typeof CreateVirtualClusterCommand === "function");
assert(typeof CreateVirtualCluster$ === "object");
assert(typeof DeleteJobTemplateCommand === "function");
assert(typeof DeleteJobTemplate$ === "object");
assert(typeof DeleteManagedEndpointCommand === "function");
assert(typeof DeleteManagedEndpoint$ === "object");
assert(typeof DeleteVirtualClusterCommand === "function");
assert(typeof DeleteVirtualCluster$ === "object");
assert(typeof DescribeJobRunCommand === "function");
assert(typeof DescribeJobRun$ === "object");
assert(typeof DescribeJobTemplateCommand === "function");
assert(typeof DescribeJobTemplate$ === "object");
assert(typeof DescribeManagedEndpointCommand === "function");
assert(typeof DescribeManagedEndpoint$ === "object");
assert(typeof DescribeSecurityConfigurationCommand === "function");
assert(typeof DescribeSecurityConfiguration$ === "object");
assert(typeof DescribeVirtualClusterCommand === "function");
assert(typeof DescribeVirtualCluster$ === "object");
assert(typeof GetManagedEndpointSessionCredentialsCommand === "function");
assert(typeof GetManagedEndpointSessionCredentials$ === "object");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListJobRuns$ === "object");
assert(typeof ListJobTemplatesCommand === "function");
assert(typeof ListJobTemplates$ === "object");
assert(typeof ListManagedEndpointsCommand === "function");
assert(typeof ListManagedEndpoints$ === "object");
assert(typeof ListSecurityConfigurationsCommand === "function");
assert(typeof ListSecurityConfigurations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVirtualClustersCommand === "function");
assert(typeof ListVirtualClusters$ === "object");
assert(typeof StartJobRunCommand === "function");
assert(typeof StartJobRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AuthorizationConfiguration$ === "object");
assert(typeof CancelJobRunRequest$ === "object");
assert(typeof CancelJobRunResponse$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CloudWatchMonitoringConfiguration$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationOverrides$ === "object");
assert(typeof ContainerInfo$ === "object");
assert(typeof ContainerLogRotationConfiguration$ === "object");
assert(typeof ContainerProvider$ === "object");
assert(typeof CreateJobTemplateRequest$ === "object");
assert(typeof CreateJobTemplateResponse$ === "object");
assert(typeof CreateManagedEndpointRequest$ === "object");
assert(typeof CreateManagedEndpointResponse$ === "object");
assert(typeof CreateSecurityConfigurationRequest$ === "object");
assert(typeof CreateSecurityConfigurationResponse$ === "object");
assert(typeof CreateVirtualClusterRequest$ === "object");
assert(typeof CreateVirtualClusterResponse$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DeleteJobTemplateRequest$ === "object");
assert(typeof DeleteJobTemplateResponse$ === "object");
assert(typeof DeleteManagedEndpointRequest$ === "object");
assert(typeof DeleteManagedEndpointResponse$ === "object");
assert(typeof DeleteVirtualClusterRequest$ === "object");
assert(typeof DeleteVirtualClusterResponse$ === "object");
assert(typeof DescribeJobRunRequest$ === "object");
assert(typeof DescribeJobRunResponse$ === "object");
assert(typeof DescribeJobTemplateRequest$ === "object");
assert(typeof DescribeJobTemplateResponse$ === "object");
assert(typeof DescribeManagedEndpointRequest$ === "object");
assert(typeof DescribeManagedEndpointResponse$ === "object");
assert(typeof DescribeSecurityConfigurationRequest$ === "object");
assert(typeof DescribeSecurityConfigurationResponse$ === "object");
assert(typeof DescribeVirtualClusterRequest$ === "object");
assert(typeof DescribeVirtualClusterResponse$ === "object");
assert(typeof EksInfo$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof GetManagedEndpointSessionCredentialsRequest$ === "object");
assert(typeof GetManagedEndpointSessionCredentialsResponse$ === "object");
assert(typeof InTransitEncryptionConfiguration$ === "object");
assert(typeof JobDriver$ === "object");
assert(typeof JobRun$ === "object");
assert(typeof JobTemplate$ === "object");
assert(typeof JobTemplateData$ === "object");
assert(typeof LakeFormationConfiguration$ === "object");
assert(typeof ListJobRunsRequest$ === "object");
assert(typeof ListJobRunsResponse$ === "object");
assert(typeof ListJobTemplatesRequest$ === "object");
assert(typeof ListJobTemplatesResponse$ === "object");
assert(typeof ListManagedEndpointsRequest$ === "object");
assert(typeof ListManagedEndpointsResponse$ === "object");
assert(typeof ListSecurityConfigurationsRequest$ === "object");
assert(typeof ListSecurityConfigurationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVirtualClustersRequest$ === "object");
assert(typeof ListVirtualClustersResponse$ === "object");
assert(typeof ManagedLogs$ === "object");
assert(typeof MonitoringConfiguration$ === "object");
assert(typeof ParametricCloudWatchMonitoringConfiguration$ === "object");
assert(typeof ParametricConfigurationOverrides$ === "object");
assert(typeof ParametricMonitoringConfiguration$ === "object");
assert(typeof ParametricS3MonitoringConfiguration$ === "object");
assert(typeof RetryPolicyConfiguration$ === "object");
assert(typeof RetryPolicyExecution$ === "object");
assert(typeof S3MonitoringConfiguration$ === "object");
assert(typeof SecureNamespaceInfo$ === "object");
assert(typeof SecurityConfiguration$ === "object");
assert(typeof SecurityConfigurationData$ === "object");
assert(typeof SparkSqlJobDriver$ === "object");
assert(typeof SparkSubmitJobDriver$ === "object");
assert(typeof StartJobRunRequest$ === "object");
assert(typeof StartJobRunResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TemplateParameterConfiguration$ === "object");
assert(typeof TLSCertificateConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof VirtualCluster$ === "object");
// enums
assert(typeof AllowAWSToRetainLogs === "object");
assert(typeof CertificateProviderType === "object");
assert(typeof ContainerProviderType === "object");
assert(typeof EndpointState === "object");
assert(typeof FailureReason === "object");
assert(typeof JobRunState === "object");
assert(typeof PersistentAppUI === "object");
assert(typeof TemplateParameterDataType === "object");
assert(typeof VirtualClusterState === "object");
// errors
assert(EKSRequestThrottledException.prototype instanceof EMRContainersServiceException);
assert(typeof EKSRequestThrottledException$ === "object");
assert(InternalServerException.prototype instanceof EMRContainersServiceException);
assert(typeof InternalServerException$ === "object");
assert(RequestThrottledException.prototype instanceof EMRContainersServiceException);
assert(typeof RequestThrottledException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EMRContainersServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof EMRContainersServiceException);
assert(typeof ValidationException$ === "object");
assert(EMRContainersServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListJobRuns === "function");
assert(typeof paginateListJobTemplates === "function");
assert(typeof paginateListManagedEndpoints === "function");
assert(typeof paginateListSecurityConfigurations === "function");
assert(typeof paginateListVirtualClusters === "function");
console.log(`EMRContainers index test passed.`);
