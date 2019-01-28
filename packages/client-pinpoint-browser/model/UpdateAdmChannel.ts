import {UpdateAdmChannelInput} from './UpdateAdmChannelInput';
import {UpdateAdmChannelOutput} from './UpdateAdmChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const UpdateAdmChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'UpdateAdmChannel',
    http: {
        method: 'PUT',
        requestUri: '/v1/apps/{application-id}/channels/adm',
    },
    input: {
        shape: UpdateAdmChannelInput,
    },
    output: {
        shape: UpdateAdmChannelOutput,
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