// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
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
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "../commands/AssociateLensesCommand";
import { AssociateProfilesCommandInput, AssociateProfilesCommandOutput } from "../commands/AssociateProfilesCommand";
import { CreateLensShareCommandInput, CreateLensShareCommandOutput } from "../commands/CreateLensShareCommand";
import { CreateLensVersionCommandInput, CreateLensVersionCommandOutput } from "../commands/CreateLensVersionCommand";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "../commands/CreateMilestoneCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateProfileShareCommandInput, CreateProfileShareCommandOutput } from "../commands/CreateProfileShareCommand";
import {
  CreateReviewTemplateCommandInput,
  CreateReviewTemplateCommandOutput,
} from "../commands/CreateReviewTemplateCommand";
import {
  CreateTemplateShareCommandInput,
  CreateTemplateShareCommandOutput,
} from "../commands/CreateTemplateShareCommand";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "../commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "../commands/CreateWorkloadShareCommand";
import { DeleteLensCommandInput, DeleteLensCommandOutput } from "../commands/DeleteLensCommand";
import { DeleteLensShareCommandInput, DeleteLensShareCommandOutput } from "../commands/DeleteLensShareCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteProfileShareCommandInput, DeleteProfileShareCommandOutput } from "../commands/DeleteProfileShareCommand";
import {
  DeleteReviewTemplateCommandInput,
  DeleteReviewTemplateCommandOutput,
} from "../commands/DeleteReviewTemplateCommand";
import {
  DeleteTemplateShareCommandInput,
  DeleteTemplateShareCommandOutput,
} from "../commands/DeleteTemplateShareCommand";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "../commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "../commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "../commands/DisassociateLensesCommand";
import {
  DisassociateProfilesCommandInput,
  DisassociateProfilesCommandOutput,
} from "../commands/DisassociateProfilesCommand";
import { ExportLensCommandInput, ExportLensCommandOutput } from "../commands/ExportLensCommand";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "../commands/GetAnswerCommand";
import {
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "../commands/GetConsolidatedReportCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "../commands/GetGlobalSettingsCommand";
import { GetLensCommandInput, GetLensCommandOutput } from "../commands/GetLensCommand";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "../commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "../commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "../commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "../commands/GetMilestoneCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetProfileTemplateCommandInput, GetProfileTemplateCommandOutput } from "../commands/GetProfileTemplateCommand";
import {
  GetReviewTemplateAnswerCommandInput,
  GetReviewTemplateAnswerCommandOutput,
} from "../commands/GetReviewTemplateAnswerCommand";
import { GetReviewTemplateCommandInput, GetReviewTemplateCommandOutput } from "../commands/GetReviewTemplateCommand";
import {
  GetReviewTemplateLensReviewCommandInput,
  GetReviewTemplateLensReviewCommandOutput,
} from "../commands/GetReviewTemplateLensReviewCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "../commands/GetWorkloadCommand";
import { ImportLensCommandInput, ImportLensCommandOutput } from "../commands/ImportLensCommand";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { ListCheckDetailsCommandInput, ListCheckDetailsCommandOutput } from "../commands/ListCheckDetailsCommand";
import { ListCheckSummariesCommandInput, ListCheckSummariesCommandOutput } from "../commands/ListCheckSummariesCommand";
import { ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "../commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "../commands/ListLensReviewsCommand";
import { ListLensSharesCommandInput, ListLensSharesCommandOutput } from "../commands/ListLensSharesCommand";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "../commands/ListMilestonesCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListProfileNotificationsCommandInput,
  ListProfileNotificationsCommandOutput,
} from "../commands/ListProfileNotificationsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import { ListProfileSharesCommandInput, ListProfileSharesCommandOutput } from "../commands/ListProfileSharesCommand";
import {
  ListReviewTemplateAnswersCommandInput,
  ListReviewTemplateAnswersCommandOutput,
} from "../commands/ListReviewTemplateAnswersCommand";
import {
  ListReviewTemplatesCommandInput,
  ListReviewTemplatesCommandOutput,
} from "../commands/ListReviewTemplatesCommand";
import {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTemplateSharesCommandInput, ListTemplateSharesCommandOutput } from "../commands/ListTemplateSharesCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "../commands/ListWorkloadSharesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "../commands/UpdateAnswerCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "../commands/UpdateIntegrationCommand";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "../commands/UpdateLensReviewCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import {
  UpdateReviewTemplateAnswerCommandInput,
  UpdateReviewTemplateAnswerCommandOutput,
} from "../commands/UpdateReviewTemplateAnswerCommand";
import {
  UpdateReviewTemplateCommandInput,
  UpdateReviewTemplateCommandOutput,
} from "../commands/UpdateReviewTemplateCommand";
import {
  UpdateReviewTemplateLensReviewCommandInput,
  UpdateReviewTemplateLensReviewCommandOutput,
} from "../commands/UpdateReviewTemplateLensReviewCommand";
import {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "../commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "../commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "../commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "../commands/UpgradeLensReviewCommand";
import {
  UpgradeProfileVersionCommandInput,
  UpgradeProfileVersionCommandOutput,
} from "../commands/UpgradeProfileVersionCommand";
import {
  UpgradeReviewTemplateLensReviewCommandInput,
  UpgradeReviewTemplateLensReviewCommandOutput,
} from "../commands/UpgradeReviewTemplateLensReviewCommand";
import {
  AccessDeniedException,
  AccountJiraConfigurationInput,
  Answer,
  AnswerSummary,
  CheckDetail,
  CheckSummary,
  ChoiceUpdate,
  ConflictException,
  ConsolidatedReportMetric,
  DefinitionType,
  ImprovementSummary,
  InternalServerException,
  JiraConfiguration,
  JiraSelectedQuestionConfiguration,
  LensReview,
  LensReviewSummary,
  LensSummary,
  Milestone,
  MilestoneSummary,
  Profile,
  ProfileQuestionUpdate,
  ProfileSummary,
  ProfileTemplate,
  ResourceNotFoundException,
  ReviewTemplate,
  ReviewTemplateLensReview,
  ReviewTemplateSummary,
  SelectedPillar,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
  Workload,
  WorkloadDiscoveryConfig,
  WorkloadJiraConfigurationInput,
  WorkloadSummary,
} from "../models/models_0";
import { WellArchitectedServiceException as __BaseException } from "../models/WellArchitectedServiceException";

/**
 * serializeAws_restJson1AssociateLensesCommand
 */
export const se_AssociateLensesCommand = async (
  input: AssociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/associateLenses");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LensAliases: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateProfilesCommand
 */
export const se_AssociateProfilesCommand = async (
  input: AssociateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/associateProfiles");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileArns: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLensShareCommand
 */
export const se_CreateLensShareCommand = async (
  input: CreateLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/lenses/{LensAlias}/shares");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SharedWith: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLensVersionCommand
 */
export const se_CreateLensVersionCommand = async (
  input: CreateLensVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/lenses/{LensAlias}/versions");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      IsMajorVersion: [],
      LensVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMilestoneCommand
 */
export const se_CreateMilestoneCommand = async (
  input: CreateMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/milestones");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      MilestoneName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ProfileDescription: [],
      ProfileName: [],
      ProfileQuestions: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProfileShareCommand
 */
export const se_CreateProfileShareCommand = async (
  input: CreateProfileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profiles/{ProfileArn}/shares");
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SharedWith: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateReviewTemplateCommand
 */
export const se_CreateReviewTemplateCommand = async (
  input: CreateReviewTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reviewTemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Lenses: (_) => _json(_),
      Notes: [],
      Tags: (_) => _json(_),
      TemplateName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateShareCommand
 */
export const se_CreateTemplateShareCommand = async (
  input: CreateTemplateShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/templates/shares/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      SharedWith: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkloadCommand
 */
export const se_CreateWorkloadCommand = async (
  input: CreateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      Applications: (_) => _json(_),
      ArchitecturalDesign: [],
      AwsRegions: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      DiscoveryConfig: (_) => _json(_),
      Environment: [],
      Industry: [],
      IndustryType: [],
      JiraConfiguration: (_) => _json(_),
      Lenses: (_) => _json(_),
      NonAwsRegions: (_) => _json(_),
      Notes: [],
      PillarPriorities: (_) => _json(_),
      ProfileArns: (_) => _json(_),
      ReviewOwner: [],
      ReviewTemplateArns: (_) => _json(_),
      Tags: (_) => _json(_),
      WorkloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkloadShareCommand
 */
export const se_CreateWorkloadShareCommand = async (
  input: CreateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/shares");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      PermissionType: [],
      SharedWith: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLensCommand
 */
export const se_DeleteLensCommand = async (
  input: DeleteLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
    [_LS]: [, __expectNonNull(input[_LS]!, `LensStatus`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLensShareCommand
 */
export const se_DeleteLensShareCommand = async (
  input: DeleteLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}/shares/{ShareId}");
  b.p("ShareId", () => input.ShareId!, "{ShareId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles/{ProfileArn}");
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileShareCommand
 */
export const se_DeleteProfileShareCommand = async (
  input: DeleteProfileShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles/{ProfileArn}/shares/{ShareId}");
  b.p("ShareId", () => input.ShareId!, "{ShareId}", false);
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteReviewTemplateCommand
 */
export const se_DeleteReviewTemplateCommand = async (
  input: DeleteReviewTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateShareCommand
 */
export const se_DeleteTemplateShareCommand = async (
  input: DeleteTemplateShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/shares/{TemplateArn}/{ShareId}");
  b.p("ShareId", () => input.ShareId!, "{ShareId}", false);
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkloadCommand
 */
export const se_DeleteWorkloadCommand = async (
  input: DeleteWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkloadShareCommand
 */
export const se_DeleteWorkloadShareCommand = async (
  input: DeleteWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/shares/{ShareId}");
  b.p("ShareId", () => input.ShareId!, "{ShareId}", false);
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    [_CRT]: [, __expectNonNull(input[_CRT]!, `ClientRequestToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLensesCommand
 */
export const se_DisassociateLensesCommand = async (
  input: DisassociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/disassociateLenses");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LensAliases: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateProfilesCommand
 */
export const se_DisassociateProfilesCommand = async (
  input: DisassociateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/disassociateProfiles");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileArns: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportLensCommand
 */
export const se_ExportLensCommand = async (
  input: ExportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}/export");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_LV]: [, input[_LV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAnswerCommand
 */
export const se_GetAnswerCommand = async (
  input: GetAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  b.p("QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  const query: any = map({
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConsolidatedReportCommand
 */
export const se_GetConsolidatedReportCommand = async (
  input: GetConsolidatedReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/consolidatedReport");
  const query: any = map({
    [_F]: [, __expectNonNull(input[_F]!, `Format`)],
    [_ISR]: [() => input.IncludeSharedResources !== void 0, () => input[_ISR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlobalSettingsCommand
 */
export const se_GetGlobalSettingsCommand = async (
  input: GetGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLensCommand
 */
export const se_GetLensCommand = async (
  input: GetLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_LV]: [, input[_LV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLensReviewCommand
 */
export const se_GetLensReviewCommand = async (
  input: GetLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLensReviewReportCommand
 */
export const se_GetLensReviewReportCommand = async (
  input: GetLensReviewReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/report");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLensVersionDifferenceCommand
 */
export const se_GetLensVersionDifferenceCommand = async (
  input: GetLensVersionDifferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}/versionDifference");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_BLV]: [, input[_BLV]!],
    [_TLV]: [, input[_TLV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMilestoneCommand
 */
export const se_GetMilestoneCommand = async (
  input: GetMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/milestones/{MilestoneNumber}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("MilestoneNumber", () => input.MilestoneNumber!.toString(), "{MilestoneNumber}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles/{ProfileArn}");
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  const query: any = map({
    [_PV]: [, input[_PV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileTemplateCommand
 */
export const se_GetProfileTemplateCommand = async (
  input: GetProfileTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileTemplate");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetReviewTemplateCommand
 */
export const se_GetReviewTemplateCommand = async (
  input: GetReviewTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetReviewTemplateAnswerCommand
 */
export const se_GetReviewTemplateAnswerCommand = async (
  input: GetReviewTemplateAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  b.p("QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetReviewTemplateLensReviewCommand
 */
export const se_GetReviewTemplateLensReviewCommand = async (
  input: GetReviewTemplateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadCommand
 */
export const se_GetWorkloadCommand = async (
  input: GetWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportLensCommand
 */
export const se_ImportLensCommand = async (
  input: ImportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/importLens");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      JSONString: [],
      LensAlias: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnswersCommand
 */
export const se_ListAnswersCommand = async (
  input: ListAnswersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_PI]: [, input[_PI]!],
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_QP]: [, input[_QP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCheckDetailsCommand
 */
export const se_ListCheckDetailsCommand = async (
  input: ListCheckDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/checks");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChoiceId: [],
      LensArn: [],
      MaxResults: [],
      NextToken: [],
      PillarId: [],
      QuestionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCheckSummariesCommand
 */
export const se_ListCheckSummariesCommand = async (
  input: ListCheckSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/checkSummaries");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChoiceId: [],
      LensArn: [],
      MaxResults: [],
      NextToken: [],
      PillarId: [],
      QuestionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLensesCommand
 */
export const se_ListLensesCommand = async (
  input: ListLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_LT]: [, input[_LT]!],
    [_LS]: [, input[_LS]!],
    [_LN]: [, input[_LN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLensReviewImprovementsCommand
 */
export const se_ListLensReviewImprovementsCommand = async (
  input: ListLensReviewImprovementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_PI]: [, input[_PI]!],
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_QP]: [, input[_QP]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLensReviewsCommand
 */
export const se_ListLensReviewsCommand = async (
  input: ListLensReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/lensReviews");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    [_MN]: [() => input.MilestoneNumber !== void 0, () => input[_MN]!.toString()],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLensSharesCommand
 */
export const se_ListLensSharesCommand = async (
  input: ListLensSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/lenses/{LensAlias}/shares");
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_SWP]: [, input[_SWP]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_S]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMilestonesCommand
 */
export const se_ListMilestonesCommand = async (
  input: ListMilestonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/milestonesSummaries");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notifications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ResourceArn: [],
      WorkloadId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileNotificationsCommand
 */
export const se_ListProfileNotificationsCommand = async (
  input: ListProfileNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileNotifications");
  const query: any = map({
    [_WI]: [, input[_WI]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfilesCommand
 */
export const se_ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileSummaries");
  const query: any = map({
    [_PNP]: [, input[_PNP]!],
    [_POT]: [, input[_POT]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileSharesCommand
 */
export const se_ListProfileSharesCommand = async (
  input: ListProfileSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles/{ProfileArn}/shares");
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  const query: any = map({
    [_SWP]: [, input[_SWP]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_S]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListReviewTemplateAnswersCommand
 */
export const se_ListReviewTemplateAnswersCommand = async (
  input: ListReviewTemplateAnswersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    [_PI]: [, input[_PI]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListReviewTemplatesCommand
 */
export const se_ListReviewTemplatesCommand = async (
  input: ListReviewTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/reviewTemplates");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListShareInvitationsCommand
 */
export const se_ListShareInvitationsCommand = async (
  input: ListShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/shareInvitations");
  const query: any = map({
    [_WNP]: [, input[_WNP]!],
    [_LNP]: [, input[_LNP]!],
    [_SRT]: [, input[_SRT]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_PNP]: [, input[_PNP]!],
    [_TNP]: [, input[_TNP]!],
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
  b.bp("/tags/{WorkloadArn}");
  b.p("WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplateSharesCommand
 */
export const se_ListTemplateSharesCommand = async (
  input: ListTemplateSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/shares/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  const query: any = map({
    [_SWP]: [, input[_SWP]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_S]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkloadsCommand
 */
export const se_ListWorkloadsCommand = async (
  input: ListWorkloadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloadsSummaries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      WorkloadNamePrefix: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkloadSharesCommand
 */
export const se_ListWorkloadSharesCommand = async (
  input: ListWorkloadSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloads/{WorkloadId}/shares");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    [_SWP]: [, input[_SWP]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_S]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/tags/{WorkloadArn}");
  b.p("WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  b.bp("/tags/{WorkloadArn}");
  b.p("WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAnswerCommand
 */
export const se_UpdateAnswerCommand = async (
  input: UpdateAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  b.p("QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChoiceUpdates: (_) => _json(_),
      IsApplicable: [],
      Notes: [],
      Reason: [],
      SelectedChoices: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DiscoveryIntegrationStatus: [],
      JiraConfiguration: (_) => _json(_),
      OrganizationSharingStatus: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIntegrationCommand
 */
export const se_UpdateIntegrationCommand = async (
  input: UpdateIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/updateIntegration");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      IntegratingService: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLensReviewCommand
 */
export const se_UpdateLensReviewCommand = async (
  input: UpdateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      JiraConfiguration: (_) => _json(_),
      LensNotes: [],
      PillarNotes: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profiles/{ProfileArn}");
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileDescription: [],
      ProfileQuestions: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReviewTemplateCommand
 */
export const se_UpdateReviewTemplateCommand = async (
  input: UpdateReviewTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reviewTemplates/{TemplateArn}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      LensesToAssociate: (_) => _json(_),
      LensesToDisassociate: (_) => _json(_),
      Notes: [],
      TemplateName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReviewTemplateAnswerCommand
 */
export const se_UpdateReviewTemplateAnswerCommand = async (
  input: UpdateReviewTemplateAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/answers/{QuestionId}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  b.p("QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChoiceUpdates: (_) => _json(_),
      IsApplicable: [],
      Notes: [],
      Reason: [],
      SelectedChoices: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReviewTemplateLensReviewCommand
 */
export const se_UpdateReviewTemplateLensReviewCommand = async (
  input: UpdateReviewTemplateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LensNotes: [],
      PillarNotes: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateShareInvitationCommand
 */
export const se_UpdateShareInvitationCommand = async (
  input: UpdateShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/shareInvitations/{ShareInvitationId}");
  b.p("ShareInvitationId", () => input.ShareInvitationId!, "{ShareInvitationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ShareInvitationAction: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkloadCommand
 */
export const se_UpdateWorkloadCommand = async (
  input: UpdateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      Applications: (_) => _json(_),
      ArchitecturalDesign: [],
      AwsRegions: (_) => _json(_),
      Description: [],
      DiscoveryConfig: (_) => _json(_),
      Environment: [],
      ImprovementStatus: [],
      Industry: [],
      IndustryType: [],
      IsReviewOwnerUpdateAcknowledged: [],
      JiraConfiguration: (_) => _json(_),
      NonAwsRegions: (_) => _json(_),
      Notes: [],
      PillarPriorities: (_) => _json(_),
      ReviewOwner: [],
      WorkloadName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkloadShareCommand
 */
export const se_UpdateWorkloadShareCommand = async (
  input: UpdateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/shares/{ShareId}");
  b.p("ShareId", () => input.ShareId!, "{ShareId}", false);
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PermissionType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpgradeLensReviewCommand
 */
export const se_UpgradeLensReviewCommand = async (
  input: UpgradeLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [],
      MilestoneName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpgradeProfileVersionCommand
 */
export const se_UpgradeProfileVersionCommand = async (
  input: UpgradeProfileVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade");
  b.p("WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  b.p("ProfileArn", () => input.ProfileArn!, "{ProfileArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      MilestoneName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpgradeReviewTemplateLensReviewCommand
 */
export const se_UpgradeReviewTemplateLensReviewCommand = async (
  input: UpgradeReviewTemplateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reviewTemplates/{TemplateArn}/lensReviews/{LensAlias}/upgrade");
  b.p("TemplateArn", () => input.TemplateArn!, "{TemplateArn}", false);
  b.p("LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateLensesCommand
 */
export const de_AssociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLensesCommandOutput> => {
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
 * deserializeAws_restJson1AssociateProfilesCommand
 */
export const de_AssociateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProfilesCommandOutput> => {
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
 * deserializeAws_restJson1CreateLensShareCommand
 */
export const de_CreateLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ShareId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLensVersionCommand
 */
export const de_CreateLensVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensArn: __expectString,
    LensVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMilestoneCommand
 */
export const de_CreateMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MilestoneNumber: __expectInt32,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileArn: __expectString,
    ProfileVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfileShareCommand
 */
export const de_CreateProfileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileArn: __expectString,
    ShareId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateReviewTemplateCommand
 */
export const de_CreateReviewTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReviewTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateShareCommand
 */
export const de_CreateTemplateShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ShareId: __expectString,
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkloadCommand
 */
export const de_CreateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    WorkloadArn: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkloadShareCommand
 */
export const de_CreateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ShareId: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLensCommand
 */
export const de_DeleteLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLensShareCommand
 */
export const de_DeleteLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensShareCommandOutput> => {
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
 * deserializeAws_restJson1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
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
 * deserializeAws_restJson1DeleteProfileShareCommand
 */
export const de_DeleteProfileShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileShareCommandOutput> => {
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
 * deserializeAws_restJson1DeleteReviewTemplateCommand
 */
export const de_DeleteReviewTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReviewTemplateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTemplateShareCommand
 */
export const de_DeleteTemplateShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateShareCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWorkloadCommand
 */
export const de_DeleteWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWorkloadShareCommand
 */
export const de_DeleteWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadShareCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateLensesCommand
 */
export const de_DisassociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLensesCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateProfilesCommand
 */
export const de_DisassociateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProfilesCommandOutput> => {
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
 * deserializeAws_restJson1ExportLensCommand
 */
export const de_ExportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensJSON: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAnswerCommand
 */
export const de_GetAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answer: (_) => de_Answer(_, context),
    LensAlias: __expectString,
    LensArn: __expectString,
    MilestoneNumber: __expectInt32,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConsolidatedReportCommand
 */
export const de_GetConsolidatedReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConsolidatedReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Base64String: __expectString,
    Metrics: (_) => de_ConsolidatedReportMetrics(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlobalSettingsCommand
 */
export const de_GetGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DiscoveryIntegrationStatus: __expectString,
    JiraConfiguration: _json,
    OrganizationSharingStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLensCommand
 */
export const de_GetLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Lens: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLensReviewCommand
 */
export const de_GetLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReview: (_) => de_LensReview(_, context),
    MilestoneNumber: __expectInt32,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLensReviewReportCommand
 */
export const de_GetLensReviewReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReviewReport: _json,
    MilestoneNumber: __expectInt32,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLensVersionDifferenceCommand
 */
export const de_GetLensVersionDifferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensVersionDifferenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BaseLensVersion: __expectString,
    LatestLensVersion: __expectString,
    LensAlias: __expectString,
    LensArn: __expectString,
    TargetLensVersion: __expectString,
    VersionDifferences: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMilestoneCommand
 */
export const de_GetMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Milestone: (_) => de_Milestone(_, context),
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Profile: (_) => de_Profile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileTemplateCommand
 */
export const de_GetProfileTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileTemplate: (_) => de_ProfileTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReviewTemplateCommand
 */
export const de_GetReviewTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReviewTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReviewTemplate: (_) => de_ReviewTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReviewTemplateAnswerCommand
 */
export const de_GetReviewTemplateAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReviewTemplateAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answer: _json,
    LensAlias: __expectString,
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReviewTemplateLensReviewCommand
 */
export const de_GetReviewTemplateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReviewTemplateLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReview: (_) => de_ReviewTemplateLensReview(_, context),
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadCommand
 */
export const de_GetWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Workload: (_) => de_Workload(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportLensCommand
 */
export const de_ImportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensArn: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnswersCommand
 */
export const de_ListAnswersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnswersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnswerSummaries: (_) => de_AnswerSummaries(_, context),
    LensAlias: __expectString,
    LensArn: __expectString,
    MilestoneNumber: __expectInt32,
    NextToken: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCheckDetailsCommand
 */
export const de_ListCheckDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CheckDetails: (_) => de_CheckDetails(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCheckSummariesCommand
 */
export const de_ListCheckSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CheckSummaries: (_) => de_CheckSummaries(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLensesCommand
 */
export const de_ListLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensSummaries: (_) => de_LensSummaries(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLensReviewImprovementsCommand
 */
export const de_ListLensReviewImprovementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewImprovementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ImprovementSummaries: (_) => de_ImprovementSummaries(_, context),
    LensAlias: __expectString,
    LensArn: __expectString,
    MilestoneNumber: __expectInt32,
    NextToken: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLensReviewsCommand
 */
export const de_ListLensReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReviewSummaries: (_) => de_LensReviewSummaries(_, context),
    MilestoneNumber: __expectInt32,
    NextToken: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLensSharesCommand
 */
export const de_ListLensSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensShareSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMilestonesCommand
 */
export const de_ListMilestonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMilestonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MilestoneSummaries: (_) => de_MilestoneSummaries(_, context),
    NextToken: __expectString,
    WorkloadId: __expectString,
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
    NextToken: __expectString,
    NotificationSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileNotificationsCommand
 */
export const de_ListProfileNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    NotificationSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProfileSummaries: (_) => de_ProfileSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileSharesCommand
 */
export const de_ListProfileSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProfileShareSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReviewTemplateAnswersCommand
 */
export const de_ListReviewTemplateAnswersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewTemplateAnswersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AnswerSummaries: _json,
    LensAlias: __expectString,
    NextToken: __expectString,
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReviewTemplatesCommand
 */
export const de_ListReviewTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReviewTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReviewTemplates: (_) => de_ReviewTemplates(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListShareInvitationsCommand
 */
export const de_ListShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShareInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ShareInvitationSummaries: _json,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateSharesCommand
 */
export const de_ListTemplateSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TemplateArn: __expectString,
    TemplateShareSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadsCommand
 */
export const de_ListWorkloadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WorkloadSummaries: (_) => de_WorkloadSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadSharesCommand
 */
export const de_ListWorkloadSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WorkloadId: __expectString,
    WorkloadShareSummaries: _json,
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
 * deserializeAws_restJson1UpdateAnswerCommand
 */
export const de_UpdateAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answer: (_) => de_Answer(_, context),
    LensAlias: __expectString,
    LensArn: __expectString,
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
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
 * deserializeAws_restJson1UpdateIntegrationCommand
 */
export const de_UpdateIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntegrationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateLensReviewCommand
 */
export const de_UpdateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReview: (_) => de_LensReview(_, context),
    WorkloadId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Profile: (_) => de_Profile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReviewTemplateCommand
 */
export const de_UpdateReviewTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReviewTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReviewTemplate: (_) => de_ReviewTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReviewTemplateAnswerCommand
 */
export const de_UpdateReviewTemplateAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReviewTemplateAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answer: _json,
    LensAlias: __expectString,
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReviewTemplateLensReviewCommand
 */
export const de_UpdateReviewTemplateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReviewTemplateLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LensReview: (_) => de_ReviewTemplateLensReview(_, context),
    TemplateArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateShareInvitationCommand
 */
export const de_UpdateShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ShareInvitation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkloadCommand
 */
export const de_UpdateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Workload: (_) => de_Workload(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkloadShareCommand
 */
export const de_UpdateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    WorkloadId: __expectString,
    WorkloadShare: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpgradeLensReviewCommand
 */
export const de_UpgradeLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeLensReviewCommandOutput> => {
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
 * deserializeAws_restJson1UpgradeProfileVersionCommand
 */
export const de_UpgradeProfileVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeProfileVersionCommandOutput> => {
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
 * deserializeAws_restJson1UpgradeReviewTemplateLensReviewCommand
 */
export const de_UpgradeReviewTemplateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeReviewTemplateLensReviewCommandOutput> => {
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
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ServiceCode: __expectString,
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
    Fields: _json,
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountJiraConfigurationInput omitted.

// se_ChoiceUpdate omitted.

// se_ChoiceUpdates omitted.

// se_JiraSelectedQuestionConfiguration omitted.

// se_LensAliases omitted.

// se_PillarNotes omitted.

// se_ProfileArns omitted.

// se_ProfileQuestionUpdate omitted.

// se_ProfileQuestionUpdates omitted.

// se_ReviewTemplateArns omitted.

// se_ReviewTemplateLensAliases omitted.

// se_ReviewTemplateLenses omitted.

// se_SelectedChoices omitted.

// se_SelectedPillar omitted.

// se_SelectedPillars omitted.

// se_SelectedProfileChoiceIds omitted.

// se_SelectedQuestionIds omitted.

// se_TagMap omitted.

// se_WorkloadAccountIds omitted.

// se_WorkloadApplications omitted.

// se_WorkloadAwsRegions omitted.

// se_WorkloadDiscoveryConfig omitted.

// se_WorkloadJiraConfigurationInput omitted.

// se_WorkloadLenses omitted.

// se_WorkloadNonAwsRegions omitted.

// se_WorkloadPillarPriorities omitted.

// se_WorkloadProfileArns omitted.

// se_WorkloadResourceDefinition omitted.

// de_AccountJiraConfigurationOutput omitted.

// de_AccountSummary omitted.

// de_AdditionalResources omitted.

// de_AdditionalResourcesList omitted.

/**
 * deserializeAws_restJson1Answer
 */
const de_Answer = (output: any, context: __SerdeContext): Answer => {
  return take(output, {
    ChoiceAnswers: _json,
    Choices: _json,
    HelpfulResourceDisplayText: __expectString,
    HelpfulResourceUrl: __expectString,
    ImprovementPlanUrl: __expectString,
    IsApplicable: __expectBoolean,
    JiraConfiguration: (_: any) => de_JiraConfiguration(_, context),
    Notes: __expectString,
    PillarId: __expectString,
    QuestionDescription: __expectString,
    QuestionId: __expectString,
    QuestionTitle: __expectString,
    Reason: __expectString,
    Risk: __expectString,
    SelectedChoices: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AnswerSummaries
 */
const de_AnswerSummaries = (output: any, context: __SerdeContext): AnswerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnswerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnswerSummary
 */
const de_AnswerSummary = (output: any, context: __SerdeContext): AnswerSummary => {
  return take(output, {
    ChoiceAnswerSummaries: _json,
    Choices: _json,
    IsApplicable: __expectBoolean,
    JiraConfiguration: (_: any) => de_JiraConfiguration(_, context),
    PillarId: __expectString,
    QuestionId: __expectString,
    QuestionTitle: __expectString,
    QuestionType: __expectString,
    Reason: __expectString,
    Risk: __expectString,
    SelectedChoices: _json,
  }) as any;
};

// de_BestPractice omitted.

// de_BestPractices omitted.

/**
 * deserializeAws_restJson1CheckDetail
 */
const de_CheckDetail = (output: any, context: __SerdeContext): CheckDetail => {
  return take(output, {
    AccountId: __expectString,
    ChoiceId: __expectString,
    Description: __expectString,
    FlaggedResources: __expectInt32,
    Id: __expectString,
    LensArn: __expectString,
    Name: __expectString,
    PillarId: __expectString,
    Provider: __expectString,
    QuestionId: __expectString,
    Reason: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CheckDetails
 */
const de_CheckDetails = (output: any, context: __SerdeContext): CheckDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CheckDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CheckSummaries
 */
const de_CheckSummaries = (output: any, context: __SerdeContext): CheckSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CheckSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CheckSummary
 */
const de_CheckSummary = (output: any, context: __SerdeContext): CheckSummary => {
  return take(output, {
    AccountSummary: _json,
    ChoiceId: __expectString,
    Description: __expectString,
    Id: __expectString,
    LensArn: __expectString,
    Name: __expectString,
    PillarId: __expectString,
    Provider: __expectString,
    QuestionId: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Choice omitted.

// de_ChoiceAnswer omitted.

// de_ChoiceAnswers omitted.

// de_ChoiceAnswerSummaries omitted.

// de_ChoiceAnswerSummary omitted.

// de_ChoiceContent omitted.

// de_ChoiceImprovementPlan omitted.

// de_ChoiceImprovementPlans omitted.

// de_Choices omitted.

/**
 * deserializeAws_restJson1ConsolidatedReportMetric
 */
const de_ConsolidatedReportMetric = (output: any, context: __SerdeContext): ConsolidatedReportMetric => {
  return take(output, {
    Lenses: _json,
    LensesAppliedCount: __expectInt32,
    MetricType: __expectString,
    RiskCounts: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkloadArn: __expectString,
    WorkloadId: __expectString,
    WorkloadName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ConsolidatedReportMetrics
 */
const de_ConsolidatedReportMetrics = (output: any, context: __SerdeContext): ConsolidatedReportMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConsolidatedReportMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImprovementSummaries
 */
const de_ImprovementSummaries = (output: any, context: __SerdeContext): ImprovementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImprovementSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImprovementSummary
 */
const de_ImprovementSummary = (output: any, context: __SerdeContext): ImprovementSummary => {
  return take(output, {
    ImprovementPlanUrl: __expectString,
    ImprovementPlans: _json,
    JiraConfiguration: (_: any) => de_JiraConfiguration(_, context),
    PillarId: __expectString,
    QuestionId: __expectString,
    QuestionTitle: __expectString,
    Risk: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1JiraConfiguration
 */
const de_JiraConfiguration = (output: any, context: __SerdeContext): JiraConfiguration => {
  return take(output, {
    JiraIssueUrl: __expectString,
    LastSyncedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_JiraSelectedQuestionConfiguration omitted.

// de_Lens omitted.

// de_LensMetric omitted.

// de_LensMetrics omitted.

/**
 * deserializeAws_restJson1LensReview
 */
const de_LensReview = (output: any, context: __SerdeContext): LensReview => {
  return take(output, {
    JiraConfiguration: _json,
    LensAlias: __expectString,
    LensArn: __expectString,
    LensName: __expectString,
    LensStatus: __expectString,
    LensVersion: __expectString,
    NextToken: __expectString,
    Notes: __expectString,
    PillarReviewSummaries: _json,
    PrioritizedRiskCounts: _json,
    Profiles: _json,
    RiskCounts: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LensReviewReport omitted.

/**
 * deserializeAws_restJson1LensReviewSummaries
 */
const de_LensReviewSummaries = (output: any, context: __SerdeContext): LensReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LensReviewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensReviewSummary
 */
const de_LensReviewSummary = (output: any, context: __SerdeContext): LensReviewSummary => {
  return take(output, {
    LensAlias: __expectString,
    LensArn: __expectString,
    LensName: __expectString,
    LensStatus: __expectString,
    LensVersion: __expectString,
    PrioritizedRiskCounts: _json,
    Profiles: _json,
    RiskCounts: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LensShareSummaries omitted.

// de_LensShareSummary omitted.

/**
 * deserializeAws_restJson1LensSummaries
 */
const de_LensSummaries = (output: any, context: __SerdeContext): LensSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LensSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensSummary
 */
const de_LensSummary = (output: any, context: __SerdeContext): LensSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LensAlias: __expectString,
    LensArn: __expectString,
    LensName: __expectString,
    LensStatus: __expectString,
    LensType: __expectString,
    LensVersion: __expectString,
    Owner: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LensUpgradeSummary omitted.

/**
 * deserializeAws_restJson1Milestone
 */
const de_Milestone = (output: any, context: __SerdeContext): Milestone => {
  return take(output, {
    MilestoneName: __expectString,
    MilestoneNumber: __expectInt32,
    RecordedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Workload: (_: any) => de_Workload(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MilestoneSummaries
 */
const de_MilestoneSummaries = (output: any, context: __SerdeContext): MilestoneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MilestoneSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MilestoneSummary
 */
const de_MilestoneSummary = (output: any, context: __SerdeContext): MilestoneSummary => {
  return take(output, {
    MilestoneName: __expectString,
    MilestoneNumber: __expectInt32,
    RecordedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkloadSummary: (_: any) => de_WorkloadSummary(_, context),
  }) as any;
};

// de_NotificationSummaries omitted.

// de_NotificationSummary omitted.

// de_PillarDifference omitted.

// de_PillarDifferences omitted.

// de_PillarMetric omitted.

// de_PillarMetrics omitted.

// de_PillarReviewSummaries omitted.

// de_PillarReviewSummary omitted.

/**
 * deserializeAws_restJson1Profile
 */
const de_Profile = (output: any, context: __SerdeContext): Profile => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Owner: __expectString,
    ProfileArn: __expectString,
    ProfileDescription: __expectString,
    ProfileName: __expectString,
    ProfileQuestions: _json,
    ProfileVersion: __expectString,
    ShareInvitationId: __expectString,
    Tags: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ProfileChoice omitted.

// de_ProfileNotificationSummaries omitted.

// de_ProfileNotificationSummary omitted.

// de_ProfileQuestion omitted.

// de_ProfileQuestionChoices omitted.

// de_ProfileQuestions omitted.

// de_ProfileShareSummaries omitted.

// de_ProfileShareSummary omitted.

/**
 * deserializeAws_restJson1ProfileSummaries
 */
const de_ProfileSummaries = (output: any, context: __SerdeContext): ProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfileSummary
 */
const de_ProfileSummary = (output: any, context: __SerdeContext): ProfileSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Owner: __expectString,
    ProfileArn: __expectString,
    ProfileDescription: __expectString,
    ProfileName: __expectString,
    ProfileVersion: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileTemplate
 */
const de_ProfileTemplate = (output: any, context: __SerdeContext): ProfileTemplate => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TemplateName: __expectString,
    TemplateQuestions: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ProfileTemplateChoice omitted.

// de_ProfileTemplateQuestion omitted.

// de_ProfileTemplateQuestionChoices omitted.

// de_QuestionCounts omitted.

// de_QuestionDifference omitted.

// de_QuestionDifferences omitted.

// de_QuestionMetric omitted.

// de_QuestionMetrics omitted.

/**
 * deserializeAws_restJson1ReviewTemplate
 */
const de_ReviewTemplate = (output: any, context: __SerdeContext): ReviewTemplate => {
  return take(output, {
    Description: __expectString,
    Lenses: _json,
    Notes: __expectString,
    Owner: __expectString,
    QuestionCounts: _json,
    ShareInvitationId: __expectString,
    Tags: _json,
    TemplateArn: __expectString,
    TemplateName: __expectString,
    UpdateStatus: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ReviewTemplateAnswer omitted.

// de_ReviewTemplateAnswerSummaries omitted.

// de_ReviewTemplateAnswerSummary omitted.

// de_ReviewTemplateLenses omitted.

/**
 * deserializeAws_restJson1ReviewTemplateLensReview
 */
const de_ReviewTemplateLensReview = (output: any, context: __SerdeContext): ReviewTemplateLensReview => {
  return take(output, {
    LensAlias: __expectString,
    LensArn: __expectString,
    LensName: __expectString,
    LensStatus: __expectString,
    LensVersion: __expectString,
    NextToken: __expectString,
    Notes: __expectString,
    PillarReviewSummaries: _json,
    QuestionCounts: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ReviewTemplatePillarReviewSummaries omitted.

// de_ReviewTemplatePillarReviewSummary omitted.

/**
 * deserializeAws_restJson1ReviewTemplates
 */
const de_ReviewTemplates = (output: any, context: __SerdeContext): ReviewTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReviewTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReviewTemplateSummary
 */
const de_ReviewTemplateSummary = (output: any, context: __SerdeContext): ReviewTemplateSummary => {
  return take(output, {
    Description: __expectString,
    Lenses: _json,
    Owner: __expectString,
    TemplateArn: __expectString,
    TemplateName: __expectString,
    UpdateStatus: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_RiskCounts omitted.

// de_SelectedChoiceIds omitted.

// de_SelectedChoices omitted.

// de_SelectedPillar omitted.

// de_SelectedPillars omitted.

// de_SelectedQuestionIds omitted.

// de_ShareInvitation omitted.

// de_ShareInvitationSummaries omitted.

// de_ShareInvitationSummary omitted.

// de_TagMap omitted.

// de_TemplateQuestions omitted.

// de_TemplateShareSummaries omitted.

// de_TemplateShareSummary omitted.

// de_Urls omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VersionDifferences omitted.

/**
 * deserializeAws_restJson1Workload
 */
const de_Workload = (output: any, context: __SerdeContext): Workload => {
  return take(output, {
    AccountIds: _json,
    Applications: _json,
    ArchitecturalDesign: __expectString,
    AwsRegions: _json,
    Description: __expectString,
    DiscoveryConfig: _json,
    Environment: __expectString,
    ImprovementStatus: __expectString,
    Industry: __expectString,
    IndustryType: __expectString,
    IsReviewOwnerUpdateAcknowledged: __expectBoolean,
    JiraConfiguration: _json,
    Lenses: _json,
    NonAwsRegions: _json,
    Notes: __expectString,
    Owner: __expectString,
    PillarPriorities: _json,
    PrioritizedRiskCounts: _json,
    Profiles: _json,
    ReviewOwner: __expectString,
    ReviewRestrictionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RiskCounts: _json,
    ShareInvitationId: __expectString,
    Tags: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkloadArn: __expectString,
    WorkloadId: __expectString,
    WorkloadName: __expectString,
  }) as any;
};

// de_WorkloadAccountIds omitted.

// de_WorkloadApplications omitted.

// de_WorkloadAwsRegions omitted.

// de_WorkloadDiscoveryConfig omitted.

// de_WorkloadJiraConfigurationOutput omitted.

// de_WorkloadLenses omitted.

// de_WorkloadNonAwsRegions omitted.

// de_WorkloadPillarPriorities omitted.

// de_WorkloadProfile omitted.

// de_WorkloadProfiles omitted.

// de_WorkloadResourceDefinition omitted.

// de_WorkloadShare omitted.

// de_WorkloadShareSummaries omitted.

// de_WorkloadShareSummary omitted.

/**
 * deserializeAws_restJson1WorkloadSummaries
 */
const de_WorkloadSummaries = (output: any, context: __SerdeContext): WorkloadSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkloadSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkloadSummary
 */
const de_WorkloadSummary = (output: any, context: __SerdeContext): WorkloadSummary => {
  return take(output, {
    ImprovementStatus: __expectString,
    Lenses: _json,
    Owner: __expectString,
    PrioritizedRiskCounts: _json,
    Profiles: _json,
    RiskCounts: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkloadArn: __expectString,
    WorkloadId: __expectString,
    WorkloadName: __expectString,
  }) as any;
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

const _BLV = "BaseLensVersion";
const _CRT = "ClientRequestToken";
const _F = "Format";
const _ISR = "IncludeSharedResources";
const _LN = "LensName";
const _LNP = "LensNamePrefix";
const _LS = "LensStatus";
const _LT = "LensType";
const _LV = "LensVersion";
const _MN = "MilestoneNumber";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PI = "PillarId";
const _PNP = "ProfileNamePrefix";
const _POT = "ProfileOwnerType";
const _PV = "ProfileVersion";
const _QP = "QuestionPriority";
const _S = "Status";
const _SRT = "ShareResourceType";
const _SWP = "SharedWithPrefix";
const _TK = "TagKeys";
const _TLV = "TargetLensVersion";
const _TNP = "TemplateNamePrefix";
const _WI = "WorkloadId";
const _WNP = "WorkloadNamePrefix";
const _tK = "tagKeys";
