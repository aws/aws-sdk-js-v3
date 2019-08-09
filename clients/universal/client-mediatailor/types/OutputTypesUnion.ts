import { DeletePlaybackConfigurationOutput } from "./DeletePlaybackConfigurationOutput";
import { GetPlaybackConfigurationOutput } from "./GetPlaybackConfigurationOutput";
import { ListPlaybackConfigurationsOutput } from "./ListPlaybackConfigurationsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PutPlaybackConfigurationOutput } from "./PutPlaybackConfigurationOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | DeletePlaybackConfigurationOutput
  | GetPlaybackConfigurationOutput
  | ListPlaybackConfigurationsOutput
  | ListTagsForResourceOutput
  | PutPlaybackConfigurationOutput
  | TagResourceOutput
  | UntagResourceOutput;
