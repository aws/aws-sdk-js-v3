import { ApproveSkillInput } from "./ApproveSkillInput";
import { AssociateContactWithAddressBookInput } from "./AssociateContactWithAddressBookInput";
import { AssociateDeviceWithNetworkProfileInput } from "./AssociateDeviceWithNetworkProfileInput";
import { AssociateDeviceWithRoomInput } from "./AssociateDeviceWithRoomInput";
import { AssociateSkillGroupWithRoomInput } from "./AssociateSkillGroupWithRoomInput";
import { AssociateSkillWithSkillGroupInput } from "./AssociateSkillWithSkillGroupInput";
import { AssociateSkillWithUsersInput } from "./AssociateSkillWithUsersInput";
import { CreateAddressBookInput } from "./CreateAddressBookInput";
import { CreateBusinessReportScheduleInput } from "./CreateBusinessReportScheduleInput";
import { CreateConferenceProviderInput } from "./CreateConferenceProviderInput";
import { CreateContactInput } from "./CreateContactInput";
import { CreateGatewayGroupInput } from "./CreateGatewayGroupInput";
import { CreateNetworkProfileInput } from "./CreateNetworkProfileInput";
import { CreateProfileInput } from "./CreateProfileInput";
import { CreateRoomInput } from "./CreateRoomInput";
import { CreateSkillGroupInput } from "./CreateSkillGroupInput";
import { CreateUserInput } from "./CreateUserInput";
import { DeleteAddressBookInput } from "./DeleteAddressBookInput";
import { DeleteBusinessReportScheduleInput } from "./DeleteBusinessReportScheduleInput";
import { DeleteConferenceProviderInput } from "./DeleteConferenceProviderInput";
import { DeleteContactInput } from "./DeleteContactInput";
import { DeleteDeviceInput } from "./DeleteDeviceInput";
import { DeleteDeviceUsageDataInput } from "./DeleteDeviceUsageDataInput";
import { DeleteGatewayGroupInput } from "./DeleteGatewayGroupInput";
import { DeleteNetworkProfileInput } from "./DeleteNetworkProfileInput";
import { DeleteProfileInput } from "./DeleteProfileInput";
import { DeleteRoomInput } from "./DeleteRoomInput";
import { DeleteRoomSkillParameterInput } from "./DeleteRoomSkillParameterInput";
import { DeleteSkillAuthorizationInput } from "./DeleteSkillAuthorizationInput";
import { DeleteSkillGroupInput } from "./DeleteSkillGroupInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DisassociateContactFromAddressBookInput } from "./DisassociateContactFromAddressBookInput";
import { DisassociateDeviceFromRoomInput } from "./DisassociateDeviceFromRoomInput";
import { DisassociateSkillFromSkillGroupInput } from "./DisassociateSkillFromSkillGroupInput";
import { DisassociateSkillFromUsersInput } from "./DisassociateSkillFromUsersInput";
import { DisassociateSkillGroupFromRoomInput } from "./DisassociateSkillGroupFromRoomInput";
import { ForgetSmartHomeAppliancesInput } from "./ForgetSmartHomeAppliancesInput";
import { GetAddressBookInput } from "./GetAddressBookInput";
import { GetConferencePreferenceInput } from "./GetConferencePreferenceInput";
import { GetConferenceProviderInput } from "./GetConferenceProviderInput";
import { GetContactInput } from "./GetContactInput";
import { GetDeviceInput } from "./GetDeviceInput";
import { GetGatewayInput } from "./GetGatewayInput";
import { GetGatewayGroupInput } from "./GetGatewayGroupInput";
import { GetInvitationConfigurationInput } from "./GetInvitationConfigurationInput";
import { GetNetworkProfileInput } from "./GetNetworkProfileInput";
import { GetProfileInput } from "./GetProfileInput";
import { GetRoomInput } from "./GetRoomInput";
import { GetRoomSkillParameterInput } from "./GetRoomSkillParameterInput";
import { GetSkillGroupInput } from "./GetSkillGroupInput";
import { ListBusinessReportSchedulesInput } from "./ListBusinessReportSchedulesInput";
import { ListConferenceProvidersInput } from "./ListConferenceProvidersInput";
import { ListDeviceEventsInput } from "./ListDeviceEventsInput";
import { ListGatewayGroupsInput } from "./ListGatewayGroupsInput";
import { ListGatewaysInput } from "./ListGatewaysInput";
import { ListSkillsInput } from "./ListSkillsInput";
import { ListSkillsStoreCategoriesInput } from "./ListSkillsStoreCategoriesInput";
import { ListSkillsStoreSkillsByCategoryInput } from "./ListSkillsStoreSkillsByCategoryInput";
import { ListSmartHomeAppliancesInput } from "./ListSmartHomeAppliancesInput";
import { ListTagsInput } from "./ListTagsInput";
import { PutConferencePreferenceInput } from "./PutConferencePreferenceInput";
import { PutInvitationConfigurationInput } from "./PutInvitationConfigurationInput";
import { PutRoomSkillParameterInput } from "./PutRoomSkillParameterInput";
import { PutSkillAuthorizationInput } from "./PutSkillAuthorizationInput";
import { RegisterAVSDeviceInput } from "./RegisterAVSDeviceInput";
import { RejectSkillInput } from "./RejectSkillInput";
import { ResolveRoomInput } from "./ResolveRoomInput";
import { RevokeInvitationInput } from "./RevokeInvitationInput";
import { SearchAddressBooksInput } from "./SearchAddressBooksInput";
import { SearchContactsInput } from "./SearchContactsInput";
import { SearchDevicesInput } from "./SearchDevicesInput";
import { SearchNetworkProfilesInput } from "./SearchNetworkProfilesInput";
import { SearchProfilesInput } from "./SearchProfilesInput";
import { SearchRoomsInput } from "./SearchRoomsInput";
import { SearchSkillGroupsInput } from "./SearchSkillGroupsInput";
import { SearchUsersInput } from "./SearchUsersInput";
import { SendAnnouncementInput } from "./SendAnnouncementInput";
import { SendInvitationInput } from "./SendInvitationInput";
import { StartDeviceSyncInput } from "./StartDeviceSyncInput";
import { StartSmartHomeApplianceDiscoveryInput } from "./StartSmartHomeApplianceDiscoveryInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAddressBookInput } from "./UpdateAddressBookInput";
import { UpdateBusinessReportScheduleInput } from "./UpdateBusinessReportScheduleInput";
import { UpdateConferenceProviderInput } from "./UpdateConferenceProviderInput";
import { UpdateContactInput } from "./UpdateContactInput";
import { UpdateDeviceInput } from "./UpdateDeviceInput";
import { UpdateGatewayInput } from "./UpdateGatewayInput";
import { UpdateGatewayGroupInput } from "./UpdateGatewayGroupInput";
import { UpdateNetworkProfileInput } from "./UpdateNetworkProfileInput";
import { UpdateProfileInput } from "./UpdateProfileInput";
import { UpdateRoomInput } from "./UpdateRoomInput";
import { UpdateSkillGroupInput } from "./UpdateSkillGroupInput";
export type InputTypesUnion =
  | ApproveSkillInput
  | AssociateContactWithAddressBookInput
  | AssociateDeviceWithNetworkProfileInput
  | AssociateDeviceWithRoomInput
  | AssociateSkillGroupWithRoomInput
  | AssociateSkillWithSkillGroupInput
  | AssociateSkillWithUsersInput
  | CreateAddressBookInput
  | CreateBusinessReportScheduleInput
  | CreateConferenceProviderInput
  | CreateContactInput
  | CreateGatewayGroupInput
  | CreateNetworkProfileInput
  | CreateProfileInput
  | CreateRoomInput
  | CreateSkillGroupInput
  | CreateUserInput
  | DeleteAddressBookInput
  | DeleteBusinessReportScheduleInput
  | DeleteConferenceProviderInput
  | DeleteContactInput
  | DeleteDeviceInput
  | DeleteDeviceUsageDataInput
  | DeleteGatewayGroupInput
  | DeleteNetworkProfileInput
  | DeleteProfileInput
  | DeleteRoomInput
  | DeleteRoomSkillParameterInput
  | DeleteSkillAuthorizationInput
  | DeleteSkillGroupInput
  | DeleteUserInput
  | DisassociateContactFromAddressBookInput
  | DisassociateDeviceFromRoomInput
  | DisassociateSkillFromSkillGroupInput
  | DisassociateSkillFromUsersInput
  | DisassociateSkillGroupFromRoomInput
  | ForgetSmartHomeAppliancesInput
  | GetAddressBookInput
  | GetConferencePreferenceInput
  | GetConferenceProviderInput
  | GetContactInput
  | GetDeviceInput
  | GetGatewayInput
  | GetGatewayGroupInput
  | GetInvitationConfigurationInput
  | GetNetworkProfileInput
  | GetProfileInput
  | GetRoomInput
  | GetRoomSkillParameterInput
  | GetSkillGroupInput
  | ListBusinessReportSchedulesInput
  | ListConferenceProvidersInput
  | ListDeviceEventsInput
  | ListGatewayGroupsInput
  | ListGatewaysInput
  | ListSkillsInput
  | ListSkillsStoreCategoriesInput
  | ListSkillsStoreSkillsByCategoryInput
  | ListSmartHomeAppliancesInput
  | ListTagsInput
  | PutConferencePreferenceInput
  | PutInvitationConfigurationInput
  | PutRoomSkillParameterInput
  | PutSkillAuthorizationInput
  | RegisterAVSDeviceInput
  | RejectSkillInput
  | ResolveRoomInput
  | RevokeInvitationInput
  | SearchAddressBooksInput
  | SearchContactsInput
  | SearchDevicesInput
  | SearchNetworkProfilesInput
  | SearchProfilesInput
  | SearchRoomsInput
  | SearchSkillGroupsInput
  | SearchUsersInput
  | SendAnnouncementInput
  | SendInvitationInput
  | StartDeviceSyncInput
  | StartSmartHomeApplianceDiscoveryInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAddressBookInput
  | UpdateBusinessReportScheduleInput
  | UpdateConferenceProviderInput
  | UpdateContactInput
  | UpdateDeviceInput
  | UpdateGatewayInput
  | UpdateGatewayGroupInput
  | UpdateNetworkProfileInput
  | UpdateProfileInput
  | UpdateRoomInput
  | UpdateSkillGroupInput;
