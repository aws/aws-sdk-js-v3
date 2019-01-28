import {GetAdmChannelInput} from './GetAdmChannelInput';
import {GetAdmChannelOutput} from './GetAdmChannelOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetAdmChannel: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetAdmChannel',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/channels/adm',
    },
    input: {
        shape: GetAdmChannelInput,
    },
    output: {
        shape: GetAdmChannelOutput,
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