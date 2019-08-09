import { AddTagsOutput } from "./AddTagsOutput";
import { CreateTrailOutput } from "./CreateTrailOutput";
import { DeleteTrailOutput } from "./DeleteTrailOutput";
import { DescribeTrailsOutput } from "./DescribeTrailsOutput";
import { GetEventSelectorsOutput } from "./GetEventSelectorsOutput";
import { GetTrailStatusOutput } from "./GetTrailStatusOutput";
import { ListPublicKeysOutput } from "./ListPublicKeysOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { LookupEventsOutput } from "./LookupEventsOutput";
import { PutEventSelectorsOutput } from "./PutEventSelectorsOutput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { StartLoggingOutput } from "./StartLoggingOutput";
import { StopLoggingOutput } from "./StopLoggingOutput";
import { UpdateTrailOutput } from "./UpdateTrailOutput";
export type OutputTypesUnion =
  | AddTagsOutput
  | CreateTrailOutput
  | DeleteTrailOutput
  | DescribeTrailsOutput
  | GetEventSelectorsOutput
  | GetTrailStatusOutput
  | ListPublicKeysOutput
  | ListTagsOutput
  | LookupEventsOutput
  | PutEventSelectorsOutput
  | RemoveTagsOutput
  | StartLoggingOutput
  | StopLoggingOutput
  | UpdateTrailOutput;
