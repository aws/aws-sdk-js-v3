import { AddTagsInput } from "./AddTagsInput";
import { CreateBatchPredictionInput } from "./CreateBatchPredictionInput";
import { CreateDataSourceFromRDSInput } from "./CreateDataSourceFromRDSInput";
import { CreateDataSourceFromRedshiftInput } from "./CreateDataSourceFromRedshiftInput";
import { CreateDataSourceFromS3Input } from "./CreateDataSourceFromS3Input";
import { CreateEvaluationInput } from "./CreateEvaluationInput";
import { CreateMLModelInput } from "./CreateMLModelInput";
import { CreateRealtimeEndpointInput } from "./CreateRealtimeEndpointInput";
import { DeleteBatchPredictionInput } from "./DeleteBatchPredictionInput";
import { DeleteDataSourceInput } from "./DeleteDataSourceInput";
import { DeleteEvaluationInput } from "./DeleteEvaluationInput";
import { DeleteMLModelInput } from "./DeleteMLModelInput";
import { DeleteRealtimeEndpointInput } from "./DeleteRealtimeEndpointInput";
import { DeleteTagsInput } from "./DeleteTagsInput";
import { DescribeBatchPredictionsInput } from "./DescribeBatchPredictionsInput";
import { DescribeDataSourcesInput } from "./DescribeDataSourcesInput";
import { DescribeEvaluationsInput } from "./DescribeEvaluationsInput";
import { DescribeMLModelsInput } from "./DescribeMLModelsInput";
import { DescribeTagsInput } from "./DescribeTagsInput";
import { GetBatchPredictionInput } from "./GetBatchPredictionInput";
import { GetDataSourceInput } from "./GetDataSourceInput";
import { GetEvaluationInput } from "./GetEvaluationInput";
import { GetMLModelInput } from "./GetMLModelInput";
import { PredictInput } from "./PredictInput";
import { UpdateBatchPredictionInput } from "./UpdateBatchPredictionInput";
import { UpdateDataSourceInput } from "./UpdateDataSourceInput";
import { UpdateEvaluationInput } from "./UpdateEvaluationInput";
import { UpdateMLModelInput } from "./UpdateMLModelInput";
export type InputTypesUnion =
  | AddTagsInput
  | CreateBatchPredictionInput
  | CreateDataSourceFromRDSInput
  | CreateDataSourceFromRedshiftInput
  | CreateDataSourceFromS3Input
  | CreateEvaluationInput
  | CreateMLModelInput
  | CreateRealtimeEndpointInput
  | DeleteBatchPredictionInput
  | DeleteDataSourceInput
  | DeleteEvaluationInput
  | DeleteMLModelInput
  | DeleteRealtimeEndpointInput
  | DeleteTagsInput
  | DescribeBatchPredictionsInput
  | DescribeDataSourcesInput
  | DescribeEvaluationsInput
  | DescribeMLModelsInput
  | DescribeTagsInput
  | GetBatchPredictionInput
  | GetDataSourceInput
  | GetEvaluationInput
  | GetMLModelInput
  | PredictInput
  | UpdateBatchPredictionInput
  | UpdateDataSourceInput
  | UpdateEvaluationInput
  | UpdateMLModelInput;
