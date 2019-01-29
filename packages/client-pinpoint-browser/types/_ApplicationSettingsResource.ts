import {_CampaignHook, _UnmarshalledCampaignHook} from './_CampaignHook';
import {_CampaignLimits, _UnmarshalledCampaignLimits} from './_CampaignLimits';
import {_QuietTime, _UnmarshalledQuietTime} from './_QuietTime';

/**
 * Application settings.
 */
export interface _ApplicationSettingsResource {
    /**
     * The unique ID for the application.
     */
    ApplicationId?: string;

    /**
     * Default campaign hook.
     */
    CampaignHook?: _CampaignHook;

    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    LastModifiedDate?: string;

    /**
     * The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own.
     */
    Limits?: _CampaignLimits;

    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: _QuietTime;
}

export interface _UnmarshalledApplicationSettingsResource extends _ApplicationSettingsResource {
    /**
     * Default campaign hook.
     */
    CampaignHook?: _UnmarshalledCampaignHook;

    /**
     * The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own.
     */
    Limits?: _UnmarshalledCampaignLimits;

    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: _UnmarshalledQuietTime;
}