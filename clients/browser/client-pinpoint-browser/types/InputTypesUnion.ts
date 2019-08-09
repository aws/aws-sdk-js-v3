import { CreateAppInput } from "./CreateAppInput";
import { CreateCampaignInput } from "./CreateCampaignInput";
import { CreateExportJobInput } from "./CreateExportJobInput";
import { CreateImportJobInput } from "./CreateImportJobInput";
import { CreateSegmentInput } from "./CreateSegmentInput";
import { DeleteAdmChannelInput } from "./DeleteAdmChannelInput";
import { DeleteApnsChannelInput } from "./DeleteApnsChannelInput";
import { DeleteApnsSandboxChannelInput } from "./DeleteApnsSandboxChannelInput";
import { DeleteApnsVoipChannelInput } from "./DeleteApnsVoipChannelInput";
import { DeleteApnsVoipSandboxChannelInput } from "./DeleteApnsVoipSandboxChannelInput";
import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteBaiduChannelInput } from "./DeleteBaiduChannelInput";
import { DeleteCampaignInput } from "./DeleteCampaignInput";
import { DeleteEmailChannelInput } from "./DeleteEmailChannelInput";
import { DeleteEndpointInput } from "./DeleteEndpointInput";
import { DeleteEventStreamInput } from "./DeleteEventStreamInput";
import { DeleteGcmChannelInput } from "./DeleteGcmChannelInput";
import { DeleteSegmentInput } from "./DeleteSegmentInput";
import { DeleteSmsChannelInput } from "./DeleteSmsChannelInput";
import { DeleteUserEndpointsInput } from "./DeleteUserEndpointsInput";
import { DeleteVoiceChannelInput } from "./DeleteVoiceChannelInput";
import { GetAdmChannelInput } from "./GetAdmChannelInput";
import { GetApnsChannelInput } from "./GetApnsChannelInput";
import { GetApnsSandboxChannelInput } from "./GetApnsSandboxChannelInput";
import { GetApnsVoipChannelInput } from "./GetApnsVoipChannelInput";
import { GetApnsVoipSandboxChannelInput } from "./GetApnsVoipSandboxChannelInput";
import { GetAppInput } from "./GetAppInput";
import { GetApplicationDateRangeKpiInput } from "./GetApplicationDateRangeKpiInput";
import { GetApplicationSettingsInput } from "./GetApplicationSettingsInput";
import { GetAppsInput } from "./GetAppsInput";
import { GetBaiduChannelInput } from "./GetBaiduChannelInput";
import { GetCampaignInput } from "./GetCampaignInput";
import { GetCampaignActivitiesInput } from "./GetCampaignActivitiesInput";
import { GetCampaignDateRangeKpiInput } from "./GetCampaignDateRangeKpiInput";
import { GetCampaignVersionInput } from "./GetCampaignVersionInput";
import { GetCampaignVersionsInput } from "./GetCampaignVersionsInput";
import { GetCampaignsInput } from "./GetCampaignsInput";
import { GetChannelsInput } from "./GetChannelsInput";
import { GetEmailChannelInput } from "./GetEmailChannelInput";
import { GetEndpointInput } from "./GetEndpointInput";
import { GetEventStreamInput } from "./GetEventStreamInput";
import { GetExportJobInput } from "./GetExportJobInput";
import { GetExportJobsInput } from "./GetExportJobsInput";
import { GetGcmChannelInput } from "./GetGcmChannelInput";
import { GetImportJobInput } from "./GetImportJobInput";
import { GetImportJobsInput } from "./GetImportJobsInput";
import { GetSegmentInput } from "./GetSegmentInput";
import { GetSegmentExportJobsInput } from "./GetSegmentExportJobsInput";
import { GetSegmentImportJobsInput } from "./GetSegmentImportJobsInput";
import { GetSegmentVersionInput } from "./GetSegmentVersionInput";
import { GetSegmentVersionsInput } from "./GetSegmentVersionsInput";
import { GetSegmentsInput } from "./GetSegmentsInput";
import { GetSmsChannelInput } from "./GetSmsChannelInput";
import { GetUserEndpointsInput } from "./GetUserEndpointsInput";
import { GetVoiceChannelInput } from "./GetVoiceChannelInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PhoneNumberValidateInput } from "./PhoneNumberValidateInput";
import { PutEventStreamInput } from "./PutEventStreamInput";
import { PutEventsInput } from "./PutEventsInput";
import { RemoveAttributesInput } from "./RemoveAttributesInput";
import { SendMessagesInput } from "./SendMessagesInput";
import { SendUsersMessagesInput } from "./SendUsersMessagesInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAdmChannelInput } from "./UpdateAdmChannelInput";
import { UpdateApnsChannelInput } from "./UpdateApnsChannelInput";
import { UpdateApnsSandboxChannelInput } from "./UpdateApnsSandboxChannelInput";
import { UpdateApnsVoipChannelInput } from "./UpdateApnsVoipChannelInput";
import { UpdateApnsVoipSandboxChannelInput } from "./UpdateApnsVoipSandboxChannelInput";
import { UpdateApplicationSettingsInput } from "./UpdateApplicationSettingsInput";
import { UpdateBaiduChannelInput } from "./UpdateBaiduChannelInput";
import { UpdateCampaignInput } from "./UpdateCampaignInput";
import { UpdateEmailChannelInput } from "./UpdateEmailChannelInput";
import { UpdateEndpointInput } from "./UpdateEndpointInput";
import { UpdateEndpointsBatchInput } from "./UpdateEndpointsBatchInput";
import { UpdateGcmChannelInput } from "./UpdateGcmChannelInput";
import { UpdateSegmentInput } from "./UpdateSegmentInput";
import { UpdateSmsChannelInput } from "./UpdateSmsChannelInput";
import { UpdateVoiceChannelInput } from "./UpdateVoiceChannelInput";
export type InputTypesUnion =
  | CreateAppInput
  | CreateCampaignInput
  | CreateExportJobInput
  | CreateImportJobInput
  | CreateSegmentInput
  | DeleteAdmChannelInput
  | DeleteApnsChannelInput
  | DeleteApnsSandboxChannelInput
  | DeleteApnsVoipChannelInput
  | DeleteApnsVoipSandboxChannelInput
  | DeleteAppInput
  | DeleteBaiduChannelInput
  | DeleteCampaignInput
  | DeleteEmailChannelInput
  | DeleteEndpointInput
  | DeleteEventStreamInput
  | DeleteGcmChannelInput
  | DeleteSegmentInput
  | DeleteSmsChannelInput
  | DeleteUserEndpointsInput
  | DeleteVoiceChannelInput
  | GetAdmChannelInput
  | GetApnsChannelInput
  | GetApnsSandboxChannelInput
  | GetApnsVoipChannelInput
  | GetApnsVoipSandboxChannelInput
  | GetAppInput
  | GetApplicationDateRangeKpiInput
  | GetApplicationSettingsInput
  | GetAppsInput
  | GetBaiduChannelInput
  | GetCampaignInput
  | GetCampaignActivitiesInput
  | GetCampaignDateRangeKpiInput
  | GetCampaignVersionInput
  | GetCampaignVersionsInput
  | GetCampaignsInput
  | GetChannelsInput
  | GetEmailChannelInput
  | GetEndpointInput
  | GetEventStreamInput
  | GetExportJobInput
  | GetExportJobsInput
  | GetGcmChannelInput
  | GetImportJobInput
  | GetImportJobsInput
  | GetSegmentInput
  | GetSegmentExportJobsInput
  | GetSegmentImportJobsInput
  | GetSegmentVersionInput
  | GetSegmentVersionsInput
  | GetSegmentsInput
  | GetSmsChannelInput
  | GetUserEndpointsInput
  | GetVoiceChannelInput
  | ListTagsForResourceInput
  | PhoneNumberValidateInput
  | PutEventStreamInput
  | PutEventsInput
  | RemoveAttributesInput
  | SendMessagesInput
  | SendUsersMessagesInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAdmChannelInput
  | UpdateApnsChannelInput
  | UpdateApnsSandboxChannelInput
  | UpdateApnsVoipChannelInput
  | UpdateApnsVoipSandboxChannelInput
  | UpdateApplicationSettingsInput
  | UpdateBaiduChannelInput
  | UpdateCampaignInput
  | UpdateEmailChannelInput
  | UpdateEndpointInput
  | UpdateEndpointsBatchInput
  | UpdateGcmChannelInput
  | UpdateSegmentInput
  | UpdateSmsChannelInput
  | UpdateVoiceChannelInput;
