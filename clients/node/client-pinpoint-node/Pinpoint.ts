import { PinpointClient } from "./PinpointClient";
import { BadRequestException } from "./types/BadRequestException";
import { CreateAppInput } from "./types/CreateAppInput";
import { CreateAppOutput } from "./types/CreateAppOutput";
import { CreateCampaignInput } from "./types/CreateCampaignInput";
import { CreateCampaignOutput } from "./types/CreateCampaignOutput";
import { CreateExportJobInput } from "./types/CreateExportJobInput";
import { CreateExportJobOutput } from "./types/CreateExportJobOutput";
import { CreateImportJobInput } from "./types/CreateImportJobInput";
import { CreateImportJobOutput } from "./types/CreateImportJobOutput";
import { CreateSegmentInput } from "./types/CreateSegmentInput";
import { CreateSegmentOutput } from "./types/CreateSegmentOutput";
import { DeleteAdmChannelInput } from "./types/DeleteAdmChannelInput";
import { DeleteAdmChannelOutput } from "./types/DeleteAdmChannelOutput";
import { DeleteApnsChannelInput } from "./types/DeleteApnsChannelInput";
import { DeleteApnsChannelOutput } from "./types/DeleteApnsChannelOutput";
import { DeleteApnsSandboxChannelInput } from "./types/DeleteApnsSandboxChannelInput";
import { DeleteApnsSandboxChannelOutput } from "./types/DeleteApnsSandboxChannelOutput";
import { DeleteApnsVoipChannelInput } from "./types/DeleteApnsVoipChannelInput";
import { DeleteApnsVoipChannelOutput } from "./types/DeleteApnsVoipChannelOutput";
import { DeleteApnsVoipSandboxChannelInput } from "./types/DeleteApnsVoipSandboxChannelInput";
import { DeleteApnsVoipSandboxChannelOutput } from "./types/DeleteApnsVoipSandboxChannelOutput";
import { DeleteAppInput } from "./types/DeleteAppInput";
import { DeleteAppOutput } from "./types/DeleteAppOutput";
import { DeleteBaiduChannelInput } from "./types/DeleteBaiduChannelInput";
import { DeleteBaiduChannelOutput } from "./types/DeleteBaiduChannelOutput";
import { DeleteCampaignInput } from "./types/DeleteCampaignInput";
import { DeleteCampaignOutput } from "./types/DeleteCampaignOutput";
import { DeleteEmailChannelInput } from "./types/DeleteEmailChannelInput";
import { DeleteEmailChannelOutput } from "./types/DeleteEmailChannelOutput";
import { DeleteEndpointInput } from "./types/DeleteEndpointInput";
import { DeleteEndpointOutput } from "./types/DeleteEndpointOutput";
import { DeleteEventStreamInput } from "./types/DeleteEventStreamInput";
import { DeleteEventStreamOutput } from "./types/DeleteEventStreamOutput";
import { DeleteGcmChannelInput } from "./types/DeleteGcmChannelInput";
import { DeleteGcmChannelOutput } from "./types/DeleteGcmChannelOutput";
import { DeleteSegmentInput } from "./types/DeleteSegmentInput";
import { DeleteSegmentOutput } from "./types/DeleteSegmentOutput";
import { DeleteSmsChannelInput } from "./types/DeleteSmsChannelInput";
import { DeleteSmsChannelOutput } from "./types/DeleteSmsChannelOutput";
import { DeleteUserEndpointsInput } from "./types/DeleteUserEndpointsInput";
import { DeleteUserEndpointsOutput } from "./types/DeleteUserEndpointsOutput";
import { DeleteVoiceChannelInput } from "./types/DeleteVoiceChannelInput";
import { DeleteVoiceChannelOutput } from "./types/DeleteVoiceChannelOutput";
import { ForbiddenException } from "./types/ForbiddenException";
import { GetAdmChannelInput } from "./types/GetAdmChannelInput";
import { GetAdmChannelOutput } from "./types/GetAdmChannelOutput";
import { GetApnsChannelInput } from "./types/GetApnsChannelInput";
import { GetApnsChannelOutput } from "./types/GetApnsChannelOutput";
import { GetApnsSandboxChannelInput } from "./types/GetApnsSandboxChannelInput";
import { GetApnsSandboxChannelOutput } from "./types/GetApnsSandboxChannelOutput";
import { GetApnsVoipChannelInput } from "./types/GetApnsVoipChannelInput";
import { GetApnsVoipChannelOutput } from "./types/GetApnsVoipChannelOutput";
import { GetApnsVoipSandboxChannelInput } from "./types/GetApnsVoipSandboxChannelInput";
import { GetApnsVoipSandboxChannelOutput } from "./types/GetApnsVoipSandboxChannelOutput";
import { GetAppInput } from "./types/GetAppInput";
import { GetAppOutput } from "./types/GetAppOutput";
import { GetApplicationDateRangeKpiInput } from "./types/GetApplicationDateRangeKpiInput";
import { GetApplicationDateRangeKpiOutput } from "./types/GetApplicationDateRangeKpiOutput";
import { GetApplicationSettingsInput } from "./types/GetApplicationSettingsInput";
import { GetApplicationSettingsOutput } from "./types/GetApplicationSettingsOutput";
import { GetAppsInput } from "./types/GetAppsInput";
import { GetAppsOutput } from "./types/GetAppsOutput";
import { GetBaiduChannelInput } from "./types/GetBaiduChannelInput";
import { GetBaiduChannelOutput } from "./types/GetBaiduChannelOutput";
import { GetCampaignActivitiesInput } from "./types/GetCampaignActivitiesInput";
import { GetCampaignActivitiesOutput } from "./types/GetCampaignActivitiesOutput";
import { GetCampaignDateRangeKpiInput } from "./types/GetCampaignDateRangeKpiInput";
import { GetCampaignDateRangeKpiOutput } from "./types/GetCampaignDateRangeKpiOutput";
import { GetCampaignInput } from "./types/GetCampaignInput";
import { GetCampaignOutput } from "./types/GetCampaignOutput";
import { GetCampaignVersionInput } from "./types/GetCampaignVersionInput";
import { GetCampaignVersionOutput } from "./types/GetCampaignVersionOutput";
import { GetCampaignVersionsInput } from "./types/GetCampaignVersionsInput";
import { GetCampaignVersionsOutput } from "./types/GetCampaignVersionsOutput";
import { GetCampaignsInput } from "./types/GetCampaignsInput";
import { GetCampaignsOutput } from "./types/GetCampaignsOutput";
import { GetChannelsInput } from "./types/GetChannelsInput";
import { GetChannelsOutput } from "./types/GetChannelsOutput";
import { GetEmailChannelInput } from "./types/GetEmailChannelInput";
import { GetEmailChannelOutput } from "./types/GetEmailChannelOutput";
import { GetEndpointInput } from "./types/GetEndpointInput";
import { GetEndpointOutput } from "./types/GetEndpointOutput";
import { GetEventStreamInput } from "./types/GetEventStreamInput";
import { GetEventStreamOutput } from "./types/GetEventStreamOutput";
import { GetExportJobInput } from "./types/GetExportJobInput";
import { GetExportJobOutput } from "./types/GetExportJobOutput";
import { GetExportJobsInput } from "./types/GetExportJobsInput";
import { GetExportJobsOutput } from "./types/GetExportJobsOutput";
import { GetGcmChannelInput } from "./types/GetGcmChannelInput";
import { GetGcmChannelOutput } from "./types/GetGcmChannelOutput";
import { GetImportJobInput } from "./types/GetImportJobInput";
import { GetImportJobOutput } from "./types/GetImportJobOutput";
import { GetImportJobsInput } from "./types/GetImportJobsInput";
import { GetImportJobsOutput } from "./types/GetImportJobsOutput";
import { GetSegmentExportJobsInput } from "./types/GetSegmentExportJobsInput";
import { GetSegmentExportJobsOutput } from "./types/GetSegmentExportJobsOutput";
import { GetSegmentImportJobsInput } from "./types/GetSegmentImportJobsInput";
import { GetSegmentImportJobsOutput } from "./types/GetSegmentImportJobsOutput";
import { GetSegmentInput } from "./types/GetSegmentInput";
import { GetSegmentOutput } from "./types/GetSegmentOutput";
import { GetSegmentVersionInput } from "./types/GetSegmentVersionInput";
import { GetSegmentVersionOutput } from "./types/GetSegmentVersionOutput";
import { GetSegmentVersionsInput } from "./types/GetSegmentVersionsInput";
import { GetSegmentVersionsOutput } from "./types/GetSegmentVersionsOutput";
import { GetSegmentsInput } from "./types/GetSegmentsInput";
import { GetSegmentsOutput } from "./types/GetSegmentsOutput";
import { GetSmsChannelInput } from "./types/GetSmsChannelInput";
import { GetSmsChannelOutput } from "./types/GetSmsChannelOutput";
import { GetUserEndpointsInput } from "./types/GetUserEndpointsInput";
import { GetUserEndpointsOutput } from "./types/GetUserEndpointsOutput";
import { GetVoiceChannelInput } from "./types/GetVoiceChannelInput";
import { GetVoiceChannelOutput } from "./types/GetVoiceChannelOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MethodNotAllowedException } from "./types/MethodNotAllowedException";
import { NotFoundException } from "./types/NotFoundException";
import { PhoneNumberValidateInput } from "./types/PhoneNumberValidateInput";
import { PhoneNumberValidateOutput } from "./types/PhoneNumberValidateOutput";
import { PutEventStreamInput } from "./types/PutEventStreamInput";
import { PutEventStreamOutput } from "./types/PutEventStreamOutput";
import { PutEventsInput } from "./types/PutEventsInput";
import { PutEventsOutput } from "./types/PutEventsOutput";
import { RemoveAttributesInput } from "./types/RemoveAttributesInput";
import { RemoveAttributesOutput } from "./types/RemoveAttributesOutput";
import { SendMessagesInput } from "./types/SendMessagesInput";
import { SendMessagesOutput } from "./types/SendMessagesOutput";
import { SendUsersMessagesInput } from "./types/SendUsersMessagesInput";
import { SendUsersMessagesOutput } from "./types/SendUsersMessagesOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAdmChannelInput } from "./types/UpdateAdmChannelInput";
import { UpdateAdmChannelOutput } from "./types/UpdateAdmChannelOutput";
import { UpdateApnsChannelInput } from "./types/UpdateApnsChannelInput";
import { UpdateApnsChannelOutput } from "./types/UpdateApnsChannelOutput";
import { UpdateApnsSandboxChannelInput } from "./types/UpdateApnsSandboxChannelInput";
import { UpdateApnsSandboxChannelOutput } from "./types/UpdateApnsSandboxChannelOutput";
import { UpdateApnsVoipChannelInput } from "./types/UpdateApnsVoipChannelInput";
import { UpdateApnsVoipChannelOutput } from "./types/UpdateApnsVoipChannelOutput";
import { UpdateApnsVoipSandboxChannelInput } from "./types/UpdateApnsVoipSandboxChannelInput";
import { UpdateApnsVoipSandboxChannelOutput } from "./types/UpdateApnsVoipSandboxChannelOutput";
import { UpdateApplicationSettingsInput } from "./types/UpdateApplicationSettingsInput";
import { UpdateApplicationSettingsOutput } from "./types/UpdateApplicationSettingsOutput";
import { UpdateBaiduChannelInput } from "./types/UpdateBaiduChannelInput";
import { UpdateBaiduChannelOutput } from "./types/UpdateBaiduChannelOutput";
import { UpdateCampaignInput } from "./types/UpdateCampaignInput";
import { UpdateCampaignOutput } from "./types/UpdateCampaignOutput";
import { UpdateEmailChannelInput } from "./types/UpdateEmailChannelInput";
import { UpdateEmailChannelOutput } from "./types/UpdateEmailChannelOutput";
import { UpdateEndpointInput } from "./types/UpdateEndpointInput";
import { UpdateEndpointOutput } from "./types/UpdateEndpointOutput";
import { UpdateEndpointsBatchInput } from "./types/UpdateEndpointsBatchInput";
import { UpdateEndpointsBatchOutput } from "./types/UpdateEndpointsBatchOutput";
import { UpdateGcmChannelInput } from "./types/UpdateGcmChannelInput";
import { UpdateGcmChannelOutput } from "./types/UpdateGcmChannelOutput";
import { UpdateSegmentInput } from "./types/UpdateSegmentInput";
import { UpdateSegmentOutput } from "./types/UpdateSegmentOutput";
import { UpdateSmsChannelInput } from "./types/UpdateSmsChannelInput";
import { UpdateSmsChannelOutput } from "./types/UpdateSmsChannelOutput";
import { UpdateVoiceChannelInput } from "./types/UpdateVoiceChannelInput";
import { UpdateVoiceChannelOutput } from "./types/UpdateVoiceChannelOutput";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateCampaignCommand } from "./commands/CreateCampaignCommand";
import { CreateExportJobCommand } from "./commands/CreateExportJobCommand";
import { CreateImportJobCommand } from "./commands/CreateImportJobCommand";
import { CreateSegmentCommand } from "./commands/CreateSegmentCommand";
import { DeleteAdmChannelCommand } from "./commands/DeleteAdmChannelCommand";
import { DeleteApnsChannelCommand } from "./commands/DeleteApnsChannelCommand";
import { DeleteApnsSandboxChannelCommand } from "./commands/DeleteApnsSandboxChannelCommand";
import { DeleteApnsVoipChannelCommand } from "./commands/DeleteApnsVoipChannelCommand";
import { DeleteApnsVoipSandboxChannelCommand } from "./commands/DeleteApnsVoipSandboxChannelCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteBaiduChannelCommand } from "./commands/DeleteBaiduChannelCommand";
import { DeleteCampaignCommand } from "./commands/DeleteCampaignCommand";
import { DeleteEmailChannelCommand } from "./commands/DeleteEmailChannelCommand";
import { DeleteEndpointCommand } from "./commands/DeleteEndpointCommand";
import { DeleteEventStreamCommand } from "./commands/DeleteEventStreamCommand";
import { DeleteGcmChannelCommand } from "./commands/DeleteGcmChannelCommand";
import { DeleteSegmentCommand } from "./commands/DeleteSegmentCommand";
import { DeleteSmsChannelCommand } from "./commands/DeleteSmsChannelCommand";
import { DeleteUserEndpointsCommand } from "./commands/DeleteUserEndpointsCommand";
import { DeleteVoiceChannelCommand } from "./commands/DeleteVoiceChannelCommand";
import { GetAdmChannelCommand } from "./commands/GetAdmChannelCommand";
import { GetApnsChannelCommand } from "./commands/GetApnsChannelCommand";
import { GetApnsSandboxChannelCommand } from "./commands/GetApnsSandboxChannelCommand";
import { GetApnsVoipChannelCommand } from "./commands/GetApnsVoipChannelCommand";
import { GetApnsVoipSandboxChannelCommand } from "./commands/GetApnsVoipSandboxChannelCommand";
import { GetAppCommand } from "./commands/GetAppCommand";
import { GetApplicationDateRangeKpiCommand } from "./commands/GetApplicationDateRangeKpiCommand";
import { GetApplicationSettingsCommand } from "./commands/GetApplicationSettingsCommand";
import { GetAppsCommand } from "./commands/GetAppsCommand";
import { GetBaiduChannelCommand } from "./commands/GetBaiduChannelCommand";
import { GetCampaignActivitiesCommand } from "./commands/GetCampaignActivitiesCommand";
import { GetCampaignCommand } from "./commands/GetCampaignCommand";
import { GetCampaignDateRangeKpiCommand } from "./commands/GetCampaignDateRangeKpiCommand";
import { GetCampaignVersionCommand } from "./commands/GetCampaignVersionCommand";
import { GetCampaignVersionsCommand } from "./commands/GetCampaignVersionsCommand";
import { GetCampaignsCommand } from "./commands/GetCampaignsCommand";
import { GetChannelsCommand } from "./commands/GetChannelsCommand";
import { GetEmailChannelCommand } from "./commands/GetEmailChannelCommand";
import { GetEndpointCommand } from "./commands/GetEndpointCommand";
import { GetEventStreamCommand } from "./commands/GetEventStreamCommand";
import { GetExportJobCommand } from "./commands/GetExportJobCommand";
import { GetExportJobsCommand } from "./commands/GetExportJobsCommand";
import { GetGcmChannelCommand } from "./commands/GetGcmChannelCommand";
import { GetImportJobCommand } from "./commands/GetImportJobCommand";
import { GetImportJobsCommand } from "./commands/GetImportJobsCommand";
import { GetSegmentCommand } from "./commands/GetSegmentCommand";
import { GetSegmentExportJobsCommand } from "./commands/GetSegmentExportJobsCommand";
import { GetSegmentImportJobsCommand } from "./commands/GetSegmentImportJobsCommand";
import { GetSegmentVersionCommand } from "./commands/GetSegmentVersionCommand";
import { GetSegmentVersionsCommand } from "./commands/GetSegmentVersionsCommand";
import { GetSegmentsCommand } from "./commands/GetSegmentsCommand";
import { GetSmsChannelCommand } from "./commands/GetSmsChannelCommand";
import { GetUserEndpointsCommand } from "./commands/GetUserEndpointsCommand";
import { GetVoiceChannelCommand } from "./commands/GetVoiceChannelCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PhoneNumberValidateCommand } from "./commands/PhoneNumberValidateCommand";
import { PutEventStreamCommand } from "./commands/PutEventStreamCommand";
import { PutEventsCommand } from "./commands/PutEventsCommand";
import { RemoveAttributesCommand } from "./commands/RemoveAttributesCommand";
import { SendMessagesCommand } from "./commands/SendMessagesCommand";
import { SendUsersMessagesCommand } from "./commands/SendUsersMessagesCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAdmChannelCommand } from "./commands/UpdateAdmChannelCommand";
import { UpdateApnsChannelCommand } from "./commands/UpdateApnsChannelCommand";
import { UpdateApnsSandboxChannelCommand } from "./commands/UpdateApnsSandboxChannelCommand";
import { UpdateApnsVoipChannelCommand } from "./commands/UpdateApnsVoipChannelCommand";
import { UpdateApnsVoipSandboxChannelCommand } from "./commands/UpdateApnsVoipSandboxChannelCommand";
import { UpdateApplicationSettingsCommand } from "./commands/UpdateApplicationSettingsCommand";
import { UpdateBaiduChannelCommand } from "./commands/UpdateBaiduChannelCommand";
import { UpdateCampaignCommand } from "./commands/UpdateCampaignCommand";
import { UpdateEmailChannelCommand } from "./commands/UpdateEmailChannelCommand";
import { UpdateEndpointCommand } from "./commands/UpdateEndpointCommand";
import { UpdateEndpointsBatchCommand } from "./commands/UpdateEndpointsBatchCommand";
import { UpdateGcmChannelCommand } from "./commands/UpdateGcmChannelCommand";
import { UpdateSegmentCommand } from "./commands/UpdateSegmentCommand";
import { UpdateSmsChannelCommand } from "./commands/UpdateSmsChannelCommand";
import { UpdateVoiceChannelCommand } from "./commands/UpdateVoiceChannelCommand";

