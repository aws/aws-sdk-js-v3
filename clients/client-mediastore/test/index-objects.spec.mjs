import {
  Container$,
  ContainerInUseException,
  ContainerInUseException$,
  ContainerLevelMetrics,
  ContainerNotFoundException,
  ContainerNotFoundException$,
  ContainerStatus,
  CorsPolicyNotFoundException,
  CorsPolicyNotFoundException$,
  CorsRule$,
  CreateContainer$,
  CreateContainerCommand,
  CreateContainerInput$,
  CreateContainerOutput$,
  DeleteContainer$,
  DeleteContainerCommand,
  DeleteContainerInput$,
  DeleteContainerOutput$,
  DeleteContainerPolicy$,
  DeleteContainerPolicyCommand,
  DeleteContainerPolicyInput$,
  DeleteContainerPolicyOutput$,
  DeleteCorsPolicy$,
  DeleteCorsPolicyCommand,
  DeleteCorsPolicyInput$,
  DeleteCorsPolicyOutput$,
  DeleteLifecyclePolicy$,
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyInput$,
  DeleteLifecyclePolicyOutput$,
  DeleteMetricPolicy$,
  DeleteMetricPolicyCommand,
  DeleteMetricPolicyInput$,
  DeleteMetricPolicyOutput$,
  DescribeContainer$,
  DescribeContainerCommand,
  DescribeContainerInput$,
  DescribeContainerOutput$,
  GetContainerPolicy$,
  GetContainerPolicyCommand,
  GetContainerPolicyInput$,
  GetContainerPolicyOutput$,
  GetCorsPolicy$,
  GetCorsPolicyCommand,
  GetCorsPolicyInput$,
  GetCorsPolicyOutput$,
  GetLifecyclePolicy$,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyInput$,
  GetLifecyclePolicyOutput$,
  GetMetricPolicy$,
  GetMetricPolicyCommand,
  GetMetricPolicyInput$,
  GetMetricPolicyOutput$,
  InternalServerError,
  InternalServerError$,
  LimitExceededException,
  LimitExceededException$,
  ListContainers$,
  ListContainersCommand,
  ListContainersInput$,
  ListContainersOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MediaStore,
  MediaStoreClient,
  MediaStoreServiceException,
  MethodName,
  MetricPolicy$,
  MetricPolicyRule$,
  paginateListContainers,
  PolicyNotFoundException,
  PolicyNotFoundException$,
  PutContainerPolicy$,
  PutContainerPolicyCommand,
  PutContainerPolicyInput$,
  PutContainerPolicyOutput$,
  PutCorsPolicy$,
  PutCorsPolicyCommand,
  PutCorsPolicyInput$,
  PutCorsPolicyOutput$,
  PutLifecyclePolicy$,
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyInput$,
  PutLifecyclePolicyOutput$,
  PutMetricPolicy$,
  PutMetricPolicyCommand,
  PutMetricPolicyInput$,
  PutMetricPolicyOutput$,
  StartAccessLogging$,
  StartAccessLoggingCommand,
  StartAccessLoggingInput$,
  StartAccessLoggingOutput$,
  StopAccessLogging$,
  StopAccessLoggingCommand,
  StopAccessLoggingInput$,
  StopAccessLoggingOutput$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaStoreClient === "function");
