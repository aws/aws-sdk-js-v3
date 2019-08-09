import { CreateAppOutput } from "./CreateAppOutput";
import { CreateCampaignOutput } from "./CreateCampaignOutput";
import { CreateExportJobOutput } from "./CreateExportJobOutput";
import { CreateImportJobOutput } from "./CreateImportJobOutput";
import { CreateSegmentOutput } from "./CreateSegmentOutput";
import { DeleteAdmChannelOutput } from "./DeleteAdmChannelOutput";
import { DeleteApnsChannelOutput } from "./DeleteApnsChannelOutput";
import { DeleteApnsSandboxChannelOutput } from "./DeleteApnsSandboxChannelOutput";
import { DeleteApnsVoipChannelOutput } from "./DeleteApnsVoipChannelOutput";
import { DeleteApnsVoipSandboxChannelOutput } from "./DeleteApnsVoipSandboxChannelOutput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { DeleteBaiduChannelOutput } from "./DeleteBaiduChannelOutput";
import { DeleteCampaignOutput } from "./DeleteCampaignOutput";
import { DeleteEmailChannelOutput } from "./DeleteEmailChannelOutput";
import { DeleteEndpointOutput } from "./DeleteEndpointOutput";
import { DeleteEventStreamOutput } from "./DeleteEventStreamOutput";
import { DeleteGcmChannelOutput } from "./DeleteGcmChannelOutput";
import { DeleteSegmentOutput } from "./DeleteSegmentOutput";
import { DeleteSmsChannelOutput } from "./DeleteSmsChannelOutput";
import { DeleteUserEndpointsOutput } from "./DeleteUserEndpointsOutput";
import { DeleteVoiceChannelOutput } from "./DeleteVoiceChannelOutput";
import { GetAdmChannelOutput } from "./GetAdmChannelOutput";
import { GetApnsChannelOutput } from "./GetApnsChannelOutput";
import { GetApnsSandboxChannelOutput } from "./GetApnsSandboxChannelOutput";
import { GetApnsVoipChannelOutput } from "./GetApnsVoipChannelOutput";
import { GetApnsVoipSandboxChannelOutput } from "./GetApnsVoipSandboxChannelOutput";
import { GetAppOutput } from "./GetAppOutput";
import { GetApplicationDateRangeKpiOutput } from "./GetApplicationDateRangeKpiOutput";
import { GetApplicationSettingsOutput } from "./GetApplicationSettingsOutput";
import { GetAppsOutput } from "./GetAppsOutput";
import { GetBaiduChannelOutput } from "./GetBaiduChannelOutput";
import { GetCampaignOutput } from "./GetCampaignOutput";
import { GetCampaignActivitiesOutput } from "./GetCampaignActivitiesOutput";
import { GetCampaignDateRangeKpiOutput } from "./GetCampaignDateRangeKpiOutput";
import { GetCampaignVersionOutput } from "./GetCampaignVersionOutput";
import { GetCampaignVersionsOutput } from "./GetCampaignVersionsOutput";
import { GetCampaignsOutput } from "./GetCampaignsOutput";
import { GetChannelsOutput } from "./GetChannelsOutput";
import { GetEmailChannelOutput } from "./GetEmailChannelOutput";
import { GetEndpointOutput } from "./GetEndpointOutput";
import { GetEventStreamOutput } from "./GetEventStreamOutput";
import { GetExportJobOutput } from "./GetExportJobOutput";
import { GetExportJobsOutput } from "./GetExportJobsOutput";
import { GetGcmChannelOutput } from "./GetGcmChannelOutput";
import { GetImportJobOutput } from "./GetImportJobOutput";
import { GetImportJobsOutput } from "./GetImportJobsOutput";
import { GetSegmentOutput } from "./GetSegmentOutput";
import { GetSegmentExportJobsOutput } from "./GetSegmentExportJobsOutput";
import { GetSegmentImportJobsOutput } from "./GetSegmentImportJobsOutput";
import { GetSegmentVersionOutput } from "./GetSegmentVersionOutput";
import { GetSegmentVersionsOutput } from "./GetSegmentVersionsOutput";
import { GetSegmentsOutput } from "./GetSegmentsOutput";
import { GetSmsChannelOutput } from "./GetSmsChannelOutput";
import { GetUserEndpointsOutput } from "./GetUserEndpointsOutput";
import { GetVoiceChannelOutput } from "./GetVoiceChannelOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PhoneNumberValidateOutput } from "./PhoneNumberValidateOutput";
import { PutEventStreamOutput } from "./PutEventStreamOutput";
import { PutEventsOutput } from "./PutEventsOutput";
import { RemoveAttributesOutput } from "./RemoveAttributesOutput";
import { SendMessagesOutput } from "./SendMessagesOutput";
import { SendUsersMessagesOutput } from "./SendUsersMessagesOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAdmChannelOutput } from "./UpdateAdmChannelOutput";
import { UpdateApnsChannelOutput } from "./UpdateApnsChannelOutput";
import { UpdateApnsSandboxChannelOutput } from "./UpdateApnsSandboxChannelOutput";
import { UpdateApnsVoipChannelOutput } from "./UpdateApnsVoipChannelOutput";
import { UpdateApnsVoipSandboxChannelOutput } from "./UpdateApnsVoipSandboxChannelOutput";
import { UpdateApplicationSettingsOutput } from "./UpdateApplicationSettingsOutput";
import { UpdateBaiduChannelOutput } from "./UpdateBaiduChannelOutput";
import { UpdateCampaignOutput } from "./UpdateCampaignOutput";
import { UpdateEmailChannelOutput } from "./UpdateEmailChannelOutput";
import { UpdateEndpointOutput } from "./UpdateEndpointOutput";
import { UpdateEndpointsBatchOutput } from "./UpdateEndpointsBatchOutput";
import { UpdateGcmChannelOutput } from "./UpdateGcmChannelOutput";
import { UpdateSegmentOutput } from "./UpdateSegmentOutput";
import { UpdateSmsChannelOutput } from "./UpdateSmsChannelOutput";
import { UpdateVoiceChannelOutput } from "./UpdateVoiceChannelOutput";
export type OutputTypesUnion =
  | CreateAppOutput
  | CreateCampaignOutput
  | CreateExportJobOutput
  | CreateImportJobOutput
  | CreateSegmentOutput
  | DeleteAdmChannelOutput
  | DeleteApnsChannelOutput
  | DeleteApnsSandboxChannelOutput
  | DeleteApnsVoipChannelOutput
  | DeleteApnsVoipSandboxChannelOutput
  | DeleteAppOutput
  | DeleteBaiduChannelOutput
  | DeleteCampaignOutput
  | DeleteEmailChannelOutput
  | DeleteEndpointOutput
  | DeleteEventStreamOutput
  | DeleteGcmChannelOutput
  | DeleteSegmentOutput
  | DeleteSmsChannelOutput
  | DeleteUserEndpointsOutput
  | DeleteVoiceChannelOutput
  | GetAdmChannelOutput
  | GetApnsChannelOutput
  | GetApnsSandboxChannelOutput
  | GetApnsVoipChannelOutput
  | GetApnsVoipSandboxChannelOutput
  | GetAppOutput
  | GetApplicationDateRangeKpiOutput
  | GetApplicationSettingsOutput
  | GetAppsOutput
  | GetBaiduChannelOutput
  | GetCampaignOutput
  | GetCampaignActivitiesOutput
  | GetCampaignDateRangeKpiOutput
  | GetCampaignVersionOutput
  | GetCampaignVersionsOutput
  | GetCampaignsOutput
  | GetChannelsOutput
  | GetEmailChannelOutput
  | GetEndpointOutput
  | GetEventStreamOutput
  | GetExportJobOutput
  | GetExportJobsOutput
  | GetGcmChannelOutput
  | GetImportJobOutput
  | GetImportJobsOutput
  | GetSegmentOutput
  | GetSegmentExportJobsOutput
  | GetSegmentImportJobsOutput
  | GetSegmentVersionOutput
  | GetSegmentVersionsOutput
  | GetSegmentsOutput
  | GetSmsChannelOutput
  | GetUserEndpointsOutput
  | GetVoiceChannelOutput
  | ListTagsForResourceOutput
  | PhoneNumberValidateOutput
  | PutEventStreamOutput
  | PutEventsOutput
  | RemoveAttributesOutput
  | SendMessagesOutput
  | SendUsersMessagesOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateAdmChannelOutput
  | UpdateApnsChannelOutput
  | UpdateApnsSandboxChannelOutput
  | UpdateApnsVoipChannelOutput
  | UpdateApnsVoipSandboxChannelOutput
  | UpdateApplicationSettingsOutput
  | UpdateBaiduChannelOutput
  | UpdateCampaignOutput
  | UpdateEmailChannelOutput
  | UpdateEndpointOutput
  | UpdateEndpointsBatchOutput
  | UpdateGcmChannelOutput
  | UpdateSegmentOutput
  | UpdateSmsChannelOutput
  | UpdateVoiceChannelOutput;
