// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateFacesCommand,
  AssociateFacesCommandInput,
  AssociateFacesCommandOutput,
} from "./commands/AssociateFacesCommand";
import {
  CompareFacesCommand,
  CompareFacesCommandInput,
  CompareFacesCommandOutput,
} from "./commands/CompareFacesCommand";
import {
  CopyProjectVersionCommand,
  CopyProjectVersionCommandInput,
  CopyProjectVersionCommandOutput,
} from "./commands/CopyProjectVersionCommand";
import {
  CreateCollectionCommand,
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput,
} from "./commands/CreateCollectionCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateFaceLivenessSessionCommand,
  CreateFaceLivenessSessionCommandInput,
  CreateFaceLivenessSessionCommandOutput,
} from "./commands/CreateFaceLivenessSessionCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  CreateProjectVersionCommand,
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
} from "./commands/CreateProjectVersionCommand";
import {
  CreateStreamProcessorCommand,
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
} from "./commands/CreateStreamProcessorCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteCollectionCommand,
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput,
} from "./commands/DeleteCollectionCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import { DeleteFacesCommand, DeleteFacesCommandInput, DeleteFacesCommandOutput } from "./commands/DeleteFacesCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteProjectPolicyCommand,
  DeleteProjectPolicyCommandInput,
  DeleteProjectPolicyCommandOutput,
} from "./commands/DeleteProjectPolicyCommand";
import {
  DeleteProjectVersionCommand,
  DeleteProjectVersionCommandInput,
  DeleteProjectVersionCommandOutput,
} from "./commands/DeleteProjectVersionCommand";
import {
  DeleteStreamProcessorCommand,
  DeleteStreamProcessorCommandInput,
  DeleteStreamProcessorCommandOutput,
} from "./commands/DeleteStreamProcessorCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeCollectionCommand,
  DescribeCollectionCommandInput,
  DescribeCollectionCommandOutput,
} from "./commands/DescribeCollectionCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeProjectsCommand,
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput,
} from "./commands/DescribeProjectsCommand";
import {
  DescribeProjectVersionsCommand,
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "./commands/DescribeProjectVersionsCommand";
import {
  DescribeStreamProcessorCommand,
  DescribeStreamProcessorCommandInput,
  DescribeStreamProcessorCommandOutput,
} from "./commands/DescribeStreamProcessorCommand";
import {
  DetectCustomLabelsCommand,
  DetectCustomLabelsCommandInput,
  DetectCustomLabelsCommandOutput,
} from "./commands/DetectCustomLabelsCommand";
import { DetectFacesCommand, DetectFacesCommandInput, DetectFacesCommandOutput } from "./commands/DetectFacesCommand";
import {
  DetectLabelsCommand,
  DetectLabelsCommandInput,
  DetectLabelsCommandOutput,
} from "./commands/DetectLabelsCommand";
import {
  DetectModerationLabelsCommand,
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
} from "./commands/DetectModerationLabelsCommand";
import {
  DetectProtectiveEquipmentCommand,
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
} from "./commands/DetectProtectiveEquipmentCommand";
import { DetectTextCommand, DetectTextCommandInput, DetectTextCommandOutput } from "./commands/DetectTextCommand";
import {
  DisassociateFacesCommand,
  DisassociateFacesCommandInput,
  DisassociateFacesCommandOutput,
} from "./commands/DisassociateFacesCommand";
import {
  DistributeDatasetEntriesCommand,
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
} from "./commands/DistributeDatasetEntriesCommand";
import {
  GetCelebrityInfoCommand,
  GetCelebrityInfoCommandInput,
  GetCelebrityInfoCommandOutput,
} from "./commands/GetCelebrityInfoCommand";
import {
  GetCelebrityRecognitionCommand,
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
} from "./commands/GetCelebrityRecognitionCommand";
import {
  GetContentModerationCommand,
  GetContentModerationCommandInput,
  GetContentModerationCommandOutput,
} from "./commands/GetContentModerationCommand";
import {
  GetFaceDetectionCommand,
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
} from "./commands/GetFaceDetectionCommand";
import {
  GetFaceLivenessSessionResultsCommand,
  GetFaceLivenessSessionResultsCommandInput,
  GetFaceLivenessSessionResultsCommandOutput,
} from "./commands/GetFaceLivenessSessionResultsCommand";
import {
  GetFaceSearchCommand,
  GetFaceSearchCommandInput,
  GetFaceSearchCommandOutput,
} from "./commands/GetFaceSearchCommand";
import {
  GetLabelDetectionCommand,
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
} from "./commands/GetLabelDetectionCommand";
import {
  GetPersonTrackingCommand,
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
} from "./commands/GetPersonTrackingCommand";
import {
  GetSegmentDetectionCommand,
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
} from "./commands/GetSegmentDetectionCommand";
import {
  GetTextDetectionCommand,
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
} from "./commands/GetTextDetectionCommand";
import { IndexFacesCommand, IndexFacesCommandInput, IndexFacesCommandOutput } from "./commands/IndexFacesCommand";
import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "./commands/ListCollectionsCommand";
import {
  ListDatasetEntriesCommand,
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
} from "./commands/ListDatasetEntriesCommand";
import {
  ListDatasetLabelsCommand,
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput,
} from "./commands/ListDatasetLabelsCommand";
import { ListFacesCommand, ListFacesCommandInput, ListFacesCommandOutput } from "./commands/ListFacesCommand";
import {
  ListProjectPoliciesCommand,
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "./commands/ListProjectPoliciesCommand";
import {
  ListStreamProcessorsCommand,
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "./commands/ListStreamProcessorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  PutProjectPolicyCommand,
  PutProjectPolicyCommandInput,
  PutProjectPolicyCommandOutput,
} from "./commands/PutProjectPolicyCommand";
import {
  RecognizeCelebritiesCommand,
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
} from "./commands/RecognizeCelebritiesCommand";
import {
  SearchFacesByImageCommand,
  SearchFacesByImageCommandInput,
  SearchFacesByImageCommandOutput,
} from "./commands/SearchFacesByImageCommand";
import { SearchFacesCommand, SearchFacesCommandInput, SearchFacesCommandOutput } from "./commands/SearchFacesCommand";
import {
  SearchUsersByImageCommand,
  SearchUsersByImageCommandInput,
  SearchUsersByImageCommandOutput,
} from "./commands/SearchUsersByImageCommand";
import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import {
  StartCelebrityRecognitionCommand,
  StartCelebrityRecognitionCommandInput,
  StartCelebrityRecognitionCommandOutput,
} from "./commands/StartCelebrityRecognitionCommand";
import {
  StartContentModerationCommand,
  StartContentModerationCommandInput,
  StartContentModerationCommandOutput,
} from "./commands/StartContentModerationCommand";
import {
  StartFaceDetectionCommand,
  StartFaceDetectionCommandInput,
  StartFaceDetectionCommandOutput,
} from "./commands/StartFaceDetectionCommand";
import {
  StartFaceSearchCommand,
  StartFaceSearchCommandInput,
  StartFaceSearchCommandOutput,
} from "./commands/StartFaceSearchCommand";
import {
  StartLabelDetectionCommand,
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
} from "./commands/StartLabelDetectionCommand";
import {
  StartPersonTrackingCommand,
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
} from "./commands/StartPersonTrackingCommand";
import {
  StartProjectVersionCommand,
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
} from "./commands/StartProjectVersionCommand";
import {
  StartSegmentDetectionCommand,
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
} from "./commands/StartSegmentDetectionCommand";
import {
  StartStreamProcessorCommand,
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
} from "./commands/StartStreamProcessorCommand";
import {
  StartTextDetectionCommand,
  StartTextDetectionCommandInput,
  StartTextDetectionCommandOutput,
} from "./commands/StartTextDetectionCommand";
import {
  StopProjectVersionCommand,
  StopProjectVersionCommandInput,
  StopProjectVersionCommandOutput,
} from "./commands/StopProjectVersionCommand";
import {
  StopStreamProcessorCommand,
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
} from "./commands/StopStreamProcessorCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatasetEntriesCommand,
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand";
import {
  UpdateStreamProcessorCommand,
  UpdateStreamProcessorCommandInput,
  UpdateStreamProcessorCommandOutput,
} from "./commands/UpdateStreamProcessorCommand";
import { RekognitionClient, RekognitionClientConfig } from "./RekognitionClient";

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
  GetPersonTrackingCommand,
  GetSegmentDetectionCommand,
  GetTextDetectionCommand,
  IndexFacesCommand,
  ListCollectionsCommand,
  ListDatasetEntriesCommand,
  ListDatasetLabelsCommand,
  ListFacesCommand,
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

export interface Rekognition {
  /**
   * @see {@link AssociateFacesCommand}
   */
  associateFaces(
    args: AssociateFacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFacesCommandOutput>;
  associateFaces(args: AssociateFacesCommandInput, cb: (err: any, data?: AssociateFacesCommandOutput) => void): void;
  associateFaces(
    args: AssociateFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CompareFacesCommand}
   */
  compareFaces(args: CompareFacesCommandInput, options?: __HttpHandlerOptions): Promise<CompareFacesCommandOutput>;
  compareFaces(args: CompareFacesCommandInput, cb: (err: any, data?: CompareFacesCommandOutput) => void): void;
  compareFaces(
    args: CompareFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompareFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyProjectVersionCommand}
   */
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyProjectVersionCommandOutput>;
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    cb: (err: any, data?: CopyProjectVersionCommandOutput) => void
  ): void;
  copyProjectVersion(
    args: CopyProjectVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollectionCommand}
   */
  createCollection(
    args: CreateCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollectionCommandOutput>;
  createCollection(
    args: CreateCollectionCommandInput,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;
  createCollection(
    args: CreateCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
  createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFaceLivenessSessionCommand}
   */
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFaceLivenessSessionCommandOutput>;
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    cb: (err: any, data?: CreateFaceLivenessSessionCommandOutput) => void
  ): void;
  createFaceLivenessSession(
    args: CreateFaceLivenessSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFaceLivenessSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectVersionCommand}
   */
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectVersionCommandOutput>;
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    cb: (err: any, data?: CreateProjectVersionCommandOutput) => void
  ): void;
  createProjectVersion(
    args: CreateProjectVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamProcessorCommand}
   */
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamProcessorCommandOutput>;
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    cb: (err: any, data?: CreateStreamProcessorCommandOutput) => void
  ): void;
  createStreamProcessor(
    args: CreateStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollectionCommand}
   */
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCollectionCommandOutput>;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;
  deleteCollection(
    args: DeleteCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFacesCommand}
   */
  deleteFaces(args: DeleteFacesCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFacesCommandOutput>;
  deleteFaces(args: DeleteFacesCommandInput, cb: (err: any, data?: DeleteFacesCommandOutput) => void): void;
  deleteFaces(
    args: DeleteFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectPolicyCommand}
   */
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectPolicyCommandOutput>;
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    cb: (err: any, data?: DeleteProjectPolicyCommandOutput) => void
  ): void;
  deleteProjectPolicy(
    args: DeleteProjectPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectVersionCommand}
   */
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectVersionCommandOutput>;
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    cb: (err: any, data?: DeleteProjectVersionCommandOutput) => void
  ): void;
  deleteProjectVersion(
    args: DeleteProjectVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamProcessorCommand}
   */
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamProcessorCommandOutput>;
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    cb: (err: any, data?: DeleteStreamProcessorCommandOutput) => void
  ): void;
  deleteStreamProcessor(
    args: DeleteStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCollectionCommand}
   */
  describeCollection(
    args: DescribeCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCollectionCommandOutput>;
  describeCollection(
    args: DescribeCollectionCommandInput,
    cb: (err: any, data?: DescribeCollectionCommandOutput) => void
  ): void;
  describeCollection(
    args: DescribeCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectsCommand}
   */
  describeProjects(
    args: DescribeProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectsCommandOutput>;
  describeProjects(
    args: DescribeProjectsCommandInput,
    cb: (err: any, data?: DescribeProjectsCommandOutput) => void
  ): void;
  describeProjects(
    args: DescribeProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectVersionsCommand}
   */
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectVersionsCommandOutput>;
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    cb: (err: any, data?: DescribeProjectVersionsCommandOutput) => void
  ): void;
  describeProjectVersions(
    args: DescribeProjectVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStreamProcessorCommand}
   */
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamProcessorCommandOutput>;
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    cb: (err: any, data?: DescribeStreamProcessorCommandOutput) => void
  ): void;
  describeStreamProcessor(
    args: DescribeStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectCustomLabelsCommand}
   */
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectCustomLabelsCommandOutput>;
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    cb: (err: any, data?: DetectCustomLabelsCommandOutput) => void
  ): void;
  detectCustomLabels(
    args: DetectCustomLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectCustomLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectFacesCommand}
   */
  detectFaces(args: DetectFacesCommandInput, options?: __HttpHandlerOptions): Promise<DetectFacesCommandOutput>;
  detectFaces(args: DetectFacesCommandInput, cb: (err: any, data?: DetectFacesCommandOutput) => void): void;
  detectFaces(
    args: DetectFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectLabelsCommand}
   */
  detectLabels(args: DetectLabelsCommandInput, options?: __HttpHandlerOptions): Promise<DetectLabelsCommandOutput>;
  detectLabels(args: DetectLabelsCommandInput, cb: (err: any, data?: DetectLabelsCommandOutput) => void): void;
  detectLabels(
    args: DetectLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectModerationLabelsCommand}
   */
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectModerationLabelsCommandOutput>;
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    cb: (err: any, data?: DetectModerationLabelsCommandOutput) => void
  ): void;
  detectModerationLabels(
    args: DetectModerationLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectModerationLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectProtectiveEquipmentCommand}
   */
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectProtectiveEquipmentCommandOutput>;
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    cb: (err: any, data?: DetectProtectiveEquipmentCommandOutput) => void
  ): void;
  detectProtectiveEquipment(
    args: DetectProtectiveEquipmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectProtectiveEquipmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectTextCommand}
   */
  detectText(args: DetectTextCommandInput, options?: __HttpHandlerOptions): Promise<DetectTextCommandOutput>;
  detectText(args: DetectTextCommandInput, cb: (err: any, data?: DetectTextCommandOutput) => void): void;
  detectText(
    args: DetectTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectTextCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFacesCommand}
   */
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFacesCommandOutput>;
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    cb: (err: any, data?: DisassociateFacesCommandOutput) => void
  ): void;
  disassociateFaces(
    args: DisassociateFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DistributeDatasetEntriesCommand}
   */
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DistributeDatasetEntriesCommandOutput>;
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    cb: (err: any, data?: DistributeDatasetEntriesCommandOutput) => void
  ): void;
  distributeDatasetEntries(
    args: DistributeDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DistributeDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCelebrityInfoCommand}
   */
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCelebrityInfoCommandOutput>;
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    cb: (err: any, data?: GetCelebrityInfoCommandOutput) => void
  ): void;
  getCelebrityInfo(
    args: GetCelebrityInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCelebrityInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCelebrityRecognitionCommand}
   */
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCelebrityRecognitionCommandOutput>;
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    cb: (err: any, data?: GetCelebrityRecognitionCommandOutput) => void
  ): void;
  getCelebrityRecognition(
    args: GetCelebrityRecognitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCelebrityRecognitionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentModerationCommand}
   */
  getContentModeration(
    args: GetContentModerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentModerationCommandOutput>;
  getContentModeration(
    args: GetContentModerationCommandInput,
    cb: (err: any, data?: GetContentModerationCommandOutput) => void
  ): void;
  getContentModeration(
    args: GetContentModerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentModerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceDetectionCommand}
   */
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFaceDetectionCommandOutput>;
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    cb: (err: any, data?: GetFaceDetectionCommandOutput) => void
  ): void;
  getFaceDetection(
    args: GetFaceDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFaceDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceLivenessSessionResultsCommand}
   */
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFaceLivenessSessionResultsCommandOutput>;
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    cb: (err: any, data?: GetFaceLivenessSessionResultsCommandOutput) => void
  ): void;
  getFaceLivenessSessionResults(
    args: GetFaceLivenessSessionResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFaceLivenessSessionResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFaceSearchCommand}
   */
  getFaceSearch(args: GetFaceSearchCommandInput, options?: __HttpHandlerOptions): Promise<GetFaceSearchCommandOutput>;
  getFaceSearch(args: GetFaceSearchCommandInput, cb: (err: any, data?: GetFaceSearchCommandOutput) => void): void;
  getFaceSearch(
    args: GetFaceSearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFaceSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLabelDetectionCommand}
   */
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLabelDetectionCommandOutput>;
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    cb: (err: any, data?: GetLabelDetectionCommandOutput) => void
  ): void;
  getLabelDetection(
    args: GetLabelDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLabelDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPersonTrackingCommand}
   */
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPersonTrackingCommandOutput>;
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    cb: (err: any, data?: GetPersonTrackingCommandOutput) => void
  ): void;
  getPersonTracking(
    args: GetPersonTrackingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPersonTrackingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentDetectionCommand}
   */
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentDetectionCommandOutput>;
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    cb: (err: any, data?: GetSegmentDetectionCommandOutput) => void
  ): void;
  getSegmentDetection(
    args: GetSegmentDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTextDetectionCommand}
   */
  getTextDetection(
    args: GetTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTextDetectionCommandOutput>;
  getTextDetection(
    args: GetTextDetectionCommandInput,
    cb: (err: any, data?: GetTextDetectionCommandOutput) => void
  ): void;
  getTextDetection(
    args: GetTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link IndexFacesCommand}
   */
  indexFaces(args: IndexFacesCommandInput, options?: __HttpHandlerOptions): Promise<IndexFacesCommandOutput>;
  indexFaces(args: IndexFacesCommandInput, cb: (err: any, data?: IndexFacesCommandOutput) => void): void;
  indexFaces(
    args: IndexFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IndexFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollectionsCommand}
   */
  listCollections(
    args: ListCollectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollectionsCommandOutput>;
  listCollections(args: ListCollectionsCommandInput, cb: (err: any, data?: ListCollectionsCommandOutput) => void): void;
  listCollections(
    args: ListCollectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetEntriesCommand}
   */
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetEntriesCommandOutput>;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;
  listDatasetEntries(
    args: ListDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetLabelsCommand}
   */
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetLabelsCommandOutput>;
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    cb: (err: any, data?: ListDatasetLabelsCommandOutput) => void
  ): void;
  listDatasetLabels(
    args: ListDatasetLabelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetLabelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFacesCommand}
   */
  listFaces(args: ListFacesCommandInput, options?: __HttpHandlerOptions): Promise<ListFacesCommandOutput>;
  listFaces(args: ListFacesCommandInput, cb: (err: any, data?: ListFacesCommandOutput) => void): void;
  listFaces(
    args: ListFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectPoliciesCommand}
   */
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectPoliciesCommandOutput>;
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    cb: (err: any, data?: ListProjectPoliciesCommandOutput) => void
  ): void;
  listProjectPolicies(
    args: ListProjectPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamProcessorsCommand}
   */
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamProcessorsCommandOutput>;
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    cb: (err: any, data?: ListStreamProcessorsCommandOutput) => void
  ): void;
  listStreamProcessors(
    args: ListStreamProcessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamProcessorsCommandOutput) => void
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
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProjectPolicyCommand}
   */
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProjectPolicyCommandOutput>;
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    cb: (err: any, data?: PutProjectPolicyCommandOutput) => void
  ): void;
  putProjectPolicy(
    args: PutProjectPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProjectPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeCelebritiesCommand}
   */
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecognizeCelebritiesCommandOutput>;
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    cb: (err: any, data?: RecognizeCelebritiesCommandOutput) => void
  ): void;
  recognizeCelebrities(
    args: RecognizeCelebritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecognizeCelebritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFacesCommand}
   */
  searchFaces(args: SearchFacesCommandInput, options?: __HttpHandlerOptions): Promise<SearchFacesCommandOutput>;
  searchFaces(args: SearchFacesCommandInput, cb: (err: any, data?: SearchFacesCommandOutput) => void): void;
  searchFaces(
    args: SearchFacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFacesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFacesByImageCommand}
   */
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFacesByImageCommandOutput>;
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    cb: (err: any, data?: SearchFacesByImageCommandOutput) => void
  ): void;
  searchFacesByImage(
    args: SearchFacesByImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFacesByImageCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersCommand}
   */
  searchUsers(args: SearchUsersCommandInput, options?: __HttpHandlerOptions): Promise<SearchUsersCommandOutput>;
  searchUsers(args: SearchUsersCommandInput, cb: (err: any, data?: SearchUsersCommandOutput) => void): void;
  searchUsers(
    args: SearchUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchUsersByImageCommand}
   */
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchUsersByImageCommandOutput>;
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    cb: (err: any, data?: SearchUsersByImageCommandOutput) => void
  ): void;
  searchUsersByImage(
    args: SearchUsersByImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchUsersByImageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCelebrityRecognitionCommand}
   */
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCelebrityRecognitionCommandOutput>;
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    cb: (err: any, data?: StartCelebrityRecognitionCommandOutput) => void
  ): void;
  startCelebrityRecognition(
    args: StartCelebrityRecognitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCelebrityRecognitionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContentModerationCommand}
   */
  startContentModeration(
    args: StartContentModerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContentModerationCommandOutput>;
  startContentModeration(
    args: StartContentModerationCommandInput,
    cb: (err: any, data?: StartContentModerationCommandOutput) => void
  ): void;
  startContentModeration(
    args: StartContentModerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContentModerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFaceDetectionCommand}
   */
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFaceDetectionCommandOutput>;
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    cb: (err: any, data?: StartFaceDetectionCommandOutput) => void
  ): void;
  startFaceDetection(
    args: StartFaceDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFaceDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFaceSearchCommand}
   */
  startFaceSearch(
    args: StartFaceSearchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFaceSearchCommandOutput>;
  startFaceSearch(args: StartFaceSearchCommandInput, cb: (err: any, data?: StartFaceSearchCommandOutput) => void): void;
  startFaceSearch(
    args: StartFaceSearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFaceSearchCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLabelDetectionCommand}
   */
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartLabelDetectionCommandOutput>;
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    cb: (err: any, data?: StartLabelDetectionCommandOutput) => void
  ): void;
  startLabelDetection(
    args: StartLabelDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartLabelDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPersonTrackingCommand}
   */
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPersonTrackingCommandOutput>;
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    cb: (err: any, data?: StartPersonTrackingCommandOutput) => void
  ): void;
  startPersonTracking(
    args: StartPersonTrackingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPersonTrackingCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProjectVersionCommand}
   */
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProjectVersionCommandOutput>;
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    cb: (err: any, data?: StartProjectVersionCommandOutput) => void
  ): void;
  startProjectVersion(
    args: StartProjectVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSegmentDetectionCommand}
   */
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSegmentDetectionCommandOutput>;
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    cb: (err: any, data?: StartSegmentDetectionCommandOutput) => void
  ): void;
  startSegmentDetection(
    args: StartSegmentDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSegmentDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartStreamProcessorCommand}
   */
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamProcessorCommandOutput>;
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    cb: (err: any, data?: StartStreamProcessorCommandOutput) => void
  ): void;
  startStreamProcessor(
    args: StartStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamProcessorCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTextDetectionCommand}
   */
  startTextDetection(
    args: StartTextDetectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTextDetectionCommandOutput>;
  startTextDetection(
    args: StartTextDetectionCommandInput,
    cb: (err: any, data?: StartTextDetectionCommandOutput) => void
  ): void;
  startTextDetection(
    args: StartTextDetectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTextDetectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopProjectVersionCommand}
   */
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopProjectVersionCommandOutput>;
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    cb: (err: any, data?: StopProjectVersionCommandOutput) => void
  ): void;
  stopProjectVersion(
    args: StopProjectVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopProjectVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopStreamProcessorCommand}
   */
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStreamProcessorCommandOutput>;
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    cb: (err: any, data?: StopStreamProcessorCommandOutput) => void
  ): void;
  stopStreamProcessor(
    args: StopStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamProcessorCommandOutput) => void
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
   * @see {@link UpdateDatasetEntriesCommand}
   */
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetEntriesCommandOutput>;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;
  updateDatasetEntries(
    args: UpdateDatasetEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamProcessorCommand}
   */
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamProcessorCommandOutput>;
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    cb: (err: any, data?: UpdateStreamProcessorCommandOutput) => void
  ): void;
  updateStreamProcessor(
    args: UpdateStreamProcessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamProcessorCommandOutput) => void
  ): void;
}

/**
 * @public
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
 */
export class Rekognition extends RekognitionClient implements Rekognition {}
createAggregatedClient(commands, Rekognition);
