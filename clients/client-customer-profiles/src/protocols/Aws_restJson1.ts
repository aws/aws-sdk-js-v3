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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "../commands/AddProfileKeyCommand";
import {
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
} from "../commands/CreateCalculatedAttributeDefinitionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateEventStreamCommandInput, CreateEventStreamCommandOutput } from "../commands/CreateEventStreamCommand";
import {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "../commands/CreateIntegrationWorkflowCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import {
  DeleteCalculatedAttributeDefinitionCommandInput,
  DeleteCalculatedAttributeDefinitionCommandOutput,
} from "../commands/DeleteCalculatedAttributeDefinitionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "../commands/DeleteEventStreamCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "../commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "../commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "../commands/DeleteProfileObjectTypeCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import {
  DetectProfileObjectTypeCommandInput,
  DetectProfileObjectTypeCommandOutput,
} from "../commands/DetectProfileObjectTypeCommand";
import {
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "../commands/GetAutoMergingPreviewCommand";
import {
  GetCalculatedAttributeDefinitionCommandInput,
  GetCalculatedAttributeDefinitionCommandOutput,
} from "../commands/GetCalculatedAttributeDefinitionCommand";
import {
  GetCalculatedAttributeForProfileCommandInput,
  GetCalculatedAttributeForProfileCommandOutput,
} from "../commands/GetCalculatedAttributeForProfileCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "../commands/GetEventStreamCommand";
import {
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "../commands/GetIdentityResolutionJobCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import { GetMatchesCommandInput, GetMatchesCommandOutput } from "../commands/GetMatchesCommand";
import {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "../commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "../commands/GetProfileObjectTypeTemplateCommand";
import { GetSimilarProfilesCommandInput, GetSimilarProfilesCommandOutput } from "../commands/GetSimilarProfilesCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowStepsCommandInput, GetWorkflowStepsCommandOutput } from "../commands/GetWorkflowStepsCommand";
import {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "../commands/ListAccountIntegrationsCommand";
import {
  ListCalculatedAttributeDefinitionsCommandInput,
  ListCalculatedAttributeDefinitionsCommandOutput,
} from "../commands/ListCalculatedAttributeDefinitionsCommand";
import {
  ListCalculatedAttributesForProfileCommandInput,
  ListCalculatedAttributesForProfileCommandOutput,
} from "../commands/ListCalculatedAttributesForProfileCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListEventStreamsCommandInput, ListEventStreamsCommandOutput } from "../commands/ListEventStreamsCommand";
import {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "../commands/ListIdentityResolutionJobsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "../commands/ListIntegrationsCommand";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "../commands/ListProfileObjectsCommand";
import {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "../commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "../commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput,
} from "../commands/ListRuleBasedMatchesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "../commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "../commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "../commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
} from "../commands/UpdateCalculatedAttributeDefinitionCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { CustomerProfilesServiceException as __BaseException } from "../models/CustomerProfilesServiceException";
import {
  AccessDeniedException,
  AdditionalSearchKey,
  Address,
  AppflowIntegration,
  AppflowIntegrationWorkflowStep,
  AttributeDetails,
  AttributeItem,
  AttributeTypesSelector,
  AutoMerging,
  BadRequestException,
  Batch,
  Conditions,
  ConflictResolution,
  ConnectorOperator,
  Consolidation,
  DestinationSummary,
  EventStreamDestinationDetails,
  EventStreamSummary,
  ExportingConfig,
  FieldSourceProfileIds,
  FlowDefinition,
  IdentityResolutionJob,
  IncrementalPullConfig,
  IntegrationConfig,
  InternalServerException,
  JobSchedule,
  ListCalculatedAttributeDefinitionItem,
  ListDomainItem,
  ListIntegrationItem,
  ListProfileObjectTypeItem,
  ListWorkflowsItem,
  MarketoSourceProperties,
  MatchingRequest,
  MatchingResponse,
  MatchingRule,
  MatchItem,
  ObjectFilter,
  ObjectTypeField,
  ObjectTypeKey,
  OperatorPropertiesKeys,
  Range,
  ResourceNotFoundException,
  RuleBasedMatchingRequest,
  S3ExportingConfig,
  S3SourceProperties,
  SalesforceSourceProperties,
  ScheduledTriggerProperties,
  ServiceNowSourceProperties,
  SourceConnectorProperties,
  SourceFlowConfig,
  StandardIdentifier,
  Task,
  Threshold,
  ThrottlingException,
  TriggerConfig,
  TriggerProperties,
  UpdateAddress,
  WorkflowStepItem,
  ZendeskSourceProperties,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddProfileKeyCommand
 */
export const se_AddProfileKeyCommand = async (
  input: AddProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/keys");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyName: [],
      ProfileId: [],
      Values: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCalculatedAttributeDefinitionCommand
 */
export const se_CreateCalculatedAttributeDefinitionCommand = async (
  input: CreateCalculatedAttributeDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttributeDetails: (_) => _json(_),
      Conditions: (_) => _json(_),
      Description: [],
      DisplayName: [],
      Statistic: [],
      Tags: (_) => _json(_),
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
  b.bp("/domains/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeadLetterQueueUrl: [],
      DefaultEncryptionKey: [],
      DefaultExpirationDays: [],
      Matching: (_) => se_MatchingRequest(_, context),
      RuleBasedMatching: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEventStreamCommand
 */
export const se_CreateEventStreamCommand = async (
  input: CreateEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/event-streams/{EventStreamName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventStreamName", () => input.EventStreamName!, "{EventStreamName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
      Uri: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIntegrationWorkflowCommand
 */
export const se_CreateIntegrationWorkflowCommand = async (
  input: CreateIntegrationWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/workflows/integrations");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IntegrationConfig: (_) => se_IntegrationConfig(_, context),
      ObjectTypeName: [],
      RoleArn: [],
      Tags: (_) => _json(_),
      WorkflowType: [],
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
  b.bp("/domains/{DomainName}/profiles");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountNumber: [],
      AdditionalInformation: [],
      Address: (_) => _json(_),
      Attributes: (_) => _json(_),
      BillingAddress: (_) => _json(_),
      BirthDate: [],
      BusinessEmailAddress: [],
      BusinessName: [],
      BusinessPhoneNumber: [],
      EmailAddress: [],
      FirstName: [],
      Gender: [],
      GenderString: [],
      HomePhoneNumber: [],
      LastName: [],
      MailingAddress: (_) => _json(_),
      MiddleName: [],
      MobilePhoneNumber: [],
      PartyType: [],
      PartyTypeString: [],
      PersonalEmailAddress: [],
      PhoneNumber: [],
      ShippingAddress: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCalculatedAttributeDefinitionCommand
 */
export const se_DeleteCalculatedAttributeDefinitionCommand = async (
  input: DeleteCalculatedAttributeDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/domains/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventStreamCommand
 */
export const se_DeleteEventStreamCommand = async (
  input: DeleteEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-streams/{EventStreamName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventStreamName", () => input.EventStreamName!, "{EventStreamName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/integrations/delete");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Uri: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/delete");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileKeyCommand
 */
export const se_DeleteProfileKeyCommand = async (
  input: DeleteProfileKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/keys/delete");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyName: [],
      ProfileId: [],
      Values: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileObjectCommand
 */
export const se_DeleteProfileObjectCommand = async (
  input: DeleteProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/objects/delete");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectTypeName: [],
      ProfileId: [],
      ProfileObjectUniqueKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileObjectTypeCommand
 */
export const se_DeleteProfileObjectTypeCommand = async (
  input: DeleteProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/object-types/{ObjectTypeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ObjectTypeName", () => input.ObjectTypeName!, "{ObjectTypeName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/workflows/{WorkflowId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DetectProfileObjectTypeCommand
 */
export const se_DetectProfileObjectTypeCommand = async (
  input: DetectProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/detect/object-types");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Objects: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAutoMergingPreviewCommand
 */
export const se_GetAutoMergingPreviewCommand = async (
  input: GetAutoMergingPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConflictResolution: (_) => _json(_),
      Consolidation: (_) => _json(_),
      MinAllowedConfidenceScoreForMerging: (_) => __serializeFloat(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCalculatedAttributeDefinitionCommand
 */
export const se_GetCalculatedAttributeDefinitionCommand = async (
  input: GetCalculatedAttributeDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCalculatedAttributeForProfileCommand
 */
export const se_GetCalculatedAttributeForProfileCommand = async (
  input: GetCalculatedAttributeForProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
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
  b.bp("/domains/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventStreamCommand
 */
export const se_GetEventStreamCommand = async (
  input: GetEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-streams/{EventStreamName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventStreamName", () => input.EventStreamName!, "{EventStreamName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIdentityResolutionJobCommand
 */
export const se_GetIdentityResolutionJobCommand = async (
  input: GetIdentityResolutionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/identity-resolution-jobs/{JobId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntegrationCommand
 */
export const se_GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/integrations");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Uri: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMatchesCommand
 */
export const se_GetMatchesCommand = async (
  input: GetMatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/matches");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileObjectTypeCommand
 */
export const se_GetProfileObjectTypeCommand = async (
  input: GetProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/object-types/{ObjectTypeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ObjectTypeName", () => input.ObjectTypeName!, "{ObjectTypeName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileObjectTypeTemplateCommand
 */
export const se_GetProfileObjectTypeTemplateCommand = async (
  input: GetProfileObjectTypeTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates/{TemplateId}");
  b.p("TemplateId", () => input.TemplateId!, "{TemplateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSimilarProfilesCommand
 */
export const se_GetSimilarProfilesCommand = async (
  input: GetSimilarProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/matches");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      MatchType: [],
      SearchKey: [],
      SearchValue: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowCommand
 */
export const se_GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/workflows/{WorkflowId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkflowStepsCommand
 */
export const se_GetWorkflowStepsCommand = async (
  input: GetWorkflowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/workflows/{WorkflowId}/steps");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("WorkflowId", () => input.WorkflowId!, "{WorkflowId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccountIntegrationsCommand
 */
export const se_ListAccountIntegrationsCommand = async (
  input: ListAccountIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/integrations");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_ih]: [() => input.IncludeHidden !== void 0, () => input[_IH]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Uri: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCalculatedAttributeDefinitionsCommand
 */
export const se_ListCalculatedAttributeDefinitionsCommand = async (
  input: ListCalculatedAttributeDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/calculated-attributes");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCalculatedAttributesForProfileCommand
 */
export const se_ListCalculatedAttributesForProfileCommand = async (
  input: ListCalculatedAttributesForProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/profile/{ProfileId}/calculated-attributes");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
  b.bp("/domains");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventStreamsCommand
 */
export const se_ListEventStreamsCommand = async (
  input: ListEventStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-streams");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentityResolutionJobsCommand
 */
export const se_ListIdentityResolutionJobsCommand = async (
  input: ListIdentityResolutionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/identity-resolution-jobs");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIntegrationsCommand
 */
export const se_ListIntegrationsCommand = async (
  input: ListIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/integrations");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_ih]: [() => input.IncludeHidden !== void 0, () => input[_IH]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileObjectsCommand
 */
export const se_ListProfileObjectsCommand = async (
  input: ListProfileObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/objects");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ObjectFilter: (_) => _json(_),
      ObjectTypeName: [],
      ProfileId: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileObjectTypesCommand
 */
export const se_ListProfileObjectTypesCommand = async (
  input: ListProfileObjectTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/object-types");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileObjectTypeTemplatesCommand
 */
export const se_ListProfileObjectTypeTemplatesCommand = async (
  input: ListProfileObjectTypeTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/templates");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRuleBasedMatchesCommand
 */
export const se_ListRuleBasedMatchesCommand = async (
  input: ListRuleBasedMatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/profiles/ruleBasedMatches");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
 * serializeAws_restJson1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/workflows");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueryEndDate: (_) => _.getTime() / 1_000,
      QueryStartDate: (_) => _.getTime() / 1_000,
      Status: [],
      WorkflowType: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1MergeProfilesCommand
 */
export const se_MergeProfilesCommand = async (
  input: MergeProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/objects/merge");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FieldSourceProfileIds: (_) => _json(_),
      MainProfileId: [],
      ProfileIdsToBeMerged: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutIntegrationCommand
 */
export const se_PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/integrations");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FlowDefinition: (_) => se_FlowDefinition(_, context),
      ObjectTypeName: [],
      ObjectTypeNames: (_) => _json(_),
      RoleArn: [],
      Tags: (_) => _json(_),
      Uri: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutProfileObjectCommand
 */
export const se_PutProfileObjectCommand = async (
  input: PutProfileObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/objects");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Object: [],
      ObjectTypeName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutProfileObjectTypeCommand
 */
export const se_PutProfileObjectTypeCommand = async (
  input: PutProfileObjectTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/object-types/{ObjectTypeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ObjectTypeName", () => input.ObjectTypeName!, "{ObjectTypeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowProfileCreation: [],
      Description: [],
      EncryptionKey: [],
      ExpirationDays: [],
      Fields: (_) => _json(_),
      Keys: (_) => _json(_),
      MaxProfileObjectCount: [],
      SourceLastUpdatedTimestampFormat: [],
      Tags: (_) => _json(_),
      TemplateId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchProfilesCommand
 */
export const se_SearchProfilesCommand = async (
  input: SearchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/profiles/search");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdditionalSearchKeys: (_) => _json(_),
      KeyName: [],
      LogicalOperator: [],
      Values: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
 * serializeAws_restJson1UpdateCalculatedAttributeDefinitionCommand
 */
export const se_UpdateCalculatedAttributeDefinitionCommand = async (
  input: UpdateCalculatedAttributeDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Conditions: (_) => _json(_),
      Description: [],
      DisplayName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
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
  b.bp("/domains/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeadLetterQueueUrl: [],
      DefaultEncryptionKey: [],
      DefaultExpirationDays: [],
      Matching: (_) => se_MatchingRequest(_, context),
      RuleBasedMatching: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
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
  b.bp("/domains/{DomainName}/profiles");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountNumber: [],
      AdditionalInformation: [],
      Address: (_) => _json(_),
      Attributes: (_) => _json(_),
      BillingAddress: (_) => _json(_),
      BirthDate: [],
      BusinessEmailAddress: [],
      BusinessName: [],
      BusinessPhoneNumber: [],
      EmailAddress: [],
      FirstName: [],
      Gender: [],
      GenderString: [],
      HomePhoneNumber: [],
      LastName: [],
      MailingAddress: (_) => _json(_),
      MiddleName: [],
      MobilePhoneNumber: [],
      PartyType: [],
      PartyTypeString: [],
      PersonalEmailAddress: [],
      PhoneNumber: [],
      ProfileId: [],
      ShippingAddress: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AddProfileKeyCommand
 */
export const de_AddProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyName: __expectString,
    Values: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCalculatedAttributeDefinitionCommand
 */
export const de_CreateCalculatedAttributeDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCalculatedAttributeDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttributeDetails: _json,
    CalculatedAttributeName: __expectString,
    Conditions: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Statistic: __expectString,
    Tags: _json,
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
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeadLetterQueueUrl: __expectString,
    DefaultEncryptionKey: __expectString,
    DefaultExpirationDays: __expectInt32,
    DomainName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Matching: (_) => de_MatchingResponse(_, context),
    RuleBasedMatching: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventStreamCommand
 */
export const de_CreateEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventStreamArn: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntegrationWorkflowCommand
 */
export const de_CreateIntegrationWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntegrationWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
    WorkflowId: __expectString,
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
    ProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCalculatedAttributeDefinitionCommand
 */
export const de_DeleteCalculatedAttributeDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCalculatedAttributeDefinitionCommandOutput> => {
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventStreamCommand
 */
export const de_DeleteEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileKeyCommand
 */
export const de_DeleteProfileKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileObjectCommand
 */
export const de_DeleteProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileObjectTypeCommand
 */
export const de_DeleteProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
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
 * deserializeAws_restJson1DetectProfileObjectTypeCommand
 */
export const de_DetectProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DetectedProfileObjectTypes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAutoMergingPreviewCommand
 */
export const de_GetAutoMergingPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoMergingPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainName: __expectString,
    NumberOfMatchesInSample: __expectLong,
    NumberOfProfilesInSample: __expectLong,
    NumberOfProfilesWillBeMerged: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCalculatedAttributeDefinitionCommand
 */
export const de_GetCalculatedAttributeDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculatedAttributeDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttributeDetails: _json,
    CalculatedAttributeName: __expectString,
    Conditions: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Statistic: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCalculatedAttributeForProfileCommand
 */
export const de_GetCalculatedAttributeForProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculatedAttributeForProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CalculatedAttributeName: __expectString,
    DisplayName: __expectString,
    IsDataPartial: __expectString,
    Value: __expectString,
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
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeadLetterQueueUrl: __expectString,
    DefaultEncryptionKey: __expectString,
    DefaultExpirationDays: __expectInt32,
    DomainName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Matching: (_) => de_MatchingResponse(_, context),
    RuleBasedMatching: _json,
    Stats: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventStreamCommand
 */
export const de_GetEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationDetails: (_) => de_EventStreamDestinationDetails(_, context),
    DomainName: __expectString,
    EventStreamArn: __expectString,
    State: __expectString,
    StoppedSince: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentityResolutionJobCommand
 */
export const de_GetIdentityResolutionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityResolutionJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoMerging: (_) => de_AutoMerging(_, context),
    DomainName: __expectString,
    ExportingLocation: _json,
    JobEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobExpirationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    JobStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobStats: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntegrationCommand
 */
export const de_GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    IsUnstructured: __expectBoolean,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    ObjectTypeNames: _json,
    RoleArn: __expectString,
    Tags: _json,
    Uri: __expectString,
    WorkflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMatchesCommand
 */
export const de_GetMatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MatchGenerationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Matches: (_) => de_MatchesList(_, context),
    NextToken: __expectString,
    PotentialMatches: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileObjectTypeCommand
 */
export const de_GetProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AllowProfileCreation: __expectBoolean,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EncryptionKey: __expectString,
    ExpirationDays: __expectInt32,
    Fields: _json,
    Keys: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxAvailableProfileObjectCount: __expectInt32,
    MaxProfileObjectCount: __expectInt32,
    ObjectTypeName: __expectString,
    SourceLastUpdatedTimestampFormat: __expectString,
    Tags: _json,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileObjectTypeTemplateCommand
 */
export const de_GetProfileObjectTypeTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileObjectTypeTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AllowProfileCreation: __expectBoolean,
    Fields: _json,
    Keys: _json,
    SourceLastUpdatedTimestampFormat: __expectString,
    SourceName: __expectString,
    SourceObject: __expectString,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSimilarProfilesCommand
 */
export const de_GetSimilarProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSimilarProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfidenceScore: __limitedParseDouble,
    MatchId: __expectString,
    MatchType: __expectString,
    NextToken: __expectString,
    ProfileIds: _json,
    RuleLevel: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowCommand
 */
export const de_GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attributes: _json,
    ErrorDescription: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: _json,
    StartDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    WorkflowId: __expectString,
    WorkflowType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepsCommand
 */
export const de_GetWorkflowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_WorkflowStepsList(_, context),
    NextToken: __expectString,
    WorkflowId: __expectString,
    WorkflowType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccountIntegrationsCommand
 */
export const de_ListAccountIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_IntegrationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCalculatedAttributeDefinitionsCommand
 */
export const de_ListCalculatedAttributeDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCalculatedAttributeDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_CalculatedAttributeDefinitionsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCalculatedAttributesForProfileCommand
 */
export const de_ListCalculatedAttributesForProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCalculatedAttributesForProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
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
    Items: (_) => de_DomainList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventStreamsCommand
 */
export const de_ListEventStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_EventStreamSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityResolutionJobsCommand
 */
export const de_ListIdentityResolutionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityResolutionJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityResolutionJobsList: (_) => de_IdentityResolutionJobsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIntegrationsCommand
 */
export const de_ListIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_IntegrationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectsCommand
 */
export const de_ListProfileObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypesCommand
 */
export const de_ListProfileObjectTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ProfileObjectTypeList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand
 */
export const de_ListProfileObjectTypeTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileObjectTypeTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRuleBasedMatchesCommand
 */
export const de_ListRuleBasedMatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleBasedMatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MatchIds: _json,
    NextToken: __expectString,
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
 * deserializeAws_restJson1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_WorkflowList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1MergeProfilesCommand
 */
export const de_MergeProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutIntegrationCommand
 */
export const de_PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    IsUnstructured: __expectBoolean,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    ObjectTypeNames: _json,
    RoleArn: __expectString,
    Tags: _json,
    Uri: __expectString,
    WorkflowId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutProfileObjectCommand
 */
export const de_PutProfileObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileObjectUniqueKey: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutProfileObjectTypeCommand
 */
export const de_PutProfileObjectTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileObjectTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AllowProfileCreation: __expectBoolean,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EncryptionKey: __expectString,
    ExpirationDays: __expectInt32,
    Fields: _json,
    Keys: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxAvailableProfileObjectCount: __expectInt32,
    MaxProfileObjectCount: __expectInt32,
    ObjectTypeName: __expectString,
    SourceLastUpdatedTimestampFormat: __expectString,
    Tags: _json,
    TemplateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchProfilesCommand
 */
export const de_SearchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
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
 * deserializeAws_restJson1UpdateCalculatedAttributeDefinitionCommand
 */
export const de_UpdateCalculatedAttributeDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCalculatedAttributeDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttributeDetails: _json,
    CalculatedAttributeName: __expectString,
    Conditions: _json,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Statistic: __expectString,
    Tags: _json,
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
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeadLetterQueueUrl: __expectString,
    DefaultEncryptionKey: __expectString,
    DefaultExpirationDays: __expectInt32,
    DomainName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Matching: (_) => de_MatchingResponse(_, context),
    RuleBasedMatching: _json,
    Tags: _json,
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
    ProfileId: __expectString,
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
    case "com.amazonaws.customerprofiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.customerprofiles#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.customerprofiles#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.customerprofiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.customerprofiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
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
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AdditionalSearchKey omitted.

// se_additionalSearchKeysList omitted.

// se_Address omitted.

// se_AddressList omitted.

/**
 * serializeAws_restJson1AppflowIntegration
 */
const se_AppflowIntegration = (input: AppflowIntegration, context: __SerdeContext): any => {
  return take(input, {
    Batches: (_) => se_Batches(_, context),
    FlowDefinition: (_) => se_FlowDefinition(_, context),
  });
};

// se_AttributeDetails omitted.

// se_AttributeItem omitted.

// se_AttributeList omitted.

// se_Attributes omitted.

// se_AttributeSourceIdMap omitted.

// se_AttributeTypesSelector omitted.

/**
 * serializeAws_restJson1AutoMerging
 */
const se_AutoMerging = (input: AutoMerging, context: __SerdeContext): any => {
  return take(input, {
    ConflictResolution: _json,
    Consolidation: _json,
    Enabled: [],
    MinAllowedConfidenceScoreForMerging: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1Batch
 */
const se_Batch = (input: Batch, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1Batches
 */
const se_Batches = (input: Batch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Batch(entry, context);
    });
};

// se_Conditions omitted.

// se_ConflictResolution omitted.

// se_ConnectorOperator omitted.

// se_Consolidation omitted.

// se_EmailList omitted.

// se_ExportingConfig omitted.

// se_FieldMap omitted.

// se_FieldNameList omitted.

// se_FieldSourceProfileIds omitted.

/**
 * serializeAws_restJson1FlowDefinition
 */
const se_FlowDefinition = (input: FlowDefinition, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    FlowName: [],
    KmsArn: [],
    SourceFlowConfig: _json,
    Tasks: _json,
    TriggerConfig: (_) => se_TriggerConfig(_, context),
  });
};

// se_IncrementalPullConfig omitted.

/**
 * serializeAws_restJson1IntegrationConfig
 */
const se_IntegrationConfig = (input: IntegrationConfig, context: __SerdeContext): any => {
  return take(input, {
    AppflowIntegration: (_) => se_AppflowIntegration(_, context),
  });
};

// se_JobSchedule omitted.

// se_KeyMap omitted.

// se_MarketoSourceProperties omitted.

// se_MatchingAttributes omitted.

// se_MatchingAttributesList omitted.

/**
 * serializeAws_restJson1MatchingRequest
 */
const se_MatchingRequest = (input: MatchingRequest, context: __SerdeContext): any => {
  return take(input, {
    AutoMerging: (_) => se_AutoMerging(_, context),
    Enabled: [],
    ExportingConfig: _json,
    JobSchedule: _json,
  });
};

// se_MatchingRule omitted.

// se_MatchingRuleAttributeList omitted.

// se_MatchingRules omitted.

// se_ObjectFilter omitted.

// se_Objects omitted.

// se_ObjectTypeField omitted.

// se_ObjectTypeKey omitted.

// se_ObjectTypeKeyList omitted.

// se_ObjectTypeNames omitted.

// se_PhoneNumberList omitted.

// se_ProfileIdToBeMergedList omitted.

// se_Range omitted.

// se_requestValueList omitted.

// se_RuleBasedMatchingRequest omitted.

// se_S3ExportingConfig omitted.

// se_S3SourceProperties omitted.

// se_SalesforceSourceProperties omitted.

/**
 * serializeAws_restJson1ScheduledTriggerProperties
 */
const se_ScheduledTriggerProperties = (input: ScheduledTriggerProperties, context: __SerdeContext): any => {
  return take(input, {
    DataPullMode: [],
    FirstExecutionFrom: (_) => _.getTime() / 1_000,
    ScheduleEndTime: (_) => _.getTime() / 1_000,
    ScheduleExpression: [],
    ScheduleOffset: [],
    ScheduleStartTime: (_) => _.getTime() / 1_000,
    Timezone: [],
  });
};

// se_ServiceNowSourceProperties omitted.

// se_SourceConnectorProperties omitted.

// se_SourceFields omitted.

// se_SourceFlowConfig omitted.

// se_StandardIdentifierList omitted.

// se_TagMap omitted.

// se_Task omitted.

// se_TaskPropertiesMap omitted.

// se_Tasks omitted.

// se_Threshold omitted.

/**
 * serializeAws_restJson1TriggerConfig
 */
const se_TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return take(input, {
    TriggerProperties: (_) => se_TriggerProperties(_, context),
    TriggerType: [],
  });
};

/**
 * serializeAws_restJson1TriggerProperties
 */
const se_TriggerProperties = (input: TriggerProperties, context: __SerdeContext): any => {
  return take(input, {
    Scheduled: (_) => se_ScheduledTriggerProperties(_, context),
  });
};

// se_UpdateAddress omitted.

// se_UpdateAttributes omitted.

// se_ZendeskSourceProperties omitted.

// de_Address omitted.

// de_AddressList omitted.

// de_AppflowIntegrationWorkflowAttributes omitted.

// de_AppflowIntegrationWorkflowMetrics omitted.

/**
 * deserializeAws_restJson1AppflowIntegrationWorkflowStep
 */
const de_AppflowIntegrationWorkflowStep = (output: any, context: __SerdeContext): AppflowIntegrationWorkflowStep => {
  return take(output, {
    BatchRecordsEndTime: __expectString,
    BatchRecordsStartTime: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionMessage: __expectString,
    FlowName: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RecordsProcessed: __expectLong,
    Status: __expectString,
  }) as any;
};

// de_AttributeDetails omitted.

// de_AttributeItem omitted.

// de_AttributeList omitted.

// de_Attributes omitted.

// de_AttributeTypesSelector omitted.

/**
 * deserializeAws_restJson1AutoMerging
 */
const de_AutoMerging = (output: any, context: __SerdeContext): AutoMerging => {
  return take(output, {
    ConflictResolution: _json,
    Consolidation: _json,
    Enabled: __expectBoolean,
    MinAllowedConfidenceScoreForMerging: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1CalculatedAttributeDefinitionsList
 */
const de_CalculatedAttributeDefinitionsList = (
  output: any,
  context: __SerdeContext
): ListCalculatedAttributeDefinitionItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListCalculatedAttributeDefinitionItem(entry, context);
    });
  return retVal;
};

// de_CalculatedAttributesForProfileList omitted.

// de_Conditions omitted.

// de_ConflictResolution omitted.

// de_Consolidation omitted.

/**
 * deserializeAws_restJson1DestinationSummary
 */
const de_DestinationSummary = (output: any, context: __SerdeContext): DestinationSummary => {
  return take(output, {
    Status: __expectString,
    UnhealthySince: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Uri: __expectString,
  }) as any;
};

// de_DetectedProfileObjectType omitted.

// de_DetectedProfileObjectTypes omitted.

/**
 * deserializeAws_restJson1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): ListDomainItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListDomainItem(entry, context);
    });
  return retVal;
};

// de_DomainStats omitted.

// de_EmailList omitted.

/**
 * deserializeAws_restJson1EventStreamDestinationDetails
 */
const de_EventStreamDestinationDetails = (output: any, context: __SerdeContext): EventStreamDestinationDetails => {
  return take(output, {
    Message: __expectString,
    Status: __expectString,
    UnhealthySince: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Uri: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventStreamSummary
 */
const de_EventStreamSummary = (output: any, context: __SerdeContext): EventStreamSummary => {
  return take(output, {
    DestinationSummary: (_: any) => de_DestinationSummary(_, context),
    DomainName: __expectString,
    EventStreamArn: __expectString,
    EventStreamName: __expectString,
    State: __expectString,
    StoppedSince: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EventStreamSummaryList
 */
const de_EventStreamSummaryList = (output: any, context: __SerdeContext): EventStreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventStreamSummary(entry, context);
    });
  return retVal;
};

// de_ExportingConfig omitted.

// de_ExportingLocation omitted.

// de_FieldMap omitted.

// de_FieldNameList omitted.

// de_FoundByKeyValue omitted.

// de_foundByList omitted.

/**
 * deserializeAws_restJson1IdentityResolutionJob
 */
const de_IdentityResolutionJob = (output: any, context: __SerdeContext): IdentityResolutionJob => {
  return take(output, {
    DomainName: __expectString,
    ExportingLocation: _json,
    JobEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    JobStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobStats: _json,
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IdentityResolutionJobsList
 */
const de_IdentityResolutionJobsList = (output: any, context: __SerdeContext): IdentityResolutionJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentityResolutionJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegrationList
 */
const de_IntegrationList = (output: any, context: __SerdeContext): ListIntegrationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListIntegrationItem(entry, context);
    });
  return retVal;
};

// de_JobSchedule omitted.

// de_JobStats omitted.

// de_KeyMap omitted.

/**
 * deserializeAws_restJson1ListCalculatedAttributeDefinitionItem
 */
const de_ListCalculatedAttributeDefinitionItem = (
  output: any,
  context: __SerdeContext
): ListCalculatedAttributeDefinitionItem => {
  return take(output, {
    CalculatedAttributeName: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

// de_ListCalculatedAttributeForProfileItem omitted.

/**
 * deserializeAws_restJson1ListDomainItem
 */
const de_ListDomainItem = (output: any, context: __SerdeContext): ListDomainItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ListIntegrationItem
 */
const de_ListIntegrationItem = (output: any, context: __SerdeContext): ListIntegrationItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    IsUnstructured: __expectBoolean,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    ObjectTypeNames: _json,
    RoleArn: __expectString,
    Tags: _json,
    Uri: __expectString,
    WorkflowId: __expectString,
  }) as any;
};

// de_ListProfileObjectsItem omitted.

/**
 * deserializeAws_restJson1ListProfileObjectTypeItem
 */
const de_ListProfileObjectTypeItem = (output: any, context: __SerdeContext): ListProfileObjectTypeItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxAvailableProfileObjectCount: __expectInt32,
    MaxProfileObjectCount: __expectInt32,
    ObjectTypeName: __expectString,
    Tags: _json,
  }) as any;
};

// de_ListProfileObjectTypeTemplateItem omitted.

/**
 * deserializeAws_restJson1ListWorkflowsItem
 */
const de_ListWorkflowsItem = (output: any, context: __SerdeContext): ListWorkflowsItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDescription: __expectString,
    WorkflowId: __expectString,
    WorkflowType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MatchesList
 */
const de_MatchesList = (output: any, context: __SerdeContext): MatchItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MatchItem(entry, context);
    });
  return retVal;
};

// de_MatchIdList omitted.

// de_MatchingAttributes omitted.

// de_MatchingAttributesList omitted.

/**
 * deserializeAws_restJson1MatchingResponse
 */
const de_MatchingResponse = (output: any, context: __SerdeContext): MatchingResponse => {
  return take(output, {
    AutoMerging: (_: any) => de_AutoMerging(_, context),
    Enabled: __expectBoolean,
    ExportingConfig: _json,
    JobSchedule: _json,
  }) as any;
};

// de_MatchingRule omitted.

// de_MatchingRuleAttributeList omitted.

// de_MatchingRules omitted.

/**
 * deserializeAws_restJson1MatchItem
 */
const de_MatchItem = (output: any, context: __SerdeContext): MatchItem => {
  return take(output, {
    ConfidenceScore: __limitedParseDouble,
    MatchId: __expectString,
    ProfileIds: _json,
  }) as any;
};

// de_ObjectTypeField omitted.

// de_ObjectTypeKey omitted.

// de_ObjectTypeKeyList omitted.

// de_ObjectTypeNames omitted.

// de_PhoneNumberList omitted.

// de_Profile omitted.

// de_ProfileIdList omitted.

// de_ProfileList omitted.

// de_ProfileObjectList omitted.

/**
 * deserializeAws_restJson1ProfileObjectTypeList
 */
const de_ProfileObjectTypeList = (output: any, context: __SerdeContext): ListProfileObjectTypeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListProfileObjectTypeItem(entry, context);
    });
  return retVal;
};

// de_ProfileObjectTypeTemplateList omitted.

// de_Range omitted.

// de_requestValueList omitted.

// de_RuleBasedMatchingResponse omitted.

// de_S3ExportingConfig omitted.

// de_S3ExportingLocation omitted.

// de_StandardIdentifierList omitted.

// de_TagMap omitted.

// de_Threshold omitted.

// de_WorkflowAttributes omitted.

/**
 * deserializeAws_restJson1WorkflowList
 */
const de_WorkflowList = (output: any, context: __SerdeContext): ListWorkflowsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListWorkflowsItem(entry, context);
    });
  return retVal;
};

// de_WorkflowMetrics omitted.

/**
 * deserializeAws_restJson1WorkflowStepItem
 */
const de_WorkflowStepItem = (output: any, context: __SerdeContext): WorkflowStepItem => {
  return take(output, {
    AppflowIntegration: (_: any) => de_AppflowIntegrationWorkflowStep(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WorkflowStepsList
 */
const de_WorkflowStepsList = (output: any, context: __SerdeContext): WorkflowStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowStepItem(entry, context);
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

const _IH = "IncludeHidden";
const _MR = "MaxResults";
const _NT = "NextToken";
const _ih = "include-hidden";
const _mr = "max-results";
const _nt = "next-token";
const _tK = "tagKeys";
