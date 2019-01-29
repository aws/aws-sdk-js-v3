import {UpdateApnsChannelInput} from './UpdateApnsChannelInput';
import {UpdateApnsChannelOutput} from './UpdateApnsChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateApnsChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateApnsChannel',
    http: {
        method: 'PUT',
        requestUri: '/v1/apps/{application-id}/channels/apns',
    },
    input: {
        shape: UpdateApnsChannelInput,
    },
    output: {
        shape: UpdateApnsChannelOutput,
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