export class Pinpoint extends PinpointClient {
  /**
   *  <p>Creates an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApp(args: CreateAppInput): Promise<CreateAppOutput>;
  public createApp(
    args: CreateAppInput,
    cb: (err: any, data?: CreateAppOutput) => void
  ): void;
  public createApp(
    args: CreateAppInput,
    cb?: (err: any, data?: CreateAppOutput) => void
  ): Promise<CreateAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new campaign for an application or updates the settings of an existing campaign for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCampaign(
    args: CreateCampaignInput
  ): Promise<CreateCampaignOutput>;
  public createCampaign(
    args: CreateCampaignInput,
    cb: (err: any, data?: CreateCampaignOutput) => void
  ): void;
  public createCampaign(
    args: CreateCampaignInput,
    cb?: (err: any, data?: CreateCampaignOutput) => void
  ): Promise<CreateCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new export job for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createExportJob(
    args: CreateExportJobInput
  ): Promise<CreateExportJobOutput>;
  public createExportJob(
    args: CreateExportJobInput,
    cb: (err: any, data?: CreateExportJobOutput) => void
  ): void;
  public createExportJob(
    args: CreateExportJobInput,
    cb?: (err: any, data?: CreateExportJobOutput) => void
  ): Promise<CreateExportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateExportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new import job for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createImportJob(
    args: CreateImportJobInput
  ): Promise<CreateImportJobOutput>;
  public createImportJob(
    args: CreateImportJobInput,
    cb: (err: any, data?: CreateImportJobOutput) => void
  ): void;
  public createImportJob(
    args: CreateImportJobInput,
    cb?: (err: any, data?: CreateImportJobOutput) => void
  ): Promise<CreateImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSegment(args: CreateSegmentInput): Promise<CreateSegmentOutput>;
  public createSegment(
    args: CreateSegmentInput,
    cb: (err: any, data?: CreateSegmentOutput) => void
  ): void;
  public createSegment(
    args: CreateSegmentInput,
    cb?: (err: any, data?: CreateSegmentOutput) => void
  ): Promise<CreateSegmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSegmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the ADM channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAdmChannel(
    args: DeleteAdmChannelInput
  ): Promise<DeleteAdmChannelOutput>;
  public deleteAdmChannel(
    args: DeleteAdmChannelInput,
    cb: (err: any, data?: DeleteAdmChannelOutput) => void
  ): void;
  public deleteAdmChannel(
    args: DeleteAdmChannelInput,
    cb?: (err: any, data?: DeleteAdmChannelOutput) => void
  ): Promise<DeleteAdmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAdmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the APNs channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApnsChannel(
    args: DeleteApnsChannelInput
  ): Promise<DeleteApnsChannelOutput>;
  public deleteApnsChannel(
    args: DeleteApnsChannelInput,
    cb: (err: any, data?: DeleteApnsChannelOutput) => void
  ): void;
  public deleteApnsChannel(
    args: DeleteApnsChannelInput,
    cb?: (err: any, data?: DeleteApnsChannelOutput) => void
  ): Promise<DeleteApnsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApnsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelInput
  ): Promise<DeleteApnsSandboxChannelOutput>;
  public deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelInput,
    cb: (err: any, data?: DeleteApnsSandboxChannelOutput) => void
  ): void;
  public deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelInput,
    cb?: (err: any, data?: DeleteApnsSandboxChannelOutput) => void
  ): Promise<DeleteApnsSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApnsSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelInput
  ): Promise<DeleteApnsVoipChannelOutput>;
  public deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelInput,
    cb: (err: any, data?: DeleteApnsVoipChannelOutput) => void
  ): void;
  public deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelInput,
    cb?: (err: any, data?: DeleteApnsVoipChannelOutput) => void
  ): Promise<DeleteApnsVoipChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApnsVoipChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelInput
  ): Promise<DeleteApnsVoipSandboxChannelOutput>;
  public deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelInput,
    cb: (err: any, data?: DeleteApnsVoipSandboxChannelOutput) => void
  ): void;
  public deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelInput,
    cb?: (err: any, data?: DeleteApnsVoipSandboxChannelOutput) => void
  ): Promise<DeleteApnsVoipSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApnsVoipSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApp(args: DeleteAppInput): Promise<DeleteAppOutput>;
  public deleteApp(
    args: DeleteAppInput,
    cb: (err: any, data?: DeleteAppOutput) => void
  ): void;
  public deleteApp(
    args: DeleteAppInput,
    cb?: (err: any, data?: DeleteAppOutput) => void
  ): Promise<DeleteAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the Baidu channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBaiduChannel(
    args: DeleteBaiduChannelInput
  ): Promise<DeleteBaiduChannelOutput>;
  public deleteBaiduChannel(
    args: DeleteBaiduChannelInput,
    cb: (err: any, data?: DeleteBaiduChannelOutput) => void
  ): void;
  public deleteBaiduChannel(
    args: DeleteBaiduChannelInput,
    cb?: (err: any, data?: DeleteBaiduChannelOutput) => void
  ): Promise<DeleteBaiduChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBaiduChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a campaign from an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCampaign(
    args: DeleteCampaignInput
  ): Promise<DeleteCampaignOutput>;
  public deleteCampaign(
    args: DeleteCampaignInput,
    cb: (err: any, data?: DeleteCampaignOutput) => void
  ): void;
  public deleteCampaign(
    args: DeleteCampaignInput,
    cb?: (err: any, data?: DeleteCampaignOutput) => void
  ): Promise<DeleteCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the email channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEmailChannel(
    args: DeleteEmailChannelInput
  ): Promise<DeleteEmailChannelOutput>;
  public deleteEmailChannel(
    args: DeleteEmailChannelInput,
    cb: (err: any, data?: DeleteEmailChannelOutput) => void
  ): void;
  public deleteEmailChannel(
    args: DeleteEmailChannelInput,
    cb?: (err: any, data?: DeleteEmailChannelOutput) => void
  ): Promise<DeleteEmailChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEmailChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an endpoint from an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEndpoint(
    args: DeleteEndpointInput
  ): Promise<DeleteEndpointOutput>;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb: (err: any, data?: DeleteEndpointOutput) => void
  ): void;
  public deleteEndpoint(
    args: DeleteEndpointInput,
    cb?: (err: any, data?: DeleteEndpointOutput) => void
  ): Promise<DeleteEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the event stream for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEventStream(
    args: DeleteEventStreamInput
  ): Promise<DeleteEventStreamOutput>;
  public deleteEventStream(
    args: DeleteEventStreamInput,
    cb: (err: any, data?: DeleteEventStreamOutput) => void
  ): void;
  public deleteEventStream(
    args: DeleteEventStreamInput,
    cb?: (err: any, data?: DeleteEventStreamOutput) => void
  ): Promise<DeleteEventStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEventStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the GCM channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGcmChannel(
    args: DeleteGcmChannelInput
  ): Promise<DeleteGcmChannelOutput>;
  public deleteGcmChannel(
    args: DeleteGcmChannelInput,
    cb: (err: any, data?: DeleteGcmChannelOutput) => void
  ): void;
  public deleteGcmChannel(
    args: DeleteGcmChannelInput,
    cb?: (err: any, data?: DeleteGcmChannelOutput) => void
  ): Promise<DeleteGcmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGcmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a segment from an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSegment(args: DeleteSegmentInput): Promise<DeleteSegmentOutput>;
  public deleteSegment(
    args: DeleteSegmentInput,
    cb: (err: any, data?: DeleteSegmentOutput) => void
  ): void;
  public deleteSegment(
    args: DeleteSegmentInput,
    cb?: (err: any, data?: DeleteSegmentOutput) => void
  ): Promise<DeleteSegmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSegmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the SMS channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSmsChannel(
    args: DeleteSmsChannelInput
  ): Promise<DeleteSmsChannelOutput>;
  public deleteSmsChannel(
    args: DeleteSmsChannelInput,
    cb: (err: any, data?: DeleteSmsChannelOutput) => void
  ): void;
  public deleteSmsChannel(
    args: DeleteSmsChannelInput,
    cb?: (err: any, data?: DeleteSmsChannelOutput) => void
  ): Promise<DeleteSmsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSmsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all the endpoints that are associated with a specific user ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserEndpoints(
    args: DeleteUserEndpointsInput
  ): Promise<DeleteUserEndpointsOutput>;
  public deleteUserEndpoints(
    args: DeleteUserEndpointsInput,
    cb: (err: any, data?: DeleteUserEndpointsOutput) => void
  ): void;
  public deleteUserEndpoints(
    args: DeleteUserEndpointsInput,
    cb?: (err: any, data?: DeleteUserEndpointsOutput) => void
  ): Promise<DeleteUserEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the voice channel for an application and deletes any existing settings for the channel.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVoiceChannel(
    args: DeleteVoiceChannelInput
  ): Promise<DeleteVoiceChannelOutput>;
  public deleteVoiceChannel(
    args: DeleteVoiceChannelInput,
    cb: (err: any, data?: DeleteVoiceChannelOutput) => void
  ): void;
  public deleteVoiceChannel(
    args: DeleteVoiceChannelInput,
    cb?: (err: any, data?: DeleteVoiceChannelOutput) => void
  ): Promise<DeleteVoiceChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVoiceChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the ADM channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAdmChannel(args: GetAdmChannelInput): Promise<GetAdmChannelOutput>;
  public getAdmChannel(
    args: GetAdmChannelInput,
    cb: (err: any, data?: GetAdmChannelOutput) => void
  ): void;
  public getAdmChannel(
    args: GetAdmChannelInput,
    cb?: (err: any, data?: GetAdmChannelOutput) => void
  ): Promise<GetAdmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAdmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the APNs channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApnsChannel(
    args: GetApnsChannelInput
  ): Promise<GetApnsChannelOutput>;
  public getApnsChannel(
    args: GetApnsChannelInput,
    cb: (err: any, data?: GetApnsChannelOutput) => void
  ): void;
  public getApnsChannel(
    args: GetApnsChannelInput,
    cb?: (err: any, data?: GetApnsChannelOutput) => void
  ): Promise<GetApnsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApnsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the APNs sandbox channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApnsSandboxChannel(
    args: GetApnsSandboxChannelInput
  ): Promise<GetApnsSandboxChannelOutput>;
  public getApnsSandboxChannel(
    args: GetApnsSandboxChannelInput,
    cb: (err: any, data?: GetApnsSandboxChannelOutput) => void
  ): void;
  public getApnsSandboxChannel(
    args: GetApnsSandboxChannelInput,
    cb?: (err: any, data?: GetApnsSandboxChannelOutput) => void
  ): Promise<GetApnsSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApnsSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the APNs VoIP channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApnsVoipChannel(
    args: GetApnsVoipChannelInput
  ): Promise<GetApnsVoipChannelOutput>;
  public getApnsVoipChannel(
    args: GetApnsVoipChannelInput,
    cb: (err: any, data?: GetApnsVoipChannelOutput) => void
  ): void;
  public getApnsVoipChannel(
    args: GetApnsVoipChannelInput,
    cb?: (err: any, data?: GetApnsVoipChannelOutput) => void
  ): Promise<GetApnsVoipChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApnsVoipChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelInput
  ): Promise<GetApnsVoipSandboxChannelOutput>;
  public getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelInput,
    cb: (err: any, data?: GetApnsVoipSandboxChannelOutput) => void
  ): void;
  public getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelInput,
    cb?: (err: any, data?: GetApnsVoipSandboxChannelOutput) => void
  ): Promise<GetApnsVoipSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApnsVoipSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApp(args: GetAppInput): Promise<GetAppOutput>;
  public getApp(
    args: GetAppInput,
    cb: (err: any, data?: GetAppOutput) => void
  ): void;
  public getApp(
    args: GetAppInput,
    cb?: (err: any, data?: GetAppOutput) => void
  ): Promise<GetAppOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *  <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiInput
  ): Promise<GetApplicationDateRangeKpiOutput>;
  public getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiInput,
    cb: (err: any, data?: GetApplicationDateRangeKpiOutput) => void
  ): void;
  public getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiInput,
    cb?: (err: any, data?: GetApplicationDateRangeKpiOutput) => void
  ): Promise<GetApplicationDateRangeKpiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationDateRangeKpiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApplicationSettings(
    args: GetApplicationSettingsInput
  ): Promise<GetApplicationSettingsOutput>;
  public getApplicationSettings(
    args: GetApplicationSettingsInput,
    cb: (err: any, data?: GetApplicationSettingsOutput) => void
  ): void;
  public getApplicationSettings(
    args: GetApplicationSettingsInput,
    cb?: (err: any, data?: GetApplicationSettingsOutput) => void
  ): Promise<GetApplicationSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApplicationSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about all of your applications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApps(args: GetAppsInput): Promise<GetAppsOutput>;
  public getApps(
    args: GetAppsInput,
    cb: (err: any, data?: GetAppsOutput) => void
  ): void;
  public getApps(
    args: GetAppsInput,
    cb?: (err: any, data?: GetAppsOutput) => void
  ): Promise<GetAppsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAppsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the Baidu Cloud Push channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBaiduChannel(
    args: GetBaiduChannelInput
  ): Promise<GetBaiduChannelOutput>;
  public getBaiduChannel(
    args: GetBaiduChannelInput,
    cb: (err: any, data?: GetBaiduChannelOutput) => void
  ): void;
  public getBaiduChannel(
    args: GetBaiduChannelInput,
    cb?: (err: any, data?: GetBaiduChannelOutput) => void
  ): Promise<GetBaiduChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBaiduChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status, configuration, and other settings for a campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaign(args: GetCampaignInput): Promise<GetCampaignOutput>;
  public getCampaign(
    args: GetCampaignInput,
    cb: (err: any, data?: GetCampaignOutput) => void
  ): void;
  public getCampaign(
    args: GetCampaignInput,
    cb?: (err: any, data?: GetCampaignOutput) => void
  ): Promise<GetCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the activity performed by a campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaignActivities(
    args: GetCampaignActivitiesInput
  ): Promise<GetCampaignActivitiesOutput>;
  public getCampaignActivities(
    args: GetCampaignActivitiesInput,
    cb: (err: any, data?: GetCampaignActivitiesOutput) => void
  ): void;
  public getCampaignActivities(
    args: GetCampaignActivitiesInput,
    cb?: (err: any, data?: GetCampaignActivitiesOutput) => void
  ): Promise<GetCampaignActivitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignActivitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *  <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiInput
  ): Promise<GetCampaignDateRangeKpiOutput>;
  public getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiInput,
    cb: (err: any, data?: GetCampaignDateRangeKpiOutput) => void
  ): void;
  public getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiInput,
    cb?: (err: any, data?: GetCampaignDateRangeKpiOutput) => void
  ): Promise<GetCampaignDateRangeKpiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignDateRangeKpiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status, configuration, and other settings for a specific version of a campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaignVersion(
    args: GetCampaignVersionInput
  ): Promise<GetCampaignVersionOutput>;
  public getCampaignVersion(
    args: GetCampaignVersionInput,
    cb: (err: any, data?: GetCampaignVersionOutput) => void
  ): void;
  public getCampaignVersion(
    args: GetCampaignVersionInput,
    cb?: (err: any, data?: GetCampaignVersionOutput) => void
  ): Promise<GetCampaignVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status, configuration, and other settings for all versions of a specific campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaignVersions(
    args: GetCampaignVersionsInput
  ): Promise<GetCampaignVersionsOutput>;
  public getCampaignVersions(
    args: GetCampaignVersionsInput,
    cb: (err: any, data?: GetCampaignVersionsOutput) => void
  ): void;
  public getCampaignVersions(
    args: GetCampaignVersionsInput,
    cb?: (err: any, data?: GetCampaignVersionsOutput) => void
  ): Promise<GetCampaignVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCampaigns(args: GetCampaignsInput): Promise<GetCampaignsOutput>;
  public getCampaigns(
    args: GetCampaignsInput,
    cb: (err: any, data?: GetCampaignsOutput) => void
  ): void;
  public getCampaigns(
    args: GetCampaignsInput,
    cb?: (err: any, data?: GetCampaignsOutput) => void
  ): Promise<GetCampaignsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCampaignsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the history and status of each channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getChannels(args: GetChannelsInput): Promise<GetChannelsOutput>;
  public getChannels(
    args: GetChannelsInput,
    cb: (err: any, data?: GetChannelsOutput) => void
  ): void;
  public getChannels(
    args: GetChannelsInput,
    cb?: (err: any, data?: GetChannelsOutput) => void
  ): Promise<GetChannelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetChannelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the email channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEmailChannel(
    args: GetEmailChannelInput
  ): Promise<GetEmailChannelOutput>;
  public getEmailChannel(
    args: GetEmailChannelInput,
    cb: (err: any, data?: GetEmailChannelOutput) => void
  ): void;
  public getEmailChannel(
    args: GetEmailChannelInput,
    cb?: (err: any, data?: GetEmailChannelOutput) => void
  ): Promise<GetEmailChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEmailChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the settings and attributes of a specific endpoint for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEndpoint(args: GetEndpointInput): Promise<GetEndpointOutput>;
  public getEndpoint(
    args: GetEndpointInput,
    cb: (err: any, data?: GetEndpointOutput) => void
  ): void;
  public getEndpoint(
    args: GetEndpointInput,
    cb?: (err: any, data?: GetEndpointOutput) => void
  ): Promise<GetEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the event stream settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEventStream(
    args: GetEventStreamInput
  ): Promise<GetEventStreamOutput>;
  public getEventStream(
    args: GetEventStreamInput,
    cb: (err: any, data?: GetEventStreamOutput) => void
  ): void;
  public getEventStream(
    args: GetEventStreamInput,
    cb?: (err: any, data?: GetEventStreamOutput) => void
  ): Promise<GetEventStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEventStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of a specific export job for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExportJob(args: GetExportJobInput): Promise<GetExportJobOutput>;
  public getExportJob(
    args: GetExportJobInput,
    cb: (err: any, data?: GetExportJobOutput) => void
  ): void;
  public getExportJob(
    args: GetExportJobInput,
    cb?: (err: any, data?: GetExportJobOutput) => void
  ): Promise<GetExportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of all the export jobs for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExportJobs(args: GetExportJobsInput): Promise<GetExportJobsOutput>;
  public getExportJobs(
    args: GetExportJobsInput,
    cb: (err: any, data?: GetExportJobsOutput) => void
  ): void;
  public getExportJobs(
    args: GetExportJobsInput,
    cb?: (err: any, data?: GetExportJobsOutput) => void
  ): Promise<GetExportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the GCM channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGcmChannel(args: GetGcmChannelInput): Promise<GetGcmChannelOutput>;
  public getGcmChannel(
    args: GetGcmChannelInput,
    cb: (err: any, data?: GetGcmChannelOutput) => void
  ): void;
  public getGcmChannel(
    args: GetGcmChannelInput,
    cb?: (err: any, data?: GetGcmChannelOutput) => void
  ): Promise<GetGcmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGcmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of a specific import job for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getImportJob(args: GetImportJobInput): Promise<GetImportJobOutput>;
  public getImportJob(
    args: GetImportJobInput,
    cb: (err: any, data?: GetImportJobOutput) => void
  ): void;
  public getImportJob(
    args: GetImportJobInput,
    cb?: (err: any, data?: GetImportJobOutput) => void
  ): Promise<GetImportJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetImportJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of all the import jobs for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getImportJobs(args: GetImportJobsInput): Promise<GetImportJobsOutput>;
  public getImportJobs(
    args: GetImportJobsInput,
    cb: (err: any, data?: GetImportJobsOutput) => void
  ): void;
  public getImportJobs(
    args: GetImportJobsInput,
    cb?: (err: any, data?: GetImportJobsOutput) => void
  ): Promise<GetImportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetImportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegment(args: GetSegmentInput): Promise<GetSegmentOutput>;
  public getSegment(
    args: GetSegmentInput,
    cb: (err: any, data?: GetSegmentOutput) => void
  ): void;
  public getSegment(
    args: GetSegmentInput,
    cb?: (err: any, data?: GetSegmentOutput) => void
  ): Promise<GetSegmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the export jobs for a segment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegmentExportJobs(
    args: GetSegmentExportJobsInput
  ): Promise<GetSegmentExportJobsOutput>;
  public getSegmentExportJobs(
    args: GetSegmentExportJobsInput,
    cb: (err: any, data?: GetSegmentExportJobsOutput) => void
  ): void;
  public getSegmentExportJobs(
    args: GetSegmentExportJobsInput,
    cb?: (err: any, data?: GetSegmentExportJobsOutput) => void
  ): Promise<GetSegmentExportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentExportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the import jobs for a segment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegmentImportJobs(
    args: GetSegmentImportJobsInput
  ): Promise<GetSegmentImportJobsOutput>;
  public getSegmentImportJobs(
    args: GetSegmentImportJobsInput,
    cb: (err: any, data?: GetSegmentImportJobsOutput) => void
  ): void;
  public getSegmentImportJobs(
    args: GetSegmentImportJobsInput,
    cb?: (err: any, data?: GetSegmentImportJobsOutput) => void
  ): Promise<GetSegmentImportJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentImportJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegmentVersion(
    args: GetSegmentVersionInput
  ): Promise<GetSegmentVersionOutput>;
  public getSegmentVersion(
    args: GetSegmentVersionInput,
    cb: (err: any, data?: GetSegmentVersionOutput) => void
  ): void;
  public getSegmentVersion(
    args: GetSegmentVersionInput,
    cb?: (err: any, data?: GetSegmentVersionOutput) => void
  ): Promise<GetSegmentVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the configuration, dimension, and other settings for all versions of a specific segment that's associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegmentVersions(
    args: GetSegmentVersionsInput
  ): Promise<GetSegmentVersionsOutput>;
  public getSegmentVersions(
    args: GetSegmentVersionsInput,
    cb: (err: any, data?: GetSegmentVersionsOutput) => void
  ): void;
  public getSegmentVersions(
    args: GetSegmentVersionsInput,
    cb?: (err: any, data?: GetSegmentVersionsOutput) => void
  ): Promise<GetSegmentVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSegments(args: GetSegmentsInput): Promise<GetSegmentsOutput>;
  public getSegments(
    args: GetSegmentsInput,
    cb: (err: any, data?: GetSegmentsOutput) => void
  ): void;
  public getSegments(
    args: GetSegmentsInput,
    cb?: (err: any, data?: GetSegmentsOutput) => void
  ): Promise<GetSegmentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSegmentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the SMS channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSmsChannel(args: GetSmsChannelInput): Promise<GetSmsChannelOutput>;
  public getSmsChannel(
    args: GetSmsChannelInput,
    cb: (err: any, data?: GetSmsChannelOutput) => void
  ): void;
  public getSmsChannel(
    args: GetSmsChannelInput,
    cb?: (err: any, data?: GetSmsChannelOutput) => void
  ): Promise<GetSmsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSmsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about all the endpoints that are associated with a specific user ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserEndpoints(
    args: GetUserEndpointsInput
  ): Promise<GetUserEndpointsOutput>;
  public getUserEndpoints(
    args: GetUserEndpointsInput,
    cb: (err: any, data?: GetUserEndpointsOutput) => void
  ): void;
  public getUserEndpoints(
    args: GetUserEndpointsInput,
    cb?: (err: any, data?: GetUserEndpointsOutput) => void
  ): Promise<GetUserEndpointsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserEndpointsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the status and settings of the voice channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVoiceChannel(
    args: GetVoiceChannelInput
  ): Promise<GetVoiceChannelOutput>;
  public getVoiceChannel(
    args: GetVoiceChannelInput,
    cb: (err: any, data?: GetVoiceChannelOutput) => void
  ): void;
  public getVoiceChannel(
    args: GetVoiceChannelInput,
    cb?: (err: any, data?: GetVoiceChannelOutput) => void
  ): Promise<GetVoiceChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVoiceChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all the tags (keys and values) that are associated with an application, campaign, or segment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about a phone number.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public phoneNumberValidate(
    args: PhoneNumberValidateInput
  ): Promise<PhoneNumberValidateOutput>;
  public phoneNumberValidate(
    args: PhoneNumberValidateInput,
    cb: (err: any, data?: PhoneNumberValidateOutput) => void
  ): void;
  public phoneNumberValidate(
    args: PhoneNumberValidateInput,
    cb?: (err: any, data?: PhoneNumberValidateOutput) => void
  ): Promise<PhoneNumberValidateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PhoneNumberValidateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEventStream(
    args: PutEventStreamInput
  ): Promise<PutEventStreamOutput>;
  public putEventStream(
    args: PutEventStreamInput,
    cb: (err: any, data?: PutEventStreamOutput) => void
  ): void;
  public putEventStream(
    args: PutEventStreamInput,
    cb?: (err: any, data?: PutEventStreamOutput) => void
  ): Promise<PutEventStreamOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventStreamCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEvents(args: PutEventsInput): Promise<PutEventsOutput>;
  public putEvents(
    args: PutEventsInput,
    cb: (err: any, data?: PutEventsOutput) => void
  ): void;
  public putEvents(
    args: PutEventsInput,
    cb?: (err: any, data?: PutEventsOutput) => void
  ): Promise<PutEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeAttributes(
    args: RemoveAttributesInput
  ): Promise<RemoveAttributesOutput>;
  public removeAttributes(
    args: RemoveAttributesInput,
    cb: (err: any, data?: RemoveAttributesOutput) => void
  ): void;
  public removeAttributes(
    args: RemoveAttributesInput,
    cb?: (err: any, data?: RemoveAttributesOutput) => void
  ): Promise<RemoveAttributesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveAttributesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates and sends a direct message.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendMessages(args: SendMessagesInput): Promise<SendMessagesOutput>;
  public sendMessages(
    args: SendMessagesInput,
    cb: (err: any, data?: SendMessagesOutput) => void
  ): void;
  public sendMessages(
    args: SendMessagesInput,
    cb?: (err: any, data?: SendMessagesOutput) => void
  ): Promise<SendMessagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendMessagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates and sends a message to a list of users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendUsersMessages(
    args: SendUsersMessagesInput
  ): Promise<SendUsersMessagesOutput>;
  public sendUsersMessages(
    args: SendUsersMessagesInput,
    cb: (err: any, data?: SendUsersMessagesOutput) => void
  ): void;
  public sendUsersMessages(
    args: SendUsersMessagesInput,
    cb?: (err: any, data?: SendUsersMessagesOutput) => void
  ): Promise<SendUsersMessagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendUsersMessagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags (keys and values) to an application, campaign, or segment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags (keys and values) from an application, campaign, or segment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the ADM channel settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAdmChannel(
    args: UpdateAdmChannelInput
  ): Promise<UpdateAdmChannelOutput>;
  public updateAdmChannel(
    args: UpdateAdmChannelInput,
    cb: (err: any, data?: UpdateAdmChannelOutput) => void
  ): void;
  public updateAdmChannel(
    args: UpdateAdmChannelInput,
    cb?: (err: any, data?: UpdateAdmChannelOutput) => void
  ): Promise<UpdateAdmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAdmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the APNs channel settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApnsChannel(
    args: UpdateApnsChannelInput
  ): Promise<UpdateApnsChannelOutput>;
  public updateApnsChannel(
    args: UpdateApnsChannelInput,
    cb: (err: any, data?: UpdateApnsChannelOutput) => void
  ): void;
  public updateApnsChannel(
    args: UpdateApnsChannelInput,
    cb?: (err: any, data?: UpdateApnsChannelOutput) => void
  ): Promise<UpdateApnsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApnsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the APNs sandbox channel settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelInput
  ): Promise<UpdateApnsSandboxChannelOutput>;
  public updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelInput,
    cb: (err: any, data?: UpdateApnsSandboxChannelOutput) => void
  ): void;
  public updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelInput,
    cb?: (err: any, data?: UpdateApnsSandboxChannelOutput) => void
  ): Promise<UpdateApnsSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApnsSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the APNs VoIP channel settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApnsVoipChannel(
    args: UpdateApnsVoipChannelInput
  ): Promise<UpdateApnsVoipChannelOutput>;
  public updateApnsVoipChannel(
    args: UpdateApnsVoipChannelInput,
    cb: (err: any, data?: UpdateApnsVoipChannelOutput) => void
  ): void;
  public updateApnsVoipChannel(
    args: UpdateApnsVoipChannelInput,
    cb?: (err: any, data?: UpdateApnsVoipChannelOutput) => void
  ): Promise<UpdateApnsVoipChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApnsVoipChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings for the APNs VoIP sandbox channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelInput
  ): Promise<UpdateApnsVoipSandboxChannelOutput>;
  public updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelInput,
    cb: (err: any, data?: UpdateApnsVoipSandboxChannelOutput) => void
  ): void;
  public updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelInput,
    cb?: (err: any, data?: UpdateApnsVoipSandboxChannelOutput) => void
  ): Promise<UpdateApnsVoipSandboxChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApnsVoipSandboxChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApplicationSettings(
    args: UpdateApplicationSettingsInput
  ): Promise<UpdateApplicationSettingsOutput>;
  public updateApplicationSettings(
    args: UpdateApplicationSettingsInput,
    cb: (err: any, data?: UpdateApplicationSettingsOutput) => void
  ): void;
  public updateApplicationSettings(
    args: UpdateApplicationSettingsInput,
    cb?: (err: any, data?: UpdateApplicationSettingsOutput) => void
  ): Promise<UpdateApplicationSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApplicationSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings of the Baidu channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBaiduChannel(
    args: UpdateBaiduChannelInput
  ): Promise<UpdateBaiduChannelOutput>;
  public updateBaiduChannel(
    args: UpdateBaiduChannelInput,
    cb: (err: any, data?: UpdateBaiduChannelOutput) => void
  ): void;
  public updateBaiduChannel(
    args: UpdateBaiduChannelInput,
    cb?: (err: any, data?: UpdateBaiduChannelOutput) => void
  ): Promise<UpdateBaiduChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBaiduChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings for a campaign.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCampaign(
    args: UpdateCampaignInput
  ): Promise<UpdateCampaignOutput>;
  public updateCampaign(
    args: UpdateCampaignInput,
    cb: (err: any, data?: UpdateCampaignOutput) => void
  ): void;
  public updateCampaign(
    args: UpdateCampaignInput,
    cb?: (err: any, data?: UpdateCampaignOutput) => void
  ): Promise<UpdateCampaignOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCampaignCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status and settings of the email channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEmailChannel(
    args: UpdateEmailChannelInput
  ): Promise<UpdateEmailChannelOutput>;
  public updateEmailChannel(
    args: UpdateEmailChannelInput,
    cb: (err: any, data?: UpdateEmailChannelOutput) => void
  ): void;
  public updateEmailChannel(
    args: UpdateEmailChannelInput,
    cb?: (err: any, data?: UpdateEmailChannelOutput) => void
  ): Promise<UpdateEmailChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEmailChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for an endpoint.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEndpoint(
    args: UpdateEndpointInput
  ): Promise<UpdateEndpointOutput>;
  public updateEndpoint(
    args: UpdateEndpointInput,
    cb: (err: any, data?: UpdateEndpointOutput) => void
  ): void;
  public updateEndpoint(
    args: UpdateEndpointInput,
    cb?: (err: any, data?: UpdateEndpointOutput) => void
  ): Promise<UpdateEndpointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEndpointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   *  <p>Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for a batch of endpoints.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEndpointsBatch(
    args: UpdateEndpointsBatchInput
  ): Promise<UpdateEndpointsBatchOutput>;
  public updateEndpointsBatch(
    args: UpdateEndpointsBatchInput,
    cb: (err: any, data?: UpdateEndpointsBatchOutput) => void
  ): void;
  public updateEndpointsBatch(
    args: UpdateEndpointsBatchInput,
    cb?: (err: any, data?: UpdateEndpointsBatchOutput) => void
  ): Promise<UpdateEndpointsBatchOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEndpointsBatchCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status and settings of the GCM channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGcmChannel(
    args: UpdateGcmChannelInput
  ): Promise<UpdateGcmChannelOutput>;
  public updateGcmChannel(
    args: UpdateGcmChannelInput,
    cb: (err: any, data?: UpdateGcmChannelOutput) => void
  ): void;
  public updateGcmChannel(
    args: UpdateGcmChannelInput,
    cb?: (err: any, data?: UpdateGcmChannelOutput) => void
  ): Promise<UpdateGcmChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGcmChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSegment(args: UpdateSegmentInput): Promise<UpdateSegmentOutput>;
  public updateSegment(
    args: UpdateSegmentInput,
    cb: (err: any, data?: UpdateSegmentOutput) => void
  ): void;
  public updateSegment(
    args: UpdateSegmentInput,
    cb?: (err: any, data?: UpdateSegmentOutput) => void
  ): Promise<UpdateSegmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSegmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status and settings of the SMS channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSmsChannel(
    args: UpdateSmsChannelInput
  ): Promise<UpdateSmsChannelOutput>;
  public updateSmsChannel(
    args: UpdateSmsChannelInput,
    cb: (err: any, data?: UpdateSmsChannelOutput) => void
  ): void;
  public updateSmsChannel(
    args: UpdateSmsChannelInput,
    cb?: (err: any, data?: UpdateSmsChannelOutput) => void
  ): Promise<UpdateSmsChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSmsChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the status and settings of the voice channel for an application.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>Provides information about an API request or response.</p>
   *   - {InternalServerErrorException} <p>Provides information about an API request or response.</p>
   *   - {ForbiddenException} <p>Provides information about an API request or response.</p>
   *   - {NotFoundException} <p>Provides information about an API request or response.</p>
   *   - {MethodNotAllowedException} <p>Provides information about an API request or response.</p>
   *   - {TooManyRequestsException} <p>Provides information about an API request or response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVoiceChannel(
    args: UpdateVoiceChannelInput
  ): Promise<UpdateVoiceChannelOutput>;
  public updateVoiceChannel(
    args: UpdateVoiceChannelInput,
    cb: (err: any, data?: UpdateVoiceChannelOutput) => void
  ): void;
  public updateVoiceChannel(
    args: UpdateVoiceChannelInput,
    cb?: (err: any, data?: UpdateVoiceChannelOutput) => void
  ): Promise<UpdateVoiceChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVoiceChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
