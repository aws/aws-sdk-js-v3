import { CreateGroupInput } from "./CreateGroupInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { GetGroupInput } from "./GetGroupInput";
import { GetGroupQueryInput } from "./GetGroupQueryInput";
import { GetTagsInput } from "./GetTagsInput";
import { ListGroupResourcesInput } from "./ListGroupResourcesInput";
import { ListGroupsInput } from "./ListGroupsInput";
import { SearchResourcesInput } from "./SearchResourcesInput";
import { TagInput } from "./TagInput";
import { UntagInput } from "./UntagInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateGroupQueryInput } from "./UpdateGroupQueryInput";
export type InputTypesUnion =
  | CreateGroupInput
  | DeleteGroupInput
  | GetGroupInput
  | GetGroupQueryInput
  | GetTagsInput
  | ListGroupResourcesInput
  | ListGroupsInput
  | SearchResourcesInput
  | TagInput
  | UntagInput
  | UpdateGroupInput
  | UpdateGroupQueryInput;
