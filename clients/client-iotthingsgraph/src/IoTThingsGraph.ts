// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateEntityToThingCommandInput,
  type AssociateEntityToThingCommandOutput,
  AssociateEntityToThingCommand,
} from "./commands/AssociateEntityToThingCommand";
import {
  type CreateFlowTemplateCommandInput,
  type CreateFlowTemplateCommandOutput,
  CreateFlowTemplateCommand,
} from "./commands/CreateFlowTemplateCommand";
import {
  type CreateSystemInstanceCommandInput,
  type CreateSystemInstanceCommandOutput,
  CreateSystemInstanceCommand,
} from "./commands/CreateSystemInstanceCommand";
import {
  type CreateSystemTemplateCommandInput,
  type CreateSystemTemplateCommandOutput,
  CreateSystemTemplateCommand,
} from "./commands/CreateSystemTemplateCommand";
import {
  type DeleteFlowTemplateCommandInput,
  type DeleteFlowTemplateCommandOutput,
  DeleteFlowTemplateCommand,
} from "./commands/DeleteFlowTemplateCommand";
import {
  type DeleteNamespaceCommandInput,
  type DeleteNamespaceCommandOutput,
  DeleteNamespaceCommand,
} from "./commands/DeleteNamespaceCommand";
import {
  type DeleteSystemInstanceCommandInput,
  type DeleteSystemInstanceCommandOutput,
  DeleteSystemInstanceCommand,
} from "./commands/DeleteSystemInstanceCommand";
import {
  type DeleteSystemTemplateCommandInput,
  type DeleteSystemTemplateCommandOutput,
  DeleteSystemTemplateCommand,
} from "./commands/DeleteSystemTemplateCommand";
import {
  type DeploySystemInstanceCommandInput,
  type DeploySystemInstanceCommandOutput,
  DeploySystemInstanceCommand,
} from "./commands/DeploySystemInstanceCommand";
import {
  type DeprecateFlowTemplateCommandInput,
  type DeprecateFlowTemplateCommandOutput,
  DeprecateFlowTemplateCommand,
} from "./commands/DeprecateFlowTemplateCommand";
import {
  type DeprecateSystemTemplateCommandInput,
  type DeprecateSystemTemplateCommandOutput,
  DeprecateSystemTemplateCommand,
} from "./commands/DeprecateSystemTemplateCommand";
import {
  type DescribeNamespaceCommandInput,
  type DescribeNamespaceCommandOutput,
  DescribeNamespaceCommand,
} from "./commands/DescribeNamespaceCommand";
import {
  type DissociateEntityFromThingCommandInput,
  type DissociateEntityFromThingCommandOutput,
  DissociateEntityFromThingCommand,
} from "./commands/DissociateEntityFromThingCommand";
import {
  type GetEntitiesCommandInput,
  type GetEntitiesCommandOutput,
  GetEntitiesCommand,
} from "./commands/GetEntitiesCommand";
import {
  type GetFlowTemplateCommandInput,
  type GetFlowTemplateCommandOutput,
  GetFlowTemplateCommand,
} from "./commands/GetFlowTemplateCommand";
import {
  type GetFlowTemplateRevisionsCommandInput,
  type GetFlowTemplateRevisionsCommandOutput,
  GetFlowTemplateRevisionsCommand,
} from "./commands/GetFlowTemplateRevisionsCommand";
import {
  type GetNamespaceDeletionStatusCommandInput,
  type GetNamespaceDeletionStatusCommandOutput,
  GetNamespaceDeletionStatusCommand,
} from "./commands/GetNamespaceDeletionStatusCommand";
import {
  type GetSystemInstanceCommandInput,
  type GetSystemInstanceCommandOutput,
  GetSystemInstanceCommand,
} from "./commands/GetSystemInstanceCommand";
import {
  type GetSystemTemplateCommandInput,
  type GetSystemTemplateCommandOutput,
  GetSystemTemplateCommand,
} from "./commands/GetSystemTemplateCommand";
import {
  type GetSystemTemplateRevisionsCommandInput,
  type GetSystemTemplateRevisionsCommandOutput,
  GetSystemTemplateRevisionsCommand,
} from "./commands/GetSystemTemplateRevisionsCommand";
import {
  type GetUploadStatusCommandInput,
  type GetUploadStatusCommandOutput,
  GetUploadStatusCommand,
} from "./commands/GetUploadStatusCommand";
import {
  type ListFlowExecutionMessagesCommandInput,
  type ListFlowExecutionMessagesCommandOutput,
  ListFlowExecutionMessagesCommand,
} from "./commands/ListFlowExecutionMessagesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SearchEntitiesCommandInput,
  type SearchEntitiesCommandOutput,
  SearchEntitiesCommand,
} from "./commands/SearchEntitiesCommand";
import {
  type SearchFlowExecutionsCommandInput,
  type SearchFlowExecutionsCommandOutput,
  SearchFlowExecutionsCommand,
} from "./commands/SearchFlowExecutionsCommand";
import {
  type SearchFlowTemplatesCommandInput,
  type SearchFlowTemplatesCommandOutput,
  SearchFlowTemplatesCommand,
} from "./commands/SearchFlowTemplatesCommand";
import {
  type SearchSystemInstancesCommandInput,
  type SearchSystemInstancesCommandOutput,
  SearchSystemInstancesCommand,
} from "./commands/SearchSystemInstancesCommand";
import {
  type SearchSystemTemplatesCommandInput,
  type SearchSystemTemplatesCommandOutput,
  SearchSystemTemplatesCommand,
} from "./commands/SearchSystemTemplatesCommand";
import {
  type SearchThingsCommandInput,
  type SearchThingsCommandOutput,
  SearchThingsCommand,
} from "./commands/SearchThingsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UndeploySystemInstanceCommandInput,
  type UndeploySystemInstanceCommandOutput,
  UndeploySystemInstanceCommand,
} from "./commands/UndeploySystemInstanceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateFlowTemplateCommandInput,
  type UpdateFlowTemplateCommandOutput,
  UpdateFlowTemplateCommand,
} from "./commands/UpdateFlowTemplateCommand";
import {
  type UpdateSystemTemplateCommandInput,
  type UpdateSystemTemplateCommandOutput,
  UpdateSystemTemplateCommand,
} from "./commands/UpdateSystemTemplateCommand";
import {
  type UploadEntityDefinitionsCommandInput,
  type UploadEntityDefinitionsCommandOutput,
  UploadEntityDefinitionsCommand,
} from "./commands/UploadEntityDefinitionsCommand";
import { IoTThingsGraphClient } from "./IoTThingsGraphClient";
import { paginateGetFlowTemplateRevisions } from "./pagination/GetFlowTemplateRevisionsPaginator";
import { paginateGetSystemTemplateRevisions } from "./pagination/GetSystemTemplateRevisionsPaginator";
import { paginateListFlowExecutionMessages } from "./pagination/ListFlowExecutionMessagesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateSearchEntities } from "./pagination/SearchEntitiesPaginator";
import { paginateSearchFlowExecutions } from "./pagination/SearchFlowExecutionsPaginator";
import { paginateSearchFlowTemplates } from "./pagination/SearchFlowTemplatesPaginator";
import { paginateSearchSystemInstances } from "./pagination/SearchSystemInstancesPaginator";
import { paginateSearchSystemTemplates } from "./pagination/SearchSystemTemplatesPaginator";
import { paginateSearchThings } from "./pagination/SearchThingsPaginator";

