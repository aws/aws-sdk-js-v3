import { ApproveSkillOutput } from "./ApproveSkillOutput";
import { AssociateContactWithAddressBookOutput } from "./AssociateContactWithAddressBookOutput";
import { AssociateDeviceWithNetworkProfileOutput } from "./AssociateDeviceWithNetworkProfileOutput";
import { AssociateDeviceWithRoomOutput } from "./AssociateDeviceWithRoomOutput";
import { AssociateSkillGroupWithRoomOutput } from "./AssociateSkillGroupWithRoomOutput";
import { AssociateSkillWithSkillGroupOutput } from "./AssociateSkillWithSkillGroupOutput";
import { AssociateSkillWithUsersOutput } from "./AssociateSkillWithUsersOutput";
import { CreateAddressBookOutput } from "./CreateAddressBookOutput";
import { CreateBusinessReportScheduleOutput } from "./CreateBusinessReportScheduleOutput";
import { CreateConferenceProviderOutput } from "./CreateConferenceProviderOutput";
import { CreateContactOutput } from "./CreateContactOutput";
import { CreateGatewayGroupOutput } from "./CreateGatewayGroupOutput";
import { CreateNetworkProfileOutput } from "./CreateNetworkProfileOutput";
import { CreateProfileOutput } from "./CreateProfileOutput";
import { CreateRoomOutput } from "./CreateRoomOutput";
import { CreateSkillGroupOutput } from "./CreateSkillGroupOutput";
import { CreateUserOutput } from "./CreateUserOutput";
import { DeleteAddressBookOutput } from "./DeleteAddressBookOutput";
import { DeleteBusinessReportScheduleOutput } from "./DeleteBusinessReportScheduleOutput";
import { DeleteConferenceProviderOutput } from "./DeleteConferenceProviderOutput";
import { DeleteContactOutput } from "./DeleteContactOutput";
import { DeleteDeviceOutput } from "./DeleteDeviceOutput";
import { DeleteDeviceUsageDataOutput } from "./DeleteDeviceUsageDataOutput";
import { DeleteGatewayGroupOutput } from "./DeleteGatewayGroupOutput";
import { DeleteNetworkProfileOutput } from "./DeleteNetworkProfileOutput";
import { DeleteProfileOutput } from "./DeleteProfileOutput";
import { DeleteRoomOutput } from "./DeleteRoomOutput";
import { DeleteRoomSkillParameterOutput } from "./DeleteRoomSkillParameterOutput";
import { DeleteSkillAuthorizationOutput } from "./DeleteSkillAuthorizationOutput";
import { DeleteSkillGroupOutput } from "./DeleteSkillGroupOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DisassociateContactFromAddressBookOutput } from "./DisassociateContactFromAddressBookOutput";
import { DisassociateDeviceFromRoomOutput } from "./DisassociateDeviceFromRoomOutput";
import { DisassociateSkillFromSkillGroupOutput } from "./DisassociateSkillFromSkillGroupOutput";
import { DisassociateSkillFromUsersOutput } from "./DisassociateSkillFromUsersOutput";
import { DisassociateSkillGroupFromRoomOutput } from "./DisassociateSkillGroupFromRoomOutput";
import { ForgetSmartHomeAppliancesOutput } from "./ForgetSmartHomeAppliancesOutput";
import { GetAddressBookOutput } from "./GetAddressBookOutput";
import { GetConferencePreferenceOutput } from "./GetConferencePreferenceOutput";
import { GetConferenceProviderOutput } from "./GetConferenceProviderOutput";
import { GetContactOutput } from "./GetContactOutput";
import { GetDeviceOutput } from "./GetDeviceOutput";
import { GetGatewayOutput } from "./GetGatewayOutput";
import { GetGatewayGroupOutput } from "./GetGatewayGroupOutput";
import { GetInvitationConfigurationOutput } from "./GetInvitationConfigurationOutput";
import { GetNetworkProfileOutput } from "./GetNetworkProfileOutput";
import { GetProfileOutput } from "./GetProfileOutput";
import { GetRoomOutput } from "./GetRoomOutput";
import { GetRoomSkillParameterOutput } from "./GetRoomSkillParameterOutput";
import { GetSkillGroupOutput } from "./GetSkillGroupOutput";
import { ListBusinessReportSchedulesOutput } from "./ListBusinessReportSchedulesOutput";
import { ListConferenceProvidersOutput } from "./ListConferenceProvidersOutput";
import { ListDeviceEventsOutput } from "./ListDeviceEventsOutput";
import { ListGatewayGroupsOutput } from "./ListGatewayGroupsOutput";
import { ListGatewaysOutput } from "./ListGatewaysOutput";
import { ListSkillsOutput } from "./ListSkillsOutput";
import { ListSkillsStoreCategoriesOutput } from "./ListSkillsStoreCategoriesOutput";
import { ListSkillsStoreSkillsByCategoryOutput } from "./ListSkillsStoreSkillsByCategoryOutput";
import { ListSmartHomeAppliancesOutput } from "./ListSmartHomeAppliancesOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { PutConferencePreferenceOutput } from "./PutConferencePreferenceOutput";
import { PutInvitationConfigurationOutput } from "./PutInvitationConfigurationOutput";
import { PutRoomSkillParameterOutput } from "./PutRoomSkillParameterOutput";
import { PutSkillAuthorizationOutput } from "./PutSkillAuthorizationOutput";
import { RegisterAVSDeviceOutput } from "./RegisterAVSDeviceOutput";
import { RejectSkillOutput } from "./RejectSkillOutput";
import { ResolveRoomOutput } from "./ResolveRoomOutput";
import { RevokeInvitationOutput } from "./RevokeInvitationOutput";
import { SearchAddressBooksOutput } from "./SearchAddressBooksOutput";
import { SearchContactsOutput } from "./SearchContactsOutput";
import { SearchDevicesOutput } from "./SearchDevicesOutput";
import { SearchNetworkProfilesOutput } from "./SearchNetworkProfilesOutput";
import { SearchProfilesOutput } from "./SearchProfilesOutput";
import { SearchRoomsOutput } from "./SearchRoomsOutput";
import { SearchSkillGroupsOutput } from "./SearchSkillGroupsOutput";
import { SearchUsersOutput } from "./SearchUsersOutput";
import { SendAnnouncementOutput } from "./SendAnnouncementOutput";
import { SendInvitationOutput } from "./SendInvitationOutput";
import { StartDeviceSyncOutput } from "./StartDeviceSyncOutput";
import { StartSmartHomeApplianceDiscoveryOutput } from "./StartSmartHomeApplianceDiscoveryOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAddressBookOutput } from "./UpdateAddressBookOutput";
import { UpdateBusinessReportScheduleOutput } from "./UpdateBusinessReportScheduleOutput";
import { UpdateConferenceProviderOutput } from "./UpdateConferenceProviderOutput";
import { UpdateContactOutput } from "./UpdateContactOutput";
import { UpdateDeviceOutput } from "./UpdateDeviceOutput";
import { UpdateGatewayOutput } from "./UpdateGatewayOutput";
import { UpdateGatewayGroupOutput } from "./UpdateGatewayGroupOutput";
import { UpdateNetworkProfileOutput } from "./UpdateNetworkProfileOutput";
import { UpdateProfileOutput } from "./UpdateProfileOutput";
import { UpdateRoomOutput } from "./UpdateRoomOutput";
import { UpdateSkillGroupOutput } from "./UpdateSkillGroupOutput";
export type OutputTypesUnion =
  | ApproveSkillOutput
  | AssociateContactWithAddressBookOutput
  | AssociateDeviceWithNetworkProfileOutput
  | AssociateDeviceWithRoomOutput
  | AssociateSkillGroupWithRoomOutput
  | AssociateSkillWithSkillGroupOutput
  | AssociateSkillWithUsersOutput
  | CreateAddressBookOutput
  | CreateBusinessReportScheduleOutput
  | CreateConferenceProviderOutput
  | CreateContactOutput
  | CreateGatewayGroupOutput
  | CreateNetworkProfileOutput
  | CreateProfileOutput
  | CreateRoomOutput
  | CreateSkillGroupOutput
  | CreateUserOutput
  | DeleteAddressBookOutput
  | DeleteBusinessReportScheduleOutput
  | DeleteConferenceProviderOutput
  | DeleteContactOutput
  | DeleteDeviceOutput
  | DeleteDeviceUsageDataOutput
  | DeleteGatewayGroupOutput
  | DeleteNetworkProfileOutput
  | DeleteProfileOutput
  | DeleteRoomOutput
  | DeleteRoomSkillParameterOutput
  | DeleteSkillAuthorizationOutput
  | DeleteSkillGroupOutput
  | DeleteUserOutput
  | DisassociateContactFromAddressBookOutput
  | DisassociateDeviceFromRoomOutput
  | DisassociateSkillFromSkillGroupOutput
  | DisassociateSkillFromUsersOutput
  | DisassociateSkillGroupFromRoomOutput
  | ForgetSmartHomeAppliancesOutput
  | GetAddressBookOutput
  | GetConferencePreferenceOutput
  | GetConferenceProviderOutput
  | GetContactOutput
  | GetDeviceOutput
  | GetGatewayOutput
  | GetGatewayGroupOutput
  | GetInvitationConfigurationOutput
  | GetNetworkProfileOutput
  | GetProfileOutput
  | GetRoomOutput
  | GetRoomSkillParameterOutput
  | GetSkillGroupOutput
  | ListBusinessReportSchedulesOutput
  | ListConferenceProvidersOutput
  | ListDeviceEventsOutput
  | ListGatewayGroupsOutput
  | ListGatewaysOutput
  | ListSkillsOutput
  | ListSkillsStoreCategoriesOutput
  | ListSkillsStoreSkillsByCategoryOutput
  | ListSmartHomeAppliancesOutput
  | ListTagsOutput
  | PutConferencePreferenceOutput
  | PutInvitationConfigurationOutput
  | PutRoomSkillParameterOutput
  | PutSkillAuthorizationOutput
  | RegisterAVSDeviceOutput
  | RejectSkillOutput
  | ResolveRoomOutput
  | RevokeInvitationOutput
  | SearchAddressBooksOutput
  | SearchContactsOutput
  | SearchDevicesOutput
  | SearchNetworkProfilesOutput
  | SearchProfilesOutput
  | SearchRoomsOutput
  | SearchSkillGroupsOutput
  | SearchUsersOutput
  | SendAnnouncementOutput
  | SendInvitationOutput
  | StartDeviceSyncOutput
  | StartSmartHomeApplianceDiscoveryOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateAddressBookOutput
  | UpdateBusinessReportScheduleOutput
  | UpdateConferenceProviderOutput
  | UpdateContactOutput
  | UpdateDeviceOutput
  | UpdateGatewayOutput
  | UpdateGatewayGroupOutput
  | UpdateNetworkProfileOutput
  | UpdateProfileOutput
  | UpdateRoomOutput
  | UpdateSkillGroupOutput;
