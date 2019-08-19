import { CreateServerInput } from "./CreateServerInput";
import { CreateUserInput } from "./CreateUserInput";
import { DeleteServerInput } from "./DeleteServerInput";
import { DeleteSshPublicKeyInput } from "./DeleteSshPublicKeyInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DescribeServerInput } from "./DescribeServerInput";
import { DescribeUserInput } from "./DescribeUserInput";
import { ImportSshPublicKeyInput } from "./ImportSshPublicKeyInput";
import { ListServersInput } from "./ListServersInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListUsersInput } from "./ListUsersInput";
import { StartServerInput } from "./StartServerInput";
import { StopServerInput } from "./StopServerInput";
import { TagResourceInput } from "./TagResourceInput";
import { TestIdentityProviderInput } from "./TestIdentityProviderInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateServerInput } from "./UpdateServerInput";
import { UpdateUserInput } from "./UpdateUserInput";
export type InputTypesUnion =
  | CreateServerInput
  | CreateUserInput
  | DeleteServerInput
  | DeleteSshPublicKeyInput
  | DeleteUserInput
  | DescribeServerInput
  | DescribeUserInput
  | ImportSshPublicKeyInput
  | ListServersInput
  | ListTagsForResourceInput
  | ListUsersInput
  | StartServerInput
  | StopServerInput
  | TagResourceInput
  | TestIdentityProviderInput
  | UntagResourceInput
  | UpdateServerInput
  | UpdateUserInput;
