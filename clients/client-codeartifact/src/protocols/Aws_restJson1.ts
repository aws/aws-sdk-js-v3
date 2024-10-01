// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "../commands/AssociateExternalConnectionCommand";
import {
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "../commands/CopyPackageVersionsCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreatePackageGroupCommandInput, CreatePackageGroupCommandOutput } from "../commands/CreatePackageGroupCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "../commands/DeleteDomainPermissionsPolicyCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import { DeletePackageGroupCommandInput, DeletePackageGroupCommandOutput } from "../commands/DeletePackageGroupCommand";
import {
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "../commands/DeletePackageVersionsCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "../commands/DeleteRepositoryPermissionsPolicyCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import { DescribePackageCommandInput, DescribePackageCommandOutput } from "../commands/DescribePackageCommand";
import {
  DescribePackageGroupCommandInput,
  DescribePackageGroupCommandOutput,
} from "../commands/DescribePackageGroupCommand";
import {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "../commands/DescribePackageVersionCommand";
import { DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput } from "../commands/DescribeRepositoryCommand";
import {
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "../commands/DisassociateExternalConnectionCommand";
import {
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "../commands/DisposePackageVersionsCommand";
import {
  GetAssociatedPackageGroupCommandInput,
  GetAssociatedPackageGroupCommandOutput,
} from "../commands/GetAssociatedPackageGroupCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "../commands/GetDomainPermissionsPolicyCommand";
import {
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "../commands/GetPackageVersionAssetCommand";
import {
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "../commands/GetPackageVersionReadmeCommand";
import {
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "../commands/GetRepositoryEndpointCommand";
import {
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "../commands/GetRepositoryPermissionsPolicyCommand";
import {
  ListAllowedRepositoriesForGroupCommandInput,
  ListAllowedRepositoriesForGroupCommandOutput,
} from "../commands/ListAllowedRepositoriesForGroupCommand";
import {
  ListAssociatedPackagesCommandInput,
  ListAssociatedPackagesCommandOutput,
} from "../commands/ListAssociatedPackagesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListPackageGroupsCommandInput, ListPackageGroupsCommandOutput } from "../commands/ListPackageGroupsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import {
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "../commands/ListPackageVersionAssetsCommand";
import {
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "../commands/ListPackageVersionDependenciesCommand";
import {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import {
  ListSubPackageGroupsCommandInput,
  ListSubPackageGroupsCommandOutput,
} from "../commands/ListSubPackageGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
} from "../commands/PublishPackageVersionCommand";
import {
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "../commands/PutDomainPermissionsPolicyCommand";
import {
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "../commands/PutPackageOriginConfigurationCommand";
import {
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "../commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePackageGroupCommandInput, UpdatePackageGroupCommandOutput } from "../commands/UpdatePackageGroupCommand";
import {
  UpdatePackageGroupOriginConfigurationCommandInput,
  UpdatePackageGroupOriginConfigurationCommandOutput,
} from "../commands/UpdatePackageGroupOriginConfigurationCommand";
import {
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "../commands/UpdatePackageVersionsStatusCommand";
import { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "../commands/UpdateRepositoryCommand";
import { CodeartifactServiceException as __BaseException } from "../models/CodeartifactServiceException";
import {
  AccessDeniedException,
  ConflictException,
  DomainDescription,
  DomainSummary,
  InternalServerException,
  PackageGroupAllowedRepository,
  PackageGroupDescription,
  PackageGroupOriginRestrictionMode,
  PackageGroupOriginRestrictionType,
  PackageGroupSummary,
  PackageOriginRestrictions,
  PackageVersionDescription,
  RepositoryDescription,
  RepositorySummary,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  ThrottlingException,
  UpstreamRepository,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateExternalConnectionCommand
 */
export const se_AssociateExternalConnectionCommand = async (
  input: AssociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository/external-connection");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_ec]: [, __expectNonNull(input[_eC]!, `externalConnection`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CopyPackageVersionsCommand
 */
export const se_CopyPackageVersionsCommand = async (
  input: CopyPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package/versions/copy");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_sr]: [, __expectNonNull(input[_sR]!, `sourceRepository`)],
    [_dr]: [, __expectNonNull(input[_dR]!, `destinationRepository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowOverwrite: [],
      includeFromUpstream: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domain");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionKey: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageGroupCommand
 */
export const se_CreatePackageGroupCommand = async (
  input: CreatePackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package-group");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactInfo: [],
      description: [],
      packageGroup: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/repository");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      tags: (_) => _json(_),
      upstreams: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domain");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainPermissionsPolicyCommand
 */
export const se_DeleteDomainPermissionsPolicyCommand = async (
  input: DeleteDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domain/permissions/policy");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pr]: [, input[_pR]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageGroupCommand
 */
export const se_DeletePackageGroupCommand = async (
  input: DeletePackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package-group");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageVersionsCommand
 */
export const se_DeletePackageVersionsCommand = async (
  input: DeletePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package/versions/delete");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      versions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand
 */
export const se_DeleteRepositoryPermissionsPolicyCommand = async (
  input: DeleteRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository/permissions/policies");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_pr]: [, input[_pR]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domain");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageCommand
 */
export const se_DescribePackageCommand = async (
  input: DescribePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageGroupCommand
 */
export const se_DescribePackageGroupCommand = async (
  input: DescribePackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package-group");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageVersionCommand
 */
export const se_DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/version");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRepositoryCommand
 */
export const se_DescribeRepositoryCommand = async (
  input: DescribeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateExternalConnectionCommand
 */
export const se_DisassociateExternalConnectionCommand = async (
  input: DisassociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository/external-connection");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_ec]: [, __expectNonNull(input[_eC]!, `externalConnection`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisposePackageVersionsCommand
 */
export const se_DisposePackageVersionsCommand = async (
  input: DisposePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package/versions/dispose");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssociatedPackageGroupCommand
 */
export const se_GetAssociatedPackageGroupCommand = async (
  input: GetAssociatedPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/get-associated-package-group");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAuthorizationTokenCommand
 */
export const se_GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/authorization-token");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_du]: [() => input.durationSeconds !== void 0, () => input[_dS]!.toString()],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainPermissionsPolicyCommand
 */
export const se_GetDomainPermissionsPolicyCommand = async (
  input: GetDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domain/permissions/policy");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageVersionAssetCommand
 */
export const se_GetPackageVersionAssetCommand = async (
  input: GetPackageVersionAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/version/asset");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
    [_a]: [, __expectNonNull(input[_a]!, `asset`)],
    [_re]: [, input[_pVR]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageVersionReadmeCommand
 */
export const se_GetPackageVersionReadmeCommand = async (
  input: GetPackageVersionReadmeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/version/readme");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRepositoryEndpointCommand
 */
export const se_GetRepositoryEndpointCommand = async (
  input: GetRepositoryEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository/endpoint");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_eT]: [, input[_eT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRepositoryPermissionsPolicyCommand
 */
export const se_GetRepositoryPermissionsPolicyCommand = async (
  input: GetRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repository/permissions/policy");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAllowedRepositoriesForGroupCommand
 */
export const se_ListAllowedRepositoriesForGroupCommand = async (
  input: ListAllowedRepositoriesForGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package-group-allowed-repositories");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
    [_oRT]: [, __expectNonNull(input[_oRT]!, `originRestrictionType`)],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedPackagesCommand
 */
export const se_ListAssociatedPackagesCommand = async (
  input: ListAssociatedPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/list-associated-packages");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
    [_pre]: [() => input.preview !== void 0, () => input[_pre]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domains");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageGroupsCommand
 */
export const se_ListPackageGroupsCommand = async (
  input: ListPackageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package-groups");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
    [_pref]: [, input[_pref]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackagesCommand
 */
export const se_ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/packages");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, input[_f]!],
    [_n]: [, input[_n]!],
    [_pp]: [, input[_pP]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
    [_pu]: [, input[_pu]!],
    [_u]: [, input[_u]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageVersionAssetsCommand
 */
export const se_ListPackageVersionAssetsCommand = async (
  input: ListPackageVersionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/version/assets");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageVersionDependenciesCommand
 */
export const se_ListPackageVersionDependenciesCommand = async (
  input: ListPackageVersionDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/version/dependencies");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageVersionsCommand
 */
export const se_ListPackageVersionsCommand = async (
  input: ListPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package/versions");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_s]: [, input[_s]!],
    [_sB]: [, input[_sB]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
    [_oT]: [, input[_oT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/repositories");
  const query: any = map({
    [_rp]: [, input[_rP]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRepositoriesInDomainCommand
 */
export const se_ListRepositoriesInDomainCommand = async (
  input: ListRepositoriesInDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domain/repositories");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_aa]: [, input[_aA]!],
    [_rp]: [, input[_rP]!],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubPackageGroupsCommand
 */
export const se_ListSubPackageGroupsCommand = async (
  input: ListSubPackageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/package-groups/sub-groups");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
    [_mr]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nt]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/v1/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PublishPackageVersionCommand
 */
export const se_PublishPackageVersionCommand = async (
  input: PublishPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xacs]: input[_aSHA]!,
  });
  b.bp("/v1/package/version/publish");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
    [_v]: [, __expectNonNull(input[_pV]!, `packageVersion`)],
    [_a]: [, __expectNonNull(input[_aN]!, `assetName`)],
    [_un]: [() => input.unfinished !== void 0, () => input[_un]!.toString()],
  });
  let body: any;
  if (input.assetContent !== undefined) {
    body = input.assetContent;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDomainPermissionsPolicyCommand
 */
export const se_PutDomainPermissionsPolicyCommand = async (
  input: PutDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domain/permissions/policy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      domain: [],
      domainOwner: [],
      policyDocument: [],
      policyRevision: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutPackageOriginConfigurationCommand
 */
export const se_PutPackageOriginConfigurationCommand = async (
  input: PutPackageOriginConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      restrictions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRepositoryPermissionsPolicyCommand
 */
export const se_PutRepositoryPermissionsPolicyCommand = async (
  input: PutRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/repository/permissions/policy");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyDocument: [],
      policyRevision: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
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
  b.bp("/v1/tag");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/untag");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageGroupCommand
 */
export const se_UpdatePackageGroupCommand = async (
  input: UpdatePackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package-group");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactInfo: [],
      description: [],
      packageGroup: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageGroupOriginConfigurationCommand
 */
export const se_UpdatePackageGroupOriginConfigurationCommand = async (
  input: UpdatePackageGroupOriginConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package-group-origin-configuration");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_pg]: [, __expectNonNull(input[_pG]!, `packageGroup`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      addAllowedRepositories: (_) => _json(_),
      removeAllowedRepositories: (_) => _json(_),
      restrictions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageVersionsStatusCommand
 */
export const se_UpdatePackageVersionsStatusCommand = async (
  input: UpdatePackageVersionsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/package/versions/update_status");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_n]: [, input[_n]!],
    [_p]: [, __expectNonNull(input[_p]!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      targetStatus: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRepositoryCommand
 */
export const se_UpdateRepositoryCommand = async (
  input: UpdateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/repository");
  const query: any = map({
    [_d]: [, __expectNonNull(input[_d]!, `domain`)],
    [_do]: [, input[_dO]!],
    [_r]: [, __expectNonNull(input[_r]!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      upstreams: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateExternalConnectionCommand
 */
export const de_AssociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CopyPackageVersionsCommand
 */
export const de_CopyPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageGroupCommand
 */
export const de_CreatePackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRepositoryCommand
 */
export const de_CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand
 */
export const de_DeleteDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deletedPackage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageGroupCommand
 */
export const de_DeletePackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageVersionsCommand
 */
export const de_DeletePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRepositoryCommand
 */
export const de_DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand
 */
export const de_DeleteRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageCommand
 */
export const de_DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    package: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageGroupCommand
 */
export const de_DescribePackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageVersionCommand
 */
export const de_DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageVersion: (_) => de_PackageVersionDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRepositoryCommand
 */
export const de_DescribeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateExternalConnectionCommand
 */
export const de_DisassociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisposePackageVersionsCommand
 */
export const de_DisposePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisposePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssociatedPackageGroupCommand
 */
export const de_GetAssociatedPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociatedPackageGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    associationType: __expectString,
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthorizationTokenCommand
 */
export const de_GetAuthorizationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizationToken: __expectString,
    expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainPermissionsPolicyCommand
 */
export const de_GetDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionAssetCommand
 */
export const de_GetPackageVersionAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetPackageVersionAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_aN]: [, output.headers[_xa]],
    [_pV]: [, output.headers[_xp]],
    [_pVR]: [, output.headers[_xp_]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.asset = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionReadmeCommand
 */
export const de_GetPackageVersionReadmeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionReadmeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    namespace: __expectString,
    package: __expectString,
    readme: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRepositoryEndpointCommand
 */
export const de_GetRepositoryEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repositoryEndpoint: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand
 */
export const de_GetRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAllowedRepositoriesForGroupCommand
 */
export const de_ListAllowedRepositoriesForGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAllowedRepositoriesForGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedRepositories: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedPackagesCommand
 */
export const de_ListAssociatedPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packages: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domains: (_) => de_DomainSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageGroupsCommand
 */
export const de_ListPackageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packageGroups: (_) => de_PackageGroupSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesCommand
 */
export const de_ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packages: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionAssetsCommand
 */
export const de_ListPackageVersionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: _json,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionDependenciesCommand
 */
export const de_ListPackageVersionDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dependencies: _json,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionsCommand
 */
export const de_ListPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultDisplayVersion: __expectString,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRepositoriesCommand
 */
export const de_ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    repositories: (_) => de_RepositorySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRepositoriesInDomainCommand
 */
export const de_ListRepositoriesInDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesInDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    repositories: (_) => de_RepositorySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubPackageGroupsCommand
 */
export const de_ListSubPackageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubPackageGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packageGroups: (_) => de_PackageGroupSummaryList(_, context),
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
 * deserializeAws_restJson1PublishPackageVersionCommand
 */
export const de_PublishPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    asset: _json,
    format: __expectString,
    namespace: __expectString,
    package: __expectString,
    status: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutDomainPermissionsPolicyCommand
 */
export const de_PutDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutPackageOriginConfigurationCommand
 */
export const de_PutPackageOriginConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPackageOriginConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    originConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand
 */
export const de_PutRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
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
 * deserializeAws_restJson1UpdatePackageGroupCommand
 */
export const de_UpdatePackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageGroupOriginConfigurationCommand
 */
export const de_UpdatePackageGroupOriginConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageGroupOriginConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedRepositoryUpdates: _json,
    packageGroup: (_) => de_PackageGroupDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageVersionsStatusCommand
 */
export const de_UpdatePackageVersionsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionsStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRepositoryCommand
 */
export const de_UpdateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
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
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_OriginRestrictions omitted.

// se_PackageGroupAllowedRepository omitted.

// se_PackageGroupAllowedRepositoryList omitted.

// se_PackageOriginRestrictions omitted.

// se_PackageVersionList omitted.

// se_PackageVersionRevisionMap omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_UpstreamRepository omitted.

// se_UpstreamRepositoryList omitted.

// de_AssetHashes omitted.

// de_AssetSummary omitted.

// de_AssetSummaryList omitted.

// de_AssociatedPackage omitted.

// de_AssociatedPackageList omitted.

/**
 * deserializeAws_restJson1DomainDescription
 */
const de_DomainDescription = (output: any, context: __SerdeContext): DomainDescription => {
  return take(output, {
    arn: __expectString,
    assetSizeBytes: __expectLong,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionKey: __expectString,
    name: __expectString,
    owner: __expectString,
    repositoryCount: __expectInt32,
    s3BucketArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_DomainEntryPoint omitted.

/**
 * deserializeAws_restJson1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionKey: __expectString,
    name: __expectString,
    owner: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainSummaryList
 */
const de_DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

// de_LicenseInfo omitted.

// de_LicenseInfoList omitted.

// de_PackageDependency omitted.

// de_PackageDependencyList omitted.

// de_PackageDescription omitted.

// de_PackageGroupAllowedRepositoryUpdate omitted.

// de_PackageGroupAllowedRepositoryUpdates omitted.

/**
 * deserializeAws_restJson1PackageGroupDescription
 */
const de_PackageGroupDescription = (output: any, context: __SerdeContext): PackageGroupDescription => {
  return take(output, {
    arn: __expectString,
    contactInfo: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    originConfiguration: _json,
    parent: _json,
    pattern: __expectString,
  }) as any;
};

// de_PackageGroupOriginConfiguration omitted.

// de_PackageGroupOriginRestriction omitted.

// de_PackageGroupOriginRestrictions omitted.

// de_PackageGroupReference omitted.

/**
 * deserializeAws_restJson1PackageGroupSummary
 */
const de_PackageGroupSummary = (output: any, context: __SerdeContext): PackageGroupSummary => {
  return take(output, {
    arn: __expectString,
    contactInfo: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    originConfiguration: _json,
    parent: _json,
    pattern: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageGroupSummaryList
 */
const de_PackageGroupSummaryList = (output: any, context: __SerdeContext): PackageGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageGroupSummary(entry, context);
    });
  return retVal;
};

// de_PackageOriginConfiguration omitted.

// de_PackageOriginRestrictions omitted.

// de_PackageSummary omitted.

// de_PackageSummaryList omitted.

/**
 * deserializeAws_restJson1PackageVersionDescription
 */
const de_PackageVersionDescription = (output: any, context: __SerdeContext): PackageVersionDescription => {
  return take(output, {
    displayName: __expectString,
    format: __expectString,
    homePage: __expectString,
    licenses: _json,
    namespace: __expectString,
    origin: _json,
    packageName: __expectString,
    publishedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revision: __expectString,
    sourceCodeRepository: __expectString,
    status: __expectString,
    summary: __expectString,
    version: __expectString,
  }) as any;
};

// de_PackageVersionError omitted.

// de_PackageVersionErrorMap omitted.

// de_PackageVersionOrigin omitted.

// de_PackageVersionSummary omitted.

// de_PackageVersionSummaryList omitted.

/**
 * deserializeAws_restJson1RepositoryDescription
 */
const de_RepositoryDescription = (output: any, context: __SerdeContext): RepositoryDescription => {
  return take(output, {
    administratorAccount: __expectString,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    externalConnections: _json,
    name: __expectString,
    upstreams: _json,
  }) as any;
};

// de_RepositoryExternalConnectionInfo omitted.

// de_RepositoryExternalConnectionInfoList omitted.

// de_RepositoryNameList omitted.

/**
 * deserializeAws_restJson1RepositorySummary
 */
const de_RepositorySummary = (output: any, context: __SerdeContext): RepositorySummary => {
  return take(output, {
    administratorAccount: __expectString,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RepositorySummaryList
 */
const de_RepositorySummaryList = (output: any, context: __SerdeContext): RepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositorySummary(entry, context);
    });
  return retVal;
};

// de_ResourcePolicy omitted.

// de_SuccessfulPackageVersionInfo omitted.

// de_SuccessfulPackageVersionInfoMap omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_UpstreamRepositoryInfo omitted.

// de_UpstreamRepositoryInfoList omitted.

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

const _a = "asset";
const _aA = "administratorAccount";
const _aN = "assetName";
const _aSHA = "assetSHA256";
const _aa = "administrator-account";
const _d = "domain";
const _dO = "domainOwner";
const _dR = "destinationRepository";
const _dS = "durationSeconds";
const _do = "domain-owner";
const _dr = "destination-repository";
const _du = "duration";
const _eC = "externalConnection";
const _eT = "endpointType";
const _ec = "external-connection";
const _f = "format";
const _mR = "maxResults";
const _mr = "max-results";
const _n = "namespace";
const _nT = "nextToken";
const _nt = "next-token";
const _oRT = "originRestrictionType";
const _oT = "originType";
const _p = "package";
const _pG = "packageGroup";
const _pP = "packagePrefix";
const _pR = "policyRevision";
const _pV = "packageVersion";
const _pVR = "packageVersionRevision";
const _pg = "package-group";
const _pp = "package-prefix";
const _pr = "policy-revision";
const _pre = "preview";
const _pref = "prefix";
const _pu = "publish";
const _r = "repository";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _rP = "repositoryPrefix";
const _ra = "retry-after";
const _re = "revision";
const _rp = "repository-prefix";
const _s = "status";
const _sB = "sortBy";
const _sR = "sourceRepository";
const _sr = "source-repository";
const _u = "upstream";
const _un = "unfinished";
const _v = "version";
const _xa = "x-assetname";
const _xacs = "x-amz-content-sha256";
const _xp = "x-packageversion";
const _xp_ = "x-packageversionrevision";
