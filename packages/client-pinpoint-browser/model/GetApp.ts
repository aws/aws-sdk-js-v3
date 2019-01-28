import {GetAppInput} from './GetAppInput';
import {GetAppOutput} from './GetAppOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetApp: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetApp',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}',
    },
    input: {
        shape: GetAppInput,
    },
    output: {
        shape: GetAppOutput,
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