const commands = {
  AssociateEntityToThingCommand,
  CreateFlowTemplateCommand,
  CreateSystemInstanceCommand,
  CreateSystemTemplateCommand,
  DeleteFlowTemplateCommand,
  DeleteNamespaceCommand,
  DeleteSystemInstanceCommand,
  DeleteSystemTemplateCommand,
  DeploySystemInstanceCommand,
  DeprecateFlowTemplateCommand,
  DeprecateSystemTemplateCommand,
  DescribeNamespaceCommand,
  DissociateEntityFromThingCommand,
  GetEntitiesCommand,
  GetFlowTemplateCommand,
  GetFlowTemplateRevisionsCommand,
  GetNamespaceDeletionStatusCommand,
  GetSystemInstanceCommand,
  GetSystemTemplateCommand,
  GetSystemTemplateRevisionsCommand,
  GetUploadStatusCommand,
  ListFlowExecutionMessagesCommand,
  ListTagsForResourceCommand,
  SearchEntitiesCommand,
  SearchFlowExecutionsCommand,
  SearchFlowTemplatesCommand,
  SearchSystemInstancesCommand,
  SearchSystemTemplatesCommand,
  SearchThingsCommand,
  TagResourceCommand,
  UndeploySystemInstanceCommand,
  UntagResourceCommand,
  UpdateFlowTemplateCommand,
  UpdateSystemTemplateCommand,
  UploadEntityDefinitionsCommand,
};
const paginators = {
  paginateGetFlowTemplateRevisions,
  paginateGetSystemTemplateRevisions,
  paginateListFlowExecutionMessages,
  paginateListTagsForResource,
  paginateSearchEntities,
  paginateSearchFlowExecutions,
  paginateSearchFlowTemplates,
  paginateSearchSystemInstances,
  paginateSearchSystemTemplates,
  paginateSearchThings,
};

