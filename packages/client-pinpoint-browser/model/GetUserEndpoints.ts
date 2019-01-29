import {GetUserEndpointsInput} from './GetUserEndpointsInput';
import {GetUserEndpointsOutput} from './GetUserEndpointsOutput';
import {BadRequestException} from './BadRequestException';
import {InternalServerErrorException} from './InternalServerErrorException';
import {ForbiddenException} from './ForbiddenException';
import {NotFoundException} from './NotFoundException';
import {MethodNotAllowedException} from './MethodNotAllowedException';
import {TooManyRequestsException} from './TooManyRequestsException';
import {OperationModel as _Operation_} from '@aws-sdk/types';
import {ServiceMetadata} from './ServiceMetadata';

export const GetUserEndpoints: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'GetUserEndpoints',
    http: {
        method: 'GET',
        requestUri: '/v1/apps/{application-id}/users/{user-id}',
    },
    input: {
        shape: GetUserEndpointsInput,
    },
    output: {
        shape: GetUserEndpointsOutput,
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