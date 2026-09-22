// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AssociateFacesCommandInput,
  type AssociateFacesCommandOutput,
  AssociateFacesCommand,
} from "./commands/AssociateFacesCommand";
import {
  type CompareFacesCommandInput,
  type CompareFacesCommandOutput,
  CompareFacesCommand,
} from "./commands/CompareFacesCommand";
import {
  type CopyProjectVersionCommandInput,
  type CopyProjectVersionCommandOutput,
  CopyProjectVersionCommand,
} from "./commands/CopyProjectVersionCommand";
import {
  type CreateCollectionCommandInput,
  type CreateCollectionCommandOutput,
  CreateCollectionCommand,
} from "./commands/CreateCollectionCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateFaceLivenessSessionCommandInput,
  type CreateFaceLivenessSessionCommandOutput,
  CreateFaceLivenessSessionCommand,
} from "./commands/CreateFaceLivenessSessionCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type CreateProjectVersionCommandInput,
  type CreateProjectVersionCommandOutput,
  CreateProjectVersionCommand,
} from "./commands/CreateProjectVersionCommand";
import {
  type CreateStreamProcessorCommandInput,
  type CreateStreamProcessorCommandOutput,
  CreateStreamProcessorCommand,
} from "./commands/CreateStreamProcessorCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type DeleteCollectionCommandInput,
  type DeleteCollectionCommandOutput,
  DeleteCollectionCommand,
} from "./commands/DeleteCollectionCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteFacesCommandInput,
  type DeleteFacesCommandOutput,
  DeleteFacesCommand,
} from "./commands/DeleteFacesCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteProjectPolicyCommandInput,
  type DeleteProjectPolicyCommandOutput,
  DeleteProjectPolicyCommand,
} from "./commands/DeleteProjectPolicyCommand";
import {
  type DeleteProjectVersionCommandInput,
  type DeleteProjectVersionCommandOutput,
  DeleteProjectVersionCommand,
} from "./commands/DeleteProjectVersionCommand";
import {
  type DeleteStreamProcessorCommandInput,
  type DeleteStreamProcessorCommandOutput,
  DeleteStreamProcessorCommand,
} from "./commands/DeleteStreamProcessorCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DescribeCollectionCommandInput,
  type DescribeCollectionCommandOutput,
  DescribeCollectionCommand,
} from "./commands/DescribeCollectionCommand";
import {
  type DescribeDatasetCommandInput,
  type DescribeDatasetCommandOutput,
  DescribeDatasetCommand,
} from "./commands/DescribeDatasetCommand";
import {
  type DescribeProjectsCommandInput,
  type DescribeProjectsCommandOutput,
  DescribeProjectsCommand,
} from "./commands/DescribeProjectsCommand";
import {
  type DescribeProjectVersionsCommandInput,
  type DescribeProjectVersionsCommandOutput,
  DescribeProjectVersionsCommand,
} from "./commands/DescribeProjectVersionsCommand";
import {
  type DescribeStreamProcessorCommandInput,
  type DescribeStreamProcessorCommandOutput,
  DescribeStreamProcessorCommand,
} from "./commands/DescribeStreamProcessorCommand";
import {
  type DetectCustomLabelsCommandInput,
  type DetectCustomLabelsCommandOutput,
  DetectCustomLabelsCommand,
} from "./commands/DetectCustomLabelsCommand";
import {
  type DetectFacesCommandInput,
  type DetectFacesCommandOutput,
  DetectFacesCommand,
} from "./commands/DetectFacesCommand";
import {
  type DetectLabelsCommandInput,
  type DetectLabelsCommandOutput,
  DetectLabelsCommand,
} from "./commands/DetectLabelsCommand";
import {
  type DetectModerationLabelsCommandInput,
  type DetectModerationLabelsCommandOutput,
  DetectModerationLabelsCommand,
} from "./commands/DetectModerationLabelsCommand";
import {
  type DetectProtectiveEquipmentCommandInput,
  type DetectProtectiveEquipmentCommandOutput,
  DetectProtectiveEquipmentCommand,
} from "./commands/DetectProtectiveEquipmentCommand";
import {
  type DetectTextCommandInput,
  type DetectTextCommandOutput,
  DetectTextCommand,
} from "./commands/DetectTextCommand";
import {
  type DisassociateFacesCommandInput,
  type DisassociateFacesCommandOutput,
  DisassociateFacesCommand,
} from "./commands/DisassociateFacesCommand";
import {
  type DistributeDatasetEntriesCommandInput,
  type DistributeDatasetEntriesCommandOutput,
  DistributeDatasetEntriesCommand,
} from "./commands/DistributeDatasetEntriesCommand";
import {
  type GetCelebrityInfoCommandInput,
  type GetCelebrityInfoCommandOutput,
  GetCelebrityInfoCommand,
} from "./commands/GetCelebrityInfoCommand";
import {
  type GetCelebrityRecognitionCommandInput,
  type GetCelebrityRecognitionCommandOutput,
  GetCelebrityRecognitionCommand,
} from "./commands/GetCelebrityRecognitionCommand";
import {
  type GetContentModerationCommandInput,
  type GetContentModerationCommandOutput,
  GetContentModerationCommand,
} from "./commands/GetContentModerationCommand";
import {
  type GetFaceDetectionCommandInput,
  type GetFaceDetectionCommandOutput,
  GetFaceDetectionCommand,
} from "./commands/GetFaceDetectionCommand";
import {
  type GetFaceLivenessSessionResultsCommandInput,
  type GetFaceLivenessSessionResultsCommandOutput,
  GetFaceLivenessSessionResultsCommand,
} from "./commands/GetFaceLivenessSessionResultsCommand";
import {
  type GetFaceSearchCommandInput,
  type GetFaceSearchCommandOutput,
  GetFaceSearchCommand,
} from "./commands/GetFaceSearchCommand";
import {
  type GetLabelDetectionCommandInput,
  type GetLabelDetectionCommandOutput,
  GetLabelDetectionCommand,
} from "./commands/GetLabelDetectionCommand";
import {
  type GetMediaAnalysisJobCommandInput,
  type GetMediaAnalysisJobCommandOutput,
  GetMediaAnalysisJobCommand,
} from "./commands/GetMediaAnalysisJobCommand";
import {
  type GetPersonTrackingCommandInput,
  type GetPersonTrackingCommandOutput,
  GetPersonTrackingCommand,
} from "./commands/GetPersonTrackingCommand";
import {
  type GetSegmentDetectionCommandInput,
  type GetSegmentDetectionCommandOutput,
  GetSegmentDetectionCommand,
} from "./commands/GetSegmentDetectionCommand";
import {
  type GetTextDetectionCommandInput,
  type GetTextDetectionCommandOutput,
  GetTextDetectionCommand,
} from "./commands/GetTextDetectionCommand";
import {
  type IndexFacesCommandInput,
  type IndexFacesCommandOutput,
  IndexFacesCommand,
} from "./commands/IndexFacesCommand";
import {
  type ListCollectionsCommandInput,
  type ListCollectionsCommandOutput,
  ListCollectionsCommand,
} from "./commands/ListCollectionsCommand";
import {
  type ListDatasetEntriesCommandInput,
  type ListDatasetEntriesCommandOutput,
  ListDatasetEntriesCommand,
} from "./commands/ListDatasetEntriesCommand";
import {
  type ListDatasetLabelsCommandInput,
  type ListDatasetLabelsCommandOutput,
  ListDatasetLabelsCommand,
} from "./commands/ListDatasetLabelsCommand";
import { type ListFacesCommandInput, type ListFacesCommandOutput, ListFacesCommand } from "./commands/ListFacesCommand";
import {
  type ListMediaAnalysisJobsCommandInput,
  type ListMediaAnalysisJobsCommandOutput,
  ListMediaAnalysisJobsCommand,
} from "./commands/ListMediaAnalysisJobsCommand";
import {
  type ListProjectPoliciesCommandInput,
  type ListProjectPoliciesCommandOutput,
  ListProjectPoliciesCommand,
} from "./commands/ListProjectPoliciesCommand";
import {
  type ListStreamProcessorsCommandInput,
  type ListStreamProcessorsCommandOutput,
  ListStreamProcessorsCommand,
} from "./commands/ListStreamProcessorsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type ListUsersCommandInput, type ListUsersCommandOutput, ListUsersCommand } from "./commands/ListUsersCommand";
import {
  type PutProjectPolicyCommandInput,
  type PutProjectPolicyCommandOutput,
  PutProjectPolicyCommand,
} from "./commands/PutProjectPolicyCommand";
import {
  type RecognizeCelebritiesCommandInput,
  type RecognizeCelebritiesCommandOutput,
  RecognizeCelebritiesCommand,
} from "./commands/RecognizeCelebritiesCommand";
import {
  type SearchFacesByImageCommandInput,
  type SearchFacesByImageCommandOutput,
  SearchFacesByImageCommand,
} from "./commands/SearchFacesByImageCommand";
import {
  type SearchFacesCommandInput,
  type SearchFacesCommandOutput,
  SearchFacesCommand,
} from "./commands/SearchFacesCommand";
import {
  type SearchUsersByImageCommandInput,
  type SearchUsersByImageCommandOutput,
  SearchUsersByImageCommand,
} from "./commands/SearchUsersByImageCommand";
import {
  type SearchUsersCommandInput,
  type SearchUsersCommandOutput,
  SearchUsersCommand,
} from "./commands/SearchUsersCommand";
import {
  type StartCelebrityRecognitionCommandInput,
  type StartCelebrityRecognitionCommandOutput,
  StartCelebrityRecognitionCommand,
} from "./commands/StartCelebrityRecognitionCommand";
import {
  type StartContentModerationCommandInput,
  type StartContentModerationCommandOutput,
  StartContentModerationCommand,
} from "./commands/StartContentModerationCommand";
import {
  type StartFaceDetectionCommandInput,
  type StartFaceDetectionCommandOutput,
  StartFaceDetectionCommand,
} from "./commands/StartFaceDetectionCommand";
import {
  type StartFaceSearchCommandInput,
  type StartFaceSearchCommandOutput,
  StartFaceSearchCommand,
} from "./commands/StartFaceSearchCommand";
import {
  type StartLabelDetectionCommandInput,
  type StartLabelDetectionCommandOutput,
  StartLabelDetectionCommand,
} from "./commands/StartLabelDetectionCommand";
import {
  type StartMediaAnalysisJobCommandInput,
  type StartMediaAnalysisJobCommandOutput,
  StartMediaAnalysisJobCommand,
} from "./commands/StartMediaAnalysisJobCommand";
import {
  type StartPersonTrackingCommandInput,
  type StartPersonTrackingCommandOutput,
  StartPersonTrackingCommand,
} from "./commands/StartPersonTrackingCommand";
import {
  type StartProjectVersionCommandInput,
  type StartProjectVersionCommandOutput,
  StartProjectVersionCommand,
} from "./commands/StartProjectVersionCommand";
import {
  type StartSegmentDetectionCommandInput,
  type StartSegmentDetectionCommandOutput,
  StartSegmentDetectionCommand,
} from "./commands/StartSegmentDetectionCommand";
import {
  type StartStreamProcessorCommandInput,
  type StartStreamProcessorCommandOutput,
  StartStreamProcessorCommand,
} from "./commands/StartStreamProcessorCommand";
import {
  type StartTextDetectionCommandInput,
  type StartTextDetectionCommandOutput,
  StartTextDetectionCommand,
} from "./commands/StartTextDetectionCommand";
import {
  type StopProjectVersionCommandInput,
  type StopProjectVersionCommandOutput,
  StopProjectVersionCommand,
} from "./commands/StopProjectVersionCommand";
import {
  type StopStreamProcessorCommandInput,
  type StopStreamProcessorCommandOutput,
  StopStreamProcessorCommand,
} from "./commands/StopStreamProcessorCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDatasetEntriesCommandInput,
  type UpdateDatasetEntriesCommandOutput,
  UpdateDatasetEntriesCommand,
} from "./commands/UpdateDatasetEntriesCommand";
import {
  type UpdateStreamProcessorCommandInput,
  type UpdateStreamProcessorCommandOutput,
  UpdateStreamProcessorCommand,
} from "./commands/UpdateStreamProcessorCommand";
import type { RekognitionServiceException } from "./models/RekognitionServiceException";
import { paginateDescribeProjects } from "./pagination/DescribeProjectsPaginator";
import { paginateDescribeProjectVersions } from "./pagination/DescribeProjectVersionsPaginator";
import { paginateGetCelebrityRecognition } from "./pagination/GetCelebrityRecognitionPaginator";
import { paginateGetContentModeration } from "./pagination/GetContentModerationPaginator";
import { paginateGetFaceDetection } from "./pagination/GetFaceDetectionPaginator";
import { paginateGetFaceSearch } from "./pagination/GetFaceSearchPaginator";
import { paginateGetLabelDetection } from "./pagination/GetLabelDetectionPaginator";
import { paginateGetPersonTracking } from "./pagination/GetPersonTrackingPaginator";
import { paginateGetSegmentDetection } from "./pagination/GetSegmentDetectionPaginator";
import { paginateGetTextDetection } from "./pagination/GetTextDetectionPaginator";
import { paginateListCollections } from "./pagination/ListCollectionsPaginator";
import { paginateListDatasetEntries } from "./pagination/ListDatasetEntriesPaginator";
import { paginateListDatasetLabels } from "./pagination/ListDatasetLabelsPaginator";
import { paginateListFaces } from "./pagination/ListFacesPaginator";
import { paginateListMediaAnalysisJobs } from "./pagination/ListMediaAnalysisJobsPaginator";
import { paginateListProjectPolicies } from "./pagination/ListProjectPoliciesPaginator";
import { paginateListStreamProcessors } from "./pagination/ListStreamProcessorsPaginator";
import { paginateListUsers } from "./pagination/ListUsersPaginator";
import { RekognitionClient } from "./RekognitionClient";
import { waitUntilProjectVersionRunning } from "./waiters/waitForProjectVersionRunning";
import { waitUntilProjectVersionTrainingCompleted } from "./waiters/waitForProjectVersionTrainingCompleted";

