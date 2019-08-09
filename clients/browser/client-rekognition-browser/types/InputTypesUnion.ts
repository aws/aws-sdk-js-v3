import { CompareFacesInput } from "./CompareFacesInput";
import { CreateCollectionInput } from "./CreateCollectionInput";
import { CreateStreamProcessorInput } from "./CreateStreamProcessorInput";
import { DeleteCollectionInput } from "./DeleteCollectionInput";
import { DeleteFacesInput } from "./DeleteFacesInput";
import { DeleteStreamProcessorInput } from "./DeleteStreamProcessorInput";
import { DescribeCollectionInput } from "./DescribeCollectionInput";
import { DescribeStreamProcessorInput } from "./DescribeStreamProcessorInput";
import { DetectFacesInput } from "./DetectFacesInput";
import { DetectLabelsInput } from "./DetectLabelsInput";
import { DetectModerationLabelsInput } from "./DetectModerationLabelsInput";
import { DetectTextInput } from "./DetectTextInput";
import { GetCelebrityInfoInput } from "./GetCelebrityInfoInput";
import { GetCelebrityRecognitionInput } from "./GetCelebrityRecognitionInput";
import { GetContentModerationInput } from "./GetContentModerationInput";
import { GetFaceDetectionInput } from "./GetFaceDetectionInput";
import { GetFaceSearchInput } from "./GetFaceSearchInput";
import { GetLabelDetectionInput } from "./GetLabelDetectionInput";
import { GetPersonTrackingInput } from "./GetPersonTrackingInput";
import { IndexFacesInput } from "./IndexFacesInput";
import { ListCollectionsInput } from "./ListCollectionsInput";
import { ListFacesInput } from "./ListFacesInput";
import { ListStreamProcessorsInput } from "./ListStreamProcessorsInput";
import { RecognizeCelebritiesInput } from "./RecognizeCelebritiesInput";
import { SearchFacesInput } from "./SearchFacesInput";
import { SearchFacesByImageInput } from "./SearchFacesByImageInput";
import { StartCelebrityRecognitionInput } from "./StartCelebrityRecognitionInput";
import { StartContentModerationInput } from "./StartContentModerationInput";
import { StartFaceDetectionInput } from "./StartFaceDetectionInput";
import { StartFaceSearchInput } from "./StartFaceSearchInput";
import { StartLabelDetectionInput } from "./StartLabelDetectionInput";
import { StartPersonTrackingInput } from "./StartPersonTrackingInput";
import { StartStreamProcessorInput } from "./StartStreamProcessorInput";
import { StopStreamProcessorInput } from "./StopStreamProcessorInput";
export type InputTypesUnion =
  | CompareFacesInput
  | CreateCollectionInput
  | CreateStreamProcessorInput
  | DeleteCollectionInput
  | DeleteFacesInput
  | DeleteStreamProcessorInput
  | DescribeCollectionInput
  | DescribeStreamProcessorInput
  | DetectFacesInput
  | DetectLabelsInput
  | DetectModerationLabelsInput
  | DetectTextInput
  | GetCelebrityInfoInput
  | GetCelebrityRecognitionInput
  | GetContentModerationInput
  | GetFaceDetectionInput
  | GetFaceSearchInput
  | GetLabelDetectionInput
  | GetPersonTrackingInput
  | IndexFacesInput
  | ListCollectionsInput
  | ListFacesInput
  | ListStreamProcessorsInput
  | RecognizeCelebritiesInput
  | SearchFacesInput
  | SearchFacesByImageInput
  | StartCelebrityRecognitionInput
  | StartContentModerationInput
  | StartFaceDetectionInput
  | StartFaceSearchInput
  | StartLabelDetectionInput
  | StartPersonTrackingInput
  | StartStreamProcessorInput
  | StopStreamProcessorInput;
