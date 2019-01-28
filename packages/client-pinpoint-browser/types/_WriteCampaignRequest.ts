import {_WriteTreatmentResource, _UnmarshalledWriteTreatmentResource} from './_WriteTreatmentResource';
import {_CampaignHook, _UnmarshalledCampaignHook} from './_CampaignHook';
import {_CampaignLimits, _UnmarshalledCampaignLimits} from './_CampaignLimits';
import {_MessageConfiguration, _UnmarshalledMessageConfiguration} from './_MessageConfiguration';
import {_Schedule, _UnmarshalledSchedule} from './_Schedule';

/**
 * Used to create a campaign.
 */
export interface _WriteCampaignRequest {
    /**
     * Treatments that are defined in addition to the default treatment.
     */
    AdditionalTreatments?: Array<_WriteTreatmentResource>|Iterable<_WriteTreatmentResource>;

    /**
     * A description of the campaign.
     */
    Description?: string;

    /**
     * The allocated percentage of end users who will not receive messages from this campaign.
     */
    HoldoutPercent?: number;

    /**
     * Campaign hook information.
     */
    Hook?: _CampaignHook;

    /**
     * Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false.
     */
    IsPaused?: boolean;

    /**
     * The campaign limits settings.
     */
    Limits?: _CampaignLimits;

    /**
     * The message configuration settings.
     */
    MessageConfiguration?: _MessageConfiguration;

    /**
     * The custom name of the campaign.
     */
    Name?: string;

    /**
     * The campaign schedule.
     */
    Schedule?: _Schedule;

    /**
     * The ID of the segment to which the campaign sends messages.
     */
    SegmentId?: string;

    /**
     * The version of the segment to which the campaign sends messages.
     */
    SegmentVersion?: number;

    /**
     * A custom description for the treatment.
     */
    TreatmentDescription?: string;

    /**
     * The custom name of a variation of the campaign used for A/B testing.
     */
    TreatmentName?: string;
}

export interface _UnmarshalledWriteCampaignRequest extends _WriteCampaignRequest {
    /**
     * Treatments that are defined in addition to the default treatment.
     */
    AdditionalTreatments?: Array<_UnmarshalledWriteTreatmentResource>;

    /**
     * Campaign hook information.
     */
    Hook?: _UnmarshalledCampaignHook;

    /**
     * The campaign limits settings.
     */
    Limits?: _UnmarshalledCampaignLimits;

    /**
     * The message configuration settings.
     */
    MessageConfiguration?: _UnmarshalledMessageConfiguration;

    /**
     * The campaign schedule.
     */
    Schedule?: _UnmarshalledSchedule;
}