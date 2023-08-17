// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchDetectDominantLanguageCommand,
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
} from "./commands/BatchDetectDominantLanguageCommand";
import {
  BatchDetectEntitiesCommand,
  BatchDetectEntitiesCommandInput,
  BatchDetectEntitiesCommandOutput,
} from "./commands/BatchDetectEntitiesCommand";
import {
  BatchDetectKeyPhrasesCommand,
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
} from "./commands/BatchDetectKeyPhrasesCommand";
import {
  BatchDetectSentimentCommand,
  BatchDetectSentimentCommandInput,
  BatchDetectSentimentCommandOutput,
} from "./commands/BatchDetectSentimentCommand";
import {
  BatchDetectSyntaxCommand,
  BatchDetectSyntaxCommandInput,
  BatchDetectSyntaxCommandOutput,
} from "./commands/BatchDetectSyntaxCommand";
import {
  BatchDetectTargetedSentimentCommand,
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
} from "./commands/BatchDetectTargetedSentimentCommand";
import {
  ClassifyDocumentCommand,
  ClassifyDocumentCommandInput,
  ClassifyDocumentCommandOutput,
} from "./commands/ClassifyDocumentCommand";
import {
  ContainsPiiEntitiesCommand,
  ContainsPiiEntitiesCommandInput,
  ContainsPiiEntitiesCommandOutput,
} from "./commands/ContainsPiiEntitiesCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateDocumentClassifierCommand,
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "./commands/CreateDocumentClassifierCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  CreateEntityRecognizerCommand,
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "./commands/CreateEntityRecognizerCommand";
import {
  CreateFlywheelCommand,
  CreateFlywheelCommandInput,
  CreateFlywheelCommandOutput,
} from "./commands/CreateFlywheelCommand";
import {
  DeleteDocumentClassifierCommand,
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "./commands/DeleteDocumentClassifierCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEntityRecognizerCommand,
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "./commands/DeleteEntityRecognizerCommand";
import {
  DeleteFlywheelCommand,
  DeleteFlywheelCommandInput,
  DeleteFlywheelCommandOutput,
} from "./commands/DeleteFlywheelCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDocumentClassificationJobCommand,
  DescribeDocumentClassificationJobCommandInput,
  DescribeDocumentClassificationJobCommandOutput,
} from "./commands/DescribeDocumentClassificationJobCommand";
import {
  DescribeDocumentClassifierCommand,
  DescribeDocumentClassifierCommandInput,
  DescribeDocumentClassifierCommandOutput,
} from "./commands/DescribeDocumentClassifierCommand";
import {
  DescribeDominantLanguageDetectionJobCommand,
  DescribeDominantLanguageDetectionJobCommandInput,
  DescribeDominantLanguageDetectionJobCommandOutput,
} from "./commands/DescribeDominantLanguageDetectionJobCommand";
import {
  DescribeEndpointCommand,
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput,
} from "./commands/DescribeEndpointCommand";
import {
  DescribeEntitiesDetectionJobCommand,
  DescribeEntitiesDetectionJobCommandInput,
  DescribeEntitiesDetectionJobCommandOutput,
} from "./commands/DescribeEntitiesDetectionJobCommand";
import {
  DescribeEntityRecognizerCommand,
  DescribeEntityRecognizerCommandInput,
  DescribeEntityRecognizerCommandOutput,
} from "./commands/DescribeEntityRecognizerCommand";
import {
  DescribeEventsDetectionJobCommand,
  DescribeEventsDetectionJobCommandInput,
  DescribeEventsDetectionJobCommandOutput,
} from "./commands/DescribeEventsDetectionJobCommand";
import {
  DescribeFlywheelCommand,
  DescribeFlywheelCommandInput,
  DescribeFlywheelCommandOutput,
} from "./commands/DescribeFlywheelCommand";
import {
  DescribeFlywheelIterationCommand,
  DescribeFlywheelIterationCommandInput,
  DescribeFlywheelIterationCommandOutput,
} from "./commands/DescribeFlywheelIterationCommand";
import {
  DescribeKeyPhrasesDetectionJobCommand,
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
} from "./commands/DescribeKeyPhrasesDetectionJobCommand";
import {
  DescribePiiEntitiesDetectionJobCommand,
  DescribePiiEntitiesDetectionJobCommandInput,
  DescribePiiEntitiesDetectionJobCommandOutput,
} from "./commands/DescribePiiEntitiesDetectionJobCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeSentimentDetectionJobCommand,
  DescribeSentimentDetectionJobCommandInput,
  DescribeSentimentDetectionJobCommandOutput,
} from "./commands/DescribeSentimentDetectionJobCommand";
import {
  DescribeTargetedSentimentDetectionJobCommand,
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
} from "./commands/DescribeTargetedSentimentDetectionJobCommand";
import {
  DescribeTopicsDetectionJobCommand,
  DescribeTopicsDetectionJobCommandInput,
  DescribeTopicsDetectionJobCommandOutput,
} from "./commands/DescribeTopicsDetectionJobCommand";
import {
  DetectDominantLanguageCommand,
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
} from "./commands/DetectDominantLanguageCommand";
import {
  DetectEntitiesCommand,
  DetectEntitiesCommandInput,
  DetectEntitiesCommandOutput,
} from "./commands/DetectEntitiesCommand";
import {
  DetectKeyPhrasesCommand,
  DetectKeyPhrasesCommandInput,
  DetectKeyPhrasesCommandOutput,
} from "./commands/DetectKeyPhrasesCommand";
import {
  DetectPiiEntitiesCommand,
  DetectPiiEntitiesCommandInput,
  DetectPiiEntitiesCommandOutput,
} from "./commands/DetectPiiEntitiesCommand";
import {
  DetectSentimentCommand,
  DetectSentimentCommandInput,
  DetectSentimentCommandOutput,
} from "./commands/DetectSentimentCommand";
import {
  DetectSyntaxCommand,
  DetectSyntaxCommandInput,
  DetectSyntaxCommandOutput,
} from "./commands/DetectSyntaxCommand";
import {
  DetectTargetedSentimentCommand,
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
} from "./commands/DetectTargetedSentimentCommand";
import { ImportModelCommand, ImportModelCommandInput, ImportModelCommandOutput } from "./commands/ImportModelCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListDocumentClassificationJobsCommand,
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "./commands/ListDocumentClassificationJobsCommand";
import {
  ListDocumentClassifiersCommand,
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "./commands/ListDocumentClassifiersCommand";
import {
  ListDocumentClassifierSummariesCommand,
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "./commands/ListDocumentClassifierSummariesCommand";
import {
  ListDominantLanguageDetectionJobsCommand,
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "./commands/ListDominantLanguageDetectionJobsCommand";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "./commands/ListEndpointsCommand";
import {
  ListEntitiesDetectionJobsCommand,
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "./commands/ListEntitiesDetectionJobsCommand";
import {
  ListEntityRecognizersCommand,
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "./commands/ListEntityRecognizersCommand";
import {
  ListEntityRecognizerSummariesCommand,
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "./commands/ListEntityRecognizerSummariesCommand";
import {
  ListEventsDetectionJobsCommand,
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput,
} from "./commands/ListEventsDetectionJobsCommand";
import {
  ListFlywheelIterationHistoryCommand,
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "./commands/ListFlywheelIterationHistoryCommand";
import {
  ListFlywheelsCommand,
  ListFlywheelsCommandInput,
  ListFlywheelsCommandOutput,
} from "./commands/ListFlywheelsCommand";
import {
  ListKeyPhrasesDetectionJobsCommand,
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "./commands/ListKeyPhrasesDetectionJobsCommand";
import {
  ListPiiEntitiesDetectionJobsCommand,
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
} from "./commands/ListPiiEntitiesDetectionJobsCommand";
import {
  ListSentimentDetectionJobsCommand,
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "./commands/ListSentimentDetectionJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetedSentimentDetectionJobsCommand,
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "./commands/ListTargetedSentimentDetectionJobsCommand";
import {
  ListTopicsDetectionJobsCommand,
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "./commands/ListTopicsDetectionJobsCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  StartDocumentClassificationJobCommand,
  StartDocumentClassificationJobCommandInput,
  StartDocumentClassificationJobCommandOutput,
} from "./commands/StartDocumentClassificationJobCommand";
import {
  StartDominantLanguageDetectionJobCommand,
  StartDominantLanguageDetectionJobCommandInput,
  StartDominantLanguageDetectionJobCommandOutput,
} from "./commands/StartDominantLanguageDetectionJobCommand";
import {
  StartEntitiesDetectionJobCommand,
  StartEntitiesDetectionJobCommandInput,
  StartEntitiesDetectionJobCommandOutput,
} from "./commands/StartEntitiesDetectionJobCommand";
import {
  StartEventsDetectionJobCommand,
  StartEventsDetectionJobCommandInput,
  StartEventsDetectionJobCommandOutput,
} from "./commands/StartEventsDetectionJobCommand";
import {
  StartFlywheelIterationCommand,
  StartFlywheelIterationCommandInput,
  StartFlywheelIterationCommandOutput,
} from "./commands/StartFlywheelIterationCommand";
import {
  StartKeyPhrasesDetectionJobCommand,
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StartKeyPhrasesDetectionJobCommand";
import {
  StartPiiEntitiesDetectionJobCommand,
  StartPiiEntitiesDetectionJobCommandInput,
  StartPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StartPiiEntitiesDetectionJobCommand";
import {
  StartSentimentDetectionJobCommand,
  StartSentimentDetectionJobCommandInput,
  StartSentimentDetectionJobCommandOutput,
} from "./commands/StartSentimentDetectionJobCommand";
import {
  StartTargetedSentimentDetectionJobCommand,
  StartTargetedSentimentDetectionJobCommandInput,
  StartTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StartTargetedSentimentDetectionJobCommand";
import {
  StartTopicsDetectionJobCommand,
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
} from "./commands/StartTopicsDetectionJobCommand";
import {
  StopDominantLanguageDetectionJobCommand,
  StopDominantLanguageDetectionJobCommandInput,
  StopDominantLanguageDetectionJobCommandOutput,
} from "./commands/StopDominantLanguageDetectionJobCommand";
import {
  StopEntitiesDetectionJobCommand,
  StopEntitiesDetectionJobCommandInput,
  StopEntitiesDetectionJobCommandOutput,
} from "./commands/StopEntitiesDetectionJobCommand";
import {
  StopEventsDetectionJobCommand,
  StopEventsDetectionJobCommandInput,
  StopEventsDetectionJobCommandOutput,
} from "./commands/StopEventsDetectionJobCommand";
import {
  StopKeyPhrasesDetectionJobCommand,
  StopKeyPhrasesDetectionJobCommandInput,
  StopKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StopKeyPhrasesDetectionJobCommand";
import {
  StopPiiEntitiesDetectionJobCommand,
  StopPiiEntitiesDetectionJobCommandInput,
  StopPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StopPiiEntitiesDetectionJobCommand";
import {
  StopSentimentDetectionJobCommand,
  StopSentimentDetectionJobCommandInput,
  StopSentimentDetectionJobCommandOutput,
} from "./commands/StopSentimentDetectionJobCommand";
import {
  StopTargetedSentimentDetectionJobCommand,
  StopTargetedSentimentDetectionJobCommandInput,
  StopTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StopTargetedSentimentDetectionJobCommand";
import {
  StopTrainingDocumentClassifierCommand,
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
} from "./commands/StopTrainingDocumentClassifierCommand";
import {
  StopTrainingEntityRecognizerCommand,
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
} from "./commands/StopTrainingEntityRecognizerCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
} from "./commands/UpdateEndpointCommand";
import {
  UpdateFlywheelCommand,
  UpdateFlywheelCommandInput,
  UpdateFlywheelCommandOutput,
} from "./commands/UpdateFlywheelCommand";
import { ComprehendClient, ComprehendClientConfig } from "./ComprehendClient";

const commands = {
  BatchDetectDominantLanguageCommand,
  BatchDetectEntitiesCommand,
  BatchDetectKeyPhrasesCommand,
  BatchDetectSentimentCommand,
  BatchDetectSyntaxCommand,
  BatchDetectTargetedSentimentCommand,
  ClassifyDocumentCommand,
  ContainsPiiEntitiesCommand,
  CreateDatasetCommand,
  CreateDocumentClassifierCommand,
  CreateEndpointCommand,
  CreateEntityRecognizerCommand,
  CreateFlywheelCommand,
  DeleteDocumentClassifierCommand,
  DeleteEndpointCommand,
  DeleteEntityRecognizerCommand,
  DeleteFlywheelCommand,
  DeleteResourcePolicyCommand,
  DescribeDatasetCommand,
  DescribeDocumentClassificationJobCommand,
  DescribeDocumentClassifierCommand,
  DescribeDominantLanguageDetectionJobCommand,
  DescribeEndpointCommand,
  DescribeEntitiesDetectionJobCommand,
  DescribeEntityRecognizerCommand,
  DescribeEventsDetectionJobCommand,
  DescribeFlywheelCommand,
  DescribeFlywheelIterationCommand,
  DescribeKeyPhrasesDetectionJobCommand,
  DescribePiiEntitiesDetectionJobCommand,
  DescribeResourcePolicyCommand,
  DescribeSentimentDetectionJobCommand,
  DescribeTargetedSentimentDetectionJobCommand,
  DescribeTopicsDetectionJobCommand,
  DetectDominantLanguageCommand,
  DetectEntitiesCommand,
  DetectKeyPhrasesCommand,
  DetectPiiEntitiesCommand,
  DetectSentimentCommand,
  DetectSyntaxCommand,
  DetectTargetedSentimentCommand,
  ImportModelCommand,
  ListDatasetsCommand,
  ListDocumentClassificationJobsCommand,
  ListDocumentClassifiersCommand,
  ListDocumentClassifierSummariesCommand,
  ListDominantLanguageDetectionJobsCommand,
  ListEndpointsCommand,
  ListEntitiesDetectionJobsCommand,
  ListEntityRecognizersCommand,
  ListEntityRecognizerSummariesCommand,
  ListEventsDetectionJobsCommand,
  ListFlywheelIterationHistoryCommand,
  ListFlywheelsCommand,
  ListKeyPhrasesDetectionJobsCommand,
  ListPiiEntitiesDetectionJobsCommand,
  ListSentimentDetectionJobsCommand,
  ListTagsForResourceCommand,
  ListTargetedSentimentDetectionJobsCommand,
  ListTopicsDetectionJobsCommand,
  PutResourcePolicyCommand,
  StartDocumentClassificationJobCommand,
  StartDominantLanguageDetectionJobCommand,
  StartEntitiesDetectionJobCommand,
  StartEventsDetectionJobCommand,
  StartFlywheelIterationCommand,
  StartKeyPhrasesDetectionJobCommand,
  StartPiiEntitiesDetectionJobCommand,
  StartSentimentDetectionJobCommand,
  StartTargetedSentimentDetectionJobCommand,
  StartTopicsDetectionJobCommand,
  StopDominantLanguageDetectionJobCommand,
  StopEntitiesDetectionJobCommand,
  StopEventsDetectionJobCommand,
  StopKeyPhrasesDetectionJobCommand,
  StopPiiEntitiesDetectionJobCommand,
  StopSentimentDetectionJobCommand,
  StopTargetedSentimentDetectionJobCommand,
  StopTrainingDocumentClassifierCommand,
  StopTrainingEntityRecognizerCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEndpointCommand,
  UpdateFlywheelCommand,
};

export interface Comprehend {
  /**
   * @see {@link BatchDetectDominantLanguageCommand}
   */
  batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectDominantLanguageCommandOutput>;
  batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageCommandInput,
    cb: (err: any, data?: BatchDetectDominantLanguageCommandOutput) => void
  ): void;
  batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectDominantLanguageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDetectEntitiesCommand}
   */
  batchDetectEntities(
    args: BatchDetectEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectEntitiesCommandOutput>;
  batchDetectEntities(
    args: BatchDetectEntitiesCommandInput,
    cb: (err: any, data?: BatchDetectEntitiesCommandOutput) => void
  ): void;
  batchDetectEntities(
    args: BatchDetectEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDetectKeyPhrasesCommand}
   */
  batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectKeyPhrasesCommandOutput>;
  batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesCommandInput,
    cb: (err: any, data?: BatchDetectKeyPhrasesCommandOutput) => void
  ): void;
  batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectKeyPhrasesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDetectSentimentCommand}
   */
  batchDetectSentiment(
    args: BatchDetectSentimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectSentimentCommandOutput>;
  batchDetectSentiment(
    args: BatchDetectSentimentCommandInput,
    cb: (err: any, data?: BatchDetectSentimentCommandOutput) => void
  ): void;
  batchDetectSentiment(
    args: BatchDetectSentimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectSentimentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDetectSyntaxCommand}
   */
  batchDetectSyntax(
    args: BatchDetectSyntaxCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectSyntaxCommandOutput>;
  batchDetectSyntax(
    args: BatchDetectSyntaxCommandInput,
    cb: (err: any, data?: BatchDetectSyntaxCommandOutput) => void
  ): void;
  batchDetectSyntax(
    args: BatchDetectSyntaxCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectSyntaxCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDetectTargetedSentimentCommand}
   */
  batchDetectTargetedSentiment(
    args: BatchDetectTargetedSentimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDetectTargetedSentimentCommandOutput>;
  batchDetectTargetedSentiment(
    args: BatchDetectTargetedSentimentCommandInput,
    cb: (err: any, data?: BatchDetectTargetedSentimentCommandOutput) => void
  ): void;
  batchDetectTargetedSentiment(
    args: BatchDetectTargetedSentimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDetectTargetedSentimentCommandOutput) => void
  ): void;

  /**
   * @see {@link ClassifyDocumentCommand}
   */
  classifyDocument(
    args: ClassifyDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClassifyDocumentCommandOutput>;
  classifyDocument(
    args: ClassifyDocumentCommandInput,
    cb: (err: any, data?: ClassifyDocumentCommandOutput) => void
  ): void;
  classifyDocument(
    args: ClassifyDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClassifyDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link ContainsPiiEntitiesCommand}
   */
  containsPiiEntities(
    args: ContainsPiiEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContainsPiiEntitiesCommandOutput>;
  containsPiiEntities(
    args: ContainsPiiEntitiesCommandInput,
    cb: (err: any, data?: ContainsPiiEntitiesCommandOutput) => void
  ): void;
  containsPiiEntities(
    args: ContainsPiiEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContainsPiiEntitiesCommandOutput) => void
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
   * @see {@link CreateDocumentClassifierCommand}
   */
  createDocumentClassifier(
    args: CreateDocumentClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentClassifierCommandOutput>;
  createDocumentClassifier(
    args: CreateDocumentClassifierCommandInput,
    cb: (err: any, data?: CreateDocumentClassifierCommandOutput) => void
  ): void;
  createDocumentClassifier(
    args: CreateDocumentClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEntityRecognizerCommand}
   */
  createEntityRecognizer(
    args: CreateEntityRecognizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntityRecognizerCommandOutput>;
  createEntityRecognizer(
    args: CreateEntityRecognizerCommandInput,
    cb: (err: any, data?: CreateEntityRecognizerCommandOutput) => void
  ): void;
  createEntityRecognizer(
    args: CreateEntityRecognizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntityRecognizerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlywheelCommand}
   */
  createFlywheel(
    args: CreateFlywheelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlywheelCommandOutput>;
  createFlywheel(args: CreateFlywheelCommandInput, cb: (err: any, data?: CreateFlywheelCommandOutput) => void): void;
  createFlywheel(
    args: CreateFlywheelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlywheelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDocumentClassifierCommand}
   */
  deleteDocumentClassifier(
    args: DeleteDocumentClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentClassifierCommandOutput>;
  deleteDocumentClassifier(
    args: DeleteDocumentClassifierCommandInput,
    cb: (err: any, data?: DeleteDocumentClassifierCommandOutput) => void
  ): void;
  deleteDocumentClassifier(
    args: DeleteDocumentClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntityRecognizerCommand}
   */
  deleteEntityRecognizer(
    args: DeleteEntityRecognizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntityRecognizerCommandOutput>;
  deleteEntityRecognizer(
    args: DeleteEntityRecognizerCommandInput,
    cb: (err: any, data?: DeleteEntityRecognizerCommandOutput) => void
  ): void;
  deleteEntityRecognizer(
    args: DeleteEntityRecognizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityRecognizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlywheelCommand}
   */
  deleteFlywheel(
    args: DeleteFlywheelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlywheelCommandOutput>;
  deleteFlywheel(args: DeleteFlywheelCommandInput, cb: (err: any, data?: DeleteFlywheelCommandOutput) => void): void;
  deleteFlywheel(
    args: DeleteFlywheelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlywheelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
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
   * @see {@link DescribeDocumentClassificationJobCommand}
   */
  describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentClassificationJobCommandOutput>;
  describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobCommandInput,
    cb: (err: any, data?: DescribeDocumentClassificationJobCommandOutput) => void
  ): void;
  describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDocumentClassifierCommand}
   */
  describeDocumentClassifier(
    args: DescribeDocumentClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDocumentClassifierCommandOutput>;
  describeDocumentClassifier(
    args: DescribeDocumentClassifierCommandInput,
    cb: (err: any, data?: DescribeDocumentClassifierCommandOutput) => void
  ): void;
  describeDocumentClassifier(
    args: DescribeDocumentClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDocumentClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDominantLanguageDetectionJobCommand}
   */
  describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDominantLanguageDetectionJobCommandOutput>;
  describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobCommandInput,
    cb: (err: any, data?: DescribeDominantLanguageDetectionJobCommandOutput) => void
  ): void;
  describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDominantLanguageDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntitiesDetectionJobCommand}
   */
  describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntitiesDetectionJobCommandOutput>;
  describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: DescribeEntitiesDetectionJobCommandOutput) => void
  ): void;
  describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEntityRecognizerCommand}
   */
  describeEntityRecognizer(
    args: DescribeEntityRecognizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEntityRecognizerCommandOutput>;
  describeEntityRecognizer(
    args: DescribeEntityRecognizerCommandInput,
    cb: (err: any, data?: DescribeEntityRecognizerCommandOutput) => void
  ): void;
  describeEntityRecognizer(
    args: DescribeEntityRecognizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEntityRecognizerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsDetectionJobCommand}
   */
  describeEventsDetectionJob(
    args: DescribeEventsDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsDetectionJobCommandOutput>;
  describeEventsDetectionJob(
    args: DescribeEventsDetectionJobCommandInput,
    cb: (err: any, data?: DescribeEventsDetectionJobCommandOutput) => void
  ): void;
  describeEventsDetectionJob(
    args: DescribeEventsDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlywheelCommand}
   */
  describeFlywheel(
    args: DescribeFlywheelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlywheelCommandOutput>;
  describeFlywheel(
    args: DescribeFlywheelCommandInput,
    cb: (err: any, data?: DescribeFlywheelCommandOutput) => void
  ): void;
  describeFlywheel(
    args: DescribeFlywheelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlywheelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlywheelIterationCommand}
   */
  describeFlywheelIteration(
    args: DescribeFlywheelIterationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlywheelIterationCommandOutput>;
  describeFlywheelIteration(
    args: DescribeFlywheelIterationCommandInput,
    cb: (err: any, data?: DescribeFlywheelIterationCommandOutput) => void
  ): void;
  describeFlywheelIteration(
    args: DescribeFlywheelIterationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlywheelIterationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyPhrasesDetectionJobCommand}
   */
  describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyPhrasesDetectionJobCommandOutput>;
  describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobCommandInput,
    cb: (err: any, data?: DescribeKeyPhrasesDetectionJobCommandOutput) => void
  ): void;
  describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyPhrasesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePiiEntitiesDetectionJobCommand}
   */
  describePiiEntitiesDetectionJob(
    args: DescribePiiEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePiiEntitiesDetectionJobCommandOutput>;
  describePiiEntitiesDetectionJob(
    args: DescribePiiEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: DescribePiiEntitiesDetectionJobCommandOutput) => void
  ): void;
  describePiiEntitiesDetectionJob(
    args: DescribePiiEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePiiEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSentimentDetectionJobCommand}
   */
  describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSentimentDetectionJobCommandOutput>;
  describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobCommandInput,
    cb: (err: any, data?: DescribeSentimentDetectionJobCommandOutput) => void
  ): void;
  describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTargetedSentimentDetectionJobCommand}
   */
  describeTargetedSentimentDetectionJob(
    args: DescribeTargetedSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetedSentimentDetectionJobCommandOutput>;
  describeTargetedSentimentDetectionJob(
    args: DescribeTargetedSentimentDetectionJobCommandInput,
    cb: (err: any, data?: DescribeTargetedSentimentDetectionJobCommandOutput) => void
  ): void;
  describeTargetedSentimentDetectionJob(
    args: DescribeTargetedSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetedSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTopicsDetectionJobCommand}
   */
  describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTopicsDetectionJobCommandOutput>;
  describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobCommandInput,
    cb: (err: any, data?: DescribeTopicsDetectionJobCommandOutput) => void
  ): void;
  describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTopicsDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectDominantLanguageCommand}
   */
  detectDominantLanguage(
    args: DetectDominantLanguageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectDominantLanguageCommandOutput>;
  detectDominantLanguage(
    args: DetectDominantLanguageCommandInput,
    cb: (err: any, data?: DetectDominantLanguageCommandOutput) => void
  ): void;
  detectDominantLanguage(
    args: DetectDominantLanguageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectDominantLanguageCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectEntitiesCommand}
   */
  detectEntities(
    args: DetectEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectEntitiesCommandOutput>;
  detectEntities(args: DetectEntitiesCommandInput, cb: (err: any, data?: DetectEntitiesCommandOutput) => void): void;
  detectEntities(
    args: DetectEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectKeyPhrasesCommand}
   */
  detectKeyPhrases(
    args: DetectKeyPhrasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectKeyPhrasesCommandOutput>;
  detectKeyPhrases(
    args: DetectKeyPhrasesCommandInput,
    cb: (err: any, data?: DetectKeyPhrasesCommandOutput) => void
  ): void;
  detectKeyPhrases(
    args: DetectKeyPhrasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectKeyPhrasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectPiiEntitiesCommand}
   */
  detectPiiEntities(
    args: DetectPiiEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectPiiEntitiesCommandOutput>;
  detectPiiEntities(
    args: DetectPiiEntitiesCommandInput,
    cb: (err: any, data?: DetectPiiEntitiesCommandOutput) => void
  ): void;
  detectPiiEntities(
    args: DetectPiiEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectPiiEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectSentimentCommand}
   */
  detectSentiment(
    args: DetectSentimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectSentimentCommandOutput>;
  detectSentiment(args: DetectSentimentCommandInput, cb: (err: any, data?: DetectSentimentCommandOutput) => void): void;
  detectSentiment(
    args: DetectSentimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectSentimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectSyntaxCommand}
   */
  detectSyntax(args: DetectSyntaxCommandInput, options?: __HttpHandlerOptions): Promise<DetectSyntaxCommandOutput>;
  detectSyntax(args: DetectSyntaxCommandInput, cb: (err: any, data?: DetectSyntaxCommandOutput) => void): void;
  detectSyntax(
    args: DetectSyntaxCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectSyntaxCommandOutput) => void
  ): void;

  /**
   * @see {@link DetectTargetedSentimentCommand}
   */
  detectTargetedSentiment(
    args: DetectTargetedSentimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectTargetedSentimentCommandOutput>;
  detectTargetedSentiment(
    args: DetectTargetedSentimentCommandInput,
    cb: (err: any, data?: DetectTargetedSentimentCommandOutput) => void
  ): void;
  detectTargetedSentiment(
    args: DetectTargetedSentimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectTargetedSentimentCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportModelCommand}
   */
  importModel(args: ImportModelCommandInput, options?: __HttpHandlerOptions): Promise<ImportModelCommandOutput>;
  importModel(args: ImportModelCommandInput, cb: (err: any, data?: ImportModelCommandOutput) => void): void;
  importModel(
    args: ImportModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportModelCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentClassificationJobsCommand}
   */
  listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentClassificationJobsCommandOutput>;
  listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsCommandInput,
    cb: (err: any, data?: ListDocumentClassificationJobsCommandOutput) => void
  ): void;
  listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentClassificationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentClassifiersCommand}
   */
  listDocumentClassifiers(
    args: ListDocumentClassifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentClassifiersCommandOutput>;
  listDocumentClassifiers(
    args: ListDocumentClassifiersCommandInput,
    cb: (err: any, data?: ListDocumentClassifiersCommandOutput) => void
  ): void;
  listDocumentClassifiers(
    args: ListDocumentClassifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentClassifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentClassifierSummariesCommand}
   */
  listDocumentClassifierSummaries(
    args: ListDocumentClassifierSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentClassifierSummariesCommandOutput>;
  listDocumentClassifierSummaries(
    args: ListDocumentClassifierSummariesCommandInput,
    cb: (err: any, data?: ListDocumentClassifierSummariesCommandOutput) => void
  ): void;
  listDocumentClassifierSummaries(
    args: ListDocumentClassifierSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentClassifierSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDominantLanguageDetectionJobsCommand}
   */
  listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDominantLanguageDetectionJobsCommandOutput>;
  listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsCommandInput,
    cb: (err: any, data?: ListDominantLanguageDetectionJobsCommandOutput) => void
  ): void;
  listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDominantLanguageDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
  listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesDetectionJobsCommand}
   */
  listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesDetectionJobsCommandOutput>;
  listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsCommandInput,
    cb: (err: any, data?: ListEntitiesDetectionJobsCommandOutput) => void
  ): void;
  listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityRecognizersCommand}
   */
  listEntityRecognizers(
    args: ListEntityRecognizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntityRecognizersCommandOutput>;
  listEntityRecognizers(
    args: ListEntityRecognizersCommandInput,
    cb: (err: any, data?: ListEntityRecognizersCommandOutput) => void
  ): void;
  listEntityRecognizers(
    args: ListEntityRecognizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntityRecognizersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntityRecognizerSummariesCommand}
   */
  listEntityRecognizerSummaries(
    args: ListEntityRecognizerSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntityRecognizerSummariesCommandOutput>;
  listEntityRecognizerSummaries(
    args: ListEntityRecognizerSummariesCommandInput,
    cb: (err: any, data?: ListEntityRecognizerSummariesCommandOutput) => void
  ): void;
  listEntityRecognizerSummaries(
    args: ListEntityRecognizerSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntityRecognizerSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventsDetectionJobsCommand}
   */
  listEventsDetectionJobs(
    args: ListEventsDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventsDetectionJobsCommandOutput>;
  listEventsDetectionJobs(
    args: ListEventsDetectionJobsCommandInput,
    cb: (err: any, data?: ListEventsDetectionJobsCommandOutput) => void
  ): void;
  listEventsDetectionJobs(
    args: ListEventsDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventsDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlywheelIterationHistoryCommand}
   */
  listFlywheelIterationHistory(
    args: ListFlywheelIterationHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlywheelIterationHistoryCommandOutput>;
  listFlywheelIterationHistory(
    args: ListFlywheelIterationHistoryCommandInput,
    cb: (err: any, data?: ListFlywheelIterationHistoryCommandOutput) => void
  ): void;
  listFlywheelIterationHistory(
    args: ListFlywheelIterationHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlywheelIterationHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlywheelsCommand}
   */
  listFlywheels(args: ListFlywheelsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlywheelsCommandOutput>;
  listFlywheels(args: ListFlywheelsCommandInput, cb: (err: any, data?: ListFlywheelsCommandOutput) => void): void;
  listFlywheels(
    args: ListFlywheelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlywheelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyPhrasesDetectionJobsCommand}
   */
  listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeyPhrasesDetectionJobsCommandOutput>;
  listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsCommandInput,
    cb: (err: any, data?: ListKeyPhrasesDetectionJobsCommandOutput) => void
  ): void;
  listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyPhrasesDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPiiEntitiesDetectionJobsCommand}
   */
  listPiiEntitiesDetectionJobs(
    args: ListPiiEntitiesDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPiiEntitiesDetectionJobsCommandOutput>;
  listPiiEntitiesDetectionJobs(
    args: ListPiiEntitiesDetectionJobsCommandInput,
    cb: (err: any, data?: ListPiiEntitiesDetectionJobsCommandOutput) => void
  ): void;
  listPiiEntitiesDetectionJobs(
    args: ListPiiEntitiesDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPiiEntitiesDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSentimentDetectionJobsCommand}
   */
  listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSentimentDetectionJobsCommandOutput>;
  listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsCommandInput,
    cb: (err: any, data?: ListSentimentDetectionJobsCommandOutput) => void
  ): void;
  listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSentimentDetectionJobsCommandOutput) => void
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
   * @see {@link ListTargetedSentimentDetectionJobsCommand}
   */
  listTargetedSentimentDetectionJobs(
    args: ListTargetedSentimentDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetedSentimentDetectionJobsCommandOutput>;
  listTargetedSentimentDetectionJobs(
    args: ListTargetedSentimentDetectionJobsCommandInput,
    cb: (err: any, data?: ListTargetedSentimentDetectionJobsCommandOutput) => void
  ): void;
  listTargetedSentimentDetectionJobs(
    args: ListTargetedSentimentDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetedSentimentDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTopicsDetectionJobsCommand}
   */
  listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTopicsDetectionJobsCommandOutput>;
  listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsCommandInput,
    cb: (err: any, data?: ListTopicsDetectionJobsCommandOutput) => void
  ): void;
  listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTopicsDetectionJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDocumentClassificationJobCommand}
   */
  startDocumentClassificationJob(
    args: StartDocumentClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDocumentClassificationJobCommandOutput>;
  startDocumentClassificationJob(
    args: StartDocumentClassificationJobCommandInput,
    cb: (err: any, data?: StartDocumentClassificationJobCommandOutput) => void
  ): void;
  startDocumentClassificationJob(
    args: StartDocumentClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDocumentClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDominantLanguageDetectionJobCommand}
   */
  startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDominantLanguageDetectionJobCommandOutput>;
  startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobCommandInput,
    cb: (err: any, data?: StartDominantLanguageDetectionJobCommandOutput) => void
  ): void;
  startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDominantLanguageDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEntitiesDetectionJobCommand}
   */
  startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEntitiesDetectionJobCommandOutput>;
  startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: StartEntitiesDetectionJobCommandOutput) => void
  ): void;
  startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEventsDetectionJobCommand}
   */
  startEventsDetectionJob(
    args: StartEventsDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEventsDetectionJobCommandOutput>;
  startEventsDetectionJob(
    args: StartEventsDetectionJobCommandInput,
    cb: (err: any, data?: StartEventsDetectionJobCommandOutput) => void
  ): void;
  startEventsDetectionJob(
    args: StartEventsDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEventsDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFlywheelIterationCommand}
   */
  startFlywheelIteration(
    args: StartFlywheelIterationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFlywheelIterationCommandOutput>;
  startFlywheelIteration(
    args: StartFlywheelIterationCommandInput,
    cb: (err: any, data?: StartFlywheelIterationCommandOutput) => void
  ): void;
  startFlywheelIteration(
    args: StartFlywheelIterationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlywheelIterationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartKeyPhrasesDetectionJobCommand}
   */
  startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartKeyPhrasesDetectionJobCommandOutput>;
  startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobCommandInput,
    cb: (err: any, data?: StartKeyPhrasesDetectionJobCommandOutput) => void
  ): void;
  startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartKeyPhrasesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPiiEntitiesDetectionJobCommand}
   */
  startPiiEntitiesDetectionJob(
    args: StartPiiEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPiiEntitiesDetectionJobCommandOutput>;
  startPiiEntitiesDetectionJob(
    args: StartPiiEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: StartPiiEntitiesDetectionJobCommandOutput) => void
  ): void;
  startPiiEntitiesDetectionJob(
    args: StartPiiEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPiiEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSentimentDetectionJobCommand}
   */
  startSentimentDetectionJob(
    args: StartSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSentimentDetectionJobCommandOutput>;
  startSentimentDetectionJob(
    args: StartSentimentDetectionJobCommandInput,
    cb: (err: any, data?: StartSentimentDetectionJobCommandOutput) => void
  ): void;
  startSentimentDetectionJob(
    args: StartSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTargetedSentimentDetectionJobCommand}
   */
  startTargetedSentimentDetectionJob(
    args: StartTargetedSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTargetedSentimentDetectionJobCommandOutput>;
  startTargetedSentimentDetectionJob(
    args: StartTargetedSentimentDetectionJobCommandInput,
    cb: (err: any, data?: StartTargetedSentimentDetectionJobCommandOutput) => void
  ): void;
  startTargetedSentimentDetectionJob(
    args: StartTargetedSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTargetedSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTopicsDetectionJobCommand}
   */
  startTopicsDetectionJob(
    args: StartTopicsDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTopicsDetectionJobCommandOutput>;
  startTopicsDetectionJob(
    args: StartTopicsDetectionJobCommandInput,
    cb: (err: any, data?: StartTopicsDetectionJobCommandOutput) => void
  ): void;
  startTopicsDetectionJob(
    args: StartTopicsDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTopicsDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDominantLanguageDetectionJobCommand}
   */
  stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDominantLanguageDetectionJobCommandOutput>;
  stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobCommandInput,
    cb: (err: any, data?: StopDominantLanguageDetectionJobCommandOutput) => void
  ): void;
  stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDominantLanguageDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEntitiesDetectionJobCommand}
   */
  stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEntitiesDetectionJobCommandOutput>;
  stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: StopEntitiesDetectionJobCommandOutput) => void
  ): void;
  stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEventsDetectionJobCommand}
   */
  stopEventsDetectionJob(
    args: StopEventsDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEventsDetectionJobCommandOutput>;
  stopEventsDetectionJob(
    args: StopEventsDetectionJobCommandInput,
    cb: (err: any, data?: StopEventsDetectionJobCommandOutput) => void
  ): void;
  stopEventsDetectionJob(
    args: StopEventsDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEventsDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopKeyPhrasesDetectionJobCommand}
   */
  stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopKeyPhrasesDetectionJobCommandOutput>;
  stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobCommandInput,
    cb: (err: any, data?: StopKeyPhrasesDetectionJobCommandOutput) => void
  ): void;
  stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopKeyPhrasesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPiiEntitiesDetectionJobCommand}
   */
  stopPiiEntitiesDetectionJob(
    args: StopPiiEntitiesDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPiiEntitiesDetectionJobCommandOutput>;
  stopPiiEntitiesDetectionJob(
    args: StopPiiEntitiesDetectionJobCommandInput,
    cb: (err: any, data?: StopPiiEntitiesDetectionJobCommandOutput) => void
  ): void;
  stopPiiEntitiesDetectionJob(
    args: StopPiiEntitiesDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPiiEntitiesDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSentimentDetectionJobCommand}
   */
  stopSentimentDetectionJob(
    args: StopSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSentimentDetectionJobCommandOutput>;
  stopSentimentDetectionJob(
    args: StopSentimentDetectionJobCommandInput,
    cb: (err: any, data?: StopSentimentDetectionJobCommandOutput) => void
  ): void;
  stopSentimentDetectionJob(
    args: StopSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTargetedSentimentDetectionJobCommand}
   */
  stopTargetedSentimentDetectionJob(
    args: StopTargetedSentimentDetectionJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTargetedSentimentDetectionJobCommandOutput>;
  stopTargetedSentimentDetectionJob(
    args: StopTargetedSentimentDetectionJobCommandInput,
    cb: (err: any, data?: StopTargetedSentimentDetectionJobCommandOutput) => void
  ): void;
  stopTargetedSentimentDetectionJob(
    args: StopTargetedSentimentDetectionJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTargetedSentimentDetectionJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTrainingDocumentClassifierCommand}
   */
  stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTrainingDocumentClassifierCommandOutput>;
  stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierCommandInput,
    cb: (err: any, data?: StopTrainingDocumentClassifierCommandOutput) => void
  ): void;
  stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTrainingDocumentClassifierCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTrainingEntityRecognizerCommand}
   */
  stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTrainingEntityRecognizerCommandOutput>;
  stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerCommandInput,
    cb: (err: any, data?: StopTrainingEntityRecognizerCommandOutput) => void
  ): void;
  stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTrainingEntityRecognizerCommandOutput) => void
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
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointCommandOutput>;
  updateEndpoint(args: UpdateEndpointCommandInput, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFlywheelCommand}
   */
  updateFlywheel(
    args: UpdateFlywheelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlywheelCommandOutput>;
  updateFlywheel(args: UpdateFlywheelCommandInput, cb: (err: any, data?: UpdateFlywheelCommandOutput) => void): void;
  updateFlywheel(
    args: UpdateFlywheelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlywheelCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents.
 *       Use these actions to determine the topics contained in your documents, the topics they
 *       discuss, the predominant sentiment expressed in them, the predominant language used, and
 *       more.</p>
 */
export class Comprehend extends ComprehendClient implements Comprehend {}
createAggregatedClient(commands, Comprehend);
