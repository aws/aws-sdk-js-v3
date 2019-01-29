import {GetCampaignVersionInput} from './GetCampaignVersionInput';
import {GetCampaignVersionOutput} from './GetCampaignVersionOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetCampaignVersion: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetCampaignVersion',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}',
    },
    input: {
        shape: GetCampaignVersionInput,
    },
    output: {
        shape: GetCampaignVersionOutput,
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