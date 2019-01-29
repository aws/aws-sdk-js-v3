import {GetGcmChannelInput} from './GetGcmChannelInput';
import {GetGcmChannelOutput} from './GetGcmChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetGcmChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetGcmChannel',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/channels/gcm',
    },
    input: {
        shape: GetGcmChannelInput,
    },
    output: {
        shape: GetGcmChannelOutput,
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