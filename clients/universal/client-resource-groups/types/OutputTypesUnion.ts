import { CreateGroupOutput } from "./CreateGroupOutput";
import { DeleteGroupOutput } from "./DeleteGroupOutput";
import { GetGroupOutput } from "./GetGroupOutput";
import { GetGroupQueryOutput } from "./GetGroupQueryOutput";
import { GetTagsOutput } from "./GetTagsOutput";
import { ListGroupResourcesOutput } from "./ListGroupResourcesOutput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { SearchResourcesOutput } from "./SearchResourcesOutput";
import { TagOutput } from "./TagOutput";
import { UntagOutput } from "./UntagOutput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { UpdateGroupQueryOutput } from "./UpdateGroupQueryOutput";
export type OutputTypesUnion =
  | CreateGroupOutput
  | DeleteGroupOutput
  | GetGroupOutput
  | GetGroupQueryOutput
  | GetTagsOutput
  | ListGroupResourcesOutput
  | ListGroupsOutput
  | SearchResourcesOutput
  | TagOutput
  | UntagOutput
  | UpdateGroupOutput
  | UpdateGroupQueryOutput;
