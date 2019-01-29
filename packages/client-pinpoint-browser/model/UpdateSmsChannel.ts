import {UpdateSmsChannelInput} from './UpdateSmsChannelInput';
import {UpdateSmsChannelOutput} from './UpdateSmsChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateSmsChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateSmsChannel',
    http: {
        method: 'PUT',
        requestUri: '/v1/apps/{application-id}/channels/sms',
    },
    input: {
        shape: UpdateSmsChannelInput,
    },
    output: {
        shape: UpdateSmsChannelOutput,
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