export interface IoTThingsGraph {
  /**
   * @see {@link AssociateEntityToThingCommand}
   */
  associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEntityToThingCommandOutput>;
  associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void
  ): void;
  associateEntityToThing(
    args: AssociateEntityToThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEntityToThingCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowTemplateCommand}
   */
  createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowTemplateCommandOutput>;
  createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void
  ): void;
  createFlowTemplate(
    args: CreateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSystemInstanceCommand}
   */
  createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSystemInstanceCommandOutput>;
  createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void
  ): void;
  createSystemInstance(
    args: CreateSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSystemInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSystemTemplateCommand}
   */
  createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSystemTemplateCommandOutput>;
  createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void
  ): void;
  createSystemTemplate(
    args: CreateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSystemTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowTemplateCommand}
   */
  deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowTemplateCommandOutput>;
  deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void
  ): void;
  deleteFlowTemplate(
    args: DeleteFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNamespaceCommand}
   */
  deleteNamespace(): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamespaceCommandOutput>;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;
  deleteNamespace(
    args: DeleteNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSystemInstanceCommand}
   */
  deleteSystemInstance(): Promise<DeleteSystemInstanceCommandOutput>;
  deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSystemInstanceCommandOutput>;
  deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void
  ): void;
  deleteSystemInstance(
    args: DeleteSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSystemInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSystemTemplateCommand}
   */
  deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSystemTemplateCommandOutput>;
  deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void
  ): void;
  deleteSystemTemplate(
    args: DeleteSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSystemTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeploySystemInstanceCommand}
   */
  deploySystemInstance(): Promise<DeploySystemInstanceCommandOutput>;
  deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeploySystemInstanceCommandOutput>;
  deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void
  ): void;
  deploySystemInstance(
    args: DeploySystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeploySystemInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateFlowTemplateCommand}
   */
  deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateFlowTemplateCommandOutput>;
  deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void
  ): void;
  deprecateFlowTemplate(
    args: DeprecateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateFlowTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateSystemTemplateCommand}
   */
  deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateSystemTemplateCommandOutput>;
  deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void
  ): void;
  deprecateSystemTemplate(
    args: DeprecateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateSystemTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNamespaceCommand}
   */
  describeNamespace(): Promise<DescribeNamespaceCommandOutput>;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNamespaceCommandOutput>;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;
  describeNamespace(
    args: DescribeNamespaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNamespaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DissociateEntityFromThingCommand}
   */
  dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DissociateEntityFromThingCommandOutput>;
  dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void
  ): void;
  dissociateEntityFromThing(
    args: DissociateEntityFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DissociateEntityFromThingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntitiesCommand}
   */
  getEntities(
    args: GetEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntitiesCommandOutput>;
  getEntities(
    args: GetEntitiesCommandInput,
    cb: (err: any, data?: GetEntitiesCommandOutput) => void
  ): void;
  getEntities(
    args: GetEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowTemplateCommand}
   */
  getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowTemplateCommandOutput>;
  getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    cb: (err: any, data?: GetFlowTemplateCommandOutput) => void
  ): void;
  getFlowTemplate(
    args: GetFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowTemplateRevisionsCommand}
   */
  getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFlowTemplateRevisionsCommandOutput>;
  getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void
  ): void;
  getFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFlowTemplateRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNamespaceDeletionStatusCommand}
   */
  getNamespaceDeletionStatus(): Promise<GetNamespaceDeletionStatusCommandOutput>;
  getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamespaceDeletionStatusCommandOutput>;
  getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void
  ): void;
  getNamespaceDeletionStatus(
    args: GetNamespaceDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamespaceDeletionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSystemInstanceCommand}
   */
  getSystemInstance(
    args: GetSystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemInstanceCommandOutput>;
  getSystemInstance(
    args: GetSystemInstanceCommandInput,
    cb: (err: any, data?: GetSystemInstanceCommandOutput) => void
  ): void;
  getSystemInstance(
    args: GetSystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSystemTemplateCommand}
   */
  getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemTemplateCommandOutput>;
  getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    cb: (err: any, data?: GetSystemTemplateCommandOutput) => void
  ): void;
  getSystemTemplate(
    args: GetSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSystemTemplateRevisionsCommand}
   */
  getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSystemTemplateRevisionsCommandOutput>;
  getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void
  ): void;
  getSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSystemTemplateRevisionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUploadStatusCommand}
   */
  getUploadStatus(
    args: GetUploadStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUploadStatusCommandOutput>;
  getUploadStatus(
    args: GetUploadStatusCommandInput,
    cb: (err: any, data?: GetUploadStatusCommandOutput) => void
  ): void;
  getUploadStatus(
    args: GetUploadStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUploadStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowExecutionMessagesCommand}
   */
  listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowExecutionMessagesCommandOutput>;
  listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void
  ): void;
  listFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowExecutionMessagesCommandOutput) => void
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
   * @see {@link SearchEntitiesCommand}
   */
  searchEntities(
    args: SearchEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchEntitiesCommandOutput>;
  searchEntities(
    args: SearchEntitiesCommandInput,
    cb: (err: any, data?: SearchEntitiesCommandOutput) => void
  ): void;
  searchEntities(
    args: SearchEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFlowExecutionsCommand}
   */
  searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFlowExecutionsCommandOutput>;
  searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void
  ): void;
  searchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFlowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFlowTemplatesCommand}
   */
  searchFlowTemplates(): Promise<SearchFlowTemplatesCommandOutput>;
  searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFlowTemplatesCommandOutput>;
  searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void
  ): void;
  searchFlowTemplates(
    args: SearchFlowTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFlowTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSystemInstancesCommand}
   */
  searchSystemInstances(): Promise<SearchSystemInstancesCommandOutput>;
  searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSystemInstancesCommandOutput>;
  searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void
  ): void;
  searchSystemInstances(
    args: SearchSystemInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSystemInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSystemTemplatesCommand}
   */
  searchSystemTemplates(): Promise<SearchSystemTemplatesCommandOutput>;
  searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSystemTemplatesCommandOutput>;
  searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void
  ): void;
  searchSystemTemplates(
    args: SearchSystemTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSystemTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchThingsCommand}
   */
  searchThings(
    args: SearchThingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchThingsCommandOutput>;
  searchThings(
    args: SearchThingsCommandInput,
    cb: (err: any, data?: SearchThingsCommandOutput) => void
  ): void;
  searchThings(
    args: SearchThingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchThingsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UndeploySystemInstanceCommand}
   */
  undeploySystemInstance(): Promise<UndeploySystemInstanceCommandOutput>;
  undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeploySystemInstanceCommandOutput>;
  undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void
  ): void;
  undeploySystemInstance(
    args: UndeploySystemInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeploySystemInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlowTemplateCommand}
   */
  updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowTemplateCommandOutput>;
  updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void
  ): void;
  updateFlowTemplate(
    args: UpdateFlowTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSystemTemplateCommand}
   */
  updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSystemTemplateCommandOutput>;
  updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void
  ): void;
  updateSystemTemplate(
    args: UpdateSystemTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSystemTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadEntityDefinitionsCommand}
   */
  uploadEntityDefinitions(): Promise<UploadEntityDefinitionsCommandOutput>;
  uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadEntityDefinitionsCommandOutput>;
  uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void
  ): void;
  uploadEntityDefinitions(
    args: UploadEntityDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadEntityDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFlowTemplateRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetFlowTemplateRevisionsCommandOutput}.
   */
  paginateGetFlowTemplateRevisions(
    args: GetFlowTemplateRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetFlowTemplateRevisionsCommandOutput>;

  /**
   * @see {@link GetSystemTemplateRevisionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSystemTemplateRevisionsCommandOutput}.
   */
  paginateGetSystemTemplateRevisions(
    args: GetSystemTemplateRevisionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSystemTemplateRevisionsCommandOutput>;

  /**
   * @see {@link ListFlowExecutionMessagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFlowExecutionMessagesCommandOutput}.
   */
  paginateListFlowExecutionMessages(
    args: ListFlowExecutionMessagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFlowExecutionMessagesCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link SearchEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchEntitiesCommandOutput}.
   */
  paginateSearchEntities(
    args: SearchEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchEntitiesCommandOutput>;

  /**
   * @see {@link SearchFlowExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFlowExecutionsCommandOutput}.
   */
  paginateSearchFlowExecutions(
    args: SearchFlowExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFlowExecutionsCommandOutput>;

  /**
   * @see {@link SearchFlowTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFlowTemplatesCommandOutput}.
   */
  paginateSearchFlowTemplates(
    args?: SearchFlowTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFlowTemplatesCommandOutput>;

  /**
   * @see {@link SearchSystemInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSystemInstancesCommandOutput}.
   */
  paginateSearchSystemInstances(
    args?: SearchSystemInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSystemInstancesCommandOutput>;

  /**
   * @see {@link SearchSystemTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSystemTemplatesCommandOutput}.
   */
  paginateSearchSystemTemplates(
    args?: SearchSystemTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSystemTemplatesCommandOutput>;

  /**
   * @see {@link SearchThingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchThingsCommandOutput}.
   */
  paginateSearchThings(
    args: SearchThingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchThingsCommandOutput>;
}

/**
 * <fullname>AWS IoT Things Graph</fullname>
 *          <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards,
 *        such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services
 *        and defining how they interact at an abstract level.</p>
 *          <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>
 *          <p>The AWS IoT Things Graph service is discontinued.</p>
 * @public
 */
export class IoTThingsGraph extends IoTThingsGraphClient implements IoTThingsGraph {}
createAggregatedClient(commands, IoTThingsGraph, { paginators });