const commands = {
  AssociateFacesCommand,
  CompareFacesCommand,
  CopyProjectVersionCommand,
  CreateCollectionCommand,
  CreateDatasetCommand,
  CreateFaceLivenessSessionCommand,
  CreateProjectCommand,
  CreateProjectVersionCommand,
  CreateStreamProcessorCommand,
  CreateUserCommand,
  DeleteCollectionCommand,
  DeleteDatasetCommand,
  DeleteFacesCommand,
  DeleteProjectCommand,
  DeleteProjectPolicyCommand,
  DeleteProjectVersionCommand,
  DeleteStreamProcessorCommand,
  DeleteUserCommand,
  DescribeCollectionCommand,
  DescribeDatasetCommand,
  DescribeProjectsCommand,
  DescribeProjectVersionsCommand,
  DescribeStreamProcessorCommand,
  DetectCustomLabelsCommand,
  DetectFacesCommand,
  DetectLabelsCommand,
  DetectModerationLabelsCommand,
  DetectProtectiveEquipmentCommand,
  DetectTextCommand,
  DisassociateFacesCommand,
  DistributeDatasetEntriesCommand,
  GetCelebrityInfoCommand,
  GetCelebrityRecognitionCommand,
  GetContentModerationCommand,
  GetFaceDetectionCommand,
  GetFaceLivenessSessionResultsCommand,
  GetFaceSearchCommand,
  GetLabelDetectionCommand,
  GetMediaAnalysisJobCommand,
  GetPersonTrackingCommand,
  GetSegmentDetectionCommand,
  GetTextDetectionCommand,
  IndexFacesCommand,
  ListCollectionsCommand,
  ListDatasetEntriesCommand,
  ListDatasetLabelsCommand,
  ListFacesCommand,
  ListMediaAnalysisJobsCommand,
  ListProjectPoliciesCommand,
  ListStreamProcessorsCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  PutProjectPolicyCommand,
  RecognizeCelebritiesCommand,
  SearchFacesCommand,
  SearchFacesByImageCommand,
  SearchUsersCommand,
  SearchUsersByImageCommand,
  StartCelebrityRecognitionCommand,
  StartContentModerationCommand,
  StartFaceDetectionCommand,
  StartFaceSearchCommand,
  StartLabelDetectionCommand,
  StartMediaAnalysisJobCommand,
  StartPersonTrackingCommand,
  StartProjectVersionCommand,
  StartSegmentDetectionCommand,
  StartStreamProcessorCommand,
  StartTextDetectionCommand,
  StopProjectVersionCommand,
  StopStreamProcessorCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasetEntriesCommand,
  UpdateStreamProcessorCommand,
};
const paginators = {
  paginateDescribeProjects,
  paginateDescribeProjectVersions,
  paginateGetCelebrityRecognition,
  paginateGetContentModeration,
  paginateGetFaceDetection,
  paginateGetFaceSearch,
  paginateGetLabelDetection,
  paginateGetPersonTracking,
  paginateGetSegmentDetection,
  paginateGetTextDetection,
  paginateListCollections,
  paginateListDatasetEntries,
  paginateListDatasetLabels,
  paginateListFaces,
  paginateListMediaAnalysisJobs,
  paginateListProjectPolicies,
  paginateListStreamProcessors,
  paginateListUsers,
};
const waiters = {
  waitUntilProjectVersionRunning,
  waitUntilProjectVersionTrainingCompleted,
};

