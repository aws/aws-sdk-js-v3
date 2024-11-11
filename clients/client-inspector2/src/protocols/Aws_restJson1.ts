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
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateMemberCommandInput, AssociateMemberCommandOutput } from "../commands/AssociateMemberCommand";
import {
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "../commands/BatchGetAccountStatusCommand";
import {
  BatchGetCodeSnippetCommandInput,
  BatchGetCodeSnippetCommandOutput,
} from "../commands/BatchGetCodeSnippetCommand";
import {
  BatchGetFindingDetailsCommandInput,
  BatchGetFindingDetailsCommandOutput,
} from "../commands/BatchGetFindingDetailsCommand";
import {
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "../commands/BatchGetFreeTrialInfoCommand";
import {
  BatchGetMemberEc2DeepInspectionStatusCommandInput,
  BatchGetMemberEc2DeepInspectionStatusCommandOutput,
} from "../commands/BatchGetMemberEc2DeepInspectionStatusCommand";
import {
  BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
} from "../commands/BatchUpdateMemberEc2DeepInspectionStatusCommand";
import {
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "../commands/CancelFindingsReportCommand";
import { CancelSbomExportCommandInput, CancelSbomExportCommandOutput } from "../commands/CancelSbomExportCommand";
import {
  CreateCisScanConfigurationCommandInput,
  CreateCisScanConfigurationCommandOutput,
} from "../commands/CreateCisScanConfigurationCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "../commands/CreateFilterCommand";
import {
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "../commands/CreateFindingsReportCommand";
import { CreateSbomExportCommandInput, CreateSbomExportCommandOutput } from "../commands/CreateSbomExportCommand";
import {
  DeleteCisScanConfigurationCommandInput,
  DeleteCisScanConfigurationCommandOutput,
} from "../commands/DeleteCisScanConfigurationCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "../commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { DisableCommandInput, DisableCommandOutput } from "../commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "../commands/DisableDelegatedAdminAccountCommand";
import { DisassociateMemberCommandInput, DisassociateMemberCommandOutput } from "../commands/DisassociateMemberCommand";
import { EnableCommandInput, EnableCommandOutput } from "../commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "../commands/EnableDelegatedAdminAccountCommand";
import { GetCisScanReportCommandInput, GetCisScanReportCommandOutput } from "../commands/GetCisScanReportCommand";
import {
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput,
} from "../commands/GetCisScanResultDetailsCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import {
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "../commands/GetDelegatedAdminAccountCommand";
import {
  GetEc2DeepInspectionConfigurationCommandInput,
  GetEc2DeepInspectionConfigurationCommandOutput,
} from "../commands/GetEc2DeepInspectionConfigurationCommand";
import { GetEncryptionKeyCommandInput, GetEncryptionKeyCommandOutput } from "../commands/GetEncryptionKeyCommand";
import {
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "../commands/GetFindingsReportStatusCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import { GetSbomExportCommandInput, GetSbomExportCommandOutput } from "../commands/GetSbomExportCommand";
import {
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "../commands/ListAccountPermissionsCommand";
import {
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput,
} from "../commands/ListCisScanConfigurationsCommand";
import {
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput,
} from "../commands/ListCisScanResultsAggregatedByChecksCommand";
import {
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput,
} from "../commands/ListCisScanResultsAggregatedByTargetResourceCommand";
import { ListCisScansCommandInput, ListCisScansCommandOutput } from "../commands/ListCisScansCommand";
import { ListCoverageCommandInput, ListCoverageCommandOutput } from "../commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "../commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "../commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "../commands/ListFindingAggregationsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput } from "../commands/ListUsageTotalsCommand";
import { ResetEncryptionKeyCommandInput, ResetEncryptionKeyCommandOutput } from "../commands/ResetEncryptionKeyCommand";
import {
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "../commands/SearchVulnerabilitiesCommand";
import {
  SendCisSessionHealthCommandInput,
  SendCisSessionHealthCommandOutput,
} from "../commands/SendCisSessionHealthCommand";
import {
  SendCisSessionTelemetryCommandInput,
  SendCisSessionTelemetryCommandOutput,
} from "../commands/SendCisSessionTelemetryCommand";
import { StartCisSessionCommandInput, StartCisSessionCommandOutput } from "../commands/StartCisSessionCommand";
import { StopCisSessionCommandInput, StopCisSessionCommandOutput } from "../commands/StopCisSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCisScanConfigurationCommandInput,
  UpdateCisScanConfigurationCommandOutput,
} from "../commands/UpdateCisScanConfigurationCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "../commands/UpdateConfigurationCommand";
import {
  UpdateEc2DeepInspectionConfigurationCommandInput,
  UpdateEc2DeepInspectionConfigurationCommandOutput,
} from "../commands/UpdateEc2DeepInspectionConfigurationCommand";
import {
  UpdateEncryptionKeyCommandInput,
  UpdateEncryptionKeyCommandOutput,
} from "../commands/UpdateEncryptionKeyCommand";
import { UpdateFilterCommandInput, UpdateFilterCommandOutput } from "../commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateOrgEc2DeepInspectionConfigurationCommandInput,
  UpdateOrgEc2DeepInspectionConfigurationCommandOutput,
} from "../commands/UpdateOrgEc2DeepInspectionConfigurationCommand";
import { Inspector2ServiceException as __BaseException } from "../models/Inspector2ServiceException";
import {
  AccessDeniedException,
  AccountAggregation,
  AggregationRequest,
  AggregationResponse,
  AmiAggregation,
  AtigData,
  AutoEnable,
  AwsEc2InstanceDetails,
  AwsEcrContainerAggregation,
  AwsEcrContainerImageDetails,
  AwsLambdaFunctionDetails,
  BadRequestException,
  CisaData,
  CisDateFilter,
  CisFindingStatusFilter,
  CisNumberFilter,
  CisResultStatusFilter,
  CisScan,
  CisScanResultDetailsFilterCriteria,
  CisScanResultsAggregatedByChecksFilterCriteria,
  CisScanResultsAggregatedByTargetResourceFilterCriteria,
  CisScanStatusFilter,
  CisSecurityLevelFilter,
  CisSessionMessage,
  CisStringFilter,
  CisTargetStatusFilter,
  CisTargetStatusReasonFilter,
  ComputePlatform,
  ConflictException,
  CoverageDateFilter,
  CoverageFilterCriteria,
  CoverageMapFilter,
  CoverageStringFilter,
  CoveredResource,
  CreateCisTargets,
  Cvss2,
  Cvss3,
  CvssScore,
  CvssScoreDetails,
  DailySchedule,
  DateFilter,
  Day,
  Destination,
  Ec2Configuration,
  Ec2InstanceAggregation,
  EcrConfiguration,
  EcrConfigurationState,
  EcrContainerImageMetadata,
  EcrRescanDurationState,
  Epss,
  EpssDetails,
  ExploitabilityDetails,
  ExploitObserved,
  Filter,
  FilterCriteria,
  Finding,
  FindingDetail,
  FindingTypeAggregation,
  FreeTrialAccountInfo,
  FreeTrialInfo,
  ImageLayerAggregation,
  InspectorScoreDetails,
  InternalServerException,
  LambdaFunctionAggregation,
  LambdaFunctionAggregationResponse,
  LambdaLayerAggregation,
  ListCisScanConfigurationsFilterCriteria,
  MapFilter,
  Member,
  MemberAccountEc2DeepInspectionStatus,
  MonthlySchedule,
  NumberFilter,
  OneTimeSchedule,
  PackageAggregation,
  PackageFilter,
  PackageVulnerabilityDetails,
  PortRangeFilter,
  RepositoryAggregation,
  Resource,
  ResourceDetails,
  ResourceFilterCriteria,
  ResourceMapFilter,
  ResourceNotFoundException,
  ResourceScanMetadata,
  ResourceScanType,
  ResourceStringFilter,
  Schedule,
  ServiceQuotaExceededException,
  StringFilter,
  TagFilter,
  ThrottlingException,
  Time,
  TitleAggregation,
  ValidationException,
  WeeklySchedule,
} from "../models/models_0";
import {
  ListCisScansFilterCriteria,
  SearchVulnerabilitiesFilterCriteria,
  SortCriteria,
  StartCisSessionMessage,
  StopCisMessageProgress,
  StopCisSessionMessage,
  UpdateCisTargets,
  Usage,
  UsageTotal,
  Vulnerability,
} from "../models/models_1";

/**
 * serializeAws_restJson1AssociateMemberCommand
 */
export const se_AssociateMemberCommand = async (
  input: AssociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/members/associate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetAccountStatusCommand
 */
export const se_BatchGetAccountStatusCommand = async (
  input: BatchGetAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/status/batch/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetCodeSnippetCommand
 */
export const se_BatchGetCodeSnippetCommand = async (
  input: BatchGetCodeSnippetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/codesnippet/batchget");
  let body: any;
  body = JSON.stringify(
    take(input, {
      findingArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetFindingDetailsCommand
 */
export const se_BatchGetFindingDetailsCommand = async (
  input: BatchGetFindingDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/findings/details/batch/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      findingArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetFreeTrialInfoCommand
 */
export const se_BatchGetFreeTrialInfoCommand = async (
  input: BatchGetFreeTrialInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/freetrialinfo/batchget");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetMemberEc2DeepInspectionStatusCommand
 */
export const se_BatchGetMemberEc2DeepInspectionStatusCommand = async (
  input: BatchGetMemberEc2DeepInspectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ec2deepinspectionstatus/member/batch/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateMemberEc2DeepInspectionStatusCommand
 */
export const se_BatchUpdateMemberEc2DeepInspectionStatusCommand = async (
  input: BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ec2deepinspectionstatus/member/batch/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelFindingsReportCommand
 */
export const se_CancelFindingsReportCommand = async (
  input: CancelFindingsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reporting/cancel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSbomExportCommand
 */
export const se_CancelSbomExportCommand = async (
  input: CancelSbomExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sbomexport/cancel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCisScanConfigurationCommand
 */
export const se_CreateCisScanConfigurationCommand = async (
  input: CreateCisScanConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-configuration/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      scanName: [],
      schedule: (_) => _json(_),
      securityLevel: [],
      tags: (_) => _json(_),
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFilterCommand
 */
export const se_CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/filters/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      description: [],
      filterCriteria: (_) => se_FilterCriteria(_, context),
      name: [],
      reason: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFindingsReportCommand
 */
export const se_CreateFindingsReportCommand = async (
  input: CreateFindingsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reporting/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => se_FilterCriteria(_, context),
      reportFormat: [],
      s3Destination: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSbomExportCommand
 */
export const se_CreateSbomExportCommand = async (
  input: CreateSbomExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sbomexport/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportFormat: [],
      resourceFilterCriteria: (_) => _json(_),
      s3Destination: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCisScanConfigurationCommand
 */
export const se_DeleteCisScanConfigurationCommand = async (
  input: DeleteCisScanConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-configuration/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      scanConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFilterCommand
 */
export const se_DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/filters/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const se_DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/organizationconfiguration/describe");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableCommand
 */
export const se_DisableCommand = async (
  input: DisableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      resourceTypes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableDelegatedAdminAccountCommand
 */
export const se_DisableDelegatedAdminAccountCommand = async (
  input: DisableDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delegatedadminaccounts/disable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      delegatedAdminAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMemberCommand
 */
export const se_DisassociateMemberCommand = async (
  input: DisassociateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/members/disassociate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableCommand
 */
export const se_EnableCommand = async (input: EnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/enable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      resourceTypes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableDelegatedAdminAccountCommand
 */
export const se_EnableDelegatedAdminAccountCommand = async (
  input: EnableDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delegatedadminaccounts/enable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      delegatedAdminAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCisScanReportCommand
 */
export const se_GetCisScanReportCommand = async (
  input: GetCisScanReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan/report/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportFormat: [],
      scanArn: [],
      targetAccounts: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCisScanResultDetailsCommand
 */
export const se_GetCisScanResultDetailsCommand = async (
  input: GetCisScanResultDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-result/details/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
      filterCriteria: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      scanArn: [],
      sortBy: [],
      sortOrder: [],
      targetResourceId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationCommand
 */
export const se_GetConfigurationCommand = async (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration/get");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDelegatedAdminAccountCommand
 */
export const se_GetDelegatedAdminAccountCommand = async (
  input: GetDelegatedAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/delegatedadminaccounts/get");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEc2DeepInspectionConfigurationCommand
 */
export const se_GetEc2DeepInspectionConfigurationCommand = async (
  input: GetEc2DeepInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ec2deepinspectionconfiguration/get");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEncryptionKeyCommand
 */
export const se_GetEncryptionKeyCommand = async (
  input: GetEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/encryptionkey/get");
  const query: any = map({
    [_sT]: [, __expectNonNull(input[_sT]!, `scanType`)],
    [_rT]: [, __expectNonNull(input[_rT]!, `resourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingsReportStatusCommand
 */
export const se_GetFindingsReportStatusCommand = async (
  input: GetFindingsReportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reporting/status/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMemberCommand
 */
export const se_GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/members/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSbomExportCommand
 */
export const se_GetSbomExportCommand = async (
  input: GetSbomExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sbomexport/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      reportId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccountPermissionsCommand
 */
export const se_ListAccountPermissionsCommand = async (
  input: ListAccountPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accountpermissions/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      service: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCisScanConfigurationsCommand
 */
export const se_ListCisScanConfigurationsCommand = async (
  input: ListCisScanConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-configuration/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: [],
      sortOrder: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCisScanResultsAggregatedByChecksCommand
 */
export const se_ListCisScanResultsAggregatedByChecksCommand = async (
  input: ListCisScanResultsAggregatedByChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-result/check/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      scanArn: [],
      sortBy: [],
      sortOrder: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCisScanResultsAggregatedByTargetResourceCommand
 */
export const se_ListCisScanResultsAggregatedByTargetResourceCommand = async (
  input: ListCisScanResultsAggregatedByTargetResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-result/resource/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      scanArn: [],
      sortBy: [],
      sortOrder: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCisScansCommand
 */
export const se_ListCisScansCommand = async (
  input: ListCisScansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      detailLevel: [],
      filterCriteria: (_) => se_ListCisScansFilterCriteria(_, context),
      maxResults: [],
      nextToken: [],
      sortBy: [],
      sortOrder: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoverageCommand
 */
export const se_ListCoverageCommand = async (
  input: ListCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/coverage/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => se_CoverageFilterCriteria(_, context),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoverageStatisticsCommand
 */
export const se_ListCoverageStatisticsCommand = async (
  input: ListCoverageStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/coverage/statistics/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => se_CoverageFilterCriteria(_, context),
      groupBy: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDelegatedAdminAccountsCommand
 */
export const se_ListDelegatedAdminAccountsCommand = async (
  input: ListDelegatedAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delegatedadminaccounts/list");
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
 * serializeAws_restJson1ListFiltersCommand
 */
export const se_ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/filters/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      arns: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingAggregationsCommand
 */
export const se_ListFindingAggregationsCommand = async (
  input: ListFindingAggregationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/findings/aggregation/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      aggregationRequest: (_) => _json(_),
      aggregationType: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingsCommand
 */
export const se_ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/findings/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => se_FilterCriteria(_, context),
      maxResults: [],
      nextToken: [],
      sortCriteria: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/members/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      onlyAssociated: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1ListUsageTotalsCommand
 */
export const se_ListUsageTotalsCommand = async (
  input: ListUsageTotalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/usage/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetEncryptionKeyCommand
 */
export const se_ResetEncryptionKeyCommand = async (
  input: ResetEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/encryptionkey/reset");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceType: [],
      scanType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchVulnerabilitiesCommand
 */
export const se_SearchVulnerabilitiesCommand = async (
  input: SearchVulnerabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vulnerabilities/search");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterCriteria: (_) => _json(_),
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendCisSessionHealthCommand
 */
export const se_SendCisSessionHealthCommand = async (
  input: SendCisSessionHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cissession/health/send");
  let body: any;
  body = JSON.stringify(
    take(input, {
      scanJobId: [],
      sessionToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendCisSessionTelemetryCommand
 */
export const se_SendCisSessionTelemetryCommand = async (
  input: SendCisSessionTelemetryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cissession/telemetry/send");
  let body: any;
  body = JSON.stringify(
    take(input, {
      messages: (_) => se_CisSessionMessages(_, context),
      scanJobId: [],
      sessionToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCisSessionCommand
 */
export const se_StartCisSessionCommand = async (
  input: StartCisSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cissession/start");
  let body: any;
  body = JSON.stringify(
    take(input, {
      message: (_) => _json(_),
      scanJobId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopCisSessionCommand
 */
export const se_StopCisSessionCommand = async (
  input: StopCisSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cissession/stop");
  let body: any;
  body = JSON.stringify(
    take(input, {
      message: (_) => _json(_),
      scanJobId: [],
      sessionToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
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
 * serializeAws_restJson1UpdateCisScanConfigurationCommand
 */
export const se_UpdateCisScanConfigurationCommand = async (
  input: UpdateCisScanConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cis/scan-configuration/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      scanConfigurationArn: [],
      scanName: [],
      schedule: (_) => _json(_),
      securityLevel: [],
      targets: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfigurationCommand
 */
export const se_UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ec2Configuration: (_) => _json(_),
      ecrConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEc2DeepInspectionConfigurationCommand
 */
export const se_UpdateEc2DeepInspectionConfigurationCommand = async (
  input: UpdateEc2DeepInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ec2deepinspectionconfiguration/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      activateDeepInspection: [],
      packagePaths: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEncryptionKeyCommand
 */
export const se_UpdateEncryptionKeyCommand = async (
  input: UpdateEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/encryptionkey/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      kmsKeyId: [],
      resourceType: [],
      scanType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFilterCommand
 */
export const se_UpdateFilterCommand = async (
  input: UpdateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/filters/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      description: [],
      filterArn: [],
      filterCriteria: (_) => se_FilterCriteria(_, context),
      name: [],
      reason: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const se_UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/organizationconfiguration/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoEnable: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOrgEc2DeepInspectionConfigurationCommand
 */
export const se_UpdateOrgEc2DeepInspectionConfigurationCommand = async (
  input: UpdateOrgEc2DeepInspectionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ec2deepinspectionconfiguration/org/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      orgPackagePaths: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateMemberCommand
 */
export const de_AssociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAccountStatusCommand
 */
export const de_BatchGetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accounts: _json,
    failedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetCodeSnippetCommand
 */
export const de_BatchGetCodeSnippetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCodeSnippetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeSnippetResults: _json,
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFindingDetailsCommand
 */
export const de_BatchGetFindingDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFindingDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    findingDetails: (_) => de_FindingDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFreeTrialInfoCommand
 */
export const de_BatchGetFreeTrialInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFreeTrialInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accounts: (_) => de_FreeTrialAccountInfoList(_, context),
    failedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetMemberEc2DeepInspectionStatusCommand
 */
export const de_BatchGetMemberEc2DeepInspectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMemberEc2DeepInspectionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountIds: _json,
    failedAccountIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateMemberEc2DeepInspectionStatusCommand
 */
export const de_BatchUpdateMemberEc2DeepInspectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateMemberEc2DeepInspectionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountIds: _json,
    failedAccountIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelFindingsReportCommand
 */
export const de_CancelFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    reportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSbomExportCommand
 */
export const de_CancelSbomExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSbomExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    reportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCisScanConfigurationCommand
 */
export const de_CreateCisScanConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCisScanConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scanConfigurationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFilterCommand
 */
export const de_CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFindingsReportCommand
 */
export const de_CreateFindingsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    reportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSbomExportCommand
 */
export const de_CreateSbomExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSbomExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    reportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCisScanConfigurationCommand
 */
export const de_DeleteCisScanConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCisScanConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scanConfigurationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFilterCommand
 */
export const de_DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const de_DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoEnable: _json,
    maxAccountLimitReached: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableCommand
 */
export const de_DisableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accounts: _json,
    failedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableDelegatedAdminAccountCommand
 */
export const de_DisableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegatedAdminAccountId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMemberCommand
 */
export const de_DisassociateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableCommand
 */
export const de_EnableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accounts: _json,
    failedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableDelegatedAdminAccountCommand
 */
export const de_EnableDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegatedAdminAccountId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCisScanReportCommand
 */
export const de_GetCisScanReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCisScanReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
    url: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCisScanResultDetailsCommand
 */
export const de_GetCisScanResultDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCisScanResultDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scanResultDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationCommand
 */
export const de_GetConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ec2Configuration: _json,
    ecrConfiguration: (_) => de_EcrConfigurationState(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDelegatedAdminAccountCommand
 */
export const de_GetDelegatedAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegatedAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegatedAdmin: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEc2DeepInspectionConfigurationCommand
 */
export const de_GetEc2DeepInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEc2DeepInspectionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorMessage: __expectString,
    orgPackagePaths: _json,
    packagePaths: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEncryptionKeyCommand
 */
export const de_GetEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kmsKeyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsReportStatusCommand
 */
export const de_GetFindingsReportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destination: _json,
    errorCode: __expectString,
    errorMessage: __expectString,
    filterCriteria: (_) => de_FilterCriteria(_, context),
    reportId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMemberCommand
 */
export const de_GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    member: (_) => de_Member(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSbomExportCommand
 */
export const de_GetSbomExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSbomExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorCode: __expectString,
    errorMessage: __expectString,
    filterCriteria: _json,
    format: __expectString,
    reportId: __expectString,
    s3Destination: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountPermissionsCommand
 */
export const de_ListAccountPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    permissions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCisScanConfigurationsCommand
 */
export const de_ListCisScanConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCisScanConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scanConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCisScanResultsAggregatedByChecksCommand
 */
export const de_ListCisScanResultsAggregatedByChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCisScanResultsAggregatedByChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    checkAggregations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCisScanResultsAggregatedByTargetResourceCommand
 */
export const de_ListCisScanResultsAggregatedByTargetResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCisScanResultsAggregatedByTargetResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    targetResourceAggregations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCisScansCommand
 */
export const de_ListCisScansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCisScansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scans: (_) => de_CisScanList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoverageCommand
 */
export const de_ListCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    coveredResources: (_) => de_CoveredResources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoverageStatisticsCommand
 */
export const de_ListCoverageStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoverageStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    countsByGroup: _json,
    nextToken: __expectString,
    totalCounts: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDelegatedAdminAccountsCommand
 */
export const de_ListDelegatedAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegatedAdminAccounts: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFiltersCommand
 */
export const de_ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    filters: (_) => de_FilterList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingAggregationsCommand
 */
export const de_ListFindingAggregationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregationType: __expectString,
    nextToken: __expectString,
    responses: (_) => de_AggregationResponseList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsCommand
 */
export const de_ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_FindingList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    members: (_) => de_MemberList(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1ListUsageTotalsCommand
 */
export const de_ListUsageTotalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageTotalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    totals: (_) => de_UsageTotalList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetEncryptionKeyCommand
 */
export const de_ResetEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetEncryptionKeyCommandOutput> => {
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
 * deserializeAws_restJson1SearchVulnerabilitiesCommand
 */
export const de_SearchVulnerabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchVulnerabilitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    vulnerabilities: (_) => de_Vulnerabilities(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendCisSessionHealthCommand
 */
export const de_SendCisSessionHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCisSessionHealthCommandOutput> => {
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
 * deserializeAws_restJson1SendCisSessionTelemetryCommand
 */
export const de_SendCisSessionTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCisSessionTelemetryCommandOutput> => {
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
 * deserializeAws_restJson1StartCisSessionCommand
 */
export const de_StartCisSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCisSessionCommandOutput> => {
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
 * deserializeAws_restJson1StopCisSessionCommand
 */
export const de_StopCisSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCisSessionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCisScanConfigurationCommand
 */
export const de_UpdateCisScanConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCisScanConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scanConfigurationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationCommand
 */
export const de_UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateEc2DeepInspectionConfigurationCommand
 */
export const de_UpdateEc2DeepInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEc2DeepInspectionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorMessage: __expectString,
    orgPackagePaths: _json,
    packagePaths: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEncryptionKeyCommand
 */
export const de_UpdateEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEncryptionKeyCommandOutput> => {
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
 * deserializeAws_restJson1UpdateFilterCommand
 */
export const de_UpdateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const de_UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoEnable: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOrgEc2DeepInspectionConfigurationCommand
 */
export const de_UpdateOrgEc2DeepInspectionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrgEc2DeepInspectionConfigurationCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.inspector2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.inspector2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.inspector2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.inspector2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.inspector2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.inspector2#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.inspector2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.inspector2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    fields: _json,
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

// se_AccountAggregation omitted.

// se_AccountIdFilterList omitted.

// se_AccountIdSet omitted.

// se_AggregationRequest omitted.

// se_AmiAggregation omitted.

// se_AutoEnable omitted.

// se_AwsEcrContainerAggregation omitted.

// se_CheckIdFilterList omitted.

/**
 * serializeAws_restJson1CisDateFilter
 */
const se_CisDateFilter = (input: CisDateFilter, context: __SerdeContext): any => {
  return take(input, {
    earliestScanStartTime: (_) => _.getTime() / 1_000,
    latestScanStartTime: (_) => _.getTime() / 1_000,
  });
};

// se_CisFindingArnFilterList omitted.

// se_CisFindingStatusFilter omitted.

// se_CisFindingStatusFilterList omitted.

// se_CisNumberFilter omitted.

// se_CisNumberFilterList omitted.

// se_CisResultStatusFilter omitted.

// se_CisResultStatusFilterList omitted.

// se_CisScanArnFilterList omitted.

// se_CisScanConfigurationArnFilterList omitted.

/**
 * serializeAws_restJson1CisScanDateFilterList
 */
const se_CisScanDateFilterList = (input: CisDateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CisDateFilter(entry, context);
    });
};

// se_CisScanNameFilterList omitted.

// se_CisScanResultDetailsFilterCriteria omitted.

// se_CisScanResultsAggregatedByChecksFilterCriteria omitted.

// se_CisScanResultsAggregatedByTargetResourceFilterCriteria omitted.

// se_CisScanStatusFilter omitted.

// se_CisScanStatusFilterList omitted.

// se_CisScheduledByFilterList omitted.

// se_CisSecurityLevelFilter omitted.

// se_CisSecurityLevelFilterList omitted.

/**
 * serializeAws_restJson1CisSessionMessage
 */
const se_CisSessionMessage = (input: CisSessionMessage, context: __SerdeContext): any => {
  return take(input, {
    cisRuleDetails: context.base64Encoder,
    ruleId: [],
    status: [],
  });
};

/**
 * serializeAws_restJson1CisSessionMessages
 */
const se_CisSessionMessages = (input: CisSessionMessage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CisSessionMessage(entry, context);
    });
};

// se_CisStringFilter omitted.

// se_CisTagMap omitted.

// se_CisTargetStatusFilter omitted.

// se_CisTargetStatusReasonFilter omitted.

// se_ComputePlatform omitted.

/**
 * serializeAws_restJson1CoverageDateFilter
 */
const se_CoverageDateFilter = (input: CoverageDateFilter, context: __SerdeContext): any => {
  return take(input, {
    endInclusive: (_) => _.getTime() / 1_000,
    startInclusive: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1CoverageDateFilterList
 */
const se_CoverageDateFilterList = (input: CoverageDateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CoverageDateFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1CoverageFilterCriteria
 */
const se_CoverageFilterCriteria = (input: CoverageFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    accountId: _json,
    ec2InstanceTags: _json,
    ecrImageTags: _json,
    ecrRepositoryName: _json,
    imagePulledAt: (_) => se_CoverageDateFilterList(_, context),
    lambdaFunctionName: _json,
    lambdaFunctionRuntime: _json,
    lambdaFunctionTags: _json,
    lastScannedAt: (_) => se_CoverageDateFilterList(_, context),
    resourceId: _json,
    resourceType: _json,
    scanMode: _json,
    scanStatusCode: _json,
    scanStatusReason: _json,
    scanType: _json,
  });
};

// se_CoverageMapFilter omitted.

// se_CoverageMapFilterList omitted.

// se_CoverageStringFilter omitted.

// se_CoverageStringFilterList omitted.

// se_CreateCisTargets omitted.

// se_DailySchedule omitted.

/**
 * serializeAws_restJson1DateFilter
 */
const se_DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return take(input, {
    endInclusive: (_) => _.getTime() / 1_000,
    startInclusive: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1DateFilterList
 */
const se_DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DateFilter(entry, context);
    });
};

// se_DaysList omitted.

// se_Destination omitted.

// se_DisableResourceTypeList omitted.

// se_Ec2Configuration omitted.

// se_Ec2InstanceAggregation omitted.

// se_EcrConfiguration omitted.

// se_EnableResourceTypeList omitted.

// se_FilterArnList omitted.

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    awsAccountId: _json,
    codeVulnerabilityDetectorName: _json,
    codeVulnerabilityDetectorTags: _json,
    codeVulnerabilityFilePath: _json,
    componentId: _json,
    componentType: _json,
    ec2InstanceImageId: _json,
    ec2InstanceSubnetId: _json,
    ec2InstanceVpcId: _json,
    ecrImageArchitecture: _json,
    ecrImageHash: _json,
    ecrImagePushedAt: (_) => se_DateFilterList(_, context),
    ecrImageRegistry: _json,
    ecrImageRepositoryName: _json,
    ecrImageTags: _json,
    epssScore: (_) => se_NumberFilterList(_, context),
    exploitAvailable: _json,
    findingArn: _json,
    findingStatus: _json,
    findingType: _json,
    firstObservedAt: (_) => se_DateFilterList(_, context),
    fixAvailable: _json,
    inspectorScore: (_) => se_NumberFilterList(_, context),
    lambdaFunctionExecutionRoleArn: _json,
    lambdaFunctionLastModifiedAt: (_) => se_DateFilterList(_, context),
    lambdaFunctionLayers: _json,
    lambdaFunctionName: _json,
    lambdaFunctionRuntime: _json,
    lastObservedAt: (_) => se_DateFilterList(_, context),
    networkProtocol: _json,
    portRange: _json,
    relatedVulnerabilities: _json,
    resourceId: _json,
    resourceTags: _json,
    resourceType: _json,
    severity: _json,
    title: _json,
    updatedAt: (_) => se_DateFilterList(_, context),
    vendorSeverity: _json,
    vulnerabilityId: _json,
    vulnerabilitySource: _json,
    vulnerablePackages: (_) => se_PackageFilterList(_, context),
  });
};

// se_FindingArnList omitted.

// se_FindingArns omitted.

// se_FindingTypeAggregation omitted.

// se_ImageLayerAggregation omitted.

// se_LambdaFunctionAggregation omitted.

// se_LambdaLayerAggregation omitted.

// se_ListCisScanConfigurationsFilterCriteria omitted.

/**
 * serializeAws_restJson1ListCisScansFilterCriteria
 */
const se_ListCisScansFilterCriteria = (input: ListCisScansFilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    failedChecksFilters: _json,
    scanArnFilters: _json,
    scanAtFilters: (_) => se_CisScanDateFilterList(_, context),
    scanConfigurationArnFilters: _json,
    scanNameFilters: _json,
    scanStatusFilters: _json,
    scheduledByFilters: _json,
    targetAccountIdFilters: _json,
    targetResourceIdFilters: _json,
    targetResourceTagFilters: _json,
  });
};

// se_MapFilter omitted.

// se_MapFilterList omitted.

// se_MemberAccountEc2DeepInspectionStatus omitted.

// se_MemberAccountEc2DeepInspectionStatusList omitted.

// se_MeteringAccountIdList omitted.

// se_MonthlySchedule omitted.

/**
 * serializeAws_restJson1NumberFilter
 */
const se_NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return take(input, {
    lowerInclusive: __serializeFloat,
    upperInclusive: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1NumberFilterList
 */
const se_NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NumberFilter(entry, context);
    });
};

// se_OneAccountIdFilterList omitted.

// se_OneTimeSchedule omitted.

// se_PackageAggregation omitted.

/**
 * serializeAws_restJson1PackageFilter
 */
const se_PackageFilter = (input: PackageFilter, context: __SerdeContext): any => {
  return take(input, {
    architecture: _json,
    epoch: (_) => se_NumberFilter(_, context),
    filePath: _json,
    name: _json,
    release: _json,
    sourceLambdaLayerArn: _json,
    sourceLayerHash: _json,
    version: _json,
  });
};

/**
 * serializeAws_restJson1PackageFilterList
 */
const se_PackageFilterList = (input: PackageFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PackageFilter(entry, context);
    });
};

// se_PathList omitted.

// se_PlatformFilterList omitted.

// se_PortRangeFilter omitted.

// se_PortRangeFilterList omitted.

// se_ReportTargetAccounts omitted.

// se_RepositoryAggregation omitted.

// se_ResourceFilterCriteria omitted.

// se_ResourceIdFilterList omitted.

// se_ResourceMapFilter omitted.

// se_ResourceMapFilterList omitted.

// se_ResourceStringFilter omitted.

// se_ResourceStringFilterList omitted.

// se_ResourceTagFilterList omitted.

// se_Schedule omitted.

// se_SearchVulnerabilitiesFilterCriteria omitted.

// se_SortCriteria omitted.

// se_StartCisSessionMessage omitted.

// se_StopCisMessageProgress omitted.

// se_StopCisSessionMessage omitted.

// se_StringFilter omitted.

// se_StringFilterList omitted.

// se_TagFilter omitted.

// se_TagMap omitted.

// se_TagValueList omitted.

// se_TargetAccountList omitted.

// se_TargetResourceTags omitted.

// se_TargetStatusFilterList omitted.

// se_TargetStatusReasonFilterList omitted.

// se_Time omitted.

// se_TitleAggregation omitted.

// se_TitleFilterList omitted.

// se_UpdateCisTargets omitted.

// se_UsageAccountIdList omitted.

// se_VulnIdList omitted.

// se_WeeklySchedule omitted.

// de_Account omitted.

// de_AccountAggregationResponse omitted.

// de_AccountList omitted.

// de_AccountState omitted.

// de_AccountStateList omitted.

/**
 * deserializeAws_restJson1AggregationResponse
 */
const de_AggregationResponse = (output: any, context: __SerdeContext): AggregationResponse => {
  if (output.accountAggregation != null) {
    return {
      accountAggregation: _json(output.accountAggregation),
    };
  }
  if (output.amiAggregation != null) {
    return {
      amiAggregation: _json(output.amiAggregation),
    };
  }
  if (output.awsEcrContainerAggregation != null) {
    return {
      awsEcrContainerAggregation: _json(output.awsEcrContainerAggregation),
    };
  }
  if (output.ec2InstanceAggregation != null) {
    return {
      ec2InstanceAggregation: _json(output.ec2InstanceAggregation),
    };
  }
  if (output.findingTypeAggregation != null) {
    return {
      findingTypeAggregation: _json(output.findingTypeAggregation),
    };
  }
  if (output.imageLayerAggregation != null) {
    return {
      imageLayerAggregation: _json(output.imageLayerAggregation),
    };
  }
  if (output.lambdaFunctionAggregation != null) {
    return {
      lambdaFunctionAggregation: de_LambdaFunctionAggregationResponse(output.lambdaFunctionAggregation, context),
    };
  }
  if (output.lambdaLayerAggregation != null) {
    return {
      lambdaLayerAggregation: _json(output.lambdaLayerAggregation),
    };
  }
  if (output.packageAggregation != null) {
    return {
      packageAggregation: _json(output.packageAggregation),
    };
  }
  if (output.repositoryAggregation != null) {
    return {
      repositoryAggregation: _json(output.repositoryAggregation),
    };
  }
  if (output.titleAggregation != null) {
    return {
      titleAggregation: _json(output.titleAggregation),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AggregationResponseList
 */
const de_AggregationResponseList = (output: any, context: __SerdeContext): AggregationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregationResponse(__expectUnion(entry), context);
    });
  return retVal;
};

// de_AmiAggregationResponse omitted.

// de_ArchitectureList omitted.

/**
 * deserializeAws_restJson1AtigData
 */
const de_AtigData = (output: any, context: __SerdeContext): AtigData => {
  return take(output, {
    firstSeen: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSeen: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    targets: _json,
    ttps: _json,
  }) as any;
};

// de_AutoEnable omitted.

/**
 * deserializeAws_restJson1AwsEc2InstanceDetails
 */
const de_AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return take(output, {
    iamInstanceProfileArn: __expectString,
    imageId: __expectString,
    ipV4Addresses: _json,
    ipV6Addresses: _json,
    keyName: __expectString,
    launchedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    platform: __expectString,
    subnetId: __expectString,
    type: __expectString,
    vpcId: __expectString,
  }) as any;
};

// de_AwsEcrContainerAggregationResponse omitted.

/**
 * deserializeAws_restJson1AwsEcrContainerImageDetails
 */
const de_AwsEcrContainerImageDetails = (output: any, context: __SerdeContext): AwsEcrContainerImageDetails => {
  return take(output, {
    architecture: __expectString,
    author: __expectString,
    imageHash: __expectString,
    imageTags: _json,
    platform: __expectString,
    pushedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registry: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AwsLambdaFunctionDetails
 */
const de_AwsLambdaFunctionDetails = (output: any, context: __SerdeContext): AwsLambdaFunctionDetails => {
  return take(output, {
    architectures: _json,
    codeSha256: __expectString,
    executionRoleArn: __expectString,
    functionName: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    layers: _json,
    packageType: __expectString,
    runtime: __expectString,
    version: __expectString,
    vpcConfig: _json,
  }) as any;
};

// de_CisAccountIdList omitted.

/**
 * deserializeAws_restJson1CisaData
 */
const de_CisaData = (output: any, context: __SerdeContext): CisaData => {
  return take(output, {
    action: __expectString,
    dateAdded: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dateDue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CisCheckAggregation omitted.

// de_CisCheckAggregationList omitted.

/**
 * deserializeAws_restJson1CisScan
 */
const de_CisScan = (output: any, context: __SerdeContext): CisScan => {
  return take(output, {
    failedChecks: __expectInt32,
    scanArn: __expectString,
    scanConfigurationArn: __expectString,
    scanDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    scanName: __expectString,
    scheduledBy: __expectString,
    securityLevel: __expectString,
    status: __expectString,
    targets: _json,
    totalChecks: __expectInt32,
  }) as any;
};

// de_CisScanConfiguration omitted.

// de_CisScanConfigurationList omitted.

/**
 * deserializeAws_restJson1CisScanList
 */
const de_CisScanList = (output: any, context: __SerdeContext): CisScan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CisScan(entry, context);
    });
  return retVal;
};

// de_CisScanResultDetails omitted.

// de_CisScanResultDetailsList omitted.

// de_CisTagMap omitted.

// de_CisTargetResourceAggregation omitted.

// de_CisTargetResourceAggregationList omitted.

// de_CisTargets omitted.

// de_CodeFilePath omitted.

// de_CodeLine omitted.

// de_CodeLineList omitted.

// de_CodeSnippetError omitted.

// de_CodeSnippetErrorList omitted.

// de_CodeSnippetResult omitted.

// de_CodeSnippetResultList omitted.

// de_CodeVulnerabilityDetails omitted.

// de_Counts omitted.

// de_CountsList omitted.

/**
 * deserializeAws_restJson1CoveredResource
 */
const de_CoveredResource = (output: any, context: __SerdeContext): CoveredResource => {
  return take(output, {
    accountId: __expectString,
    lastScannedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceId: __expectString,
    resourceMetadata: (_: any) => de_ResourceScanMetadata(_, context),
    resourceType: __expectString,
    scanMode: __expectString,
    scanStatus: _json,
    scanType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CoveredResources
 */
const de_CoveredResources = (output: any, context: __SerdeContext): CoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CoveredResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Cvss2
 */
const de_Cvss2 = (output: any, context: __SerdeContext): Cvss2 => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Cvss3
 */
const de_Cvss3 = (output: any, context: __SerdeContext): Cvss3 => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
    source: __expectString,
    version: __expectString,
  }) as any;
};

// de_CvssScoreAdjustment omitted.

// de_CvssScoreAdjustmentList omitted.

/**
 * deserializeAws_restJson1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return take(output, {
    adjustments: _json,
    cvssSource: __expectString,
    score: __limitedParseDouble,
    scoreSource: __expectString,
    scoringVector: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CvssScore(entry, context);
    });
  return retVal;
};

// de_CweList omitted.

// de_Cwes omitted.

// de_DailySchedule omitted.

/**
 * deserializeAws_restJson1DateFilter
 */
const de_DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return take(output, {
    endInclusive: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startInclusive: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DateFilterList
 */
const de_DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DateFilter(entry, context);
    });
  return retVal;
};

// de_DaysList omitted.

// de_DelegatedAdmin omitted.

// de_DelegatedAdminAccount omitted.

// de_DelegatedAdminAccountList omitted.

// de_Destination omitted.

// de_DetectionPlatforms omitted.

// de_DetectorTagList omitted.

// de_Ec2ConfigurationState omitted.

// de_Ec2InstanceAggregationResponse omitted.

// de_Ec2Metadata omitted.

// de_Ec2ScanModeState omitted.

/**
 * deserializeAws_restJson1EcrConfigurationState
 */
const de_EcrConfigurationState = (output: any, context: __SerdeContext): EcrConfigurationState => {
  return take(output, {
    rescanDurationState: (_: any) => de_EcrRescanDurationState(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1EcrContainerImageMetadata
 */
const de_EcrContainerImageMetadata = (output: any, context: __SerdeContext): EcrContainerImageMetadata => {
  return take(output, {
    imagePulledAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
  }) as any;
};

// de_EcrRepositoryMetadata omitted.

/**
 * deserializeAws_restJson1EcrRescanDurationState
 */
const de_EcrRescanDurationState = (output: any, context: __SerdeContext): EcrRescanDurationState => {
  return take(output, {
    pullDateRescanDuration: __expectString,
    rescanDuration: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Epss
 */
const de_Epss = (output: any, context: __SerdeContext): Epss => {
  return take(output, {
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1EpssDetails
 */
const de_EpssDetails = (output: any, context: __SerdeContext): EpssDetails => {
  return take(output, {
    score: __limitedParseDouble,
  }) as any;
};

// de_Evidence omitted.

// de_EvidenceList omitted.

/**
 * deserializeAws_restJson1ExploitabilityDetails
 */
const de_ExploitabilityDetails = (output: any, context: __SerdeContext): ExploitabilityDetails => {
  return take(output, {
    lastKnownExploitAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ExploitObserved
 */
const de_ExploitObserved = (output: any, context: __SerdeContext): ExploitObserved => {
  return take(output, {
    firstSeen: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSeen: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_FailedAccount omitted.

// de_FailedAccountList omitted.

// de_FailedMemberAccountEc2DeepInspectionStatusState omitted.

// de_FailedMemberAccountEc2DeepInspectionStatusStateList omitted.

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return take(output, {
    action: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    criteria: (_: any) => de_FilterCriteria(_, context),
    description: __expectString,
    name: __expectString,
    ownerId: __expectString,
    reason: __expectString,
    tags: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1FilterCriteria
 */
const de_FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return take(output, {
    awsAccountId: _json,
    codeVulnerabilityDetectorName: _json,
    codeVulnerabilityDetectorTags: _json,
    codeVulnerabilityFilePath: _json,
    componentId: _json,
    componentType: _json,
    ec2InstanceImageId: _json,
    ec2InstanceSubnetId: _json,
    ec2InstanceVpcId: _json,
    ecrImageArchitecture: _json,
    ecrImageHash: _json,
    ecrImagePushedAt: (_: any) => de_DateFilterList(_, context),
    ecrImageRegistry: _json,
    ecrImageRepositoryName: _json,
    ecrImageTags: _json,
    epssScore: (_: any) => de_NumberFilterList(_, context),
    exploitAvailable: _json,
    findingArn: _json,
    findingStatus: _json,
    findingType: _json,
    firstObservedAt: (_: any) => de_DateFilterList(_, context),
    fixAvailable: _json,
    inspectorScore: (_: any) => de_NumberFilterList(_, context),
    lambdaFunctionExecutionRoleArn: _json,
    lambdaFunctionLastModifiedAt: (_: any) => de_DateFilterList(_, context),
    lambdaFunctionLayers: _json,
    lambdaFunctionName: _json,
    lambdaFunctionRuntime: _json,
    lastObservedAt: (_: any) => de_DateFilterList(_, context),
    networkProtocol: _json,
    portRange: _json,
    relatedVulnerabilities: _json,
    resourceId: _json,
    resourceTags: _json,
    resourceType: _json,
    severity: _json,
    title: _json,
    updatedAt: (_: any) => de_DateFilterList(_, context),
    vendorSeverity: _json,
    vulnerabilityId: _json,
    vulnerabilitySource: _json,
    vulnerablePackages: (_: any) => de_PackageFilterList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    awsAccountId: __expectString,
    codeVulnerabilityDetails: _json,
    description: __expectString,
    epss: (_: any) => de_EpssDetails(_, context),
    exploitAvailable: __expectString,
    exploitabilityDetails: (_: any) => de_ExploitabilityDetails(_, context),
    findingArn: __expectString,
    firstObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fixAvailable: __expectString,
    inspectorScore: __limitedParseDouble,
    inspectorScoreDetails: (_: any) => de_InspectorScoreDetails(_, context),
    lastObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    networkReachabilityDetails: _json,
    packageVulnerabilityDetails: (_: any) => de_PackageVulnerabilityDetails(_, context),
    remediation: _json,
    resources: (_: any) => de_ResourceList(_, context),
    severity: __expectString,
    status: __expectString,
    title: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1FindingDetail
 */
const de_FindingDetail = (output: any, context: __SerdeContext): FindingDetail => {
  return take(output, {
    cisaData: (_: any) => de_CisaData(_, context),
    cwes: _json,
    epssScore: __limitedParseDouble,
    evidences: _json,
    exploitObserved: (_: any) => de_ExploitObserved(_, context),
    findingArn: __expectString,
    referenceUrls: _json,
    riskScore: __expectInt32,
    tools: _json,
    ttps: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FindingDetails
 */
const de_FindingDetails = (output: any, context: __SerdeContext): FindingDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingDetail(entry, context);
    });
  return retVal;
};

// de_FindingDetailsError omitted.

// de_FindingDetailsErrorList omitted.

/**
 * deserializeAws_restJson1FindingList
 */
const de_FindingList = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Finding(entry, context);
    });
  return retVal;
};

// de_FindingTypeAggregationResponse omitted.

/**
 * deserializeAws_restJson1FreeTrialAccountInfo
 */
const de_FreeTrialAccountInfo = (output: any, context: __SerdeContext): FreeTrialAccountInfo => {
  return take(output, {
    accountId: __expectString,
    freeTrialInfo: (_: any) => de_FreeTrialInfoList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FreeTrialAccountInfoList
 */
const de_FreeTrialAccountInfoList = (output: any, context: __SerdeContext): FreeTrialAccountInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FreeTrialAccountInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FreeTrialInfo
 */
const de_FreeTrialInfo = (output: any, context: __SerdeContext): FreeTrialInfo => {
  return take(output, {
    end: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    start: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    type: __expectString,
  }) as any;
};

// de_FreeTrialInfoError omitted.

// de_FreeTrialInfoErrorList omitted.

/**
 * deserializeAws_restJson1FreeTrialInfoList
 */
const de_FreeTrialInfoList = (output: any, context: __SerdeContext): FreeTrialInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FreeTrialInfo(entry, context);
    });
  return retVal;
};

// de_ImageLayerAggregationResponse omitted.

// de_ImageTagList omitted.

/**
 * deserializeAws_restJson1InspectorScoreDetails
 */
const de_InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return take(output, {
    adjustedCvss: (_: any) => de_CvssScoreDetails(_, context),
  }) as any;
};

// de_IpV4AddressList omitted.

// de_IpV6AddressList omitted.

/**
 * deserializeAws_restJson1LambdaFunctionAggregationResponse
 */
const de_LambdaFunctionAggregationResponse = (
  output: any,
  context: __SerdeContext
): LambdaFunctionAggregationResponse => {
  return take(output, {
    accountId: __expectString,
    functionName: __expectString,
    lambdaTags: _json,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceId: __expectString,
    runtime: __expectString,
    severityCounts: _json,
  }) as any;
};

// de_LambdaFunctionMetadata omitted.

// de_LambdaLayerAggregationResponse omitted.

// de_LambdaLayerList omitted.

// de_LambdaVpcConfig omitted.

// de_LayerList omitted.

// de_MapFilter omitted.

// de_MapFilterList omitted.

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    accountId: __expectString,
    delegatedAdminAccountId: __expectString,
    relationshipStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MemberAccountEc2DeepInspectionStatusState omitted.

// de_MemberAccountEc2DeepInspectionStatusStateList omitted.

/**
 * deserializeAws_restJson1MemberList
 */
const de_MemberList = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Member(entry, context);
    });
  return retVal;
};

// de_MonthlySchedule omitted.

// de_NetworkPath omitted.

// de_NetworkReachabilityDetails omitted.

// de_NonEmptyStringList omitted.

/**
 * deserializeAws_restJson1NumberFilter
 */
const de_NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return take(output, {
    lowerInclusive: __limitedParseDouble,
    upperInclusive: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1NumberFilterList
 */
const de_NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NumberFilter(entry, context);
    });
  return retVal;
};

// de_OneTimeSchedule omitted.

// de_PackageAggregationResponse omitted.

/**
 * deserializeAws_restJson1PackageFilter
 */
const de_PackageFilter = (output: any, context: __SerdeContext): PackageFilter => {
  return take(output, {
    architecture: _json,
    epoch: (_: any) => de_NumberFilter(_, context),
    filePath: _json,
    name: _json,
    release: _json,
    sourceLambdaLayerArn: _json,
    sourceLayerHash: _json,
    version: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageFilterList
 */
const de_PackageFilterList = (output: any, context: __SerdeContext): PackageFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return take(output, {
    cvss: (_: any) => de_CvssScoreList(_, context),
    referenceUrls: _json,
    relatedVulnerabilities: _json,
    source: __expectString,
    sourceUrl: __expectString,
    vendorCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vendorSeverity: __expectString,
    vendorUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilityId: __expectString,
    vulnerablePackages: _json,
  }) as any;
};

// de_PathList omitted.

// de_Permission omitted.

// de_Permissions omitted.

// de_PortRange omitted.

// de_PortRangeFilter omitted.

// de_PortRangeFilterList omitted.

// de_Recommendation omitted.

// de_ReferenceUrls omitted.

// de_RelatedVulnerabilities omitted.

// de_Remediation omitted.

// de_RepositoryAggregationResponse omitted.

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    details: (_: any) => de_ResourceDetails(_, context),
    id: __expectString,
    partition: __expectString,
    region: __expectString,
    tags: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return take(output, {
    awsEc2Instance: (_: any) => de_AwsEc2InstanceDetails(_, context),
    awsEcrContainerImage: (_: any) => de_AwsEcrContainerImageDetails(_, context),
    awsLambdaFunction: (_: any) => de_AwsLambdaFunctionDetails(_, context),
  }) as any;
};

// de_ResourceFilterCriteria omitted.

/**
 * deserializeAws_restJson1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

// de_ResourceMapFilter omitted.

// de_ResourceMapFilterList omitted.

/**
 * deserializeAws_restJson1ResourceScanMetadata
 */
const de_ResourceScanMetadata = (output: any, context: __SerdeContext): ResourceScanMetadata => {
  return take(output, {
    ec2: _json,
    ecrImage: (_: any) => de_EcrContainerImageMetadata(_, context),
    ecrRepository: _json,
    lambdaFunction: _json,
  }) as any;
};

// de_ResourceState omitted.

// de_ResourceStatus omitted.

// de_ResourceStringFilter omitted.

// de_ResourceStringFilterList omitted.

// de_ScanStatus omitted.

// de_Schedule omitted.

// de_SecurityGroupIdList omitted.

// de_SeverityCounts omitted.

// de_State omitted.

// de_StatusCounts omitted.

// de_Step omitted.

// de_StepList omitted.

// de_StringFilter omitted.

// de_StringFilterList omitted.

// de_StringList omitted.

// de_SubnetIdList omitted.

// de_SuggestedFix omitted.

// de_SuggestedFixes omitted.

// de_TagList omitted.

// de_TagMap omitted.

// de_TagValueList omitted.

// de_TargetResourceTags omitted.

// de_Targets omitted.

// de_Time omitted.

// de_TitleAggregationResponse omitted.

// de_Tools omitted.

// de_Ttps omitted.

/**
 * deserializeAws_restJson1Usage
 */
const de_Usage = (output: any, context: __SerdeContext): Usage => {
  return take(output, {
    currency: __expectString,
    estimatedMonthlyCost: __limitedParseDouble,
    total: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UsageList
 */
const de_UsageList = (output: any, context: __SerdeContext): Usage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Usage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UsageTotal
 */
const de_UsageTotal = (output: any, context: __SerdeContext): UsageTotal => {
  return take(output, {
    accountId: __expectString,
    usage: (_: any) => de_UsageList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UsageTotalList
 */
const de_UsageTotalList = (output: any, context: __SerdeContext): UsageTotal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageTotal(entry, context);
    });
  return retVal;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFields omitted.

/**
 * deserializeAws_restJson1Vulnerabilities
 */
const de_Vulnerabilities = (output: any, context: __SerdeContext): Vulnerability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Vulnerability(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Vulnerability
 */
const de_Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return take(output, {
    atigData: (_: any) => de_AtigData(_, context),
    cisaData: (_: any) => de_CisaData(_, context),
    cvss2: (_: any) => de_Cvss2(_, context),
    cvss3: (_: any) => de_Cvss3(_, context),
    cwes: _json,
    description: __expectString,
    detectionPlatforms: _json,
    epss: (_: any) => de_Epss(_, context),
    exploitObserved: (_: any) => de_ExploitObserved(_, context),
    id: __expectString,
    referenceUrls: _json,
    relatedVulnerabilities: _json,
    source: __expectString,
    sourceUrl: __expectString,
    vendorCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vendorSeverity: __expectString,
    vendorUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_VulnerabilityIdList omitted.

// de_VulnerabilityReferenceUrls omitted.

// de_VulnerablePackage omitted.

// de_VulnerablePackageList omitted.

// de_WeeklySchedule omitted.

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

const _rAS = "retryAfterSeconds";
const _rT = "resourceType";
const _ra = "retry-after";
const _sT = "scanType";
const _tK = "tagKeys";
