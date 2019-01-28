import {DeleteApnsSandboxChannelInput} from './DeleteApnsSandboxChannelInput';
import {DeleteApnsSandboxChannelOutput} from './DeleteApnsSandboxChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteApnsSandboxChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteApnsSandboxChannel',
    http: {
        method: 'DELETE',
        requestUri: '/v1/apps/{application-id}/channels/apns_sandbox',
    },
    input: {
        shape: DeleteApnsSandboxChannelInput,
    },
    output: {
        shape: DeleteApnsSandboxChannelOutput,
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