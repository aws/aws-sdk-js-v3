import { CreateUserInput } from "./CreateUserInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DescribeUserInput } from "./DescribeUserInput";
import { DescribeUserHierarchyGroupInput } from "./DescribeUserHierarchyGroupInput";
import { DescribeUserHierarchyStructureInput } from "./DescribeUserHierarchyStructureInput";
import { GetContactAttributesInput } from "./GetContactAttributesInput";
import { GetCurrentMetricDataInput } from "./GetCurrentMetricDataInput";
import { GetFederationTokenInput } from "./GetFederationTokenInput";
import { GetMetricDataInput } from "./GetMetricDataInput";
import { ListRoutingProfilesInput } from "./ListRoutingProfilesInput";
import { ListSecurityProfilesInput } from "./ListSecurityProfilesInput";
import { ListUserHierarchyGroupsInput } from "./ListUserHierarchyGroupsInput";
import { ListUsersInput } from "./ListUsersInput";
import { StartOutboundVoiceContactInput } from "./StartOutboundVoiceContactInput";
import { StopContactInput } from "./StopContactInput";
import { UpdateContactAttributesInput } from "./UpdateContactAttributesInput";
import { UpdateUserHierarchyInput } from "./UpdateUserHierarchyInput";
import { UpdateUserIdentityInfoInput } from "./UpdateUserIdentityInfoInput";
import { UpdateUserPhoneConfigInput } from "./UpdateUserPhoneConfigInput";
import { UpdateUserRoutingProfileInput } from "./UpdateUserRoutingProfileInput";
import { UpdateUserSecurityProfilesInput } from "./UpdateUserSecurityProfilesInput";
export type InputTypesUnion =
  | CreateUserInput
  | DeleteUserInput
  | DescribeUserInput
  | DescribeUserHierarchyGroupInput
  | DescribeUserHierarchyStructureInput
  | GetContactAttributesInput
  | GetCurrentMetricDataInput
  | GetFederationTokenInput
  | GetMetricDataInput
  | ListRoutingProfilesInput
  | ListSecurityProfilesInput
  | ListUserHierarchyGroupsInput
  | ListUsersInput
  | StartOutboundVoiceContactInput
  | StopContactInput
  | UpdateContactAttributesInput
  | UpdateUserHierarchyInput
  | UpdateUserIdentityInfoInput
  | UpdateUserPhoneConfigInput
  | UpdateUserRoutingProfileInput
  | UpdateUserSecurityProfilesInput;
