import { AddTagsInput } from "./AddTagsInput";
import { CreateTrailInput } from "./CreateTrailInput";
import { DeleteTrailInput } from "./DeleteTrailInput";
import { DescribeTrailsInput } from "./DescribeTrailsInput";
import { GetEventSelectorsInput } from "./GetEventSelectorsInput";
import { GetTrailStatusInput } from "./GetTrailStatusInput";
import { ListPublicKeysInput } from "./ListPublicKeysInput";
import { ListTagsInput } from "./ListTagsInput";
import { LookupEventsInput } from "./LookupEventsInput";
import { PutEventSelectorsInput } from "./PutEventSelectorsInput";
import { RemoveTagsInput } from "./RemoveTagsInput";
import { StartLoggingInput } from "./StartLoggingInput";
import { StopLoggingInput } from "./StopLoggingInput";
import { UpdateTrailInput } from "./UpdateTrailInput";
export type InputTypesUnion =
  | AddTagsInput
  | CreateTrailInput
  | DeleteTrailInput
  | DescribeTrailsInput
  | GetEventSelectorsInput
  | GetTrailStatusInput
  | ListPublicKeysInput
  | ListTagsInput
  | LookupEventsInput
  | PutEventSelectorsInput
  | RemoveTagsInput
  | StartLoggingInput
  | StopLoggingInput
  | UpdateTrailInput;