assert(typeof MediaStore === "function");
// commands
assert(typeof CreateContainerCommand === "function");
assert(typeof CreateContainer$ === "object");
assert(typeof DeleteContainerCommand === "function");
assert(typeof DeleteContainer$ === "object");
assert(typeof DeleteContainerPolicyCommand === "function");
assert(typeof DeleteContainerPolicy$ === "object");
assert(typeof DeleteCorsPolicyCommand === "function");
assert(typeof DeleteCorsPolicy$ === "object");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteLifecyclePolicy$ === "object");
assert(typeof DeleteMetricPolicyCommand === "function");
assert(typeof DeleteMetricPolicy$ === "object");
assert(typeof DescribeContainerCommand === "function");
assert(typeof DescribeContainer$ === "object");
assert(typeof GetContainerPolicyCommand === "function");
assert(typeof GetContainerPolicy$ === "object");
assert(typeof GetCorsPolicyCommand === "function");
assert(typeof GetCorsPolicy$ === "object");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetLifecyclePolicy$ === "object");
assert(typeof GetMetricPolicyCommand === "function");
assert(typeof GetMetricPolicy$ === "object");
assert(typeof ListContainersCommand === "function");
assert(typeof ListContainers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutContainerPolicyCommand === "function");
assert(typeof PutContainerPolicy$ === "object");
assert(typeof PutCorsPolicyCommand === "function");
assert(typeof PutCorsPolicy$ === "object");
assert(typeof PutLifecyclePolicyCommand === "function");
assert(typeof PutLifecyclePolicy$ === "object");
assert(typeof PutMetricPolicyCommand === "function");
assert(typeof PutMetricPolicy$ === "object");
assert(typeof StartAccessLoggingCommand === "function");
assert(typeof StartAccessLogging$ === "object");
assert(typeof StopAccessLoggingCommand === "function");
assert(typeof StopAccessLogging$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof Container$ === "object");
assert(typeof CorsRule$ === "object");
assert(typeof CreateContainerInput$ === "object");
assert(typeof CreateContainerOutput$ === "object");
assert(typeof DeleteContainerInput$ === "object");
assert(typeof DeleteContainerOutput$ === "object");
assert(typeof DeleteContainerPolicyInput$ === "object");
assert(typeof DeleteContainerPolicyOutput$ === "object");
assert(typeof DeleteCorsPolicyInput$ === "object");
assert(typeof DeleteCorsPolicyOutput$ === "object");
assert(typeof DeleteLifecyclePolicyInput$ === "object");
assert(typeof DeleteLifecyclePolicyOutput$ === "object");
assert(typeof DeleteMetricPolicyInput$ === "object");
assert(typeof DeleteMetricPolicyOutput$ === "object");
assert(typeof DescribeContainerInput$ === "object");
assert(typeof DescribeContainerOutput$ === "object");
assert(typeof GetContainerPolicyInput$ === "object");
assert(typeof GetContainerPolicyOutput$ === "object");
assert(typeof GetCorsPolicyInput$ === "object");
assert(typeof GetCorsPolicyOutput$ === "object");
assert(typeof GetLifecyclePolicyInput$ === "object");
assert(typeof GetLifecyclePolicyOutput$ === "object");
assert(typeof GetMetricPolicyInput$ === "object");
assert(typeof GetMetricPolicyOutput$ === "object");
assert(typeof ListContainersInput$ === "object");
assert(typeof ListContainersOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MetricPolicy$ === "object");
assert(typeof MetricPolicyRule$ === "object");
assert(typeof PutContainerPolicyInput$ === "object");
assert(typeof PutContainerPolicyOutput$ === "object");
assert(typeof PutCorsPolicyInput$ === "object");
assert(typeof PutCorsPolicyOutput$ === "object");
assert(typeof PutLifecyclePolicyInput$ === "object");
assert(typeof PutLifecyclePolicyOutput$ === "object");
assert(typeof PutMetricPolicyInput$ === "object");
assert(typeof PutMetricPolicyOutput$ === "object");
assert(typeof StartAccessLoggingInput$ === "object");
assert(typeof StartAccessLoggingOutput$ === "object");
assert(typeof StopAccessLoggingInput$ === "object");
assert(typeof StopAccessLoggingOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
// enums
assert(typeof ContainerLevelMetrics === "object");
assert(typeof ContainerStatus === "object");
assert(typeof MethodName === "object");
// errors
assert(ContainerInUseException.prototype instanceof MediaStoreServiceException);
assert(typeof ContainerInUseException$ === "object");
assert(ContainerNotFoundException.prototype instanceof MediaStoreServiceException);
assert(typeof ContainerNotFoundException$ === "object");
assert(CorsPolicyNotFoundException.prototype instanceof MediaStoreServiceException);
assert(typeof CorsPolicyNotFoundException$ === "object");
assert(InternalServerError.prototype instanceof MediaStoreServiceException);
assert(typeof InternalServerError$ === "object");
assert(LimitExceededException.prototype instanceof MediaStoreServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PolicyNotFoundException.prototype instanceof MediaStoreServiceException);
assert(typeof PolicyNotFoundException$ === "object");
assert(MediaStoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListContainers === "function");
console.log(`MediaStore index test passed.`);
