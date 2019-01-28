import {DeleteSmsChannelInput} from './DeleteSmsChannelInput';
import {DeleteSmsChannelOutput} from './DeleteSmsChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteSmsChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteSmsChannel',
    http: {
        method: 'DELETE',
        requestUri: '/v1/apps/{application-id}/channels/sms',
    },
    input: {
        shape: DeleteSmsChannelInput,
    },
    output: {
        shape: DeleteSmsChannelOutput,
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