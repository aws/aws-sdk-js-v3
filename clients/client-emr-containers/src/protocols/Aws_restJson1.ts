// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "../commands/CancelJobRunCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "../commands/CreateJobTemplateCommand";
import {
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "../commands/CreateManagedEndpointCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "../commands/CreateSecurityConfigurationCommand";
import {
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "../commands/CreateVirtualClusterCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "../commands/DeleteJobTemplateCommand";
import {
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "../commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "../commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "../commands/DescribeJobRunCommand";
import {
  DescribeJobTemplateCommandInput,
  DescribeJobTemplateCommandOutput,
} from "../commands/DescribeJobTemplateCommand";
import {
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "../commands/DescribeManagedEndpointCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "../commands/DescribeSecurityConfigurationCommand";
import {
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "../commands/DescribeVirtualClusterCommand";
import {
  GetManagedEndpointSessionCredentialsCommandInput,
  GetManagedEndpointSessionCredentialsCommandOutput,
} from "../commands/GetManagedEndpointSessionCredentialsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import {
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "../commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { EMRContainersServiceException as __BaseException } from "../models/EMRContainersServiceException";
import {
  AuthorizationConfiguration,
  CloudWatchMonitoringConfiguration,
  Configuration,
  ConfigurationOverrides,
  ContainerInfo,
  ContainerLogRotationConfiguration,
  ContainerProvider,
  EksInfo,
  EKSRequestThrottledException,
  EncryptionConfiguration,
  Endpoint,
  InternalServerException,
  InTransitEncryptionConfiguration,
  JobDriver,
  JobRun,
  JobTemplate,
  JobTemplateData,
  LakeFormationConfiguration,
  ManagedLogs,
  MonitoringConfiguration,
  ParametricCloudWatchMonitoringConfiguration,
  ParametricConfigurationOverrides,
  ParametricMonitoringConfiguration,
  ParametricS3MonitoringConfiguration,
  RequestThrottledException,
  ResourceNotFoundException,
  RetryPolicyConfiguration,
  S3MonitoringConfiguration,
  SecureNamespaceInfo,
  SecurityConfiguration,
  SecurityConfigurationData,
  SparkSqlJobDriver,
  SparkSubmitJobDriver,
  TemplateParameterConfiguration,
  TLSCertificateConfiguration,
  ValidationException,
  VirtualCluster,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelJobRunCommand
 */
export const se_CancelJobRunCommand = async (
  input: CancelJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/jobruns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobTemplateCommand
 */
export const se_CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobtemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      jobTemplateData: (_) => se_JobTemplateData(_, context),
      kmsKeyArn: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateManagedEndpointCommand
 */
export const se_CreateManagedEndpointCommand = async (
  input: CreateManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/virtualclusters/{virtualClusterId}/endpoints");
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationOverrides: (_) => se_ConfigurationOverrides(_, context),
      executionRoleArn: [],
      name: [],
      releaseLabel: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSecurityConfigurationCommand
 */
export const se_CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/securityconfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerProvider: (_) => _json(_),
      name: [],
      securityConfigurationData: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVirtualClusterCommand
 */
export const se_CreateVirtualClusterCommand = async (
  input: CreateVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/virtualclusters");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerProvider: (_) => _json(_),
      name: [],
      securityConfigurationId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteJobTemplateCommand
 */
export const se_DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobtemplates/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteManagedEndpointCommand
 */
export const se_DeleteManagedEndpointCommand = async (
  input: DeleteManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/endpoints/{id}");
  b.p("id", () => input.id!, "{id}", false);
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVirtualClusterCommand
 */
export const se_DeleteVirtualClusterCommand = async (
  input: DeleteVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobRunCommand
 */
export const se_DescribeJobRunCommand = async (
  input: DescribeJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/jobruns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeJobTemplateCommand
 */
export const se_DescribeJobTemplateCommand = async (
  input: DescribeJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobtemplates/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeManagedEndpointCommand
 */
export const se_DescribeManagedEndpointCommand = async (
  input: DescribeManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/endpoints/{id}");
  b.p("id", () => input.id!, "{id}", false);
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSecurityConfigurationCommand
 */
export const se_DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/securityconfigurations/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVirtualClusterCommand
 */
export const se_DescribeVirtualClusterCommand = async (
  input: DescribeVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedEndpointSessionCredentialsCommand
 */
export const se_GetManagedEndpointSessionCredentialsCommand = async (
  input: GetManagedEndpointSessionCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/virtualclusters/{virtualClusterIdentifier}/endpoints/{endpointIdentifier}/credentials");
  b.p("endpointIdentifier", () => input.endpointIdentifier!, "{endpointIdentifier}", false);
  b.p("virtualClusterIdentifier", () => input.virtualClusterIdentifier!, "{virtualClusterIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      credentialType: [],
      durationInSeconds: [],
      executionRoleArn: [],
      logContext: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobRunsCommand
 */
export const se_ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/jobruns");
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  const query: any = map({
    [_cB]: [() => input.createdBefore !== void 0, () => __serializeDateTime(input[_cB]!).toString()],
    [_cA]: [() => input.createdAfter !== void 0, () => __serializeDateTime(input[_cA]!).toString()],
    [_n]: [, input[_n]!],
    [_s]: [() => input.states !== void 0, () => input[_s]! || []],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListJobTemplatesCommand
 */
export const se_ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobtemplates");
  const query: any = map({
    [_cA]: [() => input.createdAfter !== void 0, () => __serializeDateTime(input[_cA]!).toString()],
    [_cB]: [() => input.createdBefore !== void 0, () => __serializeDateTime(input[_cB]!).toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedEndpointsCommand
 */
export const se_ListManagedEndpointsCommand = async (
  input: ListManagedEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters/{virtualClusterId}/endpoints");
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  const query: any = map({
    [_cB]: [() => input.createdBefore !== void 0, () => __serializeDateTime(input[_cB]!).toString()],
    [_cA]: [() => input.createdAfter !== void 0, () => __serializeDateTime(input[_cA]!).toString()],
    [_t]: [() => input.types !== void 0, () => input[_t]! || []],
    [_s]: [() => input.states !== void 0, () => input[_s]! || []],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSecurityConfigurationsCommand
 */
export const se_ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/securityconfigurations");
  const query: any = map({
    [_cA]: [() => input.createdAfter !== void 0, () => __serializeDateTime(input[_cA]!).toString()],
    [_cB]: [() => input.createdBefore !== void 0, () => __serializeDateTime(input[_cB]!).toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVirtualClustersCommand
 */
export const se_ListVirtualClustersCommand = async (
  input: ListVirtualClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/virtualclusters");
  const query: any = map({
    [_cPI]: [, input[_cPI]!],
    [_cPT]: [, input[_cPT]!],
    [_cA]: [() => input.createdAfter !== void 0, () => __serializeDateTime(input[_cA]!).toString()],
    [_cB]: [() => input.createdBefore !== void 0, () => __serializeDateTime(input[_cB]!).toString()],
    [_s]: [() => input.states !== void 0, () => input[_s]! || []],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_eAEI]: [() => input.eksAccessEntryIntegrated !== void 0, () => input[_eAEI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartJobRunCommand
 */
export const se_StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/virtualclusters/{virtualClusterId}/jobruns");
  b.p("virtualClusterId", () => input.virtualClusterId!, "{virtualClusterId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationOverrides: (_) => se_ConfigurationOverrides(_, context),
      executionRoleArn: [],
      jobDriver: (_) => _json(_),
      jobTemplateId: [],
      jobTemplateParameters: (_) => _json(_),
      name: [],
      releaseLabel: [],
      retryPolicyConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelJobRunCommand
 */
export const de_CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    virtualClusterId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobTemplateCommand
 */
export const de_CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateManagedEndpointCommand
 */
export const de_CreateManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
    virtualClusterId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSecurityConfigurationCommand
 */
export const de_CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVirtualClusterCommand
 */
export const de_CreateVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobTemplateCommand
 */
export const de_DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteManagedEndpointCommand
 */
export const de_DeleteManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    virtualClusterId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVirtualClusterCommand
 */
export const de_DeleteVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobRunCommand
 */
export const de_DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobRun: (_) => de_JobRun(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobTemplateCommand
 */
export const de_DescribeJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobTemplate: (_) => de_JobTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeManagedEndpointCommand
 */
export const de_DescribeManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endpoint: (_) => de_Endpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSecurityConfigurationCommand
 */
export const de_DescribeSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    securityConfiguration: (_) => de_SecurityConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVirtualClusterCommand
 */
export const de_DescribeVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    virtualCluster: (_) => de_VirtualCluster(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedEndpointSessionCredentialsCommand
 */
export const de_GetManagedEndpointSessionCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedEndpointSessionCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentials: (_) => _json(__expectUnion(_)),
    expiresAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobRunsCommand
 */
export const de_ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobRuns: (_) => de_JobRuns(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobTemplatesCommand
 */
export const de_ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templates: (_) => de_JobTemplates(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedEndpointsCommand
 */
export const de_ListManagedEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endpoints: (_) => de_Endpoints(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSecurityConfigurationsCommand
 */
export const de_ListSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    securityConfigurations: (_) => de_SecurityConfigurations(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVirtualClustersCommand
 */
export const de_ListVirtualClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    virtualClusters: (_) => de_VirtualClusters(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartJobRunCommand
 */
export const de_StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    name: __expectString,
    virtualClusterId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "EKSRequestThrottledException":
    case "com.amazonaws.emrcontainers#EKSRequestThrottledException":
      throw await de_EKSRequestThrottledExceptionRes(parsedOutput, context);
    case "RequestThrottledException":
    case "com.amazonaws.emrcontainers#RequestThrottledException":
      throw await de_RequestThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1EKSRequestThrottledExceptionRes
 */
const de_EKSRequestThrottledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EKSRequestThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new EKSRequestThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestThrottledExceptionRes
 */
const de_RequestThrottledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AuthorizationConfiguration omitted.

// se_CloudWatchMonitoringConfiguration omitted.

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return take(input, {
    classification: [],
    configurations: (_) => se_ConfigurationList(_, context),
    properties: _json,
  });
};

/**
 * serializeAws_restJson1ConfigurationList
 */
const se_ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Configuration(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigurationOverrides
 */
const se_ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return take(input, {
    applicationConfiguration: (_) => se_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  });
};

// se_ContainerInfo omitted.

// se_ContainerLogRotationConfiguration omitted.

// se_ContainerProvider omitted.

// se_EksInfo omitted.

// se_EncryptionConfiguration omitted.

// se_EntryPointArguments omitted.

// se_InTransitEncryptionConfiguration omitted.

// se_JobDriver omitted.

/**
 * serializeAws_restJson1JobTemplateData
 */
const se_JobTemplateData = (input: JobTemplateData, context: __SerdeContext): any => {
  return take(input, {
    configurationOverrides: (_) => se_ParametricConfigurationOverrides(_, context),
    executionRoleArn: [],
    jobDriver: _json,
    jobTags: _json,
    parameterConfiguration: _json,
    releaseLabel: [],
  });
};

// se_LakeFormationConfiguration omitted.

// se_ManagedLogs omitted.

// se_MonitoringConfiguration omitted.

// se_ParametricCloudWatchMonitoringConfiguration omitted.

/**
 * serializeAws_restJson1ParametricConfigurationOverrides
 */
const se_ParametricConfigurationOverrides = (input: ParametricConfigurationOverrides, context: __SerdeContext): any => {
  return take(input, {
    applicationConfiguration: (_) => se_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  });
};

// se_ParametricMonitoringConfiguration omitted.

// se_ParametricS3MonitoringConfiguration omitted.

// se_RetryPolicyConfiguration omitted.

// se_S3MonitoringConfiguration omitted.

// se_SecureNamespaceInfo omitted.

// se_SecurityConfigurationData omitted.

// se_SensitivePropertiesMap omitted.

// se_SparkSqlJobDriver omitted.

// se_SparkSubmitJobDriver omitted.

// se_TagMap omitted.

// se_TemplateParameterConfiguration omitted.

// se_TemplateParameterConfigurationMap omitted.

// se_TemplateParameterInputMap omitted.

// se_TLSCertificateConfiguration omitted.

// de_AuthorizationConfiguration omitted.

// de_Certificate omitted.

// de_CloudWatchMonitoringConfiguration omitted.

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return take(output, {
    classification: __expectString,
    configurations: (_: any) => de_ConfigurationList(_, context),
    properties: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationList
 */
const de_ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigurationOverrides
 */
const de_ConfigurationOverrides = (output: any, context: __SerdeContext): ConfigurationOverrides => {
  return take(output, {
    applicationConfiguration: (_: any) => de_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  }) as any;
};

// de_ContainerInfo omitted.

// de_ContainerLogRotationConfiguration omitted.

// de_ContainerProvider omitted.

// de_Credentials omitted.

// de_EksInfo omitted.

// de_EncryptionConfiguration omitted.

/**
 * deserializeAws_restJson1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return take(output, {
    arn: __expectString,
    certificateArn: __expectString,
    certificateAuthority: _json,
    configurationOverrides: (_: any) => de_ConfigurationOverrides(_, context),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    executionRoleArn: __expectString,
    failureReason: __expectString,
    id: __expectString,
    name: __expectString,
    releaseLabel: __expectString,
    securityGroup: __expectString,
    serverUrl: __expectString,
    state: __expectString,
    stateDetails: __expectString,
    subnetIds: _json,
    tags: _json,
    type: __expectString,
    virtualClusterId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Endpoint(entry, context);
    });
  return retVal;
};

// de_EntryPointArguments omitted.

// de_InTransitEncryptionConfiguration omitted.

// de_JobDriver omitted.

/**
 * deserializeAws_restJson1JobRun
 */
const de_JobRun = (output: any, context: __SerdeContext): JobRun => {
  return take(output, {
    arn: __expectString,
    clientToken: __expectString,
    configurationOverrides: (_: any) => de_ConfigurationOverrides(_, context),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    executionRoleArn: __expectString,
    failureReason: __expectString,
    finishedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    jobDriver: _json,
    name: __expectString,
    releaseLabel: __expectString,
    retryPolicyConfiguration: _json,
    retryPolicyExecution: _json,
    state: __expectString,
    stateDetails: __expectString,
    tags: _json,
    virtualClusterId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobRuns
 */
const de_JobRuns = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobTemplate
 */
const de_JobTemplate = (output: any, context: __SerdeContext): JobTemplate => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    decryptionError: __expectString,
    id: __expectString,
    jobTemplateData: (_: any) => de_JobTemplateData(_, context),
    kmsKeyArn: __expectString,
    name: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1JobTemplateData
 */
const de_JobTemplateData = (output: any, context: __SerdeContext): JobTemplateData => {
  return take(output, {
    configurationOverrides: (_: any) => de_ParametricConfigurationOverrides(_, context),
    executionRoleArn: __expectString,
    jobDriver: _json,
    jobTags: _json,
    parameterConfiguration: _json,
    releaseLabel: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JobTemplates
 */
const de_JobTemplates = (output: any, context: __SerdeContext): JobTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobTemplate(entry, context);
    });
  return retVal;
};

// de_LakeFormationConfiguration omitted.

// de_ManagedLogs omitted.

// de_MonitoringConfiguration omitted.

// de_ParametricCloudWatchMonitoringConfiguration omitted.

/**
 * deserializeAws_restJson1ParametricConfigurationOverrides
 */
const de_ParametricConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ParametricConfigurationOverrides => {
  return take(output, {
    applicationConfiguration: (_: any) => de_ConfigurationList(_, context),
    monitoringConfiguration: _json,
  }) as any;
};

// de_ParametricMonitoringConfiguration omitted.

// de_ParametricS3MonitoringConfiguration omitted.

// de_RetryPolicyConfiguration omitted.

// de_RetryPolicyExecution omitted.

// de_S3MonitoringConfiguration omitted.

// de_SecureNamespaceInfo omitted.

/**
 * deserializeAws_restJson1SecurityConfiguration
 */
const de_SecurityConfiguration = (output: any, context: __SerdeContext): SecurityConfiguration => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    id: __expectString,
    name: __expectString,
    securityConfigurationData: _json,
    tags: _json,
  }) as any;
};

// de_SecurityConfigurationData omitted.

/**
 * deserializeAws_restJson1SecurityConfigurations
 */
const de_SecurityConfigurations = (output: any, context: __SerdeContext): SecurityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityConfiguration(entry, context);
    });
  return retVal;
};

// de_SensitivePropertiesMap omitted.

// de_SparkSqlJobDriver omitted.

// de_SparkSubmitJobDriver omitted.

// de_SubnetIds omitted.

// de_TagMap omitted.

// de_TemplateParameterConfiguration omitted.

// de_TemplateParameterConfigurationMap omitted.

// de_TLSCertificateConfiguration omitted.

/**
 * deserializeAws_restJson1VirtualCluster
 */
const de_VirtualCluster = (output: any, context: __SerdeContext): VirtualCluster => {
  return take(output, {
    arn: __expectString,
    containerProvider: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    name: __expectString,
    securityConfigurationId: __expectString,
    state: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VirtualClusters
 */
const de_VirtualClusters = (output: any, context: __SerdeContext): VirtualCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualCluster(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _cA = "createdAfter";
const _cB = "createdBefore";
const _cPI = "containerProviderId";
const _cPT = "containerProviderType";
const _eAEI = "eksAccessEntryIntegrated";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _s = "states";
const _t = "types";
const _tK = "tagKeys";
