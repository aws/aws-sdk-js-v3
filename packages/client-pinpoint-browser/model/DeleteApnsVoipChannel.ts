import {DeleteApnsVoipChannelInput} from './DeleteApnsVoipChannelInput';
import {DeleteApnsVoipChannelOutput} from './DeleteApnsVoipChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteApnsVoipChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteApnsVoipChannel',
    http: {
        method: 'DELETE',
        requestUri: '/v1/apps/{application-id}/channels/apns_voip',
    },
    input: {
        shape: DeleteApnsVoipChannelInput,
    },
    output: {
        shape: DeleteApnsVoipChannelOutput,
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