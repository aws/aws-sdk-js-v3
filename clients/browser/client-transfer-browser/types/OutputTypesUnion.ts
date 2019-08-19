import { CreateServerOutput } from "./CreateServerOutput";
import { CreateUserOutput } from "./CreateUserOutput";
import { DeleteServerOutput } from "./DeleteServerOutput";
import { DeleteSshPublicKeyOutput } from "./DeleteSshPublicKeyOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DescribeServerOutput } from "./DescribeServerOutput";
import { DescribeUserOutput } from "./DescribeUserOutput";
import { ImportSshPublicKeyOutput } from "./ImportSshPublicKeyOutput";
import { ListServersOutput } from "./ListServersOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListUsersOutput } from "./ListUsersOutput";
import { StartServerOutput } from "./StartServerOutput";
import { StopServerOutput } from "./StopServerOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { TestIdentityProviderOutput } from "./TestIdentityProviderOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateServerOutput } from "./UpdateServerOutput";
import { UpdateUserOutput } from "./UpdateUserOutput";
export type OutputTypesUnion =
  | CreateServerOutput
  | CreateUserOutput
  | DeleteServerOutput
  | DeleteSshPublicKeyOutput
  | DeleteUserOutput
  | DescribeServerOutput
  | DescribeUserOutput
  | ImportSshPublicKeyOutput
  | ListServersOutput
  | ListTagsForResourceOutput
  | ListUsersOutput
  | StartServerOutput
  | StopServerOutput
  | TagResourceOutput
  | TestIdentityProviderOutput
  | UntagResourceOutput
  | UpdateServerOutput
  | UpdateUserOutput;
