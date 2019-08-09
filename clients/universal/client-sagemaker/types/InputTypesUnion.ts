import { AddTagsInput } from "./AddTagsInput";
import { CreateAlgorithmInput } from "./CreateAlgorithmInput";
import { CreateCodeRepositoryInput } from "./CreateCodeRepositoryInput";
import { CreateCompilationJobInput } from "./CreateCompilationJobInput";
import { CreateEndpointInput } from "./CreateEndpointInput";
import { CreateEndpointConfigInput } from "./CreateEndpointConfigInput";
import { CreateHyperParameterTuningJobInput } from "./CreateHyperParameterTuningJobInput";
import { CreateLabelingJobInput } from "./CreateLabelingJobInput";
import { CreateModelInput } from "./CreateModelInput";
import { CreateModelPackageInput } from "./CreateModelPackageInput";
import { CreateNotebookInstanceInput } from "./CreateNotebookInstanceInput";
import { CreateNotebookInstanceLifecycleConfigInput } from "./CreateNotebookInstanceLifecycleConfigInput";
import { CreatePresignedNotebookInstanceUrlInput } from "./CreatePresignedNotebookInstanceUrlInput";
import { CreateTrainingJobInput } from "./CreateTrainingJobInput";
import { CreateTransformJobInput } from "./CreateTransformJobInput";
import { CreateWorkteamInput } from "./CreateWorkteamInput";
import { DeleteAlgorithmInput } from "./DeleteAlgorithmInput";
import { DeleteCodeRepositoryInput } from "./DeleteCodeRepositoryInput";
import { DeleteEndpointInput } from "./DeleteEndpointInput";
import { DeleteEndpointConfigInput } from "./DeleteEndpointConfigInput";
import { DeleteModelInput } from "./DeleteModelInput";
import { DeleteModelPackageInput } from "./DeleteModelPackageInput";
import { DeleteNotebookInstanceInput } from "./DeleteNotebookInstanceInput";
import { DeleteNotebookInstanceLifecycleConfigInput } from "./DeleteNotebookInstanceLifecycleConfigInput";
import { DeleteTagsInput } from "./DeleteTagsInput";
import { DeleteWorkteamInput } from "./DeleteWorkteamInput";
import { DescribeAlgorithmInput } from "./DescribeAlgorithmInput";
import { DescribeCodeRepositoryInput } from "./DescribeCodeRepositoryInput";
import { DescribeCompilationJobInput } from "./DescribeCompilationJobInput";
import { DescribeEndpointInput } from "./DescribeEndpointInput";
import { DescribeEndpointConfigInput } from "./DescribeEndpointConfigInput";
import { DescribeHyperParameterTuningJobInput } from "./DescribeHyperParameterTuningJobInput";
import { DescribeLabelingJobInput } from "./DescribeLabelingJobInput";
import { DescribeModelInput } from "./DescribeModelInput";
import { DescribeModelPackageInput } from "./DescribeModelPackageInput";
import { DescribeNotebookInstanceInput } from "./DescribeNotebookInstanceInput";
import { DescribeNotebookInstanceLifecycleConfigInput } from "./DescribeNotebookInstanceLifecycleConfigInput";
import { DescribeSubscribedWorkteamInput } from "./DescribeSubscribedWorkteamInput";
import { DescribeTrainingJobInput } from "./DescribeTrainingJobInput";
import { DescribeTransformJobInput } from "./DescribeTransformJobInput";
import { DescribeWorkteamInput } from "./DescribeWorkteamInput";
import { GetSearchSuggestionsInput } from "./GetSearchSuggestionsInput";
import { ListAlgorithmsInput } from "./ListAlgorithmsInput";
import { ListCodeRepositoriesInput } from "./ListCodeRepositoriesInput";
import { ListCompilationJobsInput } from "./ListCompilationJobsInput";
import { ListEndpointConfigsInput } from "./ListEndpointConfigsInput";
import { ListEndpointsInput } from "./ListEndpointsInput";
import { ListHyperParameterTuningJobsInput } from "./ListHyperParameterTuningJobsInput";
import { ListLabelingJobsInput } from "./ListLabelingJobsInput";
import { ListLabelingJobsForWorkteamInput } from "./ListLabelingJobsForWorkteamInput";
import { ListModelPackagesInput } from "./ListModelPackagesInput";
import { ListModelsInput } from "./ListModelsInput";
import { ListNotebookInstanceLifecycleConfigsInput } from "./ListNotebookInstanceLifecycleConfigsInput";
import { ListNotebookInstancesInput } from "./ListNotebookInstancesInput";
import { ListSubscribedWorkteamsInput } from "./ListSubscribedWorkteamsInput";
import { ListTagsInput } from "./ListTagsInput";
import { ListTrainingJobsInput } from "./ListTrainingJobsInput";
import { ListTrainingJobsForHyperParameterTuningJobInput } from "./ListTrainingJobsForHyperParameterTuningJobInput";
import { ListTransformJobsInput } from "./ListTransformJobsInput";
import { ListWorkteamsInput } from "./ListWorkteamsInput";
import { RenderUiTemplateInput } from "./RenderUiTemplateInput";
import { SearchInput } from "./SearchInput";
import { StartNotebookInstanceInput } from "./StartNotebookInstanceInput";
import { StopCompilationJobInput } from "./StopCompilationJobInput";
import { StopHyperParameterTuningJobInput } from "./StopHyperParameterTuningJobInput";
import { StopLabelingJobInput } from "./StopLabelingJobInput";
import { StopNotebookInstanceInput } from "./StopNotebookInstanceInput";
import { StopTrainingJobInput } from "./StopTrainingJobInput";
import { StopTransformJobInput } from "./StopTransformJobInput";
import { UpdateCodeRepositoryInput } from "./UpdateCodeRepositoryInput";
import { UpdateEndpointInput } from "./UpdateEndpointInput";
import { UpdateEndpointWeightsAndCapacitiesInput } from "./UpdateEndpointWeightsAndCapacitiesInput";
import { UpdateNotebookInstanceInput } from "./UpdateNotebookInstanceInput";
import { UpdateNotebookInstanceLifecycleConfigInput } from "./UpdateNotebookInstanceLifecycleConfigInput";
import { UpdateWorkteamInput } from "./UpdateWorkteamInput";
export type InputTypesUnion =
  | AddTagsInput
  | CreateAlgorithmInput
  | CreateCodeRepositoryInput
  | CreateCompilationJobInput
  | CreateEndpointInput
  | CreateEndpointConfigInput
  | CreateHyperParameterTuningJobInput
  | CreateLabelingJobInput
  | CreateModelInput
  | CreateModelPackageInput
  | CreateNotebookInstanceInput
  | CreateNotebookInstanceLifecycleConfigInput
  | CreatePresignedNotebookInstanceUrlInput
  | CreateTrainingJobInput
  | CreateTransformJobInput
  | CreateWorkteamInput
  | DeleteAlgorithmInput
  | DeleteCodeRepositoryInput
  | DeleteEndpointInput
  | DeleteEndpointConfigInput
  | DeleteModelInput
  | DeleteModelPackageInput
  | DeleteNotebookInstanceInput
  | DeleteNotebookInstanceLifecycleConfigInput
  | DeleteTagsInput
  | DeleteWorkteamInput
  | DescribeAlgorithmInput
  | DescribeCodeRepositoryInput
  | DescribeCompilationJobInput
  | DescribeEndpointInput
  | DescribeEndpointConfigInput
  | DescribeHyperParameterTuningJobInput
  | DescribeLabelingJobInput
  | DescribeModelInput
  | DescribeModelPackageInput
  | DescribeNotebookInstanceInput
  | DescribeNotebookInstanceLifecycleConfigInput
  | DescribeSubscribedWorkteamInput
  | DescribeTrainingJobInput
  | DescribeTransformJobInput
  | DescribeWorkteamInput
  | GetSearchSuggestionsInput
  | ListAlgorithmsInput
  | ListCodeRepositoriesInput
  | ListCompilationJobsInput
  | ListEndpointConfigsInput
  | ListEndpointsInput
  | ListHyperParameterTuningJobsInput
  | ListLabelingJobsInput
  | ListLabelingJobsForWorkteamInput
  | ListModelPackagesInput
  | ListModelsInput
  | ListNotebookInstanceLifecycleConfigsInput
  | ListNotebookInstancesInput
  | ListSubscribedWorkteamsInput
  | ListTagsInput
  | ListTrainingJobsInput
  | ListTrainingJobsForHyperParameterTuningJobInput
  | ListTransformJobsInput
  | ListWorkteamsInput
  | RenderUiTemplateInput
  | SearchInput
  | StartNotebookInstanceInput
  | StopCompilationJobInput
  | StopHyperParameterTuningJobInput
  | StopLabelingJobInput
  | StopNotebookInstanceInput
  | StopTrainingJobInput
  | StopTransformJobInput
  | UpdateCodeRepositoryInput
  | UpdateEndpointInput
  | UpdateEndpointWeightsAndCapacitiesInput
  | UpdateNotebookInstanceInput
  | UpdateNotebookInstanceLifecycleConfigInput
  | UpdateWorkteamInput;
