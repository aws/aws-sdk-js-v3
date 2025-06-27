// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddProfileKeyCommand,
  AddProfileKeyCommandInput,
  AddProfileKeyCommandOutput,
} from "./commands/AddProfileKeyCommand";
import {
  BatchGetCalculatedAttributeForProfileCommand,
  BatchGetCalculatedAttributeForProfileCommandInput,
  BatchGetCalculatedAttributeForProfileCommandOutput,
} from "./commands/BatchGetCalculatedAttributeForProfileCommand";
import {
  BatchGetProfileCommand,
  BatchGetProfileCommandInput,
  BatchGetProfileCommandOutput,
} from "./commands/BatchGetProfileCommand";
import {
  CreateCalculatedAttributeDefinitionCommand,
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/CreateCalculatedAttributeDefinitionCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateDomainLayoutCommand,
  CreateDomainLayoutCommandInput,
  CreateDomainLayoutCommandOutput,
} from "./commands/CreateDomainLayoutCommand";
import {
  CreateEventStreamCommand,
  CreateEventStreamCommandInput,
  CreateEventStreamCommandOutput,
} from "./commands/CreateEventStreamCommand";
import {
  CreateEventTriggerCommand,
  CreateEventTriggerCommandInput,
  CreateEventTriggerCommandOutput,
} from "./commands/CreateEventTriggerCommand";
import {
  CreateIntegrationWorkflowCommand,
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "./commands/CreateIntegrationWorkflowCommand";
import {
  CreateProfileCommand,
  CreateProfileCommandInput,
  CreateProfileCommandOutput,
} from "./commands/CreateProfileCommand";
import {
  CreateSegmentDefinitionCommand,
  CreateSegmentDefinitionCommandInput,
  CreateSegmentDefinitionCommandOutput,
} from "./commands/CreateSegmentDefinitionCommand";
import {
  CreateSegmentEstimateCommand,
  CreateSegmentEstimateCommandInput,
  CreateSegmentEstimateCommandOutput,
} from "./commands/CreateSegmentEstimateCommand";
import {
  CreateSegmentSnapshotCommand,
  CreateSegmentSnapshotCommandInput,
  CreateSegmentSnapshotCommandOutput,
} from "./commands/CreateSegmentSnapshotCommand";
import {
  DeleteCalculatedAttributeDefinitionCommand,
  DeleteCalculatedAttributeDefinitionCommandInput,
  DeleteCalculatedAttributeDefinitionCommandOutput,
} from "./commands/DeleteCalculatedAttributeDefinitionCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainLayoutCommand,
  DeleteDomainLayoutCommandInput,
  DeleteDomainLayoutCommandOutput,
} from "./commands/DeleteDomainLayoutCommand";
import {
  DeleteEventStreamCommand,
  DeleteEventStreamCommandInput,
  DeleteEventStreamCommandOutput,
} from "./commands/DeleteEventStreamCommand";
import {
  DeleteEventTriggerCommand,
  DeleteEventTriggerCommandInput,
  DeleteEventTriggerCommandOutput,
} from "./commands/DeleteEventTriggerCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteProfileCommand,
  DeleteProfileCommandInput,
  DeleteProfileCommandOutput,
} from "./commands/DeleteProfileCommand";
import {
  DeleteProfileKeyCommand,
  DeleteProfileKeyCommandInput,
  DeleteProfileKeyCommandOutput,
} from "./commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommand,
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "./commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommand,
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "./commands/DeleteProfileObjectTypeCommand";
import {
  DeleteSegmentDefinitionCommand,
  DeleteSegmentDefinitionCommandInput,
  DeleteSegmentDefinitionCommandOutput,
} from "./commands/DeleteSegmentDefinitionCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  DetectProfileObjectTypeCommand,
  DetectProfileObjectTypeCommandInput,
  DetectProfileObjectTypeCommandOutput,
} from "./commands/DetectProfileObjectTypeCommand";
import {
  GetAutoMergingPreviewCommand,
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "./commands/GetAutoMergingPreviewCommand";
import {
  GetCalculatedAttributeDefinitionCommand,
  GetCalculatedAttributeDefinitionCommandInput,
  GetCalculatedAttributeDefinitionCommandOutput,
} from "./commands/GetCalculatedAttributeDefinitionCommand";
import {
  GetCalculatedAttributeForProfileCommand,
  GetCalculatedAttributeForProfileCommandInput,
  GetCalculatedAttributeForProfileCommandOutput,
} from "./commands/GetCalculatedAttributeForProfileCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import {
  GetDomainLayoutCommand,
  GetDomainLayoutCommandInput,
  GetDomainLayoutCommandOutput,
} from "./commands/GetDomainLayoutCommand";
import {
  GetEventStreamCommand,
  GetEventStreamCommandInput,
  GetEventStreamCommandOutput,
} from "./commands/GetEventStreamCommand";
import {
  GetEventTriggerCommand,
  GetEventTriggerCommandInput,
  GetEventTriggerCommandOutput,
} from "./commands/GetEventTriggerCommand";
import {
  GetIdentityResolutionJobCommand,
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "./commands/GetIdentityResolutionJobCommand";
import {
  GetIntegrationCommand,
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import { GetMatchesCommand, GetMatchesCommandInput, GetMatchesCommandOutput } from "./commands/GetMatchesCommand";
import {
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "./commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommand,
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "./commands/GetProfileObjectTypeTemplateCommand";
import {
  GetSegmentDefinitionCommand,
  GetSegmentDefinitionCommandInput,
  GetSegmentDefinitionCommandOutput,
} from "./commands/GetSegmentDefinitionCommand";
import {
  GetSegmentEstimateCommand,
  GetSegmentEstimateCommandInput,
  GetSegmentEstimateCommandOutput,
} from "./commands/GetSegmentEstimateCommand";
import {
  GetSegmentMembershipCommand,
  GetSegmentMembershipCommandInput,
  GetSegmentMembershipCommandOutput,
} from "./commands/GetSegmentMembershipCommand";
import {
  GetSegmentSnapshotCommand,
  GetSegmentSnapshotCommandInput,
  GetSegmentSnapshotCommandOutput,
} from "./commands/GetSegmentSnapshotCommand";
import {
  GetSimilarProfilesCommand,
  GetSimilarProfilesCommandInput,
  GetSimilarProfilesCommandOutput,
} from "./commands/GetSimilarProfilesCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowStepsCommand,
  GetWorkflowStepsCommandInput,
  GetWorkflowStepsCommandOutput,
} from "./commands/GetWorkflowStepsCommand";
import {
  ListAccountIntegrationsCommand,
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "./commands/ListAccountIntegrationsCommand";
import {
  ListCalculatedAttributeDefinitionsCommand,
  ListCalculatedAttributeDefinitionsCommandInput,
  ListCalculatedAttributeDefinitionsCommandOutput,
} from "./commands/ListCalculatedAttributeDefinitionsCommand";
import {
  ListCalculatedAttributesForProfileCommand,
  ListCalculatedAttributesForProfileCommandInput,
  ListCalculatedAttributesForProfileCommandOutput,
} from "./commands/ListCalculatedAttributesForProfileCommand";
import {
  ListDomainLayoutsCommand,
  ListDomainLayoutsCommandInput,
  ListDomainLayoutsCommandOutput,
} from "./commands/ListDomainLayoutsCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListEventStreamsCommand,
  ListEventStreamsCommandInput,
  ListEventStreamsCommandOutput,
} from "./commands/ListEventStreamsCommand";
import {
  ListEventTriggersCommand,
  ListEventTriggersCommandInput,
  ListEventTriggersCommandOutput,
} from "./commands/ListEventTriggersCommand";
import {
  ListIdentityResolutionJobsCommand,
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "./commands/ListIdentityResolutionJobsCommand";
import {
  ListIntegrationsCommand,
  ListIntegrationsCommandInput,
  ListIntegrationsCommandOutput,
} from "./commands/ListIntegrationsCommand";
import {
  ListObjectTypeAttributesCommand,
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput,
} from "./commands/ListObjectTypeAttributesCommand";
import {
  ListProfileAttributeValuesCommand,
  ListProfileAttributeValuesCommandInput,
  ListProfileAttributeValuesCommandOutput,
} from "./commands/ListProfileAttributeValuesCommand";
import {
  ListProfileObjectsCommand,
  ListProfileObjectsCommandInput,
  ListProfileObjectsCommandOutput,
} from "./commands/ListProfileObjectsCommand";
import {
  ListProfileObjectTypesCommand,
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "./commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectTypeTemplatesCommand,
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "./commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListRuleBasedMatchesCommand,
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput,
} from "./commands/ListRuleBasedMatchesCommand";
import {
  ListSegmentDefinitionsCommand,
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput,
} from "./commands/ListSegmentDefinitionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  MergeProfilesCommand,
  MergeProfilesCommandInput,
  MergeProfilesCommandOutput,
} from "./commands/MergeProfilesCommand";
import {
  PutIntegrationCommand,
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutProfileObjectCommand,
  PutProfileObjectCommandInput,
  PutProfileObjectCommandOutput,
} from "./commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommand,
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "./commands/PutProfileObjectTypeCommand";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "./commands/SearchProfilesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCalculatedAttributeDefinitionCommand,
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/UpdateCalculatedAttributeDefinitionCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
} from "./commands/UpdateDomainCommand";
import {
  UpdateDomainLayoutCommand,
  UpdateDomainLayoutCommandInput,
  UpdateDomainLayoutCommandOutput,
} from "./commands/UpdateDomainLayoutCommand";
import {
  UpdateEventTriggerCommand,
  UpdateEventTriggerCommandInput,
  UpdateEventTriggerCommandOutput,
} from "./commands/UpdateEventTriggerCommand";
import {
  UpdateProfileCommand,
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
} from "./commands/UpdateProfileCommand";
import { CustomerProfilesClient, CustomerProfilesClientConfig } from "./CustomerProfilesClient";

const commands = {
  AddProfileKeyCommand,
  BatchGetCalculatedAttributeForProfileCommand,
  BatchGetProfileCommand,
  CreateCalculatedAttributeDefinitionCommand,
  CreateDomainCommand,
  CreateDomainLayoutCommand,
  CreateEventStreamCommand,
  CreateEventTriggerCommand,
  CreateIntegrationWorkflowCommand,
  CreateProfileCommand,
  CreateSegmentDefinitionCommand,
  CreateSegmentEstimateCommand,
  CreateSegmentSnapshotCommand,
  DeleteCalculatedAttributeDefinitionCommand,
  DeleteDomainCommand,
  DeleteDomainLayoutCommand,
  DeleteEventStreamCommand,
  DeleteEventTriggerCommand,
  DeleteIntegrationCommand,
  DeleteProfileCommand,
  DeleteProfileKeyCommand,
  DeleteProfileObjectCommand,
  DeleteProfileObjectTypeCommand,
  DeleteSegmentDefinitionCommand,
  DeleteWorkflowCommand,
  DetectProfileObjectTypeCommand,
  GetAutoMergingPreviewCommand,
  GetCalculatedAttributeDefinitionCommand,
  GetCalculatedAttributeForProfileCommand,
  GetDomainCommand,
  GetDomainLayoutCommand,
  GetEventStreamCommand,
  GetEventTriggerCommand,
  GetIdentityResolutionJobCommand,
  GetIntegrationCommand,
  GetMatchesCommand,
  GetProfileObjectTypeCommand,
  GetProfileObjectTypeTemplateCommand,
  GetSegmentDefinitionCommand,
  GetSegmentEstimateCommand,
  GetSegmentMembershipCommand,
  GetSegmentSnapshotCommand,
  GetSimilarProfilesCommand,
  GetWorkflowCommand,
  GetWorkflowStepsCommand,
  ListAccountIntegrationsCommand,
  ListCalculatedAttributeDefinitionsCommand,
  ListCalculatedAttributesForProfileCommand,
  ListDomainLayoutsCommand,
  ListDomainsCommand,
  ListEventStreamsCommand,
  ListEventTriggersCommand,
  ListIdentityResolutionJobsCommand,
  ListIntegrationsCommand,
  ListObjectTypeAttributesCommand,
  ListProfileAttributeValuesCommand,
  ListProfileObjectsCommand,
  ListProfileObjectTypesCommand,
  ListProfileObjectTypeTemplatesCommand,
  ListRuleBasedMatchesCommand,
  ListSegmentDefinitionsCommand,
  ListTagsForResourceCommand,
  ListWorkflowsCommand,
  MergeProfilesCommand,
  PutIntegrationCommand,
  PutProfileObjectCommand,
  PutProfileObjectTypeCommand,
  SearchProfilesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCalculatedAttributeDefinitionCommand,
  UpdateDomainCommand,
  UpdateDomainLayoutCommand,
  UpdateEventTriggerCommand,
  UpdateProfileCommand,
};

export interface CustomerProfiles {
  /**
   * @see {@link AddProfileKeyCommand}
   */
  addProfileKey(args: AddProfileKeyCommandInput, options?: __HttpHandlerOptions): Promise<AddProfileKeyCommandOutput>;
  addProfileKey(args: AddProfileKeyCommandInput, cb: (err: any, data?: AddProfileKeyCommandOutput) => void): void;
  addProfileKey(
    args: AddProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddProfileKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCalculatedAttributeForProfileCommand}
   */
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCalculatedAttributeForProfileCommandOutput>;
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    cb: (err: any, data?: BatchGetCalculatedAttributeForProfileCommandOutput) => void
  ): void;
  batchGetCalculatedAttributeForProfile(
    args: BatchGetCalculatedAttributeForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCalculatedAttributeForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetProfileCommand}
   */
  batchGetProfile(
    args: BatchGetProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetProfileCommandOutput>;
  batchGetProfile(args: BatchGetProfileCommandInput, cb: (err: any, data?: BatchGetProfileCommandOutput) => void): void;
  batchGetProfile(
    args: BatchGetProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCalculatedAttributeDefinitionCommand}
   */
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCalculatedAttributeDefinitionCommandOutput>;
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: CreateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  createCalculatedAttributeDefinition(
    args: CreateCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainLayoutCommand}
   */
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainLayoutCommandOutput>;
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    cb: (err: any, data?: CreateDomainLayoutCommandOutput) => void
  ): void;
  createDomainLayout(
    args: CreateDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventStreamCommand}
   */
  createEventStream(
    args: CreateEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventStreamCommandOutput>;
  createEventStream(
    args: CreateEventStreamCommandInput,
    cb: (err: any, data?: CreateEventStreamCommandOutput) => void
  ): void;
  createEventStream(
    args: CreateEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventTriggerCommand}
   */
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventTriggerCommandOutput>;
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    cb: (err: any, data?: CreateEventTriggerCommandOutput) => void
  ): void;
  createEventTrigger(
    args: CreateEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntegrationWorkflowCommand}
   */
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationWorkflowCommandOutput>;
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    cb: (err: any, data?: CreateIntegrationWorkflowCommandOutput) => void
  ): void;
  createIntegrationWorkflow(
    args: CreateIntegrationWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProfileCommand}
   */
  createProfile(args: CreateProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileCommandOutput>;
  createProfile(args: CreateProfileCommandInput, cb: (err: any, data?: CreateProfileCommandOutput) => void): void;
  createProfile(
    args: CreateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentDefinitionCommand}
   */
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentDefinitionCommandOutput>;
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    cb: (err: any, data?: CreateSegmentDefinitionCommandOutput) => void
  ): void;
  createSegmentDefinition(
    args: CreateSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentEstimateCommand}
   */
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentEstimateCommandOutput>;
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    cb: (err: any, data?: CreateSegmentEstimateCommandOutput) => void
  ): void;
  createSegmentEstimate(
    args: CreateSegmentEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentSnapshotCommand}
   */
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSegmentSnapshotCommandOutput>;
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    cb: (err: any, data?: CreateSegmentSnapshotCommandOutput) => void
  ): void;
  createSegmentSnapshot(
    args: CreateSegmentSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCalculatedAttributeDefinitionCommand}
   */
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCalculatedAttributeDefinitionCommandOutput>;
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: DeleteCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  deleteCalculatedAttributeDefinition(
    args: DeleteCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainLayoutCommand}
   */
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainLayoutCommandOutput>;
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    cb: (err: any, data?: DeleteDomainLayoutCommandOutput) => void
  ): void;
  deleteDomainLayout(
    args: DeleteDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventStreamCommand}
   */
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventStreamCommandOutput>;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventTriggerCommand}
   */
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventTriggerCommandOutput>;
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    cb: (err: any, data?: DeleteEventTriggerCommandOutput) => void
  ): void;
  deleteEventTrigger(
    args: DeleteEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileCommand}
   */
  deleteProfile(args: DeleteProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfileCommandOutput>;
  deleteProfile(args: DeleteProfileCommandInput, cb: (err: any, data?: DeleteProfileCommandOutput) => void): void;
  deleteProfile(
    args: DeleteProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileKeyCommand}
   */
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileKeyCommandOutput>;
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;
  deleteProfileKey(
    args: DeleteProfileKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileObjectCommand}
   */
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectCommandOutput>;
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;
  deleteProfileObject(
    args: DeleteProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProfileObjectTypeCommand}
   */
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProfileObjectTypeCommandOutput>;
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;
  deleteProfileObjectType(
    args: DeleteProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSegmentDefinitionCommand}
   */
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSegmentDefinitionCommandOutput>;
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    cb: (err: any, data?: DeleteSegmentDefinitionCommandOutput) => void
  ): void;
  deleteSegmentDefinition(
    args: DeleteSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectProfileObjectTypeCommand}
   */
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectProfileObjectTypeCommandOutput>;
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    cb: (err: any, data?: DetectProfileObjectTypeCommandOutput) => void
  ): void;
  detectProfileObjectType(
    args: DetectProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutoMergingPreviewCommand}
   */
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoMergingPreviewCommandOutput>;
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    cb: (err: any, data?: GetAutoMergingPreviewCommandOutput) => void
  ): void;
  getAutoMergingPreview(
    args: GetAutoMergingPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoMergingPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculatedAttributeDefinitionCommand}
   */
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculatedAttributeDefinitionCommandOutput>;
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: GetCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  getCalculatedAttributeDefinition(
    args: GetCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCalculatedAttributeForProfileCommand}
   */
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCalculatedAttributeForProfileCommandOutput>;
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    cb: (err: any, data?: GetCalculatedAttributeForProfileCommandOutput) => void
  ): void;
  getCalculatedAttributeForProfile(
    args: GetCalculatedAttributeForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCalculatedAttributeForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainLayoutCommand}
   */
  getDomainLayout(
    args: GetDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainLayoutCommandOutput>;
  getDomainLayout(args: GetDomainLayoutCommandInput, cb: (err: any, data?: GetDomainLayoutCommandOutput) => void): void;
  getDomainLayout(
    args: GetDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventStreamCommand}
   */
  getEventStream(
    args: GetEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventStreamCommandOutput>;
  getEventStream(args: GetEventStreamCommandInput, cb: (err: any, data?: GetEventStreamCommandOutput) => void): void;
  getEventStream(
    args: GetEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventTriggerCommand}
   */
  getEventTrigger(
    args: GetEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventTriggerCommandOutput>;
  getEventTrigger(args: GetEventTriggerCommandInput, cb: (err: any, data?: GetEventTriggerCommandOutput) => void): void;
  getEventTrigger(
    args: GetEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentityResolutionJobCommand}
   */
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentityResolutionJobCommandOutput>;
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    cb: (err: any, data?: GetIdentityResolutionJobCommandOutput) => void
  ): void;
  getIdentityResolutionJob(
    args: GetIdentityResolutionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentityResolutionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntegrationCommand}
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(args: GetIntegrationCommandInput, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchesCommand}
   */
  getMatches(args: GetMatchesCommandInput, options?: __HttpHandlerOptions): Promise<GetMatchesCommandOutput>;
  getMatches(args: GetMatchesCommandInput, cb: (err: any, data?: GetMatchesCommandOutput) => void): void;
  getMatches(
    args: GetMatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileObjectTypeCommand}
   */
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeCommandOutput>;
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;
  getProfileObjectType(
    args: GetProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfileObjectTypeTemplateCommand}
   */
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfileObjectTypeTemplateCommandOutput>;
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;
  getProfileObjectTypeTemplate(
    args: GetProfileObjectTypeTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfileObjectTypeTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentDefinitionCommand}
   */
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentDefinitionCommandOutput>;
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    cb: (err: any, data?: GetSegmentDefinitionCommandOutput) => void
  ): void;
  getSegmentDefinition(
    args: GetSegmentDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentEstimateCommand}
   */
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentEstimateCommandOutput>;
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    cb: (err: any, data?: GetSegmentEstimateCommandOutput) => void
  ): void;
  getSegmentEstimate(
    args: GetSegmentEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentMembershipCommand}
   */
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentMembershipCommandOutput>;
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    cb: (err: any, data?: GetSegmentMembershipCommandOutput) => void
  ): void;
  getSegmentMembership(
    args: GetSegmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentSnapshotCommand}
   */
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentSnapshotCommandOutput>;
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    cb: (err: any, data?: GetSegmentSnapshotCommandOutput) => void
  ): void;
  getSegmentSnapshot(
    args: GetSegmentSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSimilarProfilesCommand}
   */
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSimilarProfilesCommandOutput>;
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    cb: (err: any, data?: GetSimilarProfilesCommandOutput) => void
  ): void;
  getSimilarProfiles(
    args: GetSimilarProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSimilarProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStepsCommand}
   */
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepsCommandOutput>;
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    cb: (err: any, data?: GetWorkflowStepsCommandOutput) => void
  ): void;
  getWorkflowSteps(
    args: GetWorkflowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountIntegrationsCommand}
   */
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountIntegrationsCommandOutput>;
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;
  listAccountIntegrations(
    args: ListAccountIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCalculatedAttributeDefinitionsCommand}
   */
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCalculatedAttributeDefinitionsCommandOutput>;
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    cb: (err: any, data?: ListCalculatedAttributeDefinitionsCommandOutput) => void
  ): void;
  listCalculatedAttributeDefinitions(
    args: ListCalculatedAttributeDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCalculatedAttributeDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCalculatedAttributesForProfileCommand}
   */
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCalculatedAttributesForProfileCommandOutput>;
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    cb: (err: any, data?: ListCalculatedAttributesForProfileCommandOutput) => void
  ): void;
  listCalculatedAttributesForProfile(
    args: ListCalculatedAttributesForProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCalculatedAttributesForProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainLayoutsCommand}
   */
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainLayoutsCommandOutput>;
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    cb: (err: any, data?: ListDomainLayoutsCommandOutput) => void
  ): void;
  listDomainLayouts(
    args: ListDomainLayoutsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainLayoutsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventStreamsCommand}
   */
  listEventStreams(
    args: ListEventStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventStreamsCommandOutput>;
  listEventStreams(
    args: ListEventStreamsCommandInput,
    cb: (err: any, data?: ListEventStreamsCommandOutput) => void
  ): void;
  listEventStreams(
    args: ListEventStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventStreamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventTriggersCommand}
   */
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventTriggersCommandOutput>;
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    cb: (err: any, data?: ListEventTriggersCommandOutput) => void
  ): void;
  listEventTriggers(
    args: ListEventTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentityResolutionJobsCommand}
   */
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentityResolutionJobsCommandOutput>;
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    cb: (err: any, data?: ListIdentityResolutionJobsCommandOutput) => void
  ): void;
  listIdentityResolutionJobs(
    args: ListIdentityResolutionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentityResolutionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntegrationsCommand}
   */
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIntegrationsCommandOutput>;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;
  listIntegrations(
    args: ListIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectTypeAttributesCommand}
   */
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectTypeAttributesCommandOutput>;
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    cb: (err: any, data?: ListObjectTypeAttributesCommandOutput) => void
  ): void;
  listObjectTypeAttributes(
    args: ListObjectTypeAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectTypeAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileAttributeValuesCommand}
   */
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileAttributeValuesCommandOutput>;
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    cb: (err: any, data?: ListProfileAttributeValuesCommandOutput) => void
  ): void;
  listProfileAttributeValues(
    args: ListProfileAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectsCommand}
   */
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectsCommandOutput>;
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;
  listProfileObjects(
    args: ListProfileObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectTypesCommand}
   */
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypesCommandOutput>;
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;
  listProfileObjectTypes(
    args: ListProfileObjectTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProfileObjectTypeTemplatesCommand}
   */
  listProfileObjectTypeTemplates(): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput>;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;
  listProfileObjectTypeTemplates(
    args: ListProfileObjectTypeTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProfileObjectTypeTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleBasedMatchesCommand}
   */
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleBasedMatchesCommandOutput>;
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    cb: (err: any, data?: ListRuleBasedMatchesCommandOutput) => void
  ): void;
  listRuleBasedMatches(
    args: ListRuleBasedMatchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleBasedMatchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSegmentDefinitionsCommand}
   */
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSegmentDefinitionsCommandOutput>;
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    cb: (err: any, data?: ListSegmentDefinitionsCommandOutput) => void
  ): void;
  listSegmentDefinitions(
    args: ListSegmentDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSegmentDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link MergeProfilesCommand}
   */
  mergeProfiles(args: MergeProfilesCommandInput, options?: __HttpHandlerOptions): Promise<MergeProfilesCommandOutput>;
  mergeProfiles(args: MergeProfilesCommandInput, cb: (err: any, data?: MergeProfilesCommandOutput) => void): void;
  mergeProfiles(
    args: MergeProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntegrationCommand}
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(args: PutIntegrationCommandInput, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileObjectCommand}
   */
  putProfileObject(
    args: PutProfileObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectCommandOutput>;
  putProfileObject(
    args: PutProfileObjectCommandInput,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;
  putProfileObject(
    args: PutProfileObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProfileObjectTypeCommand}
   */
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProfileObjectTypeCommandOutput>;
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;
  putProfileObjectType(
    args: PutProfileObjectTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProfileObjectTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchProfilesCommand}
   */
  searchProfiles(
    args: SearchProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchProfilesCommandOutput>;
  searchProfiles(args: SearchProfilesCommandInput, cb: (err: any, data?: SearchProfilesCommandOutput) => void): void;
  searchProfiles(
    args: SearchProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCalculatedAttributeDefinitionCommand}
   */
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCalculatedAttributeDefinitionCommandOutput>;
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    cb: (err: any, data?: UpdateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;
  updateCalculatedAttributeDefinition(
    args: UpdateCalculatedAttributeDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCalculatedAttributeDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
  updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainLayoutCommand}
   */
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainLayoutCommandOutput>;
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    cb: (err: any, data?: UpdateDomainLayoutCommandOutput) => void
  ): void;
  updateDomainLayout(
    args: UpdateDomainLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEventTriggerCommand}
   */
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEventTriggerCommandOutput>;
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    cb: (err: any, data?: UpdateEventTriggerCommandOutput) => void
  ): void;
  updateEventTrigger(
    args: UpdateEventTriggerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEventTriggerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileCommand}
   */
  updateProfile(args: UpdateProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileCommandOutput>;
  updateProfile(args: UpdateProfileCommandInput, cb: (err: any, data?: UpdateProfileCommandOutput) => void): void;
  updateProfile(
    args: UpdateProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html">Customer Profiles actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html">Customer Profiles data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact
 *          center that has pre-built connectors powered by AppFlow that make it easy to combine
 *          customer information from third party applications, such as Salesforce (CRM), ServiceNow
 *          (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. </p>
 *          <p>For more information about the Amazon Connect Customer Profiles feature, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html">Use Customer
 *             Profiles</a> in the <i>Amazon Connect Administrator's Guide</i>. </p>
 * @public
 */
export class CustomerProfiles extends CustomerProfilesClient implements CustomerProfiles {}
createAggregatedClient(commands, CustomerProfiles);
