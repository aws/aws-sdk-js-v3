import {GetApnsChannelInput} from './GetApnsChannelInput';
import {GetApnsChannelOutput} from './GetApnsChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetApnsChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetApnsChannel',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/channels/apns',
    },
    input: {
        shape: GetApnsChannelInput,
    },
    output: {
        shape: GetApnsChannelOutput,
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