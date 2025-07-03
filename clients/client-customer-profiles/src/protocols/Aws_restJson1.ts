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
  BatchGetCalculatedAttributeForProfileCommandInput,
  BatchGetCalculatedAttributeForProfileCommandOutput,
} from "../commands/BatchGetCalculatedAttributeForProfileCommand";
import { BatchGetProfileCommandInput, BatchGetProfileCommandOutput } from "../commands/BatchGetProfileCommand";
import {
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
} from "../commands/CreateCalculatedAttributeDefinitionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateDomainLayoutCommandInput, CreateDomainLayoutCommandOutput } from "../commands/CreateDomainLayoutCommand";
import { CreateEventStreamCommandInput, CreateEventStreamCommandOutput } from "../commands/CreateEventStreamCommand";
import { CreateEventTriggerCommandInput, CreateEventTriggerCommandOutput } from "../commands/CreateEventTriggerCommand";
import {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "../commands/CreateIntegrationWorkflowCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import {
  CreateSegmentDefinitionCommandInput,
  CreateSegmentDefinitionCommandOutput,
} from "../commands/CreateSegmentDefinitionCommand";
import {
  CreateSegmentEstimateCommandInput,
  CreateSegmentEstimateCommandOutput,
} from "../commands/CreateSegmentEstimateCommand";
import {
  CreateSegmentSnapshotCommandInput,
  CreateSegmentSnapshotCommandOutput,
} from "../commands/CreateSegmentSnapshotCommand";
import { CreateUploadJobCommandInput, CreateUploadJobCommandOutput } from "../commands/CreateUploadJobCommand";
import {
  DeleteCalculatedAttributeDefinitionCommandInput,
  DeleteCalculatedAttributeDefinitionCommandOutput,
} from "../commands/DeleteCalculatedAttributeDefinitionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteDomainLayoutCommandInput, DeleteDomainLayoutCommandOutput } from "../commands/DeleteDomainLayoutCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "../commands/DeleteEventStreamCommand";
import { DeleteEventTriggerCommandInput, DeleteEventTriggerCommandOutput } from "../commands/DeleteEventTriggerCommand";
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
import {
  DeleteSegmentDefinitionCommandInput,
  DeleteSegmentDefinitionCommandOutput,
} from "../commands/DeleteSegmentDefinitionCommand";
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
import { GetDomainLayoutCommandInput, GetDomainLayoutCommandOutput } from "../commands/GetDomainLayoutCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "../commands/GetEventStreamCommand";
import { GetEventTriggerCommandInput, GetEventTriggerCommandOutput } from "../commands/GetEventTriggerCommand";
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
import {
  GetSegmentDefinitionCommandInput,
  GetSegmentDefinitionCommandOutput,
} from "../commands/GetSegmentDefinitionCommand";
import { GetSegmentEstimateCommandInput, GetSegmentEstimateCommandOutput } from "../commands/GetSegmentEstimateCommand";
import {
  GetSegmentMembershipCommandInput,
  GetSegmentMembershipCommandOutput,
} from "../commands/GetSegmentMembershipCommand";
import { GetSegmentSnapshotCommandInput, GetSegmentSnapshotCommandOutput } from "../commands/GetSegmentSnapshotCommand";
import { GetSimilarProfilesCommandInput, GetSimilarProfilesCommandOutput } from "../commands/GetSimilarProfilesCommand";
import { GetUploadJobCommandInput, GetUploadJobCommandOutput } from "../commands/GetUploadJobCommand";
import { GetUploadJobPathCommandInput, GetUploadJobPathCommandOutput } from "../commands/GetUploadJobPathCommand";
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
import { ListDomainLayoutsCommandInput, ListDomainLayoutsCommandOutput } from "../commands/ListDomainLayoutsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListEventStreamsCommandInput, ListEventStreamsCommandOutput } from "../commands/ListEventStreamsCommand";
import { ListEventTriggersCommandInput, ListEventTriggersCommandOutput } from "../commands/ListEventTriggersCommand";
import {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "../commands/ListIdentityResolutionJobsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "../commands/ListIntegrationsCommand";
import {
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput,
} from "../commands/ListObjectTypeAttributesCommand";
import {
  ListProfileAttributeValuesCommandInput,
  ListProfileAttributeValuesCommandOutput,
} from "../commands/ListProfileAttributeValuesCommand";
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
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput,
} from "../commands/ListSegmentDefinitionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUploadJobsCommandInput, ListUploadJobsCommandOutput } from "../commands/ListUploadJobsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "../commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "../commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "../commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "../commands/SearchProfilesCommand";
import { StartUploadJobCommandInput, StartUploadJobCommandOutput } from "../commands/StartUploadJobCommand";
import { StopUploadJobCommandInput, StopUploadJobCommandOutput } from "../commands/StopUploadJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
} from "../commands/UpdateCalculatedAttributeDefinitionCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateDomainLayoutCommandInput, UpdateDomainLayoutCommandOutput } from "../commands/UpdateDomainLayoutCommand";
import { UpdateEventTriggerCommandInput, UpdateEventTriggerCommandOutput } from "../commands/UpdateEventTriggerCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { CustomerProfilesServiceException as __BaseException } from "../models/CustomerProfilesServiceException";
import {
  AccessDeniedException,
  AdditionalSearchKey,
  Address,
  AddressDimension,
  AppflowIntegration,
  AppflowIntegrationWorkflowStep,
  AttributeDetails,
  AttributeDimension,
  AttributeItem,
  AttributeTypesSelector,
  AutoMerging,
  BadRequestException,
  Batch,
  CalculatedAttributeDimension,
  CalculatedAttributeValue,
  ConditionOverrides,
  Conditions,
  ConflictResolution,
  ConnectorOperator,
  Consolidation,
  DateDimension,
  DestinationSummary,
  Dimension,
  EventStreamDestinationDetails,
  EventStreamSummary,
  EventTriggerCondition,
  EventTriggerDimension,
  EventTriggerLimits,
  EventTriggerSummaryItem,
  ExportingConfig,
  ExtraLengthValueProfileDimension,
  FieldSourceProfileIds,
  Filter,
  FilterAttributeDimension,
  FilterDimension,
  FilterGroup,
  FlowDefinition,
  Group,
  IdentityResolutionJob,
  IncrementalPullConfig,
  IntegrationConfig,
  InternalServerException,
  JobSchedule,
  LayoutItem,
  ListCalculatedAttributeDefinitionItem,
  ListCalculatedAttributeForProfileItem,
  ListDomainItem,
  ListIntegrationItem,
  ListObjectTypeAttributeItem,
  ListProfileObjectTypeItem,
  ListWorkflowsItem,
  MarketoSourceProperties,
  MatchingRequest,
  MatchingResponse,
  MatchingRule,
  MatchItem,
  ObjectAttribute,
  ObjectFilter,
  ObjectTypeField,
  ObjectTypeKey,
  OperatorPropertiesKeys,
  Period,
  ProfileAttributes,
  ProfileDimension,
  ProfileQueryFailures,
  ProfileQueryResult,
  Range,
  RangeOverride,
  ResourceNotFoundException,
  ResultsSummary,
  RuleBasedMatchingRequest,
  S3ExportingConfig,
  S3SourceProperties,
  SalesforceSourceProperties,
  ScheduledTriggerProperties,
  SegmentDefinitionItem,
  SegmentGroup,
  SegmentGroupStructure,
  ServiceNowSourceProperties,
  SourceConnectorProperties,
  SourceFlowConfig,
  SourceSegment,
  StandardIdentifier,
  Task,
  Threshold,
  ThrottlingException,
  TriggerConfig,
  TriggerProperties,
  UploadJobItem,
  ValueRange,
  WorkflowStepItem,
  ZendeskSourceProperties,
} from "../models/models_0";
import { UpdateAddress } from "../models/models_1";

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
 * serializeAws_restJson1BatchGetCalculatedAttributeForProfileCommand
 */
