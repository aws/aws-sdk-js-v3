import {
  AllowAWSToRetainLogs,
  CancelJobRunCommand,
  CertificateProviderType,
  ContainerProviderType,
  CreateJobTemplateCommand,
  CreateManagedEndpointCommand,
  CreateSecurityConfigurationCommand,
  CreateVirtualClusterCommand,
  DeleteJobTemplateCommand,
  DeleteManagedEndpointCommand,
  DeleteVirtualClusterCommand,
  DescribeJobRunCommand,
  DescribeJobTemplateCommand,
  DescribeManagedEndpointCommand,
  DescribeSecurityConfigurationCommand,
  DescribeVirtualClusterCommand,
  EMRContainers,
  EMRContainersClient,
  EMRContainersServiceException,
  EndpointState,
  FailureReason,
  GetManagedEndpointSessionCredentialsCommand,
  JobRunState,
  ListJobRunsCommand,
  ListJobTemplatesCommand,
  ListManagedEndpointsCommand,
  ListSecurityConfigurationsCommand,
  ListTagsForResourceCommand,
  ListVirtualClustersCommand,
  PersistentAppUI,
  StartJobRunCommand,
  TagResourceCommand,
  TemplateParameterDataType,
  UntagResourceCommand,
  VirtualClusterState,
  paginateListJobRuns,
  paginateListJobTemplates,
  paginateListManagedEndpoints,
  paginateListSecurityConfigurations,
  paginateListVirtualClusters,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EMRContainersClient === "function");
assert(typeof EMRContainers === "function");
// commands
assert(typeof CancelJobRunCommand === "function");
assert(typeof CreateJobTemplateCommand === "function");
assert(typeof CreateManagedEndpointCommand === "function");
assert(typeof CreateSecurityConfigurationCommand === "function");
assert(typeof CreateVirtualClusterCommand === "function");
assert(typeof DeleteJobTemplateCommand === "function");
assert(typeof DeleteManagedEndpointCommand === "function");
assert(typeof DeleteVirtualClusterCommand === "function");
assert(typeof DescribeJobRunCommand === "function");
assert(typeof DescribeJobTemplateCommand === "function");
assert(typeof DescribeManagedEndpointCommand === "function");
assert(typeof DescribeSecurityConfigurationCommand === "function");
assert(typeof DescribeVirtualClusterCommand === "function");
assert(typeof GetManagedEndpointSessionCredentialsCommand === "function");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListJobTemplatesCommand === "function");
assert(typeof ListManagedEndpointsCommand === "function");
assert(typeof ListSecurityConfigurationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVirtualClustersCommand === "function");
assert(typeof StartJobRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
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
assert(EMRContainersServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListJobRuns === "function");
assert(typeof paginateListJobTemplates === "function");
assert(typeof paginateListManagedEndpoints === "function");
assert(typeof paginateListSecurityConfigurations === "function");
assert(typeof paginateListVirtualClusters === "function");
console.log(`EMRContainers index test passed.`);