/**
 * @public
 */
export interface RekognitionRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Rekognition {
  /**
   * @see {@link AssociateFacesCommand}
   */
  associateFaces(
    args: AssociateFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<AssociateFacesCommandOutput>;
  associateFaces(
    args: AssociateFacesCommandInput,
    cb: (err: any, data?: AssociateFacesCommandOutput) => void
  ): void;
  associateFaces(
    args: AssociateFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: AssociateFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CompareFacesCommand}
   */
  compareFaces(
    args: CompareFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CompareFacesCommandOutput>;
  compareFaces(
    args: CompareFacesCommandInput,
    cb: (err: any, data?: CompareFacesCommandOutput) => void
  ): void;
  compareFaces(
    args: CompareFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CompareFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyProjectVersionCommand}
   */
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CopyProjectVersionCommandOutput>;
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    cb: (err: any, data?: CopyProjectVersionCommandOutput) => void
  ): void;
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CopyProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateCollectionCommandOutput>;
  createCollection(
    args: CreateCollectionCommandInput,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  createCollection(
    args: CreateCollectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFaceLivenessSessionCommand}
   */
  createFaceLivenessSession(): Promise<CreateFaceLivenessSessionCommandOutput>;
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateFaceLivenessSessionCommandOutput>;
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    cb: (err: any, data?: CreateFaceLivenessSessionCommandOutput) => void
  ): void;
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateFaceLivenessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  createProject(
    args: CreateProjectCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectVersionCommand}
   */
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateProjectVersionCommandOutput>;
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    cb: (err: any, data?: CreateProjectVersionCommandOutput) => void
  ): void;
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamProcessorCommand}
   */
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateStreamProcessorCommandOutput>;
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    cb: (err: any, data?: CreateStreamProcessorCommandOutput) => void
  ): void;
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteCollectionCommandOutput>;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFacesCommand}
   */
  deleteFaces(
    args: DeleteFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteFacesCommandOutput>;
  deleteFaces(
    args: DeleteFacesCommandInput,
    cb: (err: any, data?: DeleteFacesCommandOutput) => void
  ): void;
  deleteFaces(
    args: DeleteFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectPolicyCommand}
   */
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteProjectPolicyCommandOutput>;
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    cb: (err: any, data?: DeleteProjectPolicyCommandOutput) => void
  ): void;
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteProjectPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectVersionCommand}
   */
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteProjectVersionCommandOutput>;
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    cb: (err: any, data?: DeleteProjectVersionCommandOutput) => void
  ): void;
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamProcessorCommand}
   */
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteStreamProcessorCommandOutput>;
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    cb: (err: any, data?: DeleteStreamProcessorCommandOutput) => void
  ): void;
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCollectionCommand}
   */
  describeCollection(
    args: DescribeCollectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DescribeCollectionCommandOutput>;
  describeCollection(
    args: DescribeCollectionCommandInput,
    cb: (err: any, data?: DescribeCollectionCommandOutput) => void
  ): void;
  describeCollection(
    args: DescribeCollectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DescribeCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectsCommand}
   */
  describeProjects(): Promise<DescribeProjectsCommandOutput>;
  describeProjects(
    args: DescribeProjectsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DescribeProjectsCommandOutput>;
  describeProjects(
    args: DescribeProjectsCommandInput,
    cb: (err: any, data?: DescribeProjectsCommandOutput) => void
  ): void;
  describeProjects(
    args: DescribeProjectsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DescribeProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectVersionsCommand}
   */
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DescribeProjectVersionsCommandOutput>;
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    cb: (err: any, data?: DescribeProjectVersionsCommandOutput) => void
  ): void;
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DescribeProjectVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamProcessorCommand}
   */
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DescribeStreamProcessorCommandOutput>;
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    cb: (err: any, data?: DescribeStreamProcessorCommandOutput) => void
  ): void;
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DescribeStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectCustomLabelsCommand}
   */
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectCustomLabelsCommandOutput>;
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    cb: (err: any, data?: DetectCustomLabelsCommandOutput) => void
  ): void;
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectCustomLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectFacesCommand}
   */
  detectFaces(
    args: DetectFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectFacesCommandOutput>;
  detectFaces(
    args: DetectFacesCommandInput,
    cb: (err: any, data?: DetectFacesCommandOutput) => void
  ): void;
  detectFaces(
    args: DetectFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectLabelsCommand}
   */
  detectLabels(
    args: DetectLabelsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectLabelsCommandOutput>;
  detectLabels(
    args: DetectLabelsCommandInput,
    cb: (err: any, data?: DetectLabelsCommandOutput) => void
  ): void;
  detectLabels(
    args: DetectLabelsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectModerationLabelsCommand}
   */
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectModerationLabelsCommandOutput>;
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    cb: (err: any, data?: DetectModerationLabelsCommandOutput) => void
  ): void;
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectModerationLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectProtectiveEquipmentCommand}
   */
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectProtectiveEquipmentCommandOutput>;
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    cb: (err: any, data?: DetectProtectiveEquipmentCommandOutput) => void
  ): void;
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectProtectiveEquipmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectTextCommand}
   */
  detectText(
    args: DetectTextCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DetectTextCommandOutput>;
  detectText(
    args: DetectTextCommandInput,
    cb: (err: any, data?: DetectTextCommandOutput) => void
  ): void;
  detectText(
    args: DetectTextCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DetectTextCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFacesCommand}
   */
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DisassociateFacesCommandOutput>;
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    cb: (err: any, data?: DisassociateFacesCommandOutput) => void
  ): void;
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DisassociateFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DistributeDatasetEntriesCommand}
   */
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<DistributeDatasetEntriesCommandOutput>;
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    cb: (err: any, data?: DistributeDatasetEntriesCommandOutput) => void
  ): void;
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: DistributeDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCelebrityInfoCommand}
   */
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetCelebrityInfoCommandOutput>;
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    cb: (err: any, data?: GetCelebrityInfoCommandOutput) => void
  ): void;
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetCelebrityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCelebrityRecognitionCommand}
   */
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetCelebrityRecognitionCommandOutput>;
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    cb: (err: any, data?: GetCelebrityRecognitionCommandOutput) => void
  ): void;
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetCelebrityRecognitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentModerationCommand}
   */
  getContentModeration(
    args: GetContentModerationCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetContentModerationCommandOutput>;
  getContentModeration(
    args: GetContentModerationCommandInput,
    cb: (err: any, data?: GetContentModerationCommandOutput) => void
  ): void;
  getContentModeration(
    args: GetContentModerationCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetContentModerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceDetectionCommand}
   */
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetFaceDetectionCommandOutput>;
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    cb: (err: any, data?: GetFaceDetectionCommandOutput) => void
  ): void;
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetFaceDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceLivenessSessionResultsCommand}
   */
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetFaceLivenessSessionResultsCommandOutput>;
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    cb: (err: any, data?: GetFaceLivenessSessionResultsCommandOutput) => void
  ): void;
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetFaceLivenessSessionResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceSearchCommand}
   */
  getFaceSearch(
    args: GetFaceSearchCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetFaceSearchCommandOutput>;
  getFaceSearch(
    args: GetFaceSearchCommandInput,
    cb: (err: any, data?: GetFaceSearchCommandOutput) => void
  ): void;
  getFaceSearch(
    args: GetFaceSearchCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetFaceSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLabelDetectionCommand}
   */
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetLabelDetectionCommandOutput>;
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    cb: (err: any, data?: GetLabelDetectionCommandOutput) => void
  ): void;
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetLabelDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaAnalysisJobCommand}
   */
  getMediaAnalysisJob(
    args: GetMediaAnalysisJobCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetMediaAnalysisJobCommandOutput>;
  getMediaAnalysisJob(
    args: GetMediaAnalysisJobCommandInput,
    cb: (err: any, data?: GetMediaAnalysisJobCommandOutput) => void
  ): void;
  getMediaAnalysisJob(
    args: GetMediaAnalysisJobCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetMediaAnalysisJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPersonTrackingCommand}
   */
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetPersonTrackingCommandOutput>;
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    cb: (err: any, data?: GetPersonTrackingCommandOutput) => void
  ): void;
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetPersonTrackingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentDetectionCommand}
   */
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetSegmentDetectionCommandOutput>;
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    cb: (err: any, data?: GetSegmentDetectionCommandOutput) => void
  ): void;
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetSegmentDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTextDetectionCommand}
   */
  getTextDetection(
    args: GetTextDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<GetTextDetectionCommandOutput>;
  getTextDetection(
    args: GetTextDetectionCommandInput,
    cb: (err: any, data?: GetTextDetectionCommandOutput) => void
  ): void;
  getTextDetection(
    args: GetTextDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: GetTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link IndexFacesCommand}
   */
  indexFaces(
    args: IndexFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<IndexFacesCommandOutput>;
  indexFaces(
    args: IndexFacesCommandInput,
    cb: (err: any, data?: IndexFacesCommandOutput) => void
  ): void;
  indexFaces(
    args: IndexFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: IndexFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListCollectionsCommandOutput>;
  listCollections(
    args: ListCollectionsCommandInput,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;
  listCollections(
    args: ListCollectionsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetEntriesCommand}
   */
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListDatasetEntriesCommandOutput>;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetLabelsCommand}
   */
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListDatasetLabelsCommandOutput>;
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    cb: (err: any, data?: ListDatasetLabelsCommandOutput) => void
  ): void;
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListDatasetLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFacesCommand}
   */
  listFaces(
    args: ListFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListFacesCommandOutput>;
  listFaces(
    args: ListFacesCommandInput,
    cb: (err: any, data?: ListFacesCommandOutput) => void
  ): void;
  listFaces(
    args: ListFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMediaAnalysisJobsCommand}
   */
  listMediaAnalysisJobs(): Promise<ListMediaAnalysisJobsCommandOutput>;
  listMediaAnalysisJobs(
    args: ListMediaAnalysisJobsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListMediaAnalysisJobsCommandOutput>;
  listMediaAnalysisJobs(
    args: ListMediaAnalysisJobsCommandInput,
    cb: (err: any, data?: ListMediaAnalysisJobsCommandOutput) => void
  ): void;
  listMediaAnalysisJobs(
    args: ListMediaAnalysisJobsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListMediaAnalysisJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectPoliciesCommand}
   */
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListProjectPoliciesCommandOutput>;
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    cb: (err: any, data?: ListProjectPoliciesCommandOutput) => void
  ): void;
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListProjectPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamProcessorsCommand}
   */
  listStreamProcessors(): Promise<ListStreamProcessorsCommandOutput>;
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListStreamProcessorsCommandOutput>;
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    cb: (err: any, data?: ListStreamProcessorsCommandOutput) => void
  ): void;
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListStreamProcessorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(
    args: ListUsersCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<ListUsersCommandOutput>;
  listUsers(
    args: ListUsersCommandInput,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  listUsers(
    args: ListUsersCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProjectPolicyCommand}
   */
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<PutProjectPolicyCommandOutput>;
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    cb: (err: any, data?: PutProjectPolicyCommandOutput) => void
  ): void;
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: PutProjectPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeCelebritiesCommand}
   */
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<RecognizeCelebritiesCommandOutput>;
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    cb: (err: any, data?: RecognizeCelebritiesCommandOutput) => void
  ): void;
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: RecognizeCelebritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFacesCommand}
   */
  searchFaces(
    args: SearchFacesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<SearchFacesCommandOutput>;
  searchFaces(
    args: SearchFacesCommandInput,
    cb: (err: any, data?: SearchFacesCommandOutput) => void
  ): void;
  searchFaces(
    args: SearchFacesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: SearchFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFacesByImageCommand}
   */
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<SearchFacesByImageCommandOutput>;
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    cb: (err: any, data?: SearchFacesByImageCommandOutput) => void
  ): void;
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: SearchFacesByImageCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(
    args: SearchUsersCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<SearchUsersCommandOutput>;
  searchUsers(
    args: SearchUsersCommandInput,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersByImageCommand}
   */
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<SearchUsersByImageCommandOutput>;
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    cb: (err: any, data?: SearchUsersByImageCommandOutput) => void
  ): void;
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: SearchUsersByImageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCelebrityRecognitionCommand}
   */
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartCelebrityRecognitionCommandOutput>;
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    cb: (err: any, data?: StartCelebrityRecognitionCommandOutput) => void
  ): void;
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartCelebrityRecognitionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContentModerationCommand}
   */
  startContentModeration(
    args: StartContentModerationCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartContentModerationCommandOutput>;
  startContentModeration(
    args: StartContentModerationCommandInput,
    cb: (err: any, data?: StartContentModerationCommandOutput) => void
  ): void;
  startContentModeration(
    args: StartContentModerationCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartContentModerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFaceDetectionCommand}
   */
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartFaceDetectionCommandOutput>;
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    cb: (err: any, data?: StartFaceDetectionCommandOutput) => void
  ): void;
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartFaceDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFaceSearchCommand}
   */
  startFaceSearch(
    args: StartFaceSearchCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartFaceSearchCommandOutput>;
  startFaceSearch(
    args: StartFaceSearchCommandInput,
    cb: (err: any, data?: StartFaceSearchCommandOutput) => void
  ): void;
  startFaceSearch(
    args: StartFaceSearchCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartFaceSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLabelDetectionCommand}
   */
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartLabelDetectionCommandOutput>;
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    cb: (err: any, data?: StartLabelDetectionCommandOutput) => void
  ): void;
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartLabelDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMediaAnalysisJobCommand}
   */
  startMediaAnalysisJob(
    args: StartMediaAnalysisJobCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartMediaAnalysisJobCommandOutput>;
  startMediaAnalysisJob(
    args: StartMediaAnalysisJobCommandInput,
    cb: (err: any, data?: StartMediaAnalysisJobCommandOutput) => void
  ): void;
  startMediaAnalysisJob(
    args: StartMediaAnalysisJobCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartMediaAnalysisJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPersonTrackingCommand}
   */
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartPersonTrackingCommandOutput>;
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    cb: (err: any, data?: StartPersonTrackingCommandOutput) => void
  ): void;
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartPersonTrackingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProjectVersionCommand}
   */
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartProjectVersionCommandOutput>;
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    cb: (err: any, data?: StartProjectVersionCommandOutput) => void
  ): void;
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSegmentDetectionCommand}
   */
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartSegmentDetectionCommandOutput>;
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    cb: (err: any, data?: StartSegmentDetectionCommandOutput) => void
  ): void;
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartSegmentDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamProcessorCommand}
   */
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartStreamProcessorCommandOutput>;
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    cb: (err: any, data?: StartStreamProcessorCommandOutput) => void
  ): void;
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTextDetectionCommand}
   */
  startTextDetection(
    args: StartTextDetectionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StartTextDetectionCommandOutput>;
  startTextDetection(
    args: StartTextDetectionCommandInput,
    cb: (err: any, data?: StartTextDetectionCommandOutput) => void
  ): void;
  startTextDetection(
    args: StartTextDetectionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StartTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopProjectVersionCommand}
   */
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StopProjectVersionCommandOutput>;
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    cb: (err: any, data?: StopProjectVersionCommandOutput) => void
  ): void;
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StopProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStreamProcessorCommand}
   */
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<StopStreamProcessorCommandOutput>;
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    cb: (err: any, data?: StopStreamProcessorCommandOutput) => void
  ): void;
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: StopStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetEntriesCommand}
   */
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<UpdateDatasetEntriesCommandOutput>;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamProcessorCommand}
   */
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    options?: RekognitionRequestOptions
  ): Promise<UpdateStreamProcessorCommandOutput>;
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    cb: (err: any, data?: UpdateStreamProcessorCommandOutput) => void
  ): void;
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    options: RekognitionRequestOptions,
    cb: (err: any, data?: UpdateStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeProjectsCommandOutput}.
   */
  paginateDescribeProjects(
    args?: DescribeProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeProjectsCommandOutput>;

  /**
   * @see {@link DescribeProjectVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeProjectVersionsCommandOutput}.
   */
  paginateDescribeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeProjectVersionsCommandOutput>;

  /**
   * @see {@link GetCelebrityRecognitionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCelebrityRecognitionCommandOutput}.
   */
  paginateGetCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCelebrityRecognitionCommandOutput>;

  /**
   * @see {@link GetContentModerationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetContentModerationCommandOutput}.
   */
  paginateGetContentModeration(
    args: GetContentModerationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetContentModerationCommandOutput>;

  /**
   * @see {@link GetFaceDetectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetFaceDetectionCommandOutput}.
   */
  paginateGetFaceDetection(
    args: GetFaceDetectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetFaceDetectionCommandOutput>;

  /**
   * @see {@link GetFaceSearchCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetFaceSearchCommandOutput}.
   */
  paginateGetFaceSearch(
    args: GetFaceSearchCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetFaceSearchCommandOutput>;

  /**
   * @see {@link GetLabelDetectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetLabelDetectionCommandOutput}.
   */
  paginateGetLabelDetection(
    args: GetLabelDetectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetLabelDetectionCommandOutput>;

  /**
   * @see {@link GetPersonTrackingCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPersonTrackingCommandOutput}.
   */
  paginateGetPersonTracking(
    args: GetPersonTrackingCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPersonTrackingCommandOutput>;

  /**
   * @see {@link GetSegmentDetectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetSegmentDetectionCommandOutput}.
   */
  paginateGetSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetSegmentDetectionCommandOutput>;

  /**
   * @see {@link GetTextDetectionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetTextDetectionCommandOutput}.
   */
  paginateGetTextDetection(
    args: GetTextDetectionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetTextDetectionCommandOutput>;

  /**
   * @see {@link ListCollectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollectionsCommandOutput}.
   */
  paginateListCollections(
    args?: ListCollectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollectionsCommandOutput>;

  /**
   * @see {@link ListDatasetEntriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetEntriesCommandOutput}.
   */
  paginateListDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetEntriesCommandOutput>;

  /**
   * @see {@link ListDatasetLabelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetLabelsCommandOutput}.
   */
  paginateListDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetLabelsCommandOutput>;

  /**
   * @see {@link ListFacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFacesCommandOutput}.
   */
  paginateListFaces(
    args: ListFacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFacesCommandOutput>;

  /**
   * @see {@link ListMediaAnalysisJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMediaAnalysisJobsCommandOutput}.
   */
  paginateListMediaAnalysisJobs(
    args?: ListMediaAnalysisJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMediaAnalysisJobsCommandOutput>;

  /**
   * @see {@link ListProjectPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectPoliciesCommandOutput}.
   */
  paginateListProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectPoliciesCommandOutput>;

  /**
   * @see {@link ListStreamProcessorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamProcessorsCommandOutput}.
   */
  paginateListStreamProcessors(
    args?: ListStreamProcessorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamProcessorsCommandOutput>;

  /**
   * @see {@link ListUsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListUsersCommandOutput}.
   */
  paginateListUsers(
    args: ListUsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListUsersCommandOutput>;

  /**
   * @see {@link DescribeProjectVersionsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilProjectVersionRunning(
    args: DescribeProjectVersionsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Rekognition>, "client">
  ): Promise<WaiterResult<DescribeProjectVersionsCommandOutput>>;

  /**
   * @see {@link DescribeProjectVersionsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilProjectVersionTrainingCompleted(
    args: DescribeProjectVersionsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Rekognition>, "client">
  ): Promise<WaiterResult<DescribeProjectVersionsCommandOutput>>;
}

/**
 * <p>This is the API Reference for <a href="https://docs.aws.amazon.com/rekognition/latest/dg/images.html">Amazon Rekognition Image</a>, <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/what-is.html">Amazon Rekognition Custom Labels</a>,
 *         <a href="https://docs.aws.amazon.com/rekognition/latest/dg/video.html">Amazon Rekognition Stored
 *         Video</a>, <a href="https://docs.aws.amazon.com/rekognition/latest/dg/streaming-video.html">Amazon Rekognition Streaming Video</a>. It provides descriptions of actions, data types, common
 *       parameters, and common errors.</p>
 *          <p>
 *             <b>Amazon Rekognition Image</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_AssociateFaces.html">AssociateFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CompareFaces.html">CompareFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateCollection.html">CreateCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateUser.html">CreateUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteCollection.html">DeleteCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteFaces.html">DeleteFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteUser.html">DeleteUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeCollection.html">DescribeCollection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectFaces.html">DetectFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectLabels.html">DetectLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectModerationLabels.html">DetectModerationLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectProtectiveEquipment.html">DetectProtectiveEquipment</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectText.html">DetectText</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DisassociateFaces.html">DisassociateFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityInfo.html">GetCelebrityInfo</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetMediaAnalysisJob.html">GetMediaAnalysisJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_IndexFaces.html">IndexFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListCollections.html">ListCollections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListMediaAnalysisJob.html">ListMediaAnalysisJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html">ListFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListFaces.html">ListUsers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RecognizeCelebrities.html">RecognizeCelebrities</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFaces.html">SearchFaces</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchFacesByImage.html">SearchFacesByImage</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsers.html">SearchUsers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_SearchUsersByImage.html">SearchUsersByImage</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartMediaAnalysisJob.html">StartMediaAnalysisJob</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Custom Labels</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CopyProjectVersion.html">CopyProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateDataset.html">CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProject.html">CreateProject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateProjectVersion.html">CreateProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteDataset.html">DeleteDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProject.html">DeleteProject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectPolicy.html">DeleteProjectPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteProjectVersion.html">DeleteProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeDataset.html">DescribeDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjects.html">DescribeProjects</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeProjectVersions.html">DescribeProjectVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DetectCustomLabels.html">DetectCustomLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DistributeDatasetEntries.html">DistributeDatasetEntries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetEntries.html">ListDatasetEntries</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListDatasetLabels.html">ListDatasetLabels</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListProjectPolicies.html">ListProjectPolicies</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_PutProjectPolicy.html">PutProjectPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartProjectVersion.html">StartProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopProjectVersion.html">StopProjectVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateDatasetEntries.html">UpdateDatasetEntries</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Video Stored Video</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetCelebrityRecognition.html">GetCelebrityRecognition</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetContentModeration.html">GetContentModeration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceDetection.html">GetFaceDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetFaceSearch.html">GetFaceSearch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetLabelDetection.html">GetLabelDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetPersonTracking.html">GetPersonTracking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetSegmentDetection.html">GetSegmentDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_GetTextDetection.html">GetTextDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartCelebrityRecognition.html">StartCelebrityRecognition</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartContentModeration.html">StartContentModeration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceDetection.html">StartFaceDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartFaceSearch.html">StartFaceSearch</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartLabelDetection.html">StartLabelDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartPersonTracking.html">StartPersonTracking</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartSegmentDetection.html">StartSegmentDetection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartTextDetection.html">StartTextDetection</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Rekognition Video Streaming Video</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor.html">CreateStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DeleteStreamProcessor.html">DeleteStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_DescribeStreamProcessor.html">DescribeStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_ListStreamProcessors.html">ListStreamProcessors</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StartStreamProcessor.html">StartStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StopStreamProcessor.html">StopStreamProcessor</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/rekognition/latest/APIReference/API_UpdateStreamProcessor.html">UpdateStreamProcessor</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class Rekognition extends RekognitionClient implements Rekognition {}
createAggregatedClient(commands, Rekognition, { paginators, waiters });
