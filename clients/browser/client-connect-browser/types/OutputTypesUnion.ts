import { CreateUserOutput } from "./CreateUserOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DescribeUserOutput } from "./DescribeUserOutput";
import { DescribeUserHierarchyGroupOutput } from "./DescribeUserHierarchyGroupOutput";
import { DescribeUserHierarchyStructureOutput } from "./DescribeUserHierarchyStructureOutput";
import { GetContactAttributesOutput } from "./GetContactAttributesOutput";
import { GetCurrentMetricDataOutput } from "./GetCurrentMetricDataOutput";
import { GetFederationTokenOutput } from "./GetFederationTokenOutput";
import { GetMetricDataOutput } from "./GetMetricDataOutput";
import { ListRoutingProfilesOutput } from "./ListRoutingProfilesOutput";
import { ListSecurityProfilesOutput } from "./ListSecurityProfilesOutput";
import { ListUserHierarchyGroupsOutput } from "./ListUserHierarchyGroupsOutput";
import { ListUsersOutput } from "./ListUsersOutput";
import { StartOutboundVoiceContactOutput } from "./StartOutboundVoiceContactOutput";
import { StopContactOutput } from "./StopContactOutput";
import { UpdateContactAttributesOutput } from "./UpdateContactAttributesOutput";
import { UpdateUserHierarchyOutput } from "./UpdateUserHierarchyOutput";
import { UpdateUserIdentityInfoOutput } from "./UpdateUserIdentityInfoOutput";
import { UpdateUserPhoneConfigOutput } from "./UpdateUserPhoneConfigOutput";
import { UpdateUserRoutingProfileOutput } from "./UpdateUserRoutingProfileOutput";
import { UpdateUserSecurityProfilesOutput } from "./UpdateUserSecurityProfilesOutput";
export type OutputTypesUnion =
  | CreateUserOutput
  | DeleteUserOutput
  | DescribeUserOutput
  | DescribeUserHierarchyGroupOutput
  | DescribeUserHierarchyStructureOutput
  | GetContactAttributesOutput
  | GetCurrentMetricDataOutput
  | GetFederationTokenOutput
  | GetMetricDataOutput
  | ListRoutingProfilesOutput
  | ListSecurityProfilesOutput
  | ListUserHierarchyGroupsOutput
  | ListUsersOutput
  | StartOutboundVoiceContactOutput
  | StopContactOutput
  | UpdateContactAttributesOutput
  | UpdateUserHierarchyOutput
  | UpdateUserIdentityInfoOutput
  | UpdateUserPhoneConfigOutput
  | UpdateUserRoutingProfileOutput
  | UpdateUserSecurityProfilesOutput;
