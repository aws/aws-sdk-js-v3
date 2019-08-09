import { AddTagsOutput } from "./AddTagsOutput";
import { CreateAlgorithmOutput } from "./CreateAlgorithmOutput";
import { CreateCodeRepositoryOutput } from "./CreateCodeRepositoryOutput";
import { CreateCompilationJobOutput } from "./CreateCompilationJobOutput";
import { CreateEndpointOutput } from "./CreateEndpointOutput";
import { CreateEndpointConfigOutput } from "./CreateEndpointConfigOutput";
import { CreateHyperParameterTuningJobOutput } from "./CreateHyperParameterTuningJobOutput";
import { CreateLabelingJobOutput } from "./CreateLabelingJobOutput";
import { CreateModelOutput } from "./CreateModelOutput";
import { CreateModelPackageOutput } from "./CreateModelPackageOutput";
import { CreateNotebookInstanceOutput } from "./CreateNotebookInstanceOutput";
import { CreateNotebookInstanceLifecycleConfigOutput } from "./CreateNotebookInstanceLifecycleConfigOutput";
import { CreatePresignedNotebookInstanceUrlOutput } from "./CreatePresignedNotebookInstanceUrlOutput";
import { CreateTrainingJobOutput } from "./CreateTrainingJobOutput";
import { CreateTransformJobOutput } from "./CreateTransformJobOutput";
import { CreateWorkteamOutput } from "./CreateWorkteamOutput";
import { DeleteAlgorithmOutput } from "./DeleteAlgorithmOutput";
import { DeleteCodeRepositoryOutput } from "./DeleteCodeRepositoryOutput";
import { DeleteEndpointOutput } from "./DeleteEndpointOutput";
import { DeleteEndpointConfigOutput } from "./DeleteEndpointConfigOutput";
import { DeleteModelOutput } from "./DeleteModelOutput";
import { DeleteModelPackageOutput } from "./DeleteModelPackageOutput";
import { DeleteNotebookInstanceOutput } from "./DeleteNotebookInstanceOutput";
import { DeleteNotebookInstanceLifecycleConfigOutput } from "./DeleteNotebookInstanceLifecycleConfigOutput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { DeleteWorkteamOutput } from "./DeleteWorkteamOutput";
import { DescribeAlgorithmOutput } from "./DescribeAlgorithmOutput";
import { DescribeCodeRepositoryOutput } from "./DescribeCodeRepositoryOutput";
import { DescribeCompilationJobOutput } from "./DescribeCompilationJobOutput";
import { DescribeEndpointOutput } from "./DescribeEndpointOutput";
import { DescribeEndpointConfigOutput } from "./DescribeEndpointConfigOutput";
import { DescribeHyperParameterTuningJobOutput } from "./DescribeHyperParameterTuningJobOutput";
import { DescribeLabelingJobOutput } from "./DescribeLabelingJobOutput";
import { DescribeModelOutput } from "./DescribeModelOutput";
import { DescribeModelPackageOutput } from "./DescribeModelPackageOutput";
import { DescribeNotebookInstanceOutput } from "./DescribeNotebookInstanceOutput";
import { DescribeNotebookInstanceLifecycleConfigOutput } from "./DescribeNotebookInstanceLifecycleConfigOutput";
import { DescribeSubscribedWorkteamOutput } from "./DescribeSubscribedWorkteamOutput";
import { DescribeTrainingJobOutput } from "./DescribeTrainingJobOutput";
import { DescribeTransformJobOutput } from "./DescribeTransformJobOutput";
import { DescribeWorkteamOutput } from "./DescribeWorkteamOutput";
import { GetSearchSuggestionsOutput } from "./GetSearchSuggestionsOutput";
import { ListAlgorithmsOutput } from "./ListAlgorithmsOutput";
import { ListCodeRepositoriesOutput } from "./ListCodeRepositoriesOutput";
import { ListCompilationJobsOutput } from "./ListCompilationJobsOutput";
import { ListEndpointConfigsOutput } from "./ListEndpointConfigsOutput";
import { ListEndpointsOutput } from "./ListEndpointsOutput";
import { ListHyperParameterTuningJobsOutput } from "./ListHyperParameterTuningJobsOutput";
import { ListLabelingJobsOutput } from "./ListLabelingJobsOutput";
import { ListLabelingJobsForWorkteamOutput } from "./ListLabelingJobsForWorkteamOutput";
import { ListModelPackagesOutput } from "./ListModelPackagesOutput";
import { ListModelsOutput } from "./ListModelsOutput";
import { ListNotebookInstanceLifecycleConfigsOutput } from "./ListNotebookInstanceLifecycleConfigsOutput";
import { ListNotebookInstancesOutput } from "./ListNotebookInstancesOutput";
import { ListSubscribedWorkteamsOutput } from "./ListSubscribedWorkteamsOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { ListTrainingJobsOutput } from "./ListTrainingJobsOutput";
import { ListTrainingJobsForHyperParameterTuningJobOutput } from "./ListTrainingJobsForHyperParameterTuningJobOutput";
import { ListTransformJobsOutput } from "./ListTransformJobsOutput";
import { ListWorkteamsOutput } from "./ListWorkteamsOutput";
import { RenderUiTemplateOutput } from "./RenderUiTemplateOutput";
import { SearchOutput } from "./SearchOutput";
import { StartNotebookInstanceOutput } from "./StartNotebookInstanceOutput";
import { StopCompilationJobOutput } from "./StopCompilationJobOutput";
import { StopHyperParameterTuningJobOutput } from "./StopHyperParameterTuningJobOutput";
import { StopLabelingJobOutput } from "./StopLabelingJobOutput";
import { StopNotebookInstanceOutput } from "./StopNotebookInstanceOutput";
import { StopTrainingJobOutput } from "./StopTrainingJobOutput";
import { StopTransformJobOutput } from "./StopTransformJobOutput";
import { UpdateCodeRepositoryOutput } from "./UpdateCodeRepositoryOutput";
import { UpdateEndpointOutput } from "./UpdateEndpointOutput";
import { UpdateEndpointWeightsAndCapacitiesOutput } from "./UpdateEndpointWeightsAndCapacitiesOutput";
import { UpdateNotebookInstanceOutput } from "./UpdateNotebookInstanceOutput";
import { UpdateNotebookInstanceLifecycleConfigOutput } from "./UpdateNotebookInstanceLifecycleConfigOutput";
import { UpdateWorkteamOutput } from "./UpdateWorkteamOutput";
export type OutputTypesUnion =
  | AddTagsOutput
  | CreateAlgorithmOutput
  | CreateCodeRepositoryOutput
  | CreateCompilationJobOutput
  | CreateEndpointOutput
  | CreateEndpointConfigOutput
  | CreateHyperParameterTuningJobOutput
  | CreateLabelingJobOutput
  | CreateModelOutput
  | CreateModelPackageOutput
  | CreateNotebookInstanceOutput
  | CreateNotebookInstanceLifecycleConfigOutput
  | CreatePresignedNotebookInstanceUrlOutput
  | CreateTrainingJobOutput
  | CreateTransformJobOutput
  | CreateWorkteamOutput
  | DeleteAlgorithmOutput
  | DeleteCodeRepositoryOutput
  | DeleteEndpointOutput
  | DeleteEndpointConfigOutput
  | DeleteModelOutput
  | DeleteModelPackageOutput
  | DeleteNotebookInstanceOutput
  | DeleteNotebookInstanceLifecycleConfigOutput
  | DeleteTagsOutput
  | DeleteWorkteamOutput
  | DescribeAlgorithmOutput
  | DescribeCodeRepositoryOutput
  | DescribeCompilationJobOutput
  | DescribeEndpointOutput
  | DescribeEndpointConfigOutput
  | DescribeHyperParameterTuningJobOutput
  | DescribeLabelingJobOutput
  | DescribeModelOutput
  | DescribeModelPackageOutput
  | DescribeNotebookInstanceOutput
  | DescribeNotebookInstanceLifecycleConfigOutput
  | DescribeSubscribedWorkteamOutput
  | DescribeTrainingJobOutput
  | DescribeTransformJobOutput
  | DescribeWorkteamOutput
  | GetSearchSuggestionsOutput
  | ListAlgorithmsOutput
  | ListCodeRepositoriesOutput
  | ListCompilationJobsOutput
  | ListEndpointConfigsOutput
  | ListEndpointsOutput
  | ListHyperParameterTuningJobsOutput
  | ListLabelingJobsOutput
  | ListLabelingJobsForWorkteamOutput
  | ListModelPackagesOutput
  | ListModelsOutput
  | ListNotebookInstanceLifecycleConfigsOutput
  | ListNotebookInstancesOutput
  | ListSubscribedWorkteamsOutput
  | ListTagsOutput
  | ListTrainingJobsOutput
  | ListTrainingJobsForHyperParameterTuningJobOutput
  | ListTransformJobsOutput
  | ListWorkteamsOutput
  | RenderUiTemplateOutput
  | SearchOutput
  | StartNotebookInstanceOutput
  | StopCompilationJobOutput
  | StopHyperParameterTuningJobOutput
  | StopLabelingJobOutput
  | StopNotebookInstanceOutput
  | StopTrainingJobOutput
  | StopTransformJobOutput
  | UpdateCodeRepositoryOutput
  | UpdateEndpointOutput
  | UpdateEndpointWeightsAndCapacitiesOutput
  | UpdateNotebookInstanceOutput
  | UpdateNotebookInstanceLifecycleConfigOutput
  | UpdateWorkteamOutput;
