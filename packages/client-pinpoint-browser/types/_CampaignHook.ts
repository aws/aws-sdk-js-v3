/**
 * Campaign hook information.
 */
export interface _CampaignHook {
    /**
     * Lambda function name or arn to be called for delivery
     */
    LambdaFunctionName?: string;

    /**
     * What mode Lambda should be invoked in.
     */
    Mode?: 'DELIVERY'|'FILTER'|string;

    /**
     * Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request
     */
    WebUrl?: string;
}

export type _UnmarshalledCampaignHook = _CampaignHook;