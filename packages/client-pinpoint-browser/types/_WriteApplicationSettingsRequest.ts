import {_CampaignHook, _UnmarshalledCampaignHook} from './_CampaignHook';
import {_CampaignLimits, _UnmarshalledCampaignLimits} from './_CampaignLimits';
import {_QuietTime, _UnmarshalledQuietTime} from './_QuietTime';

/**
 * Creating application setting request
 */
export interface _WriteApplicationSettingsRequest {
    /**
     * Default campaign hook information.
     */
    CampaignHook?: _CampaignHook;

    /**
     * The CloudWatchMetrics settings for the app.
     */
    CloudWatchMetricsEnabled?: boolean;

    /**
     * The limits that apply to each campaign in the project by default. Campaigns can also have their own limits, which override the settings at the project level.
     */
    Limits?: _CampaignLimits;

    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: _QuietTime;
}

export interface _UnmarshalledWriteApplicationSettingsRequest extends _WriteApplicationSettingsRequest {
    /**
     * Default campaign hook information.
     */
    CampaignHook?: _UnmarshalledCampaignHook;

    /**
     * The limits that apply to each campaign in the project by default. Campaigns can also have their own limits, which override the settings at the project level.
     */
    Limits?: _UnmarshalledCampaignLimits;

    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: _UnmarshalledQuietTime;
}