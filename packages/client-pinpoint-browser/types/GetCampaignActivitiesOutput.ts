import {_UnmarshalledActivitiesResponse} from './_ActivitiesResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetCampaignActivitiesOutput shape
 */
export interface GetCampaignActivitiesOutput {
    /**
     * Activities for campaign.
     */
    ActivitiesResponse: _UnmarshalledActivitiesResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
