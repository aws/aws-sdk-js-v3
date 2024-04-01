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
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput } from "../commands/AcceptPredictionsCommand";
import {
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "../commands/AcceptSubscriptionRequestCommand";
import {
  CancelMetadataGenerationRunCommandInput,
  CancelMetadataGenerationRunCommandOutput,
} from "../commands/CancelMetadataGenerationRunCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "../commands/CancelSubscriptionCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "../commands/CreateAssetCommand";
import {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "../commands/CreateAssetRevisionCommand";
import { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "../commands/CreateAssetTypeCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "../commands/CreateEnvironmentProfileCommand";
import { CreateFormTypeCommandInput, CreateFormTypeCommandOutput } from "../commands/CreateFormTypeCommand";
import { CreateGlossaryCommandInput, CreateGlossaryCommandOutput } from "../commands/CreateGlossaryCommand";
import { CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput } from "../commands/CreateGlossaryTermCommand";
import { CreateGroupProfileCommandInput, CreateGroupProfileCommandOutput } from "../commands/CreateGroupProfileCommand";
import {
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "../commands/CreateListingChangeSetCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import {
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "../commands/CreateProjectMembershipCommand";
import {
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "../commands/CreateSubscriptionGrantCommand";
import {
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "../commands/CreateSubscriptionRequestCommand";
import {
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "../commands/CreateSubscriptionTargetCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "../commands/DeleteAssetTypeCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/DeleteEnvironmentBlueprintConfigurationCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "../commands/DeleteEnvironmentProfileCommand";
import { DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput } from "../commands/DeleteFormTypeCommand";
import { DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput } from "../commands/DeleteGlossaryCommand";
import { DeleteGlossaryTermCommandInput, DeleteGlossaryTermCommandOutput } from "../commands/DeleteGlossaryTermCommand";
import { DeleteListingCommandInput, DeleteListingCommandOutput } from "../commands/DeleteListingCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "../commands/DeleteProjectMembershipCommand";
import {
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "../commands/DeleteSubscriptionGrantCommand";
import {
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "../commands/DeleteSubscriptionRequestCommand";
import {
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "../commands/DeleteSubscriptionTargetCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "../commands/GetAssetCommand";
import { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "../commands/GetAssetTypeCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput } from "../commands/GetDataSourceRunCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import {
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "../commands/GetEnvironmentBlueprintCommand";
import {
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/GetEnvironmentBlueprintConfigurationCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "../commands/GetEnvironmentProfileCommand";
import { GetFormTypeCommandInput, GetFormTypeCommandOutput } from "../commands/GetFormTypeCommand";
import { GetGlossaryCommandInput, GetGlossaryCommandOutput } from "../commands/GetGlossaryCommand";
import { GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput } from "../commands/GetGlossaryTermCommand";
import { GetGroupProfileCommandInput, GetGroupProfileCommandOutput } from "../commands/GetGroupProfileCommand";
import {
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "../commands/GetIamPortalLoginUrlCommand";
import { GetListingCommandInput, GetListingCommandOutput } from "../commands/GetListingCommand";
import {
  GetMetadataGenerationRunCommandInput,
  GetMetadataGenerationRunCommandOutput,
} from "../commands/GetMetadataGenerationRunCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "../commands/GetSubscriptionCommand";
import {
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "../commands/GetSubscriptionGrantCommand";
import {
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "../commands/GetSubscriptionRequestDetailsCommand";
import {
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "../commands/GetSubscriptionTargetCommand";
import { GetUserProfileCommandInput, GetUserProfileCommandOutput } from "../commands/GetUserProfileCommand";
import { ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput } from "../commands/ListAssetRevisionsCommand";
import {
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "../commands/ListDataSourceRunActivitiesCommand";
import { ListDataSourceRunsCommandInput, ListDataSourceRunsCommandOutput } from "../commands/ListDataSourceRunsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "../commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "../commands/ListEnvironmentBlueprintsCommand";
import {
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "../commands/ListEnvironmentProfilesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListMetadataGenerationRunsCommandInput,
  ListMetadataGenerationRunsCommandOutput,
} from "../commands/ListMetadataGenerationRunsCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "../commands/ListProjectMembershipsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "../commands/ListSubscriptionGrantsCommand";
import {
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "../commands/ListSubscriptionRequestsCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "../commands/ListSubscriptionsCommand";
import {
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "../commands/ListSubscriptionTargetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "../commands/PutEnvironmentBlueprintConfigurationCommand";
import { RejectPredictionsCommandInput, RejectPredictionsCommandOutput } from "../commands/RejectPredictionsCommand";
import {
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "../commands/RejectSubscriptionRequestCommand";
import { RevokeSubscriptionCommandInput, RevokeSubscriptionCommandOutput } from "../commands/RevokeSubscriptionCommand";
import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import {
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "../commands/SearchGroupProfilesCommand";
import { SearchListingsCommandInput, SearchListingsCommandOutput } from "../commands/SearchListingsCommand";
import { SearchTypesCommandInput, SearchTypesCommandOutput } from "../commands/SearchTypesCommand";
import { SearchUserProfilesCommandInput, SearchUserProfilesCommandOutput } from "../commands/SearchUserProfilesCommand";
import { StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput } from "../commands/StartDataSourceRunCommand";
import {
  StartMetadataGenerationRunCommandInput,
  StartMetadataGenerationRunCommandOutput,
} from "../commands/StartMetadataGenerationRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "../commands/UpdateEnvironmentProfileCommand";
import { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "../commands/UpdateGlossaryCommand";
import { UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput } from "../commands/UpdateGlossaryTermCommand";
import { UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput } from "../commands/UpdateGroupProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "../commands/UpdateSubscriptionGrantStatusCommand";
import {
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "../commands/UpdateSubscriptionRequestCommand";
import {
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "../commands/UpdateSubscriptionTargetCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { DataZoneServiceException as __BaseException } from "../models/DataZoneServiceException";
import {
  AcceptChoice,
  AcceptRule,
  AccessDeniedException,
  AssetItem,
  AssetListing,
  AssetListingItem,
  AssetRevision,
  AssetTargetNameMap,
  AssetTypeItem,
  BusinessNameGenerationConfiguration,
  ConflictException,
  DataProductSummary,
  DataSourceConfigurationInput,
  DataSourceRunActivity,
  DataSourceRunSummary,
  DataSourceSummary,
  DomainSummary,
  EnvironmentBlueprintConfigurationItem,
  EnvironmentBlueprintSummary,
  EnvironmentParameter,
  EnvironmentProfileSummary,
  EnvironmentSummary,
  FailureCause,
  FilterExpression,
  FormEntryInput,
  FormInput,
  GlueRunConfigurationInput,
  GrantedEntityInput,
  InternalServerException,
  ListingItem,
  ListingRevisionInput,
  Member,
  Model,
  NotificationOutput,
  PredictionConfiguration,
  ProjectSummary,
  RecommendationConfiguration,
  RedshiftClusterStorage,
  RedshiftCredentialConfiguration,
  RedshiftRunConfigurationInput,
  RedshiftServerlessStorage,
  RedshiftStorage,
  RelationalFilterConfiguration,
  ResourceNotFoundException,
  ScheduleConfiguration,
  ServiceQuotaExceededException,
  SingleSignOn,
  SubscribedAsset,
  SubscribedListingInput,
  SubscribedPrincipalInput,
  SubscribedProjectInput,
  SubscriptionGrantSummary,
  SubscriptionRequestSummary,
  SubscriptionSummary,
  SubscriptionTargetForm,
  SubscriptionTargetSummary,
  TermRelations,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "../models/models_0";
import {
  Filter,
  FilterClause,
  FormTypeData,
  GlossaryItem,
  GlossaryTermItem,
  MetadataGenerationRunItem,
  MetadataGenerationRunTarget,
  RejectChoice,
  RejectRule,
  SearchInItem,
  SearchInventoryResultItem,
  SearchOutputAdditionalAttribute,
  SearchResultItem,
  SearchSort,
  SearchTypesResultItem,
} from "../models/models_1";

/**
 * serializeAws_restJson1AcceptPredictionsCommand
 */
export const se_AcceptPredictionsCommand = async (
  input: AcceptPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/accept-predictions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      acceptChoices: (_) => _json(_),
      acceptRule: (_) => se_AcceptRule(_, context),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AcceptSubscriptionRequestCommand
 */
export const se_AcceptSubscriptionRequestCommand = async (
  input: AcceptSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/accept");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      decisionComment: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMetadataGenerationRunCommand
 */
export const se_CancelMetadataGenerationRunCommand = async (
  input: CancelMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}/cancel");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSubscriptionCommand
 */
export const se_CancelSubscriptionCommand = async (
  input: CancelSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}/cancel");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetCommand
 */
export const se_CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      externalIdentifier: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
      predictionConfiguration: (_) => _json(_),
      typeIdentifier: [],
      typeRevision: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetRevisionCommand
 */
export const se_CreateAssetRevisionCommand = async (
  input: CreateAssetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      formsInput: (_) => _json(_),
      glossaryTerms: (_) => _json(_),
      name: [],
      predictionConfiguration: (_) => _json(_),
      typeRevision: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetTypeCommand
 */
export const se_CreateAssetTypeCommand = async (
  input: CreateAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/asset-types");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      formsInput: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetFormsInput: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => _json(_),
      description: [],
      enableSetting: [],
      environmentIdentifier: [],
      name: [],
      projectIdentifier: [],
      publishOnImport: [],
      recommendation: (_) => _json(_),
      schedule: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v2/domains");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      domainExecutionRole: [],
      kmsKeyIdentifier: [],
      name: [],
      singleSignOn: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      environmentProfileIdentifier: [],
      glossaryTerms: (_) => _json(_),
      name: [],
      projectIdentifier: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEnvironmentProfileCommand
 */
export const se_CreateEnvironmentProfileCommand = async (
  input: CreateEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsAccountId: [],
      awsAccountRegion: [],
      description: [],
      environmentBlueprintIdentifier: [],
      name: [],
      projectIdentifier: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFormTypeCommand
 */
export const se_CreateFormTypeCommand = async (
  input: CreateFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/form-types");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      model: (_) => _json(_),
      name: [],
      owningProjectIdentifier: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGlossaryCommand
 */
export const se_CreateGlossaryCommand = async (
  input: CreateGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossaries");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      owningProjectIdentifier: [],
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGlossaryTermCommand
 */
export const se_CreateGlossaryTermCommand = async (
  input: CreateGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      glossaryIdentifier: [],
      longDescription: [],
      name: [],
      shortDescription: [],
      status: [],
      termRelations: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupProfileCommand
 */
export const se_CreateGroupProfileCommand = async (
  input: CreateGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/group-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      groupIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateListingChangeSetCommand
 */
export const se_CreateListingChangeSetCommand = async (
  input: CreateListingChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/listings/change-set");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      entityIdentifier: [],
      entityRevision: [],
      entityType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      glossaryTerms: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectMembershipCommand
 */
export const se_CreateProjectMembershipCommand = async (
  input: CreateProjectMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      designation: [],
      member: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionGrantCommand
 */
export const se_CreateSubscriptionGrantCommand = async (
  input: CreateSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetTargetNames: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      environmentIdentifier: [],
      grantedEntity: (_) => _json(_),
      subscriptionTargetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionRequestCommand
 */
export const se_CreateSubscriptionRequestCommand = async (
  input: CreateSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      requestReason: [],
      subscribedListings: (_) => _json(_),
      subscribedPrincipals: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionTargetCommand
 */
export const se_CreateSubscriptionTargetCommand = async (
  input: CreateSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicableAssetTypes: (_) => _json(_),
      authorizedPrincipals: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      manageAccessRole: [],
      name: [],
      provider: [],
      subscriptionTargetConfig: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/user-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      userIdentifier: [],
      userType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetTypeCommand
 */
export const se_DeleteAssetTypeCommand = async (
  input: DeleteAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/asset-types/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
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
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
    [_sDC]: [() => input.skipDeletionCheck !== void 0, () => input[_sDC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentBlueprintConfigurationCommand
 */
export const se_DeleteEnvironmentBlueprintConfigurationCommand = async (
  input: DeleteEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentProfileCommand
 */
export const se_DeleteEnvironmentProfileCommand = async (
  input: DeleteEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFormTypeCommand
 */
export const se_DeleteFormTypeCommand = async (
  input: DeleteFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("formTypeIdentifier", () => input.formTypeIdentifier!, "{formTypeIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGlossaryCommand
 */
export const se_DeleteGlossaryCommand = async (
  input: DeleteGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGlossaryTermCommand
 */
export const se_DeleteGlossaryTermCommand = async (
  input: DeleteGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteListingCommand
 */
export const se_DeleteListingCommand = async (
  input: DeleteListingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/listings/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_sDC]: [() => input.skipDeletionCheck !== void 0, () => input[_sDC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectMembershipCommand
 */
export const se_DeleteProjectMembershipCommand = async (
  input: DeleteProjectMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/deleteMembership");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      member: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionGrantCommand
 */
export const se_DeleteSubscriptionGrantCommand = async (
  input: DeleteSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionRequestCommand
 */
export const se_DeleteSubscriptionRequestCommand = async (
  input: DeleteSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriptionTargetCommand
 */
export const se_DeleteSubscriptionTargetCommand = async (
  input: DeleteSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetCommand
 */
export const se_GetAssetCommand = async (
  input: GetAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetTypeCommand
 */
export const se_GetAssetTypeCommand = async (
  input: GetAssetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/asset-types/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceRunCommand
 */
export const se_GetDataSourceRunCommand = async (
  input: GetDataSourceRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-source-runs/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentBlueprintCommand
 */
export const se_GetEnvironmentBlueprintCommand = async (
  input: GetEnvironmentBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentBlueprintConfigurationCommand
 */
export const se_GetEnvironmentBlueprintConfigurationCommand = async (
  input: GetEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentProfileCommand
 */
export const se_GetEnvironmentProfileCommand = async (
  input: GetEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFormTypeCommand
 */
export const se_GetFormTypeCommand = async (
  input: GetFormTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("formTypeIdentifier", () => input.formTypeIdentifier!, "{formTypeIdentifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlossaryCommand
 */
export const se_GetGlossaryCommand = async (
  input: GetGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlossaryTermCommand
 */
export const se_GetGlossaryTermCommand = async (
  input: GetGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupProfileCommand
 */
export const se_GetGroupProfileCommand = async (
  input: GetGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("groupIdentifier", () => input.groupIdentifier!, "{groupIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIamPortalLoginUrlCommand
 */
export const se_GetIamPortalLoginUrlCommand = async (
  input: GetIamPortalLoginUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/get-portal-login-url");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetListingCommand
 */
export const se_GetListingCommand = async (
  input: GetListingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/listings/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_lR]: [, input[_lR]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetadataGenerationRunCommand
 */
export const se_GetMetadataGenerationRunCommand = async (
  input: GetMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProjectCommand
 */
export const se_GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionCommand
 */
export const se_GetSubscriptionCommand = async (
  input: GetSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionGrantCommand
 */
export const se_GetSubscriptionGrantCommand = async (
  input: GetSubscriptionGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionRequestDetailsCommand
 */
export const se_GetSubscriptionRequestDetailsCommand = async (
  input: GetSubscriptionRequestDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriptionTargetCommand
 */
export const se_GetSubscriptionTargetCommand = async (
  input: GetSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserProfileCommand
 */
export const se_GetUserProfileCommand = async (
  input: GetUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("userIdentifier", () => input.userIdentifier!, "{userIdentifier}", false);
  const query: any = map({
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetRevisionsCommand
 */
export const se_ListAssetRevisionsCommand = async (
  input: ListAssetRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/revisions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourceRunActivitiesCommand
 */
export const se_ListDataSourceRunActivitiesCommand = async (
  input: ListDataSourceRunActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourceRunsCommand
 */
export const se_ListDataSourceRunsCommand = async (
  input: ListDataSourceRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("dataSourceIdentifier", () => input.dataSourceIdentifier!, "{dataSourceIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/data-sources");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_pI]: [, __expectNonNull(input[_pI]!, `projectIdentifier`)],
    [_eI]: [, input[_eI]!],
    [_t]: [, input[_t]!],
    [_s]: [, input[_s]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  const headers: any = {};
  b.bp("/v2/domains");
  const query: any = map({
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentBlueprintConfigurationsCommand
 */
export const se_ListEnvironmentBlueprintConfigurationsCommand = async (
  input: ListEnvironmentBlueprintConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentBlueprintsCommand
 */
export const se_ListEnvironmentBlueprintsCommand = async (
  input: ListEnvironmentBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprints");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_n]: [, input[_n]!],
    [_m]: [() => input.managed !== void 0, () => input[_m]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentProfilesCommand
 */
export const se_ListEnvironmentProfilesCommand = async (
  input: ListEnvironmentProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_aAI]: [, input[_aAI]!],
    [_aAR]: [, input[_aAR]!],
    [_eBI]: [, input[_eBI]!],
    [_pI]: [, input[_pI]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_aAI]: [, input[_aAI]!],
    [_s]: [, input[_s]!],
    [_aAR]: [, input[_aAR]!],
    [_pI]: [, __expectNonNull(input[_pI]!, `projectIdentifier`)],
    [_ePI]: [, input[_ePI]!],
    [_eBI]: [, input[_eBI]!],
    [_p]: [, input[_p]!],
    [_n]: [, input[_n]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMetadataGenerationRunsCommand
 */
export const se_ListMetadataGenerationRunsCommand = async (
  input: ListMetadataGenerationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_t]: [, input[_t]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationsCommand
 */
export const se_ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/notifications");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_t]: [, __expectNonNull(input[_t]!, `type`)],
    [_aT]: [() => input.afterTimestamp !== void 0, () => (input[_aT]!.toISOString().split(".")[0] + "Z").toString()],
    [_bT]: [() => input.beforeTimestamp !== void 0, () => (input[_bT]!.toISOString().split(".")[0] + "Z").toString()],
    [_su]: [() => input.subjects !== void 0, () => (input[_su]! || []).map((_entry) => _entry as any)],
    [_tS]: [, input[_tS]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectMembershipsCommand
 */
export const se_ListProjectMembershipsCommand = async (
  input: ListProjectMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("projectIdentifier", () => input.projectIdentifier!, "{projectIdentifier}", false);
  const query: any = map({
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/projects");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
    [_gI]: [, input[_gI]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionGrantsCommand
 */
export const se_ListSubscriptionGrantsCommand = async (
  input: ListSubscriptionGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_eIn]: [, input[_eIn]!],
    [_sTI]: [, input[_sTI]!],
    [_sLI]: [, input[_sLI]!],
    [_sI]: [, input[_sI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionRequestsCommand
 */
export const se_ListSubscriptionRequestsCommand = async (
  input: ListSubscriptionRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_sLI]: [, input[_sLI]!],
    [_oPI]: [, input[_oPI]!],
    [_aPI]: [, input[_aPI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionsCommand
 */
export const se_ListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/subscriptions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  const query: any = map({
    [_sRI]: [, input[_sRI]!],
    [_s]: [, input[_s]!],
    [_sLI]: [, input[_sLI]!],
    [_oPI]: [, input[_oPI]!],
    [_aPI]: [, input[_aPI]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionTargetsCommand
 */
export const se_ListSubscriptionTargetsCommand = async (
  input: ListSubscriptionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  const query: any = map({
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
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
 * serializeAws_restJson1PutEnvironmentBlueprintConfigurationCommand
 */
export const se_PutEnvironmentBlueprintConfigurationCommand = async (
  input: PutEnvironmentBlueprintConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p(
    "environmentBlueprintIdentifier",
    () => input.environmentBlueprintIdentifier!,
    "{environmentBlueprintIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledRegions: (_) => _json(_),
      manageAccessRoleArn: [],
      provisioningRoleArn: [],
      regionalParameters: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectPredictionsCommand
 */
export const se_RejectPredictionsCommand = async (
  input: RejectPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/assets/{identifier}/reject-predictions");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_r]: [, input[_r]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      rejectChoices: (_) => _json(_),
      rejectRule: (_) => se_RejectRule(_, context),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectSubscriptionRequestCommand
 */
export const se_RejectSubscriptionRequestCommand = async (
  input: RejectSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}/reject");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      decisionComment: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeSubscriptionCommand
 */
export const se_RevokeSubscriptionCommand = async (
  input: RevokeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscriptions/{identifier}/revoke");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      retainPermissions: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAttributes: (_) => _json(_),
      filters: (_) => se_FilterClause(_, context),
      maxResults: [],
      nextToken: [],
      owningProjectIdentifier: [],
      searchIn: (_) => _json(_),
      searchScope: [],
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchGroupProfilesCommand
 */
export const se_SearchGroupProfilesCommand = async (
  input: SearchGroupProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search-group-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      groupType: [],
      maxResults: [],
      nextToken: [],
      searchText: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchListingsCommand
 */
export const se_SearchListingsCommand = async (
  input: SearchListingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/listings/search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAttributes: (_) => _json(_),
      filters: (_) => se_FilterClause(_, context),
      maxResults: [],
      nextToken: [],
      searchIn: (_) => _json(_),
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchTypesCommand
 */
export const se_SearchTypesCommand = async (
  input: SearchTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/types-search");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => se_FilterClause(_, context),
      managed: [],
      maxResults: [],
      nextToken: [],
      searchIn: (_) => _json(_),
      searchScope: [],
      searchText: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchUserProfilesCommand
 */
export const se_SearchUserProfilesCommand = async (
  input: SearchUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/search-user-profiles");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      searchText: [],
      userType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDataSourceRunCommand
 */
export const se_StartDataSourceRunCommand = async (
  input: StartDataSourceRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("dataSourceIdentifier", () => input.dataSourceIdentifier!, "{dataSourceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMetadataGenerationRunCommand
 */
export const se_StartMetadataGenerationRunCommand = async (
  input: StartMetadataGenerationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/metadata-generation-runs");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      owningProjectIdentifier: [],
      target: (_) => _json(_),
      type: [],
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
    [_tK]: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input[_tK]! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/data-sources/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetFormsInput: (_) => _json(_),
      configuration: (_) => _json(_),
      description: [],
      enableSetting: [],
      name: [],
      publishOnImport: [],
      recommendation: (_) => _json(_),
      schedule: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{identifier}");
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      domainExecutionRole: [],
      name: [],
      singleSignOn: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      glossaryTerms: (_) => _json(_),
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentProfileCommand
 */
export const se_UpdateEnvironmentProfileCommand = async (
  input: UpdateEnvironmentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environment-profiles/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsAccountId: [],
      awsAccountRegion: [],
      description: [],
      name: [],
      userParameters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlossaryCommand
 */
export const se_UpdateGlossaryCommand = async (
  input: UpdateGlossaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossaries/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      status: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlossaryTermCommand
 */
export const se_UpdateGlossaryTermCommand = async (
  input: UpdateGlossaryTermCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/glossary-terms/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      glossaryIdentifier: [],
      longDescription: [],
      name: [],
      shortDescription: [],
      status: [],
      termRelations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupProfileCommand
 */
export const se_UpdateGroupProfileCommand = async (
  input: UpdateGroupProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/group-profiles/{groupIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("groupIdentifier", () => input.groupIdentifier!, "{groupIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/projects/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      glossaryTerms: (_) => _json(_),
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionGrantStatusCommand
 */
export const se_UpdateSubscriptionGrantStatusCommand = async (
  input: UpdateSubscriptionGrantStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-grants/{identifier}/status/{assetIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  b.p("assetIdentifier", () => input.assetIdentifier!, "{assetIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      failureCause: (_) => _json(_),
      status: [],
      targetName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionRequestCommand
 */
export const se_UpdateSubscriptionRequestCommand = async (
  input: UpdateSubscriptionRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/subscription-requests/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      requestReason: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionTargetCommand
 */
export const se_UpdateSubscriptionTargetCommand = async (
  input: UpdateSubscriptionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/subscription-targets/{identifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("environmentIdentifier", () => input.environmentIdentifier!, "{environmentIdentifier}", false);
  b.p("identifier", () => input.identifier!, "{identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicableAssetTypes: (_) => _json(_),
      authorizedPrincipals: (_) => _json(_),
      manageAccessRole: [],
      name: [],
      provider: [],
      subscriptionTargetConfig: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/domains/{domainIdentifier}/user-profiles/{userIdentifier}");
  b.p("domainIdentifier", () => input.domainIdentifier!, "{domainIdentifier}", false);
  b.p("userIdentifier", () => input.userIdentifier!, "{userIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptPredictionsCommand
 */
export const de_AcceptPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPredictionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    domainId: __expectString,
    revision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptSubscriptionRequestCommand
 */
export const de_AcceptSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMetadataGenerationRunCommand
 */
export const de_CancelMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMetadataGenerationRunCommandOutput> => {
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
 * deserializeAws_restJson1CancelSubscriptionCommand
 */
export const de_CancelSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetCommand
 */
export const de_CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    predictionConfiguration: _json,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetRevisionCommand
 */
export const de_CreateAssetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    predictionConfiguration: _json,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetTypeCommand
 */
export const de_CreateAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetTypeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    description: __expectString,
    domainExecutionRole: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    name: __expectString,
    portalUrl: __expectString,
    singleSignOn: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEnvironmentProfileCommand
 */
export const de_CreateEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFormTypeCommand
 */
export const de_CreateFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFormTypeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlossaryCommand
 */
export const de_CreateGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlossaryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlossaryTermCommand
 */
export const de_CreateGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlossaryTermCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupProfileCommand
 */
export const de_CreateGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateListingChangeSetCommand
 */
export const de_CreateListingChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListingChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    listingId: __expectString,
    listingRevision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectMembershipCommand
 */
export const de_CreateProjectMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectMembershipCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionGrantCommand
 */
export const de_CreateSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionRequestCommand
 */
export const de_CreateSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionTargetCommand
 */
export const de_CreateSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetTypeCommand
 */
export const de_DeleteAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentBlueprintConfigurationCommand
 */
export const de_DeleteEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentProfileCommand
 */
export const de_DeleteEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFormTypeCommand
 */
export const de_DeleteFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFormTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlossaryCommand
 */
export const de_DeleteGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlossaryCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlossaryTermCommand
 */
export const de_DeleteGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlossaryTermCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteListingCommand
 */
export const de_DeleteListingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectMembershipCommand
 */
export const de_DeleteProjectMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionGrantCommand
 */
export const de_DeleteSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionRequestCommand
 */
export const de_DeleteSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSubscriptionTargetCommand
 */
export const de_DeleteSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetCommand
 */
export const de_GetAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    formsOutput: _json,
    glossaryTerms: _json,
    id: __expectString,
    listing: _json,
    name: __expectString,
    owningProjectId: __expectString,
    readOnlyFormsOutput: _json,
    revision: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetTypeCommand
 */
export const de_GetAssetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAssetCount: __expectInt32,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceRunCommand
 */
export const de_GetDataSourceRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceConfigurationSnapshot: __expectString,
    dataSourceId: __expectString,
    domainId: __expectString,
    errorMessage: _json,
    id: __expectString,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainExecutionRole: __expectString,
    id: __expectString,
    kmsKeyIdentifier: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    portalUrl: __expectString,
    singleSignOn: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentBlueprintCommand
 */
export const de_GetEnvironmentBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentBlueprintCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deploymentProperties: _json,
    description: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    name: __expectString,
    provider: __expectString,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentBlueprintConfigurationCommand
 */
export const de_GetEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentProfileCommand
 */
export const de_GetEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFormTypeCommand
 */
export const de_GetFormTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFormTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    imports: _json,
    model: (_) => _json(__expectUnion(_)),
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlossaryCommand
 */
export const de_GetGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlossaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlossaryTermCommand
 */
export const de_GetGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlossaryTermCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupProfileCommand
 */
export const de_GetGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIamPortalLoginUrlCommand
 */
export const de_GetIamPortalLoginUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIamPortalLoginUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authCodeUrl: __expectString,
    userProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetListingCommand
 */
export const de_GetListingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    item: (_) => de_ListingItem(__expectUnion(_), context),
    listingRevision: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetadataGenerationRunCommand
 */
export const de_GetMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetadataGenerationRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    target: _json,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionCommand
 */
export const de_GetSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionGrantCommand
 */
export const de_GetSubscriptionGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionGrantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionRequestDetailsCommand
 */
export const de_GetSubscriptionRequestDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionRequestDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriptionTargetCommand
 */
export const de_GetSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserProfileCommand
 */
export const de_GetUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetRevisionsCommand
 */
export const de_ListAssetRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AssetRevisions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourceRunActivitiesCommand
 */
export const de_ListDataSourceRunActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceRunActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceRunActivities(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourceRunsCommand
 */
export const de_ListDataSourceRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceRunSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_DataSourceSummaries(_, context),
    nextToken: __expectString,
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
    items: (_) => de_DomainSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentBlueprintConfigurationsCommand
 */
export const de_ListEnvironmentBlueprintConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentBlueprintConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentBlueprintConfigurations(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentBlueprintsCommand
 */
export const de_ListEnvironmentBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentBlueprintsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentBlueprintSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentProfilesCommand
 */
export const de_ListEnvironmentProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentProfileSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_EnvironmentSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMetadataGenerationRunsCommand
 */
export const de_ListMetadataGenerationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetadataGenerationRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_MetadataGenerationRuns(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationsCommand
 */
export const de_ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notifications: (_) => de_NotificationsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectMembershipsCommand
 */
export const de_ListProjectMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    members: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ProjectSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionGrantsCommand
 */
export const de_ListSubscriptionGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionGrantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionGrants(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionRequestsCommand
 */
export const de_ListSubscriptionRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionRequestsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionRequests(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionsCommand
 */
export const de_ListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_Subscriptions(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionTargetsCommand
 */
export const de_ListSubscriptionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SubscriptionTargets(_, context),
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
 * deserializeAws_restJson1PutEnvironmentBlueprintConfigurationCommand
 */
export const de_PutEnvironmentBlueprintConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEnvironmentBlueprintConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectPredictionsCommand
 */
export const de_RejectPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectPredictionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetId: __expectString,
    assetRevision: __expectString,
    domainId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectSubscriptionRequestCommand
 */
export const de_RejectSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSubscriptionCommand
 */
export const de_RevokeSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchInventoryResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchGroupProfilesCommand
 */
export const de_SearchGroupProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchGroupProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchListingsCommand
 */
export const de_SearchListingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchListingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchTypesCommand
 */
export const de_SearchTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_SearchTypesResultItems(_, context),
    nextToken: __expectString,
    totalMatchCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchUserProfilesCommand
 */
export const de_SearchUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchUserProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDataSourceRunCommand
 */
export const de_StartDataSourceRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceConfigurationSnapshot: __expectString,
    dataSourceId: __expectString,
    domainId: __expectString,
    errorMessage: _json,
    id: __expectString,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMetadataGenerationRunCommand
 */
export const de_StartMetadataGenerationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetadataGenerationRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    type: __expectString,
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
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetFormsOutput: _json,
    configuration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    errorMessage: _json,
    id: __expectString,
    lastRunAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    projectId: __expectString,
    publishOnImport: __expectBoolean,
    recommendation: _json,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainExecutionRole: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    singleSignOn: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    deploymentProperties: _json,
    description: __expectString,
    domainId: __expectString,
    environmentActions: _json,
    environmentBlueprintId: __expectString,
    environmentProfileId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    lastDeployment: _json,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    provisionedResources: _json,
    provisioningProperties: (_) => _json(__expectUnion(_)),
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentProfileCommand
 */
export const de_UpdateEnvironmentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userParameters: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlossaryCommand
 */
export const de_UpdateGlossaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlossaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlossaryTermCommand
 */
export const de_UpdateGlossaryTermCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlossaryTermCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupProfileCommand
 */
export const de_UpdateGroupProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainId: __expectString,
    groupName: __expectString,
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    failureReasons: _json,
    glossaryTerms: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    projectStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionGrantStatusCommand
 */
export const de_UpdateSubscriptionGrantStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionGrantStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: (_) => de_SubscribedAssets(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionRequestCommand
 */
export const de_UpdateSubscriptionRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionRequestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriptionTargetCommand
 */
export const de_UpdateSubscriptionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => _json(__expectUnion(_)),
    domainId: __expectString,
    id: __expectString,
    status: __expectString,
    type: __expectString,
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
    case "com.amazonaws.datazone#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.datazone#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.datazone#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.datazone#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.datazone#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.datazone#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.datazone#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.datazone#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
  const contents: any = map({});
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
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
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

// se_AcceptChoice omitted.

// se_AcceptChoices omitted.

/**
 * serializeAws_restJson1AcceptRule
 */
const se_AcceptRule = (input: AcceptRule, context: __SerdeContext): any => {
  return take(input, {
    rule: [],
    threshold: __serializeFloat,
  });
};

// se_ApplicableAssetTypes omitted.

// se_AssetTargetNameMap omitted.

// se_AssetTargetNames omitted.

// se_AuthorizedPrincipalIdentifiers omitted.

// se_BusinessNameGenerationConfiguration omitted.

// se_DataSourceConfigurationInput omitted.

// se_EnabledRegionList omitted.

// se_EnvironmentParameter omitted.

// se_EnvironmentParametersList omitted.

// se_FailureCause omitted.

// se_Filter omitted.

/**
 * serializeAws_restJson1FilterClause
 */
const se_FilterClause = (input: FilterClause, context: __SerdeContext): any => {
  return FilterClause.visit(input, {
    and: (value) => ({ and: se_FilterList(value, context) }),
    filter: (value) => ({ filter: _json(value) }),
    or: (value) => ({ or: se_FilterList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_FilterExpression omitted.

// se_FilterExpressions omitted.

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: FilterClause[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterClause(entry, context);
    });
};

// se_FormEntryInput omitted.

// se_FormInput omitted.

// se_FormInputList omitted.

// se_FormsInputMap omitted.

// se_GlossaryTerms omitted.

// se_GlueRunConfigurationInput omitted.

// se_GrantedEntityInput omitted.

// se_ListingRevisionInput omitted.

// se_Member omitted.

// se_MetadataGenerationRunTarget omitted.

// se_Model omitted.

// se_PredictionChoices omitted.

// se_PredictionConfiguration omitted.

// se_RecommendationConfiguration omitted.

// se_RedshiftClusterStorage omitted.

// se_RedshiftCredentialConfiguration omitted.

// se_RedshiftRunConfigurationInput omitted.

// se_RedshiftServerlessStorage omitted.

// se_RedshiftStorage omitted.

// se_RegionalParameter omitted.

// se_RegionalParameterMap omitted.

// se_RejectChoice omitted.

// se_RejectChoices omitted.

/**
 * serializeAws_restJson1RejectRule
 */
const se_RejectRule = (input: RejectRule, context: __SerdeContext): any => {
  return take(input, {
    rule: [],
    threshold: __serializeFloat,
  });
};

// se_RelationalFilterConfiguration omitted.

// se_RelationalFilterConfigurations omitted.

// se_ScheduleConfiguration omitted.

// se_SearchInItem omitted.

// se_SearchInList omitted.

// se_SearchOutputAdditionalAttributes omitted.

// se_SearchSort omitted.

// se_SingleSignOn omitted.

// se_SubscribedListingInput omitted.

// se_SubscribedListingInputs omitted.

// se_SubscribedPrincipalInput omitted.

// se_SubscribedPrincipalInputs omitted.

// se_SubscribedProjectInput omitted.

// se_SubscriptionTargetForm omitted.

// se_SubscriptionTargetForms omitted.

// se_Tags omitted.

// se_TermRelations omitted.

// de_ApplicableAssetTypes omitted.

/**
 * deserializeAws_restJson1AssetItem
 */
const de_AssetItem = (output: any, context: __SerdeContext): AssetItem => {
  return take(output, {
    additionalAttributes: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    externalIdentifier: __expectString,
    firstRevisionCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    firstRevisionCreatedBy: __expectString,
    glossaryTerms: _json,
    identifier: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    typeIdentifier: __expectString,
    typeRevision: __expectString,
  }) as any;
};

// de_AssetItemAdditionalAttributes omitted.

/**
 * deserializeAws_restJson1AssetListing
 */
const de_AssetListing = (output: any, context: __SerdeContext): AssetListing => {
  return take(output, {
    assetId: __expectString,
    assetRevision: __expectString,
    assetType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    forms: __expectString,
    glossaryTerms: _json,
    owningProjectId: __expectString,
  }) as any;
};

// de_AssetListingDetails omitted.

/**
 * deserializeAws_restJson1AssetListingItem
 */
const de_AssetListingItem = (output: any, context: __SerdeContext): AssetListingItem => {
  return take(output, {
    additionalAttributes: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    entityId: __expectString,
    entityRevision: __expectString,
    entityType: __expectString,
    glossaryTerms: _json,
    listingCreatedBy: __expectString,
    listingId: __expectString,
    listingRevision: __expectString,
    listingUpdatedBy: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
  }) as any;
};

// de_AssetListingItemAdditionalAttributes omitted.

/**
 * deserializeAws_restJson1AssetRevision
 */
const de_AssetRevision = (output: any, context: __SerdeContext): AssetRevision => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    revision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssetRevisions
 */
const de_AssetRevisions = (output: any, context: __SerdeContext): AssetRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetTypeItem
 */
const de_AssetTypeItem = (output: any, context: __SerdeContext): AssetTypeItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    formsOutput: _json,
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_AuthorizedPrincipalIdentifiers omitted.

// de_BusinessNameGenerationConfiguration omitted.

// de_CloudFormationProperties omitted.

// de_ConfigurableActionParameter omitted.

// de_ConfigurableActionParameterList omitted.

// de_ConfigurableEnvironmentAction omitted.

// de_CustomParameter omitted.

// de_CustomParameterList omitted.

// de_DataProductItem omitted.

// de_DataProductItems omitted.

/**
 * deserializeAws_restJson1DataProductSummary
 */
const de_DataProductSummary = (output: any, context: __SerdeContext): DataProductSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    dataProductItems: _json,
    description: __expectString,
    domainId: __expectString,
    glossaryTerms: _json,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_DataSourceConfigurationOutput omitted.

// de_DataSourceErrorMessage omitted.

/**
 * deserializeAws_restJson1DataSourceRunActivities
 */
const de_DataSourceRunActivities = (output: any, context: __SerdeContext): DataSourceRunActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceRunActivity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceRunActivity
 */
const de_DataSourceRunActivity = (output: any, context: __SerdeContext): DataSourceRunActivity => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataAssetId: __expectString,
    dataAssetStatus: __expectString,
    dataSourceRunId: __expectString,
    database: __expectString,
    errorMessage: _json,
    projectId: __expectString,
    technicalDescription: __expectString,
    technicalName: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceRunSummaries
 */
const de_DataSourceRunSummaries = (output: any, context: __SerdeContext): DataSourceRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceRunSummary
 */
const de_DataSourceRunSummary = (output: any, context: __SerdeContext): DataSourceRunSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceId: __expectString,
    errorMessage: _json,
    id: __expectString,
    projectId: __expectString,
    runStatisticsForAssets: _json,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    stoppedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceSummaries
 */
const de_DataSourceSummaries = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSourceId: __expectString,
    domainId: __expectString,
    enableSetting: __expectString,
    environmentId: __expectString,
    lastRunAssetCount: __expectInt32,
    lastRunAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastRunErrorMessage: _json,
    lastRunStatus: __expectString,
    name: __expectString,
    schedule: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_Deployment omitted.

// de_DeploymentMessagesList omitted.

// de_DeploymentProperties omitted.

// de_DetailedGlossaryTerm omitted.

// de_DetailedGlossaryTerms omitted.

/**
 * deserializeAws_restJson1DomainSummaries
 */
const de_DomainSummaries = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    managedAccountId: __expectString,
    name: __expectString,
    portalUrl: __expectString,
    status: __expectString,
  }) as any;
};

// de_EnabledRegionList omitted.

// de_EnvironmentActionList omitted.

/**
 * deserializeAws_restJson1EnvironmentBlueprintConfigurationItem
 */
const de_EnvironmentBlueprintConfigurationItem = (
  output: any,
  context: __SerdeContext
): EnvironmentBlueprintConfigurationItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainId: __expectString,
    enabledRegions: _json,
    environmentBlueprintId: __expectString,
    manageAccessRoleArn: __expectString,
    provisioningRoleArn: __expectString,
    regionalParameters: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintConfigurations
 */
const de_EnvironmentBlueprintConfigurations = (
  output: any,
  context: __SerdeContext
): EnvironmentBlueprintConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentBlueprintConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintSummaries
 */
const de_EnvironmentBlueprintSummaries = (output: any, context: __SerdeContext): EnvironmentBlueprintSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentBlueprintSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentBlueprintSummary
 */
const de_EnvironmentBlueprintSummary = (output: any, context: __SerdeContext): EnvironmentBlueprintSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    provider: __expectString,
    provisioningProperties: (_: any) => _json(__expectUnion(_)),
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_EnvironmentError omitted.

/**
 * deserializeAws_restJson1EnvironmentProfileSummaries
 */
const de_EnvironmentProfileSummaries = (output: any, context: __SerdeContext): EnvironmentProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentProfileSummary
 */
const de_EnvironmentProfileSummary = (output: any, context: __SerdeContext): EnvironmentProfileSummary => {
  return take(output, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentBlueprintId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1EnvironmentSummaries
 */
const de_EnvironmentSummaries = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    awsAccountId: __expectString,
    awsAccountRegion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    environmentProfileId: __expectString,
    id: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_FailureCause omitted.

// de_FailureReasons omitted.

// de_FilterExpression omitted.

// de_FilterExpressions omitted.

// de_FormEntryOutput omitted.

// de_FormOutput omitted.

// de_FormOutputList omitted.

// de_FormsOutputMap omitted.

/**
 * deserializeAws_restJson1FormTypeData
 */
const de_FormTypeData = (output: any, context: __SerdeContext): FormTypeData => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    imports: _json,
    model: (_: any) => _json(__expectUnion(_)),
    name: __expectString,
    originDomainId: __expectString,
    originProjectId: __expectString,
    owningProjectId: __expectString,
    revision: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GlossaryItem
 */
const de_GlossaryItem = (output: any, context: __SerdeContext): GlossaryItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    id: __expectString,
    name: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GlossaryTermItem
 */
const de_GlossaryTermItem = (output: any, context: __SerdeContext): GlossaryTermItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    glossaryId: __expectString,
    id: __expectString,
    longDescription: __expectString,
    name: __expectString,
    shortDescription: __expectString,
    status: __expectString,
    termRelations: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_GlossaryTerms omitted.

// de_GlueRunConfigurationOutput omitted.

// de_GrantedEntity omitted.

// de_GroupDetails omitted.

// de_GroupProfileSummaries omitted.

// de_GroupProfileSummary omitted.

// de_IamUserProfileDetails omitted.

// de_Import omitted.

// de_ImportList omitted.

/**
 * deserializeAws_restJson1ListingItem
 */
const de_ListingItem = (output: any, context: __SerdeContext): ListingItem => {
  if (output.assetListing != null) {
    return {
      assetListing: de_AssetListing(output.assetListing, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ListingRevision omitted.

// de_MemberDetails omitted.

/**
 * deserializeAws_restJson1MetadataGenerationRunItem
 */
const de_MetadataGenerationRunItem = (output: any, context: __SerdeContext): MetadataGenerationRunItem => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    owningProjectId: __expectString,
    status: __expectString,
    target: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MetadataGenerationRuns
 */
const de_MetadataGenerationRuns = (output: any, context: __SerdeContext): MetadataGenerationRunItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetadataGenerationRunItem(entry, context);
    });
  return retVal;
};

// de_MetadataGenerationRunTarget omitted.

// de_MetadataMap omitted.

// de_Model omitted.

/**
 * deserializeAws_restJson1NotificationOutput
 */
const de_NotificationOutput = (output: any, context: __SerdeContext): NotificationOutput => {
  return take(output, {
    actionLink: __expectString,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domainIdentifier: __expectString,
    identifier: __expectString,
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    metadata: _json,
    status: __expectString,
    title: __expectString,
    topic: _json,
    type: __expectString,
  }) as any;
};

// de_NotificationResource omitted.

/**
 * deserializeAws_restJson1NotificationsList
 */
const de_NotificationsList = (output: any, context: __SerdeContext): NotificationOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationOutput(entry, context);
    });
  return retVal;
};

// de_PredictionConfiguration omitted.

// de_ProjectDeletionError omitted.

// de_ProjectMember omitted.

// de_ProjectMembers omitted.

/**
 * deserializeAws_restJson1ProjectSummaries
 */
const de_ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    domainId: __expectString,
    failureReasons: _json,
    id: __expectString,
    name: __expectString,
    projectStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ProvisioningProperties omitted.

// de_RecommendationConfiguration omitted.

// de_RedshiftClusterStorage omitted.

// de_RedshiftCredentialConfiguration omitted.

// de_RedshiftRunConfigurationOutput omitted.

// de_RedshiftServerlessStorage omitted.

// de_RedshiftStorage omitted.

// de_RegionalParameter omitted.

// de_RegionalParameterMap omitted.

// de_RelationalFilterConfiguration omitted.

// de_RelationalFilterConfigurations omitted.

// de_Resource omitted.

// de_ResourceList omitted.

// de_RunStatisticsForAssets omitted.

// de_ScheduleConfiguration omitted.

/**
 * deserializeAws_restJson1SearchInventoryResultItem
 */
const de_SearchInventoryResultItem = (output: any, context: __SerdeContext): SearchInventoryResultItem => {
  if (output.assetItem != null) {
    return {
      assetItem: de_AssetItem(output.assetItem, context),
    };
  }
  if (output.dataProductItem != null) {
    return {
      dataProductItem: de_DataProductSummary(output.dataProductItem, context),
    };
  }
  if (output.glossaryItem != null) {
    return {
      glossaryItem: de_GlossaryItem(output.glossaryItem, context),
    };
  }
  if (output.glossaryTermItem != null) {
    return {
      glossaryTermItem: de_GlossaryTermItem(output.glossaryTermItem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchInventoryResultItems
 */
const de_SearchInventoryResultItems = (output: any, context: __SerdeContext): SearchInventoryResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchInventoryResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchResultItem
 */
const de_SearchResultItem = (output: any, context: __SerdeContext): SearchResultItem => {
  if (output.assetListing != null) {
    return {
      assetListing: de_AssetListingItem(output.assetListing, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchResultItems
 */
const de_SearchResultItems = (output: any, context: __SerdeContext): SearchResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchTypesResultItem
 */
const de_SearchTypesResultItem = (output: any, context: __SerdeContext): SearchTypesResultItem => {
  if (output.assetTypeItem != null) {
    return {
      assetTypeItem: de_AssetTypeItem(output.assetTypeItem, context),
    };
  }
  if (output.formTypeItem != null) {
    return {
      formTypeItem: de_FormTypeData(output.formTypeItem, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SearchTypesResultItems
 */
const de_SearchTypesResultItems = (output: any, context: __SerdeContext): SearchTypesResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchTypesResultItem(__expectUnion(entry), context);
    });
  return retVal;
};

// de_SingleSignOn omitted.

// de_SsoUserProfileDetails omitted.

/**
 * deserializeAws_restJson1SubscribedAsset
 */
const de_SubscribedAsset = (output: any, context: __SerdeContext): SubscribedAsset => {
  return take(output, {
    assetId: __expectString,
    assetRevision: __expectString,
    failureCause: _json,
    failureTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    grantedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetName: __expectString,
  }) as any;
};

// de_SubscribedAssetListing omitted.

/**
 * deserializeAws_restJson1SubscribedAssets
 */
const de_SubscribedAssets = (output: any, context: __SerdeContext): SubscribedAsset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscribedAsset(entry, context);
    });
  return retVal;
};

// de_SubscribedListing omitted.

// de_SubscribedListingItem omitted.

// de_SubscribedListings omitted.

// de_SubscribedPrincipal omitted.

// de_SubscribedPrincipals omitted.

// de_SubscribedProject omitted.

/**
 * deserializeAws_restJson1SubscriptionGrants
 */
const de_SubscriptionGrants = (output: any, context: __SerdeContext): SubscriptionGrantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionGrantSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionGrantSummary
 */
const de_SubscriptionGrantSummary = (output: any, context: __SerdeContext): SubscriptionGrantSummary => {
  return take(output, {
    assets: (_: any) => de_SubscribedAssets(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    grantedEntity: (_: any) => _json(__expectUnion(_)),
    id: __expectString,
    status: __expectString,
    subscriptionId: __expectString,
    subscriptionTargetId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SubscriptionRequests
 */
const de_SubscriptionRequests = (output: any, context: __SerdeContext): SubscriptionRequestSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionRequestSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionRequestSummary
 */
const de_SubscriptionRequestSummary = (output: any, context: __SerdeContext): SubscriptionRequestSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    decisionComment: __expectString,
    domainId: __expectString,
    id: __expectString,
    requestReason: __expectString,
    reviewerId: __expectString,
    status: __expectString,
    subscribedListings: _json,
    subscribedPrincipals: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Subscriptions
 */
const de_Subscriptions = (output: any, context: __SerdeContext): SubscriptionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionSummary
 */
const de_SubscriptionSummary = (output: any, context: __SerdeContext): SubscriptionSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    id: __expectString,
    retainPermissions: __expectBoolean,
    status: __expectString,
    subscribedListing: _json,
    subscribedPrincipal: (_: any) => _json(__expectUnion(_)),
    subscriptionRequestId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_SubscriptionTargetForm omitted.

// de_SubscriptionTargetForms omitted.

/**
 * deserializeAws_restJson1SubscriptionTargets
 */
const de_SubscriptionTargets = (output: any, context: __SerdeContext): SubscriptionTargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriptionTargetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubscriptionTargetSummary
 */
const de_SubscriptionTargetSummary = (output: any, context: __SerdeContext): SubscriptionTargetSummary => {
  return take(output, {
    applicableAssetTypes: _json,
    authorizedPrincipals: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    domainId: __expectString,
    environmentId: __expectString,
    id: __expectString,
    manageAccessRole: __expectString,
    name: __expectString,
    projectId: __expectString,
    provider: __expectString,
    subscriptionTargetConfig: _json,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedBy: __expectString,
  }) as any;
};

// de_Tags omitted.

// de_TermRelations omitted.

// de_Topic omitted.

// de_UserDetails omitted.

// de_UserProfileDetails omitted.

// de_UserProfileSummaries omitted.

// de_UserProfileSummary omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _aAI = "awsAccountId";
const _aAR = "awsAccountRegion";
const _aPI = "approverProjectId";
const _aT = "afterTimestamp";
const _bT = "beforeTimestamp";
const _cT = "clientToken";
const _eBI = "environmentBlueprintIdentifier";
const _eI = "environmentIdentifier";
const _eIn = "environmentId";
const _ePI = "environmentProfileIdentifier";
const _gI = "groupIdentifier";
const _lR = "listingRevision";
const _m = "managed";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oPI = "owningProjectId";
const _p = "provider";
const _pI = "projectIdentifier";
const _r = "revision";
const _s = "status";
const _sB = "sortBy";
const _sDC = "skipDeletionCheck";
const _sI = "subscriptionId";
const _sLI = "subscribedListingId";
const _sO = "sortOrder";
const _sRI = "subscriptionRequestIdentifier";
const _sTI = "subscriptionTargetId";
const _su = "subjects";
const _t = "type";
const _tK = "tagKeys";
const _tS = "taskStatus";
const _uI = "userIdentifier";
