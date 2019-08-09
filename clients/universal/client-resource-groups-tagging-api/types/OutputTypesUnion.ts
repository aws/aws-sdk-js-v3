import { GetResourcesOutput } from "./GetResourcesOutput";
import { GetTagKeysOutput } from "./GetTagKeysOutput";
import { GetTagValuesOutput } from "./GetTagValuesOutput";
import { TagResourcesOutput } from "./TagResourcesOutput";
import { UntagResourcesOutput } from "./UntagResourcesOutput";
export type OutputTypesUnion =
  | GetResourcesOutput
  | GetTagKeysOutput
  | GetTagValuesOutput
  | TagResourcesOutput
  | UntagResourcesOutput;
