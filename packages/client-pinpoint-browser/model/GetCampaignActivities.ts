import {GetCampaignActivitiesInput} from './GetCampaignActivitiesInput';
import {GetCampaignActivitiesOutput} from './GetCampaignActivitiesOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCampaignActivities: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCampaignActivities',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/activities',
    },
    input: {
        shape: GetCampaignActivitiesInput,
    },
    output: {
        shape: GetCampaignActivitiesOutput,
    },
    errors: [
        {
            shape: BadRequestException,
        },
        {
            shape: InternalServerErrorException,
        },
        {
            shape: ForbiddenException,
        },
        {
            shape: NotFoundException,
        },
        {
            shape: MethodNotAllowedException,
        },
        {
            shape: TooManyRequestsException,
        },
    ],
};