export const se_BatchGetCalculatedAttributeForProfileCommand = async (
  input: BatchGetCalculatedAttributeForProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}/batch-get-for-profiles");
  b.p("CalculatedAttributeName", () => input.CalculatedAttributeName!, "{CalculatedAttributeName}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConditionOverrides: (_) => _json(_),
      ProfileIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetProfileCommand
 */
export const se_BatchGetProfileCommand = async (
  input: BatchGetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/batch-get-profiles");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileIds: (_) => _json(_),
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
      Filter: (_) => _json(_),
      Statistic: [],
      Tags: (_) => _json(_),
      UseHistoricalData: [],
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
 * serializeAws_restJson1CreateDomainLayoutCommand
 */
export const se_CreateDomainLayoutCommand = async (
  input: CreateDomainLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/layouts/{LayoutDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("LayoutDefinitionName", () => input.LayoutDefinitionName!, "{LayoutDefinitionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DisplayName: [],
      IsDefault: [],
      Layout: [],
      LayoutType: [],
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
 * serializeAws_restJson1CreateEventTriggerCommand
 */
export const se_CreateEventTriggerCommand = async (
  input: CreateEventTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/event-triggers/{EventTriggerName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventTriggerName", () => input.EventTriggerName!, "{EventTriggerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      EventTriggerConditions: (_) => _json(_),
      EventTriggerLimits: (_) => _json(_),
      ObjectTypeName: [],
      SegmentFilter: [],
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1CreateSegmentDefinitionCommand
 */
export const se_CreateSegmentDefinitionCommand = async (
  input: CreateSegmentDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DisplayName: [],
      SegmentGroups: (_) => se_SegmentGroup(_, context),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSegmentEstimateCommand
 */
export const se_CreateSegmentEstimateCommand = async (
  input: CreateSegmentEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/segment-estimates");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SegmentQuery: (_) => se_SegmentGroupStructure(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSegmentSnapshotCommand
 */
export const se_CreateSegmentSnapshotCommand = async (
  input: CreateSegmentSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataFormat: [],
      DestinationUri: [],
      EncryptionKey: [],
      RoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUploadJobCommand
 */
export const se_CreateUploadJobCommand = async (
  input: CreateUploadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/upload-jobs");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataExpiry: [],
      DisplayName: [],
      Fields: (_) => _json(_),
      UniqueKey: [],
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
 * serializeAws_restJson1DeleteDomainLayoutCommand
 */
export const se_DeleteDomainLayoutCommand = async (
  input: DeleteDomainLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/layouts/{LayoutDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("LayoutDefinitionName", () => input.LayoutDefinitionName!, "{LayoutDefinitionName}", false);
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
 * serializeAws_restJson1DeleteEventTriggerCommand
 */
export const se_DeleteEventTriggerCommand = async (
  input: DeleteEventTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-triggers/{EventTriggerName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventTriggerName", () => input.EventTriggerName!, "{EventTriggerName}", false);
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
 * serializeAws_restJson1DeleteSegmentDefinitionCommand
 */
export const se_DeleteSegmentDefinitionCommand = async (
  input: DeleteSegmentDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
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
 * serializeAws_restJson1GetDomainLayoutCommand
 */
export const se_GetDomainLayoutCommand = async (
  input: GetDomainLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/layouts/{LayoutDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("LayoutDefinitionName", () => input.LayoutDefinitionName!, "{LayoutDefinitionName}", false);
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
 * serializeAws_restJson1GetEventTriggerCommand
 */
export const se_GetEventTriggerCommand = async (
  input: GetEventTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-triggers/{EventTriggerName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventTriggerName", () => input.EventTriggerName!, "{EventTriggerName}", false);
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
 * serializeAws_restJson1GetSegmentDefinitionCommand
 */
export const se_GetSegmentDefinitionCommand = async (
  input: GetSegmentDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSegmentEstimateCommand
 */
export const se_GetSegmentEstimateCommand = async (
  input: GetSegmentEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/segment-estimates/{EstimateId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EstimateId", () => input.EstimateId!, "{EstimateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSegmentMembershipCommand
 */
export const se_GetSegmentMembershipCommand = async (
  input: GetSegmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/segments/{SegmentDefinitionName}/membership");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProfileIds: [, (_) => _json(_), `ProfileIds`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSegmentSnapshotCommand
 */
export const se_GetSegmentSnapshotCommand = async (
  input: GetSegmentSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots/{SnapshotId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("SegmentDefinitionName", () => input.SegmentDefinitionName!, "{SegmentDefinitionName}", false);
  b.p("SnapshotId", () => input.SnapshotId!, "{SnapshotId}", false);
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
 * serializeAws_restJson1GetUploadJobCommand
 */
export const se_GetUploadJobCommand = async (
  input: GetUploadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/upload-jobs/{JobId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUploadJobPathCommand
 */
export const se_GetUploadJobPathCommand = async (
  input: GetUploadJobPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/upload-jobs/{JobId}/path");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1ListDomainLayoutsCommand
 */
export const se_ListDomainLayoutsCommand = async (
  input: ListDomainLayoutsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/layouts");
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
 * serializeAws_restJson1ListEventTriggersCommand
 */
export const se_ListEventTriggersCommand = async (
  input: ListEventTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/event-triggers");
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
 * serializeAws_restJson1ListObjectTypeAttributesCommand
 */
export const se_ListObjectTypeAttributesCommand = async (
  input: ListObjectTypeAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/object-types/{ObjectTypeName}/attributes");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("ObjectTypeName", () => input.ObjectTypeName!, "{ObjectTypeName}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileAttributeValuesCommand
 */
export const se_ListProfileAttributeValuesCommand = async (
  input: ListProfileAttributeValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/profile-attributes/{AttributeName}/values");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("AttributeName", () => input.AttributeName!, "{AttributeName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1ListSegmentDefinitionsCommand
 */
export const se_ListSegmentDefinitionsCommand = async (
  input: ListSegmentDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/segment-definitions");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
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
 * serializeAws_restJson1ListUploadJobsCommand
 */
export const se_ListUploadJobsCommand = async (
  input: ListUploadJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/upload-jobs");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
      EventTriggerNames: (_) => _json(_),
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
 * serializeAws_restJson1StartUploadJobCommand
 */
export const se_StartUploadJobCommand = async (
  input: StartUploadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/upload-jobs/{JobId}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopUploadJobCommand
 */
export const se_StopUploadJobCommand = async (
  input: StopUploadJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{DomainName}/upload-jobs/{JobId}/stop");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
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
 * serializeAws_restJson1UpdateDomainLayoutCommand
 */
export const se_UpdateDomainLayoutCommand = async (
  input: UpdateDomainLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/layouts/{LayoutDefinitionName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("LayoutDefinitionName", () => input.LayoutDefinitionName!, "{LayoutDefinitionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DisplayName: [],
      IsDefault: [],
      Layout: [],
      LayoutType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventTriggerCommand
 */
export const se_UpdateEventTriggerCommand = async (
  input: UpdateEventTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{DomainName}/event-triggers/{EventTriggerName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("EventTriggerName", () => input.EventTriggerName!, "{EventTriggerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      EventTriggerConditions: (_) => _json(_),
      EventTriggerLimits: (_) => _json(_),
      ObjectTypeName: [],
      SegmentFilter: [],
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
 * deserializeAws_restJson1BatchGetCalculatedAttributeForProfileCommand
 */
export const de_BatchGetCalculatedAttributeForProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCalculatedAttributeForProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CalculatedAttributeValues: (_) => de_CalculatedAttributeValueList(_, context),
    ConditionOverrides: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetProfileCommand
 */
export const de_BatchGetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Profiles: _json,
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
    Filter: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Readiness: _json,
    Statistic: __expectString,
    Status: __expectString,
    Tags: _json,
    UseHistoricalData: __expectBoolean,
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
 * deserializeAws_restJson1CreateDomainLayoutCommand
 */
export const de_CreateDomainLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    IsDefault: __expectBoolean,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Layout: __expectString,
    LayoutDefinitionName: __expectString,
    LayoutType: __expectString,
    Tags: _json,
    Version: __expectString,
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
 * deserializeAws_restJson1CreateEventTriggerCommand
 */
export const de_CreateEventTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTriggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTriggerConditions: _json,
    EventTriggerLimits: _json,
    EventTriggerName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    SegmentFilter: __expectString,
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
 * deserializeAws_restJson1CreateSegmentDefinitionCommand
 */
export const de_CreateSegmentDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CreatedAt`],
    Description: [, __expectString, `Description`],
    DisplayName: [, __expectString, `DisplayName`],
    SegmentDefinitionArn: [, __expectString, `SegmentDefinitionArn`],
    SegmentDefinitionName: [, __expectString, `SegmentDefinitionName`],
    Tags: [, _json, `Tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSegmentEstimateCommand
 */
export const de_CreateSegmentEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentEstimateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainName: __expectString,
    EstimateId: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1CreateSegmentSnapshotCommand
 */
export const de_CreateSegmentSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SnapshotId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUploadJobCommand
 */
export const de_CreateUploadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobId: [, __expectString, `JobId`],
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
 * deserializeAws_restJson1DeleteDomainLayoutCommand
 */
export const de_DeleteDomainLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainLayoutCommandOutput> => {
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
 * deserializeAws_restJson1DeleteEventTriggerCommand
 */
export const de_DeleteEventTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTriggerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSegmentDefinitionCommand
 */
export const de_DeleteSegmentDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: [, __expectString, `Message`],
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
    Filter: _json,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Readiness: _json,
    Statistic: __expectString,
    Status: __expectString,
    Tags: _json,
    UseHistoricalData: __expectBoolean,
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
    LastObjectTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
 * deserializeAws_restJson1GetDomainLayoutCommand
 */
export const de_GetDomainLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    IsDefault: __expectBoolean,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Layout: __expectString,
    LayoutDefinitionName: __expectString,
    LayoutType: __expectString,
    Tags: _json,
    Version: __expectString,
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
 * deserializeAws_restJson1GetEventTriggerCommand
 */
export const de_GetEventTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTriggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTriggerConditions: _json,
    EventTriggerLimits: _json,
    EventTriggerName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    SegmentFilter: __expectString,
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
    EventTriggerNames: _json,
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
 * deserializeAws_restJson1GetSegmentDefinitionCommand
 */
export const de_GetSegmentDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CreatedAt`],
    Description: [, __expectString, `Description`],
    DisplayName: [, __expectString, `DisplayName`],
    SegmentDefinitionArn: [, __expectString, `SegmentDefinitionArn`],
    SegmentDefinitionName: [, __expectString, `SegmentDefinitionName`],
    SegmentGroups: [, (_) => de_SegmentGroup(_, context), `SegmentGroups`],
    Tags: [, _json, `Tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentEstimateCommand
 */
export const de_GetSegmentEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentEstimateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainName: __expectString,
    Estimate: __expectString,
    EstimateId: __expectString,
    Message: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentMembershipCommand
 */
export const de_GetSegmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Failures: [, (_) => de_Failures(_, context), `Failures`],
    Profiles: [, (_) => de_Profiles(_, context), `Profiles`],
    SegmentDefinitionName: [, __expectString, `SegmentDefinitionName`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentSnapshotCommand
 */
export const de_GetSegmentSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataFormat: __expectString,
    DestinationUri: __expectString,
    EncryptionKey: __expectString,
    RoleArn: __expectString,
    SnapshotId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
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
 * deserializeAws_restJson1GetUploadJobCommand
 */
export const de_GetUploadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompletedAt: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CompletedAt`],
    CreatedAt: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CreatedAt`],
    DataExpiry: [, __expectInt32, `DataExpiry`],
    DisplayName: [, __expectString, `DisplayName`],
    Fields: [, _json, `Fields`],
    JobId: [, __expectString, `JobId`],
    ResultsSummary: [, (_) => de_ResultsSummary(_, context), `ResultsSummary`],
    Status: [, __expectString, `Status`],
    StatusReason: [, __expectString, `StatusReason`],
    UniqueKey: [, __expectString, `UniqueKey`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUploadJobPathCommand
 */
export const de_GetUploadJobPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadJobPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClientToken: [, __expectString, `ClientToken`],
    Url: [, __expectString, `Url`],
    ValidUntil: [, (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `ValidUntil`],
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
    Items: (_) => de_CalculatedAttributesForProfileList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainLayoutsCommand
 */
export const de_ListDomainLayoutsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainLayoutsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_LayoutList(_, context),
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
 * deserializeAws_restJson1ListEventTriggersCommand
 */
export const de_ListEventTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTriggersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_EventTriggerSummaryList(_, context),
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
 * deserializeAws_restJson1ListObjectTypeAttributesCommand
 */
export const de_ListObjectTypeAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObjectTypeAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ListObjectTypeAttributesList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileAttributeValuesCommand
 */
export const de_ListProfileAttributeValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileAttributeValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttributeName: __expectString,
    DomainName: __expectString,
    Items: _json,
  });
  Object.assign(contents, doc);
  map(contents, {
    StatusCode: [, output.statusCode],
  });
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
 * deserializeAws_restJson1ListSegmentDefinitionsCommand
 */
export const de_ListSegmentDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de_SegmentDefinitionsList(_, context), `Items`],
    NextToken: [, __expectString, `NextToken`],
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
 * deserializeAws_restJson1ListUploadJobsCommand
 */
export const de_ListUploadJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: [, (_) => de_UploadJobsList(_, context), `Items`],
    NextToken: [, __expectString, `NextToken`],
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
    EventTriggerNames: _json,
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
 * deserializeAws_restJson1StartUploadJobCommand
 */
export const de_StartUploadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUploadJobCommandOutput> => {
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
 * deserializeAws_restJson1StopUploadJobCommand
 */
export const de_StopUploadJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopUploadJobCommandOutput> => {
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
    Readiness: _json,
    Statistic: __expectString,
    Status: __expectString,
    Tags: _json,
    UseHistoricalData: __expectBoolean,
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
 * deserializeAws_restJson1UpdateDomainLayoutCommand
 */
export const de_UpdateDomainLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    IsDefault: __expectBoolean,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Layout: __expectString,
    LayoutDefinitionName: __expectString,
    LayoutType: __expectString,
    Tags: _json,
    Version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventTriggerCommand
 */
export const de_UpdateEventTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventTriggerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTriggerConditions: _json,
    EventTriggerLimits: _json,
    EventTriggerName: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    SegmentFilter: __expectString,
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

/**
 * serializeAws_restJson1AddressDimension
 */
const se_AddressDimension = (input: AddressDimension, context: __SerdeContext): any => {
  return take(input, {
    City: [, (_) => se_ProfileDimension(_, context), `City`],
    Country: [, (_) => se_ProfileDimension(_, context), `Country`],
    County: [, (_) => se_ProfileDimension(_, context), `County`],
    PostalCode: [, (_) => se_ProfileDimension(_, context), `PostalCode`],
    Province: [, (_) => se_ProfileDimension(_, context), `Province`],
    State: [, (_) => se_ProfileDimension(_, context), `State`],
  });
};

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

/**
 * serializeAws_restJson1AttributeDimension
 */
const se_AttributeDimension = (input: AttributeDimension, context: __SerdeContext): any => {
  return take(input, {
    DimensionType: [, , `DimensionType`],
    Values: [, _json, `Values`],
  });
};

// se_AttributeItem omitted.

// se_AttributeList omitted.

// se_AttributeMap omitted.

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

// se_BatchGetCalculatedAttributeForProfileIdList omitted.

// se_BatchGetProfileIdList omitted.

/**
 * serializeAws_restJson1CalculatedAttributeDimension
 */
const se_CalculatedAttributeDimension = (input: CalculatedAttributeDimension, context: __SerdeContext): any => {
  return take(input, {
    ConditionOverrides: [, _json, `ConditionOverrides`],
    DimensionType: [, , `DimensionType`],
    Values: [, _json, `Values`],
  });
};

/**
 * serializeAws_restJson1CalculatedCustomAttributes
 */
const se_CalculatedCustomAttributes = (
  input: Record<string, CalculatedAttributeDimension>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CalculatedAttributeDimension(value, context);
    return acc;
  }, {});
};

// se_ConditionOverrides omitted.

// se_Conditions omitted.

// se_ConflictResolution omitted.

// se_ConnectorOperator omitted.

// se_Consolidation omitted.

/**
 * serializeAws_restJson1CustomAttributes
 */
const se_CustomAttributes = (input: Record<string, AttributeDimension>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeDimension(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DateDimension
 */
const se_DateDimension = (input: DateDimension, context: __SerdeContext): any => {
  return take(input, {
    DimensionType: [, , `DimensionType`],
    Values: [, _json, `Values`],
  });
};

// se_DateValues omitted.

/**
 * serializeAws_restJson1Dimension
 */
const se_Dimension = (input: Dimension, context: __SerdeContext): any => {
  return Dimension.visit(input, {
    CalculatedAttributes: (value) => ({ CalculatedAttributes: se_CalculatedCustomAttributes(value, context) }),
    ProfileAttributes: (value) => ({ ProfileAttributes: se_ProfileAttributes(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1DimensionList
 */
const se_DimensionList = (input: Dimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Dimension(entry, context);
    });
};

// se_EmailList omitted.

// se_EventTriggerCondition omitted.

// se_EventTriggerConditions omitted.

// se_EventTriggerDimension omitted.

// se_EventTriggerDimensions omitted.

// se_EventTriggerLimits omitted.

// se_EventTriggerNames omitted.

// se_EventTriggerValues omitted.

// se_ExportingConfig omitted.

/**
 * serializeAws_restJson1ExtraLengthValueProfileDimension
 */
const se_ExtraLengthValueProfileDimension = (input: ExtraLengthValueProfileDimension, context: __SerdeContext): any => {
  return take(input, {
    DimensionType: [, , `DimensionType`],
    Values: [, _json, `Values`],
  });
};

// se_ExtraLengthValues omitted.

// se_FieldMap omitted.

// se_FieldNameList omitted.

// se_FieldSourceProfileIds omitted.

// se_Filter omitted.

// se_FilterAttributeDimension omitted.

// se_FilterDimension omitted.

// se_FilterDimensionList omitted.

// se_FilterGroup omitted.

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

/**
 * serializeAws_restJson1Group
 */
const se_Group = (input: Group, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: [, (_) => se_DimensionList(_, context), `Dimensions`],
    SourceSegments: [, (_) => se_SourceSegmentList(_, context), `SourceSegments`],
    SourceType: [, , `SourceType`],
    Type: [, , `Type`],
  });
};

// se_GroupList omitted.

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

// se_ObjectAttribute omitted.

// se_ObjectAttributes omitted.

// se_ObjectFilter omitted.

// se_Objects omitted.

// se_ObjectTypeField omitted.

// se_ObjectTypeKey omitted.

// se_ObjectTypeKeyList omitted.

// se_ObjectTypeNames omitted.

// se_Period omitted.

// se_Periods omitted.

// se_PhoneNumberList omitted.

/**
 * serializeAws_restJson1ProfileAttributes
 */
const se_ProfileAttributes = (input: ProfileAttributes, context: __SerdeContext): any => {
  return take(input, {
    AccountNumber: [, (_) => se_ProfileDimension(_, context), `AccountNumber`],
    AdditionalInformation: [, (_) => se_ExtraLengthValueProfileDimension(_, context), `AdditionalInformation`],
    Address: [, (_) => se_AddressDimension(_, context), `Address`],
    Attributes: [, (_) => se_CustomAttributes(_, context), `Attributes`],
    BillingAddress: [, (_) => se_AddressDimension(_, context), `BillingAddress`],
    BirthDate: [, (_) => se_DateDimension(_, context), `BirthDate`],
    BusinessEmailAddress: [, (_) => se_ProfileDimension(_, context), `BusinessEmailAddress`],
    BusinessName: [, (_) => se_ProfileDimension(_, context), `BusinessName`],
    BusinessPhoneNumber: [, (_) => se_ProfileDimension(_, context), `BusinessPhoneNumber`],
    EmailAddress: [, (_) => se_ProfileDimension(_, context), `EmailAddress`],
    FirstName: [, (_) => se_ProfileDimension(_, context), `FirstName`],
    GenderString: [, (_) => se_ProfileDimension(_, context), `GenderString`],
    HomePhoneNumber: [, (_) => se_ProfileDimension(_, context), `HomePhoneNumber`],
    LastName: [, (_) => se_ProfileDimension(_, context), `LastName`],
    MailingAddress: [, (_) => se_AddressDimension(_, context), `MailingAddress`],
    MiddleName: [, (_) => se_ProfileDimension(_, context), `MiddleName`],
    MobilePhoneNumber: [, (_) => se_ProfileDimension(_, context), `MobilePhoneNumber`],
    PartyTypeString: [, (_) => se_ProfileDimension(_, context), `PartyTypeString`],
    PersonalEmailAddress: [, (_) => se_ProfileDimension(_, context), `PersonalEmailAddress`],
    PhoneNumber: [, (_) => se_ProfileDimension(_, context), `PhoneNumber`],
    ShippingAddress: [, (_) => se_AddressDimension(_, context), `ShippingAddress`],
  });
};

/**
 * serializeAws_restJson1ProfileDimension
 */
const se_ProfileDimension = (input: ProfileDimension, context: __SerdeContext): any => {
  return take(input, {
    DimensionType: [, , `DimensionType`],
    Values: [, _json, `Values`],
  });
};

// se_ProfileIds omitted.

// se_ProfileIdToBeMergedList omitted.

// se_Range omitted.

// se_RangeOverride omitted.

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

/**
 * serializeAws_restJson1SegmentGroup
 */
const se_SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return take(input, {
    Groups: [, (_) => se_SegmentGroupList(_, context), `Groups`],
    Include: [, , `Include`],
  });
};

/**
 * serializeAws_restJson1SegmentGroupList
 */
const se_SegmentGroupList = (input: Group[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Group(entry, context);
    });
};

/**
 * serializeAws_restJson1SegmentGroupStructure
 */
const se_SegmentGroupStructure = (input: SegmentGroupStructure, context: __SerdeContext): any => {
  return take(input, {
    Groups: (_) => se_SegmentGroupList(_, context),
    Include: [],
  });
};

// se_ServiceNowSourceProperties omitted.

// se_SourceConnectorProperties omitted.

// se_SourceFields omitted.

// se_SourceFlowConfig omitted.

/**
 * serializeAws_restJson1SourceSegment
 */
const se_SourceSegment = (input: SourceSegment, context: __SerdeContext): any => {
  return take(input, {
    SegmentDefinitionName: [, , `SegmentDefinitionName`],
  });
};

/**
 * serializeAws_restJson1SourceSegmentList
 */
const se_SourceSegmentList = (input: SourceSegment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceSegment(entry, context);
    });
};

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

// se_ValueList omitted.

// se_ValueRange omitted.

// se_Values omitted.

// se_ZendeskSourceProperties omitted.

// de_Address omitted.

/**
 * deserializeAws_restJson1AddressDimension
 */
const de_AddressDimension = (output: any, context: __SerdeContext): AddressDimension => {
  return take(output, {
    City: [, (_: any) => de_ProfileDimension(_, context), `City`],
    Country: [, (_: any) => de_ProfileDimension(_, context), `Country`],
    County: [, (_: any) => de_ProfileDimension(_, context), `County`],
    PostalCode: [, (_: any) => de_ProfileDimension(_, context), `PostalCode`],
    Province: [, (_: any) => de_ProfileDimension(_, context), `Province`],
    State: [, (_: any) => de_ProfileDimension(_, context), `State`],
  }) as any;
};

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

/**
 * deserializeAws_restJson1AttributeDimension
 */
const de_AttributeDimension = (output: any, context: __SerdeContext): AttributeDimension => {
  return take(output, {
    DimensionType: [, __expectString, `DimensionType`],
    Values: [, _json, `Values`],
  }) as any;
};

// de_AttributeItem omitted.

// de_AttributeList omitted.

// de_AttributeMap omitted.

// de_Attributes omitted.

// de_AttributeTypesSelector omitted.

// de_AttributeValueItem omitted.

// de_AttributeValueItemList omitted.

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

// de_BatchGetCalculatedAttributeForProfileError omitted.

// de_BatchGetCalculatedAttributeForProfileErrorList omitted.

// de_BatchGetProfileError omitted.

// de_BatchGetProfileErrorList omitted.

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

/**
 * deserializeAws_restJson1CalculatedAttributeDimension
 */
const de_CalculatedAttributeDimension = (output: any, context: __SerdeContext): CalculatedAttributeDimension => {
  return take(output, {
    ConditionOverrides: [, _json, `ConditionOverrides`],
    DimensionType: [, __expectString, `DimensionType`],
    Values: [, _json, `Values`],
  }) as any;
};

/**
 * deserializeAws_restJson1CalculatedAttributesForProfileList
 */
const de_CalculatedAttributesForProfileList = (
  output: any,
  context: __SerdeContext
): ListCalculatedAttributeForProfileItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListCalculatedAttributeForProfileItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CalculatedAttributeValue
 */
const de_CalculatedAttributeValue = (output: any, context: __SerdeContext): CalculatedAttributeValue => {
  return take(output, {
    CalculatedAttributeName: __expectString,
    DisplayName: __expectString,
    IsDataPartial: __expectString,
    LastObjectTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProfileId: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CalculatedAttributeValueList
 */
const de_CalculatedAttributeValueList = (output: any, context: __SerdeContext): CalculatedAttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CalculatedAttributeValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CalculatedCustomAttributes
 */
const de_CalculatedCustomAttributes = (
  output: any,
  context: __SerdeContext
): Record<string, CalculatedAttributeDimension> => {
  return Object.entries(output).reduce(
    (acc: Record<string, CalculatedAttributeDimension>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_CalculatedAttributeDimension(value, context);
      return acc;
    },
    {} as Record<string, CalculatedAttributeDimension>
  );
};

// de_ConditionOverrides omitted.

// de_Conditions omitted.

// de_ConflictResolution omitted.

// de_Consolidation omitted.

/**
 * deserializeAws_restJson1CustomAttributes
 */
const de_CustomAttributes = (output: any, context: __SerdeContext): Record<string, AttributeDimension> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeDimension>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeDimension(value, context);
    return acc;
  }, {} as Record<string, AttributeDimension>);
};

/**
 * deserializeAws_restJson1DateDimension
 */
const de_DateDimension = (output: any, context: __SerdeContext): DateDimension => {
  return take(output, {
    DimensionType: [, __expectString, `DimensionType`],
    Values: [, _json, `Values`],
  }) as any;
};

// de_DateValues omitted.

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
 * deserializeAws_restJson1Dimension
 */
const de_Dimension = (output: any, context: __SerdeContext): Dimension => {
  if (output.CalculatedAttributes != null) {
    return {
      CalculatedAttributes: de_CalculatedCustomAttributes(output.CalculatedAttributes, context),
    };
  }
  if (output.ProfileAttributes != null) {
    return {
      ProfileAttributes: de_ProfileAttributes(output.ProfileAttributes, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DimensionList
 */
const de_DimensionList = (output: any, context: __SerdeContext): Dimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Dimension(__expectUnion(entry), context);
    });
  return retVal;
};

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

// de_EventTriggerCondition omitted.

// de_EventTriggerConditions omitted.

// de_EventTriggerDimension omitted.

// de_EventTriggerDimensions omitted.

// de_EventTriggerLimits omitted.

// de_EventTriggerNames omitted.

/**
 * deserializeAws_restJson1EventTriggerSummaryItem
 */
const de_EventTriggerSummaryItem = (output: any, context: __SerdeContext): EventTriggerSummaryItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTriggerName: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectTypeName: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EventTriggerSummaryList
 */
const de_EventTriggerSummaryList = (output: any, context: __SerdeContext): EventTriggerSummaryItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventTriggerSummaryItem(entry, context);
    });
  return retVal;
};

// de_EventTriggerValues omitted.

// de_ExportingConfig omitted.

// de_ExportingLocation omitted.

/**
 * deserializeAws_restJson1ExtraLengthValueProfileDimension
 */
const de_ExtraLengthValueProfileDimension = (
  output: any,
  context: __SerdeContext
): ExtraLengthValueProfileDimension => {
  return take(output, {
    DimensionType: [, __expectString, `DimensionType`],
    Values: [, _json, `Values`],
  }) as any;
};

// de_ExtraLengthValues omitted.

/**
 * deserializeAws_restJson1Failures
 */
const de_Failures = (output: any, context: __SerdeContext): ProfileQueryFailures[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileQueryFailures(entry, context);
    });
  return retVal;
};

// de_FieldMap omitted.

// de_FieldNameList omitted.

// de_Filter omitted.

// de_FilterAttributeDimension omitted.

// de_FilterDimension omitted.

// de_FilterDimensionList omitted.

// de_FilterGroup omitted.

// de_FoundByKeyValue omitted.

// de_foundByList omitted.

/**
 * deserializeAws_restJson1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return take(output, {
    Dimensions: [, (_: any) => de_DimensionList(_, context), `Dimensions`],
    SourceSegments: [, (_: any) => de_SourceSegmentList(_, context), `SourceSegments`],
    SourceType: [, __expectString, `SourceType`],
    Type: [, __expectString, `Type`],
  }) as any;
};

// de_GroupList omitted.

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
 * deserializeAws_restJson1LayoutItem
 */
const de_LayoutItem = (output: any, context: __SerdeContext): LayoutItem => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    IsDefault: __expectBoolean,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LayoutDefinitionName: __expectString,
    LayoutType: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LayoutList
 */
const de_LayoutList = (output: any, context: __SerdeContext): LayoutItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LayoutItem(entry, context);
    });
  return retVal;
};

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
    Status: __expectString,
    Tags: _json,
    UseHistoricalData: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ListCalculatedAttributeForProfileItem
 */
const de_ListCalculatedAttributeForProfileItem = (
  output: any,
  context: __SerdeContext
): ListCalculatedAttributeForProfileItem => {
  return take(output, {
    CalculatedAttributeName: __expectString,
    DisplayName: __expectString,
    IsDataPartial: __expectString,
    LastObjectTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __expectString,
  }) as any;
};

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
    EventTriggerNames: _json,
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

/**
 * deserializeAws_restJson1ListObjectTypeAttributeItem
 */
const de_ListObjectTypeAttributeItem = (output: any, context: __SerdeContext): ListObjectTypeAttributeItem => {
  return take(output, {
    AttributeName: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ListObjectTypeAttributesList
 */
const de_ListObjectTypeAttributesList = (output: any, context: __SerdeContext): ListObjectTypeAttributeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListObjectTypeAttributeItem(entry, context);
    });
  return retVal;
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

// de_ObjectAttribute omitted.

// de_ObjectAttributes omitted.

// de_ObjectTypeField omitted.

// de_ObjectTypeKey omitted.

// de_ObjectTypeKeyList omitted.

// de_ObjectTypeNames omitted.

// de_Period omitted.

// de_Periods omitted.

// de_PhoneNumberList omitted.

// de_Profile omitted.

/**
 * deserializeAws_restJson1ProfileAttributes
 */
const de_ProfileAttributes = (output: any, context: __SerdeContext): ProfileAttributes => {
  return take(output, {
    AccountNumber: [, (_: any) => de_ProfileDimension(_, context), `AccountNumber`],
    AdditionalInformation: [, (_: any) => de_ExtraLengthValueProfileDimension(_, context), `AdditionalInformation`],
    Address: [, (_: any) => de_AddressDimension(_, context), `Address`],
    Attributes: [, (_: any) => de_CustomAttributes(_, context), `Attributes`],
    BillingAddress: [, (_: any) => de_AddressDimension(_, context), `BillingAddress`],
    BirthDate: [, (_: any) => de_DateDimension(_, context), `BirthDate`],
    BusinessEmailAddress: [, (_: any) => de_ProfileDimension(_, context), `BusinessEmailAddress`],
    BusinessName: [, (_: any) => de_ProfileDimension(_, context), `BusinessName`],
    BusinessPhoneNumber: [, (_: any) => de_ProfileDimension(_, context), `BusinessPhoneNumber`],
    EmailAddress: [, (_: any) => de_ProfileDimension(_, context), `EmailAddress`],
    FirstName: [, (_: any) => de_ProfileDimension(_, context), `FirstName`],
    GenderString: [, (_: any) => de_ProfileDimension(_, context), `GenderString`],
    HomePhoneNumber: [, (_: any) => de_ProfileDimension(_, context), `HomePhoneNumber`],
    LastName: [, (_: any) => de_ProfileDimension(_, context), `LastName`],
    MailingAddress: [, (_: any) => de_AddressDimension(_, context), `MailingAddress`],
    MiddleName: [, (_: any) => de_ProfileDimension(_, context), `MiddleName`],
    MobilePhoneNumber: [, (_: any) => de_ProfileDimension(_, context), `MobilePhoneNumber`],
    PartyTypeString: [, (_: any) => de_ProfileDimension(_, context), `PartyTypeString`],
    PersonalEmailAddress: [, (_: any) => de_ProfileDimension(_, context), `PersonalEmailAddress`],
    PhoneNumber: [, (_: any) => de_ProfileDimension(_, context), `PhoneNumber`],
    ShippingAddress: [, (_: any) => de_AddressDimension(_, context), `ShippingAddress`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileDimension
 */
const de_ProfileDimension = (output: any, context: __SerdeContext): ProfileDimension => {
  return take(output, {
    DimensionType: [, __expectString, `DimensionType`],
    Values: [, _json, `Values`],
  }) as any;
};

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

/**
 * deserializeAws_restJson1ProfileQueryFailures
 */
const de_ProfileQueryFailures = (output: any, context: __SerdeContext): ProfileQueryFailures => {
  return take(output, {
    Message: [, __expectString, `Message`],
    ProfileId: [, __expectString, `ProfileId`],
    Status: [, __expectInt32, `Status`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileQueryResult
 */
const de_ProfileQueryResult = (output: any, context: __SerdeContext): ProfileQueryResult => {
  return take(output, {
    Profile: [, _json, `Profile`],
    ProfileId: [, __expectString, `ProfileId`],
    QueryResult: [, __expectString, `QueryResult`],
  }) as any;
};

/**
 * deserializeAws_restJson1Profiles
 */
const de_Profiles = (output: any, context: __SerdeContext): ProfileQueryResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileQueryResult(entry, context);
    });
  return retVal;
};

// de_Range omitted.

// de_RangeOverride omitted.

// de_Readiness omitted.

// de_requestValueList omitted.

/**
 * deserializeAws_restJson1ResultsSummary
 */
const de_ResultsSummary = (output: any, context: __SerdeContext): ResultsSummary => {
  return take(output, {
    CreatedRecords: [, __expectLong, `CreatedRecords`],
    FailedRecords: [, __expectLong, `FailedRecords`],
    UpdatedRecords: [, __expectLong, `UpdatedRecords`],
  }) as any;
};

// de_RuleBasedMatchingResponse omitted.

// de_S3ExportingConfig omitted.

// de_S3ExportingLocation omitted.

/**
 * deserializeAws_restJson1SegmentDefinitionItem
 */
const de_SegmentDefinitionItem = (output: any, context: __SerdeContext): SegmentDefinitionItem => {
  return take(output, {
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CreatedAt`],
    Description: [, __expectString, `Description`],
    DisplayName: [, __expectString, `DisplayName`],
    SegmentDefinitionArn: [, __expectString, `SegmentDefinitionArn`],
    SegmentDefinitionName: [, __expectString, `SegmentDefinitionName`],
    Tags: [, _json, `Tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentDefinitionsList
 */
const de_SegmentDefinitionsList = (output: any, context: __SerdeContext): SegmentDefinitionItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SegmentDefinitionItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SegmentGroup
 */
const de_SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return take(output, {
    Groups: [, (_: any) => de_SegmentGroupList(_, context), `Groups`],
    Include: [, __expectString, `Include`],
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentGroupList
 */
const de_SegmentGroupList = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Group(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SourceSegment
 */
const de_SourceSegment = (output: any, context: __SerdeContext): SourceSegment => {
  return take(output, {
    SegmentDefinitionName: [, __expectString, `SegmentDefinitionName`],
  }) as any;
};

/**
 * deserializeAws_restJson1SourceSegmentList
 */
const de_SourceSegmentList = (output: any, context: __SerdeContext): SourceSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SourceSegment(entry, context);
    });
  return retVal;
};

// de_StandardIdentifierList omitted.

// de_TagMap omitted.

// de_Threshold omitted.

/**
 * deserializeAws_restJson1UploadJobItem
 */
const de_UploadJobItem = (output: any, context: __SerdeContext): UploadJobItem => {
  return take(output, {
    CompletedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CompletedAt`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `CreatedAt`],
    DataExpiry: [, __expectInt32, `DataExpiry`],
    DisplayName: [, __expectString, `DisplayName`],
    JobId: [, __expectString, `JobId`],
    Status: [, __expectString, `Status`],
    StatusReason: [, __expectString, `StatusReason`],
  }) as any;
};

/**
 * deserializeAws_restJson1UploadJobsList
 */
const de_UploadJobsList = (output: any, context: __SerdeContext): UploadJobItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UploadJobItem(entry, context);
    });
  return retVal;
};

// de_ValueList omitted.

// de_ValueRange omitted.

// de_Values omitted.

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
