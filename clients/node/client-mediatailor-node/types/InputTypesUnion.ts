import { DeletePlaybackConfigurationInput } from "./DeletePlaybackConfigurationInput";
import { GetPlaybackConfigurationInput } from "./GetPlaybackConfigurationInput";
import { ListPlaybackConfigurationsInput } from "./ListPlaybackConfigurationsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutPlaybackConfigurationInput } from "./PutPlaybackConfigurationInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | DeletePlaybackConfigurationInput
  | GetPlaybackConfigurationInput
  | ListPlaybackConfigurationsInput
  | ListTagsForResourceInput
  | PutPlaybackConfigurationInput
  | TagResourceInput
  | UntagResourceInput;
