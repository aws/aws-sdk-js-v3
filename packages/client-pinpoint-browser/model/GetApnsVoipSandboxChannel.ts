import {GetApnsVoipSandboxChannelInput} from './GetApnsVoipSandboxChannelInput';
import {GetApnsVoipSandboxChannelOutput} from './GetApnsVoipSandboxChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetApnsVoipSandboxChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetApnsVoipSandboxChannel',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/channels/apns_voip_sandbox',
    },
    input: {
        shape: GetApnsVoipSandboxChannelInput,
    },
    output: {
        shape: GetApnsVoipSandboxChannelOutput,
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