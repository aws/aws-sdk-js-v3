import { GetResourcesInput } from "./GetResourcesInput";
import { GetTagKeysInput } from "./GetTagKeysInput";
import { GetTagValuesInput } from "./GetTagValuesInput";
import { TagResourcesInput } from "./TagResourcesInput";
import { UntagResourcesInput } from "./UntagResourcesInput";
export type InputTypesUnion =
  | GetResourcesInput
  | GetTagKeysInput
  | GetTagValuesInput
  | TagResourcesInput
  | UntagResourcesInput;
